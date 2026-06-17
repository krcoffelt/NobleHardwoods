import { randomUUID } from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { sendLeadEmails } from "@/lib/email";
import { getLeadFiles, validateLeadFields, validateLeadFiles } from "@/lib/lead";
import { createSupabaseAdminClient, getLeadUploadBucket } from "@/lib/supabaseAdmin";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  let formData: FormData;

  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json(
      { ok: false, errors: { form: "Could not read the form submission." } },
      { status: 400 }
    );
  }

  const honeypot = getText(formData, "company");
  const startedAt = Number(getText(formData, "started_at"));

  if (honeypot || (startedAt && Date.now() - startedAt < 1000)) {
    return NextResponse.json({ ok: true, redirectUrl: "/thank-you" });
  }

  const fieldValidation = validateLeadFields(formData);
  const files = getLeadFiles(formData);
  const fileErrors = validateLeadFiles(files);

  if (!fieldValidation.ok || Object.keys(fileErrors).length > 0) {
    return NextResponse.json(
      {
        ok: false,
        errors: {
          ...(!fieldValidation.ok ? fieldValidation.errors : {}),
          ...fileErrors
        }
      },
      { status: 400 }
    );
  }

  const lead = fieldValidation.data;
  const sourcePage = lead.sourcePage || request.headers.get("referer") || "";

  try {
    const supabase = createSupabaseAdminClient();
    const bucket = getLeadUploadBucket();

    const { data: insertedLead, error: leadError } = await supabase
      .from("leads")
      .insert({
        first_name: lead.firstName,
        last_name: lead.lastName,
        email: lead.email,
        phone: lead.phone,
        city: lead.city,
        project_type: lead.projectType,
        message: lead.message,
        preferred_contact_method: lead.preferredContactMethod,
        source_page: sourcePage,
        utm_source: lead.utmSource,
        utm_medium: lead.utmMedium,
        utm_campaign: lead.utmCampaign,
        status: "New"
      })
      .select("id")
      .single();

    if (leadError || !insertedLead?.id) {
      throw new Error(leadError?.message || "Lead insert failed.");
    }

    const leadId = String(insertedLead.id);
    const fileReferences: string[] = [];

    if (files.length > 0) {
      const leadFileRows = [];

      for (const file of files) {
        const objectPath = `leads/${leadId}/${randomUUID()}-${safeFilename(file.name)}`;
        const { error: uploadError } = await supabase.storage.from(bucket).upload(objectPath, file, {
          contentType: file.type,
          upsert: false
        });

        if (uploadError) {
          throw new Error(uploadError.message);
        }

        const publicUrl = supabase.storage.from(bucket).getPublicUrl(objectPath).data.publicUrl;
        const fileReference = publicUrl || `${bucket}/${objectPath}`;

        fileReferences.push(fileReference);
        leadFileRows.push({
          lead_id: leadId,
          file_url: fileReference,
          file_type: file.type,
          uploaded_at: new Date().toISOString()
        });
      }

      const { error: fileInsertError } = await supabase.from("lead_files").insert(leadFileRows);

      if (fileInsertError) {
        throw new Error(fileInsertError.message);
      }
    }

    await sendLeadEmails({
      lead: { ...lead, sourcePage },
      leadId,
      fileReferences
    });

    return NextResponse.json({ ok: true, redirectUrl: "/thank-you" });
  } catch (error) {
    console.error("Lead submission failed", error);

    return NextResponse.json(
      {
        ok: false,
        errors: {
          form: "We could not send your quote request. Please call Noble Hardwoods or try again."
        }
      },
      { status: 500 }
    );
  }
}

function getText(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function safeFilename(filename: string) {
  return filename.toLowerCase().replace(/[^a-z0-9._-]+/g, "-").replace(/^-+|-+$/g, "");
}

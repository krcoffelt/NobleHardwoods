import { NextRequest, NextResponse } from "next/server";
import { sendLeadEmails } from "@/lib/email";
import { validateLeadFields } from "@/lib/lead";
import {
  verifyLeadUploadManifest,
  type PendingLeadUpload
} from "@/lib/leadUploadManifest";
import {
  createSupabaseAdminClient,
  ensureLeadUploadBucket,
  getLeadUploadBucket
} from "@/lib/supabaseAdmin";

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
  const uploadManifestToken = getText(formData, "upload_manifest");
  const uploadManifest = uploadManifestToken
    ? verifyLeadUploadManifest(uploadManifestToken)
    : { ok: true as const, uploads: [] as PendingLeadUpload[] };

  if (!fieldValidation.ok || !uploadManifest.ok) {
    return NextResponse.json(
      {
        ok: false,
        errors: {
          ...(!fieldValidation.ok ? fieldValidation.errors : {}),
          ...(!uploadManifest.ok ? { form: uploadManifest.error } : {})
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
    await ensureLeadUploadBucket(supabase);
    const pendingUploads = uploadManifest.uploads;

    await Promise.all(
      pendingUploads.map(async (upload) => {
        const { data, error } = await supabase.storage.from(bucket).info(upload.pendingPath);

        if (
          error ||
          !data ||
          data.size !== upload.size ||
          data.contentType !== upload.type
        ) {
          throw new Error(error?.message || "A project file did not finish uploading correctly.");
        }
      })
    );

    const { data: insertedLead, error: leadError } = await supabase
      .from("leads")
      .insert({
        first_name: lead.firstName,
        last_name: lead.lastName,
        email: lead.email,
        phone: lead.phone,
        city: lead.city,
        project_type: lead.projectType,
        project_size: lead.projectSize,
        work_options: lead.workOptions,
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

    try {
      if (pendingUploads.length > 0) {
        const uploadedFiles = await Promise.all(
          pendingUploads.map(async (upload) => {
            const filename = upload.pendingPath.split("/").at(-1);

            if (!filename) {
              throw new Error("A project file path was invalid.");
            }

            const objectPath = `leads/${leadId}/${filename}`;
            const { error: moveError } = await supabase.storage
              .from(bucket)
              .move(upload.pendingPath, objectPath);

            if (moveError) {
              throw new Error(moveError.message);
            }

            const { data: signedFile, error: signedFileError } = await supabase.storage
              .from(bucket)
              .createSignedUrl(objectPath, 7 * 24 * 60 * 60, {
                download: upload.name
              });

            if (signedFileError || !signedFile?.signedUrl) {
              throw new Error(
                signedFileError?.message || "Could not create a project file link."
              );
            }

            return {
              reference: signedFile.signedUrl,
              row: {
                lead_id: leadId,
                file_url: `${bucket}/${objectPath}`,
                file_type: upload.type,
                uploaded_at: new Date().toISOString()
              }
            };
          })
        );
        const leadFileRows = uploadedFiles.map((file) => file.row);

        const { error: fileInsertError } = await supabase
          .from("lead_files")
          .insert(leadFileRows);

        if (fileInsertError) {
          throw new Error(fileInsertError.message);
        }

        fileReferences.push(...uploadedFiles.map((file) => file.reference));
      }
    } catch (fileError) {
      console.error(`Lead ${leadId} was saved, but file processing failed`, fileError);
    }

    try {
      const emailResult = await sendLeadEmails({
        lead: { ...lead, sourcePage },
        leadId,
        fileReferences
      });

      const { error: notificationUpdateError } = await supabase
        .from("leads")
        .update({
          notification_status: "Sent",
          customer_email_id: emailResult.customerEmailId,
          internal_email_id: emailResult.internalEmailId,
          notification_error: null
        })
        .eq("id", leadId);

      if (notificationUpdateError) {
        console.error(
          `Lead ${leadId} emails sent, but notification status was not recorded`,
          notificationUpdateError
        );
      }
    } catch (emailError) {
      console.error(`Lead ${leadId} was saved, but email notification failed`, emailError);

      const notificationError =
        emailError instanceof Error ? emailError.message : "Unknown email notification error.";

      const { error: notificationUpdateError } = await supabase
        .from("leads")
        .update({
          notification_status: "Failed",
          notification_error: notificationError.slice(0, 2000)
        })
        .eq("id", leadId);

      if (notificationUpdateError) {
        console.error(
          `Lead ${leadId} notification failure was not recorded`,
          notificationUpdateError
        );
      }
    }

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

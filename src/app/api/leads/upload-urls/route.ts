import { randomUUID } from "crypto";
import { NextRequest, NextResponse } from "next/server";
import {
  validateLeadUploadMetadata,
  type LeadUploadMetadata
} from "@/lib/lead";
import {
  createLeadUploadManifest,
  safeLeadFilename,
  type PendingLeadUpload
} from "@/lib/leadUploadManifest";
import {
  createSupabaseAdminClient,
  ensureLeadUploadBucket,
  getLeadUploadBucket
} from "@/lib/supabaseAdmin";

export const runtime = "nodejs";

type UploadUrlRequest = {
  files?: LeadUploadMetadata[];
};

export async function POST(request: NextRequest) {
  let body: UploadUrlRequest;

  try {
    body = (await request.json()) as UploadUrlRequest;
  } catch {
    return NextResponse.json(
      { ok: false, errors: { form: "Could not read the project files." } },
      { status: 400 }
    );
  }

  const files = Array.isArray(body.files) ? body.files : [];
  const errors = validateLeadUploadMetadata(files);

  if (files.length === 0 || Object.keys(errors).length > 0) {
    return NextResponse.json(
      {
        ok: false,
        errors:
          files.length === 0
            ? { form: "Choose at least one project file." }
            : errors
      },
      { status: 400 }
    );
  }

  try {
    const supabase = createSupabaseAdminClient();
    const bucket = getLeadUploadBucket();
    await ensureLeadUploadBucket(supabase);
    const submissionId = randomUUID();
    const pendingUploads: PendingLeadUpload[] = files.map((file) => ({
      ...file,
      pendingPath: `pending/${submissionId}/${randomUUID()}-${safeLeadFilename(file.name)}`
    }));

    const signedUploads = await Promise.all(
      pendingUploads.map(async (upload) => {
        const { data, error } = await supabase.storage
          .from(bucket)
          .createSignedUploadUrl(upload.pendingPath, { upsert: false });

        if (error || !data?.token) {
          throw new Error(error?.message || "Could not prepare a project file upload.");
        }

        return {
          path: upload.pendingPath,
          token: data.token
        };
      })
    );
    const expiresAt = Date.now() + 2 * 60 * 60 * 1000;

    return NextResponse.json({
      ok: true,
      bucket,
      uploads: signedUploads,
      uploadManifest: createLeadUploadManifest(pendingUploads, expiresAt)
    });
  } catch (error) {
    console.error("Lead upload preparation failed", error);

    return NextResponse.json(
      {
        ok: false,
        errors: {
          form: "We could not prepare your project files. Please try again or submit without files."
        }
      },
      { status: 500 }
    );
  }
}

import { createClient } from "@supabase/supabase-js";
import {
  allowedPhotoTypes,
  allowedVideoTypes,
  leadUploadLimits
} from "./lead";

export function createSupabaseAdminClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const secretKey =
    process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !secretKey) {
    throw new Error("Supabase server configuration is missing.");
  }

  return createClient(supabaseUrl, secretKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  });
}

export function getLeadUploadBucket() {
  return process.env.SUPABASE_LEAD_UPLOAD_BUCKET || "lead-uploads";
}

export async function ensureLeadUploadBucket(
  supabase: ReturnType<typeof createSupabaseAdminClient>
) {
  const bucket = getLeadUploadBucket();
  const allowedMimeTypes = [...allowedPhotoTypes, ...allowedVideoTypes];
  const { data: currentBucket } = await supabase.storage.getBucket(bucket);

  if (!currentBucket) {
    const { error } = await supabase.storage.createBucket(bucket, {
      public: false,
      fileSizeLimit: leadUploadLimits.maxVideoSize,
      allowedMimeTypes
    });

    if (error) {
      throw new Error(error.message);
    }

    return;
  }

  const currentMimeTypes = [...(currentBucket.allowed_mime_types || [])].sort();
  const expectedMimeTypes = [...allowedMimeTypes].sort();
  const needsUpdate =
    currentBucket.public ||
    currentBucket.file_size_limit !== leadUploadLimits.maxVideoSize ||
    currentMimeTypes.join(",") !== expectedMimeTypes.join(",");

  if (needsUpdate) {
    const { error } = await supabase.storage.updateBucket(bucket, {
      public: false,
      fileSizeLimit: leadUploadLimits.maxVideoSize,
      allowedMimeTypes
    });

    if (error) {
      throw new Error(error.message);
    }
  }
}

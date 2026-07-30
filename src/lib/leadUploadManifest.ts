import "server-only";

import { createHmac, timingSafeEqual } from "crypto";
import {
  validateLeadUploadMetadata,
  type LeadUploadKind,
  type LeadUploadMetadata
} from "./lead";

const manifestVersion = 1;
const pendingPathPattern =
  /^pending\/[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}\/[a-z0-9][a-z0-9._-]*$/i;

export type PendingLeadUpload = LeadUploadMetadata & {
  pendingPath: string;
};

type LeadUploadManifestPayload = {
  version: typeof manifestVersion;
  expiresAt: number;
  uploads: PendingLeadUpload[];
};

export function createLeadUploadManifest(
  uploads: PendingLeadUpload[],
  expiresAt: number
) {
  const payload: LeadUploadManifestPayload = {
    version: manifestVersion,
    expiresAt,
    uploads
  };
  const encodedPayload = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const signature = sign(encodedPayload);

  return `${encodedPayload}.${signature}`;
}

export function verifyLeadUploadManifest(token: string) {
  const [encodedPayload, providedSignature, extra] = token.split(".");

  if (!encodedPayload || !providedSignature || extra) {
    return { ok: false as const, error: "The upload authorization is invalid." };
  }

  const expectedSignature = Buffer.from(sign(encodedPayload));
  const actualSignature = Buffer.from(providedSignature);

  if (
    expectedSignature.length !== actualSignature.length ||
    !timingSafeEqual(expectedSignature, actualSignature)
  ) {
    return { ok: false as const, error: "The upload authorization is invalid." };
  }

  let payload: unknown;

  try {
    payload = JSON.parse(Buffer.from(encodedPayload, "base64url").toString("utf8"));
  } catch {
    return { ok: false as const, error: "The upload authorization could not be read." };
  }

  if (!isManifestPayload(payload)) {
    return { ok: false as const, error: "The upload authorization is invalid." };
  }

  if (payload.expiresAt < Date.now()) {
    return { ok: false as const, error: "The upload authorization has expired. Please try again." };
  }

  const metadataErrors = validateLeadUploadMetadata(payload.uploads);

  if (
    Object.keys(metadataErrors).length > 0 ||
    payload.uploads.some((upload) => !pendingPathPattern.test(upload.pendingPath))
  ) {
    return { ok: false as const, error: "The uploaded project files are invalid." };
  }

  return { ok: true as const, uploads: payload.uploads };
}

export function safeLeadFilename(filename: string) {
  return (
    filename
      .toLowerCase()
      .replace(/[^a-z0-9._-]+/g, "-")
      .replace(/^-+|-+$/g, "") || "project-file"
  );
}

function sign(value: string) {
  return createHmac("sha256", getSigningSecret()).update(value).digest("base64url");
}

function getSigningSecret() {
  const secret =
    process.env.LEAD_UPLOAD_SIGNING_SECRET ||
    process.env.SUPABASE_SECRET_KEY ||
    process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!secret) {
    throw new Error("Lead upload signing configuration is missing.");
  }

  return secret;
}

function isManifestPayload(value: unknown): value is LeadUploadManifestPayload {
  if (!value || typeof value !== "object") return false;

  const candidate = value as {
    version?: unknown;
    expiresAt?: unknown;
    uploads?: unknown;
  };

  return (
    candidate.version === manifestVersion &&
    typeof candidate.expiresAt === "number" &&
    Number.isFinite(candidate.expiresAt) &&
    Array.isArray(candidate.uploads) &&
    candidate.uploads.every(isPendingUpload)
  );
}

function isPendingUpload(value: unknown): value is PendingLeadUpload {
  if (!value || typeof value !== "object") return false;

  const candidate = value as {
    name?: unknown;
    type?: unknown;
    size?: unknown;
    kind?: unknown;
    pendingPath?: unknown;
  };

  return (
    typeof candidate.name === "string" &&
    typeof candidate.type === "string" &&
    typeof candidate.size === "number" &&
    isLeadUploadKind(candidate.kind) &&
    typeof candidate.pendingPath === "string"
  );
}

function isLeadUploadKind(value: unknown): value is LeadUploadKind {
  return value === "photo" || value === "video";
}

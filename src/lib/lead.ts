export const projectTypeOptions = [
  "Hardwood Floor Refinishing",
  "Hardwood Floor Installation",
  "Hardwood Floor Repair",
  "Stairs & Railings",
  "Custom Floor/Stain Patterns",
  "LVP",
  "Engineered Hardwoods",
  "Not Sure Yet"
] as const;

export const preferredContactOptions = ["Phone", "Email", "Either"] as const;
export const projectSizeOptions = ["Under 500 sq ft", "500 sq ft or more", "Not sure yet"] as const;
export const workOptionOptions = [
  "Base shoe / quarter round",
  "Baseboards",
  "Furniture moving",
  "Appliance moving",
  "Carpet removal",
  "Old flooring removal",
  "Subfloor repair",
  "Stairs",
  "Railings",
  "Lace-in repair",
  "Flush vents",
  "Stain samples"
] as const;

export type ProjectType = (typeof projectTypeOptions)[number];
export type PreferredContactMethod = (typeof preferredContactOptions)[number];
export type ProjectSize = (typeof projectSizeOptions)[number];
export type WorkOption = (typeof workOptionOptions)[number];

export type LeadInput = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  city: string;
  projectType: ProjectType;
  projectSize: ProjectSize;
  workOptions: WorkOption[];
  message: string;
  preferredContactMethod: PreferredContactMethod;
  sourcePage: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
};

export type LeadValidationResult =
  | { ok: true; data: LeadInput }
  | { ok: false; errors: Record<string, string> };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateLeadFields(formData: FormData): LeadValidationResult {
  const firstName = getText(formData, "first_name");
  const lastName = getText(formData, "last_name");
  const phone = getText(formData, "phone");
  const email = getText(formData, "email").toLowerCase();
  const city = getText(formData, "city");
  const projectType = getText(formData, "project_type");
  const projectSize = getText(formData, "project_size");
  const workOptions = formData
    .getAll("work_options")
    .filter((value): value is string => typeof value === "string" && value.trim().length > 0)
    .map((value) => value.trim());
  const message = getText(formData, "message");
  const preferredContactMethod = getText(formData, "preferred_contact_method");
  const sourcePage = getText(formData, "source_page");
  const utmSource = getText(formData, "utm_source");
  const utmMedium = getText(formData, "utm_medium");
  const utmCampaign = getText(formData, "utm_campaign");

  const errors: Record<string, string> = {};

  if (!firstName) errors.first_name = "First name is required.";
  if (!lastName) errors.last_name = "Last name is required.";
  if (!city) errors.city = "City is required.";
  if (!emailPattern.test(email)) errors.email = "Enter a valid email address.";
  if (phone.replace(/\D/g, "").length < 10) errors.phone = "Enter a valid phone number.";
  if (!isProjectType(projectType)) errors.project_type = "Choose a project type.";
  if (!isProjectSize(projectSize)) errors.project_size = "Choose a project size.";
  if (workOptions.some((option) => !isWorkOption(option))) {
    errors.work_options = "Choose valid work options.";
  }
  if (!isPreferredContactMethod(preferredContactMethod)) {
    errors.preferred_contact_method = "Choose how you would like us to follow up.";
  }
  if (message.length > 2000) errors.message = "Message must be 2,000 characters or less.";

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    data: {
      firstName,
      lastName,
      phone,
      email,
      city,
      projectType: projectType as ProjectType,
      projectSize: projectSize as ProjectSize,
      workOptions: workOptions as WorkOption[],
      message,
      preferredContactMethod: preferredContactMethod as PreferredContactMethod,
      sourcePage,
      utmSource,
      utmMedium,
      utmCampaign
    }
  };
}

export type LeadUploadFiles = {
  photos: File[];
  videos: File[];
};

export function validateLeadFiles({ photos, videos }: LeadUploadFiles) {
  const errors: Record<string, string> = {};
  const allowedPhotoTypes = new Set(["image/jpeg", "image/png", "image/webp", "image/heic", "image/heif"]);
  const allowedVideoTypes = new Set(["video/mp4", "video/quicktime", "video/webm"]);
  const maxPhotoSize = 8 * 1024 * 1024;
  const maxVideoSize = 25 * 1024 * 1024;
  const maxPhotos = 12;
  const maxVideos = 1;

  if (photos.length > maxPhotos) {
    errors.photos = `Upload up to ${maxPhotos} photos.`;
  }

  for (const file of photos) {
    if (!file.name || file.size === 0) continue;
    if (!allowedPhotoTypes.has(file.type)) {
      errors.photos = "Photos must be JPG, PNG, WebP, HEIC, or HEIF files.";
      break;
    }
    if (file.size > maxPhotoSize) {
      errors.photos = "Each photo must be 8 MB or smaller.";
      break;
    }
  }

  if (videos.length > maxVideos) {
    errors.videos = `Upload up to ${maxVideos} video.`;
  }

  for (const file of videos) {
    if (!file.name || file.size === 0) continue;
    if (!allowedVideoTypes.has(file.type)) {
      errors.videos = "Video must be MP4, MOV, or WebM.";
      break;
    }
    if (file.size > maxVideoSize) {
      errors.videos = "Video must be 25 MB or smaller.";
      break;
    }
  }

  return errors;
}

export function getLeadUploadFiles(formData: FormData): LeadUploadFiles {
  const photos = formData
    .getAll("photos")
    .filter((value): value is File => value instanceof File && value.size > 0);
  const videos = formData
    .getAll("videos")
    .filter((value): value is File => value instanceof File && value.size > 0);

  return { photos, videos };
}

export function getLeadFiles(uploadFiles: LeadUploadFiles) {
  return [...uploadFiles.photos, ...uploadFiles.videos];
}

function getText(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function isProjectType(value: string): value is ProjectType {
  return projectTypeOptions.includes(value as ProjectType);
}

function isPreferredContactMethod(value: string): value is PreferredContactMethod {
  return preferredContactOptions.includes(value as PreferredContactMethod);
}

function isProjectSize(value: string): value is ProjectSize {
  return projectSizeOptions.includes(value as ProjectSize);
}

function isWorkOption(value: string): value is WorkOption {
  return workOptionOptions.includes(value as WorkOption);
}

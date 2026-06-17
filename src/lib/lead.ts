export const projectTypeOptions = [
  "Hardwood Floor Refinishing",
  "Hardwood Floor Installation",
  "Hardwood Floor Repair",
  "Dustless Sanding",
  "Stairs & Railings",
  "Custom Floor Pattern",
  "Not Sure Yet"
] as const;

export const preferredContactOptions = ["Phone", "Email", "Either"] as const;

export type ProjectType = (typeof projectTypeOptions)[number];
export type PreferredContactMethod = (typeof preferredContactOptions)[number];

export type LeadInput = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  city: string;
  projectType: ProjectType;
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
      message,
      preferredContactMethod: preferredContactMethod as PreferredContactMethod,
      sourcePage,
      utmSource,
      utmMedium,
      utmCampaign
    }
  };
}

export function validateLeadFiles(files: File[]) {
  const errors: Record<string, string> = {};
  const allowedTypes = new Set(["image/jpeg", "image/png", "image/webp", "image/heic", "image/heif"]);
  const maxFileSize = 8 * 1024 * 1024;
  const maxFiles = 5;

  if (files.length > maxFiles) {
    errors.photos = `Upload up to ${maxFiles} photos.`;
  }

  for (const file of files) {
    if (!file.name || file.size === 0) continue;
    if (!allowedTypes.has(file.type)) {
      errors.photos = "Photos must be JPG, PNG, WebP, HEIC, or HEIF files.";
      break;
    }
    if (file.size > maxFileSize) {
      errors.photos = "Each photo must be 8 MB or smaller.";
      break;
    }
  }

  return errors;
}

export function getLeadFiles(formData: FormData) {
  return formData
    .getAll("photos")
    .filter((value): value is File => value instanceof File && value.size > 0);
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

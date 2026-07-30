"use client";

import type { FormEvent, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import {
  getLeadFiles,
  getLeadUploadFiles,
  getLeadUploadMetadata,
  preferredContactOptions,
  projectSizeOptions,
  projectTypeOptions,
  validateLeadFields,
  validateLeadFiles,
  workOptionOptions
} from "@/lib/lead";
import { ArrowMark } from "./ArrowMark";
import { trackEvent } from "./Tracking";

type FormErrors = Record<string, string>;
type FormBlockId = "contact" | "project" | "notes" | "uploads";
type PreparedUpload = {
  path: string;
  token: string;
};

const fieldClass =
  "min-h-12 w-full rounded-md border border-noble-ink/15 bg-white px-3.5 text-[0.95rem] font-medium text-noble-ink shadow-[0_1px_2px_rgba(37,31,27,0.04)] outline-none transition duration-200 placeholder:text-noble-ink/35 hover:border-noble-ink/25 focus:border-noble-orange focus:ring-[3px] focus:ring-noble-orange/12 sm:px-4";

const labelClass = "text-sm font-semibold leading-tight text-noble-ink";
const helperClass = "text-xs font-normal leading-5 text-noble-ink/55";
const errorClass = "text-xs font-semibold leading-5 text-[#9f2d1c]";

const blockErrorFields: Record<FormBlockId, string[]> = {
  contact: ["first_name", "last_name", "phone", "email", "city"],
  project: ["project_type", "project_size", "work_options", "preferred_contact_method"],
  notes: ["message"],
  uploads: ["photos", "videos"]
};

function getFirstErrorBlock(errors: FormErrors) {
  const blockOrder: FormBlockId[] = ["contact", "project", "notes", "uploads"];
  return blockOrder.find((blockId) =>
    blockErrorFields[blockId].some((fieldName) => Boolean(errors[fieldName]))
  );
}

export function QuoteForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitLabel, setSubmitLabel] = useState("Request quote");
  const [openBlock, setOpenBlock] = useState<FormBlockId | "">("contact");
  const [tracking, setTracking] = useState({
    sourcePage: "",
    utmSource: "",
    utmMedium: "",
    utmCampaign: "",
    startedAt: ""
  });

  useEffect(() => {
    const url = new URL(window.location.href);
    setTracking({
      sourcePage: `${url.pathname}${url.search}`,
      utmSource: url.searchParams.get("utm_source") || "",
      utmMedium: url.searchParams.get("utm_medium") || "",
      utmCampaign: url.searchParams.get("utm_campaign") || "",
      startedAt: String(Date.now())
    });
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const fieldValidation = validateLeadFields(formData);
    const uploadFiles = getLeadUploadFiles(formData);
    const fileErrors = validateLeadFiles(uploadFiles);

    if (!fieldValidation.ok || Object.keys(fileErrors).length > 0) {
      const nextErrors = {
        ...(!fieldValidation.ok ? fieldValidation.errors : {}),
        ...fileErrors
      };
      setErrors(nextErrors);
      setOpenBlock(getFirstErrorBlock(nextErrors) || "contact");
      return;
    }

    setIsSubmitting(true);
    setSubmitLabel("Preparing request...");
    setErrors({});

    try {
      const files = getLeadFiles(uploadFiles);

      if (files.length > 0) {
        const uploadResponse = await fetch("/api/leads/upload-urls", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            files: getLeadUploadMetadata(uploadFiles)
          })
        });
        const uploadResult = (await uploadResponse.json()) as {
          ok?: boolean;
          bucket?: string;
          uploads?: PreparedUpload[];
          uploadManifest?: string;
          errors?: FormErrors;
        };

        if (
          !uploadResponse.ok ||
          !uploadResult.ok ||
          !uploadResult.bucket ||
          !uploadResult.uploadManifest ||
          !uploadResult.uploads
        ) {
          const nextErrors = uploadResult.errors || {
            form: "We could not prepare your project files. Please try again."
          };
          setErrors(nextErrors);
          setOpenBlock(getFirstErrorBlock(nextErrors) || "uploads");
          return;
        }

        setSubmitLabel("Uploading files...");
        await uploadProjectFiles(files, uploadResult.uploads, uploadResult.bucket);
        formData.delete("photos");
        formData.delete("videos");
        formData.set("upload_manifest", uploadResult.uploadManifest);
      }

      setSubmitLabel("Sending request...");
      const response = await fetch("/api/leads", {
        method: "POST",
        body: formData
      });
      const result = (await response.json()) as {
        ok?: boolean;
        redirectUrl?: string;
        errors?: FormErrors;
      };

      if (!response.ok || !result.ok) {
        const nextErrors = result.errors || { form: "Something went wrong. Please try again." };
        setErrors(nextErrors);
        setOpenBlock(getFirstErrorBlock(nextErrors) || "contact");
        return;
      }

      trackEvent("lead_form_submit_success", {
        project_type: String(formData.get("project_type") || ""),
        city: String(formData.get("city") || "")
      });
      window.location.assign(result.redirectUrl || "/thank-you");
    } catch {
      setErrors({
        form: "We could not upload your project files or send the request. Please try again, submit without files, or call Noble Hardwoods."
      });
      setOpenBlock("uploads");
    } finally {
      setIsSubmitting(false);
      setSubmitLabel("Request quote");
    }
  }

  return (
    <form
      id="quote-request-form"
      ref={formRef}
      onSubmit={handleSubmit}
      className="relative mx-auto w-full max-w-full overflow-hidden rounded-md border border-noble-ink/12 bg-white shadow-[0_12px_36px_rgba(60,42,29,0.08)] sm:max-w-xl lg:max-w-none"
      noValidate
    >
      <input type="hidden" name="source_page" value={tracking.sourcePage} />
      <input type="hidden" name="utm_source" value={tracking.utmSource} />
      <input type="hidden" name="utm_medium" value={tracking.utmMedium} />
      <input type="hidden" name="utm_campaign" value={tracking.utmCampaign} />
      <input type="hidden" name="started_at" value={tracking.startedAt} />

      <div className="absolute -left-[9999px] top-auto size-px overflow-hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="border-b border-noble-ink/10 bg-white px-5 py-6 sm:px-8 sm:py-7">
        <h2 className="text-[1.75rem] font-bold leading-tight text-noble-ink sm:text-[2rem]">
          Tell us about your floors.
        </h2>
        <p className="mt-2 max-w-2xl text-sm font-normal leading-6 text-noble-ink/58">
          Share a few details so we can prepare a useful first response.
        </p>
      </div>

      <div className="divide-y divide-noble-ink/10">
        {errors.form ? (
          <div
            role="alert"
            className="m-5 rounded-md border border-[#9f2d1c]/25 bg-[#fff7f5] px-4 py-3 text-sm font-semibold leading-6 text-[#9f2d1c] sm:m-6"
          >
            {errors.form}
          </div>
        ) : null}

        <FormBlock
          id="contact"
          title="Contact details"
          text="Where should we follow up?"
          isOpen={openBlock === "contact"}
          hasError={Boolean(getFirstErrorBlock(errors) === "contact")}
          onToggle={() => setOpenBlock(openBlock === "contact" ? "" : "contact")}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="First name" name="first_name" error={errors.first_name} autoComplete="given-name" />
            <Field label="Last name" name="last_name" error={errors.last_name} autoComplete="family-name" />
            <Field label="Phone" name="phone" type="tel" error={errors.phone} autoComplete="tel" />
            <Field label="Email" name="email" type="email" error={errors.email} autoComplete="email" />
            <Field
              label="City"
              name="city"
              error={errors.city}
              autoComplete="address-level2"
              className="sm:col-span-2"
            />
          </div>
        </FormBlock>

        <FormBlock
          id="project"
          title="Project details"
          text="A rough scope is enough."
          isOpen={openBlock === "project"}
          hasError={Boolean(getFirstErrorBlock(errors) === "project")}
          onToggle={() => setOpenBlock(openBlock === "project" ? "" : "project")}
        >
          <div className="grid gap-5">
            <SelectField label="Project type" name="project_type" error={errors.project_type}>
              <option value="" disabled>
                Choose a project type
              </option>
              {projectTypeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </SelectField>

            <ChoiceGroup
              legend="Approximate floor area"
              helper="A rough under or over 500 sq ft estimate is enough to start."
              name="project_size"
              type="radio"
              options={projectSizeOptions}
              error={errors.project_size}
              columns="sm:grid-cols-3"
              footer={
                <a
                  href="https://www.youtube.com/watch?v=F1QYnVqkeCY"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-semibold text-noble-orange-dark underline decoration-noble-orange/30 underline-offset-4 transition hover:text-noble-ink"
                >
                  Watch how to measure square footage
                </a>
              }
            />

            <ChoiceGroup
              legend="Work options"
              optional
              name="work_options"
              type="checkbox"
              options={workOptionOptions}
              error={errors.work_options}
              columns="sm:grid-cols-2 xl:grid-cols-3"
            />

            <ChoiceGroup
              legend="Preferred contact method"
              name="preferred_contact_method"
              type="radio"
              options={preferredContactOptions}
              defaultValue="Either"
              error={errors.preferred_contact_method}
              columns="sm:grid-cols-3"
            />
          </div>
        </FormBlock>

        <FormBlock
          id="notes"
          title="Project notes"
          text="Rooms, condition, and timing."
          isOpen={openBlock === "notes"}
          hasError={Boolean(getFirstErrorBlock(errors) === "notes")}
          onToggle={() => setOpenBlock(openBlock === "notes" ? "" : "notes")}
        >
          <label className="grid gap-2">
            <span className={labelClass}>Message</span>
            <textarea
              name="message"
              rows={5}
              maxLength={2000}
              placeholder="Example: refinishing living room and hallway, a few pet stains near the back door, hoping to start this fall."
              className={`${fieldClass} min-h-40 py-4`}
              aria-invalid={Boolean(errors.message)}
            />
            <ErrorText message={errors.message} />
          </label>
        </FormBlock>

        <FormBlock
          id="uploads"
          title="Photos and video"
          text="Optional, but helpful."
          isOpen={openBlock === "uploads"}
          hasError={Boolean(getFirstErrorBlock(errors) === "uploads")}
          onToggle={() => setOpenBlock(openBlock === "uploads" ? "" : "uploads")}
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <UploadField
              label="Photos"
              name="photos"
              accept="image/jpeg,image/png,image/webp,image/heic,image/heif"
              multiple
              helper="Upload up to 12 photos. JPG, PNG, WebP, HEIC, or HEIF. Max 8 MB each."
              error={errors.photos}
            />
            <UploadField
              label="Short video"
              name="videos"
              accept="video/mp4,video/quicktime,video/webm"
              helper="Upload one short MP4, MOV, or WebM video. Max 25 MB."
              error={errors.videos}
            />
          </div>
        </FormBlock>

        <div className="bg-white p-5 sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-6">
          <p className="max-w-md text-xs font-normal leading-5 text-noble-ink/55">
            Your details are used only to follow up about this project.
          </p>
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-md bg-noble-orange px-6 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(239,95,61,0.18)] transition duration-200 hover:bg-noble-orange-dark active:translate-y-px disabled:cursor-not-allowed disabled:opacity-60 sm:mt-0 sm:w-auto"
          >
            {isSubmitting ? submitLabel : "Request quote"}
            <ArrowMark className="ml-4" />
          </button>
        </div>
      </div>
    </form>
  );
}

async function uploadProjectFiles(
  files: File[],
  uploads: PreparedUpload[],
  bucket: string
) {
  if (files.length !== uploads.length) {
    throw new Error("Project file upload preparation did not match the selected files.");
  }

  const { createClient } = await import("@/utils/supabase/client");
  const supabase = createClient();
  const batchSize = 3;

  for (let index = 0; index < files.length; index += batchSize) {
    const fileBatch = files.slice(index, index + batchSize);
    const uploadBatch = uploads.slice(index, index + batchSize);

    await Promise.all(
      fileBatch.map(async (file, batchIndex) => {
        const upload = uploadBatch[batchIndex];
        const { error } = await supabase.storage
          .from(bucket)
          .uploadToSignedUrl(upload.path, upload.token, file, {
            contentType: file.type,
            cacheControl: "3600"
          });

        if (error) {
          throw new Error(error.message);
        }
      })
    );
  }
}

type FormBlockProps = {
  id: FormBlockId;
  title: string;
  text?: string;
  children: ReactNode;
  isOpen: boolean;
  hasError: boolean;
  onToggle: () => void;
};

function FormBlock({ id, title, text, children, isOpen, hasError, onToggle }: FormBlockProps) {
  return (
    <section
      className={`bg-white md:grid md:grid-cols-[9.5rem_minmax(0,1fr)] md:gap-8 md:p-8 ${
        hasError ? "bg-[#fff7f5] shadow-[inset_3px_0_0_#9f2d1c] md:bg-white" : ""
      }`}
    >
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-noble-orange md:hidden"
        aria-expanded={isOpen}
        aria-controls={`quote-form-${id}`}
        onClick={onToggle}
      >
        <span className="min-w-0">
          <span className="block text-base font-semibold leading-tight text-noble-ink">{title}</span>
        </span>
        <span
          className={`size-8 shrink-0 rounded-md border border-noble-ink/12 bg-[#faf9f7] ${
            isOpen ? "bg-noble-orange/[0.07]" : ""
          }`}
          aria-hidden="true"
        >
          <span
            className={`mx-auto block size-2.5 border-b-2 border-r-2 border-noble-ink/55 ${
              isOpen ? "mt-3.5 rotate-[225deg]" : "mt-2.5 rotate-45"
            }`}
          />
        </span>
      </button>

      <div className="hidden md:block">
        <h3 className="text-base font-semibold leading-tight text-noble-ink">{title}</h3>
        {text ? <p className="mt-2 text-xs font-normal leading-5 text-noble-ink/52">{text}</p> : null}
      </div>

      <div
        id={`quote-form-${id}`}
        className={`${isOpen ? "grid" : "hidden"} min-w-0 gap-5 border-t border-noble-ink/10 bg-[#fcfbf9] px-5 py-6 md:grid md:border-t-0 md:bg-white md:p-0`}
      >
        {children}
      </div>
    </section>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  error?: string;
  autoComplete?: string;
  className?: string;
};

function Field({ label, name, type = "text", error, autoComplete, className = "" }: FieldProps) {
  return (
    <label className={`grid gap-2 ${className}`}>
      <span className={labelClass}>{label}</span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        className={fieldClass}
        aria-invalid={Boolean(error)}
      />
      <ErrorText message={error} />
    </label>
  );
}

type SelectFieldProps = {
  label: string;
  name: string;
  error?: string;
  children: ReactNode;
};

function SelectField({ label, name, error, children }: SelectFieldProps) {
  return (
    <label className="grid gap-2">
      <span className={labelClass}>{label}</span>
      <select
        name={name}
        defaultValue=""
        className={`${fieldClass} appearance-none bg-[linear-gradient(45deg,transparent_50%,#251f1b_50%),linear-gradient(135deg,#251f1b_50%,transparent_50%)] bg-[length:6px_6px,6px_6px] bg-[position:calc(100%-24px)_50%,calc(100%-18px)_50%] bg-no-repeat pr-12`}
        aria-invalid={Boolean(error)}
      >
        {children}
      </select>
      <ErrorText message={error} />
    </label>
  );
}

type ChoiceGroupProps = {
  legend: string;
  optional?: boolean;
  helper?: string;
  footer?: ReactNode;
  name: string;
  type: "radio" | "checkbox";
  options: readonly string[];
  defaultValue?: string;
  error?: string;
  columns: string;
};

function ChoiceGroup({
  legend,
  optional,
  helper,
  footer,
  name,
  type,
  options,
  defaultValue,
  error,
  columns
}: ChoiceGroupProps) {
  return (
    <fieldset className="grid gap-3.5">
      <div className="grid gap-1.5">
        <legend className={labelClass}>
          {legend}
          {optional ? <span className="font-medium text-noble-ink/48"> (optional)</span> : null}
        </legend>
        {helper || footer ? (
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
            {helper ? <p className={helperClass}>{helper}</p> : <span />}
            {footer}
          </div>
        ) : null}
      </div>
      <div className={`grid gap-2 ${columns}`}>
        {options.map((option) => (
          <label
            key={option}
            className="flex min-h-12 cursor-pointer items-center gap-3 rounded-md border border-noble-ink/12 bg-white px-3.5 text-sm font-medium text-noble-ink shadow-[0_1px_2px_rgba(37,31,27,0.03)] transition duration-200 hover:border-noble-orange/45 hover:bg-noble-orange/[0.025] has-[:checked]:border-noble-orange has-[:checked]:bg-noble-orange/[0.07] has-[:checked]:ring-1 has-[:checked]:ring-noble-orange/20"
          >
            <input
              type={type}
              name={name}
              value={option}
              defaultChecked={defaultValue === option}
              className="size-4 shrink-0 accent-noble-orange"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
      <ErrorText message={error} />
    </fieldset>
  );
}

type UploadFieldProps = {
  label: string;
  name: string;
  accept: string;
  multiple?: boolean;
  helper: string;
  error?: string;
};

function UploadField({ label, name, accept, multiple, helper, error }: UploadFieldProps) {
  return (
    <label className="grid gap-2">
      <span className={labelClass}>
        {label} <span className="font-medium text-noble-ink/48">(optional)</span>
      </span>
      <input
        name={name}
        type="file"
        accept={accept}
        multiple={multiple}
        className="w-full cursor-pointer rounded-md border border-dashed border-noble-ink/20 bg-[#fcfbf9] px-3 py-4 text-xs font-normal text-noble-ink/60 outline-none transition duration-200 file:mr-3 file:rounded-md file:border file:border-noble-ink/12 file:bg-white file:px-3.5 file:py-2.5 file:text-sm file:font-semibold file:text-noble-ink hover:border-noble-orange/45 hover:bg-noble-orange/[0.025] focus:border-noble-orange focus:bg-white focus:ring-[3px] focus:ring-noble-orange/12"
        aria-invalid={Boolean(error)}
      />
      <p className={helperClass}>{helper}</p>
      <ErrorText message={error} />
    </label>
  );
}

function ErrorText({ message }: { message?: string }) {
  if (!message) return null;

  return <span className={errorClass}>{message}</span>;
}

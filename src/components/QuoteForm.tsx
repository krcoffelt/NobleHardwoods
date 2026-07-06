"use client";

import type { FormEvent, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import {
  getLeadUploadFiles,
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

const fieldClass =
  "min-h-[4.125rem] w-full rounded-lg border border-noble-ink/16 bg-white px-4 text-base font-medium text-noble-ink outline-none transition duration-300 placeholder:text-noble-ink/38 focus:border-noble-orange focus:ring-4 focus:ring-noble-orange/14 sm:min-h-[4.35rem] sm:px-5";

const labelClass = "text-[0.95rem] font-bold leading-tight text-noble-ink";
const helperClass = "text-xs font-medium leading-5 text-noble-ink/58";
const errorClass = "text-sm font-bold leading-5 text-[#9f2d1c]";

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
  const [isCompactForm, setIsCompactForm] = useState(false);
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

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 639px)");
    const updateMode = () => setIsCompactForm(mobileQuery.matches);

    updateMode();
    mobileQuery.addEventListener("change", updateMode);

    return () => mobileQuery.removeEventListener("change", updateMode);
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
    setErrors({});

    try {
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
      setErrors({ form: "Something went wrong. Please call Noble Hardwoods or try again." });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="relative mx-auto w-full max-w-full overflow-hidden border border-noble-orange-dark/35 bg-noble-orange shadow-[0_34px_95px_rgba(239,95,61,0.24)] sm:max-w-xl lg:max-w-none"
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

      <div className="bg-noble-ink px-5 py-7 text-white sm:px-8 sm:py-8 lg:px-10">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-noble-orange">
          Project request
        </p>
        <h2 className="carpenter-title mt-4 text-[2.35rem] font-bold text-white sm:text-5xl">
          Tell us about your floors.
        </h2>
        <p className="mt-4 max-w-2xl text-sm font-medium leading-7 text-white/70 sm:text-base">
          Share the basics now. Photos, a short video, and rough square footage help us give a more useful first response.
        </p>
      </div>

      <div className="grid gap-5 px-4 py-5 sm:gap-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
        {errors.form ? (
          <div className="border border-[#9f2d1c]/30 bg-white px-5 py-4 text-sm font-bold leading-6 text-[#9f2d1c]">
            {errors.form}
          </div>
        ) : null}

        <FormBlock
          id="contact"
          title="Contact details"
          text="Use the best phone number and email for project follow-up."
          isCompact={isCompactForm}
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
          text="A rough scope is enough. We can clarify details during follow-up."
          isCompact={isCompactForm}
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
                  href="https://www.youtube.com/results?search_query=how+to+measure+square+footage+for+flooring"
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold uppercase text-noble-orange-dark transition hover:text-noble-ink"
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
          text="Tell us what you are seeing, which rooms are involved, and any timing goals."
          isCompact={isCompactForm}
          isOpen={openBlock === "notes"}
          hasError={Boolean(getFirstErrorBlock(errors) === "notes")}
          onToggle={() => setOpenBlock(openBlock === "notes" ? "" : "notes")}
        >
          <label className="grid gap-2.5">
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
          text="Optional uploads help us understand the floor condition before the first call."
          isCompact={isCompactForm}
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

        <div className="bg-noble-ink p-5 text-white sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-6">
          <p className="text-sm font-medium leading-6 text-white/68">
            Your information stays with Noble Hardwoods and is used only to follow up on your project.
          </p>
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-5 inline-flex min-h-[4.25rem] w-full items-center justify-center rounded-full bg-[#b93d25] px-8 text-sm font-bold uppercase text-white transition duration-300 hover:-translate-y-1 hover:bg-noble-orange-dark active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 sm:mt-0 sm:w-auto"
          >
            {isSubmitting ? "Sending..." : "Send request"}
            <ArrowMark className="ml-4" />
          </button>
        </div>
      </div>
    </form>
  );
}

type FormBlockProps = {
  id: FormBlockId;
  title: string;
  text?: string;
  children: ReactNode;
  isCompact: boolean;
  isOpen: boolean;
  hasError: boolean;
  onToggle: () => void;
};

function FormBlock({ id, title, text, children, isCompact, isOpen, hasError, onToggle }: FormBlockProps) {
  if (isCompact) {
    return (
      <section
        className={`overflow-hidden rounded-lg border bg-white shadow-[0_16px_48px_rgba(37,31,27,0.08)] ${
          hasError ? "border-[#9f2d1c] ring-4 ring-white/35" : "border-white/55"
        }`}
      >
        <button
          type="button"
          className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left"
          aria-expanded={isOpen}
          aria-controls={`quote-form-${id}`}
          onClick={onToggle}
        >
          <span className="min-w-0">
            <span className="block text-lg font-bold leading-tight text-noble-ink">{title}</span>
            {text ? (
              <span className="mt-1.5 block text-sm font-medium leading-6 text-noble-ink/58">
                {text}
              </span>
            ) : null}
          </span>
          <span
            className={`grid size-10 shrink-0 place-items-center rounded-full bg-noble-orange text-2xl font-bold leading-none text-white transition duration-300 ${
              isOpen ? "rotate-45" : ""
            }`}
            aria-hidden="true"
          >
            +
          </span>
        </button>
        <div
          id={`quote-form-${id}`}
          className={`${isOpen ? "grid" : "hidden"} gap-5 border-t border-noble-ink/10 px-4 py-5`}
        >
          {children}
        </div>
      </section>
    );
  }

  return (
    <section className="rounded-lg border border-white/55 bg-white p-4 shadow-[0_16px_48px_rgba(37,31,27,0.08)] sm:p-6">
      <div className="mb-5 grid gap-2">
        <h3 className="text-xl font-bold leading-tight text-noble-ink">{title}</h3>
        {text ? <p className="text-sm font-medium leading-6 text-noble-ink/60">{text}</p> : null}
      </div>
      {children}
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
    <label className={`grid gap-2.5 ${className}`}>
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
    <label className="grid gap-2.5">
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
    <fieldset className="grid gap-3">
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
      <div className={`grid gap-2.5 ${columns}`}>
        {options.map((option) => (
          <label
            key={option}
            className="flex min-h-[3.75rem] cursor-pointer items-center gap-3 rounded-lg border border-noble-ink/14 bg-white px-4 text-sm font-bold text-noble-ink transition duration-300 hover:border-noble-orange/70 hover:bg-noble-orange/6 has-[:checked]:border-[#b93d25] has-[:checked]:bg-[#b93d25] has-[:checked]:text-white"
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
    <label className="grid gap-2.5">
      <span className={labelClass}>
        {label} <span className="font-medium text-noble-ink/48">(optional)</span>
      </span>
      <input
        name={name}
        type="file"
        accept={accept}
        multiple={multiple}
        className="w-full cursor-pointer rounded-lg border border-dashed border-noble-ink/24 bg-white px-4 py-5 text-sm font-medium text-noble-ink outline-none transition duration-300 file:mr-4 file:rounded-full file:border-0 file:bg-noble-ink file:px-5 file:py-3 file:text-sm file:font-bold file:text-white hover:border-noble-orange/70 hover:bg-noble-orange/6 focus:border-noble-orange focus:bg-white focus:ring-4 focus:ring-noble-orange/14"
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

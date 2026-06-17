"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import {
  preferredContactOptions,
  projectTypeOptions,
  validateLeadFields,
  validateLeadFiles
} from "@/lib/lead";
import { ArrowMark } from "./ArrowMark";
import { trackEvent } from "./Tracking";

type FormErrors = Record<string, string>;

export function QuoteForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    const files = formData
      .getAll("photos")
      .filter((value): value is File => value instanceof File && value.size > 0);
    const fileErrors = validateLeadFiles(files);

    if (!fieldValidation.ok || Object.keys(fileErrors).length > 0) {
      setErrors({
        ...(!fieldValidation.ok ? fieldValidation.errors : {}),
        ...fileErrors
      });
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
        setErrors(result.errors || { form: "Something went wrong. Please try again." });
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
      className="noble-shadow relative mx-auto w-full max-w-full border border-white/70 bg-white/95 p-6 ring-1 ring-noble-ink/5 sm:max-w-xl sm:p-8 lg:max-w-none"
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

      <div className="border-b border-noble-ink/10 pb-6">
        <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-noble-orange">
          Get a quote
        </p>
        <h2 className="mt-3 text-3xl font-black uppercase leading-[0.98] tracking-[-0.03em] text-noble-ink sm:text-4xl">
          Tell us about your floors.
        </h2>
        <p className="mt-3 text-sm leading-6 text-noble-ink/68">
          Send a few details and the Noble Hardwoods team will follow up to talk through
          the best next step.
        </p>
      </div>

      {errors.form ? (
        <div className="mt-6 border border-noble-orange/30 bg-noble-orange/[0.08] p-4 text-sm font-semibold text-noble-ink">
          {errors.form}
        </div>
      ) : null}

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Field label="First name" name="first_name" error={errors.first_name} autoComplete="given-name" />
        <Field label="Last name" name="last_name" error={errors.last_name} autoComplete="family-name" />
        <Field label="Phone" name="phone" type="tel" error={errors.phone} autoComplete="tel" />
        <Field label="Email" name="email" type="email" error={errors.email} autoComplete="email" />
        <Field label="City" name="city" error={errors.city} autoComplete="address-level2" />

        <label className="grid gap-2">
          <span className="text-sm font-extrabold uppercase text-noble-ink">Project type</span>
          <select
            name="project_type"
            defaultValue=""
            className="min-h-14 border border-noble-ink/18 bg-cream-50 px-4 text-base text-noble-ink outline-none transition duration-300 focus:border-noble-orange focus:bg-white"
            aria-invalid={Boolean(errors.project_type)}
          >
            <option value="" disabled>
              Choose a project type
            </option>
            {projectTypeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ErrorText message={errors.project_type} />
        </label>
      </div>

      <div className="mt-5 grid gap-5">
        <label className="grid gap-2">
          <span className="text-sm font-extrabold uppercase text-noble-ink">
            Preferred contact method
          </span>
          <div className="grid gap-2 sm:grid-cols-3">
            {preferredContactOptions.map((option) => (
              <label
                key={option}
                className="flex min-h-12 items-center gap-3 border border-noble-ink/14 bg-cream-50 px-4 text-sm font-bold text-noble-ink transition has-[:checked]:border-noble-orange has-[:checked]:bg-white"
              >
                <input
                  type="radio"
                  name="preferred_contact_method"
                  value={option}
                  defaultChecked={option === "Either"}
                  className="size-4 accent-noble-orange"
                />
                {option}
              </label>
            ))}
          </div>
          <ErrorText message={errors.preferred_contact_method} />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-extrabold uppercase text-noble-ink">Message</span>
          <textarea
            name="message"
            rows={5}
            maxLength={2000}
            placeholder="Tell us what is happening with your floors, timeline, and any rooms involved."
            className="border border-noble-ink/18 bg-cream-50 px-4 py-3 text-base text-noble-ink outline-none transition duration-300 placeholder:text-noble-ink/45 focus:border-noble-orange focus:bg-white"
            aria-invalid={Boolean(errors.message)}
          />
          <ErrorText message={errors.message} />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-extrabold uppercase text-noble-ink">
            Photos <span className="font-semibold text-noble-ink/50">(optional)</span>
          </span>
          <input
            name="photos"
            type="file"
            accept="image/jpeg,image/png,image/webp,image/heic,image/heif"
            multiple
            className="border border-dashed border-noble-ink/22 bg-noble-mist px-4 py-5 text-sm text-noble-ink file:mr-4 file:rounded-none file:border-0 file:bg-noble-orange file:px-4 file:py-3 file:text-sm file:font-extrabold file:text-white"
            aria-invalid={Boolean(errors.photos)}
          />
          <p className="text-xs leading-5 text-noble-ink/56">
            Upload up to 5 photos. JPG, PNG, WebP, HEIC, or HEIF. Max 8 MB each.
          </p>
          <ErrorText message={errors.photos} />
        </label>
      </div>

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex min-h-14 items-center justify-center rounded bg-noble-orange px-8 text-sm font-extrabold text-white shadow-soft transition duration-300 hover:bg-noble-orange-dark active:translate-y-px disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Sending..." : "Send quote request"}
          <ArrowMark className="ml-4" />
        </button>
        <p className="text-xs leading-5 text-noble-ink/56">
          Your information stays with Noble Hardwoods and is used only to follow up on your
          project.
        </p>
      </div>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  error?: string;
  autoComplete?: string;
};

function Field({ label, name, type = "text", error, autoComplete }: FieldProps) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-extrabold uppercase text-noble-ink">{label}</span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        className="min-h-14 border border-noble-ink/18 bg-cream-50 px-4 text-base text-noble-ink outline-none transition duration-300 placeholder:text-noble-ink/45 focus:border-noble-orange focus:bg-white"
        aria-invalid={Boolean(error)}
      />
      <ErrorText message={error} />
    </label>
  );
}

function ErrorText({ message }: { message?: string }) {
  if (!message) return null;

  return <span className="text-sm font-semibold text-noble-orange">{message}</span>;
}

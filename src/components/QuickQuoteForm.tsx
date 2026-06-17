"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { ArrowMark } from "./ArrowMark";
import { trackEvent } from "./Tracking";

type QuickQuoteErrors = Record<string, string>;

export function QuickQuoteForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<QuickQuoteErrors>({});
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
        errors?: QuickQuoteErrors;
      };

      if (!response.ok || !result.ok) {
        setErrors(result.errors || { form: "Please check the form and try again." });
        return;
      }

      trackEvent("quick_quote_submit_success", {
        source_page: String(formData.get("source_page") || "")
      });
      window.location.assign(result.redirectUrl || "/thank-you");
    } catch {
      setErrors({ form: "We could not send this request. Please call Noble Hardwoods." });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="noble-shadow bg-white p-5 sm:p-6"
      noValidate
    >
      <input type="hidden" name="project_type" value="Not Sure Yet" />
      <input type="hidden" name="preferred_contact_method" value="Either" />
      <input type="hidden" name="message" value="Homepage quick quote request." />
      <input type="hidden" name="source_page" value={tracking.sourcePage} />
      <input type="hidden" name="utm_source" value={tracking.utmSource} />
      <input type="hidden" name="utm_medium" value={tracking.utmMedium} />
      <input type="hidden" name="utm_campaign" value={tracking.utmCampaign} />
      <input type="hidden" name="started_at" value={tracking.startedAt} />

      <div className="absolute -left-[9999px] top-auto size-px overflow-hidden" aria-hidden="true">
        <label htmlFor="quick-company">Company</label>
        <input id="quick-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="border-b border-noble-ink/10 pb-5">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-noble-orange">
          Quick quote
        </p>
        <h2 className="mt-3 text-2xl font-black uppercase leading-none text-noble-ink sm:text-3xl">
          Tell us where to follow up.
        </h2>
      </div>

      {errors.form ? (
        <p className="mt-4 border border-noble-orange/25 bg-noble-orange/[0.08] p-3 text-sm font-bold text-noble-ink">
          {errors.form}
        </p>
      ) : null}

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <QuickField label="First name" name="first_name" error={errors.first_name} />
        <QuickField label="Last name" name="last_name" error={errors.last_name} />
        <QuickField label="Phone" name="phone" type="tel" error={errors.phone} />
        <QuickField label="Email" name="email" type="email" error={errors.email} />
        <QuickField label="City" name="city" error={errors.city} className="sm:col-span-2" />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-5 inline-flex min-h-14 w-full items-center justify-center bg-noble-orange px-6 text-sm font-extrabold text-white transition hover:bg-noble-orange-dark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Sending..." : "Send quick quote"}
        <ArrowMark className="ml-4" />
      </button>
    </form>
  );
}

function QuickField({
  label,
  name,
  type = "text",
  error,
  className = ""
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="text-xs font-extrabold uppercase tracking-[0.12em] text-noble-ink/70">
        {label}
      </span>
      <input
        name={name}
        type={type}
        className="mt-2 min-h-12 w-full border border-noble-ink/12 bg-cream-50 px-3 text-sm font-semibold text-noble-ink outline-none transition focus:border-noble-orange focus:bg-white"
      />
      {error ? <span className="mt-1 block text-xs font-semibold text-noble-orange">{error}</span> : null}
    </label>
  );
}

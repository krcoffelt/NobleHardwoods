import type { Metadata } from "next";
import Link from "next/link";
import { ThankYouTracking } from "@/components/Tracking";
import { business } from "@/data/site";

export const metadata: Metadata = {
  title: "Quote Request Received",
  description:
    "Thank you for contacting Noble Hardwoods. We received your hardwood flooring quote request.",
  alternates: {
    canonical: "/thank-you"
  }
};

export default function ThankYouPage() {
  return (
    <>
      <ThankYouTracking />
      <section className="bg-[linear-gradient(115deg,#fffdf8_0%,#f7f4ef_58%,#efe0c7_100%)]">
        <div className="mx-auto min-h-[calc(100svh-5rem)] max-w-6xl px-5 py-14 sm:min-h-[calc(100svh-6rem)] sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-8 bg-white p-7 noble-shadow sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
            <div>
              <p className="w-fit border border-noble-orange/30 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-noble-orange">
                Request received
              </p>
              <h1 className="mt-5 max-w-3xl text-[2.65rem] font-black uppercase leading-[0.98] text-noble-ink min-[390px]:text-5xl sm:text-6xl">
                Thanks. We&apos;ll be in touch.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-noble-ink/68">
                Noble Hardwoods received your quote request. Our team will review your
                details and follow up to talk through the best next step.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={business.phoneHref}
                  className="inline-flex min-h-14 items-center justify-center rounded bg-noble-orange px-8 text-sm font-extrabold text-white shadow-soft transition hover:bg-noble-orange-dark active:translate-y-px"
                >
                  Call {business.phone}
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex min-h-14 items-center justify-center rounded border border-noble-ink/14 bg-white px-8 text-sm font-extrabold text-noble-ink transition hover:border-noble-orange hover:text-noble-orange active:translate-y-px"
                >
                  View projects
                </Link>
              </div>
            </div>

            <div className="border border-noble-ink/12 bg-cream-50 p-6">
              <h2 className="text-3xl font-black uppercase leading-tight text-noble-ink">
                What happens next
              </h2>
              <div className="mt-6 grid gap-5">
                {[
                  "We review your project type, size, work options, message, and optional files.",
                  "The team follows up by your preferred contact method when possible.",
                  "Most projects move toward an in-home consultation and clear estimate."
                ].map((item, index) => (
                  <div key={item} className="grid grid-cols-[auto_1fr] gap-4">
                    <span className="grid size-8 place-items-center bg-noble-orange text-xs font-extrabold text-white">
                      {index + 1}
                    </span>
                    <p className="text-sm leading-7 text-noble-ink/72">{item}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm leading-7 text-noble-ink/68">
                Need to add a detail right away? Call Noble Hardwoods at{" "}
                <Link className="font-bold text-noble-ink hover:text-noble-orange" href={business.phoneHref}>
                  {business.phone}
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

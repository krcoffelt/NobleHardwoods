import type { Metadata } from "next";
import Link from "next/link";
import { QuoteForm } from "@/components/QuoteForm";
import { business, faqs } from "@/data/site";

export const metadata: Metadata = {
  title: "Get a Hardwood Flooring Quote in Kansas City",
  description:
    "Contact Noble Hardwoods for hardwood floor refinishing, installation, repair, stairs, railings, and custom hardwood floors in Kansas City and surrounding areas.",
  alternates: {
    canonical: "/contact"
  }
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-cream-50 text-noble-ink">
        <div className="absolute inset-y-0 right-0 hidden w-[55%] bg-noble-mist lg:block" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-[78rem] gap-8 px-5 pb-14 pt-11 sm:gap-10 sm:px-6 sm:py-20 lg:min-h-[64rem] lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:px-8 lg:py-24 xl:px-0">
          <div className="hero-enter-copy min-w-0 lg:sticky lg:top-32 lg:col-start-1">
            <div className="carpenter-eyebrow text-noble-orange">
              <span>Kansas City hardwood quote</span>
            </div>
            <h1 className="carpenter-title mt-5 max-w-xl text-[2.45rem] font-bold text-noble-ink min-[390px]:text-[2.7rem] sm:mt-6 sm:text-6xl lg:text-[4rem]">
              Get a Hardwood Flooring Quote in Kansas City
            </h1>
            <p className="mt-5 max-w-xl text-[0.98rem] leading-7 text-noble-ink/68 sm:mt-6 sm:text-base sm:leading-8">
              Tell us about your floors, add rough square footage, and upload optional photos
              or a short video so the Noble Hardwoods team can talk through your project.
            </p>
            <div className="mt-8 hidden border-y border-noble-ink/12 sm:grid">
              <ContactCard label="Call" href={business.phoneHref} value={business.phone} />
              <ContactCard label="Email" href={business.emailHref} value={business.email} />
              <div className="border-t border-noble-ink/12 py-5">
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-noble-ink/50">
                  Service Area
                </p>
                <p className="mt-2 text-sm font-bold text-noble-ink">
                  Kansas City and surrounding areas
                </p>
              </div>
            </div>
            <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.16em] text-noble-ink/42">
              {business.ownershipLabel}
            </p>
          </div>

          <div className="hero-enter-media min-w-0 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <QuoteForm />
          </div>
        </div>
      </section>

      <section className="carpenter-section-tight bg-white">
        <div className="mx-auto grid max-w-[78rem] gap-12 px-5 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8 xl:px-0">
          <div>
            <p className="carpenter-eyebrow text-noble-orange">
              Contact FAQs
            </p>
            <h2 className="carpenter-title mt-5 text-[2.4rem] font-bold text-noble-ink sm:text-5xl">
              What happens after you reach out?
            </h2>
          </div>
          <div className="divide-y divide-noble-ink/12 border border-noble-ink/12 bg-white">
            {[
              {
                question: "How soon will I hear back?",
                answer:
                  "The Noble Hardwoods team will follow up as soon as possible to learn more about your project and next steps."
              },
              {
                question: "Do you provide in-home estimates?",
                answer:
                  "Yes. Most projects need an in-home consultation so the team can review the floors, measurements, repairs, and finish goals."
              },
              {
                question: "Can I upload photos or video of my floors?",
                answer:
                  "Yes. Photos and one short video are optional, but they can help the team understand wear, damage, room layout, and possible repair needs."
              },
              ...faqs.slice(2, 4)
            ].map((faq) => (
              <details key={faq.question} className="group p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-extrabold text-noble-ink">
                  {faq.question}
                  <span className="text-2xl text-noble-orange group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm leading-7 text-noble-ink/68">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ContactCard({ label, href, value }: { label: string; href: string; value: string }) {
  return (
    <Link href={href} className="border-t border-noble-ink/12 py-5 transition first:border-t-0 hover:text-noble-orange">
      <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-noble-ink/50">
        {label}
      </p>
      <p className="mt-2 text-sm font-bold text-noble-ink">{value}</p>
    </Link>
  );
}

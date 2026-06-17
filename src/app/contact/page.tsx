import type { Metadata } from "next";
import Image from "next/image";
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
      <section className="bg-noble-mist">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:px-8 lg:py-20">
          <div className="min-w-0 lg:col-start-1">
            <div className="flex max-w-full flex-wrap items-center gap-x-6 gap-y-3 text-sm font-extrabold uppercase tracking-[0.16em] text-noble-orange">
              <span>Kansas City hardwood quote</span>
              <span className="h-0.5 w-14 shrink-0 bg-noble-orange" />
            </div>
            <h1 className="mt-8 max-w-xl text-[2.65rem] font-black uppercase leading-[0.98] text-noble-ink min-[390px]:text-5xl sm:text-6xl">
              Get a Hardwood Flooring Quote in Kansas City
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-noble-ink/68">
              Tell us about your floors, and the Noble Hardwoods team will follow up to talk
              through your project.
            </p>
          </div>

          <div className="min-w-0 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <QuoteForm />
          </div>

          <div className="min-w-0 lg:col-start-1">
            <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <ContactCard label="Call" href={business.phoneHref} value={business.phone} />
              <ContactCard label="Email" href={business.emailHref} value={business.email} />
              <div className="border border-noble-ink/12 bg-white p-5">
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-noble-orange">
                  Service Area
                </p>
                <p className="mt-2 text-sm font-bold text-noble-ink">
                  Kansas City and surrounding areas
                </p>
              </div>
            </div>

            <div className="relative mt-10 hidden aspect-[1.25/1] overflow-hidden lg:block">
              <Image
                src="/images/projects/kitchen-hardwood-floors.jpg"
                alt="Natural hardwood floors in a bright kitchen"
                fill
                className="object-cover"
                sizes="38vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-extrabold uppercase tracking-[0.18em] text-noble-orange">
            Contact FAQs
          </p>
          <h2 className="mt-4 text-center font-serif text-4xl leading-tight text-noble-ink">
            What happens after you reach out?
          </h2>
          <div className="mt-10 divide-y divide-noble-ink/12 border border-noble-ink/12 bg-white">
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
                question: "Can I upload photos of my floors?",
                answer:
                  "Yes. Photos are optional, but they can help the team understand wear, damage, room layout, and possible repair needs."
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
    <Link href={href} className="border border-noble-ink/12 bg-white p-5 transition hover:border-noble-orange">
      <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-noble-orange">
        {label}
      </p>
      <p className="mt-2 text-sm font-bold text-noble-ink">{value}</p>
    </Link>
  );
}

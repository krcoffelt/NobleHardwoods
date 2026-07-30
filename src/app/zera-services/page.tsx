import type { Metadata } from "next";
import Link from "next/link";
import { ArrowMark } from "@/components/ArrowMark";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ButtonLink } from "@/components/ButtonLink";
import { JsonLd } from "@/components/JsonLd";
import { getAbsoluteUrl, getAreaSchema } from "@/data/launch";
import { business, socialShareImage } from "@/data/site";

export const metadata: Metadata = {
  title: "Zera Services LLC | Kansas City Contracting Services",
  description:
    "Call Zera Services LLC for painting, drywall, and general contracting services across the Kansas City metro.",
  alternates: {
    canonical: "/zera-services"
  },
  openGraph: {
    title: "Zera Services LLC | Kansas City Contracting Services",
    description:
      "Painting, drywall, and practical general contracting help for Kansas City homeowners.",
    url: "/zera-services",
    images: [socialShareImage]
  },
  twitter: {
    card: "summary_large_image",
    title: "Zera Services LLC | Kansas City Contracting Services",
    description:
      "Painting, drywall, and practical general contracting help for Kansas City homeowners.",
    images: [socialShareImage]
  }
};

const zeraServices = [
  {
    number: "01",
    title: "Painting",
    text: "Interior painting and related finish work for homes throughout the Kansas City metro."
  },
  {
    number: "02",
    title: "Drywall",
    text: "Drywall installation, repair, patching, and preparation for a clean finished surface."
  },
  {
    number: "03",
    title: "General contracting",
    text: "Other practical home projects that fall outside Noble Hardwoods’ flooring specialty."
  }
];

export default function ZeraServicesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Zera Services LLC",
    url: getAbsoluteUrl("/zera-services"),
    telephone: business.zeraPhone,
    areaServed: getAreaSchema(),
    description:
      "Kansas City painting, drywall, and general contracting services from Zera Services LLC."
  };

  return (
    <>
      <JsonLd data={schema} />
      <Breadcrumbs items={[{ label: "Zera Services", href: "/zera-services" }]} />

      <section className="relative isolate overflow-hidden bg-cream-50">
        <div className="carpenter-line-art absolute inset-y-0 right-0 hidden w-[42%] bg-noble-ink lg:block" />
        <div className="carpenter-container relative grid gap-10 py-12 sm:gap-12 sm:py-24 lg:min-h-[39rem] lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:py-28">
          <div className="max-w-3xl">
            <p className="carpenter-eyebrow text-noble-ink">Other contracting services</p>
            <h1 className="home-hero-title mt-5 text-[2.85rem] font-black uppercase text-noble-ink min-[390px]:text-[3.2rem] sm:mt-6 sm:text-7xl lg:text-[5.2rem]">
              Zera Services,
              <span className="mt-2 block text-noble-orange">LLC.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-noble-ink/68 sm:mt-7 sm:text-lg sm:leading-9">
              Painting, drywall, and general contracting help for Kansas City homeowners—all from
              the company that owns Noble Hardwoods.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row">
              <ButtonLink href={business.zeraPhoneHref} className="min-h-14 w-full px-7 text-base sm:min-h-16 sm:w-auto sm:px-9">
                Call {business.zeraPhone} <ArrowMark className="ml-5" />
              </ButtonLink>
              <ButtonLink href="/" variant="secondary" className="hidden min-h-16 px-9 sm:inline-flex">
                Visit Noble Hardwoods
              </ButtonLink>
            </div>
          </div>

          <aside className="relative z-10 hidden border-t-4 border-noble-orange bg-noble-ink p-7 text-white shadow-[0_30px_90px_rgba(27,25,23,0.24)] sm:block sm:p-10 lg:ml-8">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-noble-orange">
              Call to discuss your project
            </p>
            <p className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl">
              A straightforward first conversation about the work your home needs.
            </p>
            <a
              href={business.zeraPhoneHref}
              className="mt-8 inline-flex min-h-14 w-full items-center justify-between border border-white/28 px-5 text-base font-bold text-white transition hover:border-noble-orange hover:bg-noble-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-noble-orange"
            >
              {business.zeraPhone}
              <ArrowMark />
            </a>
          </aside>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-28">
        <div className="carpenter-container">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <p className="carpenter-eyebrow text-noble-ink">How Zera can help</p>
              <h2 className="carpenter-title mt-5 text-[2.25rem] font-bold text-noble-ink sm:mt-6 sm:text-6xl">
                Practical help beyond hardwood floors.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-noble-ink/68 sm:text-lg sm:leading-9 lg:justify-self-end">
              Noble Hardwoods remains focused on flooring. Zera Services is the contact for
              painting, drywall, and other contracting work.
            </p>
          </div>

          <div className="mt-10 grid border-y border-noble-ink/12 sm:mt-14 lg:grid-cols-3">
            {zeraServices.map((service) => (
              <article
                key={service.title}
                className="border-b border-noble-ink/12 py-6 last:border-b-0 sm:py-8 lg:border-b-0 lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
              >
                <p className="text-sm font-bold tabular-nums text-noble-orange">{service.number}</p>
                <h3 className="mt-3 text-2xl font-bold text-noble-ink sm:mt-8 sm:text-3xl">{service.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-7 text-noble-ink/64 sm:mt-4 sm:text-base sm:leading-8">{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-woodgrain py-14 text-white sm:py-24">
        <div className="carpenter-container grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="carpenter-eyebrow text-white">Have a project in mind?</p>
            <h2 className="carpenter-title mt-5 max-w-3xl text-[2.25rem] font-bold text-white sm:text-6xl">
              Talk directly with Zera Services.
            </h2>
          </div>
          <Link
            href={business.zeraPhoneHref}
            className="inline-flex min-h-14 items-center justify-center bg-noble-orange px-7 text-base font-bold text-white transition hover:-translate-y-0.5 hover:bg-noble-orange-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:min-h-16 sm:px-8"
          >
            Call {business.zeraPhone} <ArrowMark className="ml-5" />
          </Link>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowMark } from "@/components/ArrowMark";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABand } from "@/components/CTABand";
import { FAQSection } from "@/components/FAQSection";
import { InteriorHero } from "@/components/InteriorHero";
import { JsonLd } from "@/components/JsonLd";
import { getAbsoluteUrl } from "@/data/launch";
import { faqs, services } from "@/data/site";

export const metadata: Metadata = {
  title: "Hardwood Flooring Services in Kansas City",
  description:
    "Explore Noble Hardwoods services for hardwood floor installation, refinishing, repair, dustless sanding, stairs, railings, and custom hardwood floors in Kansas City.",
  alternates: {
    canonical: "/services"
  },
  openGraph: {
    title: "Hardwood Flooring Services in Kansas City | Noble Hardwoods",
    description:
      "Kansas City hardwood flooring services from Noble Hardwoods, including installation, refinishing, repair, stairs, railings, and custom floors.",
    url: "/services",
    images: [{ url: "/images/projects/living-room-hardwood-floors.jpg" }]
  }
};

export default function ServicesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Hardwood Flooring Services in Kansas City",
    url: getAbsoluteUrl("/services"),
    hasPart: services.map((service) => ({
      "@type": "Service",
      name: service.title,
      url: getAbsoluteUrl(service.href),
      description: service.description
    }))
  };

  return (
    <>
      <JsonLd data={schema} />
      <Breadcrumbs items={[{ label: "Services", href: "/services" }]} />
      <InteriorHero
        eyebrow="Our Services"
        title="Kansas City's hardwood flooring team."
        text="Noble Hardwoods offers a comprehensive set of hardwood services for homeowners who want careful work, clear communication, and floors that feel right for the home."
        image="/images/projects/living-room-hardwood-floors.jpg"
        imageAlt="Finished hardwood floors in a bright Kansas City living room"
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-px bg-noble-ink/12 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-white p-6 transition duration-300 hover:bg-cream-50"
              >
                <Image src={service.icon} alt="" width={54} height={54} className="size-12" />
                <p className="mt-6 text-xs font-black uppercase tracking-[0.16em] text-noble-orange">
                  {service.eyebrow}
                </p>
                <h2 className="mt-3 text-2xl font-black uppercase leading-tight text-noble-ink">
                  {service.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-noble-ink/68">{service.description}</p>
                <span className="mt-6 inline-flex items-center gap-3 text-sm font-extrabold uppercase text-noble-ink transition group-hover:text-noble-orange">
                  View service <ArrowMark />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs.slice(0, 5)} title="Hardwood service questions" />

      <CTABand
        title="Ready for some new floors?"
        text="Tell us what your floors need and the Noble Hardwoods team will help with the next step."
      />
    </>
  );
}

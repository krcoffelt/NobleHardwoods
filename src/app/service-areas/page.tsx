import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABand } from "@/components/CTABand";
import { FAQSection } from "@/components/FAQSection";
import { InteriorHero } from "@/components/InteriorHero";
import { JsonLd } from "@/components/JsonLd";
import { getAbsoluteUrl, getAreaSchema } from "@/data/launch";
import { business, faqs, serviceAreas, services } from "@/data/site";

export const metadata: Metadata = {
  title: "Kansas City Hardwood Flooring Service Areas",
  description:
    "Noble Hardwoods serves Kansas City, Overland Park, Leawood, Lenexa, Prairie Village, Mission Hills, Fairway, Shawnee, Olathe, and nearby areas.",
  alternates: {
    canonical: "/service-areas"
  },
  openGraph: {
    title: "Kansas City Hardwood Flooring Service Areas | Noble Hardwoods",
    description:
      "Hardwood floor refinishing, installation, repair, stairs, railings, and custom floors across the Kansas City metro.",
    url: "/service-areas",
    images: [{ url: "/images/noble-hardwoods-hero.jpg" }]
  }
};

export default function ServiceAreasPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: business.name,
    url: getAbsoluteUrl("/service-areas"),
    telephone: business.phone,
    email: business.email,
    areaServed: getAreaSchema(),
    image: getAbsoluteUrl("/images/noble-hardwoods-hero.jpg"),
    priceRange: "$$"
  };

  return (
    <>
      <JsonLd data={schema} />
      <Breadcrumbs items={[{ label: "Service Areas", href: "/service-areas" }]} />
      <InteriorHero
        eyebrow="Kansas City Metro"
        title="Hardwood flooring across the Kansas City area."
        text="Noble Hardwoods installs, refinishes, repairs, and restores hardwood floors for homeowners throughout Kansas City and nearby communities."
        image="/images/noble-hardwoods-hero.jpg"
        imageAlt="Warm hardwood floors in a Kansas City home"
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="w-fit border border-noble-orange/30 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-noble-orange">
              Local Service
            </p>
            <h2 className="mt-5 text-4xl font-black uppercase leading-[0.96] tracking-normal text-noble-ink">
              Local roots. Careful work. Clear communication.
            </h2>
            <p className="mt-5 text-base leading-8 text-noble-ink/68">
              This index keeps the launch site simple while creating a strong foundation for
              future dedicated city pages.
            </p>
          </div>
          <div className="grid gap-px bg-noble-ink/12 sm:grid-cols-2">
            {serviceAreas.map((area) => (
              <Link
                key={area}
                href="/contact"
                data-track="service_area_quote_click"
                className="bg-white p-5 text-sm font-extrabold uppercase text-noble-ink transition hover:bg-cream-50 hover:text-noble-orange"
              >
                {area}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-noble-mist py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="w-fit border border-noble-orange/30 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-noble-orange">
              Hardwood Services
            </p>
            <h2 className="mt-5 text-4xl font-black uppercase leading-[0.96] tracking-normal text-noble-ink">
              The same Noble standard across every service area.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="border border-transparent bg-white p-6 transition hover:-translate-y-1 hover:border-noble-orange/35 hover:bg-cream-50"
              >
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-noble-orange">
                  {service.eyebrow}
                </p>
                <h3 className="mt-3 text-lg font-extrabold text-noble-ink">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-noble-ink/68">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection
        faqs={faqs.slice(0, 4)}
        title="Kansas City service-area questions"
        className="bg-white"
      />

      <CTABand
        title="Need hardwood help near Kansas City?"
        text="Tell us where the project is and what your floors need. Noble Hardwoods will follow up with the next step."
      />
    </>
  );
}

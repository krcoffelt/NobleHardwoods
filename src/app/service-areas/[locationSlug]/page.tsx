import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABand } from "@/components/CTABand";
import { FAQSection } from "@/components/FAQSection";
import { InteriorHero } from "@/components/InteriorHero";
import { JsonLd } from "@/components/JsonLd";
import { LocationGallery } from "@/components/LocationGallery";
import { LocationProjectSpotlight } from "@/components/LocationProjectSpotlight";
import { LocationServiceSections } from "@/components/LocationServiceSections";
import { LocationTestimonial } from "@/components/LocationTestimonial";
import { NearbyServiceAreas } from "@/components/NearbyServiceAreas";
import { getAbsoluteUrl } from "@/data/launch";
import {
  getLocationFaqs,
  getLocationHeroImage,
  getNearbyServiceAreas,
  getServiceAreaPage,
  serviceAreaPages
} from "@/data/serviceAreaPages";
import { business, featuredProjects, socialShareImage } from "@/data/site";

type LocationPageProps = {
  params: Promise<{ locationSlug: string }>;
};

export function generateStaticParams() {
  return serviceAreaPages.map((area) => ({ locationSlug: area.slug }));
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { locationSlug } = await params;
  const area = getServiceAreaPage(locationSlug);

  if (!area) return {};

  const title = area.seoTitle ?? `Hardwood Flooring ${area.city} ${area.state}`;
  const description =
    area.metaDescription ??
    `Hardwood floor refinishing, installation, and repair in ${area.city}, ${area.state}, backed by ${area.projectCount}+ completed Noble projects.`;

  return {
    title: area.seoTitle ? { absolute: area.seoTitle } : title,
    description,
    alternates: { canonical: area.href },
    openGraph: {
      title: area.seoTitle ?? `${title} | Noble Hardwoods`,
      description,
      url: area.href,
      images: [socialShareImage]
    },
    twitter: {
      card: "summary_large_image",
      title: area.seoTitle ?? `${title} | Noble Hardwoods`,
      description,
      images: [socialShareImage]
    }
  };
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { locationSlug } = await params;
  const area = getServiceAreaPage(locationSlug);

  if (!area) notFound();

  const nearbyAreas = getNearbyServiceAreas(area);
  const heroImage = getLocationHeroImage(area);
  const localFaqs = getLocationFaqs(area);
  const locationProjects = area.featuredProjectSlugs
    .map((slug) => featuredProjects.find((project) => project.slug === slug))
    .filter((project): project is (typeof featuredProjects)[number] => Boolean(project));
  const projectCountDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC"
  }).format(new Date(`${area.projectCountAsOf}T00:00:00Z`));

  const description =
    area.metaDescription ??
    `Hardwood floor refinishing, installation, and repair in ${area.city}, ${area.state}, backed by ${area.projectCount}+ completed local projects.`;
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${getAbsoluteUrl(area.href)}#service`,
    name: `Hardwood Flooring Services in ${area.city}, ${area.state}`,
    serviceType: "Hardwood flooring installation, refinishing, and repair",
    description,
    url: getAbsoluteUrl(area.href),
    mainEntityOfPage: getAbsoluteUrl(area.href),
    areaServed: {
      "@type": "City",
      name: `${area.city}, ${area.state}`
    },
    provider: {
      "@id": business.schemaId,
      "@type": "HomeAndConstructionBusiness",
      name: business.name,
      url: business.siteUrl,
      telephone: business.phone,
      email: business.email,
      logo: getAbsoluteUrl(business.logo),
      priceRange: "$$"
    },
    image: getAbsoluteUrl(heroImage.src),
    subjectOf: locationProjects.map((project) => ({
      "@type": "CreativeWork",
      "@id": `${getAbsoluteUrl(project.href)}#project`,
      name: project.title,
      url: getAbsoluteUrl(project.href)
    }))
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <Breadcrumbs
        items={[
          { label: "Service Areas", href: "/service-areas" },
          { label: `${area.city}, ${area.state}`, href: area.href }
        ]}
      />
      <InteriorHero
        eyebrow={`${area.city}, ${area.state}`}
        title={`Hardwood flooring services in ${area.city}.`}
        text={
          area.heroText ??
          `Local hardwood floor refinishing, installation, repair, stairs, and custom work from a Kansas City team that cares for the home as much as the finished floor.`
        }
        image={heroImage.src}
        imageAlt={heroImage.alt}
        proof={{
          value: `${area.projectCount}+`,
          label: `Projects completed in ${area.city}`,
          note: `Project history through ${projectCountDate}`
        }}
      />

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:px-8">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-noble-orange">
              Local experience
            </p>
            <h2 className="mt-4 max-w-lg text-4xl font-bold uppercase leading-[0.96] text-noble-ink sm:text-5xl">
              {area.introHeading ?? "Hardwood work shaped around the home."}
            </h2>
          </div>
          <div className="border-l-4 border-noble-orange pl-6 sm:pl-8">
            <p className="max-w-2xl text-xl font-bold leading-8 text-noble-ink">
              {area.localContext}
            </p>
            {area.marketOverview.length > 0 ? (
              area.marketOverview.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-5 max-w-2xl text-base leading-8 text-noble-ink/68"
                >
                  {paragraph}
                </p>
              ))
            ) : (
              <p className="mt-5 max-w-2xl text-base leading-8 text-noble-ink/68">
                Noble starts by looking at the wood, the condition of the floor, and the way
                each space connects. That leads to a practical scope for repair, refinishing,
                installation, or custom work—and a finish designed to hold up to daily life.
              </p>
            )}
          </div>
        </div>
      </section>

      <LocationProjectSpotlight
        city={area.city}
        state={area.state}
        projectSlugs={area.featuredProjectSlugs}
      />
      <LocationServiceSections area={area} />
      <LocationGallery city={area.city} images={area.gallery} />
      <LocationTestimonial city={area.city} review={area.localReview} />
      <NearbyServiceAreas areas={nearbyAreas} />

      <FAQSection
        faqs={localFaqs}
        title={`Hardwood flooring questions in ${area.city}`}
        className="bg-white"
      />
      <CTABand
        title={`Planning hardwood work in ${area.city}?`}
        text="Tell us about the rooms, floor condition, and result you have in mind. Noble Hardwoods will follow up with a clear next step."
      />
    </>
  );
}

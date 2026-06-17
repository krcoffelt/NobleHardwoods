import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowMark } from "@/components/ArrowMark";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABand } from "@/components/CTABand";
import { FAQSection } from "@/components/FAQSection";
import { InteriorHero } from "@/components/InteriorHero";
import { JsonLd } from "@/components/JsonLd";
import { RelatedServices } from "@/components/RelatedServices";
import {
  getAbsoluteUrl,
  getAreaSchema,
  getFeaturedProjectSchema,
  getReviewSchema,
  getServicePage,
  servicePages
} from "@/data/launch";
import { business, featuredProjects, reviews } from "@/data/site";

type ServicePageProps = {
  params: Promise<{ serviceSlug: string }>;
};

export function generateStaticParams() {
  return servicePages.map((service) => ({ serviceSlug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { serviceSlug } = await params;
  const page = getServicePage(serviceSlug);

  if (!page) return {};

  return {
    title: page.seoTitle,
    description: page.metaDescription,
    alternates: {
      canonical: page.href
    },
    openGraph: {
      title: `${page.seoTitle} | Noble Hardwoods`,
      description: page.metaDescription,
      url: page.href,
      images: [
        {
          url: page.image,
          alt: page.imageAlt
        }
      ]
    }
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { serviceSlug } = await params;
  const page = getServicePage(serviceSlug);

  if (!page) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.title,
    serviceType: page.title,
    description: page.metaDescription,
    url: getAbsoluteUrl(page.href),
    areaServed: getAreaSchema(),
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: business.name,
      url: business.siteUrl,
      telephone: business.phone,
      email: business.email,
      image: getAbsoluteUrl("/images/noble-hardwoods-hero.jpg"),
      priceRange: "$$"
    },
    review: getReviewSchema()
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <Breadcrumbs items={[{ label: page.title, href: page.href }]} />
      <InteriorHero
        eyebrow={page.eyebrow}
        title={page.h1}
        text={page.intro}
        image={page.image}
        imageAlt={page.imageAlt}
      />

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <h2 className="text-4xl font-black uppercase leading-[0.96] tracking-[-0.035em] text-noble-ink sm:text-5xl">
              Hardwood work planned around the home, not a generic checklist.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-noble-ink/68">
              Every project starts with the floor condition, the rooms involved, and the
              result you want to live with for years.
            </p>
          </div>
          <div className="grid gap-px bg-noble-ink/12 sm:grid-cols-2">
            {page.includes.map((item, index) => (
              <div key={item} className="bg-white p-6">
                <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-noble-orange">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 text-sm font-extrabold text-noble-ink">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-noble-mist py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-4xl font-black uppercase leading-[0.96] tracking-[-0.035em] text-noble-ink">
              Built for real Kansas City homes.
            </h2>
            <div className="mt-8 grid gap-4">
              {page.problems.map((problem) => (
                <div key={problem} className="border-l-4 border-noble-orange bg-white p-5">
                  <p className="text-sm font-bold leading-7 text-noble-ink">{problem}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-black uppercase leading-[0.96] tracking-[-0.035em] text-noble-ink">
              Clear steps before work begins.
            </h2>
            <div className="mt-8 grid gap-5">
              {page.process.map((step, index) => (
                <div key={step} className="grid grid-cols-[auto_1fr] gap-4">
                  <span className="grid size-9 place-items-center bg-noble-ink text-xs font-extrabold text-white">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-7 text-noble-ink/72">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <JsonLd data={{ "@context": "https://schema.org", "@graph": getFeaturedProjectSchema() }} />
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="max-w-xl text-4xl font-black uppercase leading-[0.96] tracking-[-0.035em] text-noble-ink">
                Recent hardwood work across the Kansas City metro.
              </h2>
            </div>
            <Link
              href="/projects"
              data-track="projects_index_click"
              className="inline-flex items-center gap-3 text-sm font-extrabold uppercase text-noble-ink hover:text-noble-orange"
            >
              View projects <ArrowMark />
            </Link>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {featuredProjects.slice(0, 3).map((project) => (
              <Link key={project.title} href={project.href} className="group" data-track="project_card_click">
                <div className="relative aspect-[1.18/1] overflow-hidden bg-noble-mist">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />
                </div>
                <h3 className="mt-4 text-sm font-extrabold uppercase text-noble-ink">
                  {project.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-noble-mist py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <h2 className="text-4xl font-black uppercase leading-[0.96] tracking-[-0.035em] text-noble-ink">
              Trusted by homeowners who care about the details.
            </h2>
          </div>
          <div className="grid gap-5">
            {reviews.slice(0, 2).map((review) => (
              <figure key={review.name} className="border-l-4 border-noble-orange bg-white p-6">
                <blockquote className="text-base leading-7 text-noble-ink">
                  {review.quote}
                </blockquote>
                <figcaption className="mt-4 text-sm font-extrabold uppercase text-noble-ink">
                  {review.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={page.faqs} className="bg-white" title={`${page.title} questions`} />
      <RelatedServices currentHref={page.href} hrefs={page.relatedServices} />
      <CTABand
        title="Ready to talk through your floors?"
        text="Send a few project details and Noble Hardwoods will follow up with a clear next step."
      />
    </>
  );
}

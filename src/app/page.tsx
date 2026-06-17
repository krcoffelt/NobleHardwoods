import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { CTABand } from "@/components/CTABand";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import {
  business,
  faqs,
  featuredProjects,
  processSteps,
  reviews,
  serviceAreas,
  services,
  values
} from "@/data/site";
import { getAbsoluteUrl, getAreaSchema, getReviewSchema } from "@/data/launch";

export const metadata: Metadata = {
  title: "Kansas City Hardwood Flooring Company",
  description:
    "Noble Hardwoods installs, refinishes, repairs, and restores hardwood floors throughout Kansas City, Overland Park, Leawood, Lenexa, Prairie Village, and nearby areas.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Kansas City Hardwood Flooring Company | Noble Hardwoods",
    description:
      "Hardwood floor refinishing, installation, repair, stairs, railings, and custom wood floor patterns across the Kansas City metro.",
    url: "/",
    images: [
      {
        url: "/images/noble-hardwoods-hero.jpg",
        width: 1672,
        height: 941,
        alt: "Premium hardwood floors in a warm Kansas City home"
      }
    ]
  }
};

export default function Home() {
  const serviceRail = [services[1], services[0], services[2], services[3]];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: business.name,
    url: business.siteUrl,
    telephone: business.phone,
    email: business.email,
    areaServed: getAreaSchema(),
    image: getAbsoluteUrl("/images/noble-hardwoods-hero.jpg"),
    priceRange: "$$",
    description:
      "Kansas City hardwood flooring company offering refinishing, installation, repair, dustless sanding, stairs, railings, and custom hardwood floors.",
    review: getReviewSchema()
  };

  return (
    <>
      <JsonLd data={jsonLd} />

      <section className="relative isolate overflow-hidden bg-noble-mist">
        <div className="absolute inset-y-0 right-0 hidden w-[58%] lg:block">
          <Image
            src="/images/noble-hardwoods-hero.jpg"
            alt="Premium hardwood floors in a warm Kansas City home"
            fill
            priority
            className="hero-curve object-cover"
            sizes="58vw"
          />
        </div>

        <div className="mx-auto grid min-h-[38rem] max-w-7xl items-center px-5 py-14 sm:px-6 lg:grid-cols-[0.48fr_0.52fr] lg:px-8 lg:py-20">
          <div className="relative z-10 min-w-0">
            <div className="flex items-center gap-6 text-sm font-extrabold uppercase text-noble-orange">
              <span>Kansas City Hardwood</span>
              <span className="h-0.5 w-14 bg-noble-orange" />
            </div>
            <h1 className="mt-8 max-w-xl text-[2.9rem] font-black uppercase leading-[0.96] text-noble-ink min-[390px]:text-5xl sm:text-7xl lg:text-7xl">
              Hardwood,
              <span className="mt-2 block text-noble-orange">Done Right.</span>
            </h1>
            <div className="mt-10 flex items-center gap-6">
              <span className="h-0.5 w-14 bg-noble-orange" />
              <p className="text-sm font-extrabold uppercase text-noble-ink/82">
                Crafted floors. Lasting beauty.
              </p>
            </div>
            <div className="mt-9">
              <ButtonLink href="/contact" className="min-h-16 px-8 text-base">
                Get a quote <span className="ml-5 text-2xl leading-none">→</span>
              </ButtonLink>
            </div>
          </div>

          <div className="relative mt-12 h-80 overflow-hidden rounded lg:hidden">
            <Image
              src="/images/noble-hardwoods-hero.jpg"
              alt="Premium hardwood floors in a warm Kansas City home"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1023px) 100vw, 1px"
            />
          </div>
        </div>
      </section>

      <section id="services" className="relative z-10 bg-white">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:-mt-16 lg:px-8">
          <div className="grid overflow-hidden bg-white shadow-soft sm:grid-cols-2 lg:grid-cols-4">
            {serviceRail.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                data-track="service_card_click"
                className="group flex min-h-36 items-center gap-5 border-b border-noble-ink/10 p-7 transition hover:bg-noble-mist sm:border-r lg:border-b-0"
              >
                <Image
                  src={service.icon}
                  alt=""
                  width={54}
                  height={54}
                  className="size-12 object-contain"
                />
                <div className="flex flex-1 items-center justify-between gap-4">
                  <h2 className="text-sm font-extrabold uppercase text-noble-ink">
                    {service.eyebrow}
                  </h2>
                  <span className="text-2xl text-noble-ink transition group-hover:translate-x-1 group-hover:text-noble-orange">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-noble-orange">
                Featured Projects
              </p>
              <h2 className="mt-4 max-w-xl font-serif text-4xl leading-tight text-noble-ink sm:text-5xl">
                Real floors. Real homes.
              </h2>
            </div>
            <Link
              href="/projects"
              data-track="projects_index_click"
              className="inline-flex items-center gap-4 text-sm font-extrabold uppercase text-noble-ink hover:text-noble-orange"
            >
              View all projects <span className="text-2xl">→</span>
            </Link>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProjects.map((project) => (
              <Link key={project.title} href="/projects" className="group" data-track="project_card_click">
                <div className="relative aspect-[1.15/1] overflow-hidden bg-noble-mist">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
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

      <section className="border-y border-noble-ink/10 bg-noble-mist py-8">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-3 lg:px-8">
          {[
            ["Kansas City Based", "Local roots. Local pride."],
            ["Craftsmanship First", "Detail in every plank."],
            ["Free Estimates", "Honest quotes. No pressure."]
          ].map(([title, text], index) => (
            <div
              key={title}
              className={`flex items-center gap-5 ${index > 0 ? "lg:border-l lg:border-noble-ink/14 lg:pl-10" : ""}`}
            >
              <span className="grid size-14 place-items-center rounded-full border border-noble-orange/50 text-2xl text-noble-orange">
                {index === 0 ? "⌖" : index === 1 ? "✧" : "▤"}
              </span>
              <div>
                <h2 className="text-sm font-extrabold uppercase text-noble-ink">{title}</h2>
                <p className="mt-1 text-sm text-noble-ink/68">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="process" className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-noble-orange">
              Process
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-noble-ink sm:text-5xl">
              A clear path from first look to final walkthrough.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-noble-ink/68">
              Noble Hardwoods keeps the project simple to understand, from the first quote
              request to care instructions after the work is complete.
            </p>
          </div>
          <div className="grid gap-4">
            {processSteps.slice(0, 6).map((step, index) => (
              <div key={step} className="grid grid-cols-[auto_1fr] gap-5 border-b border-noble-ink/10 pb-5 last:border-b-0">
                <span className="grid size-10 place-items-center bg-noble-orange text-sm font-extrabold text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-base font-extrabold text-noble-ink">{step}</h3>
                  <p className="mt-2 text-sm leading-7 text-noble-ink/68">
                    Clear communication, careful planning, and detailed hardwood work at each step.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-noble-orange">
              Why Noble
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-noble-ink sm:text-5xl">
              Noble floors crafted by noble people.
            </h2>
          </div>
          <div className="grid gap-px bg-noble-ink/12 sm:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="bg-white p-7">
                <h3 className="text-sm font-extrabold uppercase text-noble-ink">{value.title}</h3>
                <p className="mt-4 text-sm leading-7 text-noble-ink/68">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-noble-mist py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-noble-orange">
              Reviews
            </p>
            <h2 className="mt-4 max-w-xl font-serif text-4xl leading-tight text-noble-ink sm:text-5xl">
              Trusted by Kansas City homeowners.
            </h2>
          </div>
          <div className="grid gap-5">
            {reviews.map((review) => (
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

      <CTABand
        title="Beautiful floors. Built to last."
        text="Let's bring your space to life with timeless craftsmanship."
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-noble-orange">
              Service Areas
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-noble-ink">
              Proudly serving the Kansas City metro area.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {serviceAreas.map((area) => (
              <Link
                key={area}
                href="/service-areas"
                className="border border-noble-ink/12 px-4 py-2 text-sm font-bold text-noble-ink transition hover:border-noble-orange hover:text-noble-orange"
              >
                {area}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs.slice(0, 5)} />
    </>
  );
}

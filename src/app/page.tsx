import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowMark } from "@/components/ArrowMark";
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

      <section className="relative isolate overflow-hidden bg-[linear-gradient(115deg,#fffdf8_0%,#f7f4ef_48%,#efe0c7_100%)]">
        <div className="hero-curve absolute inset-y-0 right-0 hidden w-[50%] overflow-hidden bg-noble-mist lg:block xl:w-[56%]">
          <Image
            src="/images/noble-hardwoods-hero.jpg"
            alt="Premium hardwood floors in a warm Kansas City home"
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1280px) 56vw, 50vw"
          />
        </div>

        <div className="mx-auto grid min-h-[38rem] max-w-7xl items-center px-5 py-14 sm:px-6 lg:grid-cols-[0.46fr_0.54fr] lg:px-8 lg:py-20 xl:grid-cols-[0.48fr_0.52fr]">
          <div className="relative z-10 min-w-0">
            <div className="inline-flex items-center gap-4 border border-noble-orange/30 bg-white/55 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-noble-orange">
              <span>Kansas City Hardwood</span>
            </div>
            <h1 className="mt-8 max-w-[31rem] text-[2.65rem] font-black uppercase leading-[0.94] tracking-[-0.04em] text-noble-ink min-[390px]:text-5xl sm:text-7xl lg:text-[4.15rem] xl:max-w-xl xl:text-7xl">
              Hardwood floors
              <span className="mt-2 block text-noble-orange">built to last.</span>
            </h1>
            <p className="mt-7 max-w-md text-base font-medium leading-8 text-noble-ink/72">
              Refinishing, installation, repair, stairs, and custom hardwood work for Kansas City homes.
            </p>
            <div className="mt-8 flex max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row">
              <ButtonLink href="/contact" className="min-h-16 px-8 text-base active:translate-y-px">
                Get a quote <ArrowMark className="ml-5" />
              </ButtonLink>
              <ButtonLink href={business.phoneHref} variant="secondary" className="min-h-16 px-8 active:translate-y-px">
                Call {business.phone}
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
          <div className="noble-shadow grid overflow-hidden bg-white sm:grid-cols-2 lg:grid-cols-4">
            {serviceRail.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                data-track="service_card_click"
                className="group flex min-h-36 items-center gap-5 border-b border-noble-ink/10 p-7 transition duration-300 hover:bg-noble-mist active:translate-y-px sm:border-r lg:border-b-0"
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
                  <ArrowMark className="text-noble-ink transition group-hover:translate-x-1 group-hover:text-noble-orange" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-black uppercase leading-[0.96] tracking-[-0.035em] text-noble-ink sm:text-6xl">
              Real floors. Real homes.
            </h2>
            <p className="mt-5 text-base leading-8 text-noble-ink/68">
              Project proof matters. These homes show the warmth, clean lines, and finish quality Noble is built around.
            </p>
            <Link
              href="/projects"
              data-track="projects_index_click"
              className="mt-6 inline-flex items-center gap-4 text-sm font-extrabold uppercase text-noble-ink hover:text-noble-orange"
            >
              View all projects <ArrowMark />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-[1.18fr_0.82fr]">
            <Link href="/projects" className="group block" data-track="project_card_click">
              <div className="noble-shadow relative aspect-[1.16/1] overflow-hidden bg-noble-mist">
                <Image
                  src={featuredProjects[0].image}
                  alt={featuredProjects[0].alt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 58vw, 100vw"
                />
              </div>
              <h3 className="mt-5 text-xl font-extrabold text-noble-ink">{featuredProjects[0].title}</h3>
            </Link>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              {featuredProjects.slice(1, 4).map((project) => (
                <Link key={project.title} href="/projects" className="group grid gap-4 sm:grid-cols-[0.9fr_1fr] lg:grid-cols-[0.92fr_1fr]" data-track="project_card_click">
                  <div className="relative aspect-[1.25/1] overflow-hidden bg-noble-mist">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(min-width: 1024px) 25vw, 50vw"
                    />
                  </div>
                  <div className="flex items-center border-t border-noble-ink/12 py-4">
                    <h3 className="text-sm font-extrabold uppercase leading-6 text-noble-ink">
                      {project.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-noble-orange py-10 text-white">
        <div className="mx-auto grid max-w-7xl gap-0 px-5 sm:px-6 lg:grid-cols-3 lg:px-8">
          {[
            ["Kansas City Based", "Local roots. Local pride."],
            ["Craftsmanship First", "Detail in every plank."],
            ["Free Estimates", "Honest quotes. No pressure."]
          ].map(([title, text]) => (
            <div
              key={title}
              className="border-white/25 py-6 first:pt-0 last:pb-0 sm:py-7 lg:border-l lg:px-10 lg:first:border-l-0 lg:first:pl-0 lg:last:pr-0"
            >
              <h2 className="text-lg font-extrabold text-white">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-white/82">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="process" className="bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
          <div>
            <h2 className="text-4xl font-black uppercase leading-[0.96] tracking-[-0.035em] text-noble-ink sm:text-5xl">
              A clear path from first look to final walkthrough.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-noble-ink/68">
              Noble Hardwoods keeps the project simple to understand, from the first quote
              request to care instructions after the work is complete.
            </p>
          </div>
          <div className="grid gap-4">
            {processSteps.slice(0, 5).map((step, index) => (
              <div key={step} className="grid grid-cols-[auto_1fr] gap-5 border-b border-noble-ink/10 pb-5 last:border-b-0">
                <span className="grid size-10 place-items-center bg-noble-ink text-sm font-extrabold text-white">
                  {index + 1}
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

      <section id="about" className="bg-[linear-gradient(115deg,#fffdf8,#f7f4ef)] py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:px-8">
          <div>
            <h2 className="max-w-2xl text-4xl font-black uppercase leading-[0.96] tracking-[-0.035em] text-noble-ink sm:text-5xl">
              Noble floors crafted by noble people.
            </h2>
            <div className="noble-shadow relative mt-10 aspect-[1.28/1] overflow-hidden bg-noble-mist">
              <Image
                src="/images/projects/kitchen-hardwood-floors.jpg"
                alt="Natural hardwood floors in a bright kitchen"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
          <div>
            <p className="text-base leading-8 text-noble-ink/68">
              Detail matters because the floor becomes part of daily life. Noble Hardwoods keeps the work careful, clear, and grounded in the home.
            </p>
            <div className="mt-8 grid gap-5">
            {values.map((value) => (
              <div key={value.title} className="border-t border-noble-ink/12 pt-5">
                <h3 className="text-base font-extrabold text-noble-ink">{value.title}</h3>
                <p className="mt-2 text-sm leading-7 text-noble-ink/68">{value.text}</p>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-black uppercase leading-[0.96] tracking-[-0.035em] text-noble-ink sm:text-6xl">
              The trust we&apos;ve earned
            </h2>
            <p className="mt-5 text-xl font-black text-noble-ink sm:text-2xl">
              Noble Hardwoods Google Reviews
            </p>
          </div>

          <div className="mt-14 grid gap-8 border-y border-noble-ink/10 py-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-3xl font-normal text-noble-ink">
                <span className="font-black text-noble-orange">Google</span> Rating
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="text-3xl font-black text-noble-ink">5.0</span>
                <span className="text-3xl leading-none text-noble-orange" aria-label="5 star rating">
                  ★★★★★
                </span>
                <span className="text-base text-noble-ink/58">Google reviews</span>
              </div>
            </div>
            <Link
              href="https://g.page/r/CVDjg6Cs_lh_EAE/review"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-14 items-center justify-center bg-noble-orange px-8 text-base font-extrabold text-white transition hover:bg-noble-orange-dark"
            >
              Write A Review
            </Link>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {reviews.map((review, index) => {
              const reviewDates = ["Recent review", "Recent review", "Recent review"];
              return (
                <figure key={review.name} className="bg-white">
                  <div className="flex items-center gap-4">
                    <div className="grid size-14 shrink-0 place-items-center rounded-full bg-noble-ink text-xl font-black text-white">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <figcaption className="text-lg font-black text-noble-ink">
                        {review.name}
                      </figcaption>
                      <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span className="text-xl leading-none text-noble-orange" aria-label="5 star rating">
                          ★★★★★
                        </span>
                        <span className="text-sm text-noble-ink/55">{reviewDates[index]}</span>
                      </div>
                    </div>
                  </div>
                  <blockquote className="mt-5 text-xl leading-8 text-noble-ink">
                    {review.quote}
                  </blockquote>
                  <p className="mt-6 flex items-center gap-3 text-sm text-noble-ink/62">
                    <span className="grid size-9 place-items-center rounded-full bg-cream-50 text-lg font-black text-noble-orange">
                      G
                    </span>
                    <span>
                      Posted on <span className="font-bold text-noble-orange">Google</span>
                    </span>
                  </p>
                </figure>
              );
            })}
          </div>
        </div>
      </section>

      <CTABand
        title="Beautiful floors. Built to last."
        text="Let's bring your space to life with timeless craftsmanship."
      />

      <section className="bg-noble-mist py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-8 border-b border-noble-ink/12 pb-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="w-fit border border-noble-orange/30 bg-white/55 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-noble-orange">
                Service Areas
              </p>
              <h2 className="mt-5 max-w-2xl text-4xl font-black uppercase leading-[0.96] tracking-[-0.035em] text-noble-ink sm:text-5xl">
              Proudly serving the Kansas City metro area.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-noble-ink/68 lg:justify-self-end">
              Local hardwood work for Kansas City homes, from Brookside to Leawood and beyond.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-px bg-noble-ink/12 sm:grid-cols-3 lg:grid-cols-7">
            {serviceAreas.map((area) => (
              <Link
                key={area}
                href="/service-areas"
                className="group flex min-h-24 items-end bg-white p-4 transition duration-300 hover:bg-noble-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-noble-orange sm:min-h-28"
              >
                <span className="text-sm font-black uppercase leading-tight text-noble-ink transition group-hover:text-white">
                  {area}
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-8 flex justify-start">
            <Link
              href="/service-areas"
              className="inline-flex min-h-12 items-center justify-center bg-noble-ink px-6 text-sm font-extrabold text-white transition hover:bg-noble-orange"
            >
              View all service areas
            </Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs.slice(0, 5)} />
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowMark } from "@/components/ArrowMark";
import { ButtonLink } from "@/components/ButtonLink";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { QuoteForm } from "@/components/QuoteForm";
import {
  business,
  blogPosts,
  faqs,
  processSteps,
  reviews,
  serviceAreas,
  services,
  socialShareImage
} from "@/data/site";
import { getAbsoluteUrl, getAreaSchema, getReviewSchema } from "@/data/launch";
import { durasealStains, getDurasealStainImage } from "@/data/stains";

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
    images: [socialShareImage]
  },
  twitter: {
    card: "summary_large_image",
    title: "Kansas City Hardwood Flooring Company | Noble Hardwoods",
    description:
      "Hardwood floor refinishing, installation, repair, stairs, railings, and custom wood floor patterns across the Kansas City metro.",
    images: [socialShareImage]
  }
};

export default function Home() {
  const serviceRail = [services[1], services[0], services[2], services[3]];
  const featuredStains = ["neutral", "golden-brown", "dark-walnut", "jacobean"]
    .map((slug) => durasealStains.find((stain) => stain.slug === slug))
    .filter((stain): stain is (typeof durasealStains)[number] => Boolean(stain));
  const trustPoints = [
    {
      value: "15+",
      label: "Years"
    },
    {
      value: "5.0",
      label: "Google rating"
    },
    {
      value: "Free",
      label: "Estimates"
    }
  ];
  const serviceVisuals = [
    {
      ...services[1],
      image: "/images/project-flooring/apartment-kitchen-hardwood-floor-1.webp",
      alt: "Natural hardwood floor installation in a modern apartment kitchen"
    },
    {
      ...services[0],
      image: "/images/project-flooring/guillen-home-kitchen-hardwood-floor-3.webp",
      alt: "Richly finished hardwood floors throughout a bright open kitchen"
    },
    {
      ...services[2],
      image: "/images/project-flooring/robinson-home-galley-kitchen-hardwood-floor.webp",
      alt: "Restored hardwood floor running through a remodeled galley kitchen"
    }
  ];
  const homeProjectGallery = [
    {
      title: "Warm hardwood throughout an apartment living room",
      href: "/projects",
      label: "Recent work",
      image: "/images/project-flooring/apartment-living-room-hardwood-floor.webp",
      alt: "Warm hardwood flooring throughout a furnished apartment living room"
    },
    {
      title: "Natural hardwood in a light-filled dining room",
      href: "/projects",
      label: "Recent work",
      image: "/images/project-flooring/guillen-home-dining-room-hardwood-floor.webp",
      alt: "Natural hardwood flooring in the Guillen home dining room"
    },
    {
      title: "Restored hardwood in a comfortable bedroom",
      href: "/projects",
      label: "Recent work",
      image: "/images/project-flooring/robinson-home-bedroom-hardwood-floor-2.webp",
      alt: "Restored hardwood flooring in a bright Robinson home bedroom"
    }
  ];
  const resourceCards = blogPosts.slice(0, 3);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": business.schemaId,
    name: business.name,
    url: business.siteUrl,
    telephone: business.phone,
    email: business.email,
    areaServed: getAreaSchema(),
    image: getAbsoluteUrl("/images/project-flooring/apartment-kitchen-hardwood-floor-2.webp"),
    logo: getAbsoluteUrl(business.logo),
    sameAs: [business.instagram],
    priceRange: "$$",
    description:
      "Kansas City hardwood flooring company offering refinishing, installation, repair, stairs, railings, and custom hardwood floors, with dustless sanding available.",
    review: getReviewSchema()
  };

  return (
    <>
      <JsonLd data={jsonLd} />

      <section className="relative isolate overflow-hidden bg-cream-50">
        <div className="hero-curve hero-enter-media absolute inset-y-0 right-0 hidden w-[50%] overflow-hidden bg-noble-mist lg:block xl:w-[56%]">
          <Image
            src="/images/project-flooring/apartment-kitchen-hardwood-floor-2.webp"
            alt="Finished hardwood floor in a modern apartment kitchen completed by Noble Hardwoods"
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1280px) 56vw, 50vw"
          />
        </div>

        <div className="mx-auto grid max-w-[78rem] items-center px-5 pb-8 pt-10 sm:px-6 sm:pb-12 sm:pt-14 lg:min-h-[38rem] lg:grid-cols-[0.46fr_0.54fr] lg:px-8 lg:py-16 xl:grid-cols-[0.48fr_0.52fr] xl:px-0">
          <div className="hero-enter-copy relative z-10 min-w-0">
            <div className="inline-flex items-center gap-4 text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-noble-orange sm:text-xs">
              <span>Kansas City Hardwood</span>
            </div>
            <h1 className="home-hero-title mt-5 max-w-[31rem] text-[2.8rem] font-black uppercase tracking-normal text-noble-ink min-[390px]:text-[3.2rem] sm:mt-7 sm:text-7xl lg:text-[4.15rem] xl:max-w-xl xl:text-7xl">
              Hardwood floors
              <span className="mt-1 block text-noble-orange sm:mt-2">built to last.</span>
            </h1>
            <p className="mt-5 max-w-md text-[0.98rem] font-medium leading-7 text-noble-ink/70 sm:mt-7 sm:text-base sm:leading-8">
              Refinishing, installation, repair, stairs, and custom hardwood work for Kansas City homes.
            </p>
            <div className="mt-6 grid max-w-md grid-cols-2 gap-2.5 sm:mt-8 sm:flex sm:max-w-none sm:gap-3">
              <ButtonLink href="#quote" className="min-h-14 px-4 text-sm sm:min-h-16 sm:px-8 sm:text-base">
                Get a quote <ArrowMark className="ml-5" />
              </ButtonLink>
              <ButtonLink href={business.phoneHref} variant="secondary" className="min-h-14 px-4 sm:min-h-16 sm:px-8">
                <span className="sm:hidden">Call now</span>
                <span className="hidden sm:inline">Call {business.phone}</span>
              </ButtonLink>
            </div>
          </div>

          <div className="relative mt-8 aspect-[1.32/1] overflow-hidden rounded-sm bg-noble-mist sm:mt-10 sm:aspect-[1.6/1] lg:hidden">
            <Image
              src="/images/project-flooring/apartment-kitchen-hardwood-floor-2.webp"
              alt="Finished hardwood floor in a modern apartment kitchen completed by Noble Hardwoods"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1023px) 100vw, 1px"
            />
          </div>
        </div>

        <Link
          href="#quote"
          className="carpenter-scroll-cue absolute bottom-20 right-[4vw] z-20 hidden size-20 place-items-center rounded-full border border-white/65 bg-noble-orange text-white shadow-[0_20px_60px_rgba(27,25,23,0.24)] lg:grid xl:right-[6vw]"
          aria-label="Scroll to the quote form"
        >
          <ArrowMark className="rotate-90" />
        </Link>
      </section>

      <section className="relative z-10 bg-white" aria-label="Featured hardwood flooring services">
        <div className="mx-auto max-w-[74rem] px-5 sm:px-6 lg:-mt-14 lg:px-8 xl:px-0">
          <div className="noble-shadow grid grid-cols-2 overflow-hidden border border-noble-ink/8 bg-white lg:grid-cols-4">
            {serviceRail.map((service, index) => (
              <Link
                key={service.href}
                href={service.href}
                data-track="service_card_click"
                data-reveal
                className="group flex min-h-28 flex-col items-start justify-center gap-3 border-b border-r border-noble-ink/10 p-4 transition duration-300 even:border-r-0 hover:bg-cream-50 sm:min-h-32 sm:flex-row sm:items-center sm:gap-4 sm:p-6 lg:border-b-0 lg:border-r lg:even:border-r"
              >
                <Image
                  src={service.icon}
                  alt=""
                  width={54}
                  height={54}
                  className="size-9 object-contain sm:size-12"
                />
                <div className="flex flex-1 items-center justify-between gap-4">
                  <h2 className="text-[0.68rem] font-extrabold uppercase leading-4 text-noble-ink sm:text-sm">
                    <span className="sr-only">Service {index + 1}: </span>
                    {service.eyebrow}
                  </h2>
                  <ArrowMark className="hidden text-noble-ink transition group-hover:translate-x-1 group-hover:text-noble-orange sm:block" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="quote" className="relative overflow-hidden bg-noble-mist py-16 sm:py-28 lg:py-36">
        <div className="carpenter-container grid gap-8 sm:gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:items-start">
          <div className="lg:sticky lg:top-28" data-reveal>
            <p className="carpenter-eyebrow text-noble-ink">Get a quote</p>
            <h2 className="carpenter-title mt-5 max-w-xl text-[2.3rem] font-bold text-noble-ink sm:mt-6 sm:text-6xl lg:text-[4rem]">
              Tell us what your floors need.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-noble-ink/68 sm:mt-7 sm:text-lg sm:leading-9">
              Add your project type, contact preference, work options, message, and optional photos or video so the first response is more useful.
            </p>
            <div className="mt-8 hidden border-y border-noble-ink/12 sm:grid">
              <Link href={business.emailHref} className="py-5 transition hover:text-noble-orange">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-noble-ink/55">Send us an email</span>
                <span className="mt-2 block text-lg font-bold text-noble-ink">{business.email}</span>
              </Link>
              <Link href={business.phoneHref} className="border-t border-noble-ink/12 py-5 transition hover:text-noble-orange">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-noble-ink/55">Give us a call</span>
                <span className="mt-2 block text-lg font-bold text-noble-ink">{business.phone}</span>
              </Link>
            </div>
          </div>
          <div data-reveal>
            <QuoteForm />
          </div>
        </div>
      </section>

      <section aria-label="Noble Hardwoods trust highlights" className="border-y border-noble-ink/8 bg-cream-50">
        <div className="carpenter-container grid md:grid-cols-[1.1fr_1.9fr] md:items-center">
          <div className="py-5 md:pr-8" data-reveal>
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-noble-orange">
              Trusted locally
            </p>
            <p className="mt-1 text-base font-bold leading-tight text-noble-ink sm:text-lg">
              Kansas City craftsmanship, clearly delivered.
            </p>
          </div>
          <dl className="grid grid-cols-3 border-t border-noble-ink/10 md:border-l md:border-t-0">
                {trustPoints.map((point) => (
                  <div
                    key={point.label}
                    className="border-l border-noble-ink/10 px-3 py-4 first:border-l-0 min-[430px]:px-4 sm:px-5 md:py-6 lg:flex lg:items-center lg:gap-3 lg:px-7"
                    data-reveal
                  >
                    <dt className="text-lg font-bold leading-none text-noble-orange sm:text-xl">
                      {point.value}
                    </dt>
                    <dd className="mt-1 text-xs font-bold uppercase leading-4 tracking-[0.08em] text-noble-ink/72 lg:mt-0">
                      {point.label}
                    </dd>
                  </div>
                ))}
          </dl>
        </div>
      </section>

      <section id="about" className="bg-white py-16 sm:py-28 lg:py-36">
        <div className="carpenter-container grid gap-8 sm:gap-12 lg:grid-cols-[0.92fr_1fr] lg:items-center">
          <div className="relative aspect-[1.3/1] overflow-hidden bg-noble-mist sm:aspect-[0.95/1] lg:min-h-[40rem]" data-reveal>
            <Image
              src="/images/project-flooring/robinson-home-kitchen-hardwood-floor-2.webp"
              alt="Natural hardwood floors in the remodeled Robinson home kitchen"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div className="relative z-10 bg-white pt-1 lg:-ml-24 lg:p-12" data-reveal>
            <p className="carpenter-eyebrow text-noble-ink">About us</p>
            <h2 className="carpenter-title mt-5 max-w-3xl text-[2.3rem] font-bold text-noble-ink sm:text-6xl lg:text-[4rem]">
              Noble floors crafted by noble people.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-noble-ink/68 sm:mt-7 sm:text-lg sm:leading-9">
              Detail matters because the floor becomes part of daily life. Noble Hardwoods keeps the work careful, clear, and grounded in the home.
            </p>
            <div className="mt-7 grid grid-cols-2 gap-3 sm:mt-10 sm:flex sm:gap-4">
              <ButtonLink href="#quote" className="px-4 sm:px-10">
                Get a quote
              </ButtonLink>
              <ButtonLink href="/about" variant="secondary" className="px-4 sm:px-10">
                Learn more
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-cream-100 pb-0 pt-16 text-noble-ink sm:pt-28 lg:pt-36">
        <div className="carpenter-container">
          <div className="grid gap-6 pb-10 sm:gap-8 sm:pb-16 lg:grid-cols-[0.92fr_1fr] lg:items-end lg:border-b lg:border-noble-ink/12" data-reveal>
            <div>
              <p className="carpenter-eyebrow text-noble-ink">Our services</p>
              <h2 className="carpenter-title mt-5 max-w-3xl text-[2.3rem] font-bold text-noble-ink sm:text-6xl lg:text-[4rem]">
                A comprehensive set of services
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-noble-ink/68 sm:text-lg sm:leading-9 lg:justify-self-end">
              Installation, refinishing, repairs, stairs, and custom hardwood work handled with careful communication and jobsite respect.
            </p>
          </div>

          <div className="mt-8 grid auto-cols-[82vw] grid-flow-col gap-4 overflow-x-auto pb-16 snap-x snap-mandatory sm:mt-12 sm:auto-cols-[55vw] sm:gap-6 sm:pb-24 lg:mt-16 lg:grid-flow-row lg:grid-cols-3 lg:gap-8 lg:overflow-visible lg:pb-32">
            {serviceVisuals.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="carpenter-card group block snap-start bg-white text-noble-ink shadow-[0_18px_48px_rgba(87,51,31,0.08)]"
                data-track="service_card_click"
                data-reveal
              >
                <div className="relative h-56 overflow-hidden bg-noble-mist sm:h-72 lg:h-[28.875rem]">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 33vw, 90vw"
                  />
                </div>
                <div className="p-5 sm:p-7">
                  <p className="text-sm font-bold uppercase tracking-[0.14em] text-noble-orange">
                    {service.eyebrow}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold leading-tight text-noble-ink sm:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-noble-ink/64 sm:mt-4 sm:text-base">{service.description}</p>
                  <span className="mt-5 inline-flex items-center gap-4 text-sm font-bold uppercase text-noble-ink transition group-hover:text-noble-orange sm:mt-6">
                    View service <ArrowMark />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="bg-white pb-20 pt-16 sm:pb-32 sm:pt-28 lg:pb-40">
        <div className="carpenter-container">
          <div className="grid gap-10 sm:gap-16 lg:grid-cols-2 lg:items-start lg:gap-20">
            <div data-reveal>
              <p className="carpenter-eyebrow text-noble-ink">Gallery</p>
              <h2 className="carpenter-title mt-5 max-w-xl text-[2.3rem] font-bold text-noble-ink sm:text-6xl lg:text-[4rem]">
                Take a look at our recent projects
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-noble-ink/68 sm:mt-7 sm:text-lg sm:leading-9">
                Project proof matters. These homes show the warmth, clean lines, and finish quality Noble is built around.
              </p>
              <Link
                href="/projects"
                data-track="projects_index_click"
                className="mt-7 inline-flex min-h-12 items-center justify-center rounded-sm bg-noble-ink px-6 text-sm font-bold uppercase text-white transition duration-300 hover:-translate-y-0.5 hover:bg-noble-orange sm:mt-9 sm:min-h-14 sm:px-8"
              >
                View all projects
              </Link>
              <Link href={homeProjectGallery[1].href} className="carpenter-card group mt-20 hidden lg:block" data-reveal>
                <div className="relative aspect-square overflow-hidden bg-noble-mist">
                  <Image
                    src={homeProjectGallery[1].image}
                    alt={homeProjectGallery[1].alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 38vw, 90vw"
                  />
                </div>
                <ProjectCaption project={homeProjectGallery[1]} />
              </Link>
            </div>
            <div className="grid auto-cols-[82vw] grid-flow-col gap-5 overflow-x-auto pb-3 snap-x snap-mandatory sm:auto-cols-[55vw] lg:grid-flow-row lg:grid-cols-1 lg:gap-20 lg:overflow-visible lg:pb-0">
              {homeProjectGallery.map((project, index) => (
                <Link
                  key={project.image}
                  href={project.href}
                  className={`carpenter-card group block snap-start ${index === 1 ? "lg:hidden" : ""}`}
                  data-reveal
                >
                  <div className="relative aspect-[1.12/1] overflow-hidden bg-noble-mist sm:aspect-square">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 38vw, 82vw"
                    />
                  </div>
                  <ProjectCaption project={project} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="bg-cream-50 py-16 sm:py-28 lg:py-36">
        <div className="carpenter-container grid gap-9 sm:gap-14 lg:grid-cols-[0.75fr_1.25fr]">
          <div data-reveal>
            <p className="carpenter-eyebrow text-noble-ink">Process</p>
            <h2 className="carpenter-title mt-5 max-w-xl text-[2.3rem] font-bold text-noble-ink sm:mt-6 sm:text-6xl lg:text-[4rem]">
              A clear path from first look to final walkthrough.
            </h2>
          </div>
          <div className="divide-y divide-noble-ink/12 border-y border-noble-ink/12" data-reveal>
            {processSteps.map((step, index) => (
              <div key={step} className="grid grid-cols-[2.25rem_1fr] items-start gap-4 py-5 sm:grid-cols-[5rem_1fr] sm:gap-5 sm:py-7">
                <span className="text-2xl font-bold leading-none tabular-nums text-noble-orange sm:text-5xl">{index + 1}</span>
                <div>
                  <h3 className="text-lg font-bold leading-snug text-noble-ink sm:text-2xl">{step}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-28 lg:py-36">
        <div className="carpenter-container">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1fr] lg:items-end">
            <div>
              <p className="carpenter-eyebrow text-noble-ink">Testimonials</p>
              <h2 className="carpenter-title mt-5 max-w-3xl text-[2.3rem] font-bold text-noble-ink sm:mt-6 sm:text-6xl lg:text-[4rem]">
                What Kansas City homeowners say
              </h2>
            </div>
            <div className="border-y border-noble-ink/12 py-6 sm:py-8 lg:px-8">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                <p className="text-2xl font-normal text-noble-ink sm:text-3xl">
                  <span className="font-bold text-noble-orange">Google</span> Rating
                </p>
                <span className="text-2xl font-bold text-noble-ink sm:text-3xl">5.0</span>
                <span className="text-2xl leading-none text-noble-orange sm:text-3xl" aria-label="5 star rating">★★★★★</span>
                <Link
                  href="https://g.page/r/CVDjg6Cs_lh_EAE/review"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-sm bg-noble-ink px-6 text-sm font-bold uppercase text-white transition hover:bg-noble-orange sm:ml-auto sm:w-auto"
                >
                  Write A Review
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10 grid auto-cols-[82vw] grid-flow-col gap-4 overflow-x-auto pb-3 snap-x snap-mandatory sm:mt-14 sm:auto-cols-[55vw] sm:gap-6 lg:grid-flow-row lg:grid-cols-3 lg:gap-8 lg:overflow-visible lg:pb-0">
            {reviews.map((review) => (
              <figure key={review.name} className="snap-start border-t-4 border-noble-orange bg-cream-50 p-6 sm:p-8" data-reveal>
                <blockquote className="text-xl font-bold leading-snug text-noble-ink sm:text-2xl sm:leading-tight">
                  {review.quote}
                </blockquote>
                <figcaption className="mt-8 border-t border-noble-ink/12 pt-5">
                  <span className="block text-sm font-bold uppercase tracking-[0.16em] text-noble-orange">
                    {review.name}
                  </span>
                  <span className="mt-2 block text-sm leading-6 text-noble-ink/62">{review.detail}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-cream-100 py-16 text-noble-ink sm:py-28 lg:py-32">
        <div className="carpenter-container text-center">
          <p className="carpenter-eyebrow justify-center text-noble-ink">Stain gallery</p>
          <h2 className="carpenter-title mx-auto mt-5 max-w-4xl text-[2.3rem] font-bold text-noble-ink sm:mt-6 sm:text-6xl lg:text-[4rem]">
            Compare DuraSeal stain directions before your consultation
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-noble-ink/68 sm:mt-6 sm:text-lg sm:leading-9">
            Browse common colors for White Oak and Red Oak, then use the quote form to tell us if you already have a direction in mind.
          </p>
          <div className="carpenter-scroll-row mt-10 sm:mt-16">
            {featuredStains.map((stain, index) => (
              <Link
                key={stain.slug}
                href="/stain-gallery"
                className="group block overflow-hidden border border-noble-ink/10 bg-white text-left shadow-[0_16px_44px_rgba(87,51,31,0.08)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(87,51,31,0.14)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-noble-orange"
              >
                <div className="relative aspect-square overflow-hidden bg-noble-mist">
                  <Image
                    src={getDurasealStainImage(stain.slug, "White Oak")}
                    alt={`${stain.name} DuraSeal stain shown on White Oak`}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.035]"
                    sizes="(min-width: 1024px) 25rem, 82vw"
                  />
                  <span className="absolute left-4 top-4 border border-white/55 bg-noble-ink/78 px-3 py-2 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm sm:left-5 sm:top-5 sm:text-xs">
                    {index === 0 ? "Featured" : `0${index + 1}`}
                  </span>
                </div>
                <div className="p-5 sm:p-7">
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.12em] text-noble-orange sm:text-xs">
                    DuraSeal · White Oak
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-noble-ink sm:text-3xl">
                    {stain.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-noble-mist py-16 sm:py-28 lg:py-36">
        <div className="carpenter-container">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1fr] lg:items-end">
            <div>
              <p className="carpenter-eyebrow text-noble-ink">Resources</p>
              <h2 className="carpenter-title mt-5 max-w-2xl text-[2.3rem] font-bold text-noble-ink sm:mt-6 sm:text-6xl lg:text-[4rem]">
                Browse our hardwood articles and resources
              </h2>
            </div>
            <Link href="/blog" className="inline-flex min-h-14 w-fit items-center justify-center rounded-sm bg-noble-ink px-8 text-sm font-bold uppercase text-white transition hover:bg-noble-orange lg:justify-self-end">
              View all articles
            </Link>
          </div>
          <div className="mt-10 grid auto-cols-[82vw] grid-flow-col gap-4 overflow-x-auto pb-3 snap-x snap-mandatory sm:mt-14 sm:auto-cols-[55vw] sm:gap-6 lg:grid-flow-row lg:grid-cols-3 lg:gap-8 lg:overflow-visible lg:pb-0">
            {resourceCards.map((post) => (
              <Link key={post.href} href={post.href} className="carpenter-card group block snap-start bg-white">
                <div className="relative aspect-[1.22/1] overflow-hidden bg-noble-mist">
                  <Image src={post.image} alt="" fill className="object-cover" sizes="(min-width: 1024px) 33vw, 90vw" />
                </div>
                <div className="p-5 sm:p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-noble-orange">{post.category}</p>
                  <h3 className="mt-3 text-xl font-bold leading-tight text-noble-ink sm:text-2xl">{post.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-noble-ink/64">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24 lg:py-28">
        <div className="carpenter-container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="carpenter-eyebrow justify-center text-noble-ink">Service Areas</p>
            <h2 className="carpenter-title mt-5 text-[2.3rem] font-bold text-noble-ink sm:mt-6 sm:text-6xl">
              Proudly serving the Kansas City metro area.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-noble-ink/68">
              Local hardwood work for Kansas City homes, from Brookside to Leawood and beyond.
            </p>
          </div>
          <div className="mt-9 grid grid-cols-2 gap-2 sm:mt-12 sm:grid-cols-3 lg:grid-cols-4">
            {serviceAreas.map((area) => (
              <Link key={area} href="/service-areas" className="group flex min-h-16 items-end border-t-2 border-noble-orange bg-cream-50 p-3.5 transition duration-300 hover:-translate-y-0.5 hover:bg-noble-orange sm:min-h-24 sm:p-5">
                <span className="text-sm font-bold uppercase leading-tight text-noble-ink transition group-hover:text-white">{area}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs.slice(0, 5)} />
    </>
  );
}

function ProjectCaption({
  project
}: {
  project: {
    title: string;
    label: string;
  };
}) {
  return (
    <div className="flex items-end justify-between gap-5 pt-5">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-noble-orange">
          {project.label}
        </p>
        <h3 className="mt-2 text-xl font-bold leading-tight text-noble-ink">{project.title}</h3>
      </div>
      <ArrowMark className="mb-1 shrink-0 text-noble-ink transition group-hover:translate-x-1 group-hover:text-noble-orange" />
    </div>
  );
}

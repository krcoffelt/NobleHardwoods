import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowMark } from "@/components/ArrowMark";
import { ButtonLink } from "@/components/ButtonLink";
import { CTABand } from "@/components/CTABand";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { QuoteForm } from "@/components/QuoteForm";
import {
  business,
  blogPosts,
  faqs,
  featuredProjects,
  processSteps,
  reviews,
  serviceAreas,
  services
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
        width: 1600,
        height: 814,
        alt: "Finished hardwood floor completed by Noble Hardwoods"
      }
    ]
  }
};

export default function Home() {
  const homeStats = [
    ["15+", "Years of experience"],
    ["6", "Hardwood services"],
    ["KC", "Metro area"],
    ["5.0", "Google rating"]
  ];
  const serviceVisuals = [
    {
      ...services[1],
      image: "/images/projects/living-room-hardwood-floors.jpg",
      alt: "Hardwood floor installation in a Kansas City living room"
    },
    {
      ...services[0],
      image: "/images/projects/kitchen-hardwood-floors.jpg",
      alt: "Freshly refinished hardwood floors in a bright kitchen"
    },
    {
      ...services[4],
      image: "/images/projects/hardwood-stairs.jpg",
      alt: "Hardwood stairs and railings completed by Noble Hardwoods"
    }
  ];
  const resourceCards = blogPosts.slice(0, 3);
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

      <section className="relative isolate overflow-hidden bg-noble-ink text-white">
        <div className="absolute -top-[7.5rem] bottom-0 right-0 hidden w-[45vw] overflow-hidden bg-noble-mist lg:block">
          <Image
            src="/images/noble-hardwoods-hero.jpg"
            alt="Finished hardwood floor completed by Noble Hardwoods"
            fill
            priority
            className="object-cover"
            sizes="45vw"
          />
        </div>

        <div className="relative mx-auto grid max-w-[76.25rem] items-center px-5 pb-12 pt-16 sm:px-6 sm:pb-14 sm:pt-20 lg:min-h-[57.75rem] lg:grid-cols-[0.56fr_0.44fr] lg:items-start lg:px-8 lg:pb-0 lg:pt-[7.8125rem] xl:px-0">
          <div className="relative z-10 min-w-0">
            <h1 className="carpenter-title home-hero-title max-w-[42rem] text-[3.45rem] font-bold text-white min-[390px]:text-6xl sm:text-7xl lg:text-[5.4rem]">
              Hardwood floors built to last.
            </h1>
            <p className="mt-7 max-w-lg text-lg font-medium leading-8 text-white/74">
              Refinishing, installation, repair, stairs, and custom hardwood work for Kansas City homes.
            </p>
            <div className="mt-10 flex max-w-sm flex-col gap-4 sm:max-w-none sm:flex-row">
              <ButtonLink href="/contact" className="px-10 text-base">
                Get a quote
              </ButtonLink>
              <ButtonLink href={business.phoneHref} variant="light" className="px-10">
                Call {business.phone}
              </ButtonLink>
            </div>
          </div>

          <div className="relative mt-10 h-80 overflow-hidden bg-noble-mist min-[390px]:h-[22rem] lg:hidden">
            <Image
              src="/images/noble-hardwoods-hero.jpg"
              alt="Finished hardwood floor completed by Noble Hardwoods"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1023px) 100vw, 1px"
            />
          </div>
        </div>

        <Link
          href="#services"
          className="carpenter-scroll-cue absolute bottom-[9.75rem] right-[8vw] z-20 hidden h-[8.75rem] w-[8.75rem] place-items-center rounded-full border border-white/28 bg-noble-orange text-4xl font-bold text-white shadow-[0_24px_80px_rgba(0,0,0,0.28)] lg:grid"
          aria-label="Scroll to services"
        >
          <ArrowMark className="rotate-90" />
        </Link>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="carpenter-container">
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {homeStats.map(([value, label]) => (
              <div key={label} className="bg-cream-50 px-4 py-7 text-center sm:px-6 sm:py-9">
                <p className="text-4xl font-bold leading-none text-noble-ink sm:text-5xl">
                  {value}
                </p>
                <p className="mt-3 text-sm font-semibold text-noble-ink/62">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-white py-20 sm:py-32 lg:py-40">
        <div className="carpenter-container grid gap-12 lg:grid-cols-[0.92fr_1fr] lg:items-center">
          <div className="relative aspect-[0.88/1] overflow-hidden bg-noble-mist lg:min-h-[44.9375rem]">
            <Image
              src="/images/projects/kitchen-hardwood-floors.jpg"
              alt="Natural hardwood floors in a bright kitchen"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div className="relative z-10 bg-white pt-2 lg:-ml-28 lg:p-14">
            <p className="carpenter-eyebrow text-noble-ink">About us</p>
            <h2 className="carpenter-title mt-5 max-w-3xl text-[2.6rem] font-bold text-noble-ink sm:text-6xl lg:text-7xl">
              Noble floors crafted by noble people.
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-9 text-noble-ink/68">
              Detail matters because the floor becomes part of daily life. Noble Hardwoods keeps the work careful, clear, and grounded in the home.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="/contact" variant="secondary" className="px-10">
                Get a quote
              </ButtonLink>
              <ButtonLink href="/about" variant="secondary" className="px-10">
                Learn more
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-noble-ink pb-0 pt-20 text-white sm:pt-32 lg:pt-[16.25rem]">
        <div className="carpenter-container">
          <div className="grid gap-8 pb-12 sm:pb-16 lg:grid-cols-[0.92fr_1fr] lg:items-end lg:border-b lg:border-white/14">
            <div>
              <p className="carpenter-eyebrow text-white">Our services</p>
              <h2 className="carpenter-title mt-5 max-w-3xl text-[2.6rem] font-bold text-white sm:text-6xl lg:text-7xl">
                A comprehensive set of services
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-9 text-white/72 lg:justify-self-end">
              Installation, refinishing, repairs, stairs, and custom hardwood work handled with careful communication and jobsite respect.
            </p>
          </div>

          <div className="mt-10 grid gap-10 pb-20 sm:mt-16 sm:pb-24 lg:grid-cols-3 lg:pb-32">
            {serviceVisuals.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="carpenter-card group block bg-noble-ink text-white"
                data-track="service_card_click"
              >
                <div className="relative h-80 overflow-hidden bg-noble-mist sm:h-[28.875rem]">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 33vw, 90vw"
                  />
                </div>
                <div className="pt-7">
                  <p className="text-sm font-bold uppercase tracking-[0.14em] text-noble-orange">
                    {service.eyebrow}
                  </p>
                  <h3 className="mt-3 text-3xl font-bold leading-tight text-white">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-white/64">{service.description}</p>
                  <span className="mt-6 inline-flex items-center gap-4 text-sm font-bold uppercase text-white transition group-hover:text-noble-orange">
                    View service <ArrowMark />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="bg-white pb-24 pt-20 sm:pb-40 sm:pt-32 lg:pb-60">
        <div className="carpenter-container">
          <div className="grid gap-20 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="carpenter-eyebrow text-noble-ink">Gallery</p>
              <h2 className="carpenter-title mt-5 max-w-xl text-[2.6rem] font-bold text-noble-ink sm:text-6xl lg:text-7xl">
                Take a look at our recent projects
              </h2>
              <p className="mt-7 max-w-xl text-lg leading-9 text-noble-ink/68">
                Project proof matters. These homes show the warmth, clean lines, and finish quality Noble is built around.
              </p>
              <Link
                href="/projects"
                data-track="projects_index_click"
                className="mt-10 inline-flex min-h-[4.625rem] items-center justify-center rounded-full bg-noble-ink px-10 text-sm font-bold uppercase text-white transition hover:-translate-y-1 hover:bg-noble-orange"
              >
                View all projects
              </Link>
              <Link href={featuredProjects[1].href} className="carpenter-card mt-24 hidden lg:block">
                <div className="relative aspect-square overflow-hidden bg-noble-mist">
                  <Image
                    src={featuredProjects[1].image}
                    alt={featuredProjects[1].alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 38vw, 90vw"
                  />
                </div>
              </Link>
            </div>
            <div className="grid gap-10 pt-0 sm:gap-20 lg:pt-0">
              <Link href={featuredProjects[0].href} className="carpenter-card group block">
                <div className="relative aspect-square overflow-hidden bg-noble-mist">
                  <Image
                    src={featuredProjects[0].image}
                    alt={featuredProjects[0].alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 38vw, 90vw"
                  />
                </div>
              </Link>
              <Link href={featuredProjects[2].href} className="carpenter-card group block">
                <div className="relative aspect-square overflow-hidden bg-noble-mist">
                  <Image
                    src={featuredProjects[2].image}
                    alt={featuredProjects[2].alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 38vw, 90vw"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Ready to bring your hardwood floors back to life?"
        text="Get a quote today and tell us what your floors need."
      />

      <section id="quote" className="relative overflow-hidden bg-white py-24 sm:py-32 lg:py-40">
        <div className="carpenter-container grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:items-start">
          <div className="lg:sticky lg:top-10">
            <p className="carpenter-eyebrow text-noble-ink">Get a quote</p>
            <h2 className="carpenter-title mt-6 max-w-xl text-5xl font-bold text-noble-ink sm:text-6xl lg:text-7xl">
              Tell us what your floors need.
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-9 text-noble-ink/68">
              Add your project type, contact preference, work options, message, and optional photos or video so the first response is more useful.
            </p>
            <div className="mt-9 grid gap-4">
              <Link href={business.emailHref} className="border border-noble-ink/14 p-6 transition hover:border-noble-orange">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-noble-ink/55">Send us an email</span>
                <span className="mt-2 block text-lg font-bold text-noble-ink">{business.email}</span>
              </Link>
              <Link href={business.phoneHref} className="border border-noble-ink/14 p-6 transition hover:border-noble-orange">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-noble-ink/55">Give us a call</span>
                <span className="mt-2 block text-lg font-bold text-noble-ink">{business.phone}</span>
              </Link>
            </div>
          </div>
          <QuoteForm />
        </div>
      </section>

      <section id="process" className="carpenter-section bg-cream-50">
        <div className="carpenter-container grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="carpenter-eyebrow text-noble-ink">Process</p>
            <h2 className="carpenter-title mt-6 max-w-xl text-5xl font-bold text-noble-ink sm:text-6xl lg:text-7xl">
              A clear path from first look to final walkthrough.
            </h2>
          </div>
          <div className="divide-y divide-noble-ink/12 border-y border-noble-ink/12">
            {processSteps.map((step, index) => (
              <div key={step} className="grid gap-5 py-7 sm:grid-cols-[5rem_1fr]">
                <span className="text-5xl font-bold leading-none text-noble-orange">{index + 1}</span>
                <div>
                  <h3 className="text-2xl font-bold text-noble-ink">{step}</h3>
                  <p className="mt-2 text-base leading-8 text-noble-ink/64">
                    Clear communication, careful planning, and detailed hardwood work at each step.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="carpenter-section bg-white">
        <div className="carpenter-container">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1fr] lg:items-end">
            <div>
              <p className="carpenter-eyebrow text-noble-ink">Testimonials</p>
              <h2 className="carpenter-title mt-6 max-w-3xl text-5xl font-bold text-noble-ink sm:text-6xl lg:text-7xl">
                What Kansas City homeowners say
              </h2>
            </div>
            <div className="border-y border-noble-ink/12 py-8 lg:px-8">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                <p className="text-3xl font-normal text-noble-ink">
                  <span className="font-bold text-noble-orange">Google</span> Rating
                </p>
                <span className="text-3xl font-bold text-noble-ink">5.0</span>
                <span className="text-3xl leading-none text-noble-orange" aria-label="5 star rating">★★★★★</span>
                <Link
                  href="https://g.page/r/CVDjg6Cs_lh_EAE/review"
                  target="_blank"
                  rel="noreferrer"
                  className="ml-auto inline-flex min-h-12 items-center justify-center rounded-full bg-noble-ink px-6 text-sm font-bold uppercase text-white transition hover:bg-noble-orange"
                >
                  Write A Review
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {reviews.map((review) => (
              <figure key={review.name} className="border border-noble-ink/12 bg-white p-8">
                <blockquote className="text-2xl font-bold leading-tight text-noble-ink">
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

      <section className="overflow-hidden bg-noble-ink py-24 text-white sm:py-32 lg:py-40">
        <div className="carpenter-container text-center">
          <p className="carpenter-eyebrow justify-center text-white">Stain gallery</p>
          <h2 className="carpenter-title mx-auto mt-6 max-w-4xl text-5xl font-bold text-white sm:text-6xl lg:text-7xl">
            Compare DuraSeal stain directions before your consultation
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-9 text-white/72">
            Browse common colors for White Oak and Red Oak, then use the quote form to tell us if you already have a direction in mind.
          </p>
          <div className="carpenter-scroll-row mt-16">
            {["Natural", "Golden Brown", "Dark Walnut", "Jacobean"].map((color, index) => (
              <Link key={color} href="/stain-gallery" className="block min-h-[24rem] bg-white/[0.05] p-8 text-left">
                <span className="inline-flex rounded-full border border-white/60 px-6 py-3 text-sm font-bold uppercase text-white">
                  {index === 0 ? "Preview" : `0${index + 1}`}
                </span>
                <div className="mt-12 h-36 bg-[linear-gradient(135deg,#d7a76b,#6f3f24)]" />
                <h3 className="mt-8 text-3xl font-bold text-white">{color}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="carpenter-section bg-noble-mist">
        <div className="carpenter-container">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1fr] lg:items-end">
            <div>
              <p className="carpenter-eyebrow text-noble-ink">Resources</p>
              <h2 className="carpenter-title mt-6 max-w-2xl text-5xl font-bold text-noble-ink sm:text-6xl lg:text-7xl">
                Browse our hardwood articles and resources
              </h2>
            </div>
            <Link href="/blog" className="inline-flex min-h-[4.625rem] w-fit items-center justify-center rounded-full bg-noble-ink px-10 text-sm font-bold uppercase text-white transition hover:bg-noble-orange lg:justify-self-end">
              View all articles
            </Link>
          </div>
          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {resourceCards.map((post) => (
              <Link key={post.href} href={post.href} className="carpenter-card group block bg-white">
                <div className="relative aspect-[1.22/1] overflow-hidden bg-noble-mist">
                  <Image src={post.image} alt="" fill className="object-cover" sizes="(min-width: 1024px) 33vw, 90vw" />
                </div>
                <div className="p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-noble-orange">{post.category}</p>
                  <h3 className="mt-3 text-2xl font-bold leading-tight text-noble-ink">{post.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-noble-ink/64">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="carpenter-container grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
          <div>
            <p className="carpenter-eyebrow text-noble-ink">Other Contracting Services</p>
            <h2 className="carpenter-title mt-6 max-w-xl text-4xl font-bold text-noble-ink sm:text-5xl">
              Need painting, drywall, or other home work?
            </h2>
          </div>
          <div className="grid gap-5 border border-noble-ink/12 bg-white p-8 shadow-soft sm:grid-cols-[auto_1fr_auto] sm:items-center">
            <div className="grid size-20 place-items-center bg-noble-orange text-3xl font-bold text-white">Z</div>
            <div>
              <h3 className="text-xl font-bold leading-tight text-noble-ink">Zera Services, LLC</h3>
              <p className="mt-2 text-sm leading-7 text-noble-ink/68">
                For painting, drywall, and other contracting services outside of hardwood flooring, connect with the Zera Services team.
              </p>
            </div>
            <Link href={business.zeraServicesHref} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full bg-noble-ink px-5 text-sm font-extrabold uppercase text-white transition hover:bg-noble-orange">
              Visit Zera
            </Link>
          </div>
        </div>
      </section>

      <section className="carpenter-section-tight bg-white">
        <div className="carpenter-container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="carpenter-eyebrow justify-center text-noble-ink">Service Areas</p>
            <h2 className="carpenter-title mt-6 text-5xl font-bold text-noble-ink sm:text-6xl">
              Proudly serving the Kansas City metro area.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-noble-ink/68">
              Local hardwood work for Kansas City homes, from Brookside to Leawood and beyond.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {serviceAreas.map((area) => (
              <Link key={area} href="/service-areas" className="group flex min-h-24 items-end border border-noble-ink/10 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-noble-orange hover:bg-noble-orange sm:min-h-28">
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

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowMark } from "@/components/ArrowMark";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABand } from "@/components/CTABand";
import { InteriorHero } from "@/components/InteriorHero";
import { JsonLd } from "@/components/JsonLd";
import { getAbsoluteUrl, getAreaSchema } from "@/data/launch";
import { business, processSteps, proofPoints, reviews, teamMembers, values } from "@/data/site";

export const metadata: Metadata = {
  title: "About Noble Hardwoods",
  description:
    "Learn about Noble Hardwoods, a Kansas City hardwood flooring company focused on craftsmanship, integrity, family, beauty, and clear communication.",
  alternates: {
    canonical: "/about"
  },
  openGraph: {
    title: "About Noble Hardwoods | Kansas City Hardwood Flooring",
    description:
      "Noble Hardwoods installs, refinishes, repairs, and restores hardwood floors for Kansas City homeowners.",
    url: "/about",
    images: [{ url: "/images/noble-hardwoods-hero.jpg" }]
  }
};

export default function AboutPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Noble Hardwoods",
    url: getAbsoluteUrl("/about"),
    about: {
      "@type": "HomeAndConstructionBusiness",
      name: business.name,
      url: business.siteUrl,
      telephone: business.phone,
      email: business.email,
      areaServed: getAreaSchema(),
      image: getAbsoluteUrl("/images/noble-hardwoods-hero.jpg"),
      priceRange: "$$"
    }
  };

  return (
    <>
      <JsonLd data={schema} />
      <Breadcrumbs items={[{ label: "About", href: "/about" }]} />
      <InteriorHero
        eyebrow="About Noble"
        title="Noble floors crafted by noble people."
        text="Noble Hardwoods is a Kansas City hardwood flooring company built around craftsmanship, integrity, family, and the beauty of work done with care."
        image="/images/noble-hardwoods-hero.jpg"
        imageAlt="Warm hardwood floors in a Kansas City home"
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
          <div>
            <p className="w-fit border border-noble-orange/30 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-noble-orange">
              Our Mission
            </p>
            <h2 className="mt-5 text-4xl font-black uppercase leading-[0.96] text-noble-ink sm:text-5xl">
              Craftsmanship and relationship go hand in hand.
            </h2>
          </div>
          <div className="grid gap-6 text-base leading-8 text-noble-ink/70">
            <p>
              Noble Hardwoods exists to provide Kansas City homeowners with beautiful hardwood
              floors through craftsmanship, honest work, passion, and a process people can feel
              good about from the first conversation to the final walkthrough.
            </p>
            <p>
              The work is technical, but the goal is personal: craft floors that will last for
              generations and treat the families served with care along the way.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-noble-mist py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="w-fit border border-noble-orange/30 bg-white/55 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-noble-orange">
              What Noble Means
            </p>
            <h2 className="mt-5 text-4xl font-black uppercase leading-[0.96] tracking-normal text-noble-ink sm:text-5xl">
              We do not just care about floors. We care about the people who walk on them.
            </h2>
          </div>
          <div className="grid gap-px bg-noble-ink/12 sm:grid-cols-2">
            {values.map((value, index) => (
              <div key={value.title} className="bg-white p-7 transition hover:bg-cream-50">
                <p className="mb-5 text-xs font-black uppercase tracking-[0.18em] text-noble-orange">
                  0{index + 1}
                </p>
                <h3 className="text-sm font-extrabold uppercase text-noble-ink">
                  {value.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-noble-ink/68">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="relative aspect-[1.22/1] overflow-hidden border-[10px] border-white bg-white noble-shadow">
            <Image
              src="/images/projects/living-room-hardwood-floors.jpg"
              alt="Finished hardwood floors in a Kansas City home"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div>
            <p className="w-fit border border-noble-orange/30 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-noble-orange">
              Our Story
            </p>
            <h2 className="mt-5 text-4xl font-black uppercase leading-[0.96] text-noble-ink">
              A Kansas City hardwood company built by floor craftsmen.
            </h2>
            <div className="mt-6 grid gap-5 text-base leading-8 text-noble-ink/70">
              <p>
                Noble Hardwoods grew from years of hands-on hardwood floor experience, close
                working relationships, and a shared belief that good craft should come with good
                communication.
              </p>
              <p>
                Today, the team continues that standard across installation, refinishing,
                repair, stairs, railings, and custom floors for homeowners throughout the metro.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-noble-orange py-14 text-white">
        <div className="mx-auto grid max-w-7xl gap-0 px-5 sm:px-6 lg:grid-cols-3 lg:px-8">
          {proofPoints.map((point) => (
            <div
              key={point.title}
              className="border-white/25 py-6 first:pt-0 last:pb-0 lg:border-l lg:px-10 lg:first:border-l-0 lg:first:pl-0 lg:last:pr-0"
            >
              <h2 className="text-lg font-extrabold text-white">{point.title}</h2>
              <p className="mt-2 text-sm leading-6 text-white/82">{point.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-noble-mist py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="relative aspect-[1.22/1] overflow-hidden border-[10px] border-white bg-white noble-shadow">
            <Image
              src="/images/projects/kitchen-hardwood-floors.jpg"
              alt="Natural hardwood floors in a bright Kansas City kitchen"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div>
            <p className="w-fit border border-noble-orange/30 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-noble-orange">
              How We Work
            </p>
            <h2 className="mt-5 text-4xl font-black uppercase leading-[0.96] tracking-normal text-noble-ink">
              Clear expectations from quote to final walkthrough.
            </h2>
            <div className="mt-8 grid gap-4">
              {processSteps.map((step, index) => (
                <div key={step} className="grid grid-cols-[auto_1fr] gap-4">
                  <span className="grid size-9 place-items-center bg-noble-ink text-xs font-extrabold text-white">
                    {index + 1}
                  </span>
                  <p className="text-sm font-bold leading-7 text-noble-ink">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="w-fit border border-noble-orange/30 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-noble-orange">
              Leadership Team
            </p>
            <h2 className="mt-5 text-4xl font-black uppercase leading-[0.96] text-noble-ink sm:text-5xl">
              Meet the faces of Noble Hardwoods.
            </h2>
          </div>
          <div className="mt-10 grid gap-px bg-noble-ink/12 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <article key={member.name} className="bg-white p-5">
                <div className="relative aspect-[1/1] overflow-hidden bg-noble-mist">
                  <Image
                    src={member.image}
                    alt={`${member.name} of Noble Hardwoods`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 25vw, 50vw"
                  />
                </div>
                <h3 className="mt-5 text-2xl font-black uppercase leading-tight text-noble-ink">
                  {member.name}
                </h3>
                <p className="mt-2 text-xs font-extrabold uppercase tracking-[0.14em] text-noble-orange">
                  {member.role}
                </p>
                <p className="mt-4 text-sm leading-7 text-noble-ink/68">{member.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="w-fit border border-noble-orange/30 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-noble-orange">
              Local Trust
            </p>
            <h2 className="mt-5 text-4xl font-black uppercase leading-[0.96] tracking-normal text-noble-ink">
              Hardwood work homeowners are proud to recommend.
            </h2>
            <Link
              href="/projects"
              className="mt-7 inline-flex items-center gap-3 text-sm font-extrabold uppercase text-noble-ink hover:text-noble-orange"
            >
              View project examples <ArrowMark />
            </Link>
          </div>
          <div className="grid gap-5">
            {reviews.map((review) => (
              <figure key={review.name} className="border-l-4 border-noble-orange bg-cream-50 p-6 transition hover:bg-noble-mist">
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
        title="Let's talk about your hardwood floors."
        text="Tell us about your home, your floors, and the result you want."
      />
    </>
  );
}

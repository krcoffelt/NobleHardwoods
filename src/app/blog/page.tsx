import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowMark } from "@/components/ArrowMark";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABand } from "@/components/CTABand";
import { InteriorHero } from "@/components/InteriorHero";
import { JsonLd } from "@/components/JsonLd";
import { blogPosts } from "@/data/blogPosts";
import { socialShareImage } from "@/data/site";
import { getAbsoluteUrl } from "@/data/launch";

export const metadata: Metadata = {
  title: "Hardwood Flooring Articles & News",
  description:
    "Read Noble Hardwoods articles about hardwood floor care, maintenance, refinishing, investment value, and flooring ideas for Kansas City homes.",
  alternates: {
    canonical: "/blog"
  },
  openGraph: {
    title: "Hardwood Flooring Articles & News | Noble Hardwoods",
    description:
      "Helpful hardwood flooring articles from Noble Hardwoods for Kansas City homeowners.",
    url: "/blog",
    images: [socialShareImage]
  },
  twitter: {
    card: "summary_large_image",
    title: "Hardwood Flooring Articles & News | Noble Hardwoods",
    description:
      "Helpful hardwood flooring articles from Noble Hardwoods for Kansas City homeowners.",
    images: [socialShareImage]
  }
};

export default function BlogPage() {
  const [featuredPost, ...remainingPosts] = blogPosts;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Noble Hardwoods Articles & News",
    url: getAbsoluteUrl("/blog"),
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: getAbsoluteUrl(post.href),
      datePublished: post.datePublished
    }))
  };

  return (
    <>
      <JsonLd data={schema} />
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }]} />
      <InteriorHero
        eyebrow="Articles & News"
        title="Hardwood floor guidance for Kansas City homes."
        text="Read practical notes on care, maintenance, refinishing, value, and hardwood floor ideas from the Noble Hardwoods team."
        image="/images/project-flooring/robinson-home-dining-room-hardwood-floor.webp"
        imageAlt="Natural hardwood floors extending through the Robinson home dining room"
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <Link
            href={featuredPost.href}
            className="group grid overflow-hidden bg-noble-ink text-white lg:grid-cols-[1.12fr_0.88fr]"
            data-reveal
          >
            <div className="relative min-h-[24rem] overflow-hidden sm:min-h-[32rem]">
              <Image
                src={featuredPost.image}
                alt={featuredPost.imageAlt}
                fill
                priority
                className="object-cover transition duration-700 group-hover:scale-[1.025]"
                sizes="(min-width: 1024px) 56vw, 100vw"
              />
            </div>
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-orange-200">
                Featured guide / {featuredPost.category}
              </p>
              <h2 className="mt-5 text-3xl font-bold leading-[1.04] tracking-[-0.02em] sm:text-4xl lg:text-5xl">
                {featuredPost.title}
              </h2>
              <p className="mt-6 max-w-xl text-sm leading-7 text-white/72 sm:text-base sm:leading-8">
                {featuredPost.excerpt}
              </p>
              <span className="mt-8 inline-flex items-center gap-3 text-sm font-extrabold uppercase text-white transition group-hover:text-orange-200">
                Read the guide <ArrowMark />
              </span>
            </div>
          </Link>

          <div className="mt-16 grid gap-x-6 gap-y-12 md:grid-cols-2 lg:mt-20 lg:gap-x-8 lg:gap-y-16">
          {remainingPosts.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="carpenter-card group block"
              data-reveal
            >
              <div className="relative aspect-[1.32/1] overflow-hidden bg-noble-mist">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
              <p className="mt-5 border-t border-noble-ink/12 pt-5 text-xs font-extrabold uppercase tracking-[0.16em] text-noble-orange">
                {post.category} / {post.date}
              </p>
              <h2 className="mt-3 text-2xl font-bold leading-tight text-noble-ink">
                {post.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-noble-ink/68">{post.excerpt}</p>
              <span className="mt-5 inline-flex items-center gap-3 text-sm font-extrabold uppercase text-noble-ink transition group-hover:text-noble-orange">
                Read article <ArrowMark />
              </span>
            </Link>
          ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Need help with your hardwood floors?"
        text="If an article sounds like your floor, send a few details and Noble Hardwoods will help with the next step."
      />
    </>
  );
}

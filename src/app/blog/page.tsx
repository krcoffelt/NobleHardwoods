import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowMark } from "@/components/ArrowMark";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABand } from "@/components/CTABand";
import { InteriorHero } from "@/components/InteriorHero";
import { JsonLd } from "@/components/JsonLd";
import { blogPosts } from "@/data/site";
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
    images: [{ url: "/images/projects/kitchen-hardwood-floors.jpg" }]
  }
};

export default function BlogPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Noble Hardwoods Articles & News",
    url: getAbsoluteUrl("/blog"),
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: getAbsoluteUrl(post.href),
      datePublished: post.date
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
        image="/images/projects/kitchen-hardwood-floors.jpg"
        imageAlt="Natural hardwood floors in a bright Kansas City kitchen"
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-6 md:grid-cols-2 lg:px-8">
          {blogPosts.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="group border border-noble-ink/10 bg-white p-4 transition hover:-translate-y-1 hover:border-noble-orange/35 hover:shadow-soft"
            >
              <div className="relative aspect-[1.32/1] overflow-hidden bg-noble-mist">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
              <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.16em] text-noble-orange">
                {post.category} / {post.date}
              </p>
              <h2 className="mt-3 text-2xl font-black uppercase leading-tight text-noble-ink">
                {post.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-noble-ink/68">{post.excerpt}</p>
              <span className="mt-5 inline-flex items-center gap-3 text-sm font-extrabold uppercase text-noble-ink transition group-hover:text-noble-orange">
                Read article <ArrowMark />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CTABand
        title="Need help with your hardwood floors?"
        text="If an article sounds like your floor, send a few details and Noble Hardwoods will help with the next step."
      />
    </>
  );
}

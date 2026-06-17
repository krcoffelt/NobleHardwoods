import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowMark } from "@/components/ArrowMark";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABand } from "@/components/CTABand";
import { JsonLd } from "@/components/JsonLd";
import { getAbsoluteUrl } from "@/data/launch";
import { blogPosts, services } from "@/data/site";

type BlogPostPageProps = {
  params: Promise<{ postSlug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ postSlug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { postSlug } = await params;
  const post = blogPosts.find((item) => item.slug === postSlug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: post.href
    },
    openGraph: {
      title: `${post.title} | Noble Hardwoods`,
      description: post.excerpt,
      url: post.href,
      images: [{ url: post.image }]
    }
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { postSlug } = await params;
  const post = blogPosts.find((item) => item.slug === postSlug);

  if (!post) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url: getAbsoluteUrl(post.href),
    image: getAbsoluteUrl(post.image),
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author
    }
  };

  return (
    <>
      <JsonLd data={schema} />
      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog" },
          { label: post.title, href: post.href }
        ]}
      />

      <article>
        <section className="bg-[linear-gradient(115deg,#fffdf8_0%,#f7f4ef_58%,#efe0c7_100%)] py-14 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:px-8">
            <div>
              <p className="w-fit border border-noble-orange/30 bg-white/55 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-noble-orange">
                {post.category} / {post.date}
              </p>
              <h1 className="mt-6 max-w-3xl text-[2.65rem] font-black uppercase leading-[0.96] tracking-[-0.035em] text-noble-ink min-[390px]:text-5xl sm:text-6xl">
                {post.title}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-noble-ink/68">
                {post.excerpt}
              </p>
            </div>
            <div className="relative aspect-[1.22/1] overflow-hidden border-[10px] border-white bg-white noble-shadow">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 54vw, 100vw"
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:px-8">
            <aside>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-noble-orange">
                By {post.author}
              </p>
              <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-noble-ink">
                Hardwood notes from Noble.
              </h2>
              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-3 text-sm font-extrabold uppercase text-noble-ink transition hover:text-noble-orange"
              >
                Ask about your floors <ArrowMark />
              </Link>
            </aside>
            <div className="grid gap-8">
              {post.sections.map((section) => (
                <section key={section.heading} className="border-b border-noble-ink/10 pb-8 last:border-b-0 last:pb-0">
                  <h2 className="text-2xl font-black uppercase leading-tight text-noble-ink">
                    {section.heading}
                  </h2>
                  <p className="mt-4 text-base leading-8 text-noble-ink/70">{section.body}</p>
                </section>
              ))}
            </div>
          </div>
        </section>
      </article>

      <section className="bg-noble-mist py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
          <div>
            <p className="w-fit border border-noble-orange/30 bg-white/55 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-noble-orange">
              Related Services
            </p>
            <h2 className="mt-5 text-4xl font-black uppercase leading-[0.96] text-noble-ink">
              Useful next steps.
            </h2>
          </div>
          <div className="grid gap-px bg-noble-ink/12 sm:grid-cols-3">
            {services.slice(0, 3).map((service) => (
              <Link key={service.href} href={service.href} className="bg-white p-6 transition hover:bg-cream-50">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-noble-orange">
                  {service.eyebrow}
                </p>
                <h3 className="mt-3 text-lg font-black uppercase leading-tight text-noble-ink">
                  {service.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Let's talk about your hardwood floors."
        text="Tell us what you are seeing and the Noble Hardwoods team will help you choose the right next step."
      />
    </>
  );
}

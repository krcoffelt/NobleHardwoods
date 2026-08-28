import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowMark } from "@/components/ArrowMark";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ButtonLink } from "@/components/ButtonLink";
import { CTABand } from "@/components/CTABand";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { blogPosts } from "@/data/blogPosts";
import { getAbsoluteUrl } from "@/data/launch";
import { business, services, socialShareImage } from "@/data/site";

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

  const title = post.seoTitle ?? post.title;
  const description = post.metaDescription ?? post.excerpt;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: post.href },
    openGraph: {
      type: "article",
      title: `${title} | Noble Hardwoods`,
      description,
      url: post.href,
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified ?? post.datePublished,
      images: [socialShareImage]
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Noble Hardwoods`,
      description,
      images: [socialShareImage.url]
    }
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { postSlug } = await params;
  const post = blogPosts.find((item) => item.slug === postSlug);

  if (!post) notFound();

  const relatedServices = post.relatedServices?.length
    ? post.relatedServices
        .map((href) => services.find((service) => service.href === href))
        .filter((service): service is (typeof services)[number] => Boolean(service))
    : services.slice(0, 3);
  const articleText = [
    post.quickAnswer,
    post.excerpt,
    ...post.sections.flatMap((section) => [
      section.heading,
      ...section.paragraphs,
      ...(section.bullets ?? []),
      section.callout
    ]),
    ...(post.faqs?.flatMap((faq) => [faq.question, faq.answer]) ?? [])
  ]
    .filter(Boolean)
    .join(" ");
  const wordCount = articleText.trim().split(/\s+/).length;
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${getAbsoluteUrl(post.href)}#article`,
    mainEntityOfPage: getAbsoluteUrl(post.href),
    headline: post.title,
    description: post.metaDescription ?? post.excerpt,
    url: getAbsoluteUrl(post.href),
    image: {
      "@type": "ImageObject",
      url: getAbsoluteUrl(post.image),
      caption: post.imageAlt
    },
    datePublished: post.datePublished,
    dateModified: post.dateModified ?? post.datePublished,
    wordCount,
    articleSection: post.category,
    author: post.authorRole
      ? {
          "@type": "Person",
          name: post.author,
          jobTitle: post.authorRole,
          worksFor: { "@id": business.schemaId }
        }
      : {
          "@type": "Organization",
          name: post.author,
          "@id": business.schemaId
        },
    publisher: {
      "@type": "HomeAndConstructionBusiness",
      "@id": business.schemaId,
      name: business.name,
      url: business.siteUrl,
      logo: { "@type": "ImageObject", url: getAbsoluteUrl(business.logo) }
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
        <header className="relative min-h-[calc(100svh-8.5rem)] overflow-hidden bg-noble-ink text-white">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            priority
            className="hero-enter-media object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(23,21,19,0.94)_0%,rgba(23,21,19,0.78)_42%,rgba(23,21,19,0.18)_78%,rgba(23,21,19,0.08)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(23,21,19,0.72)_0%,transparent_48%)]" />
          <div className="relative mx-auto flex min-h-[calc(100svh-8.5rem)] max-w-7xl items-end px-5 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-10">
            <div className="hero-enter-copy max-w-4xl">
              <p className="carpenter-eyebrow text-orange-200">
                {post.category} <span className="mx-2 text-white/35">/</span> Kansas City
              </p>
              <h1 className="mt-5 max-w-[16ch] text-[2.45rem] font-bold leading-[0.98] tracking-[-0.035em] text-white min-[390px]:text-[2.7rem] sm:text-[3.4rem] lg:max-w-[18ch] lg:text-[4.25rem]">
                {post.title}
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
                {post.excerpt}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-white/24 pt-4 text-xs font-bold uppercase tracking-[0.12em] text-white/72">
                <span>By {post.author}</span>
                <span aria-hidden="true">•</span>
                <time dateTime={post.datePublished}>{post.date}</time>
                {post.readTime ? (
                  <>
                    <span aria-hidden="true">•</span>
                    <span>{post.readTime}</span>
                  </>
                ) : null}
              </div>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact" variant="primary">Ask about your floors</ButtonLink>
                <ButtonLink href={business.phoneHref} variant="light">Call {business.phone}</ButtonLink>
              </div>
            </div>
          </div>
        </header>

        {post.quickAnswer ? (
          <section aria-labelledby="quick-answer" className="border-b border-noble-ink/10 bg-[#f3eadc]">
            <div className="mx-auto grid max-w-7xl gap-7 px-5 py-12 sm:px-6 sm:py-16 lg:grid-cols-[0.54fr_1.46fr] lg:px-8">
              <div>
                <p className="carpenter-eyebrow">The short answer</p>
                <h2 id="quick-answer" className="mt-4 text-3xl font-bold leading-tight text-noble-ink sm:text-4xl">Start here.</h2>
              </div>
              <div>
                <p className="max-w-4xl text-lg leading-9 text-noble-ink/78 sm:text-xl sm:leading-10">{post.quickAnswer}</p>
                {post.keyTakeaways?.length ? (
                  <ul className="mt-8 grid gap-4 border-t border-noble-ink/12 pt-7 md:grid-cols-3">
                    {post.keyTakeaways.map((takeaway, index) => (
                      <li key={takeaway} className="grid grid-cols-[1.8rem_1fr] gap-3 text-sm leading-7 text-noble-ink/72">
                        <span className="font-black text-noble-orange">0{index + 1}</span>
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          </section>
        ) : null}

        <div className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-6 sm:py-24 lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-20 lg:px-8">
            <aside className="lg:sticky lg:top-28 lg:h-fit">
              <nav aria-label="Article sections" className="border-y border-noble-ink/14 py-6">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-noble-orange">In this guide</p>
                <ol className="mt-5 grid gap-3">
                  {post.sections.map((section, index) => (
                    <li key={section.id}>
                      <a href={`#${section.id}`} className="group grid grid-cols-[1.75rem_1fr] gap-2 text-sm font-bold leading-5 text-noble-ink/62 transition hover:text-noble-orange">
                        <span className="text-noble-orange/70">{String(index + 1).padStart(2, "0")}</span>
                        <span>{section.heading}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
              <div className="mt-7 border-l-2 border-noble-orange pl-5">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-noble-ink/50">Written by</p>
                <p className="mt-2 font-bold text-noble-ink">{post.author}</p>
                {post.authorRole ? <p className="mt-1 text-sm text-noble-ink/60">{post.authorRole}</p> : null}
              </div>
            </aside>

            <div className="min-w-0">
              {post.sections.map((section, sectionIndex) => (
                <section id={section.id} key={section.id} className="border-b border-noble-ink/12 pb-14 pt-14 first:pt-0 last:border-b-0 sm:pb-20 sm:pt-20" data-reveal>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-noble-orange">{String(sectionIndex + 1).padStart(2, "0")}</p>
                  <h2 className="mt-4 max-w-3xl text-3xl font-bold leading-[1.08] tracking-[-0.02em] text-noble-ink sm:text-4xl">{section.heading}</h2>
                  <div className="mt-7 max-w-[48rem] space-y-6">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="text-[1.05rem] leading-8 text-noble-ink/72 sm:leading-9">{paragraph}</p>
                    ))}
                  </div>

                  {section.table ? (
                    <div className="mt-9 overflow-x-auto border-y border-noble-ink/16">
                      <table className="w-full min-w-[42rem] border-collapse text-left text-sm">
                        {section.table.caption ? <caption className="bg-noble-mist px-5 py-4 text-left text-xs font-black uppercase tracking-[0.13em] text-noble-orange">{section.table.caption}</caption> : null}
                        <thead>
                          <tr className="bg-noble-ink text-white">
                            {section.table.headers.map((header) => <th key={header} scope="col" className="px-5 py-4 font-bold">{header}</th>)}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-noble-ink/10">
                          {section.table.rows.map((row) => (
                            <tr key={row.join("-")} className="align-top even:bg-noble-mist/55">
                              {row.map((cell, cellIndex) => <td key={`${cell}-${cellIndex}`} className="px-5 py-4 leading-6 text-noble-ink/72 first:font-bold first:text-noble-ink">{cell}</td>)}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : null}

                  {section.bullets?.length ? (
                    <ul className="mt-8 grid gap-x-8 gap-y-4 border-y border-noble-ink/12 py-7 sm:grid-cols-2">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="grid grid-cols-[0.75rem_1fr] gap-3 text-sm leading-7 text-noble-ink/70">
                          <span aria-hidden="true" className="mt-[0.62rem] h-1.5 w-1.5 bg-noble-orange" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {section.callout ? <blockquote className="mt-9 border-l-4 border-noble-orange bg-[#f3eadc] px-6 py-7 text-xl font-bold leading-8 text-noble-ink sm:px-8 sm:text-2xl sm:leading-9">{section.callout}</blockquote> : null}

                  {section.links?.length ? (
                    <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3">
                      {section.links.map((link) => (
                        <Link key={link.href} href={link.href} className="inline-flex items-center gap-3 text-sm font-extrabold text-noble-ink underline decoration-noble-orange/50 transition hover:text-noble-orange">
                          {link.label} <ArrowMark />
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </section>
              ))}
            </div>
          </div>
        </div>

        {post.review || post.relatedProject ? (
          <section className="overflow-hidden bg-noble-ink text-white">
            <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
              <div className="relative min-h-[25rem] lg:min-h-[36rem]">
                <Image src={post.image} alt={post.imageAlt} fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
              </div>
              <div className="flex flex-col justify-center px-5 py-14 sm:px-10 sm:py-20 lg:px-16" data-reveal>
                <p className="carpenter-eyebrow text-orange-200">Local project proof</p>
                {post.review ? (
                  <>
                    <blockquote className="mt-6 max-w-xl text-2xl font-bold leading-9 sm:text-3xl sm:leading-10">“{post.review.quote}”</blockquote>
                    <p className="mt-6 text-sm font-bold uppercase tracking-[0.12em] text-white/65">{post.review.name} / {post.review.detail}</p>
                  </>
                ) : null}
                {post.relatedProject ? (
                  <Link href={post.relatedProject.href} className="mt-9 inline-flex w-fit items-center gap-3 text-sm font-extrabold uppercase text-white transition hover:text-orange-200">
                    View {post.relatedProject.label} <ArrowMark />
                  </Link>
                ) : null}
              </div>
            </div>
          </section>
        ) : null}

        {post.faqs?.length ? <FAQSection eyebrow="Questions homeowners ask" title={`${post.category} FAQs`} faqs={post.faqs} className="bg-noble-mist" /> : null}

        {post.sources?.length || post.authorBio ? (
          <section className="border-y border-noble-ink/10 bg-white py-14 sm:py-16">
            <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
              {post.authorBio ? (
                <div>
                  <p className="carpenter-eyebrow">About the author</p>
                  <h2 className="mt-4 text-2xl font-bold text-noble-ink">{post.author}</h2>
                  {post.authorRole ? <p className="mt-1 text-sm font-bold text-noble-orange">{post.authorRole}</p> : null}
                  <p className="mt-4 max-w-xl text-sm leading-7 text-noble-ink/68">{post.authorBio}</p>
                  <Link href="/about" className="mt-5 inline-flex items-center gap-3 text-sm font-extrabold text-noble-ink hover:text-noble-orange">Meet Noble Hardwoods <ArrowMark /></Link>
                </div>
              ) : null}
              {post.sources?.length ? (
                <div>
                  <p className="carpenter-eyebrow">Sources & further reading</p>
                  <ul className="mt-5 divide-y divide-noble-ink/10 border-y border-noble-ink/10">
                    {post.sources.map((source) => (
                      <li key={source.href}>
                        <a href={source.href} target={source.external ? "_blank" : undefined} rel={source.external ? "noopener noreferrer" : undefined} className="flex items-center justify-between gap-5 py-4 text-sm font-bold leading-6 text-noble-ink transition hover:text-noble-orange">
                          {source.label}<span aria-hidden="true">↗</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-xs leading-6 text-noble-ink/50">Cost figures are planning references, not a Noble Hardwoods quote. Product guidance and project conditions can change; verify details for your home.</p>
                </div>
              ) : null}
            </div>
          </section>
        ) : null}
      </article>

      <section className="bg-[#f3eadc] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.58fr_1.42fr]">
            <div>
              <p className="carpenter-eyebrow">Continue planning</p>
              <h2 className="mt-5 max-w-md text-4xl font-bold leading-[1.02] text-noble-ink sm:text-5xl">Services and local guidance.</h2>
            </div>
            <div>
              <div className="grid gap-px bg-noble-ink/12 sm:grid-cols-3">
                {relatedServices.map((service) => (
                  <Link key={service.href} href={service.href} className="group bg-white p-6 transition hover:bg-noble-mist">
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-noble-orange">{service.eyebrow}</p>
                    <h3 className="mt-3 text-lg font-bold leading-tight text-noble-ink">{service.title}</h3>
                    <span className="mt-5 inline-flex items-center gap-2 text-xs font-extrabold uppercase text-noble-ink group-hover:text-noble-orange">Learn more <ArrowMark /></span>
                  </Link>
                ))}
              </div>
              {post.relatedAreas?.length ? (
                <nav aria-label="Related service areas" className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <span className="text-xs font-black uppercase tracking-[0.14em] text-noble-ink/45">Nearby</span>
                  {post.relatedAreas.map((area) => (
                    <Link key={area.href} href={area.href} className="text-sm font-bold text-noble-ink underline decoration-noble-orange/40 hover:text-noble-orange">{area.label}</Link>
                  ))}
                </nav>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <CTABand title="Let's talk about your hardwood floors." text="Send your city, approximate square footage, and a few photos. Noble Hardwoods will help you choose the right next step." />
    </>
  );
}

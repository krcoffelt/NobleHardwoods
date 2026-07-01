import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { getAbsoluteUrl } from "@/data/launch";
import { business } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Noble Hardwoods quote requests, contact information, optional project photos or video, analytics, and website usage.",
  alternates: {
    canonical: "/privacy"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function PrivacyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy",
    url: getAbsoluteUrl("/privacy"),
    isPartOf: {
      "@type": "WebSite",
      name: business.name,
      url: business.siteUrl
    }
  };

  return (
    <>
      <JsonLd data={schema} />
      <Breadcrumbs items={[{ label: "Privacy Policy", href: "/privacy" }]} />
      <section className="bg-[linear-gradient(115deg,#fffdf8_0%,#f7f4ef_58%,#efe0c7_100%)] py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
          <p className="w-fit border border-noble-orange/30 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-noble-orange">
            Privacy Policy
          </p>
          <h1 className="mt-5 text-[2.65rem] font-black uppercase leading-[0.98] text-noble-ink min-[390px]:text-5xl sm:text-6xl">
            How Noble Hardwoods handles your information.
          </h1>
          <p className="mt-6 text-base leading-8 text-noble-ink/68">
            This page explains how Noble Hardwoods uses information submitted through this
            website. It is written for homeowners requesting hardwood flooring help in the
            Kansas City metro area.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-4xl gap-0 px-5 text-base leading-8 text-noble-ink/72 sm:px-6 lg:px-8">
          <PolicyBlock title="Information We Collect">
            <p>
              When you submit a quote request, Noble Hardwoods may collect your name, phone
              number, email address, city, project type, approximate project size, selected
              work options, preferred contact method, message, source page, UTM campaign
              information, and optional project photos or video.
            </p>
          </PolicyBlock>

          <PolicyBlock title="How We Use Information">
            <p>
              We use submitted information to respond to quote requests, understand project
              needs, schedule follow-up, provide estimates, improve the website, and measure
              which pages or campaigns generate leads.
            </p>
          </PolicyBlock>

          <PolicyBlock title="Project Photos and Video">
            <p>
              Photos and video are optional. If you upload project media, it is used to help
              understand floor condition, room layout, damage, or project scope before
              follow-up.
            </p>
          </PolicyBlock>

          <PolicyBlock title="Analytics">
            <p>
              This website may use analytics tools such as Google Analytics, Google Tag
              Manager, or Microsoft Clarity when configured. These tools help measure page
              usage, quote requests, phone clicks, email clicks, and overall website
              performance.
            </p>
          </PolicyBlock>

          <PolicyBlock title="Sharing">
            <p>
              Noble Hardwoods does not sell personal information. Information may be shared
              only with service providers used to operate the website, store leads, send
              notifications, analyze website performance, or respond to your request.
            </p>
          </PolicyBlock>

          <PolicyBlock title="Retention and Deletion">
            <p>
              Quote request information and uploaded project media may be retained as long as
              needed to respond to the request, maintain business records, and improve lead
              handling. To request deletion or correction, contact Noble Hardwoods directly.
            </p>
          </PolicyBlock>

          <PolicyBlock title="Contact">
            <p>
              Questions about this policy can be sent to{" "}
              <Link className="font-bold text-noble-ink hover:text-noble-orange" href={business.emailHref}>
                {business.email}
              </Link>{" "}
              or by calling{" "}
              <Link className="font-bold text-noble-ink hover:text-noble-orange" href={business.phoneHref}>
                {business.phone}
              </Link>
              .
            </p>
          </PolicyBlock>
        </div>
      </section>
    </>
  );
}

function PolicyBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-b border-noble-ink/10 py-8 first:pt-0 last:border-b-0 last:pb-0">
      <h2 className="text-2xl font-black uppercase leading-tight text-noble-ink">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

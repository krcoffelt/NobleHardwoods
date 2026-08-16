import Link from "next/link";
import type { ReactNode } from "react";
import { business, navItems, serviceAreas, services } from "@/data/site";
import { ArrowMark } from "./ArrowMark";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-noble-ink pb-24 pt-0 text-white sm:pb-12">
      <div className="mx-auto grid max-w-[78rem] border-x border-white/10 sm:grid-cols-2">
        <Link
          href={business.emailHref}
          className="group flex min-w-0 items-center justify-between gap-5 border-b border-white/10 px-5 py-7 transition hover:bg-white/[0.05] sm:border-b-0 sm:border-r sm:px-8"
        >
          <span className="min-w-0">
            <span className="block text-xs font-black uppercase tracking-[0.16em] text-white/55">
              Send us an email
            </span>
            <span className="mt-2 block break-all text-base font-bold text-white transition group-hover:text-noble-orange sm:text-lg">
              {business.email}
            </span>
          </span>
          <ArrowMark className="shrink-0 text-noble-orange" />
        </Link>
        <Link
          href={business.phoneHref}
          className="group flex items-center justify-between gap-5 px-5 py-7 transition hover:bg-white/[0.05] sm:px-8"
        >
          <span>
            <span className="block text-xs font-black uppercase tracking-[0.16em] text-white/55">
              Give us a call
            </span>
            <span className="mt-2 block text-base font-bold text-white transition group-hover:text-noble-orange sm:text-lg">
              {business.phone}
            </span>
          </span>
          <ArrowMark className="shrink-0 text-noble-orange" />
        </Link>
      </div>

      <div className="mx-auto mt-10 grid max-w-[78rem] gap-9 px-5 sm:mt-14 sm:gap-12 sm:px-6 lg:grid-cols-[1.15fr_2fr] lg:px-8 xl:px-0">
        <div>
          <Logo />
          <p className="mt-3 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white/48">
            {business.ownershipLabel}
          </p>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/68 sm:mt-6">
            Noble Hardwoods installs, refinishes, repairs, and restores hardwood floors for
            homes across Kansas City and surrounding areas.
          </p>
          <p className="mt-4 text-sm font-semibold text-white/55 sm:mt-6">Serving the {business.area}</p>
        </div>

        <div className="grid divide-y divide-white/10 border-y border-white/10 sm:hidden">
          <FooterDetails title="Services">
            {services.map((service) => (
              <Link key={service.href} href={service.href}>
                {service.title}
              </Link>
            ))}
          </FooterDetails>

          <FooterDetails title="Service Areas">
            {serviceAreas.slice(0, 8).map((area) => (
              <Link key={area} href="/service-areas">
                {area}
              </Link>
            ))}
          </FooterDetails>

          <FooterDetails title="Company">
            {navItems
              .filter((item) => ["Projects", "About", "Contact"].includes(item.label))
              .map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            <Link href="/service-areas">Service Areas</Link>
            <Link href="/stain-gallery">Stain Gallery</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href={business.instagram} target="_blank" rel="noreferrer">
              Instagram
            </Link>
          </FooterDetails>
        </div>

        <div className="hidden gap-10 sm:grid sm:grid-cols-3">
          <FooterGroup title="Services">
            {services.map((service) => (
              <Link key={service.href} href={service.href}>
                {service.title}
              </Link>
            ))}
          </FooterGroup>

          <FooterGroup title="Service Areas">
            {serviceAreas.slice(0, 8).map((area) => (
              <Link key={area} href="/service-areas">
                {area}
              </Link>
            ))}
          </FooterGroup>

          <FooterGroup title="Company">
            {navItems
              .filter((item) => ["Projects", "About", "Contact"].includes(item.label))
              .map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            <Link href="/service-areas">Service Areas</Link>
            <Link href="/stain-gallery">Stain Gallery</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href={business.instagram} target="_blank" rel="noreferrer">
              Instagram
            </Link>
          </FooterGroup>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-[78rem] border-t border-white/10 px-5 pt-6 text-center text-xs text-white/52 sm:mt-14 sm:px-6 lg:px-8 xl:px-0">
        <p>Copyright {new Date().getFullYear()} Noble Hardwoods. All rights reserved.</p>
        <p className="mt-2">
          Website created by{" "}
          <a
            href="https://hometownkc.agency/case-studies/noble-hardwoods"
            target="_blank"
            rel="noopener"
            className="font-semibold text-white transition hover:text-noble-orange"
          >
            Hometown Marketing Agency
          </a>
          .
        </p>
      </div>
    </footer>
  );
}

function FooterDetails({ title, children }: { title: string; children: ReactNode }) {
  return (
    <details className="group py-1">
      <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between text-xs font-bold uppercase tracking-[0.16em] text-white">
        {title}
        <span className="text-xl font-normal text-noble-orange transition group-open:rotate-45" aria-hidden="true">
          +
        </span>
      </summary>
      <div className="grid gap-3 pb-5 text-sm text-white/68 [&_a]:py-1 [&_a]:transition [&_a:hover]:text-noble-orange">
        {children}
      </div>
    </details>
  );
}

function FooterGroup({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-white">
        {title}
      </h2>
      <div className="mt-5 grid gap-3 text-sm text-white/62 [&_a]:transition [&_a:hover]:text-noble-orange">
        {children}
      </div>
    </div>
  );
}

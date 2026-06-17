import Link from "next/link";
import type { ReactNode } from "react";
import { business, navItems, serviceAreas, services } from "@/data/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-white pb-24 pt-14 text-noble-ink sm:pb-12">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[1.25fr_2fr] lg:px-8">
        <div>
          <Logo />
          <p className="mt-6 max-w-md text-sm leading-7 text-noble-ink/68">
            Noble Hardwoods installs, refinishes, repairs, and restores hardwood floors for
            homes across Kansas City and surrounding areas.
          </p>
          <div className="mt-6 space-y-2 text-sm">
            <p>
              <Link className="font-semibold text-noble-ink hover:text-noble-orange" href={business.phoneHref}>
                {business.phone}
              </Link>
            </p>
            <p>
              <Link className="font-semibold text-noble-ink hover:text-noble-orange" href={business.emailHref}>
                {business.email}
              </Link>
            </p>
            <p className="text-noble-ink/58">Serving the {business.area}</p>
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-3">
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
            <Link href="/privacy">Privacy Policy</Link>
          </FooterGroup>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-noble-ink/10 px-5 pt-6 text-center text-xs text-noble-ink/60 sm:px-6 lg:px-8">
        <p>Copyright {new Date().getFullYear()} Noble Hardwoods. All rights reserved.</p>
        <p className="mt-2">Noble Hardwoods is owned by Zera Flooring.</p>
        <p className="mt-2">
          Website created by{" "}
          <Link
            href="https://hometownkc.agency"
            className="font-semibold text-noble-ink transition hover:text-noble-orange"
          >
            Hometown Marketing Agency
          </Link>
          .
        </p>
      </div>
    </footer>
  );
}

function FooterGroup({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-noble-ink">
        {title}
      </h2>
      <div className="mt-5 grid gap-3 text-sm text-noble-ink/64 [&_a]:transition [&_a:hover]:text-noble-orange">
        {children}
      </div>
    </div>
  );
}

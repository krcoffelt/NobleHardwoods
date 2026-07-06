import Link from "next/link";
import type { ReactNode } from "react";
import { business, navItems, serviceAreas, services } from "@/data/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#242220] pb-24 pt-16 text-white sm:pb-12 lg:pt-24">
      <div className="mx-auto grid max-w-[76.25rem] gap-6 px-5 sm:px-6 lg:grid-cols-2 lg:px-8 xl:px-0">
        <Link
          href={business.emailHref}
          className="group grid gap-4 border border-white/12 bg-white/[0.04] p-6 transition hover:border-noble-orange hover:bg-white/[0.07] sm:grid-cols-[auto_1fr]"
        >
          <span className="grid size-14 place-items-center bg-noble-orange text-2xl font-black text-white">
            @
          </span>
          <span>
            <span className="block text-xs font-black uppercase tracking-[0.16em] text-white/55">
              Send us an email
            </span>
            <span className="mt-2 block text-xl font-black text-white transition group-hover:text-noble-orange">
              {business.email}
            </span>
          </span>
        </Link>
        <Link
          href={business.phoneHref}
          className="group grid gap-4 border border-white/12 bg-white/[0.04] p-6 transition hover:border-noble-orange hover:bg-white/[0.07] sm:grid-cols-[auto_1fr]"
        >
          <span className="grid size-14 place-items-center bg-noble-orange text-2xl font-black text-white">
            #
          </span>
          <span>
            <span className="block text-xs font-black uppercase tracking-[0.16em] text-white/55">
              Give us a call
            </span>
            <span className="mt-2 block text-xl font-black text-white transition group-hover:text-noble-orange">
              {business.phone}
            </span>
          </span>
        </Link>
      </div>

      <div className="mx-auto mt-14 grid max-w-[76.25rem] gap-12 px-5 sm:px-6 lg:grid-cols-[1.15fr_2fr] lg:px-8 xl:px-0">
        <div>
          <Logo />
          <p className="mt-6 max-w-md text-sm leading-7 text-white/68">
            Noble Hardwoods installs, refinishes, repairs, and restores hardwood floors for
            homes across Kansas City and surrounding areas.
          </p>
          <p className="mt-6 text-sm font-semibold text-white/55">Serving the {business.area}</p>
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
            <Link href="/stain-gallery">Stain Gallery</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href={business.zeraServicesHref} target="_blank" rel="noreferrer">
              Zera Services
            </Link>
            <Link href={business.instagram} target="_blank" rel="noreferrer">
              Instagram
            </Link>
          </FooterGroup>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-[76.25rem] border-t border-white/10 px-5 pt-6 text-center text-xs text-white/52 sm:px-6 lg:px-8 xl:px-0">
        <p>Copyright {new Date().getFullYear()} Noble Hardwoods. All rights reserved.</p>
        <p className="mt-2">Noble Hardwoods is owned by Zera Flooring.</p>
        <p className="mt-2">
          Website created by{" "}
          <Link
            href="https://hometownkc.agency"
            className="font-semibold text-white transition hover:text-noble-orange"
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
      <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-white">
        {title}
      </h2>
      <div className="mt-5 grid gap-3 text-sm text-white/62 [&_a]:transition [&_a:hover]:text-noble-orange">
        {children}
      </div>
    </div>
  );
}

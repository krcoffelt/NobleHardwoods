"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { business, navItems } from "@/data/site";
import { ArrowMark } from "./ArrowMark";
import { ButtonLink } from "./ButtonLink";
import { Logo } from "./Logo";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isZeraPage = pathname === business.zeraServicesHref;

  return (
    <header className="sticky top-0 z-50 border-b border-noble-ink/8 bg-cream-50/94 text-noble-ink shadow-[0_10px_32px_rgba(37,31,27,0.05)] backdrop-blur-2xl backdrop-saturate-150">
      <div className="mx-auto flex h-[4.75rem] max-w-[78rem] items-center justify-between px-5 sm:h-24 sm:px-6 lg:px-8 xl:px-0">
        <div className="grid gap-1">
          <Logo />
          <Link
            href={business.zeraServicesHref}
            className="ml-0.5 w-fit text-[0.5rem] font-extrabold uppercase leading-none tracking-[0.12em] text-noble-orange transition hover:text-noble-ink sm:text-[0.62rem]"
          >
            {business.ownershipLabel}
          </Link>
        </div>

        <nav className="hidden items-center gap-8 xl:gap-10 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={`text-[0.78rem] font-extrabold uppercase tracking-[0.06em] transition duration-300 hover:text-noble-orange ${
                pathname === item.href ? "text-noble-orange" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ButtonLink
            href={isZeraPage ? business.zeraPhoneHref : "/contact"}
            variant="primary"
            className="min-h-14 px-8"
          >
            {isZeraPage ? "Call Zera" : "Get a quote"} <ArrowMark className="ml-4" />
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-sm bg-noble-orange text-sm font-semibold text-white shadow-[0_8px_22px_rgba(239,95,61,0.2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-noble-orange lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((value) => !value)}
        >
          <span aria-hidden="true" className="grid gap-1">
            <span className="block h-0.5 w-6 bg-white" />
            <span className="block h-0.5 w-6 bg-white" />
            <span className="block h-0.5 w-6 bg-white" />
          </span>
        </button>
      </div>

      {isOpen ? (
        <div id="mobile-menu" className="border-t border-noble-ink/10 bg-cream-50/95 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto grid max-w-sm gap-1 px-5 py-5" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className={`rounded px-3 py-3 text-base font-medium transition hover:bg-noble-mist hover:text-noble-orange ${
                  pathname === item.href
                    ? "bg-noble-mist font-semibold text-noble-orange"
                    : "text-noble-ink"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 grid grid-cols-2 gap-3">
              <ButtonLink
                href={isZeraPage ? business.zeraPhoneHref : business.phoneHref}
                variant="secondary"
              >
                {isZeraPage ? "Call Zera" : "Call Now"}
              </ButtonLink>
              <ButtonLink href={isZeraPage ? "/" : "/contact"} variant="primary">
                {isZeraPage ? "Noble Home" : "Get Quote"}
              </ButtonLink>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

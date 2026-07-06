"use client";

import Link from "next/link";
import { useState } from "react";
import { business, navItems } from "@/data/site";
import { ButtonLink } from "./ButtonLink";
import { Logo } from "./Logo";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative z-50 bg-noble-ink text-white">
      <div className="mx-auto flex h-24 max-w-[76.25rem] items-center justify-between border-b border-white/18 px-5 sm:h-[7.5rem] sm:px-6 lg:px-8 xl:px-0">
        <Logo />

        <nav className="hidden items-center gap-10 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-extrabold uppercase text-white/82 transition hover:text-noble-orange"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ButtonLink href="/contact" variant="primary" className="!min-h-14 px-6 !text-base">
            Get a quote
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex size-14 items-center justify-center rounded-full bg-white text-sm font-semibold text-noble-ink lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((value) => !value)}
        >
          <span aria-hidden="true" className="grid gap-1">
            <span className="block h-0.5 w-6 bg-noble-ink" />
            <span className="block h-0.5 w-6 bg-noble-ink" />
            <span className="block h-0.5 w-6 bg-noble-ink" />
          </span>
        </button>
      </div>

      {isOpen ? (
        <div id="mobile-menu" className="border-t border-white/10 bg-noble-ink/98 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto grid max-w-sm gap-1 px-5 py-5" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-3 text-base font-medium text-white/82 transition hover:bg-white/10 hover:text-noble-orange"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 grid grid-cols-2 gap-3">
              <ButtonLink href={business.phoneHref} variant="light">
                Call Now
              </ButtonLink>
              <ButtonLink href="/contact" variant="primary">
                Get Quote
              </ButtonLink>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

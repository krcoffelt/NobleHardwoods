"use client";

import Link from "next/link";
import { useState } from "react";
import { business, navItems } from "@/data/site";
import { ButtonLink } from "./ButtonLink";
import { Logo } from "./Logo";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-noble-ink/10 bg-white/96 text-noble-ink backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:h-24 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-10 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-extrabold uppercase transition hover:text-noble-orange"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ButtonLink href="/contact" variant="primary" className="min-h-14 px-8">
            Get a quote <span className="ml-4 text-xl leading-none">→</span>
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex size-14 items-center justify-center rounded bg-noble-orange text-sm font-semibold text-white lg:hidden"
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
        <div id="mobile-menu" className="border-t border-noble-ink/10 bg-white lg:hidden">
          <nav className="mx-auto grid max-w-sm gap-1 px-5 py-5" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded px-3 py-3 text-base font-medium text-noble-ink transition hover:bg-noble-mist hover:text-noble-orange"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 grid grid-cols-2 gap-3">
              <ButtonLink href={business.phoneHref} variant="secondary">
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

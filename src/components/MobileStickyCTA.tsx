"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { business } from "@/data/site";

export function MobileStickyCTA() {
  const pathname = usePathname();
  const [hasPassedHero, setHasPassedHero] = useState(false);
  const isZeraPage = pathname === business.zeraServicesHref;
  const isHomePage = pathname === "/";
  const isContactPage = pathname === "/contact";
  const quoteHref = isHomePage
    ? "#quote"
    : isContactPage
      ? "#quote-request-form"
      : "/contact";
  const quoteLabel = isContactPage ? "Start Form" : "Get Quote";

  useEffect(() => {
    const hero = document.querySelector<HTMLElement>(".page-shell > section");

    if (!hero) {
      setHasPassedHero(true);
      return;
    }

    const updateVisibility = (bottom: number) => {
      setHasPassedHero(bottom <= 0);
    };

    updateVisibility(hero.getBoundingClientRect().bottom);

    const observer = new IntersectionObserver(
      ([entry]) => updateVisibility(entry.boundingClientRect.bottom),
      { threshold: 0 }
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <div
      aria-hidden={!hasPassedHero}
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-white/60 bg-white/88 px-5 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 shadow-[0_-16px_50px_rgba(27,25,23,0.14)] backdrop-blur-xl transition duration-300 ease-out motion-reduce:transition-none sm:hidden ${
        hasPassedHero
          ? "visible translate-y-0 opacity-100"
          : "invisible translate-y-full opacity-0"
      }`}
    >
      <div className="mx-auto grid max-w-[22rem] grid-cols-2 gap-3">
        <a
          href={isZeraPage ? business.zeraPhoneHref : business.phoneHref}
          tabIndex={hasPassedHero ? undefined : -1}
          className="inline-flex min-h-12 items-center justify-center rounded-sm border border-noble-orange bg-white px-4 text-sm font-bold text-noble-orange"
        >
          {isZeraPage ? "Call Zera" : "Call Now"}
        </a>
        <Link
          href={isZeraPage ? "/" : quoteHref}
          tabIndex={hasPassedHero ? undefined : -1}
          className="inline-flex min-h-12 items-center justify-center rounded-sm bg-noble-orange px-4 text-sm font-bold text-white shadow-soft"
        >
          {isZeraPage ? "Noble Hardwoods" : quoteLabel}
        </Link>
      </div>
    </div>
  );
}

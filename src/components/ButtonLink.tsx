import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = ""
}: ButtonLinkProps) {
  const variants = {
    primary:
      "bg-white text-noble-ink shadow-[0_18px_50px_rgba(0,0,0,0.12)] hover:bg-noble-orange hover:text-white focus-visible:outline-noble-orange",
    secondary:
      "border border-noble-ink bg-transparent text-noble-ink hover:border-noble-orange hover:bg-noble-orange hover:text-white focus-visible:outline-noble-orange",
    light:
      "border-2 border-white/90 bg-transparent text-white hover:border-white hover:bg-transparent focus-visible:outline-white"
  };
  const trackingEvent = href.startsWith("tel:")
    ? "phone_click"
    : href.startsWith("mailto:")
      ? "email_click"
      : href === "/contact"
        ? "quote_cta_click"
        : undefined;

  return (
    <Link
      href={href}
      data-track={trackingEvent}
      className={`inline-flex min-h-[4.625rem] items-center justify-center rounded-full px-8 text-base font-bold uppercase tracking-normal transition duration-300 hover:-translate-y-1 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 sm:text-lg ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

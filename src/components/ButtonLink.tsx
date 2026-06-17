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
      "bg-noble-orange text-white shadow-soft hover:bg-noble-orange-dark focus-visible:outline-noble-orange",
    secondary:
      "border border-noble-ink/15 bg-white text-noble-ink hover:border-noble-orange hover:text-noble-orange focus-visible:outline-noble-orange",
    light:
      "border border-white/35 bg-white/12 text-white backdrop-blur hover:bg-white/20 focus-visible:outline-white"
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
      className={`inline-flex min-h-12 items-center justify-center rounded px-6 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

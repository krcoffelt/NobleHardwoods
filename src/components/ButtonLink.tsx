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
      "bg-noble-orange text-white shadow-[0_16px_40px_rgba(239,95,61,0.18)] hover:bg-noble-orange-dark focus-visible:outline-noble-orange",
    secondary:
      "border border-noble-ink/18 bg-white text-noble-ink hover:border-noble-ink hover:bg-noble-ink hover:text-white focus-visible:outline-noble-orange",
    light:
      "border-2 border-white/70 bg-transparent text-white hover:border-white hover:bg-white hover:text-noble-ink focus-visible:outline-white"
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
      className={`inline-flex min-h-14 items-center justify-center rounded-sm px-7 text-sm font-bold transition duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

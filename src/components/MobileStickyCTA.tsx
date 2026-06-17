import Link from "next/link";
import { business } from "@/data/site";

export function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-noble-ink/10 bg-white/96 px-4 py-3 shadow-[0_-16px_50px_rgba(38,35,32,0.16)] backdrop-blur sm:hidden">
      <div className="mx-auto grid max-w-sm grid-cols-2 gap-3">
        <a
          href={business.phoneHref}
          className="inline-flex min-h-12 items-center justify-center rounded border border-noble-orange bg-white px-4 text-sm font-semibold text-noble-orange"
        >
          Call Now
        </a>
        <Link
          href="/contact"
          className="inline-flex min-h-12 items-center justify-center rounded bg-noble-orange px-4 text-sm font-semibold text-white shadow-soft"
        >
          Get Quote
        </Link>
      </div>
    </div>
  );
}

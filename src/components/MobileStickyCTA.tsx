import Link from "next/link";
import { business } from "@/data/site";

export function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/60 bg-white/88 px-5 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 shadow-[0_-16px_50px_rgba(38,35,32,0.14)] backdrop-blur-xl sm:hidden">
      <div className="mx-auto grid max-w-[22rem] grid-cols-2 gap-3">
        <a
          href={business.phoneHref}
          className="inline-flex min-h-12 items-center justify-center rounded-full border border-noble-orange bg-white px-4 text-sm font-bold text-noble-orange"
        >
          Call Now
        </a>
        <Link
          href="/contact"
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-noble-orange px-4 text-sm font-bold text-white shadow-soft"
        >
          Get Quote
        </Link>
      </div>
    </div>
  );
}

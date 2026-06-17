import Link from "next/link";
import { JsonLd } from "./JsonLd";
import { business } from "@/data/site";
import { getAbsoluteUrl } from "@/data/launch";

type Crumb = {
  label: string;
  href: string;
};

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const crumbs = [{ label: "Home", href: "/" }, ...items];
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.label,
      item: getAbsoluteUrl(crumb.href)
    }))
  };

  return (
    <>
      <JsonLd data={schema} />
      <nav aria-label="Breadcrumb" className="bg-noble-mist">
        <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-5 py-4 text-xs font-bold uppercase tracking-[0.12em] text-noble-ink/56 sm:px-6 lg:px-8">
          {crumbs.map((crumb, index) => (
            <li key={crumb.href} className="flex items-center gap-2">
              {index < crumbs.length - 1 ? (
                <Link href={crumb.href} className="transition hover:text-noble-orange">
                  {crumb.label}
                </Link>
              ) : (
                <span aria-current="page" className="text-noble-ink">
                  {crumb.label}
                </span>
              )}
              {index < crumbs.length - 1 ? <span aria-hidden="true">/</span> : null}
            </li>
          ))}
          <li className="sr-only">{business.name}</li>
        </ol>
      </nav>
    </>
  );
}

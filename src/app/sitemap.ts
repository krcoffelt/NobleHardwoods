import type { MetadataRoute } from "next";
import { servicePages, sitemapRoutes } from "@/data/launch";
import { serviceAreaPages } from "@/data/serviceAreaPages";
import { business } from "@/data/site";

const coreServiceRoutes = new Set(servicePages.map((service) => service.href));

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [...sitemapRoutes, ...serviceAreaPages.map((area) => area.href)];

  return routes.map((route) => {
    const isHomepage = route === "/";
    const isPrimaryConversionPage = route === "/contact";
    const isCoreService = coreServiceRoutes.has(route);

    return {
      url: new URL(route, business.siteUrl).toString(),
      changeFrequency: isHomepage ? "weekly" : "monthly",
      priority: isHomepage ? 1 : isPrimaryConversionPage ? 0.9 : isCoreService ? 0.8 : 0.7
    };
  });
}

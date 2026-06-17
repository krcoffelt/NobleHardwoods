import type { MetadataRoute } from "next";
import { publicRoutes } from "@/data/launch";
import { business } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((route) => ({
    url: new URL(route, business.siteUrl).toString(),
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route === "/contact" ? 0.9 : 0.7
  }));
}

import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Noble Hardwoods",
    short_name: "Noble",
    description: "Kansas City hardwood flooring company.",
    id: "/",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#fffdf8",
    theme_color: "#ef5f3d",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any"
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any"
      },
      {
        src: "/icons/maskable-icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable"
      }
    ]
  };
}

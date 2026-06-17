import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Noble Hardwoods",
    short_name: "Noble",
    description: "Kansas City hardwood flooring company.",
    start_url: "/",
    display: "standalone",
    background_color: "#fffdf8",
    theme_color: "#ef5f3d",
    icons: [
      {
        src: "/images/brand/icon-flooring.png",
        sizes: "512x512",
        type: "image/png"
      }
    ]
  };
}

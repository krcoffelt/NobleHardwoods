import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  async redirects() {
    return [
      {
        source: "/service/installation",
        destination: "/hardwood-floor-installation-kansas-city",
        permanent: true
      },
      {
        source: "/service/refinishing",
        destination: "/hardwood-floor-refinishing-kansas-city",
        permanent: true
      },
      {
        source: "/service/refinish",
        destination: "/hardwood-floor-refinishing-kansas-city",
        permanent: true
      },
      {
        source: "/service/repair",
        destination: "/hardwood-floor-repair-kansas-city",
        permanent: true
      },
      {
        source: "/service/dustless-sanding",
        destination: "/dustless-hardwood-floor-refinishing-kansas-city",
        permanent: true
      },
      {
        source: "/service/custom-floors",
        destination: "/custom-hardwood-floors-kansas-city",
        permanent: true
      },
      {
        source: "/service/stairs-railings",
        destination: "/hardwood-stairs-railings-kansas-city",
        permanent: true
      },
      {
        source: "/service/refinish-recoat-and-repair",
        destination: "/hardwood-floor-refinishing-kansas-city",
        permanent: true
      },
      {
        source: "/service/refinish-recoat-repair",
        destination: "/hardwood-floor-refinishing-kansas-city",
        permanent: true
      },
      {
        source: "/service/refinish-and-repair",
        destination: "/hardwood-floor-refinishing-kansas-city",
        permanent: true
      },
      {
        source: "/service/stairs-and-railings",
        destination: "/hardwood-stairs-railings-kansas-city",
        permanent: true
      },
      {
        source: "/service/custom-floor-patterns",
        destination: "/custom-hardwood-floors-kansas-city",
        permanent: true
      },
      {
        source: "/service/custom-flooring",
        destination: "/custom-hardwood-floors-kansas-city",
        permanent: true
      },
      {
        source: "/services/installation",
        destination: "/hardwood-floor-installation-kansas-city",
        permanent: true
      },
      {
        source: "/services/refinishing",
        destination: "/hardwood-floor-refinishing-kansas-city",
        permanent: true
      },
      {
        source: "/services/repair",
        destination: "/hardwood-floor-repair-kansas-city",
        permanent: true
      },
      {
        source: "/services/dustless-sanding",
        destination: "/dustless-hardwood-floor-refinishing-kansas-city",
        permanent: true
      },
      {
        source: "/services/custom-floors",
        destination: "/custom-hardwood-floors-kansas-city",
        permanent: true
      },
      {
        source: "/services/stairs-railings",
        destination: "/hardwood-stairs-railings-kansas-city",
        permanent: true
      }
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"]
  }
};

export default nextConfig;

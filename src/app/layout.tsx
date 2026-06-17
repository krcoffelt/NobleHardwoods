import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { AnalyticsScripts, TrackInteractions } from "@/components/Tracking";
import { business } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: "Noble Hardwoods",
    template: "%s | Noble Hardwoods"
  },
  description:
    "Noble Hardwoods installs, refinishes, repairs, and restores hardwood floors throughout Kansas City and surrounding areas.",
  applicationName: "Noble Hardwoods",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Noble Hardwoods",
    url: business.siteUrl,
    images: [
      {
        url: "/images/noble-hardwoods-hero.jpg",
        width: 1672,
        height: 941,
        alt: "Premium hardwood floors in a warm Kansas City home"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Noble Hardwoods",
    description:
      "Kansas City hardwood floor refinishing, installation, repair, stairs, railings, and custom wood floors.",
    images: ["/images/noble-hardwoods-hero.jpg"]
  },
  icons: {
    icon: "/favicon-noble.png",
    apple: "/favicon-noble.png"
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <AnalyticsScripts />
        <TrackInteractions />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}

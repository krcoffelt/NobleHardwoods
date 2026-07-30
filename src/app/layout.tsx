import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AnalyticsScripts, TrackInteractions } from "@/components/Tracking";
import { business, socialShareImage } from "@/data/site";

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
    images: [socialShareImage]
  },
  twitter: {
    card: "summary_large_image",
    title: "Noble Hardwoods",
    description:
      "Kansas City hardwood floor refinishing, installation, repair, stairs, railings, and custom wood floors.",
    images: [socialShareImage]
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <AnalyticsScripts />
        <TrackInteractions />
        <ScrollReveal />
        <Header />
        <main className="page-shell">{children}</main>
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}

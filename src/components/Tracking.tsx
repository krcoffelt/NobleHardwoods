"use client";

import { useEffect } from "react";
import Script from "next/script";

type TrackingWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  clarity?: (...args: unknown[]) => void;
};

const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
const clarityId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

export function AnalyticsScripts() {
  return (
    <>
      {gtmId ? (
        <Script id="gtm-loader" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `}
        </Script>
      ) : null}

      {gaId ? (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
          <Script id="ga-loader" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}');
            `}
          </Script>
        </>
      ) : null}

      {clarityId ? (
        <Script id="clarity-loader" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${clarityId}");
          `}
        </Script>
      ) : null}
    </>
  );
}

export function TrackInteractions() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target instanceof Element ? event.target.closest("a") : null;
      if (!target) return;

      const href = target.getAttribute("href") || "";
      const explicitEvent = target.getAttribute("data-track");
      let eventName = explicitEvent;

      if (!eventName && href.startsWith("tel:")) eventName = "phone_click";
      if (!eventName && href.startsWith("mailto:")) eventName = "email_click";
      if (!eventName && href === "/contact") eventName = "quote_cta_click";

      if (!eventName) return;

      trackEvent(eventName, {
        href,
        label: target.textContent?.trim() || ""
      });
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}

export function ThankYouTracking() {
  useEffect(() => {
    trackEvent("lead_thank_you_view", {
      path: window.location.pathname
    });
  }, []);

  return null;
}

export function trackEvent(eventName: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;

  const trackingWindow = window as TrackingWindow;
  trackingWindow.dataLayer = trackingWindow.dataLayer || [];
  trackingWindow.dataLayer.push({ event: eventName, ...params });

  trackingWindow.gtag?.("event", eventName, params);
  trackingWindow.clarity?.("event", eventName);
}

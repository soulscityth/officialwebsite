"use client";

import { useEffect } from "react";
import Script from "next/script";
import { GA_ID, isAnalyticsEnabled, trackEvent } from "@/lib/analytics";

// Clicks are tracked by delegation on a `data-ga-event` attribute rather than an
// onClick handler. That keeps Footer, FloatingLine and the page CTAs as Server
// Components — adding a handler to each would force them all to the client.
function useDelegatedEventTracking() {
  useEffect(() => {
    if (!isAnalyticsEnabled) return;

    const onClick = (e) => {
      const el = e.target.closest("[data-ga-event]");
      if (!el) return;
      trackEvent(el.dataset.gaEvent, {
        location: el.dataset.gaLocation || window.location.pathname,
      });
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
}

export default function Analytics() {
  useDelegatedEventTracking();

  if (!isAnalyticsEnabled) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}

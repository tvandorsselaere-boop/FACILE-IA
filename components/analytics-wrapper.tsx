"use client"

import Script from "next/script"
import { Analytics } from "@vercel/analytics/next"
import { useAnalyticsConsent } from "@/components/cookie-consent"

export function AnalyticsWrapper() {
  const allowed = useAnalyticsConsent()

  if (!allowed) return null

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-N5CX65D5L7"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-N5CX65D5L7');
        `}
      </Script>
      <Analytics />
    </>
  )
}

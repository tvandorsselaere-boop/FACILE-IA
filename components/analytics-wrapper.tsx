"use client"

import { Analytics } from "@vercel/analytics/next"
import { useAnalyticsConsent } from "@/components/cookie-consent"

export function AnalyticsWrapper() {
  const allowed = useAnalyticsConsent()

  if (!allowed) return null

  return <Analytics />
}

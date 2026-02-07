import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import Script from "next/script"
import { ThemeProvider } from "@/components/theme-provider"
import { CookieConsent } from "@/components/cookie-consent"
import { AnalyticsWrapper } from "@/components/analytics-wrapper"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FACILE-IA — Agence digitale augmentée | Puyloubier, PACA",
  description:
    "Facile-IA : solutions numériques et intelligence artificielle pour artisans, indépendants et PME en région PACA. Sites web, applications, automatisation — à tarifs accessibles.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${geist.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <CookieConsent />
          <AnalyticsWrapper />
        </ThemeProvider>
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}

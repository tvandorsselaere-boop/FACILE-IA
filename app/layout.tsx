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
  title: {
    default: "Facile-IA | L'IA qui simplifie la vie des PME et artisans",
    template: "%s | Facile-IA",
  },
  description:
    "Agence digitale augmentée à Puyloubier (PACA). Solutions numériques et intelligence artificielle pour artisans, indépendants et PME. Sites web, applications, automatisation — tarifs accessibles, contact humain.",
  keywords: [
    "IA PME",
    "automatisation artisan",
    "outils IA entreprise",
    "agence digitale PACA",
    "site internet artisan",
    "intelligence artificielle PME",
    "facile-ia",
    "Puyloubier",
  ],
  authors: [{ name: "Thomas VAN DORSSELAERE" }],
  creator: "Facile-IA",
  publisher: "Facile-IA",
  metadataBase: new URL("https://facile-ia.fr"),
  openGraph: {
    title: "Facile-IA | L'IA qui simplifie la vie des PME et artisans",
    description:
      "Gagnez du temps grâce à l'IA. Solutions numériques sur-mesure pour artisans, indépendants et PME en région PACA. Tarifs accessibles, accompagnement humain.",
    url: "https://facile-ia.fr",
    siteName: "Facile-IA",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Facile-IA — Agence digitale augmentée",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Facile-IA | L'IA pour PME et artisans",
    description:
      "Solutions numériques et IA pour artisans, indépendants et PME en PACA.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://facile-ia.fr",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://facile-ia.fr/#business",
        name: "Facile-IA",
        description:
          "Agence digitale augmentée — Solutions numériques et IA pour artisans, indépendants et PME en région PACA.",
        url: "https://facile-ia.fr",
        telephone: "+33610026450",
        email: "contact@facile-ia.fr",
        address: {
          "@type": "PostalAddress",
          streetAddress: "325 Chemin du Stade",
          addressLocality: "Puyloubier",
          addressRegion: "Provence-Alpes-Côte d'Azur",
          postalCode: "13114",
          addressCountry: "FR",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 43.5264,
          longitude: 5.6772,
        },
        priceRange: "€€",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "18:00",
          },
        ],
        sameAs: [
          "https://linkedin.com/company/facile-ia",
          "https://twitter.com/facile_ia",
          "https://instagram.com/facile.ia",
          "https://facebook.com/facile.ia",
        ],
        founder: {
          "@type": "Person",
          name: "Thomas VAN DORSSELAERE",
        },
        areaServed: {
          "@type": "GeoCircle",
          geoMidpoint: {
            "@type": "GeoCoordinates",
            latitude: 43.5264,
            longitude: 5.6772,
          },
          geoRadius: "100000",
        },
        knowsAbout: [
          "Intelligence artificielle",
          "Développement web",
          "Automatisation",
          "Solutions numériques PME",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://facile-ia.fr/#website",
        url: "https://facile-ia.fr",
        name: "Facile-IA",
        description: "Agence digitale augmentée par l'intelligence artificielle",
        publisher: { "@id": "https://facile-ia.fr/#business" },
        inLanguage: "fr-FR",
      },
    ],
  }

  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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

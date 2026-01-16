import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FACILE-IA - Solutions d'IA pour votre entreprise",
  description:
    "Agence d'IA spécialisée dans les solutions d'intelligence artificielle pour les entreprises. Découvrez WolfEdge et FEAsy, nos deux projets innovants.",
  generator: "v0.app",
}

export default function RootLayout({ children }: { children: React.React.ReactNode }) {
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
          <Analytics />
        </ThemeProvider>
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}

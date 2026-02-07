import { Header } from "@/components/header"
import { SpotlightEffect } from "@/components/spotlight-effect"
import { LandingTemporaire } from "@/components/landing-temporaire"

// ═══════════════════════════════════════════════════════════════
// 🔄 PAGE TEMPORAIRE — Pour revenir au site complet, décommenter
// le bloc ci-dessous et supprimer LandingTemporaire.
// ═══════════════════════════════════════════════════════════════
// import { Hero } from "@/components/hero"
// import { Services } from "@/components/services"
// import { Testimonials } from "@/components/testimonials"
// import { Pricing } from "@/components/pricing"
// import { Contact } from "@/components/contact"
// import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-background relative overflow-x-hidden">
      {/* Spotlight global qui suit la souris sur toute la page */}
      <SpotlightEffect />

      <Header />
      <LandingTemporaire />

      {/* ── Site complet (décommenter pour restaurer) ──
      <Hero />
      <Services />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
      */}
    </main>
  )
}

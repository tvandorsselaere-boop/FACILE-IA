import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Testimonials } from "@/components/testimonials"
import { Pricing } from "@/components/pricing"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { SpotlightEffect } from "@/components/spotlight-effect"

export default function Home() {
  return (
    <main className="bg-background relative">
      {/* Spotlight global qui suit la souris sur toute la page */}
      <SpotlightEffect />
      
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  )
}

import { Header } from "@/components/Header"
import { PageNavigation } from "@/components/PageNavigation"
import { HeroSection } from "@/components/sections/HeroSection"
import { ServicesSection } from "@/components/sections/ServicesSection"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { ContactSection } from "@/components/sections/ContactSection"

export default function Home() {
  return (
    <>
      <Header />
      <PageNavigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
    </>
  )
}

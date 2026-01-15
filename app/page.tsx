import { Header } from "@/components/Header"
import { PageNavigation } from "@/components/PageNavigation"
import { HeroSection } from "@/components/sections/HeroSection"
import { PackSerenite } from "@/components/sections/PackSerenite"
import { ToolsLibrary } from "@/components/sections/ToolsLibrary"
import { PricingComparison } from "@/components/sections/PricingComparison"
import { LabSection } from "@/components/sections/LabSection"
import { ProcessTimeline } from "@/components/sections/ProcessTimeline"
import { FAQ } from "@/components/sections/FAQ"
import { CTAFinal } from "@/components/sections/CTAFinal"

export default function Home() {
  return (
    <>
      <Header />
      <PageNavigation />
      <main>
        <HeroSection />
        <PackSerenite />
        <ToolsLibrary />
        <PricingComparison />
        <LabSection />
        <ProcessTimeline />
        <FAQ />
        <CTAFinal />
      </main>
    </>
  )
}

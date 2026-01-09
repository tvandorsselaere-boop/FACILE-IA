import { Header } from "@/components/Header"
import { HeroSlider } from "@/components/HeroSlider"
import { LogoHero } from "@/components/LogoHero"

export default function Home() {
  return (
    <>
      <Header />
      
{/* Logo fixe - Sans cadre rouge */}
<div className="fixed top-[160px] left-0 right-0 z-50 pointer-events-none flex items-center justify-center">
  <div className="relative w-[1000px] h-[180px] pointer-events-auto">
    <div className="absolute inset-0 flex items-center justify-center">
      <LogoHero />
    </div>
  </div>
</div>
      
      {/* Slider en dessous */}
      <HeroSlider />
    </>
  )
}

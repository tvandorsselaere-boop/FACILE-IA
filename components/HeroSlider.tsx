"use client"

import { useState, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectFade } from "swiper/modules"
import type { Swiper as SwiperType } from "swiper"
import { motion, type Variants } from "framer-motion"

import "swiper/css"
import "swiper/css/effect-fade"

const slides = [
  { title: "DIGITALISATION PME", subtitle: "Services PME", desc: "20 ans d'Airbus appliqués à l'IA" },
  { title: "Pack Sérénité", subtitle: "Services PME", desc: "999€ + 49€/mois • ROI immédiat" },
  { title: "WolfEdge", subtitle: "Fintech Q1 2026", desc: "AI Trading Journal • €9.99/mois" },
  { title: "FEAsy", subtitle: "Engineering Q4 2026", desc: "FEA democratized • 100h → 5min" },
]

const buttonGlowVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.8
  },
  hover: {
    opacity: 1,
    scale: 2,
  },
}

const buttonGlowTransition = {
  opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  scale: { duration: 0.5, type: "spring" as const, stiffness: 300, damping: 25 },
}

export function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const swiperRef = useRef<SwiperType | null>(null)

  return (
    <div className="relative h-screen w-full overflow-hidden bg-background">
      <Swiper
        modules={[EffectFade]}
        effect="fade"
        fadeEffect={{
          crossFade: true
        }}
        speed={1000}
        loop={true}
        allowTouchMove={false}
        onSwiper={(s) => (swiperRef.current = s)}
        onSlideChange={(s) => setActiveIndex(s.activeIndex)}
        className="h-full w-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i} className="!flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center px-8 pt-48">
              <div className="relative z-10 text-center max-w-4xl">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.6 }}
                  className="mb-4"
                >
                  <span className="text-lg font-light tracking-widest uppercase text-muted-foreground">
                    {slide.subtitle}
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-6xl md:text-8xl font-light mb-8 text-foreground"
                >
                  {slide.title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl md:text-2xl font-light text-muted-foreground"
                >
                  {slide.desc}
                </motion.p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination dots - Liquid Glass */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 px-6 py-3 rounded-2xl backdrop-blur-2xl border border-white/30 shadow-2xl transition-all duration-300"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 50%, rgba(0,0,0,0.02) 100%)',
          backdropFilter: 'blur(20px) saturate(180%) brightness(110%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%) brightness(110%)',
          boxShadow: '0 4px 16px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2), 0 0 15px rgba(59,130,246,0.1)'
        }}
      >
        {slides.map((_, i) => {
          const realIndex = activeIndex % slides.length
          const isActive = i === realIndex

          return (
            <button
              key={i}
              onClick={() => swiperRef.current?.slideToLoop(i)}
              className="relative group transition-all duration-300 hover:scale-110"
            >
              <div className={`rounded-full transition-all duration-300 ${
                isActive
                  ? 'w-3 h-3 bg-white/10 backdrop-blur-md border border-white/20'
                  : 'w-2 h-2 bg-white/10 backdrop-blur-md border border-white/20 group-hover:bg-white/20 group-hover:w-2.5 group-hover:h-2.5'
              }`} />

              {/* Glow bleu pour tous - derrière le verre */}
              <div className={`absolute inset-0 rounded-full transition-all duration-300 -z-10 ${
                isActive
                  ? 'bg-[radial-gradient(circle,rgba(59,130,246,0.4)_0%,transparent_70%)] opacity-100'
                  : 'bg-[radial-gradient(circle,rgba(59,130,246,0.4)_0%,transparent_70%)] opacity-0 group-hover:opacity-100'
              }`} />
            </button>
          )
        })}
      </div>

{/* Navigation arrows - True Liquid Glass */}
<button
  onClick={() => swiperRef.current?.slidePrev()}
  className="fixed left-8 top-1/2 -translate-y-1/2 z-[120] w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-2xl border border-white/30 shadow-2xl transition-all duration-500 hover:border-white/50 hover:shadow-[0_0_50px_rgba(59,130,246,0.6),0_0_100px_rgba(59,130,246,0.3),0_0_30px_rgba(59,130,246,0.8)] hover:scale-110"
  style={{
    pointerEvents: 'auto',
    background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 50%, rgba(0,0,0,0.02) 100%)',
    backdropFilter: 'blur(25px) saturate(200%) brightness(110%)',
    WebkitBackdropFilter: 'blur(25px) saturate(200%) brightness(110%)',
    boxShadow: '0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2), 0 0 20px rgba(59,130,246,0.2)'
  }}
>
  <svg
    className="w-7 h-7 text-blue-400 drop-shadow-lg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.5}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
</button>

<button
  onClick={() => swiperRef.current?.slideNext()}
  className="fixed right-8 top-1/2 -translate-y-1/2 z-[120] w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-2xl border border-white/30 shadow-2xl transition-all duration-500 hover:border-white/50 hover:shadow-[0_0_50px_rgba(59,130,246,0.6),0_0_100px_rgba(59,130,246,0.3),0_0_30px_rgba(59,130,246,0.8)] hover:scale-110"
  style={{
    pointerEvents: 'auto',
    background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 50%, rgba(0,0,0,0.02) 100%)',
    backdropFilter: 'blur(25px) saturate(200%) brightness(110%)',
    WebkitBackdropFilter: 'blur(25px) saturate(200%) brightness(110%)',
    boxShadow: '0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2), 0 0 20px rgba(59,130,246,0.2)'
  }}
>
  <svg
    className="w-7 h-7 text-blue-400 drop-shadow-lg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.5}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
</button>
    </div>
  )
}

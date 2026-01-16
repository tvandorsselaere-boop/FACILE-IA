"use client"

import { Star, Quote } from "lucide-react"
import { PageSection, SectionHeader, Carousel, FeatureCard } from "@/components/layout"

const testimonials = [
  {
    id: 1,
    name: "Marie Dupont",
    role: "Artisan Fleuriste",
    company: "Les Fleurs de Marie",
    avatar: "🌸",
    rating: 5,
    text: "Grâce à Facile-IA, je ne passe plus mes dimanches à faire ma comptabilité. Les notes de frais sont traitées automatiquement. J'ai retrouvé du temps pour ma famille !",
  },
  {
    id: 2,
    name: "Jean-Pierre Martin",
    role: "Gérant",
    company: "Plomberie Martin & Fils",
    avatar: "🔧",
    rating: 5,
    text: "Les relances d'impayés, c'était ma hantise. Maintenant l'IA s'en occupe avec le bon ton. Mes clients paient plus vite et je garde de bonnes relations.",
  },
  {
    id: 3,
    name: "Sophie Leroy",
    role: "Gérante",
    company: "Salon Beauté & Zen",
    avatar: "💅",
    rating: 5,
    text: "La gestion des avis Google était chronophage. Facile-IA me propose des réponses parfaites en un clic. Ma note est passée de 4.2 à 4.8 étoiles !",
  },
]

export function TestimonialsSection() {
  return (
    <PageSection id="testimonials">
      <SectionHeader
        title="Ils nous font"
        titleHighlight="confiance"
        subtitle="Des artisans et PME comme vous"
      />

      <Carousel itemWidth="w-[340px] md:w-[400px]">
        {testimonials.map((testimonial) => (
          <FeatureCard key={testimonial.id} className="h-full flex flex-col">
            {/* Quote */}
            <Quote className="w-8 h-8 text-glow/30 mb-4" />
            
            {/* Text */}
            <p className="text-muted-foreground flex-1 leading-relaxed mb-6">
              "{testimonial.text}"
            </p>
            
            {/* Rating */}
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-glow text-glow" />
              ))}
            </div>
            
            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-border">
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-2xl">
                {testimonial.avatar}
              </div>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                <p className="text-xs text-glow">{testimonial.company}</p>
              </div>
            </div>
          </FeatureCard>
        ))}
      </Carousel>

      <p className="text-center mt-8 text-sm text-muted-foreground/50 italic">
        * Témoignages de démonstration
      </p>
    </PageSection>
  )
}

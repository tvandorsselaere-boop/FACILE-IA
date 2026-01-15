"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { LiquidGlassCard } from "@/components/ui/LiquidGlassCard"

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
    <section id="testimonials" className="snap-section relative py-20 px-4">
      <div className="max-w-7xl mx-auto h-full flex flex-col justify-center">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-light mb-2">
            Ils nous font <span className="text-glow">confiance</span>
          </h2>
          <p className="text-sm text-muted-foreground">
            Des artisans et PME comme vous
          </p>
        </motion.div>

        {/* Témoignages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <LiquidGlassCard className="p-6 h-full flex flex-col">
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-glow/30 mb-4" />
                
                {/* Texte */}
                <p className="text-muted-foreground flex-1 leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-glow text-glow" />
                  ))}
                </div>
                
                {/* Auteur */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-12 h-12 rounded-full glass-card-glow flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-glow">{testimonial.company}</p>
                  </div>
                </div>
              </LiquidGlassCard>
            </motion.div>
          ))}
        </div>

        {/* Note de démo */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8 text-sm text-muted-foreground/50 italic"
        >
          * Témoignages de démonstration - Section en cours de développement
        </motion.p>
      </div>
    </section>
  )
}

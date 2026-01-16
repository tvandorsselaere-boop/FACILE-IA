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
    <section id="testimonials" className="snap-section relative">
      <div className="max-w-7xl mx-auto flex flex-col justify-center">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            Ils nous font <span className="text-glow">confiance</span>
          </h2>
          <p className="text-muted-foreground">
            Des artisans et PME comme vous
          </p>
        </motion.div>

        {/* Témoignages - EMPILÉS pour plus d'espace */}
        <div className="space-y-6 max-w-3xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <LiquidGlassCard className="p-8 flex items-center gap-6">
                {/* Avatar grand */}
                <div className="w-20 h-20 rounded-full glass-card-glow flex items-center justify-center text-4xl flex-shrink-0">
                  {testimonial.avatar}
                </div>
                
                <div className="flex-1">
                  {/* Quote icon */}
                  <Quote className="w-6 h-6 text-glow/30 mb-3" />
                  
                  {/* Texte */}
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center justify-between">
                    {/* Auteur */}
                    <div>
                      <p className="font-semibold text-lg">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role} • {testimonial.company}</p>
                    </div>
                    
                    {/* Rating */}
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-glow text-glow" />
                      ))}
                    </div>
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

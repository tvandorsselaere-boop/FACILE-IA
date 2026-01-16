"use client"

import { Star } from "lucide-react"
import { motion } from "framer-motion"

export function Testimonials() {
  const testimonials = [
    {
      name: "Marie Dubois",
      role: "CEO, TechCorp",
      content: "FACILE-IA a transformé notre processus de gestion des données. Les résultats ont dépassé nos attentes.",
      rating: 5,
    },
    {
      name: "Jean Martin",
      role: "Directeur Opérationnel, InnovateLabs",
      content: "L'implémentation de leurs solutions IA a réduit nos coûts opérationnels de 40% en seulement 6 mois.",
      rating: 5,
    },
    {
      name: "Sophie Laurent",
      role: "CTO, DataVision",
      content:
        "Le support technique et la flexibilité des solutions proposées sont remarquables. Une vraie valeur ajoutée.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Ce que nos clients disent</h2>
          <p className="text-muted-foreground text-lg">Découvrez les succès de nos partenaires</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="p-8 bg-secondary rounded-lg border border-border card-hover-glow"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

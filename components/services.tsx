"use client"

import { motion } from "framer-motion"

export function Services() {
  const services = [
    {
      number: "01",
      title: "Automatisation Intelligente",
      description: "Automatisez vos processus métier avec des solutions IA personnalisées",
    },
    {
      number: "02",
      title: "Analyse Prédictive",
      description: "Anticipez les tendances du marché et les comportements clients",
    },
    {
      number: "03",
      title: "Optimisation des Ressources",
      description: "Maximisez l'efficacité opérationnelle de votre entreprise",
    },
    {
      number: "04",
      title: "Support 24/7",
      description: "Assistants IA disponibles en permanence pour votre activité",
    },
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Nos Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Une gamme complète de solutions d'IA adaptées à vos besoins
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="p-8 bg-secondary rounded-lg card-hover-glow"
            >
              <div className="text-accent text-4xl font-bold mb-4">{service.number}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

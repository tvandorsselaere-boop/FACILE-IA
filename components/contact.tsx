"use client"

import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Prêt à automatiser votre activité ?
        </h2>
        <p className="text-muted-foreground mb-8 text-lg">
          Réservez un appel découverte gratuit de 15 minutes.
        </p>
        <motion.div
          animate={{
            boxShadow: [
              "0 0 20px rgba(99, 102, 241, 0.3)",
              "0 0 40px rgba(99, 102, 241, 0.5)",
              "0 0 20px rgba(99, 102, 241, 0.3)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="inline-block rounded-lg"
        >
          <Link href="/contact">
            <Button variant="liquidGlass" size="lg">
              <Calendar className="w-5 h-5 mr-2" />
              Réserver un appel
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}

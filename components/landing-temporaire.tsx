"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, MessageCircle, Sparkles, Users, Globe, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LogoHero } from "@/components/LogoHero"
import { motion } from "framer-motion"

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
})

export function LandingTemporaire() {
  const phone = "06 10 02 64 50"
  const phoneLink = "tel:+33610026450"
  const email = "contact@facile-ia.fr"
  const whatsappNumber = "33610026450"
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Bonjour, je souhaite en savoir plus sur vos services.`

  return (
    <div className="relative min-h-screen">
      {/* ── Hero Section ── */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 dot-grid opacity-20 z-0" />

        <div className="relative z-10 max-w-6xl w-full mx-auto text-center">
          {/* Badge */}
          <motion.div {...fadeUp(0)} className="inline-block mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-semibold">
              <Sparkles size={16} />
              Nouvelle agence — Ouverture 2026
            </span>
          </motion.div>

          {/* Logo animé */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="h-64 sm:h-80 md:h-96 w-full mx-auto mb-6"
          >
            <LogoHero />
          </motion.div>

          {/* Tagline */}
          <motion.p
            {...fadeUp(0.3)}
            className="text-xl sm:text-2xl text-muted-foreground mb-4 mx-auto max-w-3xl"
          >
            L'intelligence artificielle au service des artisans, indépendants et PME.
          </motion.p>

          <motion.p
            {...fadeUp(0.4)}
            className="text-base sm:text-lg text-muted-foreground/80 mb-10 mx-auto max-w-4xl whitespace-nowrap"
          >
            Des solutions numériques performantes, à des tarifs accessibles, avec un vrai contact humain.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            {...fadeUp(0.5)}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <a href={phoneLink}>
              <Button variant="liquidGlass" size="lg" className="w-full sm:w-auto">
                <Phone className="mr-2" size={20} />
                Appelez-nous
              </Button>
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button variant="liquidGlass" size="lg" className="w-full sm:w-auto liquid-glass-btn-outline">
                <MessageCircle className="mr-2" size={20} />
                WhatsApp
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Qui sommes-nous ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Votre agence digitale augmentée
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              <strong className="text-foreground">Facile-IA</strong> est une agence digitale nouvelle génération,
              basée à <strong className="text-foreground">Puyloubier</strong>, au cœur de la région PACA.
              Notre mission : rendre l'intelligence artificielle accessible aux artisans, indépendants
              et PME qui veulent gagner du temps, automatiser leurs tâches répétitives et se concentrer
              sur leur cœur de métier — le tout à des <strong className="text-foreground">tarifs compétitifs</strong> et
              avec un <strong className="text-foreground">accompagnement humain</strong> à chaque étape.
            </p>
          </motion.div>

          {/* Valeurs / Pilliers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Sparkles,
                title: "IA accessible",
                desc: "Des outils d'intelligence artificielle pensés pour les pros, pas les ingénieurs. Simples, efficaces, abordables.",
              },
              {
                icon: Users,
                title: "Contact humain",
                desc: "Un interlocuteur dédié qui vous connaît, vous écoute et adapte les solutions à votre réalité terrain.",
              },
              {
                icon: MapPin,
                title: "Ancrage local",
                desc: "Basés à Puyloubier, nous intervenons dans toute la région PACA. On se déplace, on se rencontre.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 bg-secondary rounded-lg border border-border card-hover-glow text-center"
              >
                <item.icon className="mx-auto mb-4 text-accent" size={32} />
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ce qu'on prépare ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ce que nous préparons
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Une offre tout-en-un pour digitaliser votre activité simplement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Globe,
                title: "Site web professionnel",
                desc: "Un site moderne, rapide et optimisé pour le référencement, qui reflète votre savoir-faire et attire vos clients.",
              },
              {
                icon: Wrench,
                title: "Application métier sur-mesure",
                desc: "Un outil pensé pour votre activité : gestion de devis, planning, facturation, relation client — tout au même endroit.",
              },
              {
                icon: Sparkles,
                title: "Automatisation intelligente",
                desc: "L'IA gère vos tâches répétitives : réponses aux emails, relances, prise de RDV, tri des demandes…",
              },
              {
                icon: Users,
                title: "Accompagnement personnalisé",
                desc: "Formation, support et suivi. On ne vous livre pas un outil, on vous accompagne pour qu'il fonctionne vraiment.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 bg-background rounded-lg border border-border card-hover-glow"
              >
                <item.icon className="mb-4 text-accent" size={28} />
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Déjà disponible ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              On vient d'ouvrir — mais on est déjà opérationnels
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Notre offre complète est en cours de finalisation, mais nous proposons
              d'ores et déjà des <strong className="text-foreground">services personnalisés</strong> :
              création de site web, conseil en digitalisation, automatisation de tâches
              avec l'IA, et accompagnement sur-mesure. Chaque projet commence par un
              échange gratuit pour comprendre vos besoins.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={phoneLink}>
                <Button variant="liquidGlass" size="lg" className="w-full sm:w-auto">
                  <Phone className="mr-2" size={20} />
                  06 10 02 64 50
                </Button>
              </a>
              <a href={`mailto:${email}`}>
                <Button variant="liquidGlass" size="lg" className="w-full sm:w-auto liquid-glass-btn-outline">
                  <Mail className="mr-2" size={20} />
                  contact@facile-ia.fr
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Contact / Footer ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Coordonnées */}
            <div>
              <h3 className="text-xl font-bold mb-6">Contactez-nous</h3>
              <ul className="space-y-4">
                <li>
                  <a href={phoneLink} className="flex gap-3 items-center text-foreground hover:text-accent transition-colors">
                    <Phone size={20} className="text-accent flex-shrink-0" />
                    <span>{phone}</span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${email}`} className="flex gap-3 items-center text-foreground hover:text-accent transition-colors">
                    <Mail size={20} className="text-accent flex-shrink-0" />
                    <span>{email}</span>
                  </a>
                </li>
                <li>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex gap-3 items-center text-foreground hover:text-accent transition-colors">
                    <MessageCircle size={20} className="text-accent flex-shrink-0" />
                    <span>WhatsApp</span>
                  </a>
                </li>
                <li className="flex gap-3 items-center text-muted-foreground">
                  <MapPin size={20} className="text-accent flex-shrink-0" />
                  <span>Puyloubier — Région PACA, France</span>
                </li>
              </ul>
            </div>

            {/* Site & Infos */}
            <div>
              <h3 className="text-xl font-bold mb-6">Facile-IA</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Agence digitale augmentée par l'intelligence artificielle.
                Solutions numériques pour artisans, indépendants et PME en région PACA.
              </p>
              <p className="text-sm text-muted-foreground">
                🌐 <strong className="text-foreground">facile-ia.fr</strong>
              </p>
            </div>
          </div>

          {/* Copyright + Liens légaux */}
          <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Facile-IA. Tous droits réservés.</p>
            <div className="flex gap-6">
              <Link href="/mentions-legales" className="hover:text-foreground transition-colors">
                Mentions légales
              </Link>
              <Link href="/confidentialite" className="hover:text-foreground transition-colors">
                Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

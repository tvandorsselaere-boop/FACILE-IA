"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Mail, Phone, MessageCircle, MapPin, Calendar } from "lucide-react"

export default function ContactPage() {
  // ⚠️ REMPLACER PAR TES VRAIES INFOS
  const calendlyUrl = "https://calendly.com/facile-ia/decouverte"
  const contactInfo = {
    email: "contact@facile-ia.fr",
    phone: "+33 6 XX XX XX XX",
    whatsapp: "336XXXXXXXX",
    location: "Région PACA, France",
  }
  const socialLinks = {
    linkedin: "https://linkedin.com/company/facile-ia",
    twitter: "https://twitter.com/facile_ia",
    instagram: "https://instagram.com/facile.ia",
    facebook: "https://facebook.com/facile.ia",
  }

  return (
    <main className="bg-background min-h-screen">
      <Header />

      <div className="pt-20">
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">

            <Link href="/" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
              <ArrowLeft size={20} />
              Retour à l'accueil
            </Link>

            <div className="mb-8">
              <span className="text-accent text-sm font-medium">Contact</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
              Parlons de votre projet
            </h1>

            <p className="text-xl text-muted-foreground mb-8 text-balance">
              Réservez un appel découverte gratuit de 15 minutes. On échange sur vos besoins, sans engagement.
            </p>

            <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="liquidGlass" size="lg">
                <Calendar className="w-5 h-5 mr-2" />
                Réserver un appel
              </Button>
            </a>

            {/* Contact Direct + Réseaux */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">

              {/* Contact Direct */}
              <div>
                <h2 className="text-3xl font-bold mb-4">Contact Direct</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Préférez un contact direct ? Appelez-nous ou envoyez un message.
                </p>
                <ul className="space-y-4">
                  <li>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="flex gap-3 items-center text-foreground hover:text-accent transition-colors"
                    >
                      <Mail size={20} className="text-accent" />
                      <span>{contactInfo.email}</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                      className="flex gap-3 items-center text-foreground hover:text-accent transition-colors"
                    >
                      <Phone size={20} className="text-accent" />
                      <span>{contactInfo.phone}</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`https://wa.me/${contactInfo.whatsapp}?text=Bonjour, je souhaite en savoir plus sur vos services.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-3 items-center text-foreground hover:text-accent transition-colors"
                    >
                      <MessageCircle size={20} className="text-accent" />
                      <span>WhatsApp</span>
                    </a>
                  </li>
                  <li className="flex gap-3 items-center text-muted-foreground">
                    <MapPin size={20} className="text-accent" />
                    <span>{contactInfo.location}</span>
                  </li>
                </ul>
              </div>

              {/* Réseaux Sociaux */}
              <div>
                <h2 className="text-3xl font-bold mb-4">Suivez-nous</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Retrouvez nos actualités et conseils sur les réseaux.
                </p>
                <ul className="space-y-3">
                  {[
                    { name: "LinkedIn", url: socialLinks.linkedin },
                    { name: "Twitter / X", url: socialLinks.twitter },
                    { name: "Instagram", url: socialLinks.instagram },
                    { name: "Facebook", url: socialLinks.facebook },
                  ].map((social) => (
                    <li key={social.name}>
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex gap-3 items-start hover:text-accent transition-colors"
                      >
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-foreground">{social.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Calendly Embed */}
            <div className="mt-16 bg-secondary rounded-lg border border-border overflow-hidden">
              <div
                className="calendly-inline-widget"
                data-url={`${calendlyUrl}?hide_gdpr_banner=1&background_color=1a1a1a&text_color=ffffff&primary_color=3b82f6`}
                style={{ minWidth: '100%', height: '650px' }}
              />
            </div>

            {/* CTA Final */}
            <div className="mt-16 text-center">
              <h2 className="text-3xl font-bold mb-6">Une question rapide ?</h2>
              <a
                href={`https://wa.me/${contactInfo.whatsapp}?text=Bonjour, j'ai une question rapide.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="liquidGlass" size="lg" className="liquid-glass-btn-outline">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Envoyer un WhatsApp
                </Button>
              </a>
            </div>

          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
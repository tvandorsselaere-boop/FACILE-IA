"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Mail, Phone, MessageCircle, MapPin } from "lucide-react"

export default function ContactPage() {
  const contactInfo = {
    email: "thomas@facile-ia.fr",
    phone: "06 10 02 64 50",
    whatsapp: "33610026450",
    location: "Puyloubier — Région PACA, France",
  }

  const whatsappLink = `https://wa.me/${contactInfo.whatsapp}?text=Bonjour, je souhaite en savoir plus sur vos services.`

  return (
    <main className="bg-background min-h-screen">
      <Header />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">

          <Link href="/" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
            <ArrowLeft size={20} />
            Retour à l'accueil
          </Link>

          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            Parlons de votre projet
          </h1>

          <p className="text-xl text-muted-foreground mb-12">
            Appelez-nous, envoyez un message — on vous répond rapidement. Premier échange gratuit, sans engagement.
          </p>

          {/* CTA principaux */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a href={`tel:+33${contactInfo.phone.replace(/\s/g, '').slice(1)}`}>
              <Button variant="liquidGlass" size="lg" className="w-full sm:w-auto liquid-glass-btn-primary">
                <Phone className="w-5 h-5 mr-2" />
                {contactInfo.phone}
              </Button>
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button variant="liquidGlass" size="lg" className="w-full sm:w-auto">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </Button>
            </a>
            <a href={`mailto:${contactInfo.email}`}>
              <Button variant="liquidGlass" size="lg" className="w-full sm:w-auto liquid-glass-btn-outline">
                <Mail className="w-5 h-5 mr-2" />
                Email
              </Button>
            </a>
          </div>

          {/* Coordonnées */}
          <div className="p-8 bg-secondary rounded-lg border border-border">
            <h2 className="text-2xl font-bold mb-6">Nos coordonnées</h2>
            <ul className="space-y-5">
              <li>
                <a href={`tel:+33${contactInfo.phone.replace(/\s/g, '').slice(1)}`} className="flex gap-4 items-center text-foreground hover:text-accent transition-colors">
                  <Phone size={22} className="text-accent flex-shrink-0" />
                  <div>
                    <p className="font-medium">{contactInfo.phone}</p>
                    <p className="text-sm text-muted-foreground">Du lundi au vendredi, 9h — 18h</p>
                  </div>
                </a>
              </li>
              <li>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex gap-4 items-center text-foreground hover:text-accent transition-colors">
                  <MessageCircle size={22} className="text-accent flex-shrink-0" />
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <p className="text-sm text-muted-foreground">Réponse rapide, même le weekend</p>
                  </div>
                </a>
              </li>
              <li>
                <a href={`mailto:${contactInfo.email}`} className="flex gap-4 items-center text-foreground hover:text-accent transition-colors">
                  <Mail size={22} className="text-accent flex-shrink-0" />
                  <div>
                    <p className="font-medium">{contactInfo.email}</p>
                    <p className="text-sm text-muted-foreground">Réponse sous 24h</p>
                  </div>
                </a>
              </li>
              <li className="flex gap-4 items-center text-muted-foreground">
                <MapPin size={22} className="text-accent flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">{contactInfo.location}</p>
                  <p className="text-sm">Interventions dans toute la région PACA</p>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </main>
  )
}

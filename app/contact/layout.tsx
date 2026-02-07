import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact — Réservez un appel découverte gratuit",
  description:
    "Contactez Facile-IA à Puyloubier. Appelez le 06 10 02 64 50, envoyez un email à thomas@facile-ia.fr ou réservez un appel découverte gratuit de 15 minutes.",
  alternates: { canonical: "https://facile-ia.fr/contact" },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}

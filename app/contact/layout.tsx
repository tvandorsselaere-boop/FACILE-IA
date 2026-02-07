import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact — Appelez-nous ou envoyez un message",
  description:
    "Contactez Facile-IA à Puyloubier. Appelez le 06 10 02 64 50, WhatsApp ou email thomas@facile-ia.fr. Premier échange gratuit, sans engagement.",
  alternates: { canonical: "https://facile-ia.fr/contact" },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}

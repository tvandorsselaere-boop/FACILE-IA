import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales du site facile-ia.fr — Thomas VAN DORSSELAERE, micro-entrepreneur, SIRET 982 025 827 00014, Puyloubier.",
  alternates: { canonical: "https://facile-ia.fr/mentions-legales" },
  robots: { index: true, follow: false },
}

export default function MentionsLayout({ children }: { children: React.ReactNode }) {
  return children
}

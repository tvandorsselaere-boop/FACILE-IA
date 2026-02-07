import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité et protection des données personnelles de facile-ia.fr. Conformité RGPD, droits des utilisateurs, cookies.",
  alternates: { canonical: "https://facile-ia.fr/confidentialite" },
  robots: { index: true, follow: false },
}

export default function ConfidentialiteLayout({ children }: { children: React.ReactNode }) {
  return children
}

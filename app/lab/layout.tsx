import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Le Lab — Nos projets innovants",
  description:
    "Découvrez les projets R&D de Facile-IA : WolfEdge (cybersécurité) et FEAsy (calculs d'ingénierie simplifiés). Innovation au service des PME.",
  alternates: { canonical: "https://facile-ia.fr/lab" },
}

export default function LabLayout({ children }: { children: React.ReactNode }) {
  return children
}

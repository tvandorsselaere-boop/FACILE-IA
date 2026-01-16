"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "999",
      description: "Parfait pour débuter",
      features: ["Jusqu'à 1 solution IA", "Support par email", "Analytics basique", "Mise à jour mensuelles"],
    },
    {
      name: "Professional",
      price: "2999",
      description: "Le plus populaire",
      features: [
        "Jusqu'à 5 solutions IA",
        "Support prioritaire 24/7",
        "Analytics avancée",
        "Mises à jour en temps réel",
        "Optimisation personnalisée",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Sur devis",
      description: "Solutions sur mesure",
      features: [
        "Solutions IA illimitées",
        "Support dédié",
        "Analytics complète",
        "Infrastructure personnalisée",
        "Formation d'équipe incluse",
      ],
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Tarification Simple</h2>
          <p className="text-muted-foreground text-lg">Choisissez le plan qui correspond à vos besoins</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg p-8 ${
                plan.highlighted
                  ? "border-2 border-accent bg-secondary/50"
                  : "bg-secondary card-hover-glow"
              }`}
            >
              {plan.highlighted && (
                <div className="inline-block px-3 py-1 bg-accent text-accent-foreground text-sm font-medium rounded-full mb-4">
                  Populaire
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-muted-foreground mb-6">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.price !== "Sur devis" && <span className="text-muted-foreground">/mois</span>}
              </div>
              <Button
                variant="liquidGlass"
                className={cn(
                  "w-full mb-8",
                  plan.highlighted ? "liquid-glass-btn-primary" : "liquid-glass-btn-outline"
                )}
              >
                Commencer
              </Button>
              <div className="space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex gap-2 items-start">
                    <Check size={20} className="text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

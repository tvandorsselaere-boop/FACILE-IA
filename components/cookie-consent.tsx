"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

const COOKIE_CONSENT_KEY = "facile-ia-cookie-consent"

type ConsentValue = "accepted" | "refused" | null

export function CookieConsent() {
  const [consent, setConsent] = useState<ConsentValue>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (stored === "accepted" || stored === "refused") {
      setConsent(stored)
    } else {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => setVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted")
    setConsent("accepted")
    setVisible(false)
  }

  const handleRefuse = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "refused")
    setConsent("refused")
    setVisible(false)
  }

  // Don't render if consent already given
  if (consent) return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6"
        >
          <div className="max-w-4xl mx-auto bg-background/95 backdrop-blur-xl border border-border rounded-xl p-6 shadow-2xl">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div className="flex-1">
                <p className="text-sm text-foreground font-medium mb-1">
                  Ce site utilise des cookies
                </p>
                <p className="text-sm text-muted-foreground">
                  Nous utilisons des cookies de mesure d'audience pour améliorer votre expérience.{" "}
                  <Link href="/confidentialite" className="text-accent hover:underline">
                    En savoir plus
                  </Link>
                </p>
              </div>
              <div className="flex gap-3 flex-shrink-0">
                <Button
                  variant="liquidGlass"
                  size="sm"
                  className="liquid-glass-btn-outline"
                  onClick={handleRefuse}
                >
                  Refuser
                </Button>
                <Button
                  variant="liquidGlass"
                  size="sm"
                  className="liquid-glass-btn-primary"
                  onClick={handleAccept}
                >
                  Accepter
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/**
 * Hook to check if analytics consent was given.
 * Use this to conditionally load analytics.
 */
export function useAnalyticsConsent(): boolean {
  const [allowed, setAllowed] = useState(false)

  useEffect(() => {
    setAllowed(localStorage.getItem(COOKIE_CONSENT_KEY) === "accepted")

    const handleStorage = () => {
      setAllowed(localStorage.getItem(COOKIE_CONSENT_KEY) === "accepted")
    }
    window.addEventListener("storage", handleStorage)
    return () => window.removeEventListener("storage", handleStorage)
  }, [])

  return allowed
}

"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export function Footer() {
  const socialLinks = {
    linkedin: "https://linkedin.com/company/facile-ia",
    twitter: "https://twitter.com/facile_ia",
    instagram: "https://instagram.com/facile.ia",
    facebook: "https://facebook.com/facile.ia",
  }

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-background/60 backdrop-blur-xl border-t border-white/10 dark:border-white/5 shadow-[0_-4px_30px_rgba(0,0,0,0.1)] py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {[
            {
              title: "Solutions",
              links: [
                { href: "/#services", text: "Pack Sérénité" },
                { href: "/lab/wolfedge", text: "WolfEdge" },
                { href: "/lab/feasy", text: "FEAsy" }
              ]
            },
            {
              title: "Entreprise",
              links: [
                { href: "/contact", text: "Contact" },
                { href: "/lab", text: "Le Lab" }
              ]
            },
            {
              title: "Suivez-nous",
              links: [
                { href: socialLinks.linkedin, text: "LinkedIn", external: true },
                { href: socialLinks.twitter, text: "Twitter", external: true },
                { href: socialLinks.instagram, text: "Instagram", external: true },
                { href: socialLinks.facebook, text: "Facebook", external: true }
              ]
            },
            {
              title: "Contact",
              content: [
                "contact@facile-ia.fr",
                "06 10 02 64 50",
                "Puyloubier — PACA, France"
              ]
            }
          ].map((column, index) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h4 className="font-semibold mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links ? column.links.map((link) => (
                  <li key={link.text}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative text-muted-foreground hover:text-foreground transition-colors group"
                      >
                        {link.text}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="relative text-muted-foreground hover:text-foreground transition-colors group"
                      >
                        {link.text}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
                      </Link>
                    )}
                  </li>
                )) : column.content ? column.content.map((item) => (
                  <li key={item} className="text-muted-foreground">{item}</li>
                )) : null}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} FACILE-IA. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/mentions-legales" className="relative text-muted-foreground hover:text-foreground transition-colors group">
              Mentions légales
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
            </Link>
            <Link href="/confidentialite" className="relative text-muted-foreground hover:text-foreground transition-colors group">
              Confidentialité
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

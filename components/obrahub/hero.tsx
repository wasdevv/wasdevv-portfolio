"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function ObrahubHero() {
  const { t } = useLanguage()
  const h = t.obrahub.hero

  return (
    <section className="relative overflow-hidden">

      <div className="relative mx-auto flex min-h-[80vh] max-w-[1840px] flex-col justify-center px-6 lg:px-10 2xl:px-14 pb-20 pt-32 md:pb-28 md:pt-40">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-balance text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl lg:text-8xl"
        >
          {h.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-5 text-lg text-hp-soft md:text-2xl"
        >
          {h.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-8 max-w-[56ch] text-base text-muted-foreground md:text-lg"
        >
          {h.subtitle}
        </motion.p>

        <motion.ul
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-8 flex flex-wrap items-center gap-2"
        >
          {h.badges.map((badge) => (
            <li
              key={badge}
              className="inline-flex items-center gap-2 border border-border/70 bg-card px-3 py-1.5 font-mono text-xs text-muted-foreground"
            >
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-primary/70" />
              {badge}
            </li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-10"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 border border-primary bg-primary min-h-11 px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {h.ctaContact}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

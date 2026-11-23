"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Star, Terminal } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function SwarmHero() {
  const { t } = useLanguage()
  const h = t.swarm.hero

  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto flex min-h-[80vh] max-w-[1840px] flex-col justify-center px-6 lg:px-10 2xl:px-14 pb-24 pt-32 md:pb-32 md:pt-40">
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
          className="mt-8 max-w-2xl text-balance text-base text-muted-foreground md:text-lg"
        >
          {h.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="https://github.com/wasdevv/swarm"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 border border-primary bg-primary min-h-11 px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Star className="h-4 w-4" aria-hidden="true" />
            {h.ctaGithub}
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/wasdevv/swarm-plugin"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex min-h-11 items-center gap-2 border border-hp-line-3 bg-hp-bg px-5 text-sm font-semibold transition-colors hover:border-foreground"
          >
            <Terminal className="h-4 w-4" aria-hidden="true" />
            {h.ctaCli}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>

      </div>
    </section>
  )
}

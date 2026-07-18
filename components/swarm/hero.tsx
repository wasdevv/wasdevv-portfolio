"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Star, Terminal } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function SwarmHero() {
  const { t } = useLanguage()
  const h = t.swarm.hero

  return (
    <section className="relative overflow-hidden">
      <BackgroundGrid />

      <div className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-center px-4 pb-24 pt-32 md:px-6 md:pb-32 md:pt-40">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 font-mono text-xs uppercase tracking-wider text-muted-foreground"
        >
          {h.kicker}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-balance text-6xl font-bold leading-none tracking-tight md:text-[9rem]"
        >
          <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/40 bg-clip-text text-transparent">
            {h.title}
          </span>
          <motion.span
            aria-hidden
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1.05, repeat: Infinity, ease: "easeInOut" }}
            className="ml-2 inline-block h-[0.85em] w-[0.5ch] translate-y-[-0.05em] bg-primary align-middle"
          />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-6 font-mono text-lg text-primary md:text-2xl"
        >
          &gt; {h.tagline}
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
            className="group inline-flex items-center gap-2 border border-primary bg-primary px-4 py-2.5 font-mono text-sm text-primary-foreground transition-all hover:bg-primary/90"
          >
            <Star className="h-4 w-4" />
            {h.ctaGithub}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="https://github.com/wasdevv/swarm-plugin"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 border border-border bg-transparent px-4 py-2.5 font-mono text-sm transition-colors hover:border-foreground/60 hover:bg-foreground/5"
          >
            <Terminal className="h-4 w-4" />
            {h.ctaCli}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>

        <AgentDock label={h.agentLabel} />
      </div>
    </section>
  )
}

function BackgroundGrid() {
  return (
    <>
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,hsl(var(--primary)/0.12),transparent_60%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.15)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.15)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]"
      />
    </>
  )
}

function AgentDock({ label }: { label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="mt-20 flex items-end gap-4 md:gap-6"
    >
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="flex flex-col items-center gap-2">
          <motion.div
            animate={{
              opacity: [0.35, 1, 0.35],
              scale: [1, 1.06, 1],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.32,
            }}
            className="relative h-14 w-14 border border-primary/50 bg-primary/10 md:h-20 md:w-20"
          >
            <div className="absolute inset-1 border border-primary/25" />
            <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" />
          </motion.div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground md:text-xs">
            {label}·{i + 1}
          </span>
        </div>
      ))}
    </motion.div>
  )
}

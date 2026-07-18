"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, BookOpen, Star, Terminal } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function FinalCta() {
  const { t } = useLanguage()
  const f = t.swarm.finalCta

  return (
    <section className="relative overflow-hidden border-t border-border/50">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,hsl(var(--primary)/0.18),transparent_65%)]"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-24 md:px-6 md:py-32">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-4 font-mono text-xs uppercase tracking-wider text-muted-foreground"
        >
          {f.kicker}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-balance text-4xl font-semibold leading-tight md:text-6xl"
        >
          {f.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg"
        >
          {f.subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <CtaLink
            href="https://github.com/wasdevv/swarm"
            icon={<Star className="h-4 w-4" />}
            label={f.ctaGithub}
            variant="primary"
          />
          <CtaLink
            href="https://github.com/wasdevv/swarm-plugin"
            icon={<Terminal className="h-4 w-4" />}
            label={f.ctaCli}
          />
          <CtaLink
            href="https://github.com/wasdevv/swarm#readme"
            icon={<BookOpen className="h-4 w-4" />}
            label={f.ctaDocs}
          />
        </motion.div>
      </div>
    </section>
  )
}

function CtaLink({
  href,
  icon,
  label,
  variant = "ghost",
}: {
  href: string
  icon: React.ReactNode
  label: string
  variant?: "primary" | "ghost"
}) {
  const base =
    "group inline-flex items-center gap-2 border px-4 py-2.5 font-mono text-sm transition-colors"
  const styles =
    variant === "primary"
      ? "border-primary bg-primary text-primary-foreground hover:bg-primary/90"
      : "border-border bg-transparent hover:border-foreground/60 hover:bg-foreground/5"

  return (
    <a href={href} target="_blank" rel="noreferrer" className={`${base} ${styles}`}>
      {icon}
      {label}
      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  )
}

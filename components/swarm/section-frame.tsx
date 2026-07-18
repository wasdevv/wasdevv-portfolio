"use client"

import { motion } from "framer-motion"
import { type ReactNode } from "react"

type Props = {
  kicker: string
  title: string
  subtitle?: string
  index?: number
  children: ReactNode
  className?: string
}

// Editor-style section wrapper: line-numbered gutter + kicker comment + title.
// Every top-level slice of the /swarm page renders through this so the whole
// page reads like a single big source file with numbered sections.
export function SectionFrame({
  kicker,
  title,
  subtitle,
  children,
  className = "",
}: Props) {
  return (
    <section className={`relative border-t border-border/50 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 py-24 md:px-6 md:py-32">
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12 md:mb-16"
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            {kicker}
          </p>
          <h2 className="text-balance text-3xl font-semibold leading-tight md:text-5xl">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-4 max-w-3xl text-balance text-base text-muted-foreground md:text-lg">
              {subtitle}
            </p>
          ) : null}
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}

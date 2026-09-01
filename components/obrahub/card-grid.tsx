"use client"

import { motion } from "framer-motion"
import { SectionFrame } from "@/components/section-frame"

type Item = { title: string; description: string }

// Generic numbered-card section. /obrahub uses it for the problem's defects,
// the rules that only came out of meetings, the architecture layers and the
// engineering decisions — all the same shape, so they share one component.
export function CardGrid({
  kicker,
  title,
  subtitle,
  items,
  columns = 3,
}: {
  kicker: string
  title: string
  subtitle?: string
  items: Item[]
  columns?: 2 | 3
}) {
  return (
    <SectionFrame kicker={kicker} title={title} subtitle={subtitle}>
      <div
        className={`grid grid-cols-1 gap-3 ${
          columns === 2 ? "md:grid-cols-2" : "md:grid-cols-3"
        }`}
      >
        {items.map((item, i) => (
          <Card key={item.title} item={item} index={i} />
        ))}
      </div>
    </SectionFrame>
  )
}

export function Card({ item, index }: { item: Item; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.05 }}
      className="group relative flex flex-col overflow-hidden border border-border bg-card/40 p-5 transition-colors hover:border-primary/50 hover:bg-card md:p-6"
    >
      <span
        aria-hidden
        className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/40"
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="mt-3 font-mono text-sm font-semibold tracking-tight md:text-base">
        {item.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {item.description}
      </p>
    </motion.article>
  )
}

"use client"

import { motion } from "framer-motion"
import { SectionFrame } from "@/components/section-frame"

type Item = { title: string; description: string }

// Generic card section. /obrahub uses it for the problem's defects,
// the rules that only came out of meetings, the architecture layers and the
// engineering decisions — all the same shape, so they share one component.
export function CardGrid({
  title,
  subtitle,
  items,
  columns = 3,
}: {
  title: string
  subtitle?: string
  items: Item[]
  columns?: 2 | 3
}) {
  return (
    <SectionFrame title={title} subtitle={subtitle}>
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
      className="group relative flex flex-col overflow-hidden border border-border bg-card p-5 transition-colors hover:border-primary/50 hover:bg-card md:p-6"
    >
      <h3 className="text-base font-semibold tracking-tight md:text-lg">
        {item.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground max-w-[60ch]">
        {item.description}
      </p>
    </motion.article>
  )
}

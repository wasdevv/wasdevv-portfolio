"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"
import { SectionFrame } from "@/components/section-frame"

export function ObrahubNumbers() {
  const { t } = useLanguage()
  const n = t.obrahub.numbers

  return (
    <SectionFrame kicker={n.kicker} title={n.title} subtitle={n.subtitle}>
      <dl className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {n.stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
            className="border border-border bg-card/40 p-4 md:p-5"
          >
            <dt className="sr-only">{stat.label}</dt>
            <dd>
              <span className="block font-mono text-xl font-semibold tabular-nums text-primary md:text-2xl">
                {stat.value}
              </span>
              <span className="mt-2 block text-xs leading-relaxed text-muted-foreground md:text-sm">
                {stat.label}
              </span>
            </dd>
          </motion.div>
        ))}
      </dl>

      <div className="mt-10">
        <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {n.measuredTitle}
        </p>
        <dl className="grid grid-cols-1 gap-x-8 gap-y-5 md:grid-cols-2">
          {n.measured.map((item) => (
            <div key={item.label} className="border-l border-primary/40 pl-4">
              <dt className="font-mono text-lg font-semibold tabular-nums text-foreground md:text-xl">
                {item.value}
              </dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {item.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </SectionFrame>
  )
}

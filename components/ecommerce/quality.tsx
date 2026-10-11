"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"
import { SectionFrame } from "@/components/section-frame"

export function EcommerceQuality() {
  const { t } = useLanguage()
  const q = t.ecommerce.quality

  return (
    <SectionFrame kicker={q.kicker} title={q.title} subtitle={q.subtitle}>
      <dl className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {q.stats.map((stat, i) => (
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

      <div className="mt-10 overflow-x-auto border border-border bg-card/40 p-5 md:p-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/70 text-left">
              <th
                scope="col"
                className="pb-2 pr-6 font-mono text-[10px] font-normal uppercase tracking-widest text-muted-foreground"
              >
                {q.layerLabel}
              </th>
              <th
                scope="col"
                className="pb-2 font-mono text-[10px] font-normal uppercase tracking-widest text-muted-foreground"
              >
                {q.coverageLabel}
              </th>
            </tr>
          </thead>
          <tbody>
            {q.rows.map((row) => (
              <tr key={row.layer} className="border-b border-border/40 align-top last:border-0">
                <th
                  scope="row"
                  className="py-2.5 pr-6 md:whitespace-nowrap text-left font-mono font-normal text-primary"
                >
                  {row.layer}
                </th>
                <td className="py-2.5 leading-relaxed text-muted-foreground">{row.coverage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SectionFrame>
  )
}

"use client"

import { motion } from "framer-motion"
import { Check, CircleDashed, Loader2 } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { SectionFrame } from "./section-frame"

const STATUS_META = {
  shipped: { Icon: Check, className: "border-chart-3/60 bg-chart-3/10 text-chart-3" },
  shipping: {
    Icon: Loader2,
    className: "border-primary/60 bg-primary/10 text-primary",
    iconClass: "animate-spin [animation-duration:3s]",
  },
  planned: {
    Icon: CircleDashed,
    className: "border-border bg-muted/20 text-muted-foreground",
  },
} as const

export function RoadmapTimeline() {
  const { t } = useLanguage()
  const r = t.swarm.roadmap

  return (
    <SectionFrame kicker={r.kicker} title={r.title} subtitle={r.subtitle}>
      <ol className="relative border-l border-border pl-8 md:pl-10">
        {r.items.map((item, i) => {
          const meta = STATUS_META[item.status]
          const Icon = meta.Icon
          return (
            <motion.li
              key={item.version}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative mb-10 last:mb-0"
            >
              <span
                className={`absolute -left-[45px] flex h-8 w-8 items-center justify-center rounded-full border ${meta.className}`}
              >
                <Icon
                  className={`h-4 w-4 ${"iconClass" in meta ? meta.iconClass : ""}`}
                />
              </span>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-mono text-sm text-primary">{item.version}</span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {item.status}
                </span>
              </div>
              <h3 className="mt-1 text-lg font-semibold md:text-xl">{item.title}</h3>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground md:text-base">
                {item.description}
              </p>
            </motion.li>
          )
        })}
      </ol>
    </SectionFrame>
  )
}

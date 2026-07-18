"use client"

import { motion } from "framer-motion"
import {
  Box,
  Cable,
  GitFork,
  GitPullRequest,
  MessageSquareText,
  Monitor,
  RotateCcw,
  Split,
} from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { SectionFrame } from "./section-frame"

const ICONS = [Box, Cable, Split, MessageSquareText, GitFork, GitPullRequest, RotateCcw, Monitor]

// Bento tile spans — asymmetric layout like Vercel/Linear feature grids.
const SPANS = [
  "md:col-span-2 md:row-span-2", // 0 · large hero tile
  "md:col-span-2", // 1
  "md:col-span-2", // 2
  "md:col-span-2", // 3
  "md:col-span-2", // 4
  "md:col-span-2", // 5
  "md:col-span-2", // 6
  "md:col-span-4", // 7 · wide bottom tile
]

export function FeaturesBento() {
  const { t } = useLanguage()
  const f = t.swarm.features

  return (
    <SectionFrame kicker={f.kicker} title={f.title} subtitle={f.subtitle}>
      <div className="grid grid-cols-1 gap-3 md:auto-rows-[minmax(140px,auto)] md:grid-cols-4">
        {f.items.map((item, i) => {
          const Icon = ICONS[i] ?? Box
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
              className={`group relative flex flex-col justify-between overflow-hidden border border-border bg-card/40 p-5 transition-colors hover:border-primary/50 hover:bg-card md:p-6 ${SPANS[i] ?? ""}`}
            >
              <div className="absolute right-0 top-0 h-16 w-16 bg-gradient-to-bl from-primary/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div>
                <Icon
                  className="h-5 w-5 text-primary transition-transform group-hover:scale-110"
                  aria-hidden
                />
                <h3 className="mt-4 font-mono text-sm font-semibold tracking-tight md:text-base">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
              <span
                aria-hidden
                className="mt-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground/40"
              >
                0{i + 1}
              </span>
            </motion.div>
          )
        })}
      </div>
    </SectionFrame>
  )
}

"use client"

import { motion } from "framer-motion"
import { Check, GitBranch, GitPullRequest, X } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { SectionFrame } from "./section-frame"

export function CompareGrid() {
  const { t } = useLanguage()
  const c = t.swarm.compare
  const [focused, setFocused] = useState<number | null>(null)

  return (
    <SectionFrame kicker={c.kicker} title={c.title} subtitle={c.subtitle}>
      <p className="mb-6 font-mono text-xs text-muted-foreground">{c.hint}</p>

      <div
        className="grid grid-cols-1 gap-4 md:grid-cols-2"
        onMouseLeave={() => setFocused(null)}
      >
        {c.attempts.map((attempt, i) => {
          const isFocused = focused === i
          const isDimmed = focused !== null && !isFocused
          return (
            <motion.article
              key={attempt.id}
              onMouseEnter={() => setFocused(i)}
              animate={{
                opacity: isDimmed ? 0.35 : 1,
                scale: isFocused ? 1.01 : 1,
              }}
              transition={{ duration: 0.2 }}
              className={`group flex flex-col overflow-hidden border transition-colors ${
                isFocused
                  ? "border-primary/70 bg-card"
                  : "border-border bg-card/60"
              }`}
            >
              <header className="flex items-center justify-between border-b border-border/50 bg-muted/20 px-4 py-2 font-mono text-xs">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <GitBranch className="h-3.5 w-3.5" />
                  <span>swarm/{attempt.id}</span>
                </div>
                <span className="tabular-nums text-muted-foreground">
                  {attempt.elapsed}
                </span>
              </header>

              <div className="flex-1 border-b border-border/50 p-4 font-mono text-[12px] leading-relaxed">
                <pre className="whitespace-pre-wrap text-foreground/90">
                  {attempt.preview}
                </pre>
              </div>

              <footer className="flex items-center justify-between border-t border-border/50 bg-muted/10 px-4 py-2 font-mono text-xs">
                <span className="text-muted-foreground">{attempt.files}</span>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <span className="inline-flex items-center gap-1 transition-colors group-hover:text-chart-3">
                    <Check className="h-3.5 w-3.5" />
                    {c.mergeLabel}
                  </span>
                  <span className="inline-flex items-center gap-1 transition-colors group-hover:text-destructive">
                    <X className="h-3.5 w-3.5" />
                    {c.discardLabel}
                  </span>
                  <span className="inline-flex items-center gap-1 transition-colors group-hover:text-primary">
                    <GitPullRequest className="h-3.5 w-3.5" />
                    {c.viewDiffLabel}
                  </span>
                </div>
              </footer>
            </motion.article>
          )
        })}
      </div>
    </SectionFrame>
  )
}

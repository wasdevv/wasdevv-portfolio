"use client"

import { useLanguage } from "@/components/language-provider"
import { SectionFrame } from "@/components/section-frame"
import { Card } from "./card-grid"

export function ObrahubProblem() {
  const { t } = useLanguage()
  const p = t.obrahub.problem

  return (
    <SectionFrame kicker={p.kicker} title={p.title} subtitle={p.subtitle}>
      <div className="mb-10 border border-border bg-card/40 p-5 md:p-6">
        <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {p.beforeLabel}
        </p>
        <ol className="grid grid-cols-1 gap-3 md:grid-cols-4">
          {p.beforeSteps.map((step, i) => (
            <li key={i} className="flex gap-3 border-l border-border/70 pl-3">
              <span
                aria-hidden
                className="font-mono text-xs tabular-nums text-primary/70"
              >
                {i + 1}
              </span>
              <span className="text-sm leading-relaxed text-muted-foreground">
                {step}
              </span>
            </li>
          ))}
        </ol>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {p.items.map((item, i) => (
          <Card key={item.title} item={item} index={i} />
        ))}
      </div>
    </SectionFrame>
  )
}

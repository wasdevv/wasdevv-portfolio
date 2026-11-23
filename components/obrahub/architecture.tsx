"use client"

import { useLanguage } from "@/components/language-provider"
import { SectionFrame } from "@/components/section-frame"
import { Card } from "./card-grid"

export function ObrahubArchitecture() {
  const { t } = useLanguage()
  const a = t.obrahub.architecture

  return (
    <SectionFrame title={a.title} subtitle={a.subtitle}>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {a.items.map((item, i) => (
          <Card key={item.title} item={item} index={i} />
        ))}
      </div>

      <div className="mt-10">
        <p className="mb-4 text-sm font-medium text-foreground">
          {a.stackTitle}
        </p>
        <ul className="flex flex-wrap gap-2">
          {a.stack.map((item) => (
            <li
              key={item}
              className="inline-flex items-center gap-2 border border-border/70 bg-card px-3 py-1.5 font-mono text-sm text-muted-foreground"
            >
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-primary/70" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </SectionFrame>
  )
}

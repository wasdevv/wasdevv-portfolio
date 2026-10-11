"use client"

import { useLanguage } from "@/components/language-provider"
import { SectionFrame } from "@/components/section-frame"
import { Card } from "@/components/obrahub/card-grid"

type Section = "architecture" | "ml" | "infra" | "cicd" | "observability"

// Most /ecommerce-serverless sections are "optional ASCII diagram + numbered
// cards"; they differ only in which dictionary slice they read.
export function DiagramCards({ section }: { section: Section }) {
  const { t } = useLanguage()
  const s = t.ecommerce[section]
  const diagram = "diagram" in s ? s.diagram : undefined

  return (
    <SectionFrame kicker={s.kicker} title={s.title} subtitle={s.subtitle}>
      {diagram ? (
        <div className="mb-10 overflow-x-auto border border-border bg-card/40 p-4 md:p-6">
          <pre className="w-max font-mono text-[12px] leading-relaxed text-foreground/90 md:text-[13px]">
            {diagram}
          </pre>
        </div>
      ) : null}

      <div
        className={`grid grid-cols-1 gap-3 ${
          s.items.length % 3 === 0 ? "md:grid-cols-3" : "md:grid-cols-2"
        }`}
      >
        {s.items.map((item, i) => (
          <Card key={item.title} item={item} index={i} />
        ))}
      </div>
    </SectionFrame>
  )
}

"use client"

import { Container } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { SectionFrame } from "@/components/section-frame"

export function EcommerceOverview() {
  const { t } = useLanguage()
  const o = t.ecommerce.overview

  return (
    <SectionFrame kicker={o.kicker} title={o.title} subtitle={o.subtitle}>
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
        <div className="border border-border bg-card/40 p-5 md:p-6 lg:col-span-2">
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {o.flowsTitle}
          </p>
          <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {o.flows.map((flow, i) => (
              <li key={flow} className="flex gap-3 border-l border-border/70 pl-3">
                <span aria-hidden className="font-mono text-xs tabular-nums text-primary/70">
                  {i + 1}
                </span>
                <span className="text-sm leading-relaxed text-muted-foreground">{flow}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="border border-border bg-card/40 p-5 md:p-6">
          <h3 className="flex items-center gap-2 font-mono text-sm font-semibold tracking-tight text-primary md:text-base">
            <Container className="h-4 w-4" aria-hidden />
            {o.localTitle}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{o.localBody}</p>
        </div>
      </div>
    </SectionFrame>
  )
}

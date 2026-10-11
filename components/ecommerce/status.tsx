"use client"

import { Check, CircleDashed, Coins, Lightbulb } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { SectionFrame } from "@/components/section-frame"
import { CtaLinks } from "./cta-links"

export function EcommerceStatus() {
  const { t } = useLanguage()
  const s = t.ecommerce.status

  return (
    <SectionFrame kicker={s.kicker} title={s.title} subtitle={s.subtitle}>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <div className="border border-border bg-card/40 p-5 md:p-6">
          <h3 className="flex items-center gap-2 font-mono text-sm font-semibold tracking-tight text-chart-3 md:text-base">
            <Check className="h-4 w-4" aria-hidden />
            {s.doneTitle}
          </h3>
          <ul className="mt-4 space-y-2.5">
            {s.done.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-chart-3/70" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="border border-border bg-card/40 p-5 md:p-6">
          <h3 className="flex items-center gap-2 font-mono text-sm font-semibold tracking-tight text-muted-foreground md:text-base">
            <CircleDashed className="h-4 w-4" aria-hidden />
            {s.pendingTitle}
          </h3>
          <ul className="mt-4 space-y-2.5">
            {s.pending.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                <span
                  aria-hidden
                  className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/50"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-3 border border-border bg-card/40 p-5 md:p-6">
        <h3 className="flex items-center gap-2 font-mono text-sm font-semibold tracking-tight text-primary md:text-base">
          <Coins className="h-4 w-4" aria-hidden />
          {s.costTitle}
        </h3>
        <p className="mt-3 max-w-4xl text-sm leading-relaxed text-muted-foreground">{s.cost}</p>
      </div>

      <div className="mt-3 border border-border bg-card/40 p-5 md:p-6">
        <h3 className="flex items-center gap-2 font-mono text-sm font-semibold tracking-tight text-primary md:text-base">
          <Lightbulb className="h-4 w-4" aria-hidden />
          {s.learnedTitle}
        </h3>
        <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-3 md:grid-cols-2">
          {s.learned.map((item) => (
            <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
              <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/70" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10">
        <CtaLinks repoLabel={s.ctaRepo} contactLabel={s.ctaContact} />
      </div>
    </SectionFrame>
  )
}

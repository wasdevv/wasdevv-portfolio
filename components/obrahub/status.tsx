"use client"

import Link from "next/link"
import { ArrowUpRight, Check, CircleDashed, Compass } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { SectionFrame } from "@/components/section-frame"

export function ObrahubStatus() {
  const { t } = useLanguage()
  const s = t.obrahub.status

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
              <li
                key={item}
                className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
              >
                <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-chart-3/70" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="border border-border bg-card/40 p-5 md:p-6">
          <h3 className="flex items-center gap-2 font-mono text-sm font-semibold tracking-tight text-muted-foreground md:text-base">
            <CircleDashed className="h-4 w-4" aria-hidden />
            {s.openTitle}
          </h3>
          <ul className="mt-4 space-y-2.5">
            {s.open.map((item) => (
              <li
                key={item}
                className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
              >
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
          <Compass className="h-4 w-4" aria-hidden />
          {s.directionTitle}
        </h3>
        <p className="mt-3 max-w-4xl text-sm leading-relaxed text-muted-foreground">
          {s.direction}
        </p>
      </div>

      <div className="mt-10">
        <Link
          href="/contact"
          className="group inline-flex items-center gap-2 border border-primary bg-primary px-4 py-2.5 font-mono text-sm text-primary-foreground transition-all hover:bg-primary/90"
        >
          {s.ctaLabel}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </SectionFrame>
  )
}

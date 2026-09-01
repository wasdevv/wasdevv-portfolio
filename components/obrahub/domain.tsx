"use client"

import { useLanguage } from "@/components/language-provider"
import { SectionFrame } from "@/components/section-frame"

export function ObrahubDomain() {
  const { t } = useLanguage()
  const d = t.obrahub.domain

  return (
    <SectionFrame kicker={d.kicker} title={d.title} subtitle={d.subtitle}>
      <div className="overflow-x-auto border border-border bg-card/40 p-4 md:p-6">
        <pre className="min-w-[560px] font-mono text-[12px] leading-relaxed text-foreground/90 md:text-[13px]">
          {d.tree}
        </pre>
      </div>

      <dl className="mt-8 grid grid-cols-1 gap-x-8 gap-y-5 md:grid-cols-2">
        {d.entities.map((entity) => (
          <div key={entity.name} className="border-l border-border pl-4">
            <dt className="font-mono text-sm font-semibold text-primary">
              {entity.name}
            </dt>
            <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              {entity.description}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-10 grid grid-cols-1 gap-3 lg:grid-cols-2">
        <div className="border border-border bg-card/40 p-5 md:p-6">
          <h3 className="font-mono text-sm font-semibold tracking-tight md:text-base">
            {d.hoursTitle}
          </h3>
          <table className="mt-4 w-full font-mono text-sm">
            <thead>
              <tr className="border-b border-border/70 text-left">
                <th scope="col" className="pb-2 font-normal text-muted-foreground">
                  <span className="sr-only">{d.hoursTitle}</span>
                </th>
                <th
                  scope="col"
                  className="pb-2 text-right font-normal uppercase tracking-widest text-[10px] text-muted-foreground"
                >
                  {d.hoursFactorLabel}
                </th>
                <th scope="col" className="pb-2 pl-4 font-normal text-muted-foreground">
                  <span className="sr-only">—</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {d.hours.map((h) => (
                <tr key={h.code} className="border-b border-border/40 last:border-0">
                  <td className="py-2 text-primary">{h.code}</td>
                  <td className="py-2 text-right tabular-nums text-foreground/90">
                    {h.factor}
                  </td>
                  <td className="py-2 pl-4 text-muted-foreground">{h.label}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="border border-border bg-card/40 p-5 md:p-6">
          <h3 className="font-mono text-sm font-semibold tracking-tight md:text-base">
            {d.balanceTitle}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {d.balanceBody}
          </p>
        </div>
      </div>
    </SectionFrame>
  )
}

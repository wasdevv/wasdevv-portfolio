"use client"

import { profile } from "@/lib/portfolio-data"
import { useLanguage } from "@/components/language-provider"

export function AboutIntro() {
  const { t } = useLanguage()
  const intro = t.aboutMe.intro

  const facts = [
    { label: intro.facts.name, value: profile.name },
    { label: intro.facts.role, value: t.profile.role },
    { label: intro.facts.focus, value: profile.focus },
    { label: intro.facts.location, value: t.profile.location },
  ]

  return (
    <div>
      <h2 className="max-w-[22ch] text-3xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {intro.headline}
        {intro.headlineEmphasis}
      </h2>

      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-14">
        <div className="max-w-[62ch] space-y-4">
          {intro.paragraphs.map((paragraph, i) => (
            <p key={i} className="text-base leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>

        <dl className="self-start border border-border bg-card px-5">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="flex items-baseline justify-between gap-4 border-b border-border py-3.5 last:border-b-0"
            >
              <dt className="text-sm text-muted-foreground">{fact.label}</dt>
              <dd className="text-right text-sm font-medium text-foreground">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <dl className="mt-12 grid grid-cols-2 gap-x-6 border-b border-border sm:grid-cols-3">
        {intro.stats.map((stat) => (
          <div key={stat.label} className="flex flex-col-reverse gap-1.5 border-t border-border py-6">
            <dt className="text-sm leading-snug text-muted-foreground">{stat.label}</dt>
            <dd className="font-mono text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

"use client"

import { profile } from "@/lib/portfolio-data"
import { useLanguage } from "@/components/language-provider"

const chips = [
  { label: "Ruby on Rails", position: "right-0 top-8" },
  { label: "PostgreSQL", position: "bottom-16 right-2" },
  { label: "React", position: "bottom-24 left-0" },
]

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
    <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
      <div className="relative grid min-h-[340px] place-items-center sm:min-h-[420px]">
        <div
          className="absolute h-56 w-56 rounded-full bg-primary/20 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute h-[280px] w-[280px] animate-[orbit_26s_linear_infinite] rounded-full border border-dashed border-primary/30 sm:h-[340px] sm:w-[340px]"
          aria-hidden="true"
        />
        <div
          className="absolute h-[180px] w-[320px] animate-[orbit_20s_linear_infinite] [animation-direction:reverse] rounded-full border border-dashed border-primary/20 sm:h-[220px] sm:w-[400px]"
          aria-hidden="true"
        />

        <DevCard />

        {chips.map((chip) => (
          <span
            key={chip.label}
            className={`absolute z-10 animate-[float_6s_ease-in-out_infinite] border border-border bg-card px-3 py-2 font-mono text-[11px] font-semibold text-foreground shadow-lg ${chip.position}`}
            style={{ animationDelay: `-${chips.indexOf(chip) * 2}s` }}
          >
            {chip.label}
          </span>
        ))}
      </div>

      <div>
        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
          {intro.eyebrow}
        </p>

        <h2 className="mt-4 text-pretty font-mono text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl">
          {intro.headline}
          <span className="text-primary">{intro.headlineEmphasis}</span>
        </h2>

        <div className="mt-6 space-y-4">
          {intro.paragraphs.map((paragraph, i) => (
            <p key={i} className="text-sm leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>

        <dl className="mt-8 grid gap-3 sm:grid-cols-2">
          {facts.map((fact) => (
            <div key={fact.label} className="border border-border bg-card p-4">
              <dt className="font-mono text-[10px] font-bold uppercase tracking-[0.13em] text-primary">
                {fact.label}
              </dt>
              <dd className="mt-1.5 font-mono text-[13px] text-foreground">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>

        <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 border-y border-border py-6 sm:grid-cols-3">
          {intro.stats.map((stat) => (
            <div key={stat.label}>
              <dt className="font-mono text-xl font-bold leading-tight text-primary sm:text-2xl">
                {stat.value}
              </dt>
              <dd className="mt-1.5 font-mono text-[10px] uppercase leading-snug tracking-[0.09em] text-muted-foreground">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

function DevCard() {
  const { t } = useLanguage()
  const { filename, codeKeys: k, focus } = t.aboutMe.intro.devRb

  return (
    <div className="relative w-[min(340px,90%)] -rotate-[4deg] border border-border bg-card shadow-[0_25px_70px_rgba(0,0,0,0.45)]">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-primary/50" />
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
        <span className="ml-auto font-mono text-[11px] text-muted-foreground">
          {filename}
        </span>
      </div>

      <div className="overflow-x-auto p-5 font-mono text-[13px] leading-[1.9]">
        <pre>
          <code>
            <span className="text-primary">dev</span>{" "}
            <span className="text-muted-foreground">=</span> {"{"}
            {"\n"}
            {"  "}
            {k.name}: <span className="text-chart-3">{`"${profile.name}"`}</span>,
            {"\n"}
            {"  "}
            {k.stack}: [<span className="text-chart-3">"rails"</span>,{" "}
            <span className="text-chart-3">"react"</span>],
            {"\n"}
            {"  "}
            {k.location}:{" "}
            <span className="text-chart-3">{`"${t.profile.location}"`}</span>,
            {"\n"}
            {"  "}
            {k.focus}: <span className="text-chart-3">{`"${focus}"`}</span>,
            {"\n"}
            {"  "}
            {k.monster}: <span className="text-primary">true</span>,{"\n"}
            {"}"}
            <span className="ml-1 inline-block animate-[blink_1s_steps(1)_infinite] text-primary">_</span>
          </code>
        </pre>
      </div>
    </div>
  )
}

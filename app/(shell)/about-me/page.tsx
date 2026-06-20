"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { CodeTabs } from "@/components/code-tabs"
import { ExperienceCard } from "@/components/experience-card"
import { SkillsTable } from "@/components/skills-table"
import { useLanguage } from "@/components/language-provider"

export default function AboutMePage() {
  const { t } = useLanguage()
  const { experience } = t.aboutMe

  return (
    <div className="space-y-12">
      <section>
        <CodeTabs />
      </section>

      <section>
        <header className="mb-5 flex items-baseline justify-between border-b border-border pb-3">
          <h2 className="font-mono text-sm font-bold tracking-wider text-foreground">
            <span className="text-primary">[01]</span> {experience.title}
          </h2>
          <span className="border border-primary px-2 py-0.5 font-mono text-[10px] tracking-wider text-primary">
            {experience.items.length} {experience.rolesLabel}
          </span>
        </header>

        <div className="space-y-5">
          {experience.items.map((exp, i) => (
            <ExperienceCard
              key={`${exp.company}-${i}`}
              index={i + 1}
              role={exp.role}
              company={exp.company}
              period={exp.period}
              bullets={exp.bullets}
              isCurrent={exp.isCurrent}
            />
          ))}
        </div>
      </section>

      <section>
        <header className="mb-5 border-b border-border pb-3">
          <h2 className="font-mono text-sm font-bold tracking-wider text-foreground">
            <span className="text-primary">[02]</span> {t.skills.title}
          </h2>
        </header>
        <SkillsTable />
      </section>

      <div className="grid gap-5 md:grid-cols-2">
        <section>
          <header className="mb-5 border-b border-border pb-3">
            <h2 className="font-mono text-sm font-bold tracking-wider text-foreground">
              <span className="text-primary">[03]</span> {t.education.title}
            </h2>
          </header>
          <ul className="space-y-4">
            {t.education.items.map((edu, i) => (
              <li key={i} className="border border-border bg-card p-5">
                <h3 className="font-mono text-sm font-bold tracking-wider text-foreground">
                  {edu.degree}
                </h3>
                <p className="mt-1 font-mono text-xs text-primary">
                  {edu.school}
                </p>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  {edu.period}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <header className="mb-5 border-b border-border pb-3">
            <h2 className="font-mono text-sm font-bold tracking-wider text-foreground">
              <span className="text-primary">[04]</span>{" "}
              {t.spokenLanguages.title}
            </h2>
          </header>
          <ul className="space-y-3">
            {t.spokenLanguages.items.map((item, i) => (
              <li
                key={i}
                className="flex items-baseline justify-between border border-border bg-card px-5 py-4"
              >
                <span className="font-mono text-sm font-bold tracking-wider text-foreground">
                  {item.language}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-wider text-primary">
                  {item.level}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="border border-border bg-card p-8 md:p-12">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <p className="font-mono text-xs tracking-wider text-primary">
            [05] {t.contact.kicker}
          </p>
          <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            {t.contact.badge}
          </span>
        </div>

        <h2 className="mt-6 text-pretty font-mono text-3xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-4xl md:text-5xl">
          {t.contact.headline}
          <span className="text-primary">{t.contact.headlineEmphasis}</span>
        </h2>

        <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
          {t.contact.subheadline}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 border border-primary bg-primary px-5 py-3 font-mono text-xs font-semibold tracking-wider text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_24px_2px_var(--primary)]"
          >
            {t.contact.ctaPrimary}
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
          <Link
            href="/resume"
            className="inline-flex items-center gap-2 border border-border bg-transparent px-5 py-3 font-mono text-xs font-semibold tracking-wider text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            {t.contact.ctaSecondary}
          </Link>
        </div>
      </section>
    </div>
  )
}

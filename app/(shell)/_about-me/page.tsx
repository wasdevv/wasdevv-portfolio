"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { AboutIntro } from "@/components/about-intro"
import { ExperienceCard } from "@/components/experience-card"
import { ProjectsGrid } from "@/components/projects-grid"
import { SkillsTable } from "@/components/skills-table"
import { Testimonials } from "@/components/testimonials"
import { useLanguage } from "@/components/language-provider"
import { projects } from "@/lib/portfolio-data"

export default function AboutMePage() {
  const { t } = useLanguage()
  const { experience } = t.aboutMe

  return (
    <div className="space-y-16">
      <section>
        <AboutIntro />
      </section>

      <section>
        <header className="mb-5 flex items-baseline justify-between border-b border-border pb-3">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            {experience.title}
          </h2>
          <span className="font-mono text-sm text-muted-foreground">
            {experience.items.length} {experience.rolesLabel}
          </span>
        </header>

        <div className="space-y-5">
          {experience.items.map((exp, i) => (
            <ExperienceCard
              key={`${exp.company}-${i}`}
              role={exp.role}
              company={exp.company}
              period={exp.period}
              bullets={exp.bullets}
              isCurrent={exp.isCurrent}
              currentLabel={t.resume.currentLabel}
            />
          ))}
        </div>
      </section>

      <section>
        <header className="mb-8 flex items-baseline justify-between border-b border-border pb-3">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              {t.projects.title}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {t.projects.subtitle}
            </p>
          </div>
          <span className="font-mono text-sm text-muted-foreground">
            {projects.length}
          </span>
        </header>
        <ProjectsGrid />
      </section>

      <section>
        <header className="mb-5 border-b border-border pb-3">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            {t.skills.title}
          </h2>
        </header>
        <SkillsTable />
      </section>

      <div className="grid gap-5 md:grid-cols-2">
        <section>
          <header className="mb-5 border-b border-border pb-3">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              {t.education.title}
            </h2>
          </header>
          <ul className="space-y-4">
            {t.education.items.map((edu, i) => (
              <li key={i} className="border border-border bg-card p-5">
                <h3 className="text-base font-semibold tracking-tight text-foreground">
                  {edu.degree}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {edu.school}
                </p>
                <p className="mt-2 font-mono text-sm text-hp-dim">
                  {edu.period}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <header className="mb-5 border-b border-border pb-3">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              {t.spokenLanguages.title}
            </h2>
          </header>
          <ul className="space-y-3">
            {t.spokenLanguages.items.map((item, i) => (
              <li
                key={i}
                className="flex items-baseline justify-between border border-border bg-card px-5 py-4"
              >
                <span className="text-base font-semibold text-foreground">
                  {item.language}
                </span>
                <span className="text-sm text-muted-foreground">
                  {item.level}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section>
        <header className="mb-5 border-b border-border pb-3">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            {t.testimonials.title}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {t.testimonials.subtitle}
          </p>
        </header>
        <Testimonials />
      </section>

      <section className="border border-border bg-card p-8 md:p-12">
        <h2 className="text-pretty text-3xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-4xl">
          {t.contact.headline}
          {t.contact.headlineEmphasis}
        </h2>

        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
          {t.contact.subheadline}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            href="/contact"
            className="group inline-flex min-h-11 items-center gap-2 bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t.contact.ctaPrimary}
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
          <Link
            href="/resume"
            className="inline-flex min-h-11 items-center gap-2 border border-hp-line-3 bg-hp-bg px-5 text-sm font-semibold text-foreground transition-colors hover:border-foreground"
          >
            {t.contact.ctaSecondary}
          </Link>
        </div>
      </section>
    </div>
  )
}

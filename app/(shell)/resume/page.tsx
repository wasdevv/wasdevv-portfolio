"use client"

import { Download, ExternalLink, Globe, Lock } from "lucide-react"
import { GithubIcon } from "@/components/brand-icons"
import { HighlightedText } from "@/components/highlighted-text"
import { useLanguage } from "@/components/language-provider"
import { projects } from "@/lib/portfolio-data"

export default function ResumePage() {
  const { t } = useLanguage()
  const { experience } = t.aboutMe

  return (
    <div className="space-y-8">
      <header className="flex flex-wrap items-start justify-between gap-4 border-b border-border pb-5">
        <div>
          <h2 className="font-mono text-sm font-bold tracking-wider text-foreground">
            <span className="text-primary">[03]</span> {t.resume.title}
          </h2>
          <p className="mt-2 font-mono text-xs text-muted-foreground">
            {t.resume.subtitle}
          </p>
        </div>
        <a
          href="/files/resume.pdf"
          download="washington-cardoso-resume.pdf"
          className="inline-flex items-center gap-2 border border-primary bg-primary/10 px-4 py-2.5 font-mono text-xs font-semibold tracking-wider text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          {t.resume.downloadCta}
          <Download className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </header>

      <section>
        <h3 className="mb-6 font-mono text-xs uppercase tracking-wider text-muted-foreground">
          {t.resume.timelineTitle}
        </h3>

        <ol className="relative space-y-5">
          <span
            className="absolute bottom-6 left-5 top-6 w-px bg-border sm:left-6"
            aria-hidden="true"
          />

          {experience.items.map((exp, i) => (
            <li
              key={`${exp.company}-${i}`}
              className="relative flex items-start gap-4 sm:gap-6"
            >
              <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary bg-background font-mono text-xs font-bold text-primary sm:h-12 sm:w-12">
                {String(i + 1).padStart(2, "0")}
              </span>

              <article className="min-w-0 flex-1 border border-border bg-card p-5 transition-colors hover:border-primary/60">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-primary">
                    {exp.period}
                  </span>
                  {exp.isCurrent && (
                    <span className="inline-flex items-center gap-1.5 border border-primary px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-primary">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      CURRENT
                    </span>
                  )}
                </div>

                <h4 className="mt-3 font-mono text-lg font-bold tracking-tight text-foreground">
                  {exp.role}
                </h4>
                <p className="mt-1 font-mono text-sm font-semibold text-primary">
                  {exp.company}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {exp.summary}
                </p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <li
                      key={tag}
                      className="border border-border bg-secondary px-2.5 py-1 font-mono text-[11px] text-secondary-foreground"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <header className="mb-5 flex items-baseline justify-between border-b border-border pb-3">
          <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            {t.resume.openSourceTitle}
          </h3>
          <span className="border border-primary px-2 py-0.5 font-mono text-[10px] tracking-wider text-primary">
            {projects.length}
          </span>
        </header>

        <ul className="space-y-4">
          {projects.map((project) => {
            const copy = t.projects.items[project.key]
            return (
              <li
                key={project.key}
                className="border border-border bg-card p-5 transition-colors hover:border-primary/60"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h4 className="flex items-center gap-2 font-mono text-sm font-bold tracking-wider text-foreground">
                    <GithubIcon className="h-3.5 w-3.5 text-primary" />
                    {project.name}
                  </h4>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    {project.year}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  <HighlightedText text={copy.details ?? copy.summary} />
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs">
                  {project.repo ? (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-primary transition-opacity hover:opacity-80"
                    >
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                      {project.repo.replace(/^https?:\/\//, "")}
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                      <Lock className="h-3 w-3" aria-hidden="true" />
                      {t.resume.privateRepoLabel}
                    </span>
                  )}
                  {project.site && (
                    <a
                      href={project.site}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-primary transition-opacity hover:opacity-80"
                    >
                      <Globe className="h-3.5 w-3.5" aria-hidden="true" />
                      {project.site.replace(/^https?:\/\//, "")}
                    </a>
                  )}
                </div>
              </li>
            )
          })}
        </ul>
      </section>
    </div>
  )
}

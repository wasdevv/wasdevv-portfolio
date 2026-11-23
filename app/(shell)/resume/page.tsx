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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {t.resume.title}
          </h2>
          <p className="mt-2 text-base text-muted-foreground">
            {t.resume.subtitle}
          </p>
        </div>
        <a
          href="/files/resume.pdf"
          download="washington-cardoso-resume.pdf"
          className="inline-flex min-h-11 items-center gap-2 border border-hp-line-3 bg-hp-bg px-4 text-sm font-semibold text-foreground transition-colors hover:border-foreground"
        >
          <Download className="h-4 w-4" aria-hidden="true" />
          {t.resume.downloadCta}
        </a>
      </header>

      <section>
        <h3 className="mb-6 text-xl font-semibold tracking-tight text-foreground">
          {t.resume.timelineTitle}
        </h3>

        <ol className="relative space-y-5">
          <span
            className="absolute bottom-6 left-[5px] top-7 w-px bg-border"
            aria-hidden="true"
          />

          {experience.items.map((exp, i) => (
            <li
              key={`${exp.company}-${i}`}
              className="relative flex items-start gap-5 sm:gap-7"
            >
              <span
                aria-hidden="true"
                className={`relative z-10 mt-7 h-[11px] w-[11px] shrink-0 rounded-full border-2 border-hp-bg ${exp.isCurrent ? "bg-hp-green" : "bg-hp-line-3"}`}
              />

              <article className="min-w-0 flex-1 border border-border bg-card p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-mono text-sm text-muted-foreground">
                    {exp.period}
                  </span>
                  {exp.isCurrent && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-hp-line-2 px-2 py-0.5 text-xs text-hp-green">
                      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-hp-green" />
                      {t.resume.currentLabel}
                    </span>
                  )}
                </div>

                <h4 className="mt-2 text-lg font-semibold tracking-tight text-foreground">
                  {exp.role}
                </h4>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {exp.company}
                </p>

                <p className="mt-3 max-w-[62ch] text-[15px] leading-relaxed text-hp-soft">
                  {exp.summary}
                </p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <li
                      key={tag}
                      className="border border-border bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground"
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
        <header className="mb-5 flex items-baseline justify-between gap-4 border-b border-border pb-3">
          <h3 className="text-xl font-semibold tracking-tight text-foreground">
            {t.resume.openSourceTitle}
          </h3>
          <span className="font-mono text-sm text-muted-foreground">
            {projects.length}
          </span>
        </header>

        <ul className="space-y-4">
          {projects.map((project) => {
            const copy = t.projects.items[project.key]
            return (
              <li
                key={project.key}
                className="border border-border bg-card p-6"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h4 className="flex items-center gap-2 text-base font-semibold tracking-tight text-foreground">
                    <GithubIcon className="h-4 w-4 text-muted-foreground" />
                    {project.name}
                  </h4>
                  <span className="font-mono text-sm text-muted-foreground">
                    {project.year}
                  </span>
                </div>

                <p className="mt-3 max-w-[66ch] text-[15px] leading-relaxed text-muted-foreground">
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

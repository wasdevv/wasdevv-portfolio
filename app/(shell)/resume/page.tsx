"use client"

import { Download, ExternalLink } from "lucide-react"
import { GithubIcon } from "@/components/brand-icons"
import { HighlightedText } from "@/components/highlighted-text"
import { useLanguage } from "@/components/language-provider"

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
        <h3 className="mb-5 font-mono text-xs uppercase tracking-wider text-muted-foreground">
          {t.resume.timelineTitle}
        </h3>

        <ol className="relative space-y-8 border-l border-border pl-6">
          {experience.items.map((exp, i) => (
            <li key={`${exp.company}-${i}`} className="relative">
              <span className="absolute -left-[29px] mt-1 flex h-3 w-3 items-center justify-center">
                <span className="absolute h-3 w-3 rounded-full border-2 border-background bg-primary" />
              </span>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h4 className="font-mono text-sm font-bold text-foreground">
                  {exp.role}
                </h4>
                <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  {exp.period}
                </span>
              </div>
              <p className="mt-1 font-mono text-xs text-primary">
                {exp.company}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {exp.bullets[0]?.replace(/\*\*/g, "")}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h3 className="mb-5 font-mono text-xs uppercase tracking-wider text-muted-foreground">
          {t.resume.openSourceTitle}
        </h3>
        <ul className="space-y-4">
          {t.resume.openSourceItems.map((item) => (
            <li
              key={item.url}
              className="border border-border bg-card p-5 transition-colors hover:border-primary/60"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h4 className="flex items-center gap-2 font-mono text-sm font-bold tracking-wider text-foreground">
                  <GithubIcon className="h-3.5 w-3.5 text-primary" />
                  {item.name}
                </h4>
                <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  {item.year}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                <HighlightedText text={item.description} />
              </p>
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs text-primary transition-opacity hover:opacity-80"
              >
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                {item.url.replace(/^https?:\/\//, "")}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

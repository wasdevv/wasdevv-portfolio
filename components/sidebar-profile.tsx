"use client"

import { Download, Mail, Phone } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"
import { profile } from "@/lib/portfolio-data"
import { useLanguage } from "@/components/language-provider"

export function SidebarProfile({ className = "" }: { className?: string }) {
  const { t } = useLanguage()
  const { profile: p, sidebar } = t

  return (
    <aside className={className}>
      <div className="sticky top-24 space-y-6">
        <div>
          <h1 className="font-mono text-3xl font-bold leading-none tracking-tight text-foreground sm:text-4xl">
            {p.nameLine1}
            <br />
            <span className="text-primary">{p.nameLine2}</span>
          </h1>
          <p className="mt-3 font-mono text-xs text-muted-foreground">
            {p.role}{" "}
            <span className="text-primary">/ {p.yearsLabel}</span>
          </p>
        </div>

        <a
          href="/files/resume.pdf"
          download
          className="group inline-flex w-full items-center justify-between gap-2 border border-primary bg-primary/10 px-4 py-3 font-mono text-xs font-semibold tracking-wider text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          {p.downloadResume}
          <Download className="h-3.5 w-3.5" aria-hidden="true" />
        </a>

        <ul className="space-y-2 font-mono text-xs">
          <li>
            <a
              href={`tel:${sidebar.contactPhone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
            >
              <Phone className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
              <span>{sidebar.contactPhone}</span>
            </a>
          </li>
          <li>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
            >
              <Mail className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
              <span className="truncate">{profile.email}</span>
            </a>
          </li>
          <li>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
            >
              <LinkedinIcon className="h-3.5 w-3.5 text-primary" />
              <span>{sidebar.contactLinkedInLabel}</span>
            </a>
          </li>
          <li>
            <a
              href={profile.social.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
            >
              <GithubIcon className="h-3.5 w-3.5 text-primary" />
              <span>{sidebar.contactGithubLabel}</span>
            </a>
          </li>
        </ul>

        <div className="grid grid-cols-2 gap-2">
          {sidebar.stats.map((stat) => (
            <div
              key={stat.label}
              className="border border-border bg-card p-3"
            >
              <div className="font-mono text-xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}

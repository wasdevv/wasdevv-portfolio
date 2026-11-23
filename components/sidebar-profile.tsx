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
      <div className="space-y-6 lg:sticky lg:top-24">
        <div>
          <h1 className="text-2xl font-semibold leading-tight tracking-tight text-foreground">
            {p.nameLine1} {p.nameLine2}
          </h1>
          <p className="mt-1.5 text-sm text-muted-foreground">
            {p.role} · {p.yearsLabel}
          </p>
        </div>

        {/* On phones the download and contacts live in the footer; keep only the name here. */}
        <div className="hidden space-y-6 lg:block">
        <a
          href="/files/resume.pdf"
          download="washington-cardoso-resume.pdf"
          className="inline-flex min-h-11 w-full items-center justify-center gap-2 bg-primary px-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <Download className="h-4 w-4" aria-hidden="true" />
          {p.downloadResume}
        </a>

        <ul className="space-y-1 border-t border-border pt-5 text-sm">
          <li>
            <a
              href={`tel:${sidebar.contactPhone.replace(/\s/g, "")}`}
              className="flex min-h-9 items-center gap-2.5 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Phone className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
              <span>{sidebar.contactPhone}</span>
            </a>
          </li>
          <li>
            <a
              href={`mailto:${profile.email}`}
              className="flex min-h-9 items-center gap-2.5 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
              <span className="truncate">{profile.email}</span>
            </a>
          </li>
          <li>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-9 items-center gap-2.5 text-muted-foreground transition-colors hover:text-foreground"
            >
              <LinkedinIcon className="h-4 w-4 shrink-0 text-muted-foreground" />
              <span>{sidebar.contactLinkedInLabel}</span>
            </a>
          </li>
          <li>
            <a
              href={profile.social.github}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-9 items-center gap-2.5 text-muted-foreground transition-colors hover:text-foreground"
            >
              <GithubIcon className="h-4 w-4 shrink-0 text-muted-foreground" />
              <span>{sidebar.contactGithubLabel}</span>
            </a>
          </li>
        </ul>
        </div>
      </div>
    </aside>
  )
}

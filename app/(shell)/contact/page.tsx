"use client"

import { Mail, MapPin, Phone } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"
import { profile } from "@/lib/portfolio-data"
import { useLanguage } from "@/components/language-provider"

export default function ContactPage() {
  const { t } = useLanguage()

  return (
    <div className="space-y-8">
      <header className="border-b border-border pb-5">
        <h2 className="font-mono text-sm font-bold tracking-wider text-foreground">
          <span className="text-primary">[04]</span> {t.contact.title}
        </h2>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
          {t.contact.body}
        </p>
      </header>

      <div className="grid gap-5 md:grid-cols-2">
        <section className="border border-border bg-card p-6">
          <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            {t.contact.inboxLabel}
          </h3>
          <a
            href={`mailto:${profile.email}`}
            className="mt-4 inline-flex items-center gap-2 font-mono text-base text-primary transition-opacity hover:opacity-80"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            {profile.email}
          </a>
          <ul className="mt-6 space-y-3 font-mono text-xs">
            <li className="flex items-center gap-2 text-muted-foreground">
              <Phone className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
              {t.sidebar.contactPhone}
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
              {t.profile.location}
            </li>
          </ul>
        </section>

        <section className="border border-border bg-card p-6">
          <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            {t.contact.socialLabel}
          </h3>
          <ul className="mt-4 space-y-3 font-mono text-sm">
            <li>
              <a
                href={profile.social.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-foreground transition-colors hover:text-primary"
              >
                <GithubIcon className="h-4 w-4 text-primary" />
                GitHub
              </a>
            </li>
            <li>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-foreground transition-colors hover:text-primary"
              >
                <LinkedinIcon className="h-4 w-4 text-primary" />
                LinkedIn
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}

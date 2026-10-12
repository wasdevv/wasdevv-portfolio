"use client"

import { Download, Mail, Phone } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"
import { useLanguage } from "@/components/language-provider"
import { profile } from "@/lib/portfolio-data"
import { Rich, shell } from "./rich"

export function HomeHero() {
  const { t } = useLanguage()
  const h = t.home.hero
  const phone = t.sidebar.contactPhone
  const [first, last] = profile.name.split(" ")

  const contacts = [
    { href: `tel:${phone.replace(/[^\d+]/g, "")}`, label: phone, icon: <Phone className="h-4 w-4" aria-hidden="true" /> },
    { href: `mailto:${profile.email}`, label: profile.email, icon: <Mail className="h-4 w-4" aria-hidden="true" /> },
    { href: profile.social.linkedin, label: "LinkedIn", icon: <LinkedinIcon className="h-4 w-4" /> },
    { href: profile.social.github, label: "GitHub", icon: <GithubIcon className="h-4 w-4" /> },
  ]

  return (
    <section
      aria-labelledby="hero-title"
      className={`${shell} flex flex-wrap items-start gap-x-[72px] gap-y-14 pb-12 pt-14`}
    >
      <div className="flex min-w-0 flex-[1_1_580px] flex-col justify-center">
        <p className="mb-7 inline-flex items-center gap-2.5 self-start rounded-full border border-[#23503a] bg-[#0f1a15] px-3.5 py-2 text-sm text-[#cdebd8]">
          <span
            aria-hidden="true"
            className="h-2 w-2 rounded-full bg-hp-green shadow-[0_0_0_4px_rgba(125,219,156,.15)]"
          />
          {h.badge}
        </p>
        <h1
          id="hero-title"
          className="m-0 text-[clamp(52px,8vw,128px)] font-bold leading-[0.95] tracking-[-0.035em]"
        >
          {first}
          <br />
          {last}
          <span className="text-hp-cyan">.</span>
        </h1>
        <p className="mt-6 font-plex-mono text-base text-hp-muted">
          {h.role.map((part, i) => (
            <span key={part}>
              {i > 0 ? <span className="text-hp-cyan"> / </span> : null}
              {part}
            </span>
          ))}
        </p>
        <p className="mt-7 max-w-[50ch] text-[22px] leading-[1.45] text-hp-fg">
          <Rich text={h.pitch} accent />
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="/files/resume.pdf"
            className="inline-flex min-h-[52px] items-center gap-2.5 rounded-md bg-hp-cyan px-6 text-base font-semibold text-hp-cyan-ink hover:bg-[#7fdbee]"
          >
            <Download className="h-[18px] w-[18px]" aria-hidden="true" />
            {h.downloadResume}
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex min-h-[52px] items-center rounded-md border border-hp-line-3 px-6 text-base font-medium text-hp-fg hover:border-[#5a646b] hover:text-white"
          >
            {h.emailMe}
          </a>
        </div>
        <ul className="m-0 mt-8 flex list-none flex-wrap gap-x-7 gap-y-3 p-0 text-[15px]">
          {contacts.map((c) => (
            <li key={c.href}>
              <a
                href={c.href}
                className="inline-flex items-center gap-2 break-all text-hp-soft hover:text-white"
              >
                {c.icon}
                {c.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <aside
        aria-label="Quick facts"
        className="flex min-w-0 flex-[0_1_520px] flex-col gap-6 rounded-[14px] border border-hp-line bg-hp-panel p-7"
      >
        <dl className="m-0 flex flex-col border-b border-hp-line">
          {h.facts.map((fact) => (
            <div
              key={fact.label}
              className="flex justify-between gap-4 border-t border-hp-line py-3 first:border-t-0 first:pt-0"
            >
              <dt className="text-[15px] text-hp-muted">{fact.label}</dt>
              <dd className={`m-0 text-right font-medium ${fact.accent ? "text-hp-green" : ""}`}>
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
        <figure className="m-0 rounded-[10px] border-l-[3px] border-hp-cyan bg-hp-bg px-5 py-[18px]">
          <blockquote className="m-0 text-[15px] leading-[1.55] text-hp-fg">“{h.quote}”</blockquote>
          <figcaption className="mt-2.5 text-[13px] text-hp-muted">{h.quoteBy}</figcaption>
        </figure>
      </aside>
    </section>
  )
}

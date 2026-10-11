"use client"

import { useLanguage } from "@/components/language-provider"
import { profile } from "@/lib/portfolio-data"
import { shell } from "./rich"

export function HomeFooter() {
  const { t } = useLanguage()
  const f = t.home.footer
  const link = "text-hp-muted hover:text-white"

  return (
    <footer id="contact" className="border-t border-hp-line bg-hp-band">
      <div className={`${shell} pb-12 pt-28`}>
        <p className="m-0 mb-4 font-plex-mono text-sm text-hp-cyan">{f.kicker}</p>
        <h2 className="m-0 mb-10 max-w-[16ch] text-[clamp(40px,7vw,56px)] font-bold leading-[1.05] tracking-[-0.025em]">
          {f.title}
        </h2>
        <a
          href={`mailto:${profile.email}`}
          className="inline-block max-w-full border-b border-hp-cyan pb-1 text-[clamp(18px,5vw,24px)] font-medium text-hp-cyan [overflow-wrap:anywhere] hover:text-white"
        >
          {profile.email}
        </a>
        <div className="mt-24 flex flex-wrap justify-between gap-4 border-t border-hp-line pt-6 text-sm text-hp-muted">
          <span className="font-plex-mono">© 2026 Washington Cardoso Pereira</span>
          <span className="flex flex-wrap gap-6">
            <a href={profile.social.github} className={link}>
              GitHub
            </a>
            <a href={profile.social.linkedin} className={link}>
              LinkedIn
            </a>
            <a href="/files/resume.pdf" className={link}>
              {f.resume}
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}

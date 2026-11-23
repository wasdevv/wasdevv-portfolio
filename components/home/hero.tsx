"use client"

import { ArrowRight, Download } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { profile } from "@/lib/portfolio-data"

export function HomeHero() {
  const { t } = useLanguage()
  const h = t.home.hero

  return (
    <div className="relative flex min-h-[calc(100svh-var(--hp-nav-h,77px))] flex-col">
      <section
        aria-labelledby="hero-title"
        className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-1 flex-col justify-center px-5 pb-[18vh] pt-6 font-geist sm:px-8 lg:pl-24"
      >
        <div className="min-w-0 max-w-[860px]">
          <p className="mb-7 inline-flex items-center gap-2.5 font-jb text-[12px] uppercase tracking-[0.18em] text-hp-lilac-soft">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-hp-violet shadow-[0_0_0_4px_rgba(196,161,255,.18)]"
            />
            {h.badge}
          </p>

          <h1
            id="hero-title"
            className="m-0 text-[clamp(2.4rem,1.2rem+3.8vw,4.4rem)] font-medium leading-[0.98] tracking-[-0.03em] text-hp-lilac [font-feature-settings:'ss01']"
          >
            <span className="block">{profile.name}</span>
            <span className="block text-hp-lilac-soft">{h.roleAccent}</span>
            <span className="block text-hp-violet">
              {h.roleRest}
              <span className="text-hp-lilac">.</span>
            </span>
          </h1>

          <p className="m-0 mt-5 font-jb text-[13px] uppercase tracking-[0.16em] text-hp-lilac-soft">
            {h.focus.split(" · ").map((part, i, all) => (
              <span key={part}>
                {/* The dot stays on the line it follows, so a wrap never starts with one. */}
                <span className="whitespace-nowrap">
                  {part}
                  {i < all.length - 1 ? (
                    <span aria-hidden="true" className="text-hp-violet">
                      {" ·"}
                    </span>
                  ) : null}
                </span>
                {i < all.length - 1 ? " " : null}
              </span>
            ))}
          </p>

          <p className="mt-6 max-w-[52ch] text-[clamp(0.98rem,0.92rem+0.3vw,1.08rem)] leading-relaxed text-hp-lilac-soft">
            {h.pitch}
            <span className="mt-1 block">{h.pitchMore}</span>
            <span className="mt-1 block font-medium text-hp-lilac">{h.pitchStrong}</span>
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="/files/resume.pdf"
              className="inline-flex min-h-[52px] items-center gap-2.5 rounded-md bg-hp-violet px-6 text-base font-semibold text-hp-violet-ink hover:bg-hp-lilac"
            >
              <Download className="h-[18px] w-[18px]" aria-hidden="true" />
              {h.downloadResume}
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex min-h-[52px] items-center gap-2 rounded-md border border-hp-violet/40 bg-hp-bg px-6 text-base font-medium text-hp-lilac hover:border-hp-violet"
            >
              {h.emailMe}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
          </div>

          <p className="mt-10 font-jb lg:whitespace-nowrap text-[13px] leading-[1.8] text-hp-lilac-dim">
            {h.shippedFor}{" "}
            {h.clients.map((client, i) => (
              <span key={client}>
                {i > 0 ? <span aria-hidden="true"> · </span> : null}
                <span className="text-hp-lilac-soft">{client}</span>
              </span>
            ))}
          </p>
        </div>
      </section>
    </div>
  )
}

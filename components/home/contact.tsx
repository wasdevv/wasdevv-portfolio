"use client"

import { ArrowUpRight, Check, Copy, Download } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { profile } from "@/lib/portfolio-data"
import { usePrefersReducedMotion } from "./use-reduced-motion"
import { WordReveal } from "./word-reveal"

// Closing call to action, on the hero's grid. The planet behind it is the
// site-wide backdrop, which comes back to full strength while this section is
// on screen (see site-backdrop.tsx), so there is no second render loop.

const ease = [0.2, 0.7, 0.2, 1] as const

export function HomeContact() {
  const { t } = useLanguage()
  const c = t.home.contact
  const reduce = usePrefersReducedMotion()
  const [copied, setCopied] = useState(false)
  const timer = useRef<number | undefined>(undefined)
  useEffect(() => () => window.clearTimeout(timer.current), [])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
    } catch {
      // Older browsers / insecure origins: select-and-copy fallback.
      const area = document.createElement("textarea")
      area.value = profile.email
      area.style.position = "fixed"
      area.style.opacity = "0"
      document.body.appendChild(area)
      area.select()
      document.execCommand("copy")
      area.remove()
    }
    setCopied(true)
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setCopied(false), 2000)
  }

  const enter = (delay: number) =>
    reduce
      ? { initial: false as const, animate: { opacity: 1, y: 0 }, transition: { duration: 0 } }
      : {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.5 },
          transition: { duration: 0.5, ease, delay },
        }

  const secondary =
    "group inline-flex min-h-[52px] items-center gap-2 rounded-md border border-hp-violet/40 bg-hp-bg px-6 text-base font-medium text-hp-lilac hover:border-hp-violet"

  return (
    <section
      id="contact"
      aria-label={c.title.replace(/\*/g, "")}
      className="relative z-10 mx-auto flex min-h-[90vh] w-full max-w-[1280px] flex-col justify-center px-5 py-28 font-geist sm:px-8 lg:pl-24"
    >
      <div className="min-w-0 max-w-[860px]">
        <p className="m-0 mb-6 font-jb text-[12px] uppercase tracking-[0.18em] text-hp-lilac-dim">{c.label}</p>
        <WordReveal
          as="h2"
          text={c.title}
          className="m-0 text-[clamp(2.2rem,1.2rem+3.4vw,4.2rem)] font-medium leading-[1.04] tracking-[-0.03em] text-hp-lilac"
        />

        <motion.div {...enter(0.15)} className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-3">
          <a
            href={`mailto:${profile.email}`}
            className="max-w-full border-b border-hp-violet/50 pb-1 text-[clamp(1.25rem,0.9rem+1.6vw,2.1rem)] font-medium tracking-[-0.02em] text-hp-lilac [overflow-wrap:anywhere] hover:border-hp-violet hover:text-hp-violet"
          >
            {profile.email}
          </a>
          <button
            type="button"
            onClick={copy}
            aria-label={c.copyLabel}
            className="inline-flex min-h-10 cursor-pointer items-center gap-2 rounded-full border border-hp-line-2 px-4 font-jb text-[12px] uppercase tracking-[0.14em] text-hp-lilac-soft hover:border-hp-violet/60 hover:text-hp-lilac"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-hp-violet" aria-hidden="true" /> : <Copy className="h-3.5 w-3.5" aria-hidden="true" />}
            <span aria-live="polite">{copied ? c.copied : c.copy}</span>
          </button>
        </motion.div>

        <motion.p {...enter(0.22)} className="m-0 mt-6 font-jb text-[13px] leading-[1.8] text-hp-lilac-dim">
          {c.availability}
        </motion.p>

        <motion.div {...enter(0.3)} className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="/files/resume.pdf"
            className="inline-flex min-h-[52px] items-center gap-2.5 rounded-md bg-hp-violet px-6 text-base font-semibold text-hp-violet-ink hover:bg-hp-lilac"
          >
            <Download className="h-[18px] w-[18px]" aria-hidden="true" />
            {c.resume}
          </a>
          <a href={profile.social.linkedin} target="_blank" rel="noreferrer" className={secondary}>
            LinkedIn
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
          <a href={profile.social.github} target="_blank" rel="noreferrer" className={secondary}>
            GitHub
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

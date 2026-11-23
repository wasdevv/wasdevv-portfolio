"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { scrollToElement, useLenis } from "./smooth-scroll"

const SECTIONS = ["about", "experience", "work", "contact"] as const
type SectionId = (typeof SECTIONS)[number]

// Fixed index on the right edge of the homepage: one thin segment per section;
// the current one turns white and fills with that section's progress.
export function SectionIndex() {
  const { t } = useLanguage()
  const labels = t.home.sectionIndex
  const lenis = useLenis()
  const [state, setState] = useState<{ current: number; progress: number }>({ current: -1, progress: 0 })

  useEffect(() => {
    let frame = 0
    const measure = () => {
      frame = 0
      const vh = window.innerHeight
      const mid = window.scrollY + vh * 0.5
      const atBottom = window.scrollY + vh >= document.documentElement.scrollHeight - 2
      let current = -1
      let progress = 0
      SECTIONS.forEach((id, i) => {
        const el = document.getElementById(id)
        if (!el) return
        const top = el.getBoundingClientRect().top + window.scrollY
        const p = (mid - top) / el.offsetHeight
        if (p >= 0 && p < 1) {
          current = i
          progress = p
        }
      })
      if (atBottom) {
        current = SECTIONS.length - 1
        progress = 1
      }
      const q = Math.round(progress * 100) / 100
      setState((s) => (s.current === current && s.progress === q ? s : { current, progress: q }))
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(measure)
    }
    measure()
    window.addEventListener("scroll", schedule, { passive: true })
    window.addEventListener("resize", schedule)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", schedule)
      window.removeEventListener("resize", schedule)
    }
  }, [])

  const go = (id: SectionId) => {
    const el = document.getElementById(id)
    if (el) scrollToElement(lenis, el)
  }

  return (
    <nav
      aria-label={labels.label}
      className="fixed right-5 top-1/2 z-30 hidden -translate-y-1/2 items-center gap-4 lg:flex"
    >
      <div className="relative h-5 w-32 text-right">
        <AnimatePresence mode="wait" initial={false}>
          {state.current >= 0 ? (
            <motion.span
              key={SECTIONS[state.current]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 font-geist text-[13px] text-hp-lilac"
            >
              {labels[SECTIONS[state.current]]}
            </motion.span>
          ) : null}
        </AnimatePresence>
      </div>
      <ol className="m-0 flex list-none flex-col gap-1.5 p-0">
        {SECTIONS.map((id, i) => {
          const active = i === state.current
          const fill = i < state.current ? 1 : active ? state.progress : 0
          return (
            <li key={id}>
              <button
                type="button"
                onClick={() => go(id)}
                aria-label={labels[id]}
                aria-current={active ? "true" : undefined}
                className="group flex h-10 w-4 cursor-pointer justify-center"
              >
                <span className="relative block h-full w-px overflow-hidden bg-hp-line-3 transition-colors group-hover:bg-hp-lilac-dim">
                  <span
                    className={`absolute inset-0 origin-top transition-colors ${active ? "bg-white" : "bg-hp-lilac-dim"}`}
                    style={{ transform: `scaleY(${fill})` }}
                  />
                </span>
              </button>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

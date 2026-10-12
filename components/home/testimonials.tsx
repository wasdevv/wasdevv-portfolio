"use client"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { shell } from "./rich"

// Auto-advances when the active progress bar's CSS animation ends; hovering
// pauses it, and with reduced motion the bar never animates, so it never moves on.
export function HomeTestimonials() {
  const { t } = useLanguage()
  const q = t.home.testimonials
  const n = q.items.length
  const [i, setI] = useState(0)
  // bumps on every change so the fade-in and the bar restart from zero
  const [run, setRun] = useState(0)
  const [paused, setPaused] = useState(false)

  const show = (k: number) => {
    setI((k + n) % n)
    setRun((r) => r + 1)
  }
  const item = q.items[i]

  return (
    <section
      aria-labelledby="quote-title"
      className={`${shell} pt-28 ${paused ? "hp-paused" : ""}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <h2 id="quote-title" className="m-0 mb-10 font-plex-mono text-[13px] font-medium text-hp-cyan">
        {q.title}
      </h2>
      <div aria-live="polite" className="min-h-[160px]">
        <figure key={`${i}-${run}`} className="m-0 flex flex-wrap gap-x-16 gap-y-8">
          <blockquote className="hp-in m-0 min-w-0 flex-[1_1_620px] text-[clamp(20px,3vw,26px)] font-medium leading-[1.45] tracking-[-0.01em] text-hp-fg">
            “{item.quote}”
          </blockquote>
          <figcaption className="hp-in-late flex flex-[0_1_280px] flex-col gap-1.5 border-t border-hp-line pt-2 text-[15px] text-hp-soft">
            <span className="mt-3 text-[17px] font-semibold text-hp-fg">{item.name}</span>
            <span>{item.role}</span>
            <span>{item.context}</span>
          </figcaption>
        </figure>
      </div>
      <div className="mt-10 flex items-center gap-4">
        <ArrowButton label={q.prev} onClick={() => show(i - 1)}>
          ←
        </ArrowButton>
        <div aria-hidden="true" className="flex gap-1.5">
          {q.items.map((_, k) => (
            <span key={k} className="h-1 w-10 overflow-hidden rounded-sm bg-hp-line-2">
              {k === i ? (
                <span
                  key={run}
                  className="hp-bar bg-hp-cyan"
                  onAnimationEnd={() => show(i + 1)}
                />
              ) : null}
            </span>
          ))}
        </div>
        <ArrowButton label={q.next} onClick={() => show(i + 1)}>
          →
        </ArrowButton>
        <span className="font-plex-mono text-[13px] text-hp-muted">
          {i + 1} / {n}
        </span>
      </div>
    </section>
  )
}

function ArrowButton({
  label,
  onClick,
  children,
}: {
  label: string
  onClick: () => void
  children: string
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="h-12 w-12 cursor-pointer rounded-full border border-hp-line-3 bg-transparent text-lg text-hp-fg transition-[background,border-color,transform] hover:border-[#5a646b] hover:bg-[#1a1f23] active:scale-[.94]"
    >
      {children}
    </button>
  )
}

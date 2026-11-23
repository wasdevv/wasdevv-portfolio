"use client"

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion"
import { usePrefersReducedMotion } from "./use-reduced-motion"
import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { WordReveal, italicWordClass, toWords } from "./word-reveal"

// About, right after the hero. On desktop it is a 320vh scroll track with a
// sticky 100vh stage, and every animation is scrubbed by the section's scroll
// progress (no time-based animation): the statement lights up word by word,
// the paragraphs rise in, then (lg+) the text slides left and the technical
// skills come in on the right, group by group, as the section nears its end.
// Phones get light whileInView reveals with the skills below the text;
// prefers-reduced-motion gets the final state with no sticky stage.

type Mode = "static" | "inview" | "scrub"

export function HomeIntro() {
  const reduce = usePrefersReducedMotion()
  const [mode, setMode] = useState<Mode>("static")

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)")
    const pick = () => setMode(reduce ? "static" : desktop.matches ? "scrub" : "inview")
    pick()
    desktop.addEventListener("change", pick)
    return () => desktop.removeEventListener("change", pick)
  }, [reduce])

  return mode === "scrub" ? <ScrubIntro /> : <FlowIntro animate={mode === "inview"} />
}

/* ---------- copy helpers ---------- */

const labelClass = "font-jb text-[12px] uppercase tracking-[0.18em] text-hp-lilac-dim"
/* ---------- desktop: sticky stage scrubbed by scroll ---------- */

/** Scroll-progress plan for the desktop stage. */
const STATEMENT: [number, number] = [0, 0.35]
const DETAILS: [number, number] = [0.35, 0.6]
const SHIFT: [number, number] = [0.6, 0.72]
const SKILLS: [number, number] = [0.66, 0.95]

/** Stage geometry (lg+): the final two-column grid, and where the text sat before the skills came in. */
const STAGE_MAX = 1680
const STAGE_PAD = 80 // clears the (NN) page counter on the left edge
const SOLO_MAX = 1280
const SOLO_PAD = 160

function useSkillsStage() {
  // [skills shown (lg+), px the text starts to the right of its final column]
  const [stage, setStage] = useState<{ wide: boolean; shift: number }>({ wide: false, shift: 0 })
  useEffect(() => {
    const lg = window.matchMedia("(min-width: 1024px)")
    const measure = () => {
      const vw = document.documentElement.clientWidth
      const solo = Math.max(32, (vw - SOLO_MAX) / 2 + SOLO_PAD)
      const final = Math.max(STAGE_PAD, (vw - STAGE_MAX) / 2 + STAGE_PAD)
      setStage({ wide: lg.matches, shift: lg.matches ? Math.max(0, solo - final) : 0 })
    }
    measure()
    window.addEventListener("resize", measure)
    return () => window.removeEventListener("resize", measure)
  }, [])
  return stage
}

function ScrubIntro() {
  const { t } = useLanguage()
  const c = t.home.intro
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress: raw } = useScroll({ target: ref, offset: ["start start", "end end"] })
  const { scrollYProgress: page } = useScroll()
  // Passing the progress through a function transform keeps framer-motion off
  // its native ScrollTimeline path, which maps target offsets wrongly with this
  // sticky stage (words lit up, then faded back out further down).
  const p = useTransform(raw, (v) => v)
  const counter = useTransform(page, (v) => `(${String(Math.min(100, Math.max(1, Math.round(v * 100)))).padStart(2, "0")})`)
  const { wide, shift } = useSkillsStage()
  const textX = useTransform(p, SHIFT, [shift, 0])

  // Paragraphs: staggered inside DETAILS.
  const blocks = c.details.length
  const bWin = 0.08
  const bStep = (DETAILS[1] - DETAILS[0] - bWin) / Math.max(1, blocks - 1)

  return (
    <section id="about" ref={ref} aria-labelledby="intro-label" className="relative z-10 h-[320vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.span
          aria-hidden="true"
          className="absolute left-5 top-1/2 -translate-y-1/2 font-jb text-[12px] text-hp-lilac-soft"
        >
          {counter}
        </motion.span>

        <div
          className={`mx-auto grid h-full w-full items-center pt-[var(--hp-nav-h,61px)] font-geist ${
            wide
              ? "max-w-[1680px] grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-16 px-20"
              : "max-w-[1280px] px-8 lg:pl-40"
          }`}
        >
          <motion.div className="min-w-0 max-w-[760px]" style={wide ? { x: textX } : undefined}>
            <p id="intro-label" className={`mb-6 ${labelClass}`}>
              {c.label}
            </p>
            <WordReveal
              as="h2"
              text={c.statement}
              progress={p}
              range={STATEMENT}
              className="m-0 text-[clamp(1.6rem,min(2.9vw,5.4vh),3rem)] font-normal leading-[1.18] tracking-[-0.02em] text-hp-lilac"
            />

            <div className="mt-[4.5vh] max-w-[56ch] space-y-[1.6vh]">
              {c.details.map((paragraph, i) => (
                <RiseIn key={paragraph} progress={p} from={DETAILS[0] + i * bStep} to={DETAILS[0] + i * bStep + bWin}>
                  <p className="m-0 text-[clamp(14px,1.85vh,17px)] leading-[1.6] text-hp-lilac-soft">{paragraph}</p>
                </RiseIn>
              ))}
            </div>
          </motion.div>

          {wide ? <SkillsPanel progress={p} /> : null}
        </div>
      </div>
    </section>
  )
}

/* ---------- technical skills (right of the About on desktop, below it on phones) ---------- */

const chipProd = "rounded border border-hp-violet/40 bg-hp-violet/10 px-2 py-[2px] text-hp-lilac"
const chipBuilt = "rounded border border-hp-line-2 px-2 py-[2px] text-hp-lilac-dim"

function SkillsHeader() {
  const s = useLanguage().t.home.skills
  return (
    <div className="mb-[1.6vh] flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
      <h3 className={`m-0 ${labelClass}`}>{s.title}</h3>
      <p className="m-0 flex gap-4 font-jb text-[11px] text-hp-lilac-dim">
        <span className="inline-flex items-center gap-1.5">
          <span aria-hidden="true" className="h-2 w-2 rounded-[2px] border border-hp-violet/60 bg-hp-violet/40" />
          {s.production}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span aria-hidden="true" className="h-2 w-2 rounded-[2px] border border-hp-line-3" />
          {s.builtWith}
        </span>
      </p>
    </div>
  )
}

/** A group row; its wrapper (the direct child of the <dl>) carries `groupRow`. */
const groupRow =
  "grid grid-cols-[minmax(0,7.5rem)_minmax(0,1fr)] gap-x-4 border-t border-hp-line py-[1.1vh] last:border-b"

function SkillGroup({ group }: { group: { label: string; production: string[]; builtWith: string[] } }) {
  const s = useLanguage().t.home.skills
  return (
    <>
      <dt className="pt-[3px] font-jb text-[11px] uppercase tracking-[0.12em] text-hp-lilac-dim">{group.label}</dt>
      <dd className="m-0 flex flex-wrap gap-1 font-plex-mono text-[12px] leading-snug [@media(max-height:800px)]:text-[11px]">
        {group.production.map((name) => (
          <span key={name} className={chipProd}>
            <span className="sr-only">{s.production}: </span>
            {name}
          </span>
        ))}
        {group.builtWith.map((name) => (
          <span key={name} className={chipBuilt}>
            {name}
          </span>
        ))}
      </dd>
    </>
  )
}

function SkillsPanel({ progress }: { progress: MotionValue<number> }) {
  const groups = useLanguage().t.home.skills.groups
  const [start, end] = SKILLS
  const win = 0.07
  const step = (end - start - win) / groups.length // the header takes the first slot
  return (
    <div className="min-w-0">
      <SlideIn progress={progress} from={start} to={start + win}>
        <SkillsHeader />
      </SlideIn>
      <dl className="m-0">
        {groups.map((g, i) => (
          <SlideIn
            key={g.label}
            progress={progress}
            from={start + (i + 1) * step}
            to={start + (i + 1) * step + win}
            className={groupRow}
          >
            <SkillGroup group={g} />
          </SlideIn>
        ))}
      </dl>
    </div>
  )
}

/** Enters from the right, scrubbed by scroll progress. */
function SlideIn({
  progress,
  from,
  to,
  className,
  children,
}: {
  progress: MotionValue<number>
  from: number
  to: number
  className?: string
  children: React.ReactNode
}) {
  const opacity = useTransform(progress, [from, to], [0, 1])
  const x = useTransform(progress, [from, to], [48, 0])
  const filter = useTransform(progress, [from, to], ["blur(6px)", "blur(0px)"])
  return (
    <motion.div className={className} style={{ opacity, x, filter }}>
      {children}
    </motion.div>
  )
}

function RiseIn({
  progress,
  from,
  to,
  className = "",
  children,
}: {
  progress: MotionValue<number>
  from: number
  to: number
  className?: string
  children: React.ReactNode
}) {
  const opacity = useTransform(progress, [from, to], [0, 1])
  const y = useTransform(progress, [from, to], [40, 0])
  return (
    <motion.div className={className} style={{ opacity, y }}>
      {children}
    </motion.div>
  )
}

/* ---------- phones and reduced motion: normal flow ---------- */

function FlowIntro({ animate }: { animate: boolean }) {
  const { t } = useLanguage()
  const c = t.home.intro
  const reveal = (delay = 0) =>
    animate
      ? {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-10% 0px" },
          transition: { duration: 0.6, ease: [0.2, 0.7, 0.2, 1] as const, delay },
        }
      : {}

  return (
    <section
      id="about"
      aria-labelledby="intro-label"
      className="relative z-10 mx-auto w-full max-w-[1280px] px-5 py-24 font-geist sm:px-8 md:py-32 lg:pl-40"
    >
      <p id="intro-label" className={`mb-6 ${labelClass}`}>
        {c.label}
      </p>
      <motion.h2
        {...reveal()}
        className="m-0 max-w-[24ch] text-[clamp(1.75rem,1rem+3vw,3rem)] font-normal leading-[1.2] tracking-[-0.02em] text-hp-lilac"
      >
        {toWords(c.statement).map((w, i) => (
          <span key={i}>
            {i > 0 && !w.glued ? " " : null}
            <span className={w.italic ? italicWordClass : ""}>{w.text}</span>
          </span>
        ))}
      </motion.h2>
      <div className="mt-10 max-w-[56ch] space-y-5">
        {c.details.map((paragraph, i) => (
          <motion.p key={paragraph} {...reveal(0.05 * i)} className="text-[16px] leading-[1.6] text-hp-lilac-soft">
            {paragraph}
          </motion.p>
        ))}
      </div>

      <div className="mt-16 max-w-[760px]">
        <motion.div {...reveal()}>
          <SkillsHeader />
        </motion.div>
        <dl className="m-0">
          {t.home.skills.groups.map((g, i) => (
            <motion.div key={g.label} {...reveal(0.04 * i)} className={groupRow}>
              <SkillGroup group={g} />
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  )
}

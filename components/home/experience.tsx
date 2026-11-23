"use client"

import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion"
import { usePrefersReducedMotion } from "./use-reduced-motion"
import { Fragment, useRef, useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { shell } from "./rich"
import { CountUp } from "./count-up"
import { WordReveal } from "./word-reveal"
import {
  Dash,
  TimelineTrack,
  timelineLabelClass,
  timelineRowClass,
  timelineTitleClass,
} from "./timeline"

// Experience timeline. Read at normal pace (no pin/scrub): on desktop the job
// header sticks while its bullets scroll past, and a thin line fills in violet
// with that job's scroll progress.

type Job = {
  period: string
  role: string
  company: string
  summary?: string
  stats?: { value: string; label: string; detail: string }[]
  featured?: number
  bullets: string[]
  stack?: string
}

const VISIBLE = 4
const ease = [0.2, 0.7, 0.2, 1] as const

export function HomeExperience() {
  const { t } = useLanguage()
  const e = t.home.experience

  return (
    <section id="experience" aria-labelledby="exp-title" className={`${shell} pb-16 pt-28 font-geist`}>
      <h2 id="exp-title" className={`${timelineTitleClass} mb-12`}>
        <WordReveal text={e.title} />
      </h2>
      <LayoutGroup>
        <ol className="m-0 list-none border-b border-hp-line p-0">
          {e.items.map((job) => (
            <JobBlock key={job.period} job={job} showAll={e.showAll} showLess={e.showLess} />
          ))}
        </ol>
      </LayoutGroup>
    </section>
  )
}

/* ---------- selection and parsing ---------- */

/** Bold "before → after" pairs ("3.5 s to 180 ms", "35% para 85%"). */
const PAIR = /^(.+?)\s+(to|para|→)\s+(.+)$/

// Most measurable first: a bold before→after pair beats a bold number, which
// beats the rest. Ties keep the original order; shown bullets stay in order.
function pickTop(bullets: string[], featured?: number) {
  if (featured) return { shown: bullets.slice(0, featured), hidden: bullets.slice(featured) }
  const score = (b: string) => {
    const bolds = [...b.matchAll(/\*\*([^*]+)\*\*/g)].map((m) => m[1])
    if (bolds.some((x) => PAIR.test(x) && /\d/.test(x))) return 2
    if (bolds.some((x) => /\d/.test(x))) return 1
    return 0
  }
  const ranked = bullets.map((b, i) => ({ i, s: score(b) })).sort((a, b) => b.s - a.s || a.i - b.i)
  const top = new Set(ranked.slice(0, VISIBLE).map((r) => r.i))
  return {
    shown: bullets.filter((_, i) => top.has(i)),
    hidden: bullets.filter((_, i) => !top.has(i)),
  }
}

/** "Was Advisory (contract)" → company + contract type. */
function splitCompany(company: string) {
  const m = company.match(/^(.*?)\s*\(([^)]+)\)$/)
  return m ? { name: m[1], contract: m[2] } : { name: company, contract: "" }
}

/* ---------- job block ---------- */

function JobBlock({ job, showAll, showLess }: { job: Job; showAll: string; showLess: string }) {
  const reduce = usePrefersReducedMotion()
  const ref = useRef<HTMLLIElement>(null)
  const entered = useInView(ref, { once: true, amount: 0.15 })
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 70%"] })
  // Function transform keeps framer-motion off its native ScrollTimeline path,
  // which maps target offsets wrongly on this page.
  const fill = useTransform(scrollYProgress, (v) => v)
  const [open, setOpen] = useState(false)
  const { shown, hidden } = pickTop(job.bullets, job.featured)
  const { name, contract } = splitCompany(job.company)

  return (
    <motion.li
      layout={reduce ? false : "position"}
      ref={ref}
      className={timelineRowClass}
    >
      <header className="lg:sticky lg:top-[120px] lg:self-start">
        <p className={timelineLabelClass}>{job.period}</p>
        <WordReveal as="h3" text={job.role} className="m-0 mt-3 text-xl font-semibold leading-snug" />
        <WordReveal as="p" text={name} delay={0.08} className="m-0 mt-1 text-hp-soft" />
        {contract ? (
          /^(in production|em produção)/i.test(contract) ? (
            <p className="m-0 mt-3 inline-flex max-w-full items-center gap-2 rounded-full border border-hp-green/30 bg-hp-green/5 px-3 py-1 text-[13px] text-hp-green">
              <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-hp-green" />
              {contract}
            </p>
          ) : (
            <p className="m-0 mt-2 inline-block rounded-full border border-hp-line-2 px-2.5 py-0.5 font-plex-mono text-[12px] text-hp-muted">
              {contract}
            </p>
          )
        ) : null}
      </header>

      {/* Timeline: violet fill scrubbed by this job's progress, dot at its start. */}
      <TimelineTrack fill={fill} entered={entered} reduce={reduce} />

      <div className="min-w-0">
        {job.summary ? (
          <WordReveal as="p" text={job.summary} delay={0.12} className="m-0 mb-5 max-w-[64ch] text-hp-soft" />
        ) : null}

        {job.stats ? (
          <ul className="m-0 mb-7 grid max-w-[760px] list-none grid-cols-2 gap-3 p-0 xl:grid-cols-4">
            {job.stats.map((st, i) => (
              <StatCard key={st.label} stat={st} delay={i * 0.06} />
            ))}
          </ul>
        ) : null}

        {job.bullets.length === 0 && !job.summary ? (
          // A job that just started has nothing to list yet.
          <p className="m-0 font-jb text-2xl leading-none text-hp-violet">:)</p>
        ) : null}

        <ul className="m-0 flex max-w-[72ch] list-none flex-col gap-3 p-0 empty:hidden">
          {shown.map((b, i) => (
            <Bullet key={b} text={b} delay={i * 0.06} />
          ))}
          <AnimatePresence initial={false}>
            {open
              ? hidden.map((b, i) => (
                  <Bullet key={b} text={b} delay={i * 0.04} layoutIn />
                ))
              : null}
          </AnimatePresence>
        </ul>

        {hidden.length > 0 ? (
          <motion.button
            layout={reduce ? false : "position"}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="mt-5 inline-flex min-h-10 cursor-pointer items-center rounded-full border border-hp-line-2 px-4 font-plex-mono text-[13px] text-hp-soft hover:border-hp-violet/60 hover:text-hp-lilac"
          >
            {open ? showLess : `${showAll} (${job.bullets.length})`}
          </motion.button>
        ) : null}

        {job.stack ? (
          <motion.ul
            layout={reduce ? false : "position"}
            aria-label="Stack"
            className="m-0 mt-6 flex max-w-[72ch] list-none flex-wrap gap-2 p-0"
          >
            {job.stack.split(/\s*·\s*/).map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-hp-line-2 bg-hp-bg/60 px-3.5 py-1.5 font-plex-mono text-[14px] text-hp-soft"
              >
                {tech}
              </li>
            ))}
          </motion.ul>
        ) : null}
      </div>
    </motion.li>
  )
}

/* ---------- stat card ---------- */

function StatCard({ stat, delay }: { stat: { value: string; label: string; detail: string }; delay: number }) {
  const reduce = usePrefersReducedMotion()
  const motionProps = reduce
    ? { initial: false as const, animate: { opacity: 1, y: 0 }, transition: { duration: 0 } }
    : {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.6 },
        transition: { duration: 0.4, ease, delay },
      }
  return (
    <motion.li {...motionProps} className="rounded-xl border border-hp-line-2 bg-hp-bg/70 px-4 py-4">
      <p className="m-0 font-geist text-[clamp(1.25rem,1rem+0.8vw,1.75rem)] font-medium leading-tight tracking-[-0.02em] text-hp-violet">
        {/^\D{0,2}\d/.test(stat.value) ? <CountUp text={stat.value} /> : stat.value}
      </p>
      <p className="m-0 mt-2 text-sm font-medium text-hp-fg">{stat.label}</p>
      <p className="m-0 mt-0.5 font-plex-mono text-[12px] text-hp-muted">{stat.detail}</p>
    </motion.li>
  )
}

/* ---------- bullet ---------- */

function Bullet({ text, delay, layoutIn = false }: { text: string; delay: number; layoutIn?: boolean }) {
  const reduce = usePrefersReducedMotion()
  // Reduced motion resolves after hydration, so pin the final state explicitly
  // instead of dropping the props (an initial opacity 0 would otherwise stick).
  const motionProps = reduce
    ? { initial: false as const, animate: { opacity: 1, y: 0 }, transition: { duration: 0 } }
    : layoutIn
      ? {
          layout: "position" as const,
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -8 },
          transition: { duration: 0.3, ease, delay },
        }
      : {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.6 },
          transition: { duration: 0.4, ease, delay },
        }

  return (
    <motion.li {...motionProps} className="group flex gap-3 leading-[1.6] text-hp-soft">
      <Dash />
      <span>
        <BulletText text={text} />
      </span>
    </motion.li>
  )
}

function BulletText({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).map((seg, i) => {
        if (seg.startsWith("**") && seg.endsWith("**")) return <Figure key={i} text={seg.slice(2, -2)} />
        if (seg.startsWith("`") && seg.endsWith("`"))
          return (
            <code key={i} className="font-plex-mono text-[0.92em] text-hp-code-fg">
              {seg.slice(1, -1)}
            </code>
          )
        return <Fragment key={i}>{seg}</Fragment>
      })}
    </>
  )
}

/** Bold run: a before→after pair gets the "after" in violet with a count-up. */
function Figure({ text }: { text: string }) {
  const pair = text.match(PAIR)
  if (pair && /\d/.test(pair[3])) {
    return (
      <strong className="font-semibold text-hp-fg">
        {pair[1]} {pair[2]}{" "}
        <span className="text-hp-violet">
          <CountUp text={pair[3]} />
        </span>
      </strong>
    )
  }
  return (
    <strong className="font-semibold text-hp-fg">
      {/^\D{0,2}\d/.test(text) ? <CountUp text={text} /> : text}
    </strong>
  )
}

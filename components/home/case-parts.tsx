"use client"

import Link from "next/link"
import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { CountUp } from "./count-up"
import { Dash } from "./timeline"
import { usePrefersReducedMotion } from "./use-reduced-motion"
import { italicWordClass, toWords } from "./word-reveal"

// Shared pieces of the "Software I've shipped" project cards (Swarm, Serverless):
// one text column in the Tork card's language next to a product frame.

const ease = [0.2, 0.7, 0.2, 1] as const

export type CaseCopy = {
  kicker: string
  title: string
  /** Opening line; "*text*" is set in the italic serif. */
  lead: string
  body: string
  cta: string
  figures: { value: string; label: string }[]
  pillars: { title: string; text: string }[]
  decision: { label: string; text: string }
}

/** Fade-up entrance for a card's frame, pinned to the final state under reduced motion. */
export function useEnter() {
  const reduce = usePrefersReducedMotion()
  return reduce
    ? { initial: false as const, animate: { opacity: 1, y: 0 }, transition: { duration: 0 } }
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.6, ease },
      }
}

/** Window chrome around a product visual. */
export function CaseFrame({
  label,
  className = "",
  children,
}: {
  label: string
  className?: string
  children: ReactNode
}) {
  const enter = useEnter()
  return (
    <motion.div
      {...enter}
      className={`flex min-w-0 flex-col overflow-hidden rounded-[10px] border border-hp-line bg-hp-bg ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-hp-line px-4 py-3 font-plex-mono text-xs text-hp-lilac-dim">
        {[0, 1, 2].map((i) => (
          <span key={i} aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-hp-line-2" />
        ))}
        <span className="ml-2">{label}</span>
      </div>
      {children}
    </motion.div>
  )
}

/** Small uppercase mono heading inside a frame. */
export function FrameLabel({ children }: { children: ReactNode }) {
  return <p className="m-0 mb-4 font-jb text-[12px] uppercase tracking-[0.18em] text-hp-lilac-dim">{children}</p>
}

/** The text column: title, lead, body, figures, pillars, design decision, stack, link. */
export function CaseText({ copy, stack, href }: { copy: CaseCopy; stack: string; href?: string }) {
  return (
    <div className="min-w-0">
      <h3 className="m-0 mb-2 text-[30px] font-bold leading-[1.15] tracking-[-0.01em] text-hp-lilac">{copy.title}</h3>
      <p className="m-0 mb-5 font-plex-mono text-[13px] text-hp-violet">{copy.kicker}</p>
      <p className="m-0 mb-4 text-[clamp(1.25rem,1.05rem+0.6vw,1.6rem)] font-medium leading-snug tracking-[-0.01em] text-hp-lilac">
        {toWords(copy.lead).map((w, i) => (
          <span key={i}>
            {i > 0 && !w.glued ? " " : null}
            <span className={w.italic ? `${italicWordClass} font-normal` : undefined}>{w.text}</span>
          </span>
        ))}
      </p>
      <p className="m-0 mb-7 max-w-[54ch] text-hp-lilac-soft">{copy.body}</p>

      <dl className="m-0 mb-8 grid grid-cols-2 border-y border-hp-line">
        {copy.figures.map((f, i) => (
          <div
            key={f.label}
            className={`flex flex-col-reverse justify-end gap-1.5 py-4 ${i % 2 === 1 ? "border-l border-hp-line pl-4" : "pr-4"} ${
              i >= 2 ? "border-t border-hp-line" : ""
            }`}
          >
            <dt className="text-[13px] leading-snug text-hp-lilac-dim">{f.label}</dt>
            <dd className="m-0 text-[clamp(1.6rem,1.2rem+1.2vw,2.25rem)] font-medium leading-none tracking-[-0.03em] text-hp-violet">
              <CountUp text={f.value} />
            </dd>
          </div>
        ))}
      </dl>

      <ul className="m-0 mb-7 flex list-none flex-col gap-4 p-0">
        {copy.pillars.map((pillar) => (
          <li key={pillar.title} className="group flex gap-3">
            <Dash />
            <span className="min-w-0">
              <span className="block font-medium text-hp-lilac">{pillar.title}</span>
              <span className="mt-0.5 block text-[15px] leading-snug text-hp-lilac-soft">{pillar.text}</span>
            </span>
          </li>
        ))}
      </ul>

      <div className="mb-7 border-l border-hp-violet/60 pl-4">
        <p className={`m-0 ${italicWordClass} text-[1.3rem] leading-snug`}>{copy.decision.label}</p>
        <p className="m-0 mt-1 max-w-[52ch] text-[15px] leading-snug text-hp-lilac-soft">{copy.decision.text}</p>
      </div>

      <ul aria-label="Stack" className="m-0 mb-7 flex list-none flex-wrap gap-2 p-0">
        {stack.split(" · ").map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-hp-line-2 px-3 py-1 font-plex-mono text-[13px] text-hp-lilac-soft"
          >
            {tech}
          </li>
        ))}
      </ul>
      {href ? (
        <Link href={href} className="font-semibold text-hp-violet hover:underline hover:underline-offset-4">
          {copy.cta}
        </Link>
      ) : null}
    </div>
  )
}

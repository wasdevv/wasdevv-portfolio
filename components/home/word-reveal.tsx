"use client"

import { motion, useInView, useTransform, type MotionValue } from "framer-motion"
import { usePrefersReducedMotion } from "./use-reduced-motion"
import { useRef } from "react"

// Word-by-word reveal shared by the homepage sections: each word goes from
// faint and blurred to sharp. Two triggers:
//   - `progress` (+ `range`): scrubbed by a scroll progress value (About);
//   - otherwise: plays once when the element enters the viewport (Experience).
// prefers-reduced-motion renders plain text. "*text*" marks italic serif words.

/** Start and end of every word's transition. */
const FROM = { opacity: 0.15, filter: "blur(8px)" }
const TO = { opacity: 1, filter: "blur(0px)" }
/** How many words are mid-transition at once (scroll mode). */
const SPREAD = 4
/** Seconds per word and between words (viewport mode). */
const WORD_DURATION = 0.5
const WORD_STAGGER = 0.035

export const italicWordClass = "font-serif-i text-[1.08em] italic tracking-normal text-hp-violet"

type Word = { text: string; italic: boolean; glued: boolean }

export function toWords(text: string): Word[] {
  const words: Word[] = []
  text.split(/(\*[^*]+\*)/g).forEach((chunk) => {
    const italic = chunk.startsWith("*") && chunk.endsWith("*")
    const body = italic ? chunk.slice(1, -1) : chunk
    // Punctuation right after an italic run ("engineer,") stays attached to it.
    const glueFirst = !italic && body.length > 0 && !/^\s/.test(body) && words.length > 0
    body
      .split(/\s+/)
      .filter(Boolean)
      .forEach((w, i) => words.push({ text: w, italic, glued: i === 0 && glueFirst }))
  })
  return words
}

type Tag = "h2" | "h3" | "p" | "span"

export function WordReveal({
  text,
  as: Tag = "span",
  className,
  progress,
  range = [0, 1],
  delay = 0,
}: {
  text: string
  as?: Tag
  className?: string
  /** Scroll progress to scrub against; omit to play once on entering the viewport. */
  progress?: MotionValue<number>
  /** Part of `progress` the whole reveal spans. */
  range?: [number, number]
  /** Extra delay in seconds (viewport mode). */
  delay?: number
}) {
  const reduce = usePrefersReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const words = toWords(text)

  const [start, end] = range
  const span = end - start
  const win = span * Math.min(0.5, SPREAD / words.length)
  const step = (span - win) / Math.max(1, words.length - 1)

  return (
    <Tag ref={ref as React.Ref<never>} className={className}>
      {words.map((w, i) => (
        <span key={i}>
          {i > 0 && !w.glued ? " " : null}
          {reduce ? (
            <span className={w.italic ? italicWordClass : undefined}>{w.text}</span>
          ) : progress ? (
            <ScrubWord
              progress={progress}
              from={start + i * step}
              to={start + i * step + win}
              className={w.italic ? italicWordClass : ""}
            >
              {w.text}
            </ScrubWord>
          ) : (
            <motion.span
              className={`inline-block ${w.italic ? italicWordClass : ""}`}
              initial={FROM}
              animate={inView ? TO : FROM}
              transition={{ duration: WORD_DURATION, ease: "easeOut", delay: delay + i * WORD_STAGGER }}
            >
              {w.text}
            </motion.span>
          )}
        </span>
      ))}
    </Tag>
  )
}

function ScrubWord({
  progress,
  from,
  to,
  className,
  children,
}: {
  progress: MotionValue<number>
  from: number
  to: number
  className: string
  children: string
}) {
  const opacity = useTransform(progress, [from, to], [FROM.opacity, TO.opacity])
  const filter = useTransform(progress, [from, to], [FROM.filter, TO.filter])
  return (
    <motion.span className={`inline-block ${className}`} style={{ opacity, filter }}>
      {children}
    </motion.span>
  )
}

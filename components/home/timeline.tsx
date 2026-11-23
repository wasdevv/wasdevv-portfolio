"use client"

import { motion, type MotionValue } from "framer-motion"
import type { ReactNode } from "react"

// Shared timeline pieces for the homepage sections that read as a list of
// entries (Experience, Measured in production): two columns on desktop with a
// thin line between them, one column with the line on the left on phones.

/** Row grid: ~30% label column, the 1px line, then the content. */
export const timelineRowClass =
  "relative grid gap-x-12 gap-y-5 border-t border-hp-line py-10 pl-8 lg:grid-cols-[30%_1px_minmax(0,1fr)] lg:pl-0"

/** Small mono label in the left column (Experience dates, metric names). */
export const timelineLabelClass = "m-0 font-plex-mono text-sm text-hp-muted"

/** Section title: same size and weight in every timeline section. */
export const timelineTitleClass = "m-0 text-[40px] font-bold leading-[1.1] tracking-[-0.02em]"

/** Grey track, a violet fill driven by `fill` (0 → 1), and a dot that lights when `entered`. */
export function TimelineTrack({
  fill,
  entered,
  reduce,
}: {
  fill: MotionValue<number>
  entered: boolean
  reduce: boolean
}) {
  return (
    <div
      aria-hidden="true"
      className="absolute bottom-10 left-0 top-12 w-px lg:relative lg:bottom-auto lg:left-auto lg:top-auto"
    >
      <span className="absolute inset-0 bg-hp-line-2" />
      <motion.span className="absolute inset-0 origin-top bg-hp-violet" style={reduce ? { scaleY: 1 } : { scaleY: fill }} />
      <span className="absolute -left-[3.5px] -top-1 h-2 w-2 rounded-full bg-hp-line-3" />
      <span
        className={`absolute -left-[3.5px] -top-1 h-2 w-2 rounded-full bg-hp-violet shadow-[0_0_0_4px_rgba(196,161,255,.18)] ${
          reduce ? "" : "transition-opacity duration-500"
        } ${entered || reduce ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  )
}

/** The bullet dash: violet and 4px to the right while its row (a `group`) is hovered. */
export function Dash({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block shrink-0 text-hp-lilac-dim transition-[transform,color] duration-200 group-hover:translate-x-1 group-hover:text-hp-violet ${className}`}
    >
      –
    </span>
  )
}

/** A row's content: dash + body, hover-linked through `group`. */
export function DashRow({
  children,
  className = "",
  dashClassName = "",
}: {
  children: ReactNode
  className?: string
  /** Nudges the dash to line up with the first line of the body. */
  dashClassName?: string
}) {
  return (
    <div className={`group flex gap-3 ${className}`}>
      <Dash className={dashClassName} />
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  )
}

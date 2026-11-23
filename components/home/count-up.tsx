"use client"

import { animate, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { usePrefersReducedMotion } from "./use-reduced-motion"

/**
 * Counts the leading number up once (0.8 s) when first seen. Only unambiguous
 * numbers ("180", "0.2", "99,9") count; anything else ("11.551", "1.77M") is
 * left as text and simply fades in with its bullet.
 */
export function CountUp({ text }: { text: string }) {
  const reduce = usePrefersReducedMotion()
  const ref = useRef<HTMLSpanElement>(null)
  const seen = useInView(ref, { once: true, amount: 0.6 })
  const m = text.match(/^(\D{0,2}?)(\d+)(?:([.,])(\d{1,2}))?(?!\d|[.,]\d)([\s\S]*)$/)
  const [value, setValue] = useState<string | null>(null)

  useEffect(() => {
    if (!m || !seen || reduce) return
    const decimals = m[4]?.length ?? 0
    const target = Number(`${m[2]}.${m[4] ?? 0}`)
    const sep = m[3] ?? "."
    const controls = animate(0, target, {
      duration: 0.8,
      ease: "easeOut",
      onUpdate: (v) => setValue(v.toFixed(decimals).replace(".", sep)),
      onComplete: () => setValue(null),
    })
    return () => controls.stop()
    // m is derived from text; text is the real dependency.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seen, reduce, text])

  if (!m) return <>{text}</>
  return (
    <span ref={ref} className="tabular-nums">
      {m[1]}
      {value ?? (m[3] ? `${m[2]}${m[3]}${m[4]}` : m[2])}
      {m[5]}
    </span>
  )
}

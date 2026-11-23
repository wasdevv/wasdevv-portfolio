"use client"

import { animate, motion, useInView, useMotionValue, useMotionValueEvent, useTransform } from "framer-motion"
import { useCallback, useEffect, useRef } from "react"
import { hash } from "@/components/hero-background"
import { useLanguage } from "@/components/language-provider"
import { CountUp } from "./count-up"
import { shell } from "./rich"
import { Dash, timelineLabelClass, timelineTitleClass } from "./timeline"
import { useHpTheme } from "./use-hp-theme"
import { usePrefersReducedMotion } from "./use-reduced-motion"
import { italicWordClass, toWords } from "./word-reveal"

// "Measured in production": its own horizontal layout (4 columns, hairline
// dividers, a dithered pixel bar at the base of each), dressed in the
// Experience's identity: Geist, mono labels with the hover dash, the shared
// count-up, violet as the only accent, and the About's italic serif emphasis.

type Item = {
  label: string
  before: string
  after: string
  value: number
  start: number
  decimals?: number
  prefix?: string
  unit: string
  word: string
  note?: string
  kind: "time" | "growth"
  from: number
  to: number
}

const DURATION = 1
/** The violet "after" share never drops below this many CSS pixels. */
const MIN_AFTER_PX = 3

// Hairlines: stacked on phones, 2×2 on tablets, one row of four on desktop.
const cellBorders = (i: number) =>
  [
    i > 0 ? "border-t" : "",
    i === 1 ? "md:border-t-0" : "",
    i % 2 === 1 ? "md:border-l" : "",
    i >= 2 ? "lg:border-t-0" : "",
    i > 0 ? "lg:border-l" : "",
  ].join(" ")

export function HomeProof() {
  const { t, lang } = useLanguage()
  const p = t.home.proof
  const locale = lang === "pt" ? "pt-BR" : "en-US"

  return (
    <>
      <section aria-labelledby="proof-title" className={`${shell} pb-[88px] pt-28 font-geist`}>
        <p className="m-0 mb-4 font-jb text-[12px] uppercase tracking-[0.18em] text-hp-lilac-dim">{p.label}</p>
        <h2 id="proof-title" className={`${timelineTitleClass} mb-12 text-hp-lilac`}>
          {toWords(p.heading).map((w, i) => (
            <span key={i}>
              {i > 0 && !w.glued ? " " : null}
              <span className={w.italic ? `${italicWordClass} font-normal` : undefined}>{w.text}</span>
            </span>
          ))}
        </h2>

        <ul className="m-0 grid list-none grid-cols-1 border-y border-hp-line p-0 md:grid-cols-2 lg:grid-cols-4">
          {p.items.map((item, i) => (
            <MetricColumn key={item.label} item={item} locale={locale} className={cellBorders(i)} />
          ))}
        </ul>
      </section>

      <section aria-label="Highlights" className={`${shell} font-geist`}>
        <dl className="m-0 grid grid-cols-2 border-y border-hp-line lg:grid-cols-4">
          {t.home.highlights.map((h, i) => (
            <div
              key={h.label}
              className={`flex flex-col-reverse justify-end gap-2 py-8 pr-6 ${
                i % 2 === 1 ? "border-l border-hp-line pl-6" : ""
              } ${i >= 2 ? "border-t border-hp-line lg:border-t-0" : ""} ${
                i === 2 ? "lg:border-l lg:pl-6" : ""
              } ${i > 0 ? "lg:pl-8" : ""}`}
            >
              <dt className="text-[15px] leading-snug text-hp-lilac-dim">{h.label}</dt>
              <dd className="m-0 text-[clamp(2rem,1.5rem+1.6vw,2.75rem)] font-medium leading-none tracking-[-0.03em] text-hp-violet">
                <CountUp text={h.value} />
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  )
}

/* ---------- one metric column ---------- */

function MetricColumn({ item, locale, className }: { item: Item; locale: string; className: string }) {
  const reduce = usePrefersReducedMotion()
  const ref = useRef<HTMLLIElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  // One value drives the bar and the headline figure, so they stay in sync.
  const progress = useMotionValue(0)

  useEffect(() => {
    if (reduce) {
      progress.set(1)
      return
    }
    if (!inView) return
    const controls = animate(progress, 1, { duration: DURATION, ease: "easeOut" })
    return () => controls.stop()
  }, [inView, reduce, progress])

  const whole = new Intl.NumberFormat(locale, { maximumFractionDigits: 0 })
  const fine = new Intl.NumberFormat(locale, {
    minimumFractionDigits: item.decimals ?? 0,
    maximumFractionDigits: item.decimals ?? 0,
  })
  const figure = useTransform(progress, (v) => {
    const n = item.start + (item.value - item.start) * v
    // Decimals only once the figure is small (the 12,700 → 0.2 ms countdown).
    return item.decimals && Math.abs(n) < 10 ? fine.format(n) : whole.format(Math.round(n))
  })

  return (
    <li ref={ref} className={`group flex flex-col border-hp-line px-0 py-8 md:px-6 ${className}`}>
      <p className={`${timelineLabelClass} flex gap-2`}>
        <Dash />
        <span>{item.label}</span>
      </p>

      <p className="m-0 mt-6 flex flex-wrap items-baseline gap-x-2.5 gap-y-1 leading-none text-hp-violet">
        <span className="text-[clamp(2.25rem,1.6rem+1.8vw,3.25rem)] font-medium tabular-nums tracking-[-0.03em]">
          {item.prefix}
          <motion.span>{figure}</motion.span>
          {item.unit}
        </span>
        {item.word ? <span className={`${italicWordClass} text-[1.45rem] text-hp-lilac`}>{item.word}</span> : null}
      </p>
      {item.note ? <p className={`m-0 mt-2 ${italicWordClass} text-[1.2rem] text-hp-lilac`}>{item.note}</p> : null}

      <p className="m-0 mb-7 mt-4 font-plex-mono text-sm text-hp-muted">
        <CountUp text={item.before} /> →{" "}
        <span className="text-hp-lilac">
          <CountUp text={item.after} />
        </span>
      </p>

      <div className="mt-auto">
        <DitherBar item={item} progress={progress} />
      </div>
    </li>
  )
}

/* ---------- dithered bar ---------- */

const PX = 2 // CSS pixels per dither block
const ROWS = 7 // 7 blocks × 2px = 14px tall
// Pixel colours per theme: on the light theme the violet darkens to keep contrast.
const BAR = {
  dark: { sparse: [58, 49, 82], dense: [196, 161, 255], spark: [233, 220, 255] }, // #c4a1ff, #e9dcff
  light: { sparse: [200, 190, 216], dense: [116, 68, 212], spark: [168, 132, 238] }, // #7444d4
} as const

// Canvas bar in the planet's pixel language: the violet "after" share is dense
// with a few light sparks, the rest is sparse grey-violet. Fixed seed per bar,
// so only the split moves, never the grain.
function DitherBar({ item, progress }: { item: Item; progress: ReturnType<typeof useMotionValue<number>> }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const seed = useRef(hash(item.label.length * 2654435761 + item.label.charCodeAt(2)))
  const [theme] = useHpTheme()
  const { sparse: SPARSE, dense: DENSE, spark: SPARK } = BAR[theme]

  const draw = useCallback(
    (v: number) => {
      const canvas = canvasRef.current
      if (!canvas) return
      const cols = Math.max(1, Math.floor(canvas.clientWidth / PX))
      if (canvas.width !== cols) {
        canvas.width = cols
        canvas.height = ROWS
      }
      const ctx = canvas.getContext("2d")
      if (!ctx) return
      const floor = MIN_AFTER_PX / PX / cols
      const target = item.kind === "time" ? Math.max(item.to, floor) : item.to
      const share = item.from + (target - item.from) * v
      const split = Math.max(Math.ceil(floor * cols), Math.round(share * cols))
      const img = ctx.createImageData(cols, ROWS)
      const d = img.data
      for (let y = 0; y < ROWS; y++) {
        for (let x = 0; x < cols; x++) {
          const r = (hash((y * 4096 + x) ^ seed.current) >>> 8) / 16777216
          let c: readonly number[] | null = null
          if (x < split) {
            if (r < 0.1) c = SPARK
            else if (r < 0.88) c = DENSE
          } else if (r < 0.2) c = SPARSE
          if (!c) continue
          const o = (y * cols + x) * 4
          d[o] = c[0]
          d[o + 1] = c[1]
          d[o + 2] = c[2]
          d[o + 3] = 255
        }
      }
      ctx.putImageData(img, 0, 0)
    },
    [item, SPARSE, DENSE, SPARK],
  )

  useMotionValueEvent(progress, "change", draw)
  useEffect(() => {
    draw(progress.get())
    const canvas = canvasRef.current
    if (!canvas) return
    const ro = new ResizeObserver(() => draw(progress.get()))
    ro.observe(canvas)
    return () => ro.disconnect()
  }, [draw, progress])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="mt-auto block h-[14px] w-full"
      style={{ imageRendering: "pixelated" }}
    />
  )
}

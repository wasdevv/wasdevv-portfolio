"use client"

import { useEffect, useState } from "react"

// Local time in Brazil (UTC−3), ticking on the exact second boundary so it
// never drifts from the system clock. Renders nothing until mounted, so the
// server HTML and the first client render agree.

const TZ = "America/Sao_Paulo"
const fmt = new Intl.DateTimeFormat("en-GB", {
  timeZone: TZ,
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
})

export function LiveClock({ className = "inline-flex" }: { className?: string }) {
  const [now, setNow] = useState<Date | null>(null)

  useEffect(() => {
    let timer: number
    const tick = () => {
      setNow(new Date())
      // Wake just after the next whole second.
      timer = window.setTimeout(tick, 1000 - (Date.now() % 1000) + 5)
    }
    tick()
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <span
      className={`items-center gap-2 font-jb text-[12px] tracking-[0.08em] text-hp-lilac-soft ${className}`}
      title="Brazil · America/São Paulo"
    >
      <span className="text-hp-lilac-dim">UTC−3</span>
      <time
        dateTime={now?.toISOString()}
        className="inline-block min-w-[8ch] tabular-nums text-hp-lilac"
        suppressHydrationWarning
      >
        {now ? fmt.format(now) : "--:--:--"}
      </time>
    </span>
  )
}

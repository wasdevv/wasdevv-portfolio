"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { SectionFrame } from "@/components/section-frame"

export function PtySimulator() {
  const { t } = useLanguage()
  const p = t.swarm.pty
  const promptText = p.promptLine
  const output = p.lines

  const [typed, setTyped] = useState("")
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    let cancelled = false
    let timer: ReturnType<typeof setTimeout>
    let i = 0

    setTyped("")
    setVisibleLines(0)

    const type = () => {
      if (cancelled) return
      if (i <= promptText.length) {
        setTyped(promptText.slice(0, i))
        i += 1
        timer = setTimeout(type, 22)
      } else {
        timer = setTimeout(() => revealLines(0), 400)
      }
    }

    const revealLines = (n: number) => {
      if (cancelled) return
      if (n <= output.length) {
        setVisibleLines(n)
        timer = setTimeout(() => revealLines(n + 1), output[n]?.text ? 180 : 60)
      }
    }

    type()

    return () => {
      cancelled = true
      clearTimeout(timer)
    }
  }, [promptText, output])

  return (
    <SectionFrame kicker={p.kicker} title={p.title} subtitle={p.subtitle}>
      <div className="overflow-hidden rounded-none border border-border bg-card shadow-2xl shadow-primary/5">
        <TerminalHeader label={p.windowLabel} />
        <div className="grid grid-cols-[auto,1fr] gap-x-4 overflow-x-auto p-5 font-mono text-[13px] leading-relaxed md:p-6">
          <Gutter count={2 + visibleLines} />
          <div>
            <div>
              <span className="text-primary">{p.promptLabel}</span>
              <span className="text-muted-foreground"> &gt; </span>
              <span>{typed}</span>
              <span
                aria-hidden
                className="ml-0.5 inline-block h-[1em] w-[0.5ch] translate-y-[0.15em] animate-[blink_1s_steps(1)_infinite] bg-foreground"
              />
            </div>
            <div className="mt-1"> </div>
            {output.slice(0, visibleLines).map((line, i) => (
              <div
                key={i}
                className={
                  line.kind === "task"
                    ? "text-foreground/90"
                    : line.kind === "ok"
                      ? "text-chart-3"
                      : "text-muted-foreground"
                }
              >
                {line.text || " "}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionFrame>
  )
}

function TerminalHeader({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-border bg-muted/30 px-3 py-2 font-mono text-xs text-muted-foreground">
      <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
      <span className="h-2.5 w-2.5 rounded-full bg-primary/50" />
      <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
      <span className="ml-3">{label}</span>
    </div>
  )
}

function Gutter({ count }: { count: number }) {
  return (
    <div className="select-none border-r border-border/50 pr-4 text-right tabular-nums text-muted-foreground/40">
      {Array.from({ length: Math.max(count, 6) }).map((_, i) => (
        <div key={i}>{String(i + 1).padStart(2, "0")}</div>
      ))}
    </div>
  )
}

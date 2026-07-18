"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { SectionFrame } from "./section-frame"

type Line = { kind: "sys" | "task" | "ok" | "warn"; text: string }

const OUTPUT: Line[] = [
  { kind: "sys", text: "swarm: fanning out 3 agents from main (5f2a1c9)" },
  { kind: "task", text: "  ↳ 20260715-1445-a3f2  pid=12345  .swarm/worktrees/a3f2" },
  { kind: "task", text: "  ↳ 20260715-1445-b7c1  pid=12346  .swarm/worktrees/b7c1" },
  { kind: "task", text: "  ↳ 20260715-1445-9d0e  pid=12347  .swarm/worktrees/9d0e" },
  { kind: "sys", text: "" },
  { kind: "sys", text: "[a3f2] reading Gemfile, config/routes.rb, app/controllers/deals_controller.rb" },
  { kind: "sys", text: "[b7c1] reading Gemfile, config/routes.rb, app/controllers/deals_controller.rb" },
  { kind: "sys", text: "[9d0e] reading Gemfile, config/routes.rb, app/controllers/deals_controller.rb" },
  { kind: "sys", text: "" },
  { kind: "ok", text: "[a3f2] modified 3 files  (+48 −12)  ↑ deals_controller.rb, deal.rb, deal_spec.rb" },
  { kind: "ok", text: "[b7c1] modified 2 files  (+36 −8)   ↑ deals_controller.rb, deal.rb" },
  { kind: "ok", text: "[9d0e] modified 5 files  (+72 −18)  ↑ deals_controller.rb, deal.rb, cursor_paginator.rb, +2" },
  { kind: "sys", text: "" },
  { kind: "sys", text: "swarm: all agents finished. review with /swarm:diff <task-id>" },
]

export function PtySimulator() {
  const { t } = useLanguage()
  const p = t.swarm.pty
  const promptText = p.promptLine

  const [typed, setTyped] = useState("")
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    let cancelled = false
    let i = 0

    const type = () => {
      if (cancelled) return
      if (i <= promptText.length) {
        setTyped(promptText.slice(0, i))
        i += 1
        setTimeout(type, 22)
      } else {
        setTimeout(() => revealLines(0), 400)
      }
    }

    const revealLines = (n: number) => {
      if (cancelled) return
      if (n <= OUTPUT.length) {
        setVisibleLines(n)
        setTimeout(() => revealLines(n + 1), OUTPUT[n]?.kind === "sys" && !OUTPUT[n]?.text ? 60 : 180)
      }
    }

    type()

    return () => {
      cancelled = true
    }
  }, [promptText])

  return (
    <SectionFrame kicker={p.kicker} title={p.title} subtitle={p.subtitle}>
      <div className="overflow-hidden rounded-none border border-border bg-card shadow-2xl shadow-primary/5">
        <TerminalHeader />
        <div className="grid grid-cols-[auto,1fr] gap-x-4 overflow-x-auto p-5 font-mono text-[13px] leading-relaxed md:p-6">
          <Gutter count={2 + visibleLines} />
          <div>
            <div>
              <span className="text-primary">swarm</span>
              <span className="text-muted-foreground">@</span>
              <span className="text-chart-3">localhost</span>
              <span className="text-muted-foreground"> ~/pipeline_hq $ </span>
              <span>{typed.replace(/^swarm> /, "")}</span>
              <span
                aria-hidden
                className="ml-0.5 inline-block h-[1em] w-[0.5ch] translate-y-[0.15em] animate-[blink_1s_steps(1)_infinite] bg-foreground"
              />
            </div>
            <div className="mt-1">
              <span className="text-muted-foreground/60">
                {typed.length === promptText.length ? "" : " "}
              </span>
            </div>
            {OUTPUT.slice(0, visibleLines).map((line, i) => (
              <div
                key={i}
                className={
                  line.kind === "task"
                    ? "text-foreground/90"
                    : line.kind === "ok"
                      ? "text-chart-3"
                      : line.kind === "warn"
                        ? "text-yellow-500"
                        : "text-muted-foreground"
                }
              >
                {line.text || " "}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionFrame>
  )
}

function TerminalHeader() {
  return (
    <div className="flex items-center gap-2 border-b border-border bg-muted/30 px-3 py-2 font-mono text-xs text-muted-foreground">
      <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
      <span className="h-2.5 w-2.5 rounded-full bg-primary/50" />
      <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
      <span className="ml-3">swarm — bash — 100×32</span>
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

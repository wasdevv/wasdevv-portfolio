"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { SectionFrame } from "./section-frame"

// Node layout on a 800×420 svg viewBox — hand-tuned to read like a data-flow.
const LAYOUT: Record<
  string,
  { x: number; y: number; w: number; h: number; hint?: string }
> = {
  prompt: { x: 40, y: 40, w: 200, h: 60 },
  orchestrator: { x: 300, y: 40, w: 220, h: 60 },
  worktrees: { x: 580, y: 40, w: 180, h: 60 },
  ptys: { x: 580, y: 140, w: 180, h: 60 },
  claude: { x: 580, y: 240, w: 180, h: 60 },
  cable: { x: 300, y: 240, w: 220, h: 60 },
  diff: { x: 40, y: 240, w: 200, h: 60 },
  ship: { x: 40, y: 340, w: 200, h: 60 },
}

const EDGES: Array<[string, string]> = [
  ["prompt", "orchestrator"],
  ["orchestrator", "worktrees"],
  ["worktrees", "ptys"],
  ["ptys", "claude"],
  ["claude", "cable"],
  ["cable", "diff"],
  ["diff", "ship"],
]

export function ArchitectureDiagram() {
  const { t } = useLanguage()
  const a = t.swarm.architecture
  const nodesById = Object.fromEntries(a.nodes.map((n) => [n.id, n.label]))
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <SectionFrame kicker={a.kicker} title={a.title} subtitle={a.subtitle}>
      <div className="overflow-x-auto border border-border bg-card/40 p-4 md:p-8">
        <svg
          viewBox="0 0 800 420"
          className="mx-auto w-full min-w-[720px] max-w-4xl"
          role="img"
          aria-label={a.title}
        >
          <defs>
            <marker
              id="arrow"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" className="fill-muted-foreground/60" />
            </marker>
          </defs>

          {EDGES.map(([from, to], i) => {
            const a = LAYOUT[from]
            const b = LAYOUT[to]
            const path = buildPath(a, b)
            return (
              <motion.path
                key={`${from}-${to}`}
                d={path}
                fill="none"
                strokeWidth={1.5}
                strokeDasharray="4 4"
                markerEnd="url(#arrow)"
                className="stroke-muted-foreground/60"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 * i, ease: "easeOut" }}
              />
            )
          })}

          {a.nodes.map((node, i) => {
            const rect = LAYOUT[node.id]
            if (!rect) return null
            const active = hovered === node.id
            return (
              <motion.g
                key={node.id}
                onMouseEnter={() => setHovered(node.id)}
                onMouseLeave={() => setHovered(null)}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.08 * i }}
                className="cursor-default"
              >
                <rect
                  x={rect.x}
                  y={rect.y}
                  width={rect.w}
                  height={rect.h}
                  rx={2}
                  className={
                    active
                      ? "fill-primary/15 stroke-primary"
                      : "fill-background stroke-border"
                  }
                  strokeWidth={1}
                />
                <text
                  x={rect.x + rect.w / 2}
                  y={rect.y + rect.h / 2 + 4}
                  textAnchor="middle"
                  className={`font-mono text-[13px] ${active ? "fill-primary" : "fill-foreground"}`}
                >
                  {nodesById[node.id] ?? node.id}
                </text>
              </motion.g>
            )
          })}
        </svg>
      </div>
    </SectionFrame>
  )
}

function buildPath(
  a: { x: number; y: number; w: number; h: number },
  b: { x: number; y: number; w: number; h: number },
) {
  const ax = a.x + a.w / 2
  const ay = a.y + a.h / 2
  const bx = b.x + b.w / 2
  const by = b.y + b.h / 2

  // Right-angle "L" style paths that hug the grid.
  if (Math.abs(ay - by) < 5) {
    return `M ${a.x + a.w} ${ay} L ${b.x} ${by}`
  }
  if (Math.abs(ax - bx) < 5) {
    return `M ${ax} ${a.y + a.h} L ${bx} ${b.y}`
  }
  const midX = ax < bx ? a.x + a.w : a.x
  return `M ${midX} ${ay} L ${bx} ${ay} L ${bx} ${b.y}`
}

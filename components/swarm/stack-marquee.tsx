"use client"

import { useLanguage } from "@/components/language-provider"

// Infinite marquee — duplicates the row twice and animates from 0 → -50%.
// The animation lives in globals.css (see @keyframes marquee).
export function StackMarquee() {
  const { t } = useLanguage()
  const s = t.swarm.stack
  const items = [...s.items, ...s.items]

  return (
    <section className="relative border-t border-border/50 py-16 md:py-20">
      <div className="mx-auto mb-8 max-w-6xl px-4 md:px-6">
        <p className="mb-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
          {s.kicker}
        </p>
        <h2 className="text-2xl font-semibold md:text-3xl">{s.title}</h2>
      </div>

      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-6 whitespace-nowrap animate-[marquee_35s_linear_infinite] will-change-transform">
          {items.map((item, i) => (
            <div
              key={`${item}-${i}`}
              className="inline-flex flex-shrink-0 items-center gap-2 border border-border/70 bg-card/50 px-4 py-2 font-mono text-sm text-muted-foreground"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

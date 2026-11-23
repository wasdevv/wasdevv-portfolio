"use client"

import { useLanguage } from "@/components/language-provider"

// The stack as a still, wrapping list: every item readable at once.
export function StackMarquee() {
  const { t } = useLanguage()
  const s = t.swarm.stack

  return (
    <section className="relative border-t border-border/50 py-16 md:py-20">
      <div className="mx-auto mb-8 max-w-[1840px] px-6 lg:px-10 2xl:px-14">
        <h2 className="text-2xl font-semibold md:text-3xl">{s.title}</h2>
      </div>

      <ul className="mx-auto flex max-w-[1840px] flex-wrap gap-3 px-6 lg:px-10 2xl:px-14">
        {s.items.map((item) => (
          <li
            key={item}
            className="inline-flex items-center gap-2 border border-border/70 bg-card px-4 py-2 font-mono text-sm text-muted-foreground"
          >
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-primary/70" />
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}

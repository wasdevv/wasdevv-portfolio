"use client"

import { useLanguage } from "@/components/language-provider"
import { shell } from "./rich"

// Bar = share of the original time still left after the change. The tiny ones
// get a 4px floor so they stay visible; coverage is a share of the suite.
const bars = [
  { width: "5.1%" },
  { width: "4px" },
  { width: "4px" },
  { width: "85%", green: true },
]

export function HomeProof() {
  const { t } = useLanguage()
  const p = t.home.proof

  return (
    <>
      <section aria-labelledby="proof-title" className={`${shell} pb-[88px]`}>
        <h2
          id="proof-title"
          className="m-0 mb-5 font-plex-mono text-[13px] font-medium text-hp-muted"
        >
          {p.title}
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-px overflow-hidden rounded-xl border border-hp-line bg-hp-line">
          {p.items.map((item, i) => {
            const bar = bars[i]
            return (
              <div key={item.label} className="bg-hp-band p-6">
                <p className="m-0 text-[15px] text-hp-muted">{item.label}</p>
                <p className="mb-3.5 mt-1.5 font-plex-mono text-[26px] font-semibold">
                  <span className="text-lg text-hp-dim">{item.before} →</span>{" "}
                  <span className={bar?.green ? "text-hp-green" : "text-hp-cyan"}>
                    {item.after}
                  </span>
                </p>
                <div aria-hidden="true" className="h-1.5 rounded-[3px] bg-hp-line">
                  <div
                    className={`h-1.5 rounded-[3px] ${bar?.green ? "bg-hp-green" : "bg-hp-cyan"}`}
                    style={{ width: bar?.width }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section aria-label="Highlights" className="border-y border-hp-line bg-hp-band">
        <div className={`${shell} flex flex-wrap gap-x-14 gap-y-5 py-7 text-[15px] text-hp-soft`}>
          {t.home.highlights.map((h) => (
            <p key={h.label} className="m-0">
              <span className="font-plex-mono font-semibold text-hp-fg">{h.value}</span> {h.label}
            </p>
          ))}
        </div>
      </section>
    </>
  )
}

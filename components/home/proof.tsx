"use client"

import { useLanguage } from "@/components/language-provider"
import { shell } from "./rich"

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
            const green = i === p.items.length - 1
            return (
              <div key={item.label} className="bg-hp-band p-6">
                <p className="m-0 text-[15px] text-hp-muted">{item.label}</p>
                <p className="m-0 mt-1.5 font-plex-mono text-[26px] font-semibold">
                  <span className="text-lg text-hp-dim">{item.before} →</span>{" "}
                  <span className={green ? "text-hp-green" : "text-hp-cyan"}>
                    {item.after}
                  </span>
                </p>
                <p className={`m-0 mt-2 font-plex-mono text-[13px] ${green ? "text-hp-green" : "text-hp-cyan"}`}>
                  {item.gain}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      <section aria-label="Highlights" className="border-y border-hp-line bg-hp-band">
        <dl className={`${shell} m-0 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-x-px gap-y-5 py-7`}>
          {t.home.highlights.map((h) => (
            <div key={h.label} className="px-6">
              <dt className="font-plex-mono text-[26px] font-semibold text-hp-cyan">{h.value}</dt>
              <dd className="m-0 mt-1 text-[15px] text-hp-soft">{h.label}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  )
}

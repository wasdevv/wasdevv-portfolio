"use client"

import { useLanguage } from "@/components/language-provider"
import { Rich, shell } from "./rich"

const diff = [
  { add: false, line: "- number = scope.maximum(:number).to_i + 1" },
  { add: true, line: "+ Protocol.transaction do" },
  { add: true, line: "+   advisory_lock(department_id, year)" },
  { add: true, line: "+   number = scope.maximum(:number).to_i + 1" },
  { add: true, line: "+   create!(number:, department_id:, year:)" },
  { add: true, line: "+ end" },
]

export function HomeBugCase() {
  const { t } = useLanguage()
  const c = t.home.bugCase

  return (
    <section id="case" aria-labelledby="case-title" className="mt-16 border-y border-hp-line bg-hp-band">
      <div className={`${shell} flex flex-wrap items-center gap-14 py-[104px]`}>
        <div className="min-w-0 flex-[1_1_400px]">
          <p className="m-0 mb-3.5 font-plex-mono text-[13px] text-hp-cyan">{c.kicker}</p>
          <h2
            id="case-title"
            className="m-0 mb-6 text-[40px] font-bold leading-[1.12] tracking-[-0.02em]"
          >
            {c.title}
          </h2>
          <p className="m-0 mb-4 text-hp-soft">
            <Rich text={c.cause} />
          </p>
          <p className="m-0 mb-7 text-hp-soft">{c.fix}</p>
          <div className="flex flex-wrap gap-8 text-[15px]">
            {c.facts.map((f) => (
              <p key={f.label} className="m-0">
                <span className="block font-plex-mono text-[13px] text-hp-muted">{f.label}</span>
                {f.value}
              </p>
            ))}
          </div>
        </div>
        <div className="min-w-0 flex-[1_1_500px] overflow-x-auto rounded-[10px] border border-hp-line bg-hp-code">
          <div className="border-b border-hp-line px-5 py-3 font-plex-mono text-xs text-hp-muted">
            {c.fileLabel}
          </div>
          <pre className="m-0 p-6 font-plex-mono text-sm leading-[1.8] text-hp-code-fg">
            {diff.map((d, i) => (
              <span key={i} className={d.add ? "text-hp-green" : "text-hp-red"}>
                {d.line}
                {i < diff.length - 1 ? "\n" : null}
              </span>
            ))}
          </pre>
        </div>
      </div>
    </section>
  )
}

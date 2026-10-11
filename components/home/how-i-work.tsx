"use client"

import { useLanguage } from "@/components/language-provider"
import { shell } from "./rich"

export function HomeHowIWork() {
  const { t } = useLanguage()
  const h = t.home.howIWork
  const s = t.home.skills

  return (
    <section aria-labelledby="how-title" className={`${shell} pb-28 pt-16`}>
      <h2 id="how-title" className="m-0 mb-12 text-[40px] font-bold leading-[1.1] tracking-[-0.02em]">
        {h.title}
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] gap-12">
        {h.items.map((item) => (
          <div key={item.title}>
            <p className="m-0 mb-3 font-plex-mono text-[28px] font-semibold text-hp-cyan">{item.stat}</p>
            <h3 className="m-0 mb-2 text-xl font-semibold">{item.title}</h3>
            <p className="m-0 text-hp-soft">{item.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-28">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <h2 id="skills-title" className="m-0 text-[40px] font-bold leading-[1.1] tracking-[-0.02em]">
            {s.title}
          </h2>
          <p className="m-0 flex flex-wrap gap-5 text-sm text-hp-muted">
            <span className="inline-flex items-center gap-2">
              <span aria-hidden="true" className="h-2.5 w-2.5 rounded-[2px] bg-hp-cyan" />
              {s.production}
            </span>
            <span className="inline-flex items-center gap-2">
              <span aria-hidden="true" className="h-2.5 w-2.5 rounded-[2px] border border-[#4a535a]" />
              {s.builtWith}
            </span>
          </p>
        </div>
        <dl className="m-0 border-t border-hp-line">
          {s.groups.map((g) => (
            <div key={g.label} className="flex flex-wrap gap-x-8 gap-y-3 border-b border-hp-line py-5">
              <dt className="flex-[0_0_200px] pt-1.5 font-plex-mono text-[13px] text-hp-muted">{g.label}</dt>
              <dd className="m-0 flex flex-[1_1_560px] flex-wrap gap-2 font-plex-mono text-[13px]">
                {g.production.map((name) => (
                  <span key={name} className="rounded border border-[#23505c] bg-[#16323a] px-2.5 py-[5px] text-hp-fg">
                    <span className="sr-only">{s.production}: </span>
                    {name}
                  </span>
                ))}
                {g.builtWith.map((name) => (
                  <span key={name} className="rounded border border-hp-line-2 px-2.5 py-[5px] text-hp-muted">
                    {name}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

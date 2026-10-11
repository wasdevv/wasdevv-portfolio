"use client"

import { useLanguage } from "@/components/language-provider"
import { DashList, shell } from "./rich"

export function HomeExperience() {
  const { t } = useLanguage()
  const e = t.home.experience

  return (
    <section id="experience" aria-labelledby="exp-title" className={`${shell} pb-16 pt-28`}>
      <h2 id="exp-title" className="m-0 mb-12 text-[40px] font-bold leading-[1.1] tracking-[-0.02em]">
        {e.title}
      </h2>
      <ol className="m-0 list-none border-b border-hp-line p-0">
        {e.items.map((job) => (
          <li key={job.period} className="flex flex-wrap gap-x-12 gap-y-2 border-t border-hp-line py-8">
            <p className="m-0 flex-[0_0_220px] font-plex-mono text-sm text-hp-muted">{job.period}</p>
            <div className="min-w-0 flex-[1_1_520px]">
              <h3 className="m-0 mb-1 text-xl font-semibold">
                {job.role} <span className="font-normal text-hp-muted">· {job.company}</span>
              </h3>
              {job.summary ? (
                <p className="m-0 mb-4 max-w-[64ch] text-hp-soft">{job.summary}</p>
              ) : null}
              <DashList
                items={job.bullets}
                className={`max-w-[72ch] gap-3 text-hp-soft ${job.stack ? "mb-5" : ""} ${job.summary ? "" : "mt-3"}`}
              />
              {job.stack ? (
                <p className="m-0 font-plex-mono text-[13px] text-hp-muted">{job.stack}</p>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

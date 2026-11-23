"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"
import { useEnter } from "./case-parts"
import { shell } from "./rich"
import { timelineLabelClass, timelineTitleClass } from "./timeline"
import { WordReveal } from "./word-reveal"

// Education · Languages: closes the About. Two hairline lists in the
// Experience layout (label column on the left, entries on the right).
export function HomeEducation() {
  const { t, lang } = useLanguage()
  const enter = useEnter()

  return (
    <section id="education" aria-labelledby="edu-title" className={`${shell} pb-8 pt-28 font-geist`}>
      <h2 id="edu-title" className={`${timelineTitleClass} mb-12`}>
        <WordReveal text={t.education.title} />
      </h2>

      <motion.div {...enter} className="grid gap-x-12 gap-y-5 border-t border-hp-line py-10 lg:grid-cols-[30%_minmax(0,1fr)]">
        <p className={timelineLabelClass}>{lang === "pt" ? "Formação e cursos" : "Education and courses"}</p>
        <ul className="m-0 list-none p-0">
          {t.education.items.map((item) => (
            <li
              key={item.degree}
              className="grid gap-x-8 gap-y-1 border-b border-hp-line py-4 first:pt-0 last:border-b-0 last:pb-0 sm:grid-cols-[minmax(0,1fr)_auto]"
            >
              <div>
                <p className="m-0 font-semibold text-hp-fg">{item.degree}</p>
                <p className="m-0 mt-0.5 text-hp-soft">{item.school}</p>
              </div>
              {item.period ? (
                <p className="m-0 font-plex-mono text-[13px] text-hp-muted sm:pt-1 sm:text-right">{item.period}</p>
              ) : null}
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div {...enter} className="grid gap-x-12 gap-y-5 border-y border-hp-line py-10 lg:grid-cols-[30%_minmax(0,1fr)]">
        <p className={timelineLabelClass}>{t.spokenLanguages.title}</p>
        <ul className="m-0 flex list-none flex-wrap gap-x-12 gap-y-4 p-0">
          {t.spokenLanguages.items.map((l) => (
            <li key={l.language}>
              <p className="m-0 font-semibold text-hp-fg">{l.language}</p>
              <p className="m-0 mt-0.5 font-plex-mono text-[13px] text-hp-violet">{l.level}</p>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  )
}

"use client"

import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { shell } from "@/components/home/rich"
import { timelineTitleClass } from "@/components/home/timeline"
import { usePrefersReducedMotion } from "@/components/home/use-reduced-motion"
import { italicWordClass, toWords } from "@/components/home/word-reveal"
import { projects, type Project, type ProjectCategory, type ProjectKey } from "@/lib/portfolio-data"

// /projects: every project as a hairline list in the homepage's identity.
// Tork and the serverless API link to their detail pages; every project also
// links to its site or repo when there is one.

type Filter = "all" | ProjectCategory
const filters: Filter[] = ["all", "web", "backend", "tools"]
const detailPages: Partial<Record<ProjectKey, string>> = {
  obrahub: "/tork",
  ecommerceServerless: "/ecommerce-serverless",
}
const ease = [0.2, 0.7, 0.2, 1] as const

export default function ProjectsPage() {
  const { t } = useLanguage()
  const copy = t.projects
  const [filter, setFilter] = useState<Filter>("all")
  const list = filter === "all" ? projects : projects.filter((p) => p.category === filter)

  return (
    <main id="main" className={`${shell} w-full flex-1 pb-24 pt-20 font-geist`}>
      <p className="m-0 mb-4 font-jb text-[12px] uppercase tracking-[0.18em] text-hp-lilac-dim">{copy.page.label}</p>
      <h1 className={`${timelineTitleClass} text-[clamp(2.2rem,1.4rem+2.6vw,3.6rem)] font-medium text-hp-lilac`}>
        {toWords(copy.page.title).map((w, i) => (
          <span key={i}>
            {i > 0 && !w.glued ? " " : null}
            <span className={w.italic ? `${italicWordClass} font-normal` : undefined}>{w.text}</span>
          </span>
        ))}
      </h1>
      <p className="m-0 mt-4 max-w-[60ch] text-hp-lilac-soft">{copy.page.intro}</p>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-b border-hp-line pb-5">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={`min-h-9 cursor-pointer rounded-full border px-4 font-jb text-[12px] uppercase tracking-[0.12em] transition-colors ${
                filter === f
                  ? "border-hp-violet/60 bg-hp-violet/10 text-hp-lilac"
                  : "border-hp-line-2 text-hp-lilac-dim hover:border-hp-violet/40 hover:text-hp-lilac"
              }`}
            >
              {copy.filters[f]}
            </button>
          ))}
        </div>
        <p className="m-0 font-jb text-[12px] text-hp-lilac-dim" aria-live="polite">
          {copy.page.count.replace("{count}", String(list.length))}
        </p>
      </div>

      <ol className="m-0 list-none p-0">
        {list.map((project, i) => (
          <ProjectRow key={project.key} project={project} index={i} />
        ))}
      </ol>
    </main>
  )
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const { t } = useLanguage()
  const copy = t.projects
  const item = copy.items[project.key]
  const reduce = usePrefersReducedMotion()
  const study = detailPages[project.key]
  const external = project.site ?? project.repo

  // Reduced motion resolves after hydration: pin the final state rather than
  // dropping the props, or the initial opacity 0 would stick.
  const enter = reduce
    ? { initial: false as const, animate: { opacity: 1, y: 0 }, transition: { duration: 0 } }
    : {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.4 },
        transition: { duration: 0.45, ease, delay: Math.min(index, 3) * 0.04 },
      }

  const linkClass =
    "inline-flex items-center gap-1.5 font-jb text-[12px] uppercase tracking-[0.14em] text-hp-violet hover:text-hp-lilac"

  return (
    <motion.li
      {...enter}
      className="group grid gap-x-10 gap-y-3 border-b border-hp-line py-7 md:grid-cols-[minmax(0,15rem)_minmax(0,1fr)_auto]"
    >
      <div>
        <p className="m-0 font-plex-mono text-[12px] text-hp-lilac-dim">
          {project.year} · {item.type}
        </p>
        <h2 className="m-0 mt-1.5 flex items-center gap-2 text-xl font-semibold text-hp-lilac">
          {project.name}
        </h2>
      </div>

      <div className="min-w-0">
        <p className="m-0 max-w-[70ch] leading-[1.6] text-hp-lilac-soft">{item.summary}</p>
        <ul aria-label="Stack" className="m-0 mt-3 flex list-none flex-wrap gap-1.5 p-0">
          {project.tags.map((tag) => (
            <li key={tag} className="rounded border border-hp-line-2 px-2 py-[2px] font-plex-mono text-[12px] text-hp-lilac-dim">
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap items-start gap-x-5 gap-y-2 md:flex-col md:items-end md:pt-1">
        {study ? (
          <Link href={study} className={linkClass}>
            {copy.page.details}
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        ) : null}
        {external ? (
          <a href={external} target="_blank" rel="noreferrer" className={linkClass}>
            {project.site ? copy.page.site : copy.page.code}
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        ) : null}
        {!study && !external ? (
          <span className="font-jb text-[12px] uppercase tracking-[0.14em] text-hp-lilac-dim">{copy.page.private}</span>
        ) : null}
      </div>
    </motion.li>
  )
}

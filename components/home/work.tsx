"use client"

import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { projects } from "@/lib/portfolio-data"
import { shell } from "./rich"
import { ServerlessCard } from "./serverless-card"
import { SwarmCard } from "./swarm-card"
import { TorkCard } from "./tork-demo"

export function HomeWork() {
  const { t } = useLanguage()
  const w = t.home.work
  const count = String(projects.length)

  return (
    <section id="work" aria-labelledby="work-title" className={`${shell} pb-12 pt-28`}>
      <div className="mb-14 flex flex-wrap items-end justify-between gap-4">
        <h2 id="work-title" className="m-0 text-[40px] font-bold leading-[1.1] tracking-[-0.02em]">
          {w.title}
        </h2>
        <Link href="/projects" className="text-[15px] text-hp-muted hover:text-hp-lilac">
          {w.allProjects.replace("{count}", count)}
        </Link>
      </div>

      <TorkCard />

      <SwarmCard />

      <ServerlessCard />
    </section>
  )
}

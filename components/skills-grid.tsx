"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { skills, type SkillCategory, type Skill } from "@/lib/portfolio-data"
import { useLanguage } from "@/components/language-provider"

type Filter = "all" | SkillCategory

const order: SkillCategory[] = [
  "languages",
  "frameworks",
  "databases",
  "devops",
  "testing",
  "architecture",
]

export function SkillsGrid() {
  const [filter, setFilter] = useState<Filter>("all")
  const { t } = useLanguage()

  const filtered = useMemo(
    () => (filter === "all" ? skills : skills.filter((s) => s.category === filter)),
    [filter],
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-2">
        <FilterPill
          active={filter === "all"}
          onClick={() => setFilter("all")}
          label={`${t.skills.allLabel} (${skills.length})`}
        />
        {order.map((cat) => {
          const count = skills.filter((s) => s.category === cat).length
          return (
            <FilterPill
              key={cat}
              active={filter === cat}
              onClick={() => setFilter(cat)}
              label={`${t.skills.categories[cat]} (${count})`}
            />
          )
        })}
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  )
}

function FilterPill({
  active,
  onClick,
  label,
}: {
  active: boolean
  onClick: () => void
  label: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`border px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider transition-colors ${
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-card text-muted-foreground hover:border-primary hover:text-primary"
      }`}
    >
      {label}
    </button>
  )
}

function SkillCard({ skill }: { skill: Skill }) {
  const filled = { ADVANCED: 3, INTERMEDIATE: 2, FAMILIAR: 1 }[skill.level]

  return (
    <article className="group relative flex h-32 flex-col justify-between border border-border bg-card p-4 transition-colors hover:border-primary">
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-10 w-10 items-center justify-center border border-border bg-background">
          {skill.icon ? (
            <Image
              src={`https://cdn.simpleicons.org/${skill.icon}/${skill.iconColor ?? "FFFFFF"}`}
              alt=""
              width={20}
              height={20}
              unoptimized
              className="h-5 w-5"
            />
          ) : (
            <span className="font-mono text-xs text-primary">{`{}`}</span>
          )}
        </div>
        <div
          className="flex items-center gap-1"
          aria-label={`${filled} of 3`}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`h-1.5 w-1.5 rounded-full ${
                i < filled ? "bg-primary" : "bg-muted-foreground/25"
              }`}
            />
          ))}
        </div>
      </div>
      <h3 className="font-mono text-sm font-bold tracking-wider text-foreground">
        {skill.name.toUpperCase()}
      </h3>
    </article>
  )
}

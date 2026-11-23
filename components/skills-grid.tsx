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

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-3 xl:grid-cols-4">
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
      aria-pressed={active}
      className={`min-h-10 cursor-pointer rounded-full border px-4 text-sm transition-colors ${
        active
          ? "border-foreground bg-foreground font-medium text-hp-bg"
          : "border-hp-line-2 bg-hp-bg text-muted-foreground hover:border-hp-line-3 hover:text-foreground"
      }`}
    >
      {label}
    </button>
  )
}

// Proficiency as a three-step meter: one filled step per level. No invented
// percentages; the level in portfolio-data is the single source of truth.
const levelSteps: Record<Skill["level"], number> = {
  FAMILIAR: 1,
  INTERMEDIATE: 2,
  ADVANCED: 3,
}

function SkillCard({ skill }: { skill: Skill }) {
  const { t } = useLanguage()
  const steps = levelSteps[skill.level]
  const level = t.skills.levels[skill.level]

  return (
    <article className="flex flex-col gap-4 border border-border bg-card p-4">
      <div className="flex min-w-0 items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-border bg-background">
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
            <span className="font-mono text-xs text-muted-foreground">{`{}`}</span>
          )}
        </div>
        <div className="min-w-0">
          <h3 className="truncate text-sm font-semibold text-foreground sm:text-base">{skill.name}</h3>
          <p className="truncate text-xs text-muted-foreground">
            {t.skills.categories[skill.category]}
          </p>
        </div>
      </div>

      <div className="mt-auto flex items-center justify-between gap-3">
        <div className="flex gap-1" role="img" aria-label={level}>
          {[1, 2, 3].map((n) => (
            <span
              key={n}
              className={`h-1.5 w-6 sm:w-8 ${n <= steps ? "bg-hp-soft" : "bg-hp-line-2"}`}
            />
          ))}
        </div>
        <span className="text-xs text-muted-foreground">{level}</span>
      </div>
    </article>
  )
}

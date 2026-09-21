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

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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

// Proficiency shown as a bar. The percentage is derived from the skill's level
// (the single source of truth in portfolio-data) — tune these three numbers to
// move every bar of that level at once.
const levelPercent: Record<Skill["level"], number> = {
  ADVANCED: 90,
  INTERMEDIATE: 75,
  FAMILIAR: 55,
}

function SkillCard({ skill }: { skill: Skill }) {
  const { t } = useLanguage()
  const percent = levelPercent[skill.level]

  return (
    <article className="group relative overflow-hidden border border-border bg-card p-5 transition-colors hover:border-primary">
      <div
        className="pointer-events-none absolute -right-12 -top-12 h-24 w-24 rounded-full bg-primary/15 blur-2xl transition-all duration-400 group-hover:h-40 group-hover:w-40"
        aria-hidden="true"
      />

      <div className="relative mb-5 flex h-12 w-12 items-center justify-center border border-primary/20 bg-primary/10 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
        {skill.icon ? (
          <Image
            src={`https://cdn.simpleicons.org/${skill.icon}/${skill.iconColor ?? "FFFFFF"}`}
            alt=""
            width={22}
            height={22}
            unoptimized
            className="h-[22px] w-[22px]"
          />
        ) : (
          <span className="font-mono text-xs text-primary">{`{}`}</span>
        )}
      </div>

      <div className="relative mb-4 flex items-center justify-between gap-3">
        <div className="min-w-0">
          <h3 className="truncate font-mono text-sm font-bold tracking-wider text-foreground">
            {skill.name.toUpperCase()}
          </h3>
          <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
            {t.skills.categories[skill.category]}
          </span>
        </div>
        <strong className="font-mono text-sm font-bold text-primary">
          {percent}%
        </strong>
      </div>

      <div
        className="relative h-1.5 w-full overflow-hidden bg-muted"
        role="img"
        aria-label={`${percent}%`}
      >
        <span
          className="absolute left-0 top-0 h-full animate-[skill-fill_1.2s_ease-out] bg-primary shadow-[0_0_12px_var(--primary)]"
          style={{ width: `${percent}%` }}
        />
      </div>

      <div className="mt-3 flex items-center justify-between font-mono text-[10px]">
        <span className="text-muted-foreground">{t.skills.levelLabel}</span>
        <span className="font-semibold text-primary">
          {t.skills.levels[skill.level]}
        </span>
      </div>
    </article>
  )
}

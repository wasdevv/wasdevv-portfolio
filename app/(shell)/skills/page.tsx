"use client"

import { SkillsGrid } from "@/components/skills-grid"
import { skills } from "@/lib/portfolio-data"
import { useLanguage } from "@/components/language-provider"

export default function SkillsPage() {
  const { t } = useLanguage()

  return (
    <div className="space-y-8">
      <header className="flex flex-wrap items-start justify-between gap-4 border-b border-border pb-5">
        <div>
          <h2 className="font-mono text-2xl font-bold tracking-wider text-foreground sm:text-3xl">
            {t.skills.techTitle}
            <span className="text-primary">.</span>
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
            {t.skills.techSubtitle}
          </p>
        </div>
        <span className="border border-primary px-2 py-0.5 font-mono text-[10px] tracking-wider text-primary">
          {skills.length} {t.skills.countSuffix}
        </span>
      </header>

      <SkillsGrid />
    </div>
  )
}

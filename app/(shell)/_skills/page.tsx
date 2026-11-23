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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {t.skills.techTitle}
          </h2>
          <p className="mt-2 max-w-[56ch] text-base leading-relaxed text-muted-foreground">
            {t.skills.techSubtitle}
          </p>
        </div>
        <span className="font-mono text-sm text-muted-foreground">
          {skills.length} {t.skills.countSuffix}
        </span>
      </header>

      <SkillsGrid />
    </div>
  )
}

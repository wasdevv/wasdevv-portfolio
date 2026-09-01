"use client"

import { useLanguage } from "@/components/language-provider"
import { CardGrid } from "./card-grid"

export function ObrahubDecisions() {
  const { t } = useLanguage()
  const d = t.obrahub.decisions
  return (
    <CardGrid
      kicker={d.kicker}
      title={d.title}
      subtitle={d.subtitle}
      items={d.items}
      columns={2}
    />
  )
}

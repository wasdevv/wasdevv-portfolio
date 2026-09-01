"use client"

import { useLanguage } from "@/components/language-provider"
import { CardGrid } from "./card-grid"

export function ObrahubRules() {
  const { t } = useLanguage()
  const r = t.obrahub.rules
  return (
    <CardGrid kicker={r.kicker} title={r.title} subtitle={r.subtitle} items={r.items} />
  )
}

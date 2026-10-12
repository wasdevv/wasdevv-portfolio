"use client"

import { useLanguage } from "@/components/language-provider"
import { CardGrid } from "@/components/obrahub/card-grid"

export function SwarmAutomations() {
  const { t } = useLanguage()
  const a = t.swarm.automations

  return <CardGrid kicker={a.kicker} title={a.title} subtitle={a.subtitle} items={a.items} />
}

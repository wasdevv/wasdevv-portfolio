import type { Metadata } from "next"
import { ArchitectureDiagram } from "@/components/swarm/architecture-diagram"
import { SwarmAutomations } from "@/components/swarm/automations"
import { CompareGrid } from "@/components/swarm/compare-grid"
import { FeaturesBento } from "@/components/swarm/features-bento"
import { FinalCta } from "@/components/swarm/final-cta"
import { SwarmHero } from "@/components/swarm/hero"
import { PtySimulator } from "@/components/swarm/pty-simulator"
import { RoadmapTimeline } from "@/components/swarm/roadmap-timeline"
import { StackMarquee } from "@/components/swarm/stack-marquee"
import { StoryCard } from "@/components/swarm/story-card"

export const metadata: Metadata = {
  title: "Swarm",
  description:
    "A desktop IDE for coding agents: run 1–4 Claude Code or Codex agents in parallel Git worktrees, review the diff and merge in one window.",
}

export default function SwarmPage() {
  return (
    <>
      <SwarmHero />
      <PtySimulator />
      <CompareGrid />
      <FeaturesBento />
      <SwarmAutomations />
      <ArchitectureDiagram />
      <StackMarquee />
      <RoadmapTimeline />
      <StoryCard />
      <FinalCta />
    </>
  )
}

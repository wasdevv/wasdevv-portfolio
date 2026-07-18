import { ArchitectureDiagram } from "@/components/swarm/architecture-diagram"
import { CompareGrid } from "@/components/swarm/compare-grid"
import { FeaturesBento } from "@/components/swarm/features-bento"
import { FinalCta } from "@/components/swarm/final-cta"
import { SwarmHero } from "@/components/swarm/hero"
import { PtySimulator } from "@/components/swarm/pty-simulator"
import { RoadmapTimeline } from "@/components/swarm/roadmap-timeline"
import { StackMarquee } from "@/components/swarm/stack-marquee"
import { StoryCard } from "@/components/swarm/story-card"

export default function SwarmPage() {
  return (
    <>
      <SwarmHero />
      <PtySimulator />
      <CompareGrid />
      <FeaturesBento />
      <ArchitectureDiagram />
      <StackMarquee />
      <RoadmapTimeline />
      <StoryCard />
      <FinalCta />
    </>
  )
}

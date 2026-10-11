import { DiagramCards } from "@/components/ecommerce/diagram-cards"
import { EcommerceHero } from "@/components/ecommerce/hero"
import { EcommerceOverview } from "@/components/ecommerce/overview"
import { EcommerceProblems } from "@/components/ecommerce/problems"
import { EcommerceQuality } from "@/components/ecommerce/quality"
import { EcommerceStatus } from "@/components/ecommerce/status"

export default function EcommercePage() {
  return (
    <>
      <EcommerceHero />
      <EcommerceOverview />
      <DiagramCards section="architecture" />
      <EcommerceProblems />
      <DiagramCards section="ml" />
      <DiagramCards section="infra" />
      <DiagramCards section="cicd" />
      <DiagramCards section="observability" />
      <EcommerceQuality />
      <EcommerceStatus />
    </>
  )
}

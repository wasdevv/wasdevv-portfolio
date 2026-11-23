import type { Metadata } from "next"
import { ObrahubArchitecture } from "@/components/obrahub/architecture"
import { ObrahubDecisions } from "@/components/obrahub/decisions"
import { ObrahubDomain } from "@/components/obrahub/domain"
import { ObrahubHero } from "@/components/obrahub/hero"
import { ObrahubNumbers } from "@/components/obrahub/numbers"
import { ObrahubProblem } from "@/components/obrahub/problem"
import { ObrahubRules } from "@/components/obrahub/rules"
import { ObrahubStatus } from "@/components/obrahub/status"

export const metadata: Metadata = {
  title: "ObraHub",
  description:
    "Labor tracking and billing for industrial field work: a Rails 8 system in production that replaced paper, spreadsheets and retyping.",
}

export default function ObrahubPage() {
  return (
    <>
      <ObrahubHero />
      <ObrahubProblem />
      <ObrahubRules />
      <ObrahubDomain />
      <ObrahubArchitecture />
      <ObrahubDecisions />
      <ObrahubNumbers />
      <ObrahubStatus />
    </>
  )
}

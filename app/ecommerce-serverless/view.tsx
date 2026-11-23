"use client"

import { CasePage, type Case } from "@/components/case/case-page"
import { useLanguage } from "@/components/language-provider"
import { projects } from "@/lib/portfolio-data"
import { serverlessContent } from "@/lib/serverless-content"

const repo = projects.find((p) => p.key === "ecommerceServerless")?.repo
const toItems = (items: { title: string; description: string; proof?: string }[]) =>
  items.map((i) => ({ title: i.title, text: i.description, proof: i.proof }))

// /ecommerce-serverless in the site's current identity; the body copy is
// t.ecommerce, the new labels are lib/serverless-content.ts.
export function EcommerceView() {
  const { t, lang } = useLanguage()
  const e = t.ecommerce
  const c = serverlessContent[lang === "pt" ? "pt" : "en"]

  const data: Case = {
    label: c.label,
    title: t.home.work.projects.serverless.title,
    tagline: c.tagline,
    lead: e.hero.subtitle,
    meta: c.meta,
    stack: e.hero.badges,
    links: repo ? [{ label: c.repo, href: repo }] : undefined,
    sections: [
      {
        id: "overview",
        label: c.sections.overview,
        title: e.overview.title,
        intro: e.overview.subtitle,
        blocks: [
          { kind: "lists", groups: [{ title: e.overview.flowsTitle, items: e.overview.flows }] },
          { kind: "note", title: e.overview.localTitle, text: e.overview.localBody },
        ],
      },
      {
        id: "architecture",
        label: c.sections.architecture,
        title: e.architecture.title,
        intro: e.architecture.subtitle,
        blocks: [
          { kind: "code", text: e.architecture.diagram },
          { kind: "items", items: toItems(e.architecture.items) },
        ],
      },
      {
        id: "guarantees",
        label: c.sections.guarantees,
        title: e.problems.title,
        intro: e.problems.subtitle,
        blocks: [{ kind: "items", items: toItems(e.problems.items), proofLabel: e.problems.proofLabel }],
      },
      {
        id: "ml",
        label: c.sections.ml,
        title: e.ml.title,
        intro: e.ml.subtitle,
        blocks: [
          { kind: "code", text: e.ml.diagram },
          { kind: "items", items: toItems(e.ml.items) },
        ],
      },
      {
        id: "infra",
        label: c.sections.infra,
        title: e.infra.title,
        intro: e.infra.subtitle,
        blocks: [{ kind: "items", items: toItems(e.infra.items) }],
      },
      {
        id: "cicd",
        label: c.sections.cicd,
        title: e.cicd.title,
        intro: e.cicd.subtitle,
        blocks: [
          { kind: "code", text: e.cicd.diagram },
          { kind: "items", items: toItems(e.cicd.items) },
        ],
      },
      {
        id: "observability",
        label: c.sections.observability,
        title: e.observability.title,
        intro: e.observability.subtitle,
        blocks: [{ kind: "items", items: toItems(e.observability.items) }],
      },
      {
        id: "quality",
        label: c.sections.quality,
        title: e.quality.title,
        intro: e.quality.subtitle,
        blocks: [
          { kind: "stats", items: e.quality.stats },
          {
            kind: "table",
            head: [e.quality.layerLabel, e.quality.coverageLabel],
            rows: e.quality.rows.map((r) => [r.layer, r.coverage]),
          },
        ],
      },
      {
        id: "status",
        label: c.sections.status,
        title: e.status.title,
        intro: e.status.subtitle,
        blocks: [
          {
            kind: "lists",
            groups: [
              { title: e.status.doneTitle, items: e.status.done },
              { title: e.status.pendingTitle, items: e.status.pending },
            ],
          },
          { kind: "note", title: e.status.costTitle, text: e.status.cost },
          { kind: "lists", groups: [{ title: e.status.learnedTitle, items: e.status.learned }] },
        ],
      },
    ],
  }

  return <CasePage data={data} />
}

"use client"

import { CasePage, type Case } from "@/components/case/case-page"
import { useLanguage } from "@/components/language-provider"
import { projects } from "@/lib/portfolio-data"
import { torkContent } from "@/lib/tork-content"

const STACK = [
  "Ruby on Rails 8.1",
  "Ruby 4",
  "PostgreSQL",
  "Hotwire",
  "Tailwind CSS 4",
  "Claude API",
  "Asaas",
  "AWS S3",
  "Terraform",
  "RSpec",
  "Docker",
  "Railway",
]
const site = projects.find((p) => p.key === "obrahub")?.site

// /tork: the story behind Tork and what changed for the client. Tork's repo is
// private, so the page shows before → after, not how the code is built.
export default function TorkPage() {
  const { t, lang } = useLanguage()
  const o = t.obrahub
  const c = torkContent[lang === "pt" ? "pt" : "en"]

  const data: Case = {
    label: c.label,
    title: "Tork",
    tagline: c.tagline,
    lead: c.lead,
    meta: c.meta,
    stack: STACK,
    links: site ? [{ label: c.live, href: site }] : undefined,
    media: (
      <div className="overflow-hidden rounded-[10px] border border-hp-line bg-hp-bg">
        <video
          className="block aspect-video w-full"
          controls
          playsInline
          preload="metadata"
          poster="/videos/tork-demo-poster.webp"
          aria-label={t.home.work.projects.obrahub.videoLabel}
        >
          <source src="/videos/tork-demo.webm" type="video/webm" />
          <source src="/videos/tork-demo.mp4" type="video/mp4" />
        </video>
      </div>
    ),
    sections: [
      {
        id: "story",
        label: c.sections.story,
        title: o.problem.title,
        intro: o.problem.subtitle,
        blocks: [
          { kind: "steps", label: o.problem.beforeLabel, items: o.problem.beforeSteps },
          { kind: "note", title: c.builtTitle, text: c.builtText },
        ],
      },
      {
        id: "change",
        label: c.sections.change,
        title: c.change.title,
        intro: c.change.intro,
        blocks: [{ kind: "compare", head: c.change.head, rows: c.change.rows }],
      },
      {
        id: "quality",
        label: c.sections.quality,
        title: c.quality.title,
        intro: c.quality.intro,
        blocks: [{ kind: "stats", items: c.quality.stats }],
      },
      {
        id: "status",
        label: c.sections.status,
        title: c.status.title,
        blocks: [
          {
            kind: "lists",
            groups: [
              { title: c.status.liveTitle, items: c.status.live },
              { title: c.status.buildingTitle, items: c.status.building },
            ],
          },
          { kind: "note", title: c.status.direction.title, text: c.status.direction.text },
        ],
      },
    ],
  }

  return <CasePage data={data} />
}

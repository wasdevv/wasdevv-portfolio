"use client"

import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { CountUp } from "@/components/home/count-up"
import { shell } from "@/components/home/rich"
import { Dash } from "@/components/home/timeline"
import { usePrefersReducedMotion } from "@/components/home/use-reduced-motion"
import { WordReveal, italicWordClass, toWords } from "@/components/home/word-reveal"

// Project detail pages (/tork, /ecommerce-serverless) in the homepage's
// identity: Geist, mono labels, hairlines, violet as the only accent, italic
// serif emphasis. Each page is data (a Case) rendered by this one component:
// a hero, then sections laid out like the Experience rows (title on the left,
// sticky on desktop; content on the right).

export type CaseItem = { title: string; text: string; proof?: string }

export type CaseBlock =
  | { kind: "steps"; label?: string; items: string[] }
  | { kind: "items"; items: CaseItem[]; proofLabel?: string }
  | { kind: "code"; label?: string; text: string }
  | { kind: "stats"; items: { value: string; label: string }[] }
  | { kind: "table"; label?: string; head: string[]; rows: string[][] }
  | { kind: "note"; title: string; text: string }
  | { kind: "lists"; groups: { title: string; items: string[] }[] }
  | { kind: "chips"; label?: string; items: string[] }
  | { kind: "text"; text: string }
  | { kind: "compare"; head: [string, string, string]; rows: { topic: string; before: string; after: string }[] }

export type CaseSection = {
  id: string
  label: string
  /** "*text*" is set in the violet italic serif. */
  title: string
  intro?: string
  blocks: CaseBlock[]
}

export type Case = {
  label: string
  title: string
  /** "*text*" is set in the violet italic serif. */
  tagline: string
  lead: string
  meta: string[]
  stack: string[]
  links?: { label: string; href: string }[]
  /** Rendered between the hero and the first section (e.g. the demo video). */
  media?: ReactNode
  sections: CaseSection[]
}

const ease = [0.2, 0.7, 0.2, 1] as const
const labelClass = "m-0 font-jb text-[12px] uppercase tracking-[0.18em] text-hp-lilac-dim"

function useEnter(delay = 0) {
  const reduce = usePrefersReducedMotion()
  return reduce
    ? { initial: false as const, animate: { opacity: 1, y: 0 }, transition: { duration: 0 } }
    : {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.25 },
        transition: { duration: 0.5, ease, delay },
      }
}

function Emphasis({ text }: { text: string }) {
  return (
    <>
      {toWords(text).map((w, i) => (
        <span key={i}>
          {i > 0 && !w.glued ? " " : null}
          <span className={w.italic ? `${italicWordClass} font-normal` : undefined}>{w.text}</span>
        </span>
      ))}
    </>
  )
}

export function CasePage({ data }: { data: Case }) {
  return (
    <main id="main" className="w-full flex-1 font-geist">
      <CaseHero data={data} />
      {data.media ? <div className={`${shell} pb-8`}>{data.media}</div> : null}
      <div className={`${shell} pb-24`}>
        {data.sections.map((section) => (
          <Section key={section.id} section={section} />
        ))}
      </div>
    </main>
  )
}

function CaseHero({ data }: { data: Case }) {
  const enter = useEnter(0.1)
  return (
    <header className={`${shell} pb-16 pt-20 md:pt-28`}>
      <p className={`${labelClass} mb-6`}>{data.label}</p>
      <h1 className="m-0 text-[clamp(2.6rem,1.4rem+4vw,5rem)] font-medium leading-[0.98] tracking-[-0.03em] text-hp-lilac">
        {data.title}
      </h1>
      <WordReveal
        as="p"
        text={data.tagline}
        className="m-0 mt-4 max-w-[30ch] text-[clamp(1.4rem,1rem+1.6vw,2.2rem)] leading-[1.2] tracking-[-0.02em] text-hp-lilac-soft"
      />
      <motion.div {...enter}>
        <p className="m-0 mt-8 max-w-[68ch] text-[17px] leading-[1.7] text-hp-lilac-soft">{data.lead}</p>
        <p className="m-0 mt-8 flex flex-wrap gap-x-2 font-jb text-[12px] uppercase tracking-[0.14em] text-hp-lilac-soft">
          {data.meta.map((m, i, all) => (
            <span key={m} className="whitespace-nowrap">
              {m}
              {i < all.length - 1 ? <span className="text-hp-violet"> ·</span> : null}
            </span>
          ))}
        </p>
        <ul aria-label="Stack" className="m-0 mt-6 flex list-none flex-wrap gap-2 p-0">
          {data.stack.map((tech) => (
            <li key={tech} className="rounded-full border border-hp-line-2 px-3 py-1 font-plex-mono text-[13px] text-hp-lilac-soft">
              {tech}
            </li>
          ))}
        </ul>
        {data.links?.length ? (
          <p className="m-0 mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {data.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-jb text-[12px] uppercase tracking-[0.14em] text-hp-violet hover:text-hp-lilac"
              >
                {l.label}
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            ))}
          </p>
        ) : null}
      </motion.div>
    </header>
  )
}

function Section({ section }: { section: CaseSection }) {
  const enter = useEnter()
  return (
    <section
      id={section.id}
      aria-labelledby={`${section.id}-title`}
      className="grid gap-x-12 gap-y-6 border-t border-hp-line py-14 lg:grid-cols-[minmax(0,30%)_minmax(0,1fr)]"
    >
      <div className="lg:sticky lg:top-[96px] lg:self-start">
        <p className={labelClass}>{section.label}</p>
        <h2
          id={`${section.id}-title`}
          className="m-0 mt-3 text-[clamp(1.6rem,1.2rem+1.2vw,2.3rem)] font-medium leading-[1.15] tracking-[-0.02em] text-hp-lilac"
        >
          <Emphasis text={section.title} />
        </h2>
      </div>
      <motion.div {...enter} className="min-w-0">
        {section.intro ? (
          <p className="m-0 mb-8 max-w-[68ch] text-[17px] leading-[1.7] text-hp-lilac-soft">{section.intro}</p>
        ) : null}
        <div className="flex flex-col gap-10">
          {section.blocks.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

function Block({ block }: { block: CaseBlock }) {
  switch (block.kind) {
    case "text":
      return <p className="m-0 max-w-[68ch] leading-[1.7] text-hp-lilac-soft">{block.text}</p>

    case "steps":
      return (
        <div>
          {block.label ? <p className={`${labelClass} mb-4`}>{block.label}</p> : null}
          <ol className="m-0 list-none p-0">
            {block.items.map((step, i) => (
              <li key={step} className="flex gap-4 border-t border-hp-line py-3.5 last:border-b">
                <span className="w-6 shrink-0 font-plex-mono text-[13px] text-hp-violet">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-hp-lilac-soft">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      )

    case "items":
      return (
        <ul className="m-0 grid list-none gap-x-10 gap-y-8 p-0 md:grid-cols-2">
          {block.items.map((item) => (
            <li key={item.title} className="group border-t border-hp-line pt-5">
              <p className="m-0 flex gap-3 font-medium text-hp-lilac">
                <Dash />
                <span>{item.title}</span>
              </p>
              <p className="m-0 mt-2 pl-6 text-[15px] leading-[1.65] text-hp-lilac-soft">{item.text}</p>
              {item.proof ? (
                <p className="m-0 mt-3 pl-6 font-plex-mono text-[13px] leading-snug text-hp-lilac">
                  <span className="text-hp-violet">✓ </span>
                  {block.proofLabel ? <span className="text-hp-lilac-dim">{block.proofLabel}: </span> : null}
                  {item.proof}
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      )

    case "code":
      return (
        <div className="overflow-hidden rounded-[10px] border border-hp-line">
          {block.label ? (
            <p className="m-0 border-b border-hp-line px-5 py-3 font-plex-mono text-xs text-hp-lilac-dim">{block.label}</p>
          ) : null}
          <div className="overflow-x-auto">
            <pre className="m-0 w-max px-5 py-5 font-plex-mono text-[13px] leading-[1.85] text-hp-lilac-soft">{block.text}</pre>
          </div>
        </div>
      )

    case "stats":
      return (
        <dl className="m-0 grid grid-cols-2 border-y border-hp-line lg:grid-cols-4">
          {block.items.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col-reverse justify-end gap-1.5 py-5 ${i % 2 === 1 ? "border-l border-hp-line pl-5" : "pr-5"} ${
                i >= 2 ? "border-t border-hp-line lg:border-t-0" : ""
              } ${i === 2 ? "lg:border-l lg:pl-5" : ""}`}
            >
              <dt className="text-[13px] leading-snug text-hp-lilac-dim">{s.label}</dt>
              <dd className="m-0 text-[clamp(1.6rem,1.2rem+1.2vw,2.25rem)] font-medium leading-none tracking-[-0.03em] text-hp-violet">
                <CountUp text={s.value} />
              </dd>
            </div>
          ))}
        </dl>
      )

    case "table":
      return (
        <div>
          {block.label ? <p className={`${labelClass} mb-4`}>{block.label}</p> : null}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-[15px]">
              <thead>
                <tr>
                  {block.head.map((h) => (
                    <th key={h} className="border-b border-hp-line-2 py-2.5 pr-6 font-jb text-[11px] font-normal uppercase tracking-[0.14em] text-hp-lilac-dim">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row) => (
                  <tr key={row.join("|")}>
                    {row.map((cell, i) => (
                      <td
                        key={i}
                        className={`border-b border-hp-line py-3 pr-6 align-top ${
                          i === 0 ? "font-plex-mono text-hp-violet" : "text-hp-lilac-soft"
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )

    case "note":
      return (
        <div className="border-l border-hp-violet/60 pl-5">
          <p className={`m-0 ${italicWordClass} text-[1.4rem] leading-snug`}>{block.title}</p>
          <p className="m-0 mt-2 max-w-[64ch] leading-[1.7] text-hp-lilac-soft">{block.text}</p>
        </div>
      )

    case "lists":
      return (
        <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
          {block.groups.map((g) => (
            <div key={g.title}>
              <p className={`${labelClass} mb-3`}>{g.title}</p>
              <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
                {g.items.map((item) => (
                  <li key={item} className="group flex gap-3 leading-[1.6] text-hp-lilac-soft">
                    <Dash />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )

    case "compare":
      return (
        <div>
          <div className="hidden grid-cols-[minmax(0,11rem)_minmax(0,1fr)_minmax(0,1fr)] gap-x-8 border-b border-hp-line-2 pb-2.5 md:grid">
            {block.head.map((h) => (
              <p key={h} className="m-0 font-jb text-[11px] uppercase tracking-[0.14em] text-hp-lilac-dim">
                {h}
              </p>
            ))}
          </div>
          <ul className="m-0 list-none p-0">
            {block.rows.map((row) => (
              <li
                key={row.topic}
                className="grid gap-x-8 gap-y-2 border-b border-hp-line py-5 md:grid-cols-[minmax(0,11rem)_minmax(0,1fr)_minmax(0,1fr)]"
              >
                <p className="m-0 font-medium text-hp-lilac">{row.topic}</p>
                <p className="m-0 text-[15px] leading-[1.6] text-hp-lilac-dim">
                  <span className="mr-2 font-jb text-[11px] uppercase tracking-[0.14em] md:hidden">{block.head[1]}</span>
                  {row.before}
                </p>
                <p className="m-0 flex gap-2 text-[15px] leading-[1.6] text-hp-lilac">
                  <span aria-hidden="true" className="text-hp-violet">→</span>
                  <span>
                    <span className="mr-2 font-jb text-[11px] uppercase tracking-[0.14em] text-hp-violet md:hidden">{block.head[2]}</span>
                    {row.after}
                  </span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      )

    case "chips":
      return (
        <div>
          {block.label ? <p className={`${labelClass} mb-3`}>{block.label}</p> : null}
          <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
            {block.items.map((c) => (
              <li key={c} className="rounded-full border border-hp-line-2 px-3 py-1 font-plex-mono text-[13px] text-hp-lilac-soft">
                {c}
              </li>
            ))}
          </ul>
        </div>
      )
  }
}

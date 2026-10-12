"use client"

import Image from "next/image"
import Link from "next/link"
import type { ReactNode } from "react"
import { useLanguage } from "@/components/language-provider"
import { projects } from "@/lib/portfolio-data"
import { DashList, Rich, shell } from "./rich"

const featured = 3
const leanOutput = projects.find((p) => p.key === "leanOutput")?.repo ?? "/resume"

type Copy = { kicker: string; title: string; body: string; bullets: string[]; cta: string }

function ProjectText({ copy, stack, href }: { copy: Copy; stack: string; href: string }) {
  return (
    <div className="min-w-0 flex-[1_1_380px]">
      <p className="m-0 mb-3.5 font-plex-mono text-[13px] text-hp-cyan">{copy.kicker}</p>
      <h3 className="m-0 mb-3.5 text-[30px] font-bold tracking-[-0.01em]">{copy.title}</h3>
      <p className="m-0 mb-5 max-w-[48ch] text-hp-soft">{copy.body}</p>
      <DashList items={copy.bullets} className="mb-6 gap-2.5" />
      <p className="m-0 mb-6 font-plex-mono text-[13px] text-hp-muted">{stack}</p>
      <Link href={href} className="font-semibold text-hp-cyan hover:underline hover:underline-offset-4">
        {copy.cta}
      </Link>
    </div>
  )
}

function Window({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <div className="min-w-0 flex-[1_1_520px] overflow-hidden rounded-[10px] border border-hp-line bg-hp-code">
      {title ? (
        <div className="flex items-center gap-2 border-b border-hp-line px-4 py-3 font-plex-mono text-xs text-hp-muted">
          {[0, 1, 2].map((i) => (
            <span key={i} aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-hp-line-2" />
          ))}
          <span className="ml-2">{title}</span>
        </div>
      ) : null}
      {children}
    </div>
  )
}

const article = "flex items-center gap-12 border-t border-hp-line py-12"

export function HomeWork() {
  const { t } = useLanguage()
  const w = t.home.work
  const p = w.projects
  const count = String(projects.length)
  const rest = String(projects.length - featured)

  return (
    <section id="work" aria-labelledby="work-title" className={`${shell} pb-12 pt-28`}>
      <div className="mb-14 flex flex-wrap items-end justify-between gap-4">
        <h2 id="work-title" className="m-0 text-[40px] font-bold leading-[1.1] tracking-[-0.02em]">
          {w.title}
        </h2>
        <Link href="/resume" className="text-[15px] text-hp-muted hover:text-white">
          {w.allProjects.replace("{count}", count)}
        </Link>
      </div>

      <article className={`${article} flex-wrap`}>
        <ProjectText copy={p.obrahub} stack="Rails 8 · Hotwire · PostgreSQL · Pundit" href="/obrahub" />
        <Window title="obrahub.up.railway.app · Dashboard">
          <Image
            src="/projects/obrahub-dashboard.png"
            alt={p.obrahub.screenshotAlt}
            width={890}
            height={595}
            className="block h-auto w-full"
          />
          <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-hp-line px-5 py-3.5 font-plex-mono text-[13px] text-hp-muted">
            {p.obrahub.checks.map((check, i) => (
              <span key={check}>
                {i === 0 ? <span className="text-hp-green">✓ </span> : null}
                {check}
              </span>
            ))}
          </div>
        </Window>
      </article>

      <article className={`${article} flex-wrap-reverse`}>
        <Window title="swarm">
          <Image
            src="/projects/swarm-agent-diff.webp"
            alt={p.swarm.screenshotAlt}
            width={1484}
            height={876}
            className="block h-auto w-full"
          />
        </Window>
        <ProjectText copy={p.swarm} stack="Rails 8 · ActionCable · SQLite · Tauri 2" href="/swarm" />
      </article>

      <article className={`${article} flex-wrap`}>
        <ProjectText
          copy={p.serverless}
          stack="Node · Lambda · SQS · Terraform · SageMaker"
          href="/ecommerce-serverless"
        />
        <Window>
          <div className="overflow-x-auto">
            <pre className="m-0 w-max p-7 font-plex-mono text-sm leading-[1.9] text-hp-code-fg">
              {"client ──▶ API Gateway ──▶ "}
              <span className="text-hp-cyan">λ api</span>
              {" ──▶ RDS Proxy ──▶ PostgreSQL\n                                  │\n                                  └──▶ outbox "}
              <span className="text-hp-muted">(same transaction)</span>
              {"\n\nEventBridge ──▶ "}
              <span className="text-hp-cyan">λ dispatcher</span>
              {" ──▶ SQS ──▶ "}
              <span className="text-hp-cyan">λ worker</span>
              {"\n                                     └──▶ DLQ\n\n"}
              <span className="text-hp-cyan">λ ops</span>
              {"   "}
              <span className="text-hp-muted">no HTTP route: migrations, admin tasks</span>
            </pre>
          </div>
        </Window>
      </article>

      <div className="mt-2 grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] border-t border-hp-line">
        <MoreCard href={leanOutput} external kicker={w.more.trilogyKicker} title={w.more.trilogyTitle}>
          <Rich text={w.more.trilogyBody} />
        </MoreCard>
        <MoreCard href="/resume" kicker={w.more.shelflogKicker} title="shelflog">
          {w.more.shelflogBody}
        </MoreCard>
        <MoreCard href="/resume" kicker={w.more.restKicker.replace("{count}", rest)} title={w.more.restTitle} last>
          <span className="text-hp-cyan">{w.more.restCta}</span>
        </MoreCard>
      </div>
    </section>
  )
}

function MoreCard({
  href,
  external = false,
  last = false,
  kicker,
  title,
  children,
}: {
  href: string
  external?: boolean
  last?: boolean
  kicker: string
  title: string
  children: ReactNode
}) {
  const className = `group block border-b border-hp-line py-8 ${last ? "" : "pr-8"}`
  const body = (
    <>
      <span className="mb-2.5 block font-plex-mono text-[13px] text-hp-muted">{kicker}</span>
      <span className="mb-2 block text-xl font-semibold text-hp-fg group-hover:text-white">{title}</span>
      <span className="block text-base text-hp-soft">{children}</span>
    </>
  )
  return external ? (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {body}
    </a>
  ) : (
    <Link href={href} className={className}>
      {body}
    </Link>
  )
}

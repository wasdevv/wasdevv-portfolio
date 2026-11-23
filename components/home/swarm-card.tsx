"use client"

import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { CaseFrame, CaseText, FrameLabel } from "./case-parts"

const STACK =
  "Ruby 4.0.5 · Rails 8.1.4 · SQLite · Hotwire · ActionCable · Claude Code · OpenAI Codex · Tauri 2 · Rust · AWS · Terraform"

/** The "Software I've shipped" Swarm card: product frame with the lifecycle on the left, the story on the right. */
export function SwarmCard() {
  const { t } = useLanguage()
  const copy = t.home.work.projects.swarm

  return (
    <article className="grid items-start gap-x-12 gap-y-8 border-t border-hp-line py-12 font-geist lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
      <CaseFrame label="swarm · desktop" className="lg:sticky lg:top-[120px]">
        <Image
          src="/projects/swarm.webp"
          alt={copy.screenshotAlt}
          width={1200}
          height={800}
          className="block h-auto w-full"
        />
        <div className="border-t border-hp-line px-5 pb-5 pt-4">
          <FrameLabel>{copy.lifecycleTitle}</FrameLabel>
          <ol className="m-0 grid list-none grid-cols-1 gap-x-5 gap-y-4 p-0 sm:grid-cols-2 xl:grid-cols-5">
            {copy.lifecycle.map((step, i) => (
              <li key={step.title} className="min-w-0 border-t border-hp-line pt-3">
                <span className="font-plex-mono text-[12px] text-hp-violet">{String(i + 1).padStart(2, "0")}</span>
                <span className="mt-1 block text-[15px] font-medium leading-snug text-hp-lilac">{step.title}</span>
                <span className="mt-1 block text-[13px] leading-snug text-hp-lilac-dim">{step.text}</span>
              </li>
            ))}
          </ol>
        </div>
      </CaseFrame>

      {/* No detail page for Swarm any more (Nov 2026), so no link. */}
      <CaseText copy={copy} stack={STACK} />
    </article>
  )
}

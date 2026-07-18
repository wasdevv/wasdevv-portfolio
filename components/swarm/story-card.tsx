"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { SectionFrame } from "./section-frame"

export function StoryCard() {
  const { t } = useLanguage()
  const s = t.swarm.story

  return (
    <SectionFrame kicker={s.kicker} title={s.title}>
      <motion.article
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden border border-border bg-card/40 p-6 md:p-10"
      >
        <Quote
          aria-hidden
          className="absolute -right-4 -top-4 h-32 w-32 text-primary/5 md:h-40 md:w-40"
        />
        <div className="relative space-y-5 text-base leading-relaxed text-foreground/90 md:text-lg">
          {s.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
        <div className="relative mt-8 flex items-center gap-2 border-t border-border/50 pt-4 font-mono text-xs text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
          <a
            href="https://www.onorca.dev/"
            target="_blank"
            rel="noreferrer"
            className="underline decoration-dotted underline-offset-4 hover:text-foreground"
          >
            {s.inspiredByLabel}
          </a>
        </div>
      </motion.article>
    </SectionFrame>
  )
}

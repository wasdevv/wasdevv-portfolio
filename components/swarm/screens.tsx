"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"
import { SectionFrame } from "@/components/section-frame"


export function SwarmScreens() {
  const { t } = useLanguage()
  const s = t.swarm.screens

  return (
    <SectionFrame kicker={s.kicker} title={s.title}>
      <motion.figure
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="m-0 overflow-hidden border border-border bg-card/40"
      >
        <Image
          src="/projects/swarm-agent-diff.webp"
          alt={s.review.alt}
          width={1484}
          height={876}
          sizes="(min-width: 1480px) 1432px, 100vw"
          className="block h-auto w-full"
        />
        <figcaption className="border-t border-border/50 px-4 py-3 font-mono text-xs leading-relaxed text-muted-foreground">
          {s.review.caption}
        </figcaption>
      </motion.figure>
    </SectionFrame>
  )
}

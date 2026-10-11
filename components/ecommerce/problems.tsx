"use client"

import { motion } from "framer-motion"
import { FlaskConical } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { SectionFrame } from "@/components/section-frame"

// Like the shared numbered Card, plus the test that proves the guarantee.
export function EcommerceProblems() {
  const { t } = useLanguage()
  const p = t.ecommerce.problems

  return (
    <SectionFrame kicker={p.kicker} title={p.title} subtitle={p.subtitle}>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {p.items.map((item, i) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: (i % 3) * 0.05 }}
            className="group relative flex flex-col overflow-hidden border border-border bg-card/40 p-5 transition-colors hover:border-primary/50 hover:bg-card md:p-6"
          >
            <span
              aria-hidden
              className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/40"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 font-mono text-sm font-semibold tracking-tight md:text-base">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
            {item.proof ? (
              <div className="mt-auto pt-5">
                <p className="flex gap-2 border-t border-border/60 pt-4 font-mono text-xs leading-relaxed text-chart-3">
                  <FlaskConical className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
                  <span>
                    <span className="uppercase tracking-widest">{p.proofLabel}:</span>{" "}
                    {item.proof}
                  </span>
                </p>
              </div>
            ) : null}
          </motion.article>
        ))}
      </div>
    </SectionFrame>
  )
}

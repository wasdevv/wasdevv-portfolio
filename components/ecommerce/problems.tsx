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
    <SectionFrame title={p.title} subtitle={p.subtitle}>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {p.items.map((item, i) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: (i % 3) * 0.05 }}
            className="group relative flex flex-col overflow-hidden border border-border bg-card p-5 transition-colors hover:border-primary/50 hover:bg-card md:p-6"
          >
            <h3 className="text-base font-semibold tracking-tight md:text-lg">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground max-w-[60ch]">
              {item.description}
            </p>
            {item.proof ? (
              <div className="mt-auto pt-5">
                <p className="flex gap-2 border-t border-border/60 pt-4 text-xs leading-relaxed text-chart-3">
                  <FlaskConical className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
                  <span>
                    <span className="font-medium">{p.proofLabel}:</span>{" "}
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

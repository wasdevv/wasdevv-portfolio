"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Testimonials() {
  const { t } = useLanguage()
  const { items, prevLabel, nextLabel, goToLabel } = t.testimonials
  const [index, setIndex] = useState(0)

  const next = () => setIndex((i) => (i + 1) % items.length)
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length)
  const item = items[index]

  return (
    <div>
      <div className="relative">

        <AnimatePresence mode="wait" initial={false}>
          <motion.figure
            key={index}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="border border-border bg-card px-6 py-8 sm:px-10 sm:py-10"
          >
            <blockquote className="m-0 max-w-[60ch] text-base leading-[1.7] text-foreground sm:text-lg">
              <span className="text-primary">&ldquo;</span>
              {item.quote}
              <span className="text-primary">&rdquo;</span>
            </blockquote>

            <figcaption className="mt-8 flex items-center gap-3.5 border-t border-border pt-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-background text-base font-semibold text-foreground">
                {item.name.charAt(0)}
              </div>
              <div>
                <p className="m-0 mb-0.5 text-sm font-semibold text-foreground">
                  {item.name}
                </p>
                <p className="m-0 text-sm text-muted-foreground">
                  {item.role}
                </p>
              </div>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      <div className="mt-5 flex items-center gap-4">
        <ControlButton label={prevLabel} onClick={prev}>
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        </ControlButton>

        <div className="flex items-center">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`${goToLabel} ${i + 1}`}
              aria-current={i === index}
              className="group flex h-10 w-7 cursor-pointer items-center justify-center"
            >
              <span
                className={`block h-1.5 rounded-full transition-[width,background-color] duration-200 ${
                  i === index ? "w-5 bg-foreground" : "w-1.5 bg-hp-line-3 group-hover:bg-hp-dim"
                }`}
              />
            </button>
          ))}
        </div>

        <ControlButton label={nextLabel} onClick={next}>
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </ControlButton>
      </div>
    </div>
  )
}

function ControlButton({
  label,
  onClick,
  children,
}: {
  label: string
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-hp-line-2 bg-hp-bg text-muted-foreground transition-colors hover:border-hp-line-3 hover:text-foreground"
    >
      {children}
    </button>
  )
}

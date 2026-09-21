"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowLeft, ArrowRight, BadgeCheck, Quote, Star } from "lucide-react"
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
      <div className="relative mx-auto mt-10 max-w-[850px]">
        <span
          className="pointer-events-none absolute -left-4 -top-[70px] z-0 select-none font-serif text-[120px] font-black leading-none text-primary/10 sm:-left-9 sm:text-[180px]"
          aria-hidden="true"
        >
          &ldquo;
        </span>

        <AnimatePresence mode="wait" initial={false}>
          <motion.figure
            key={index}
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.4 }}
            className="relative z-10 overflow-hidden rounded-[20px] border border-border bg-card px-6 py-8 shadow-[0_25px_70px_rgba(0,0,0,0.22)] transition-[border-color,box-shadow] duration-300 before:absolute before:-right-[90px] before:-top-[90px] before:h-[180px] before:w-[180px] before:rounded-full before:bg-primary/10 before:blur-[30px] hover:border-primary/30 sm:rounded-[24px] sm:px-[50px] sm:py-[42px]"
          >
            <div className="relative mb-5 flex items-center justify-between sm:mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-[16px] border border-primary/20 bg-primary/5 text-primary shadow-[0_0_30px_color-mix(in_oklch,var(--primary)_5%,transparent)] sm:h-[55px] sm:w-[55px]">
                <Quote className="h-5 w-5 fill-current" aria-hidden="true" />
              </div>
              <div className="flex items-center gap-[5px]" aria-hidden="true">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    className="h-2.5 w-2.5 fill-primary text-primary drop-shadow-[0_0_6px_var(--primary)] sm:h-3 sm:w-3"
                  />
                ))}
              </div>
            </div>

            <blockquote className="relative m-0 max-w-[720px] text-sm font-medium leading-[1.7] text-foreground/85 sm:text-base md:text-lg">
              &ldquo;{item.quote}&rdquo;
            </blockquote>

            <figcaption className="relative mt-8 flex items-center gap-3.5 border-t border-border pt-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/25 bg-gradient-to-br from-primary/20 to-primary/5 text-[17px] font-extrabold text-primary shadow-[0_0_25px_color-mix(in_oklch,var(--primary)_8%,transparent)]">
                {item.name.charAt(0)}
              </div>
              <div>
                <p className="m-0 mb-1 text-[13px] font-semibold text-foreground">
                  {item.name}
                </p>
                <p className="m-0 flex items-center gap-1.5 text-[10px] text-muted-foreground">
                  <BadgeCheck
                    className="h-3 w-3 text-primary"
                    aria-hidden="true"
                  />
                  {item.role}
                </p>
              </div>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center justify-center gap-5 sm:gap-6">
        <ControlButton label={prevLabel} onClick={prev} direction={-1}>
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        </ControlButton>

        <div className="flex items-center gap-[7px]">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`${goToLabel} ${i + 1}`}
              aria-current={i === index}
              className={`h-[7px] rounded-full transition-[width,background-color] duration-300 ${
                i === index
                  ? "w-[25px] bg-primary shadow-[0_0_10px_var(--primary)]"
                  : "w-[7px] bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
            />
          ))}
        </div>

        <ControlButton label={nextLabel} onClick={next} direction={1}>
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </ControlButton>
      </div>
    </div>
  )
}

function ControlButton({
  label,
  onClick,
  direction,
  children,
}: {
  label: string
  onClick: () => void
  direction: 1 | -1
  children: React.ReactNode
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-label={label}
      whileHover={{ scale: 1.08, x: 3 * direction }}
      whileTap={{ scale: 0.95 }}
      className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-border bg-foreground/[0.02] text-muted-foreground transition-colors duration-300 hover:border-primary/25 hover:bg-primary/10 hover:text-primary"
    >
      {children}
    </motion.button>
  )
}

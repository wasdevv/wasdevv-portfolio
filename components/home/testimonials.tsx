"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"
import { shell } from "./rich"
import { timelineTitleClass } from "./timeline"
import { usePrefersReducedMotion } from "./use-reduced-motion"

// "What people I worked with say": every quote side by side (one column on
// phones, 2×2 on tablets), separated by hairlines like the Measured in
// production columns.

const ease = [0.2, 0.7, 0.2, 1] as const

// Hairlines: stacked on phones, 2×2 on tablets, one row of four on desktop.
const cellBorders = (i: number) =>
  [
    i > 0 ? "border-t" : "",
    i === 1 ? "md:border-t-0" : "",
    i % 2 === 1 ? "md:border-l md:pl-8" : "md:pr-8",
    i >= 2 ? "lg:border-t-0" : "",
    i > 0 ? "lg:border-l lg:pl-8" : "",
    i < 3 ? "lg:pr-8" : "lg:pr-0",
  ].join(" ")

export function HomeTestimonials() {
  const { t } = useLanguage()
  const q = t.home.testimonials
  const reduce = usePrefersReducedMotion()

  // Reduced motion resolves after hydration: pin the final state rather than
  // dropping the props, or the initial opacity 0 would stick.
  const enter = (i: number) =>
    reduce
      ? { initial: false as const, animate: { opacity: 1, y: 0 }, transition: { duration: 0 } }
      : {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.3 },
          transition: { duration: 0.5, ease, delay: i * 0.08 },
        }

  return (
    <section aria-labelledby="quote-title" className={`${shell} pb-16 pt-28 font-geist`}>
      <h2 id="quote-title" className={`${timelineTitleClass} mb-12 text-hp-lilac`}>
        {q.title}
      </h2>

      <ul className="m-0 grid list-none grid-cols-1 border-y border-hp-line p-0 md:grid-cols-2 lg:grid-cols-4">
        {q.items.map((item, i) => (
          <motion.li
            key={item.name}
            {...enter(i)}
            className={`flex flex-col border-hp-line py-8 ${cellBorders(i)}`}
          >
            <figure className="m-0 flex h-full flex-col">
              <blockquote className="m-0 flex-1 text-[17px] leading-[1.6] text-hp-lilac-soft">
                <span aria-hidden="true" className="mb-3 block font-serif-i text-4xl leading-none text-hp-violet">
                  “
                </span>
                {item.quote}
              </blockquote>
              <figcaption className="mt-8 border-t border-hp-line pt-4">
                <span className="block font-medium text-hp-lilac">{item.name}</span>
                <span className="mt-1 block text-[15px] text-hp-lilac-soft">{item.role}</span>
                <span className="mt-1 block font-plex-mono text-[12px] text-hp-lilac-dim">{item.context}</span>
                {item.linkedin ? (
                  <a
                    href={item.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-block font-jb text-[12px] uppercase tracking-[0.14em] text-hp-violet hover:text-hp-lilac"
                  >
                    LinkedIn ↗
                  </a>
                ) : null}
              </figcaption>
            </figure>
          </motion.li>
        ))}
      </ul>
    </section>
  )
}

"use client"

import { useEffect, useRef, useState } from "react"
import { HeroBackground } from "@/components/hero-background"
import { useHpTheme } from "./use-hp-theme"

/** Opacity the horizon settles at once the first screen has scrolled away. */
const REST_OPACITY = 0.3
/** Animation speed once the first screen has scrolled away (1 = full speed). */
const REST_SPEED = 0.2

// Site-wide sky: the horizon is pinned to the viewport so scrolling never cuts
// it. Full strength on the first screen, then it dims to REST_OPACITY so the
// rest of the page keeps the atmosphere without hurting legibility. Past the
// first screen it keeps moving, slowed down to REST_SPEED. When the page has a
// closing #contact section, the horizon comes back to full strength and speed
// as that section scrolls in, so the page ends where it started.
// Light theme: the same canvas, inverted with the hue turned back round, so the
// sky goes paper-white, the stars ink-dark and the planet stays violet. One
// render loop either way, and the shader and its grain stay untouched.
const LIGHT_FILTER = "invert(1) hue-rotate(180deg)"

export function SiteBackdrop({ dimmed = false, themable = false }: { dimmed?: boolean; themable?: boolean }) {
  const [theme] = useHpTheme()
  const light = themable && theme === "light"
  const ref = useRef<HTMLDivElement>(null)
  const [speed, setSpeed] = useState(dimmed ? REST_SPEED : 1)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let frame: number | undefined
    const update = () => {
      frame = undefined
      // Content-dense pages start already dimmed; the full horizon is a hero moment.
      const vh = window.innerHeight
      const away = dimmed ? 1 : Math.min(1, Math.max(0, window.scrollY / (vh * 0.85)))
      const contact = dimmed ? null : document.getElementById("contact")
      // 0 → 1 while the contact section's top travels from the bottom of the screen to 20% from the top.
      const back = contact
        ? Math.min(1, Math.max(0, (vh - contact.getBoundingClientRect().top) / (vh * 0.8)))
        : 0
      const progress = away * (1 - back)
      el.style.opacity = String(1 - (1 - REST_OPACITY) * progress)
      // Quantised so scrolling re-renders only every 5% of speed change.
      setSpeed(Math.round((1 - (1 - REST_SPEED) * progress) * 20) / 20)
    }
    const onScroll = () => {
      if (frame === undefined) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll, { passive: true })
    return () => {
      if (frame !== undefined) cancelAnimationFrame(frame)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [dimmed])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10"
      style={{ ...(dimmed ? { opacity: REST_OPACITY } : null), ...(light ? { filter: LIGHT_FILTER } : null) }}
    >
      <HeroBackground flip speed={speed} />
      {/* Same bottom fade as omp.sh: the horizon sinks into the canvas colour. */}
      <span className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#09090b] via-[#09090b]/55 to-transparent" />
    </div>
  )
}

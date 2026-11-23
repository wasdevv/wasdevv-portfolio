"use client"

import gsap from "gsap"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"

// Terminal-style page transition (GSAP). On a click on an internal link:
//   1. a 2px accent bar grows at the top (scaleX 0 → 0.7, 0.45s);
//   2. a dark screen fades in (0.28s) showing "→ /path" and a blinking block cursor;
//   3. then the router navigates.
// When the new route has rendered, the bar runs to the end (0.25s) and the
// dark screen fades out (0.4s). External links, new-tab/modified clicks,
// downloads and same-page anchors (#) behave normally. Reduced motion skips it.

/** Gives up and reveals the page if the route never changes (e.g. a failed navigation). */
const SAFETY_MS = 6000

export function PageTransition() {
  const router = useRouter()
  const pathname = usePathname()
  const barRef = useRef<HTMLDivElement>(null)
  const screenRef = useRef<HTMLDivElement>(null)
  const pending = useRef(false)
  const safety = useRef<number | undefined>(undefined)
  const [target, setTarget] = useState("")

  // Phase 2: the new page is on screen.
  useEffect(() => {
    if (!pending.current) return
    pending.current = false
    window.clearTimeout(safety.current)
    reveal()
  }, [pathname])

  function reveal() {
    const bar = barRef.current
    const screen = screenRef.current
    if (!bar || !screen) return
    gsap
      .timeline()
      .to(bar, { scaleX: 1, duration: 0.25, ease: "power2.out" })
      .to(screen, { autoAlpha: 0, duration: 0.4, ease: "power2.out" }, "<")
      .to(bar, { autoAlpha: 0, duration: 0.2 }, ">-0.05")
      .set(bar, { scaleX: 0 })
  }

  // Phase 1: intercept internal link clicks.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const link = (e.target as Element | null)?.closest?.("a")
      if (!link || !link.href) return
      if (link.target && link.target !== "_self") return
      if (link.hasAttribute("download") || link.dataset.noTransition !== undefined) return
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

      const url = new URL(link.href, window.location.href)
      if (url.origin !== window.location.origin) return
      // Same page (with or without a #hash): let the browser / smooth scroll handle it.
      if (url.pathname === window.location.pathname && url.search === window.location.search) return
      // Static files (the résumé PDF, images…) are not routes.
      if (/\.[a-z0-9]+$/i.test(url.pathname)) return

      e.preventDefault()
      const bar = barRef.current
      const screen = screenRef.current
      const href = url.pathname + url.search + url.hash
      if (!bar || !screen) {
        router.push(href)
        return
      }

      // The homepage reads as "/home" on the transition screen.
      setTarget(url.pathname === "/" ? "/home" : url.pathname)
      pending.current = true
      gsap.killTweensOf([bar, screen])
      gsap
        .timeline({
          onComplete: () => {
            router.push(href)
            window.clearTimeout(safety.current)
            safety.current = window.setTimeout(() => {
              if (!pending.current) return
              pending.current = false
              reveal()
            }, SAFETY_MS)
          },
        })
        .set(bar, { autoAlpha: 1, scaleX: 0 })
        .to(bar, { scaleX: 0.7, duration: 0.45, ease: "power2.out" })
        .to(screen, { autoAlpha: 1, duration: 0.28, ease: "power1.out" }, 0)
    }
    // Capture phase, so this runs before Next's <Link> handler and can take over.
    document.addEventListener("click", onClick, true)
    return () => {
      document.removeEventListener("click", onClick, true)
      window.clearTimeout(safety.current)
    }
  }, [router])

  return (
    <>
      <div
        ref={screenRef}
        aria-hidden="true"
        className="invisible fixed inset-0 z-[100] flex items-center justify-center bg-[#09090b] opacity-0"
      >
        <p className="m-0 font-jb text-[clamp(14px,1.2vw,17px)] tracking-[0.04em] text-[#f1e7ff]">
          <span className="text-[#c4a1ff]">→</span> {target}
          <span className="pt-cursor ml-1.5 inline-block h-[1.15em] w-[0.6em] translate-y-[0.18em] bg-[#c4a1ff]" />
        </p>
      </div>
      <div
        ref={barRef}
        aria-hidden="true"
        className="invisible fixed inset-x-0 top-0 z-[101] h-[2px] origin-left scale-x-0 bg-[#c4a1ff] opacity-0"
      />
    </>
  )
}

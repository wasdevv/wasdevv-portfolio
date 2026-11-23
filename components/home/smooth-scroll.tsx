"use client"

import Lenis from "lenis"
import "lenis/dist/lenis.css"
import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

const LenisContext = createContext<Lenis | null>(null)

// Global smooth scroll. Off for prefers-reduced-motion: native scrolling stays.
export function SmoothScroll({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const instance = new Lenis({ autoRaf: true, anchors: true })
    setLenis(instance)
    return () => {
      instance.destroy()
      setLenis(null)
    }
  }, [])

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
}

export function useLenis() {
  return useContext(LenisContext)
}

/** Scrolls to an element through Lenis when it is running, natively otherwise. */
export function scrollToElement(lenis: Lenis | null, el: HTMLElement) {
  if (lenis) lenis.scrollTo(el)
  else el.scrollIntoView()
}

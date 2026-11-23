"use client"

import { useSyncExternalStore } from "react"
import { HP_THEME_KEY } from "@/lib/hp-theme"

// Homepage light/dark theme. The source of truth is the data-hp-theme attribute
// on <html> (set before paint by the inline script in app/layout.tsx from
// localStorage); the hp-* palette in globals.css follows it. Dark is the default.

export type HpTheme = "dark" | "light"

function read(): HpTheme {
  return document.documentElement.dataset.hpTheme === "light" ? "light" : "dark"
}

function subscribe(onChange: () => void) {
  const mo = new MutationObserver(onChange)
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-hp-theme"] })
  return () => mo.disconnect()
}

export function useHpTheme(): [HpTheme, (next: HpTheme) => void] {
  const theme = useSyncExternalStore(subscribe, read, () => "dark" as HpTheme)
  const set = (next: HpTheme) => {
    const apply = () => {
      if (next === "light") document.documentElement.dataset.hpTheme = "light"
      else delete document.documentElement.dataset.hpTheme
    }
    try {
      localStorage.setItem(HP_THEME_KEY, next)
    } catch {
      // Private mode: the choice just lasts for this page view.
    }
    // A slow cross-fade between the two palettes (duration in globals.css);
    // instant under reduced motion or where View Transitions aren't supported.
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (!reduce && typeof document.startViewTransition === "function") document.startViewTransition(apply)
    else apply()
  }
  return [theme, set]
}

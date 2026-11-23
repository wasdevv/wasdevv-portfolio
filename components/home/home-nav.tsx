"use client"

import Link from "next/link"
import { ChevronDown, Menu, Moon, Sun, X } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/components/language-provider"
import { shell } from "./rich"
import { LiveClock } from "./live-clock"
import { useHpTheme } from "./use-hp-theme"

export function HomeNav({ themeToggle = false }: { themeToggle?: boolean }) {
  const { t, lang, setLang } = useLanguage()
  const pathname = usePathname()
  const n = t.home.nav
  const headerRef = useRef<HTMLElement>(null)
  const [open, setOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const [theme, setTheme] = useHpTheme()
  // Once the page moves, the sticky bar gets a translucent backdrop and a hairline.
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  const moreRef = useRef<HTMLDivElement>(null)

  // The phone menu closes on navigation and on Escape.
  useEffect(() => {
    setOpen(false)
    setMoreOpen(false)
  }, [pathname])
  useEffect(() => {
    if (!open && !moreOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return
      setOpen(false)
      setMoreOpen(false)
    }
    // The "More" menu also closes on a click anywhere outside it.
    const onDown = (e: PointerEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) setMoreOpen(false)
    }
    window.addEventListener("keydown", onKey)
    window.addEventListener("pointerdown", onDown)
    return () => {
      window.removeEventListener("keydown", onKey)
      window.removeEventListener("pointerdown", onDown)
    }
  }, [open, moreOpen])

  // Publishes the nav height so the homepage hero can fill exactly the rest of the screen.
  useEffect(() => {
    const el = headerRef.current
    if (!el) return
    const root = document.documentElement
    const ro = new ResizeObserver(() => root.style.setProperty("--hp-nav-h", `${el.offsetHeight}px`))
    ro.observe(el)
    return () => {
      ro.disconnect()
      root.style.removeProperty("--hp-nav-h")
    }
  }, [])
  // The case-study links (ObraHub, Swarm, Serverless) are off the nav for now;
  // the project cards on the homepage still link to them.
  const primary = [
    { href: "/", label: n.home },
    { href: "/#work", label: n.work },
  ]
  const more = [
    { href: "/projects", label: n.projects },
    { href: "/resume", label: n.resume },
  ]
  const sections = [...primary, ...more]

  // Uppercase mono links; the current page gets a thin underline.
  const caps = "font-jb text-[12px] uppercase tracking-[0.16em]"
  const navLink = (page: { href: string; label: string }, className: string) => {
    const active = pathname === page.href
    return (
      <Link
        key={page.href}
        href={page.href}
        aria-current={active ? "page" : undefined}
        className={`${className} ${active ? "text-hp-lilac" : "text-hp-lilac-dim hover:text-hp-lilac"}`}
      >
        {page.label}
      </Link>
    )
  }
  const topLink = (page: { href: string; label: string }) => {
    const active = pathname === page.href
    return (
      <Link
        key={page.href}
        href={page.href}
        aria-current={active ? "page" : undefined}
        className={`relative py-2 ${caps} transition-colors ${
          active ? "text-hp-lilac" : "text-hp-lilac-dim hover:text-hp-lilac"
        }`}
      >
        {page.label}
        {active ? <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-hp-lilac" /> : null}
      </Link>
    )
  }

  const langSwitch = (
    <span className="font-plex-mono text-[13px] text-hp-muted">
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`cursor-pointer px-1 py-2 hover:text-hp-lilac ${lang === "en" ? "text-hp-fg" : "text-hp-muted"}`}
      >
        EN
      </button>
      /
      <button
        type="button"
        onClick={() => setLang("pt")}
        aria-pressed={lang === "pt"}
        className={`cursor-pointer px-1 py-2 hover:text-hp-lilac ${lang === "pt" ? "text-hp-fg" : "text-hp-muted"}`}
      >
        PT
      </button>
    </span>
  )

  const themeSwitch = themeToggle ? (
    <button
      type="button"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label={theme === "light" ? n.darkMode : n.lightMode}
      title={theme === "light" ? n.darkMode : n.lightMode}
      className="inline-flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full border border-hp-line-2 text-hp-lilac-soft transition-colors hover:border-hp-violet/60 hover:text-hp-lilac"
    >
      {theme === "light" ? <Moon className="h-3.5 w-3.5" aria-hidden="true" /> : <Sun className="h-3.5 w-3.5" aria-hidden="true" />}
    </button>
  ) : null

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-40 border-b transition-[background-color,border-color] duration-300 ${
        open
          ? "border-hp-line bg-hp-bg"
          : scrolled
            ? "border-hp-line bg-hp-bg/75 backdrop-blur-md"
            : "border-transparent bg-transparent"
      }`}
    >
      <nav aria-label="Main" className={`${shell} py-2.5 lg:py-3`}>
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="font-plex-mono text-base font-semibold text-hp-fg">
            <span className="text-hp-violet">&gt;_</span> wasdevv
          </Link>

          <div className="flex items-center gap-2">
            <div className="mr-4 hidden items-center gap-x-7 lg:flex">
              {primary.map(topLink)}
              <span aria-hidden="true" className="h-[18px] w-px bg-hp-line-2" />
              <div ref={moreRef} className="relative">
                <button
                  type="button"
                  aria-expanded={moreOpen}
                  aria-controls="nav-more"
                  onClick={() => setMoreOpen((v) => !v)}
                  className={`inline-flex cursor-pointer items-center gap-1.5 py-2 ${caps} ${
                    moreOpen || more.some((m) => m.href === pathname)
                      ? "text-hp-lilac"
                      : "text-hp-lilac-dim hover:text-hp-lilac"
                  }`}
                >
                  {n.more}
                  <ChevronDown
                    aria-hidden="true"
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${moreOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  id="nav-more"
                  hidden={!moreOpen}
                  className="absolute right-0 top-full mt-2 min-w-[160px] rounded-[10px] border border-hp-line bg-hp-bg p-1.5"
                >
                  {more.map((page) =>
                    navLink(page, `block rounded-md px-3 py-2 ${caps} hover:bg-hp-violet/10`),
                  )}
                </div>
              </div>
              {langSwitch}
              {themeSwitch}
            </div>
            <LiveClock className="mr-2 hidden md:inline-flex" />
            <a
              href={pathname === "/" ? "#contact" : "/#contact"}
              className="inline-flex min-h-9 items-center gap-2 rounded-full border border-hp-line-2 px-3.5 text-sm text-hp-fg hover:text-hp-lilac"
            >
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-hp-violet" />
              {n.openToWork}
            </a>
            <button
              type="button"
              aria-expanded={open}
              aria-controls="site-menu"
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-hp-line-2 text-hp-fg hover:text-hp-lilac lg:hidden"
            >
              {open ? <X className="h-4 w-4" aria-hidden="true" /> : <Menu className="h-4 w-4" aria-hidden="true" />}
            </button>
          </div>
        </div>

        <div id="site-menu" hidden={!open} className="lg:hidden">
          <div className="mt-4 grid gap-1 border-t border-hp-line pt-3 text-base">
            {sections.map((page) => navLink(page, `flex min-h-11 items-center ${caps}`))}
            <div className="mt-2 flex items-center gap-4">
              {langSwitch}
              {themeSwitch}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

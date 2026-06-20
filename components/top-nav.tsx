"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Terminal, Menu, X } from "lucide-react"
import { useState } from "react"
import { profile } from "@/lib/portfolio-data"
import { LanguageToggle } from "@/components/language-toggle"
import { ThemeToggle } from "@/components/theme-toggle"

const routes = [
  { href: "/about-me", key: "aboutMe" as const },
  { href: "/skills", key: "skills" as const },
  { href: "/resume", key: "resume" as const },
  { href: "/contact", key: "contact" as const },
]

export function TopNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/about-me"
          className="flex items-center gap-2 font-mono text-sm font-semibold"
        >
          <Terminal className="h-4 w-4 text-primary" aria-hidden="true" />
          <span className="text-foreground">{profile.handle}</span>
          <span className="text-muted-foreground">|</span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          <ul className="flex items-center gap-5">
            {routes.map((route) => {
              const active = pathname === route.href
              return (
                <li key={route.href}>
                  <Link
                    href={route.href}
                    className={`font-mono text-xs tracking-wider transition-colors ${
                      active
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {route.href}
                  </Link>
                </li>
              )
            })}
          </ul>
          <div className="flex items-center gap-2 border-l border-border pl-4">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageToggle />
          <ThemeToggle />
          <button
            type="button"
            className="text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "close menu" : "open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-border px-6 py-4 lg:hidden">
          {routes.map((route) => {
            const active = pathname === route.href
            return (
              <li key={route.href}>
                <Link
                  href={route.href}
                  onClick={() => setOpen(false)}
                  className={`block py-2 font-mono text-xs tracking-wider transition-colors ${
                    active
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {route.href}
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </header>
  )
}

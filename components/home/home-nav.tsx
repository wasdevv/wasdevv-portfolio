"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/components/language-provider"
import { shell } from "./rich"

export function HomeNav() {
  const { t, lang, setLang } = useLanguage()
  const pathname = usePathname()
  const n = t.home.nav
  const link = "text-hp-muted hover:text-white"
  const pages = [
    { href: "/obrahub", label: n.obrahub },
    { href: "/swarm", label: n.swarm },
    { href: "/ecommerce-serverless", label: n.serverless },
  ]

  return (
    <header className="border-b border-hp-line bg-hp-bg">
      <nav
        aria-label="Main"
        className={`${shell} flex flex-wrap items-center justify-between gap-4 py-[18px]`}
      >
        <Link href="/" className="font-plex-mono text-base font-semibold text-hp-fg">
          <span className="text-hp-cyan">&gt;_</span> wasdevv
        </Link>
        <div className="flex flex-wrap items-center gap-x-7 gap-y-3 text-[15px]">
          {pages.map((page) => {
            const active = pathname === page.href
            return (
              <Link
                key={page.href}
                href={page.href}
                aria-current={active ? "page" : undefined}
                className={active ? "text-hp-cyan" : link}
              >
                {page.label}
              </Link>
            )
          })}
          <span aria-hidden="true" className="h-[18px] w-px bg-hp-line-2" />
          <a href="/#experience" className={link}>
            {n.experience}
          </a>
          <a href="/files/resume.pdf" className={link}>
            {n.resume}
          </a>
          <span className="font-plex-mono text-[13px] text-hp-muted">
            <button
              type="button"
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
              className={`cursor-pointer hover:text-white ${lang === "en" ? "text-hp-fg" : "text-hp-muted"}`}
            >
              EN
            </button>{" "}
            /{" "}
            <button
              type="button"
              onClick={() => setLang("pt")}
              aria-pressed={lang === "pt"}
              className={`cursor-pointer hover:text-white ${lang === "pt" ? "text-hp-fg" : "text-hp-muted"}`}
            >
              PT
            </button>
          </span>
          <a
            href="#contact"
            className="inline-flex min-h-10 items-center gap-2 rounded-full border border-hp-line-2 px-3.5 text-sm text-hp-fg hover:text-white"
          >
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-hp-green" />
            {n.openToWork}
          </a>
        </div>
      </nav>
    </header>
  )
}

"use client"

import { Languages } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, toggle, t } = useLanguage()

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={t.toggle.switchLang}
      title={t.toggle.switchLang}
      className={`inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-2.5 py-1 font-mono text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary ${className}`}
    >
      <Languages className="h-3.5 w-3.5" aria-hidden="true" />
      <span className={lang === "en" ? "text-primary" : ""}>EN</span>
      <span className="text-muted-foreground">|</span>
      <span className={lang === "pt" ? "text-primary" : ""}>PT</span>
    </button>
  )
}

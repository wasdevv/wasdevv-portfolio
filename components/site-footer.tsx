"use client"

import { profile } from "@/lib/portfolio-data"
import { useLanguage } from "@/components/language-provider"

export function SiteFooter() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-6 py-8 font-mono text-xs text-muted-foreground md:flex-row">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>
          <span className="text-primary">$</span> {t.footer}
        </span>
      </div>
    </footer>
  )
}

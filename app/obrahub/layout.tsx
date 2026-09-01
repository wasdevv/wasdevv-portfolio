import type { ReactNode } from "react"
import { TopNav } from "@/components/top-nav"
import { SiteFooter } from "@/components/site-footer"

// Same full-bleed treatment as /swarm — no sidebar profile, so the hero and
// the wide sections can span the full viewport.
export default function ObrahubLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background font-mono">
      <TopNav />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  )
}

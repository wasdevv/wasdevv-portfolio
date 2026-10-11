import type { ReactNode } from "react"
import { SiteChrome } from "@/components/home/site-chrome"

// Full-bleed case study under the homepage's nav and contact footer, like
// /swarm and /obrahub — no sidebar profile, so the hero and wide sections span the viewport.
export default function EcommerceLayout({ children }: { children: ReactNode }) {
  return (
    <SiteChrome>
      <main className="flex-1 font-mono text-foreground">{children}</main>
    </SiteChrome>
  )
}

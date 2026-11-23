import type { ReactNode } from "react"
import { HomeFooter } from "./home-footer"
import { HomeNav } from "./home-nav"
import { SiteBackdrop } from "./site-backdrop"
import { SmoothScroll } from "./smooth-scroll"

// Nav + footer shared by every page: the homepage, /projects, the project
// pages (/tork, /ecommerce-serverless) and the shell pages (/resume, /contact).
// `dark` pins the shadcn tokens to dark; the hp-* palette follows the theme
// toggle only where `themable` is set.
export function SiteChrome({
  children,
  dimBackdrop = false,
  contact = true,
  themable = false,
}: {
  children: ReactNode
  dimBackdrop?: boolean
  /** false keeps only the footer's bottom bar (©, GitHub, LinkedIn, résumé). */
  contact?: boolean
  /** Lets the light/dark toggle apply here (homepage only, for now). */
  themable?: boolean
}) {
  return (
    <div
      className={`dark isolate flex min-h-screen flex-col bg-hp-bg font-plex text-hp-fg antialiased ${themable ? "hp-themable" : ""}`}
    >
      <SmoothScroll>
        <SiteBackdrop dimmed={dimBackdrop} themable={themable} />
        <HomeNav themeToggle={themable} />
        {children}
        <HomeFooter contact={contact} />
      </SmoothScroll>
    </div>
  )
}

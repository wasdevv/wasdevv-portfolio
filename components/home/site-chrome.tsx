import type { ReactNode } from "react"
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google"
import { HomeFooter } from "./home-footer"
import { HomeNav } from "./home-nav"

const plexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})
const plexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
})

// Nav + contact footer shared by the homepage and the project case studies
// (/obrahub, /swarm, /ecommerce-serverless). That nav has no theme toggle, so
// `dark` pins the case-study content to the dark tokens to match it.
export function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <div
      className={`dark ${plexSans.variable} ${plexMono.variable} flex min-h-screen flex-col bg-hp-bg font-plex text-hp-fg antialiased`}
    >
      <HomeNav />
      {children}
      <HomeFooter />
    </div>
  )
}

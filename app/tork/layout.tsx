import type { Metadata } from "next"
import type { ReactNode } from "react"
import { SiteChrome } from "@/components/home/site-chrome"

export const metadata: Metadata = {
  title: "Tork",
  description:
    "Tork (formerly ObraHub): labor tracking and billing for industrial field work, a multi-tenant Rails 8.1 SaaS in production since August 2026.",
}

export default function TorkLayout({ children }: { children: ReactNode }) {
  return (
    <SiteChrome contact={false} themable dimBackdrop>
      {children}
    </SiteChrome>
  )
}

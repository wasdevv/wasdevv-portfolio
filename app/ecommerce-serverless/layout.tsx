import type { ReactNode } from "react"
import { SiteChrome } from "@/components/home/site-chrome"

export default function EcommerceLayout({ children }: { children: ReactNode }) {
  return (
    <SiteChrome contact={false} themable dimBackdrop>
      {children}
    </SiteChrome>
  )
}

import type { Metadata } from "next"
import type { ReactNode } from "react"
import { SiteChrome } from "@/components/home/site-chrome"

export const metadata: Metadata = {
  title: "Projects",
  description: "Products in production, case studies, open-source tools and experiments by Washington Cardoso.",
}

// Same chrome and theme toggle as the homepage, no sidebar.
export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return (
    <SiteChrome contact={false} themable dimBackdrop>
      {children}
    </SiteChrome>
  )
}

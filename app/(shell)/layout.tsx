import type { ReactNode } from "react"
import { SiteChrome } from "@/components/home/site-chrome"
import { SidebarProfile } from "@/components/sidebar-profile"

// /resume shares the site's nav, footer and horizon
// background, with the profile card alongside the page content.
export default function ShellLayout({ children }: { children: ReactNode }) {
  return (
    <SiteChrome dimBackdrop contact={false}>
      <div className="mx-auto flex w-full max-w-[1840px] flex-1 flex-col gap-10 px-6 lg:px-10 2xl:px-14 py-12 lg:flex-row lg:gap-16 lg:py-20">
        <SidebarProfile className="w-full shrink-0 lg:w-72" />
        <main id="main" className="min-w-0 flex-1 font-sans text-foreground">
          {children}
        </main>
      </div>
    </SiteChrome>
  )
}

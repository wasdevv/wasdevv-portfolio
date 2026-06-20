import type { ReactNode } from "react"
import { TopNav } from "@/components/top-nav"
import { SidebarProfile } from "@/components/sidebar-profile"
import { SiteFooter } from "@/components/site-footer"

export default function ShellLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background font-mono">
      <TopNav />
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-8 px-6 py-8 lg:flex-row lg:gap-10 lg:py-12">
        <SidebarProfile className="w-full shrink-0 lg:w-80" />
        <main className="min-w-0 flex-1">{children}</main>
      </div>
      <SiteFooter />
    </div>
  )
}

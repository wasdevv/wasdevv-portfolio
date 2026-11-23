import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Skills",
  description: "The languages, frameworks, databases and tools I work with, and how well I know each one.",
}

export default function Layout({ children }: { children: ReactNode }) {
  return children
}

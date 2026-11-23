import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch about a backend role or a project.",
}

export default function Layout({ children }: { children: ReactNode }) {
  return children
}

import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Resume",
  description: "Career timeline and downloadable CV.",
}

export default function Layout({ children }: { children: ReactNode }) {
  return children
}

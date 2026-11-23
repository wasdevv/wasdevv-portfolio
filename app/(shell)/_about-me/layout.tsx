import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "About",
  description: "Backend engineer with 4 years in Ruby on Rails and PostgreSQL: experience, projects, education and what colleagues say.",
}

export default function Layout({ children }: { children: ReactNode }) {
  return children
}

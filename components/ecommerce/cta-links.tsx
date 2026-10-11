import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { GithubIcon } from "@/components/brand-icons"
import { projects } from "@/lib/portfolio-data"

const repo = projects.find((p) => p.key === "ecommerceServerless")?.repo

// Repo + contact pair shared by the hero and the closing status section.
export function CtaLinks({ repoLabel, contactLabel }: { repoLabel: string; contactLabel: string }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {repo ? (
        <a
          href={repo}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 border border-primary bg-primary px-4 py-2.5 font-mono text-sm text-primary-foreground transition-all hover:bg-primary/90"
        >
          <GithubIcon className="h-4 w-4" />
          {repoLabel}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      ) : null}
      <Link
        href="/contact"
        className="group inline-flex items-center gap-2 border border-border bg-transparent px-4 py-2.5 font-mono text-sm transition-colors hover:border-foreground/60 hover:bg-foreground/5"
      >
        {contactLabel}
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </div>
  )
}

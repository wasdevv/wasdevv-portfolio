"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import {
  projects,
  skills,
  type Project,
  type ProjectCategory,
} from "@/lib/portfolio-data"
import { useLanguage } from "@/components/language-provider"

type Filter = "all" | ProjectCategory

const filters: Filter[] = ["all", "web", "backend", "tools"]
const pageSize = 3

export function ProjectsGrid() {
  const { t } = useLanguage()
  const [filter, setFilter] = useState<Filter>("all")
  const [page, setPage] = useState(0)

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.category === filter)
  const totalPages = Math.ceil(filtered.length / pageSize)
  const visible = filtered.slice(page * pageSize, (page + 1) * pageSize)

  const selectFilter = (next: Filter) => {
    setFilter(next)
    setPage(0)
  }

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => selectFilter(f)}
            aria-pressed={filter === f}
            className={`min-h-10 cursor-pointer rounded-full border px-4 text-sm transition-colors ${
              filter === f
                ? "border-foreground bg-foreground font-medium text-hp-bg"
                : "border-hp-line-2 bg-hp-bg text-muted-foreground hover:border-hp-line-3 hover:text-foreground"
            }`}
          >
            {t.projects.filters[f]}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((project) => (
          <ProjectCard
            key={project.key}
            project={project}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <nav
          className="mt-6 flex flex-wrap items-center gap-2"
          aria-label={t.projects.pageLabel}
        >
          <PageButton
            onClick={() => setPage(page - 1)}
            disabled={page === 0}
            className="px-4"
          >
            <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" />
            {t.projects.prev}
          </PageButton>
          {Array.from({ length: totalPages }, (_, i) => (
            <PageButton
              key={i}
              onClick={() => setPage(i)}
              active={i === page}
              aria-label={`${t.projects.pageLabel} ${i + 1}`}
              aria-current={i === page ? "page" : undefined}
              className="w-10"
            >
              {i + 1}
            </PageButton>
          ))}
          <PageButton
            onClick={() => setPage(page + 1)}
            disabled={page >= totalPages - 1}
            className="px-4"
          >
            {t.projects.next}
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
          </PageButton>
        </nav>
      )}
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const { t } = useLanguage()
  const copy = t.projects.items[project.key]
  const href = project.site ?? project.repo
  const label = project.site
    ? t.projects.liveSite
    : project.repo
      ? t.projects.viewCode
      : t.projects.askAbout

  const footerClass =
    "mt-auto flex items-center justify-between border-t border-border pt-4 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
  const footer = (
    <>
      {label}
      <ArrowRight
        className="h-4 w-4"
        aria-hidden="true"
      />
    </>
  )

  return (
    <article className="flex flex-col overflow-hidden border border-border bg-card transition-colors hover:border-hp-line-3">
      <div className="relative aspect-[3/2] overflow-hidden border-b border-border bg-background">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover object-top"
          />
        ) : (
          <GeneratedCover project={project} />
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold tracking-tight text-foreground">
          {project.name}
        </h3>
        <p className="mt-1 font-mono text-[13px] text-hp-dim">{copy.type}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {copy.summary}
        </p>

        <ul className="mb-6 mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="border border-border bg-secondary px-2 py-0.5 text-xs text-secondary-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>

        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className={footerClass}
            aria-label={`${label}: ${project.name}`}
          >
            {footer}
          </a>
        ) : (
          <Link
            href="/contact"
            className={footerClass}
            aria-label={`${label}: ${project.name}`}
          >
            {footer}
          </Link>
        )}
      </div>
    </article>
  )
}

// No screenshot on file: draw the project's real stack on the site's grid
// instead of inventing a UI mockup.
function GeneratedCover({ project }: { project: Project }) {
  return (
    <div className="absolute inset-0 bg-background">
      <div
        className="absolute inset-0 opacity-60 [background-image:linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_80%)]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 flex items-center justify-center gap-4">
        {project.icons.map((icon) => (
          <div
            key={icon}
            className="flex h-14 w-14 items-center justify-center border border-border bg-card"
          >
            <Image
              src={`https://cdn.simpleicons.org/${icon}/${iconColor(icon)}`}
              alt=""
              width={30}
              height={30}
              unoptimized
              className="h-[30px] w-[30px]"
            />
          </div>
        ))}
      </div>
      <span className="absolute bottom-3 right-4 font-mono text-xs text-muted-foreground">
        ~/{project.name.toLowerCase().replace(/\s+/g, "-")}
      </span>
    </div>
  )
}

function iconColor(slug: string) {
  return skills.find((s) => s.icon === slug)?.iconColor ?? "FFFFFF"
}

function PageButton({
  active,
  className = "",
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { active?: boolean }) {
  return (
    <button
      type="button"
      {...props}
      className={`inline-flex h-10 items-center justify-center gap-1.5 rounded-full border text-sm transition-colors disabled:cursor-not-allowed disabled:opacity-40 ${
        active
          ? "border-foreground bg-foreground font-medium text-hp-bg"
          : "border-hp-line-2 bg-hp-bg text-muted-foreground enabled:hover:border-hp-line-3 enabled:hover:text-foreground"
      } ${className}`}
    >
      {children}
    </button>
  )
}

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
      <div className="flex flex-wrap justify-center gap-3">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => selectFilter(f)}
            aria-pressed={filter === f}
            className={`rounded-[12px] border px-4 py-2.5 text-xs font-semibold transition-all duration-300 ${
              filter === f
                ? "border-primary bg-primary text-primary-foreground shadow-[0_0_24px_color-mix(in_oklch,var(--primary)_45%,transparent)]"
                : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
            }`}
          >
            {t.projects.filters[f]}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((project) => (
          <ProjectCard
            key={project.key}
            project={project}
            number={projects.indexOf(project) + 1}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <nav
          className="mt-10 flex flex-wrap items-center justify-center gap-2"
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
              {String(i + 1).padStart(2, "0")}
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

function ProjectCard({ project, number }: { project: Project; number: number }) {
  const { t } = useLanguage()
  const copy = t.projects.items[project.key]
  const href = project.site ?? project.repo
  const label = project.site
    ? t.projects.liveSite
    : project.repo
      ? t.projects.viewCode
      : t.projects.askAbout

  const footerClass =
    "mt-auto flex items-center justify-between border-t border-border pt-4 text-xs font-medium text-muted-foreground transition-colors group-hover:text-primary"
  const footer = (
    <>
      {label}
      <ArrowRight
        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
        aria-hidden="true"
      />
    </>
  )

  return (
    <article className="group flex flex-col overflow-hidden rounded-[20px] border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
      <div className="relative aspect-[3/2] overflow-hidden border-b border-border bg-background">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <GeneratedCover project={project} />
        )}
        <span className="absolute left-3 top-3 rounded-[8px] border border-white/10 bg-black/55 px-2 py-1 font-mono text-xs font-bold text-white backdrop-blur-sm">
          {String(number).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-primary">
          <span className="h-px w-4 bg-primary" aria-hidden="true" />
          {copy.type}
        </p>
        <h3 className="mt-3 text-lg font-bold text-foreground">
          {project.name}
        </h3>
        <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
          {copy.summary}
        </p>

        <ul className="mb-6 mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-[6px] border border-border bg-secondary px-2 py-1 text-[11px] font-medium text-secondary-foreground"
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
            aria-label={`${label} — ${project.name}`}
          >
            {footer}
          </a>
        ) : (
          <Link
            href="/contact"
            className={footerClass}
            aria-label={`${label} — ${project.name}`}
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
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,color-mix(in_oklch,var(--primary)_16%,transparent),transparent_65%)]">
      <div
        className="absolute inset-0 opacity-60 [background-image:linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_80%)]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 flex items-center justify-center gap-4">
        {project.icons.map((icon) => (
          <div
            key={icon}
            className="flex h-16 w-16 items-center justify-center rounded-[16px] border border-border bg-card/80 shadow-lg backdrop-blur-sm transition-transform duration-500 group-hover:-translate-y-1"
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
      <span className="absolute bottom-3 right-4 font-mono text-[11px] text-muted-foreground/70">
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
      className={`inline-flex h-10 items-center justify-center gap-1.5 rounded-[12px] border font-mono text-xs font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-40 ${
        active
          ? "border-primary bg-primary text-primary-foreground shadow-[0_0_20px_color-mix(in_oklch,var(--primary)_40%,transparent)]"
          : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
      } ${className}`}
    >
      {children}
    </button>
  )
}

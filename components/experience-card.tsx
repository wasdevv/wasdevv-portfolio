import { HighlightedText } from "@/components/highlighted-text"

type Props = {
  index: number
  role: string
  company: string
  period: string
  bullets: string[]
  isCurrent?: boolean
}

export function ExperienceCard({
  index,
  role,
  company,
  period,
  bullets,
  isCurrent,
}: Props) {
  const indexLabel = `/${String(index).padStart(2, "0")}`

  return (
    <article className="border border-border bg-card p-5">
      <div className="flex flex-wrap items-start justify-between gap-3 border-b border-border pb-3">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs text-primary">{indexLabel}</span>
            <h3 className="font-mono text-sm font-bold tracking-wider text-foreground">
              {role}
            </h3>
            {isCurrent && (
              <span className="border border-primary bg-primary px-1.5 py-0.5 font-mono text-[9px] font-bold tracking-wider text-primary-foreground">
                NOW
              </span>
            )}
          </div>
          <p className="mt-1 font-mono text-xs text-primary">{company}</p>
        </div>
        <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
          {period}
        </span>
      </div>

      <ul className="mt-4 space-y-2.5">
        {bullets.map((bullet, i) => (
          <li key={i} className="flex gap-3 text-sm leading-relaxed">
            <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-primary" />
            <span className="text-muted-foreground">
              <HighlightedText text={bullet} />
            </span>
          </li>
        ))}
      </ul>
    </article>
  )
}

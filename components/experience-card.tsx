import { HighlightedText } from "@/components/highlighted-text"

type Props = {
  role: string
  company: string
  period: string
  bullets: string[]
  isCurrent?: boolean
  currentLabel?: string
}

export function ExperienceCard({
  role,
  company,
  period,
  bullets,
  isCurrent,
  currentLabel = "Current",
}: Props) {
  return (
    <article className="border border-border bg-card p-6">
      <div className="flex flex-wrap items-start justify-between gap-3 border-b border-border pb-4">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-semibold tracking-tight text-foreground">
              {role}
            </h3>
            {isCurrent && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-hp-line-2 px-2 py-0.5 text-xs text-hp-green">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-hp-green" />
                {currentLabel}
              </span>
            )}
          </div>
          <p className="mt-1 text-sm text-muted-foreground">{company}</p>
        </div>
        <span className="font-mono text-sm text-muted-foreground">
          {period}
        </span>
      </div>

      <ul className="mt-4 max-w-[78ch] space-y-2.5">
        {bullets.map((bullet, i) => (
          <li key={i} className="flex gap-3 text-[15px] leading-relaxed">
            <span aria-hidden="true" className="mt-2.5 inline-block h-1 w-1 shrink-0 rounded-full bg-hp-dim" />
            <span className="text-muted-foreground">
              <HighlightedText text={bullet} />
            </span>
          </li>
        ))}
      </ul>
    </article>
  )
}

import { Fragment } from "react"

// Homepage copy marks **figures** and `identifiers` inline; this renders both.
export function Rich({ text, accent = false }: { text: string; accent?: boolean }) {
  return (
    <>
      {text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).map((seg, i) => {
        if (seg.startsWith("**") && seg.endsWith("**")) {
          return accent ? (
            <span key={i} className="text-hp-cyan">
              {seg.slice(2, -2)}
            </span>
          ) : (
            <strong key={i} className="font-semibold text-hp-fg">
              {seg.slice(2, -2)}
            </strong>
          )
        }
        if (seg.startsWith("`") && seg.endsWith("`")) {
          return (
            <code key={i} className="font-plex-mono text-[0.875em] text-hp-fg">
              {seg.slice(1, -1)}
            </code>
          )
        }
        return <Fragment key={i}>{seg}</Fragment>
      })}
    </>
  )
}

export function DashList({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`m-0 flex list-none flex-col p-0 text-base ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span aria-hidden="true" className="font-plex-mono text-hp-cyan">
            —
          </span>
          <span>
            <Rich text={item} />
          </span>
        </li>
      ))}
    </ul>
  )
}

export const shell = "mx-auto max-w-[1480px] px-6"

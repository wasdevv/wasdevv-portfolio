import { Fragment } from "react"

export function HighlightedText({ text }: { text: string }) {
  const segments = text.split(/(\*\*[^*]+\*\*)/g)
  return (
    <>
      {segments.map((seg, i) => {
        if (seg.startsWith("**") && seg.endsWith("**")) {
          return (
            <span key={i} className="font-semibold text-primary">
              {seg.slice(2, -2)}
            </span>
          )
        }
        return <Fragment key={i}>{seg}</Fragment>
      })}
    </>
  )
}

"use client"

import { skillGroups } from "@/lib/portfolio-data"
import { useLanguage } from "@/components/language-provider"

export function SkillsTable() {
  const { t } = useLanguage()

  return (
    <div className="overflow-hidden border border-border bg-card">
      <table className="w-full">
        <tbody>
          {skillGroups.map((group, i) => (
            <tr
              key={group.key}
              className={i < skillGroups.length - 1 ? "border-b border-border" : ""}
            >
              <th
                scope="row"
                className="w-40 border-r border-border px-4 py-4 text-left align-middle"
              >
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  {t.skills.categories[group.key]}
                </span>
              </th>
              <td className="px-4 py-3">
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="border border-border bg-secondary px-2.5 py-1 font-mono text-[11px] text-secondary-foreground transition-colors hover:border-primary hover:text-primary"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

"use client"

import { useState } from "react"
import { profile, skillGroups } from "@/lib/portfolio-data"
import { useLanguage } from "@/components/language-provider"

type TabId = "rb" | "md" | "json"

export function CodeTabs() {
  const [tab, setTab] = useState<TabId>("rb")
  const { t } = useLanguage()
  const { devRb, readme, stack } = t.aboutMe.codeTabs

  const tabs: { id: TabId; label: string }[] = [
    { id: "rb", label: devRb.filename },
    { id: "md", label: readme.filename },
    { id: "json", label: stack.filename },
  ]

  return (
    <div className="overflow-hidden border border-border bg-card">
      <div className="flex items-center gap-2 border-b border-border px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-primary/50" />
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
        <div className="ml-3 flex items-center gap-1">
          {tabs.map((tabItem) => (
            <button
              key={tabItem.id}
              type="button"
              onClick={() => setTab(tabItem.id)}
              className={`border-b-2 px-3 py-1 font-mono text-xs transition-colors ${
                tab === tabItem.id
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {tabItem.label}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
        {tab === "rb" && <RubyView />}
        {tab === "md" && <MarkdownView />}
        {tab === "json" && <JsonView />}
      </div>
    </div>
  )
}

function RubyView() {
  const { t } = useLanguage()
  const k = t.aboutMe.codeTabs.devRb.codeKeys

  return (
    <pre>
      <code>
        <span className="text-primary">dev</span>{" "}
        <span className="text-muted-foreground">=</span> {"{"}
        {"\n"}
        {"  "}
        {k.name}: <span className="text-chart-3">{`"${profile.name}"`}</span>,
        {"\n"}
        {"  "}
        {k.stack}: [<span className="text-chart-3">"rails"</span>,{" "}
        <span className="text-chart-3">"ruby"</span>,{" "}
        <span className="text-chart-3">"react"</span>],
        {"\n"}
        {"  "}
        {k.location}:{" "}
        <span className="text-chart-3">{`"${t.profile.location}"`}</span>,
        {"\n"}
        {"  "}
        {k.focus}:{" "}
        <span className="text-chart-3">
          {`"${t.aboutMe.codeTabs.devRb.focus}"`}
        </span>
        ,{"\n"}
        {"  "}
        {k.monster}: <span className="text-primary">true</span>,{"\n"}
        {"}"}
      </code>
    </pre>
  )
}

function MarkdownView() {
  const { t } = useLanguage()
  const { readme } = t.aboutMe.codeTabs

  return (
    <div className="space-y-3">
      <p>
        <span className="text-primary">#</span>{" "}
        <span className="text-foreground">{readme.title}</span>
      </p>
      {readme.paragraphs.map((p, i) => (
        <p key={i} className="text-muted-foreground">
          {p}
        </p>
      ))}
    </div>
  )
}

function JsonView() {
  const { t } = useLanguage()

  return (
    <pre>
      <code>
        {"{"}
        {"\n"}
        {skillGroups.map((g, gi) => (
          <span key={g.key}>
            {"  "}
            <span className="text-chart-3">
              {`"${t.skills.categories[g.key]}"`}
            </span>
            :{" ["}
            {"\n"}
            {g.items.map((item, i) => (
              <span key={item}>
                {"    "}
                <span className="text-primary">{`"${item}"`}</span>
                {i < g.items.length - 1 ? "," : ""}
                {"\n"}
              </span>
            ))}
            {"  ]"}
            {gi < skillGroups.length - 1 ? "," : ""}
            {"\n"}
          </span>
        ))}
        {"}"}
      </code>
    </pre>
  )
}

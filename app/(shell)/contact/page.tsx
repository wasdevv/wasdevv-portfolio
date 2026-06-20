"use client"

import { useState, type FormEvent } from "react"
import { Mail, Send } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"
import { profile } from "@/lib/portfolio-data"
import { useLanguage } from "@/components/language-provider"

export default function ContactPage() {
  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
      <ChannelsCard />
      <MessageForm />
    </div>
  )
}

function ChannelsCard() {
  const { t } = useLanguage()
  const c = t.contact

  return (
    <aside className="border border-border bg-card p-6 lg:p-8">
      <div className="flex items-start justify-between gap-3">
        <p className="font-mono text-[11px] tracking-wider text-muted-foreground">
          <span className="text-primary">[01]</span> {c.kicker}
        </p>
        <span className="inline-flex items-center gap-1.5 border border-primary px-2 py-0.5 font-mono text-[10px] tracking-wider text-primary">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
          {c.available}
        </span>
      </div>

      <h1 className="mt-6 font-mono text-4xl font-bold leading-[0.95] tracking-tight text-foreground sm:text-5xl">
        {c.title}
        <span className="text-primary">.</span>
      </h1>

      <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
        {c.body}
      </p>

      <h2 className="mt-10 border-b border-border pb-3 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
        <span className="text-primary">/</span> {c.channelsTitle}
      </h2>

      <ul className="mt-4 space-y-3">
        <ChannelRow
          icon={<Mail className="h-3.5 w-3.5 text-primary" />}
          label={c.form.emailLabel}
          value={profile.email}
          href={`mailto:${profile.email}`}
        />
        <ChannelRow
          icon={<LinkedinIcon className="h-3.5 w-3.5 text-primary" />}
          label="LINKEDIN"
          value="washington-cardoso"
          href={profile.social.linkedin}
          external
        />
        <ChannelRow
          icon={<GithubIcon className="h-3.5 w-3.5 text-primary" />}
          label="GITHUB"
          value={profile.handle}
          href={profile.social.github}
          external
        />
      </ul>

      <dl className="mt-10 grid grid-cols-3 gap-2 border-t border-border pt-5">
        <MetaCell label={c.metaLocation.label} value={c.metaLocation.value} />
        <MetaCell label={c.metaResponse.label} value={c.metaResponse.value} />
        <MetaCell label={c.metaStatus.label} value={c.metaStatus.value} />
      </dl>
    </aside>
  )
}

function ChannelRow({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ReactNode
  label: string
  value: string
  href: string
  external?: boolean
}) {
  return (
    <li>
      <a
        href={href}
        {...(external && { target: "_blank", rel: "noreferrer" })}
        className="flex items-center justify-between gap-3 border border-border bg-background px-3 py-2.5 transition-colors hover:border-primary"
      >
        <span className="flex items-center gap-2">
          {icon}
          <span className="font-mono text-[10px] tracking-wider text-muted-foreground">
            {label}
          </span>
        </span>
        <span className="truncate font-mono text-xs text-foreground">
          {value}
        </span>
      </a>
    </li>
  )
}

function MetaCell({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
        {label}
      </dt>
      <dd className="mt-1 font-mono text-[11px] font-semibold tracking-wider text-foreground">
        {value}
      </dd>
    </div>
  )
}

function MessageForm() {
  const { t } = useLanguage()
  const f = t.contact.form
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const subject = form.subject || "Hello from the portfolio"
    const body = `${form.message}\n\n— ${form.name} (${form.email})`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
  }

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((v) => ({ ...v, [key]: e.target.value }))

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-border bg-card p-6 lg:p-8"
    >
      <header className="flex items-center justify-between gap-3 border-b border-border pb-4">
        <h2 className="font-mono text-xs font-bold tracking-wider text-foreground">
          <span className="text-primary">$</span> {f.title}
        </h2>
        <span className="border border-border bg-secondary px-2 py-0.5 font-mono text-[9px] tracking-wider text-muted-foreground">
          {f.status}
        </span>
      </header>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <Field
          label={f.nameLabel}
          placeholder={f.namePlaceholder}
          value={form.name}
          onChange={update("name")}
          required
        />
        <Field
          label={f.emailLabel}
          type="email"
          placeholder={f.emailPlaceholder}
          value={form.email}
          onChange={update("email")}
          required
        />
      </div>

      <div className="mt-4">
        <Field
          label={f.subjectLabel}
          placeholder={f.subjectPlaceholder}
          value={form.subject}
          onChange={update("subject")}
          required
        />
      </div>

      <div className="mt-4">
        <label className="block">
          <span className="font-mono text-[10px] tracking-wider text-muted-foreground">
            {f.messageLabel}
          </span>
          <textarea
            required
            rows={6}
            placeholder={f.messagePlaceholder}
            value={form.message}
            onChange={update("message")}
            className="mt-2 w-full resize-none border border-border bg-background px-3 py-2.5 font-mono text-xs text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none"
          />
        </label>
      </div>

      <button
        type="submit"
        className="group mt-6 inline-flex w-full items-center justify-center gap-2 border border-primary bg-primary px-5 py-3 font-mono text-xs font-semibold tracking-wider text-primary-foreground shadow-[0_0_0_0_oklch(var(--primary)/0.5)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_24px_2px_var(--primary)] focus:outline-none focus-visible:-translate-y-0.5 focus-visible:shadow-[0_0_24px_2px_var(--primary)] sm:w-auto"
      >
        {f.sendCta}
        <Send
          className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-focus-visible:translate-x-0.5"
          aria-hidden="true"
        />
      </button>
    </form>
  )
}

function Field({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  required,
}: {
  label: string
  type?: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
}) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] tracking-wider text-muted-foreground">
        {label}
      </span>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="mt-2 w-full border border-border bg-background px-3 py-2.5 font-mono text-xs text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none"
      />
    </label>
  )
}

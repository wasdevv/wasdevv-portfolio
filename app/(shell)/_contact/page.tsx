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
      <div className="flex items-start">
        <span className="inline-flex items-center gap-2 rounded-full border border-hp-line-2 px-3 py-1 text-sm text-hp-green">
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-hp-green" />
          {c.available}
        </span>
      </div>

      <h2 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl">
        {c.title}
      </h2>

      <p className="mt-5 max-w-[48ch] text-base leading-relaxed text-muted-foreground">
        {c.body}
      </p>

      <h3 className="mt-10 text-sm font-medium text-foreground">
        {c.channelsTitle}
      </h3>

      <ul className="mt-3 space-y-2">
        <ChannelRow
          icon={<Mail className="h-4 w-4 text-muted-foreground" />}
          label={c.form.emailLabel}
          value={profile.email}
          href={`mailto:${profile.email}`}
        />
        <ChannelRow
          icon={<LinkedinIcon className="h-4 w-4 text-muted-foreground" />}
          label="LinkedIn"
          value="washington-cardoso"
          href={profile.social.linkedin}
          external
        />
        <ChannelRow
          icon={<GithubIcon className="h-4 w-4 text-muted-foreground" />}
          label="GitHub"
          value={profile.handle}
          href={profile.social.github}
          external
        />
      </ul>

      <dl className="mt-10 grid grid-cols-1 gap-4 border-t border-border pt-6 sm:grid-cols-2">
        <MetaCell label={c.metaLocation.label} value={c.metaLocation.value} />
        <MetaCell label={c.metaResponse.label} value={c.metaResponse.value} />
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
        className="flex min-h-12 items-center justify-between gap-3 border border-border bg-background px-4 transition-colors hover:border-hp-line-3"
      >
        <span className="flex items-center gap-2.5">
          {icon}
          <span className="text-sm text-muted-foreground">
            {label}
          </span>
        </span>
        <span className="truncate text-sm font-medium text-foreground">
          {value}
        </span>
      </a>
    </li>
  )
}

function MetaCell({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-sm text-muted-foreground">
        {label}
      </dt>
      <dd className="mt-1 text-sm font-medium text-foreground">
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
      <header className="border-b border-border pb-4">
        <h2 className="text-lg font-semibold tracking-tight text-foreground">
          {f.title}
        </h2>
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
          <span className="text-sm font-medium text-foreground">
            {f.messageLabel}
          </span>
          <textarea
            required
            rows={6}
            placeholder={f.messagePlaceholder}
            value={form.message}
            onChange={update("message")}
            className="mt-2 w-full resize-none border border-input bg-background px-3.5 py-3 text-[15px] text-foreground placeholder:text-hp-dim focus:border-primary"
          />
        </label>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        {f.sendCta}
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
      <span className="text-sm font-medium text-foreground">
        {label}
      </span>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="mt-2 min-h-11 w-full border border-input bg-background px-3.5 text-[15px] text-foreground placeholder:text-hp-dim focus:border-primary"
      />
    </label>
  )
}

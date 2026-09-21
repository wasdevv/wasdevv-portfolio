import type { ProjectKey } from "@/lib/portfolio-data"

export type Lang = "en" | "pt"

type Stat = {
  value: string
  label: string
}

type ExperienceItem = {
  role: string
  company: string
  period: string
  isCurrent?: boolean
  // one-line version of the role, used by the /resume timeline
  summary: string
  tags: string[]
  // bullets support **highlighted** keywords parsed by HighlightedText
  bullets: string[]
}

type Dict = {
  profile: {
    nameLine1: string
    nameLine2: string
    role: string
    yearsLabel: string
    location: string
    tagline: string
    availableLabel: string
    downloadResume: string
  }
  nav: {
    aboutMe: string
    skills: string
    resume: string
    contact: string
    swarm: string
    obrahub: string
  }
  sidebar: {
    contactPhone: string
    contactPhoneLabel: string
    contactEmailLabel: string
    contactLinkedInLabel: string
    contactGithubLabel: string
  }
  aboutMe: {
    intro: {
      eyebrow: string
      headline: string
      headlineEmphasis: string
      devRb: {
        filename: string
        codeKeys: {
          name: string
          stack: string
          location: string
          focus: string
          monster: string
        }
        focus: string
      }
      paragraphs: string[]
      stats: Stat[]
      facts: {
        name: string
        role: string
        focus: string
        location: string
      }
    }
    experience: {
      title: string
      rolesLabel: string
      items: ExperienceItem[]
    }
  }
  skills: {
    title: string
    subtitle: string
    techTitle: string
    techSubtitle: string
    allLabel: string
    countSuffix: string
    levelLabel: string
    levels: {
      ADVANCED: string
      INTERMEDIATE: string
      FAMILIAR: string
    }
    categories: {
      languages: string
      frameworks: string
      databases: string
      devops: string
      testing: string
      architecture: string
    }
  }
  education: {
    title: string
    items: {
      degree: string
      school: string
      period: string
    }[]
  }
  projects: {
    title: string
    subtitle: string
    filters: { all: string; web: string; backend: string; tools: string }
    liveSite: string
    viewCode: string
    askAbout: string
    prev: string
    next: string
    pageLabel: string
    // details: the long form shown on /resume; the card grid uses summary
    items: Record<ProjectKey, { type: string; summary: string; details?: string }>
  }
  testimonials: {
    title: string
    subtitle: string
    prevLabel: string
    nextLabel: string
    goToLabel: string
    items: {
      quote: string
      name: string
      role: string
    }[]
  }
  spokenLanguages: {
    title: string
    items: {
      language: string
      level: string
    }[]
  }
  resume: {
    title: string
    subtitle: string
    downloadCta: string
    timelineTitle: string
    openSourceTitle: string
    privateRepoLabel: string
  }
  contact: {
    kicker: string
    badge: string
    headline: string
    headlineEmphasis: string
    subheadline: string
    ctaPrimary: string
    ctaSecondary: string
    title: string
    body: string
    emailLabel: string
    inboxLabel: string
    socialLabel: string
    available: string
    channelsTitle: string
    metaLocation: { label: string; value: string }
    metaResponse: { label: string; value: string }
    metaStatus: { label: string; value: string }
    form: {
      title: string
      status: string
      nameLabel: string
      namePlaceholder: string
      emailLabel: string
      emailPlaceholder: string
      subjectLabel: string
      subjectPlaceholder: string
      messageLabel: string
      messagePlaceholder: string
      sendCta: string
    }
  }
  footer: string
  toggle: {
    switchLang: string
    switchTheme: { toLight: string; toDark: string }
  }
  meta: {
    aboutMe: { title: string; description: string }
    skills: { title: string; description: string }
    resume: { title: string; description: string }
    contact: { title: string; description: string }
    swarm: { title: string; description: string }
    obrahub: { title: string; description: string }
  }
  swarm: {
    hero: {
      kicker: string
      title: string
      tagline: string
      subtitle: string
      ctaGithub: string
      ctaCli: string
      agentLabel: string
    }
    pty: {
      kicker: string
      title: string
      subtitle: string
      promptLabel: string
      promptLine: string
      windowLabel: string
      lines: { kind: "sys" | "task" | "ok"; text: string }[]
    }
    compare: {
      kicker: string
      title: string
      subtitle: string
      hint: string
      mergeLabel: string
      discardLabel: string
      viewDiffLabel: string
      attempts: {
        id: string
        agent: string
        elapsed: string
        files: string
        preview: string
      }[]
    }
    features: {
      kicker: string
      title: string
      subtitle: string
      items: {
        title: string
        description: string
      }[]
    }
    architecture: {
      kicker: string
      title: string
      subtitle: string
      nodes: {
        id: string
        label: string
      }[]
    }
    stack: {
      kicker: string
      title: string
      items: string[]
    }
    roadmap: {
      kicker: string
      title: string
      subtitle: string
      items: {
        marker: string
        title: string
        description: string
      }[]
    }
    story: {
      kicker: string
      title: string
      body: string[]
      inspiredByLabel: string
    }
    finalCta: {
      kicker: string
      title: string
      subtitle: string
      ctaGithub: string
      ctaCli: string
      ctaDocs: string
    }
  }
  obrahub: {
    hero: {
      kicker: string
      title: string
      tagline: string
      subtitle: string
      badges: string[]
      ctaContact: string
    }
    problem: {
      kicker: string
      title: string
      subtitle: string
      beforeLabel: string
      beforeSteps: string[]
      items: { title: string; description: string }[]
    }
    rules: {
      kicker: string
      title: string
      subtitle: string
      items: { title: string; description: string }[]
    }
    domain: {
      kicker: string
      title: string
      subtitle: string
      tree: string
      entities: { name: string; description: string }[]
      hoursTitle: string
      hoursFactorLabel: string
      hours: { code: string; factor: string; label: string }[]
      balanceTitle: string
      balanceBody: string
    }
    architecture: {
      kicker: string
      title: string
      subtitle: string
      items: { title: string; description: string }[]
      stackTitle: string
      stack: string[]
    }
    decisions: {
      kicker: string
      title: string
      subtitle: string
      items: { title: string; description: string }[]
    }
    numbers: {
      kicker: string
      title: string
      subtitle: string
      stats: { value: string; label: string }[]
      measuredTitle: string
      measured: { value: string; label: string }[]
    }
    status: {
      kicker: string
      title: string
      subtitle: string
      doneTitle: string
      done: string[]
      openTitle: string
      open: string[]
      directionTitle: string
      direction: string
      ctaLabel: string
    }
  }
}

const en: Dict = {
  profile: {
    nameLine1: "WASHINGTON",
    nameLine2: "CARDOSO.",
    role: "Full-Stack Developer",
    yearsLabel: "4 years",
    location: "Brazil",
    tagline:
      "Ruby on Rails specialist building scalable web platforms with focus on performance, clean code and shipping real value.",
    availableLabel: "available for projects",
    downloadResume: "DOWNLOAD RESUME",
  },
  nav: {
    aboutMe: "ABOUT_ME",
    skills: "SKILLS",
    swarm: "SWARM",
    obrahub: "OBRAHUB",
    resume: "RESUME",
    contact: "CONTACT",
  },
  sidebar: {
    contactPhone: "+55 17 98843-2434",
    contactPhoneLabel: "Phone",
    contactEmailLabel: "Email",
    contactLinkedInLabel: "LinkedIn",
    contactGithubLabel: "GitHub",
  },
  aboutMe: {
    intro: {
      eyebrow: "Who I am",
      headline: "I turn complex problems into ",
      headlineEmphasis: "useful software.",
      devRb: {
        filename: "dev.rb",
        codeKeys: {
          name: "name",
          stack: "stack",
          location: "location",
          focus: "focus",
          monster: "monster",
        },
        focus: "shipping products",
      },
      paragraphs: [
        "Full Stack Software Engineer with 4 years of experience developing scalable applications on Ruby on Rails and multi-tenant SaaS platforms.",
        "Solid background in backend architecture, REST APIs, automated testing, CI/CD, observability and performance optimization.",
        "Proven track record of delivering measurable improvements in latency, reliability and development team productivity, building high-quality software with clean architecture and modern software engineering practices.",
      ],
      stats: [
        { value: "4", label: "years in Rails" },
        { value: "3.5s → 180ms", label: "p99 latency cut" },
        { value: "63,000×", label: "faster queries on 14M+ rows" },
        { value: "80h → 7min", label: "CSV export pipeline" },
        { value: "35% → 85%", label: "test coverage via CI/CD" },
        { value: "99.9%", label: "production uptime" },
      ],
      facts: {
        name: "Name",
        role: "Role",
        focus: "Focus",
        location: "Location",
      },
    },
    experience: {
      title: "PROFESSIONAL EXPERIENCE",
      rolesLabel: "ROLES",
      items: [
        {
          role: "FULL STACK DEVELOPER",
          company: "Was Advisory",
          period: "Aug 2023 — Present",
          isCurrent: true,
          summary:
            "Building multi-tenant SaaS systems with Rails, PostgreSQL, Redis and React. Cut a critical endpoint from 3.5 seconds to 180 milliseconds and kept reliable workflows running at scale.",
          tags: ["Ruby on Rails", "PostgreSQL", "React", "Redis"],
          bullets: [
            "Optimized a critical endpoint, cutting latency from **3.5s to 180ms** (-94%) by identifying **N+1** queries, implementing **eager loading** and **3-layer Redis caching**, impacting **10k+ requests/day**.",
            "Rearchitected the CSV report export pipeline, replacing synchronous processing with an asynchronous architecture using **Sidekiq**, **PostgreSQL COPY**, streaming and **Amazon S3**, reducing export time of 1.77M records from ~80h to 7min (~600×).",
            "Optimized PostgreSQL queries on a base with **14M+ records**, designing composite indexes and refining query strategies that cut response time from **12.7s to 0.2ms** (~63,000×).",
            "Designed and delivered from scratch the **Extrato de Débitos** (Debt Statement) module with dynamic search over millions of tax debt installments, sustaining **17 incremental releases in 5 months** as the main author; eliminated N+1 in polymorphic associations (not resolvable by Rails eager loading) via manual preload, replaced in-memory ID loading with SQL subqueries and closed recurring 500 errors in production.",
            "Ensured penny-to-penny financial consistency across three independent screens diverging in production (**Extrato de Débitos**, **Atendimento** and **Maiores Devedores**), implementing a shared totals composition resolver that made taxpayer debt auditable line by line.",
            "Reduced write cost on high-volume tables by removing **33 unused indexes** and adding unique indexes on join tables via concurrent migrations (`algorithm: :concurrently`) applied with zero downtime.",
            "Diagnosed and fixed a race condition emitting duplicate protocol numbers in a municipal administrative system (same protocol generated 3× under double-click), replacing `SELECT MAX(number)+1` without lock with **pg_advisory_xact_lock** scoped by department and year, preserving cross-department concurrency, with explicit transaction guard and uniqueness validation as second defense layer.",
            "Architected and implemented the integration with the external **SINAL API**, documented in **OpenAPI/Swagger**, processing **100k+ records/month** in a **multi-tenant** environment, applying **Faraday**, **distributed Circuit Breaker (Stoplight)**, **Retry with Exponential Backoff**, **Outbox Pattern**, advisory locks in **PostgreSQL** and **Sidekiq** for asynchronous processing, sustaining **99.9% uptime** and zero duplicate records even with an unstable provider.",
            "Built automated test suites with **RSpec** and **Capybara**, raising coverage from **35% to 85%** and reducing production bugs through robust **CI/CD** pipelines, with **RuboCop** and **Brakeman** for static analysis and security.",
            "Evolved the critical **Acordos de Dívida Ativa** (Active Debt Agreements) module in a **multi-tenant** architecture serving **50+ municipalities**, during the system migration from **Rails 7 to Rails 8**, structured with **Devise**, **Service Objects** and **Form::Builder** to encapsulate complex fiscal rules, delivering **15+ per-municipality customizations via feature flags**, cutting delivery time by **60%**, zeroing cross-tenant regressions and reducing module-related support tickets by **59%**.",
            "Monitored production applications using observability tools (**Datadog**), identifying and resolving incidents proactively before they affected end users.",
            "Hands-on experience with **Kubernetes** in production (accessed via **Pritunl VPN**), using **ArgoCD** (GitOps), **Headlamp** and **Grafana** for continuous deploy, cluster management and incident monitoring in a high-availability environment.",
            "Built **ObraHub**, the labor tracking and billing system for **Engemil**, an industrial maintenance and assembly contractor, specified through successive rounds of review and feedback with the person who produced the whole process by hand — a **Rails 8 + PostgreSQL + Hotwire** monolith (Devise, Pundit, 12 policies, 19 importers/exporters) that replaced a paper-to-spreadsheet-to-retyping cycle. Imports the spreadsheet engineering already fills in, with **SHA-256 row digests** for idempotent `upsert_all` so re-uploading a file never duplicates; keeps each work package's balance as a **query, not a stored column**, so a 663h package shows its new balance the moment a report lands; and exports the monthly billing workbook **byte-identical** to the client's reference file — theme-colour fills with tint, ACCOUNTING number format and a two-column-per-hour-type summary layout, with a test that strictly parses the generated `styles.xml`. **899 examples, 0 failures**; **11,551h** closed in one month and **1,395 entries** imported and validated in **3s** in real use.",
            "Built **shelflog**, an installable **Rails** PWA for shelf expiry-date control, designed for use in **Muffato's PAS** (a major Brazilian supermarket chain): barcode and name lookup, a per-product status driven by configurable thresholds, and an hourly **Solid Queue** job that sends **web push** alerts for expired and soon-to-expire stock.",
            "Built **Swarm**, an Agent Development Environment on **Rails 8 + Hotwire + SQLite** that runs **1–4 Claude Code or Codex agents in parallel**, each in an isolated Git worktree and branch, streamed live from a real **PTY** over **ActionCable**. Every task goes through a **planner phase before any code is written** — the planner runs in the PTY, writes the plan and exits, and `on_exit` starts the coder pointed at it, so a failed plan never becomes code written blind. The workspace is a **tree of splittable panes serialized into the URL** (agent, terminal, chat, diff, preview, any file, or another attempt at the same prompt as tabs), with a file explorer, a **CodeMirror 6** editor and an embedded preview of the running app. Diff review carries **per-line comments that flow back into the agent's session**; **PR bodies are written server-side by a headless agent** from the real diff and the actual check results, with the golden path recorded in headless **Chrome (Ferrum)** and embedded as a GIF. Also ships **Design Mode** (annotate the live app like a Figma comment, sending the element's live DOM state rather than a screenshot), four **agent loop patterns** (Turn/Goal/Time/Proactive) behind cost, attempt and kill-switch guards with HMAC-verified webhooks, and **Trello / Linear / Jira** integrations. Single-process by design — the PTY registry lives in Puma's memory. Packaged as a native desktop app (**Tauri 2 + WebView2** on Windows with the Rails backend running inside **WSL**), with complete i18n in pt-BR and English.",
            "Published a trilogy of **Claude Code** plugins covering agent input, output and side effects: **lean-output** compresses **RSpec**, **RuboCop** and **Brakeman** outputs by **-70% to -97% tokens** with a zero-loss guarantee on failures; **rails-context** injects a curated dossier (columns, indexes, associations, validations and routes), drastically shrinking the model's read surface instead of loading full `db/schema.rb` and models; **rails-guard** intercepts destructive Rails commands (`db:drop`, `db:reset`, `rails destroy`, `runner` with `delete_all`) via a `PreToolUse` hook, requiring human confirmation before execution.",
          ],
        },
        {
          role: "FULL STACK DEVELOPER",
          company: "GoTechDS",
          period: "Jun 2023 — Jul 2023",
          summary:
            "Contributed to authentication and dashboard features in an established Rails product, through code reviews and collaborative development.",
          tags: ["Rails", "Devise", "Code Review"],
          bullets: [
            "Contributed to feature implementation on the **Go Tech DS** product using **Ruby on Rails** and **Devise**, following **Trello** cards prioritized by the team within the existing architecture.",
            "Developed features in the **authentication** flow (login, signup and password recovery) and dashboard, under technical guidance from more experienced developers.",
            "Actively participated in **code reviews** and **pair programming**, quickly ramping up on a new codebase and team flow.",
          ],
        },
        {
          role: "FULL STACK DEVELOPER",
          company: "Independent \\\\ Blogs & Micro-SaaS",
          period: "Nov 2022 — May 2023",
          summary:
            "Delivered landing pages, blogs and small software products end to end — from discovery and database design to deployment and support.",
          tags: ["Full Stack", "Clients", "Delivery"],
          bullets: [
            "End-to-end delivery of **blogs, landing pages and mini-softwares** for direct clients — from discovery to production.",
            "Worked as the **single owner of every project**: requirements, **PostgreSQL** modeling, backend in **Ruby on Rails**, frontend, deploy and ongoing support.",
            "Set up **CI/CD pipelines**, domain configuration, SSL and monitoring for every project handed off.",
            "Directly handled **client communication, scope negotiation and pricing**, building long-term relationships with returning clients.",
            "Picked up new stacks on demand (**Stimulus**, **Tailwind**, **AWS S3**, payment gateways) to ship whatever the project required.",
          ],
        },
      ],
    },
  },
  skills: {
    title: "TECHNICAL SKILLS",
    subtitle: "Tools and technologies I use to ship",
    techTitle: "TECHNOLOGIES AND TOOLS",
    techSubtitle:
      "A modern stack, backed by industry best practices — built to scale and perform under pressure.",
    allLabel: "ALL",
    countSuffix: "TECHS",
    levelLabel: "Skill level",
    levels: {
      ADVANCED: "Advanced",
      INTERMEDIATE: "Intermediate",
      FAMILIAR: "Familiar",
    },
    categories: {
      languages: "languages",
      frameworks: "frameworks & libraries",
      databases: "databases",
      devops: "devops & cloud",
      testing: "testing & quality",
      architecture: "architecture",
    },
  },
  education: {
    title: "EDUCATION",
    items: [
      {
        degree: "AWS SERVERLESS DEMONSTRATED",
        school: "Amazon Web Services (AWS)",
        period: "Issued Sep 2026 · Expires Sep 2027",
      },
      {
        degree: "SYSTEMS ANALYSIS AND DEVELOPMENT — IN PROGRESS",
        school: "Wyden — São José do Rio Preto, SP",
        period: "2024 — 2026 (expected Dec/2026)",
      },
      {
        degree: "LEARN RAILS AND RUBY PROGRAMMING",
        school: "Udemy — John Elder",
        period: "2023",
      },
      {
        degree: "ENGLISH COURSE",
        school: "CNA — São José do Rio Preto (Downtown)",
        period: "2019",
      },
    ],
  },
  projects: {
    title: "PROJECTS",
    subtitle: "Some things I've built with modern technologies",
    filters: {
      all: "All projects",
      web: "Web apps",
      backend: "Backend & systems",
      tools: "Dev tools & AI",
    },
    liveSite: "Live site",
    viewCode: "View code",
    askAbout: "Private — ask me",
    prev: "Previous",
    next: "Next",
    pageLabel: "Page",
    items: {
      swarm: {
        type: "Desktop app",
        summary:
          "Agent Development Environment that runs 1–4 coding agents in parallel, each in an isolated git worktree with a live PTY, diff review and one-click merge.",
        details:
          "An **Agent Development Environment** on **Rails 8 + Hotwire** that runs **1–4 coding agents in parallel**, each in its own isolated **git worktree** with a real **PTY** streamed over **ActionCable**. Live diff with line comments that flow straight back into the agent's session, a `/compare` grid to pick the best attempt, one-click merge or PR, and a native desktop build via **Tauri 2 + WebView2** with the Rails backend inside **WSL**.",
      },
      obrahub: {
        type: "Full Stack",
        summary:
          "In production at Engemil: turns the spreadsheets site engineers already fill in into labor tracking, daily reports and the measurement the client signs.",
        details:
          "**Currently in production at Engemil.** Tracks work executed on construction sites: each site has its assigned foremen, and each one logs how many hours they worked, in which role, on which day, with an optional photo. Admins bulk-import those entries from an **Excel** spreadsheet plus a zip of the photos. **Rails 8.1**, **PostgreSQL**, **Hotwire**, **Devise + Pundit**, **Solid Cache** and **Active Storage** — no JS bundler, no job queue.",
      },
      tally: {
        type: "Backend",
        summary:
          "Bank return file reconciliation: a Kotlin engine accounts for every line — matched, in review, unmatched or rejected — and a Rails console shows it in EN and pt-BR.",
        details:
          "Reconciles **bank return files** against expected receivables and accounts for every single line: matched, awaiting review, unmatched, or rejected with a reason. A **Kotlin** engine decides and never emits human-facing text — it emits stable codes that a **Rails** console renders in English and pt-BR. Whatever the engine will not decide alone goes to a human queue carrying the candidates and the reason.",
      },
      pulse: {
        type: "API + Mobile",
        summary:
          "Self-hosted uptime and heartbeat monitoring: check workers, incident detection, email alerts and an Expo app with push notifications.",
        details:
          "Self-hosted **uptime and heartbeat monitoring** — paste a URL, it checks on a fixed interval and tells you when it goes down. **Fastify + TypeScript** API with **BullMQ** workers (check, reconcile, notify) over **PostgreSQL** and **Redis**, the whole stack up with a single `docker compose`. Ships an **Expo** mobile app with push notifications and a streaming **NDJSON** importer built on `pg-copy-streams`.",
      },
      pipelineHq: {
        type: "Full Stack",
        summary:
          "Multi-tenant B2B CRM on Rails 8.1 with Solid Queue, Cache and Cable, native auth hardened in 10 layers and an ADR behind every decision.",
        details:
          "Full-stack **multi-tenant B2B CRM** built on **Rails 8.1.3** — Pipedrive/HubSpot-style sales pipeline. Uses **Solid Queue / Solid Cache / Solid Cable** (zero Redis, zero Sidekiq), **Hotwire** (Turbo + Stimulus), **Tailwind v4** and **native Rails auth** extended with **10 hardening layers** (TOTP 2FA, backup codes, sudo mode, rate limit, audit log, honeypot). Each decision is backed by an **ADR**.",
      },
      jornada: {
        type: "Backend",
        summary:
          ".NET 9 timekeeping engine that computes each day against effective-dated labour rules and closes a period into an immutable, reproducible result.",
      },
      leanOutput: {
        type: "Claude Code plugin",
        summary:
          "Keeps long tool output out of the context window — spills it to disk behind a pointer and compresses RSpec, RuboCop and Brakeman without losing a failure.",
        details:
          "A **Claude Code plugin** that keeps long tool output out of the context window: it spills big results to disk and hands the model a pointer, withholds what the context already holds, and compresses **RSpec**, **RuboCop**, **Brakeman**, `git diff`, cargo and grep on the way past. Measured by replaying **12,008 real tool results (10.54 MB)** — fewer tokens, **zero lost failures**.",
      },
      amnesia: {
        type: "Real-time app",
        summary:
          "A lean Discord: real-time text and voice channels and screen sharing on Phoenix Channels and LiveKit, with an Electron desktop client.",
        details:
          "A lean Discord — real-time **text and voice channels**, screen sharing and a desktop app. **Elixir + Phoenix 1.8** Channels and Presence resolve rooms, join and who-is-online with no infrastructure code, **LiveKit** (SFU) carries the media, and the client is **Electron + React + Vite + Tailwind v4**.",
      },
      glossa: {
        type: "Full Stack",
        summary:
          "Translation files managed end to end: a Rails 8 JSON:API backend and an Ember Octane frontend that asks for the target locale's CLDR plurals. 208 RSpec examples.",
      },
      expresso3300: {
        type: "Full Stack",
        summary:
          "People management platform: trainings, vacations, performance, multi-channel notifications, exports, Power BI and an AI assistant.",
      },
      atsOnRails: {
        type: "AI tool",
        summary:
          "Paste a job description, get a per-term verdict against evidence-backed facts: already covered, earnable, or a real gap it refuses to fake.",
        details:
          "Paste a job description and get a **per-term verdict** against facts that have evidence behind them: already covered by a bullet, **earnable** (a fact describes that work and simply does not use the word), or a real **gap** — which the tool reports instead of writing it anyway. Coverage is read from bullet prose only, because a keyword sitting in a skills list scores nothing against an LLM matcher: measured **76% → 98%** by moving five terms into experience bullets.",
      },
      telehealth: {
        type: "Microservices",
        summary:
          "Two services, two databases: a Rails GraphQL API for scheduling and records, and a Django service for billing with idempotent Stripe webhooks.",
      },
      shelflog: {
        type: "Full Stack",
        summary:
          "Expiry-date tracking for supermarket shelves: barcode search, per-product status and web push alerts. Originally intended for Muffato.",
        details:
          "**Expiry-date tracking** for supermarket shelves, in **Rails**: barcode or name search, categories, product photo and **web push** alerts, with a per-product status (expired, expiring soon, ok, safe) driven by configurable thresholds. Originally intended for **Muffato**.",
      },
      interviewSim: {
        type: "AI app",
        summary:
          "AI interview simulator: a Claude-powered interviewer runs the session in real time and hands back structured feedback.",
      },
      interviewCopilot: {
        type: "AI tool",
        summary:
          "Live interview copilot: listens, transcribes and starts drafting the answer before the question ends, with your résumé and the job as context.",
      },
      railsGuard: {
        type: "Claude Code plugin",
        summary:
          "Blocks the irrecoverable Rails commands an agent might run — db:drop, db:reset, destructive runners — and asks first on the risky ones.",
      },
      railsContext: {
        type: "Claude Code plugin",
        summary:
          "Context engineering for Rails: hands the agent a curated digest of columns, associations, validations and routes instead of whole schema and model files.",
      },
      swarmPlugin: {
        type: "Claude Code plugin",
        summary:
          "Runs the same prompt across N isolated git worktrees in parallel, then lets you diff each attempt and merge the best one — or open a PR.",
      },
      systemDesignPrimer: {
        type: "Lab",
        summary:
          "A Rails 8 lab for system design: cache, N+1, indexes, hot keys, write contention and queues — each layer has to prove itself in a measured number.",
      },
      brasilApiRuby: {
        type: "Library",
        summary:
          "My first open-source step: an early Ruby wrapper for BrasilAPI — learning to publish packages and code in public.",
        details:
          "Early-career attempt to build a **Ruby wrapper** for **BrasilAPI**. The code was naive at the time, but it was my **first dive into open-source** — publishing public code, dealing with packaging and learning from the experience.",
      },
    },
  },
  testimonials: {
    title: "TESTIMONIALS",
    subtitle: "What people say about my work",
    prevLabel: "Previous testimonial",
    nextLabel: "Next testimonial",
    goToLabel: "Go to testimonial",
    items: [
      {
        quote:
          "I worked with Washington on the Compras project, where he played a key role in raising the application's technical quality. Beyond shipping improvements to the project, he structured an automated testing initiative that took the RSpec suite's coverage from 35% to 89%. Along the way, Washington mentored me — creating and organizing testing cards in Trello, explaining which scenarios had to be covered and reviewing my implementations. His guidance helped me better understand RSpec, testing best practices and why preventing regressions matters. Washington showed not only technical knowledge but also organization, patience and a real ability to share what he knows. His leadership was essential to making the project more reliable and to my own professional growth.",
        name: "Developer · Was Advisory",
        role: "RSpec mentorship · Compras project",
      },
      {
        quote:
          "I had the chance to be mentored by Washington as the Compras project evolved. He was put in charge of guiding two developers in creating and improving the system's automated tests, organizing the work through Trello cards and following our technical progress. Washington took part directly in the changes to the project and led the work that raised the RSpec suite's coverage from 35% to 89%. During the mentorship he helped us spot the scenarios that mattered, write more reliable specs and understand how tests protect business rules against regressions. His work combined technical execution, leadership and knowledge sharing. Besides significantly improving the project's quality, Washington created an environment where we could grow as developers and take on tasks with more autonomy.",
        name: "Developer · Was Advisory",
        role: "RSpec mentorship · Compras project",
      },
    ],
  },
  spokenLanguages: {
    title: "LANGUAGES",
    items: [
      { language: "PORTUGUESE", level: "NATIVE" },
      { language: "ENGLISH", level: "B2 (TECHNICAL)" },
    ],
  },
  resume: {
    title: "RESUME",
    subtitle: "Career timeline & downloadable CV",
    downloadCta: "DOWNLOAD PDF",
    timelineTitle: "CAREER TIMELINE",
    openSourceTitle: "PROJECTS & OPEN SOURCE",
    privateRepoLabel: "PRIVATE REPO",
  },
  contact: {
    kicker: "GET IN TOUCH",
    badge: "24H RESPONSE",
    headline: "GOT AN IDEA? LET'S BUILD IT TOGETHER",
    headlineEmphasis: ".",
    subheadline:
      "Open to freelance projects, consulting and full-time opportunities.",
    ctaPrimary: "START A CONVERSATION",
    ctaSecondary: "VIEW RESUME",
    title: "LET'S TALK",
    body:
      "Got a project in mind or an opportunity to discuss? I'd love to hear from you.",
    emailLabel: "Email me",
    inboxLabel: "Inbox",
    socialLabel: "Find me online",
    available: "AVAILABLE",
    channelsTitle: "CHANNELS",
    metaLocation: { label: "LOCATION", value: "BRAZIL, GMT-3" },
    metaResponse: { label: "RESPONSE TIME", value: "WITHIN 24H" },
    metaStatus: { label: "STATUS", value: "AVAILABLE" },
    form: {
      title: "NEW MESSAGE",
      status: "DRAFT",
      nameLabel: "NAME",
      namePlaceholder: "Your name",
      emailLabel: "EMAIL",
      emailPlaceholder: "your@email.com",
      subjectLabel: "SUBJECT",
      subjectPlaceholder: "What's this about?",
      messageLabel: "MESSAGE",
      messagePlaceholder:
        "Have a project in mind or a question to ask? Send me a message — I'll reply within 24 hours.",
      sendCta: "SEND MESSAGE",
    },
  },
  footer: "built with next.js + tailwind",
  toggle: {
    switchLang: "Switch language",
    switchTheme: {
      toLight: "Switch to light mode",
      toDark: "Switch to dark mode",
    },
  },
  meta: {
    aboutMe: {
      title: "About Me — Washington Pereira",
      description:
        "Full-stack developer specialized in Ruby on Rails. Professional experience, context and stack.",
    },
    skills: {
      title: "Skills — Washington Pereira",
      description:
        "Technical skills: Ruby on Rails, PostgreSQL, Redis, Sidekiq, React, Next.js and more.",
    },
    resume: {
      title: "Resume — Washington Pereira",
      description: "Career timeline and downloadable resume PDF.",
    },
    contact: {
      title: "Contact — Washington Pereira",
      description: "Get in touch with Washington Pereira, full-stack developer.",
    },
    swarm: {
      title: "Swarm — Agent Development Environment",
      description:
        "A desktop IDE for coding agents: 1–4 Claude Code or Codex agents in parallel Git worktrees, live PTYs, diff review with per-line comments, merge or PR.",
    },
    obrahub: {
      title: "ObraHub — labor tracking and billing for Engemil",
      description:
        "Case study: the Rails 8 monolith built for Engemil that replaces a paper-to-spreadsheet-to-retyping cycle with spreadsheet import, live package balances and a byte-identical Excel billing export.",
    },
  },
  swarm: {
    hero: {
      kicker: "// PRODUCT — FEATURED",
      title: "SWARM",
      tagline: "Agent Development Environment",
      subtitle:
        "A desktop IDE for coding agents. Run 1–4 Claude Code or Codex agents in parallel Git worktrees, watch each one in a live PTY, review the diff with per-line comments, then merge or open the PR — all in one window.",
      ctaGithub: "View on GitHub",
      ctaCli: "CLI plugin",
      agentLabel: "agent",
    },
    pty: {
      kicker: "// 02 — LIVE",
      title: "Every task plans before it codes.",
      subtitle:
        "A task is born pending, with no worktree — creating one costs neither disk nor money. Start creates the worktree, the planner writes the plan and exits, and only then does on_exit bring up the coder. No non-empty plan, no coder.",
      promptLabel: "prompt",
      promptLine: "add cursor pagination to DealsController#index",
      windowLabel: "swarm — task #142 — agent pane",
      lines: [
        { kind: "sys", text: "task #142 · pending — no worktree yet" },
        { kind: "sys", text: "start: git worktree add .swarm/worktrees/a3f2  branch swarm/cursor-pagination" },
        { kind: "ok", text: "worktree ready · PTY registered (task=142 pane=agent)" },
        { kind: "sys", text: "" },
        { kind: "task", text: "[planner · claude-code] reading routes.rb, deals_controller.rb, deal_spec.rb" },
        { kind: "task", text: "[planner · claude-code] writing plan to disk" },
        { kind: "ok", text: "[planner] exited 0 — plan written, 34 lines" },
        { kind: "sys", text: "" },
        { kind: "sys", text: "on_exit: plan is non-empty → handing off to coder in the same pane" },
        { kind: "task", text: "[coder · codex] editing deals_controller.rb, deal.rb, deal_spec.rb" },
        { kind: "ok", text: "[coder] +48 −12 across 3 files" },
        { kind: "sys", text: "" },
        { kind: "sys", text: "process status: running → exited. the user status is yours to set." },
      ],
    },
    compare: {
      kicker: "// 03 — REVIEW",
      title: "Attempts side by side, as tabs.",
      subtitle:
        "The screen is a tree of splits written into the URL. Any surface becomes a tab — the agent, a terminal, the chat, the diff, the preview, a file, or another attempt at the same prompt. That is how two different CLIs on one prompt end up next to each other.",
      hint: "?panes=agent;(diff|preview)   ·   ; splits · | stacks · , tabs · () nests",
      mergeLabel: "Merge",
      discardLabel: "Discard",
      viewDiffLabel: "Open diff",
      attempts: [
        {
          id: "cursor-pagination-a3f2",
          agent: "claude-code",
          elapsed: "2m14s",
          files: "3 files · +48 −12",
          preview: "def index\n  @deals = policy_scope(Deal).paginate(cursor: params[:cursor])\n  render json: {\n    data: @deals,\n    next: @deals.next_cursor,\n  }\nend",
        },
        {
          id: "cursor-pagination-b7c1",
          agent: "codex",
          elapsed: "1m58s",
          files: "2 files · +36 −8",
          preview: "def index\n  scope = policy_scope(Deal).order(:id)\n  @deals = scope.after(params[:cursor]).limit(25)\n  render json: DealSerializer.wrap(@deals)\nend",
        },
        {
          id: "cursor-pagination-9d0e",
          agent: "claude-code",
          elapsed: "3m01s",
          files: "5 files · +72 −18",
          preview: "def index\n  paginator = CursorPaginator.new(\n    scope: policy_scope(Deal),\n    cursor: params[:cursor],\n    per: 25,\n  )\n  render json: paginator.page\nend",
        },
        {
          id: "cursor-pagination-c204",
          agent: "codex",
          elapsed: "2m47s",
          files: "4 files · +52 −22",
          preview: "def index\n  @deals = DealQuery\n    .for(current_user)\n    .cursor_page(params[:cursor])\n  render json: @deals\nend",
        },
      ],
    },
    features: {
      kicker: "// 04 — CAPABILITIES",
      title: "An environment, not a wrapper around one CLI.",
      subtitle: "Eight things it does, all on your machine.",
      items: [
        {
          title: "Planner, then coder",
          description:
            "The handoff is a PTY phase, not a job: the planner runs in the same pane, writes the plan and exits, and on_exit starts the coder pointed at it. “The planner failed” never turns into “code in the dark”.",
        },
        {
          title: "Claude Code and Codex",
          description:
            "Two adapters behind one map — 1 to 4 agents in parallel, each in its own worktree and branch. A new CLI is a map entry plus a class; the validation and the form follow from there.",
        },
        {
          title: "Real PTYs",
          description:
            "PTY.spawn per pane, registered in memory by (task, pane), streamed base64 over ActionCable. Stop escalates HUP → TERM → KILL, and scrollback flushes to disk every 5s so an abrupt death loses at most 5 seconds.",
        },
        {
          title: "Panes live in the URL",
          description:
            "The layout is a tree of splits serialized into the query string. Switching tabs is reordering, closing is removing, splitting is inserting — every action is a link, so reload, back button and bookmarks all just work.",
        },
        {
          title: "Diff review that talks back",
          description:
            "Committed, uncommitted and untracked against merge-base, parsed server-side. Comment on any file:line and the comment goes back to the agent as an instruction.",
        },
        {
          title: "PR with real evidence",
          description:
            "The body is written server-side by a headless agent from the real diff, the original prompt and the actual check results — “no check command” and “never ran” stay distinct from a real result. The golden path is recorded in headless Chrome and embedded as a GIF.",
        },
        {
          title: "Preview and Design Mode",
          description:
            "The worktree's app boots in a PTY behind a proxy whose port detection does not rely on the stack honoring $PORT. Design Mode annotates the live screen like Figma comments — the element's live state is serialized from the DOM and re-rendered with the user's session, not screenshotted.",
        },
        {
          title: "Loops with guards",
          description:
            "Turn, Goal, Time and Proactive, all behind the same non-negotiable guards: cost ceiling, attempt ceiling, global kill switch, judgment timeout, HMAC-SHA256 over the raw webhook body. Trello (bidirectional), Linear and Jira on the tracker side.",
        },
      ],
    },
    architecture: {
      kicker: "// 05 — INSIDE",
      title: "What happens when you press Start.",
      subtitle:
        "A pending task has no worktree. Start creates it, the planner hands off to the coder in the same PTY, and everything the agent produces streams back through a single Puma process — the registry lives in memory, so WEB_CONCURRENCY is forbidden by design.",
      nodes: [
        { id: "task", label: "Task · pending" },
        { id: "start", label: "Start → worktree" },
        { id: "planner", label: "Planner (PTY)" },
        { id: "adapters", label: "Claude Code · Codex" },
        { id: "coder", label: "Coder agent" },
        { id: "cable", label: "PTY + ActionCable" },
        { id: "workspace", label: "Panes · diff" },
        { id: "ship", label: "Merge / PR" },
      ],
    },
    stack: {
      kicker: "// 06 — STACK",
      title: "Built on.",
      items: [
        "Rails 8.1",
        "Hotwire",
        "Turbo",
        "Stimulus",
        "Importmap",
        "Tailwind v4",
        "Propshaft",
        "SQLite",
        "ActionCable (async)",
        "PTY.spawn",
        "Rouge",
        "xterm.js",
        "CodeMirror 6",
        "Ferrum",
        "Tauri 2",
        "Rust",
        "WebView2",
        "GitHub CLI",
      ],
    },
    roadmap: {
      kicker: "// 07 — MILESTONES",
      title: "What is already in.",
      subtitle: "Everything below is shipped and running — this is the tool as it exists, not a plan.",
      items: [
        {
          marker: "01",
          title: "Orchestrator",
          description: "Isolated worktrees and branches, live PTY streaming, diff review, merge / discard / PR.",
        },
        {
          marker: "02",
          title: "Compare",
          description: "N attempts at the same prompt reviewed side by side, per-line comments flowing back into the agent.",
        },
        {
          marker: "03",
          title: "Workspace",
          description: "Splittable panes serialized into the URL, with the explorer, editor, preview, chat and any file as draggable tabs.",
        },
        {
          marker: "04",
          title: "Two CLIs, one planner",
          description: "Claude Code and Codex adapters, and a planner phase every task goes through before any code is written.",
        },
        {
          marker: "05",
          title: "PR with evidence",
          description: "Body written by a headless agent from the real diff and real check results; golden path recorded in headless Chrome as an inline GIF.",
        },
        {
          marker: "06",
          title: "Design Mode",
          description: "Annotate the running app like a Figma comment — the element is serialized from the live DOM and re-rendered with the user's session.",
        },
        {
          marker: "07",
          title: "Loops and trackers",
          description: "Turn, Goal, Time and Proactive behind cost, attempt and kill-switch guards, plus Trello, Linear and Jira integrations.",
        },
        {
          marker: "08",
          title: "Desktop",
          description: "Tauri 2 window on a fixed port with its own process group; WebView2 on Windows, with Rails running inside WSL.",
        },
      ],
    },
    story: {
      kicker: "// 08 — STORY",
      title: "How it started.",
      body: [
        "I wanted an IDE for coding agents, not a wrapper around one. Register a local repo, fire a prompt, and 1 to 4 agents go at it in parallel — each in its own Git worktree and branch, each in a live PTY, with the file explorer, the editor, the running app, the chat and the diff all in the same window.",
        "It is a Rails 8 app on Hotwire and SQLite, single-process by design: the PTY registry lives in Puma's memory, so WEB_CONCURRENCY is forbidden — two processes mean two registries and a UI showing an empty terminal for an agent that is very much running. Tauri 2 wraps it as a native window; on Windows that is WebView2 with Rails running inside WSL.",
        "One rule ended up running through the whole thing: unknown must never become a value. A model missing from the price table pays the most expensive row. An unreadable transcript returns :unknown and stops the loop instead of counting as zero spent. And a prompt that assembles evidence has to tell the model where the hole is — because a prompt without evidence does not answer “I don't know”, it answers with a plausible invention.",
      ],
      inspiredByLabel: "View source on GitHub",
    },
    finalCta: {
      kicker: "// 09 — TRY IT",
      title: "Point it at a repo and press Start.",
      subtitle:
        "Swarm runs on your machine, against your local repos. The Claude Code plugin ports the same fan-out into the CLI.",
      ctaGithub: "github.com/wasdevv/swarm",
      ctaCli: "swarm-plugin (CLI)",
      ctaDocs: "Read the docs",
    },
  },
  obrahub: {
    hero: {
      kicker: "// CASE STUDY — CLIENT SYSTEM",
      title: "OBRAHUB",
      tagline: "Labor tracking and billing for industrial field work",
      subtitle:
        "Built for Engemil, an industrial maintenance and assembly contractor in Mogi Guaçu, Brazil — and shaped from the start to generalize to a sector that all runs the same cycle. It replaces paper → spreadsheet → retyping with one flow: import the spreadsheet engineering already fills in, keep every work package's balance as a live account, and export the monthly billing document byte-identical to the format the client signs.",
      badges: ["Rails 8 monolith", "In production", "Active development"],
      ctaContact: "Talk about this project",
    },
    problem: {
      kicker: "// 01 — THE PROBLEM",
      title: "Money escaped in the retyping.",
      subtitle:
        "Engemil allocates crews inside its largest client's plant, and every month it has to prove — job by job, person by person, day by day — how many hours were worked and what they cost. That document is signed by both sides. Before the system, producing it looked like this:",
      beforeLabel: "The old cycle",
      beforeSteps: [
        "the foreman writes on paper who worked, in what role, for how many hours",
        "someone types that into a tracking spreadsheet",
        "at month end, someone retypes it into a second spreadsheet — the billing one, in the format the client accepts",
        "the client checks it cell by cell and signs",
      ],
      items: [
        {
          title: "Retyping is where money escapes",
          description:
            "An hour that never got transcribed never got billed, and nobody finds out — because there is nothing to compare it against.",
        },
        {
          title: "There is no balance",
          description:
            "The client approves work packages with budgeted hours. Knowing how much was left in a package meant adding up entries by hand.",
        },
        {
          title: "The client's format is law",
          description:
            "The billing spreadsheet has an exact shape — font, colour, number format, block position. A billing document that merely looks similar comes back.",
        },
      ],
    },
    rules: {
      kicker: "// 02 — HOW THE RULES GOT HERE",
      title: "Nothing here came from a written spec.",
      subtitle:
        "The system was drawn out in successive rounds of discussion, review and feedback with the person at Engemil who was responsible for producing all of this by hand — each round trading an assumption for a fact about the operation. The real artefacts served as the specification: the reference billing workbook, the engineering tracking spreadsheet, the master package sheet and the job register. Three rules that only ever surface in conversation with someone who has done the work:",
      items: [
        {
          title: "The job has no type",
          description:
            "The system briefly had Project#kind (ase | hh | pacote). It was wrong: the same job has package days, hourly days and extra-service days. What declares the nature of the work is the daily report, not the job record. The column was removed.",
        },
        {
          title: "Two of the codes are not hours at all",
          description:
            "FE and FO are codes, not time. And the night-shift differential is a 45% uplift on the rate, not time worked — adding it to the hours inflated the billing.",
        },
        {
          title: "74 of 84 packages have no date",
          description:
            "They carry the word “UNIFIED” where the issue date should be. The field became optional because of that, not out of modelling elegance.",
        },
      ],
    },
    domain: {
      kicker: "// 03 — THE DOMAIN",
      title: "A job, a day, a line.",
      subtitle:
        "Ten domain tables. The whole operation fits in one model, which is why it is one application and not several.",
      tree: `User (admin | supervisor | foreman)
 └─ ProjectSupervisor ── Project ── Package        (the budgeted slice)
                            └────── Rdo            (the day of work)
                                     └── WorkEntry (the line: who, role, hours)
Employee ── Position (role, hourly rate)
ImportBatch ── ImportError`,
      entities: [
        {
          name: "Project · Package",
          description:
            "Project is the job. Package is the slice the client asked to be quoted on its own — it carries estimated hours, sale value and billed value.",
        },
        {
          name: "Rdo",
          description:
            "The daily work report: job, period, who signs, description, photo. It declares the nature of the day — package (draws down a Package), hourly (draws down nothing), or authorised extra service, identified by its own code, which is the code the invoice cites.",
        },
        {
          name: "WorkEntry",
          description: "The line inside the report: person, role, date, hours, hour type, photo.",
        },
        {
          name: "Employee",
          description:
            "The person in the field — deliberately not a User. A crew of hundreds cannot become hundreds of logins nobody remembers to revoke.",
        },
        {
          name: "Measurement",
          description:
            "Not a table. A read object that turns a period's hours into an invoice, at today's prices.",
        },
      ],
      hoursTitle: "The five hour types",
      hoursFactorLabel: "factor",
      hours: [
        { code: "hn", factor: "1.0", label: "regular hour" },
        { code: "fa", factor: "1.6", label: "overtime, factor A" },
        { code: "fb", factor: "2.0", label: "overtime, factor B" },
        { code: "an", factor: "0.45", label: "night differential — an uplift, not time" },
        { code: "fd", factor: "1.0", label: "compensatory rest" },
      ],
      balanceTitle: "Balance is a query, not a column",
      balanceBody:
        "Used hours, remaining hours, progress and value-to-bill all come out of a query at read time. A 663-hour package that receives a 9-hour report shows 654 hours remaining immediately, with no column being written — and therefore none of the classic risk of a stored total drifting from the lines that make it up.",
    },
    architecture: {
      kicker: "// 04 — ARCHITECTURE",
      title: "One process, one database, one deploy.",
      subtitle:
        "It is a Rails monolith, and that is a choice rather than a limitation. The data is tightly related — an hour entry only exists inside a daily report, which only exists inside a job — and there are no two teams moving at different speeds. Splitting it into services would buy distributed transactions for a company that closes one billing cycle a month.",
      items: [
        {
          title: "Models",
          description: "The rules that always hold — validation, scoping, balance calculation.",
        },
        {
          title: "Policies · 12",
          description:
            "Who can see and do what, per record. The same policy scope that filters the list filters the autocomplete and the dashboard — a counter that sums hours the viewer may not read is a leak wearing the face of a metric.",
        },
        {
          title: "Query objects",
          description:
            "Measurement, ProjectWorkReport, DashboardReport, RdoQuery — reads that do not deserve to be models.",
        },
        {
          title: "Importers · 12 and exporters · 5",
          description:
            "One importer per input file format; exporters for the billing workbook, the covering letter and the printable daily report.",
        },
        {
          title: "Three roles",
          description:
            "Admin does everything and is the only one who grants access or sees package money. Supervisor gets the whole operation minus user creation. The foreman is in the field: signs the report, sees only where they are assigned.",
        },
        {
          title: "No background processing — on purpose",
          description:
            "The daily report is closed inside the request that saves it, and imports are pushed by the page itself, a chunk per submit. A worker polling the database would keep the container from sleeping, so the app would stay up around the clock waiting for one import a month.",
        },
      ],
      stackTitle: "Built on",
      stack: [
        "Rails 8",
        "PostgreSQL",
        "Hotwire",
        "Turbo",
        "Stimulus",
        "Importmap",
        "Tailwind",
        "Devise",
        "Pundit",
        "RSpec",
        "Docker",
        "Railway",
      ],
    },
    decisions: {
      kicker: "// 05 — DECISIONS WORTH TELLING",
      title: "The parts that cost the most to get right.",
      subtitle: "Four problems where the obvious implementation is the wrong one.",
      items: [
        {
          title: "The client's workbook, cell by cell",
          description:
            "“Identical” does not mean “similar”. The work was unzipping the reference .xlsx and reading the XML, because the eye does not catch what breaks: fills use theme colours with tint rather than RGB, so reading only the RGB attribute sees no fill at all; money uses the ACCOUNTING format, which is what pins the currency symbol to the left edge and the number to the right; and in the summary sheet each hour type occupies two columns, so writing into consecutive columns puts every value two cells to the left. There is a test that strictly parses the generated styles.xml, because an unescaped quote in a format code produces a file Excel refuses to open — and neither the reading library nor the content tests notice.",
        },
        {
          title: "Importing twice must not duplicate",
          description:
            "The idempotency key is a SHA-256 of the row: job, foreman, role, date and hour type. An upsert updates the same record instead of creating a second one. Without the hour type in the digest, a regular and an overtime entry on the same day collided and one vanished. A detail that cost real time: the digest carries the package id only when there is one — adding it unconditionally would change the digest of everything already stored, and the next upload of the same file would create a copy of every line.",
        },
        {
          title: "The importer creates records, but never invents money",
          description:
            "Missing jobs, roles, employees and users are created, and the screen says which ones — creating silently is what turns a misspelled role into a permanent record nobody can trace. A missing package, though, rejects the line: packages carry estimated hours and a sale value, so inventing one would write a budget nobody approved.",
        },
        {
          title: "The phone is not a smaller version of the screen",
          description:
            "The foreman is on site with a phone. A seven-column table behind horizontal scroll technically fits, and nobody drags to the status column without a header in view to know where they are. Below 640px every table becomes a labelled card, with the label coming from each cell's data attribute. A test fails any new table that skips it, because such a table would pass every request spec and still disappear on the phone.",
        },
      ],
    },
    numbers: {
      kicker: "// 06 — NUMBERS",
      title: "Measured, not estimated.",
      subtitle: "Repository counts as of 30 Aug 2026, and figures from real use.",
      stats: [
        { value: "899", label: "test examples, 0 failures" },
        { value: "10", label: "domain tables (+3 Active Storage)" },
        { value: "17 · 15 · 12", label: "models · controllers · policies" },
        { value: "19", label: "importers and exporters" },
        { value: "72", label: "views" },
        { value: "37", label: "migrations" },
        { value: "~22.7k", label: "lines across app/ and spec/" },
        { value: "129", label: "commits, 8–30 Aug 2026" },
      ],
      measuredTitle: "From real use",
      measured: [
        { value: "11,551 h", label: "of labour closed in a single month, each tied to the job, role and package that paid for it" },
        { value: "216", label: "daily reports built from the spreadsheet engineering already filled in — nobody typed a report" },
        { value: "3 s", label: "to import 1,395 entries, check them against the register and reject what does not match" },
        { value: "24", label: "sheets in the billing workbook, in the format the client signs" },
      ],
    },
    status: {
      kicker: "// 07 — WHERE IT STANDS",
      title: "In production, and honestly unfinished.",
      subtitle:
        "A portfolio that only lists what worked does not survive the next question. Scale tests count queries: a listing has to cost the same with ten records and with ten thousand — a real import file reaches 8,504 daily reports, which is why batch closing is one SQL statement per slice rather than a walk record by record.",
      doneTitle: "Done and in use",
      done: [
        "registers for jobs, packages, employees, roles and users",
        "daily reports, entered by hand or in bulk from the programming sheet",
        "spreadsheet import with a rejection report",
        "billing calculated and exported to Excel in the client's exact format",
        "printable daily report sheet",
        "dashboard",
        "mobile pass over the whole system",
      ],
      openTitle: "Still open",
      open: [
        "the PACKAGE lines of the billing document are not generated by the exporter yet — the data already exists, the layout mapping does not",
        "two jobs remain in the repository with nothing enqueueing them: either async comes back on purpose, or they go",
        "no browser tests — real horizontal scroll and mobile Safari zoom are still a manual check",
        "standardising the register screens under an inherited CRUD is decided and not started",
      ],
      directionTitle: "Where it is headed",
      direction:
        "It was built for one contractor, but the cycle it replaces is not specific to one: crews allocated inside a client's plant, hours proven month by month, a billing document in a format the client dictates. Generalizing it into a product for that sector is the direction — the multi-client work has not started, and nothing here is sold to a second company yet.",
      ctaLabel: "Talk about this project",
    },
  },
}

const pt: Dict = {
  profile: {
    nameLine1: "WASHINGTON",
    nameLine2: "CARDOSO.",
    role: "Desenvolvedor Full-Stack",
    yearsLabel: "4 anos",
    location: "Brasil",
    tagline:
      "Especialista em Ruby on Rails construindo plataformas web escaláveis com foco em performance, código limpo e entregar valor de verdade.",
    availableLabel: "disponível para projetos",
    downloadResume: "BAIXAR CURRÍCULO",
  },
  nav: {
    aboutMe: "SOBRE_MIM",
    skills: "SKILLS",
    resume: "CURRÍCULO",
    contact: "CONTATO",
    swarm: "SWARM",
    obrahub: "OBRAHUB",
  },
  sidebar: {
    contactPhone: "+55 17 98843-2434",
    contactPhoneLabel: "Telefone",
    contactEmailLabel: "Email",
    contactLinkedInLabel: "LinkedIn",
    contactGithubLabel: "GitHub",
  },
  aboutMe: {
    intro: {
      eyebrow: "Quem eu sou",
      headline: "Transformo problemas complexos em ",
      headlineEmphasis: "software útil.",
      devRb: {
        filename: "dev.rb",
        codeKeys: {
          name: "nome",
          stack: "stack",
          location: "local",
          focus: "foco",
          monster: "monster",
        },
        focus: "shipar produtos",
      },
      paragraphs: [
        "Engenheiro de Software Full Stack com 4 anos de experiência no desenvolvimento de aplicações escaláveis em Ruby on Rails e plataformas SaaS multi-tenant.",
        "Experiência em arquitetura de backend, APIs REST, testes automatizados, CI/CD, observabilidade e otimização de desempenho.",
        "Histórico comprovado na entrega de melhorias mensuráveis em latência, confiabilidade e produtividade da equipe de desenvolvimento, construindo software de alta qualidade com arquitetura limpa e práticas modernas de engenharia de software.",
      ],
      stats: [
        { value: "4", label: "anos em Rails" },
        { value: "3,5s → 180ms", label: "redução de latência p99" },
        { value: "63.000×", label: "queries mais rápidas em 14M+ linhas" },
        { value: "80h → 7min", label: "pipeline de export CSV" },
        { value: "35% → 85%", label: "cobertura de testes via CI/CD" },
        { value: "99,9%", label: "uptime em produção" },
      ],
      facts: {
        name: "Nome",
        role: "Cargo",
        focus: "Foco",
        location: "Local",
      },
    },
    experience: {
      title: "EXPERIÊNCIA PROFISSIONAL",
      rolesLabel: "VAGAS",
      items: [
        {
          role: "DESENVOLVEDOR FULL STACK",
          company: "Was Advisory",
          period: "Ago 2023 — Presente",
          isCurrent: true,
          summary:
            "Construção de sistemas SaaS multi-tenant com Rails, PostgreSQL, Redis e React. Reduzi um endpoint crítico de 3,5 segundos para 180 milissegundos e mantive fluxos confiáveis rodando em escala.",
          tags: ["Ruby on Rails", "PostgreSQL", "React", "Redis"],
          bullets: [
            "Otimizei endpoint crítico reduzindo latência de **3,5s para 180ms** (-94%) através de identificação de queries **N+1**, implementação de **eager loading** e **cache Redis em 3 camadas**, impactando **10k+ requisições/dia**.",
            "Rearquitetei o pipeline de exportação de relatórios CSV, substituindo o processamento síncrono por uma arquitetura assíncrona com **Sidekiq**, **PostgreSQL COPY**, streaming e **Amazon S3**, reduzindo o tempo de exportação de 1,77M registros de ~80h para 7min (~600×).",
            "Otimizei consultas PostgreSQL em uma base com **14M+ registros**, projetando índices compostos e refinando estratégias de consulta que reduziram o tempo de resposta de **12,7s para 0,2ms** (~63.000×).",
            "Projetei e implementei do zero o módulo de **Extrato de Débitos** com busca dinâmica sobre base com milhões de parcelas de dívida ativa, sustentando **17 entregas incrementais em 5 meses** como autor principal; eliminei N+1 em associações polimórficas (não resolvíveis por eager loading do Rails) via preload manual, substituí carregamento de IDs em memória por subqueries SQL e encerrei erros 500 recorrentes em produção.",
            "Garanti consistência financeira centavo a centavo entre três telas independentes que divergiam em produção (**Extrato de Débitos**, **Tela de Atendimento** e **Maiores Devedores**), implementando um resolver de composição de totais compartilhado que tornou o débito do contribuinte auditável linha a linha.",
            "Reduzi o custo de escrita em tabelas de alto volume removendo **33 índices não utilizados** e adicionando índices únicos em tabelas de junção, via migrations concorrentes (`algorithm: :concurrently`) aplicadas sem downtime.",
            "Diagnostiquei e corrigi race condition que emitia números de protocolo duplicados em sistema de processos administrativos municipais (mesmo protocolo gerado 3× sob duplo-clique), substituindo `SELECT MAX(number)+1` sem lock por **pg_advisory_xact_lock** escopado por departamento e ano, preservando concorrência entre departamentos, com guarda de transação explícita e validação de unicidade como segunda camada de defesa.",
            "Arquitetei e implementei a integração com a API externa (**SINAL**), documentada em **OpenAPI/Swagger**, que processava **100k+ registros/mês** em ambiente **multi-tenant**, aplicando **Faraday**, **Circuit Breaker distribuído (Stoplight)**, **Retry com Exponential Backoff**, **Outbox Pattern**, advisory locks no **PostgreSQL** e **Sidekiq** para processamento assíncrono, o que sustentou **99,9% de disponibilidade** e zero duplicação de cadastros mesmo com o fornecedor instável.",
            "Implementei suítes de testes automatizados com **RSpec** e **Capybara**, aumentando a cobertura de testes de **35% para 85%** e reduzindo bugs em produção graças a pipelines de **CI/CD** robustos, com **RuboCop** e **Brakeman** para análise estática e segurança.",
            "Evoluí o módulo crítico de **Acordos de Dívida Ativa** em arquitetura **multi-tenant** atendendo **50+ municípios**, durante a migração do sistema do **Rails 7 para o Rails 8**, estruturado com **Devise**, **Service Objects** e **Form::Builder** para encapsular regras fiscais complexas, entregando **15+ customizações específicas por prefeitura via feature flags**, o que reduziu em **60% o tempo de entrega** de demandas municipais, zerou regressões cross-tenant e cortou em **59% os chamados de suporte** relacionados ao módulo.",
            "Monitorei aplicações em produção utilizando ferramentas de observabilidade (**Datadog**), identificando e resolvendo incidentes de forma proativa antes que afetassem o usuário final.",
            "Atuação prática em **Kubernetes** em produção (acesso via **Pritunl VPN**), utilizando **ArgoCD** (GitOps), **Headlamp** e **Grafana** para deploy contínuo, gestão de cluster e monitoramento de incidentes em ambiente de alta disponibilidade.",
            "Desenvolvi o **ObraHub**, o sistema de apontamento e medição da **Engemil**, prestadora de manutenção e montagem industrial, especificado em rodadas sucessivas de review e feedback com o responsável por produzir todo o processo na mão — um monólito **Rails 8 + PostgreSQL + Hotwire** (Devise, Pundit, 12 policies, 19 importadores/exportadores) que substituiu o ciclo papel → planilha → redigitação. Importa a planilha que a engenharia já preenche, com **digest SHA-256 da linha** para `upsert_all` idempotente, de modo que reenviar o mesmo arquivo nunca duplica; mantém o saldo de cada pacote como **query, não coluna gravada**, então um pacote de 663h mostra o saldo novo no instante em que o RDO entra; e exporta a medição mensal **idêntica byte a byte** ao arquivo de referência do cliente — fills com cor de tema e tint, formato numérico CONTÁBIL e o Resumo com duas colunas por tipo de hora, com teste que faz parse estrito do `styles.xml` gerado. **899 exemplos, 0 falhas**; em uso real, **11.551h** fechadas em um mês e **1.395 apontamentos** importados e validados em **3s**.",
            "Desenvolvi o **shelflog**, PWA em **Rails** para controle de validade em gôndola, pensado para uso no **PAS do Muffato** (uma grande rede de supermercados do Brasil): busca por código de barras ou nome, status por produto a partir de limites configuráveis e um job horário no **Solid Queue** que dispara alertas via **web push** de produtos vencidos e a vencer.",
            "Desenvolvi o **Swarm**, um Agent Development Environment em **Rails 8 + Hotwire + SQLite** que roda **1 a 4 agentes Claude Code ou Codex em paralelo**, cada um em worktree Git e branch isolados, transmitidos ao vivo de um **PTY** real via **ActionCable**. Toda task passa por uma **fase de planner antes de escrever qualquer código** — o planner roda no PTY, escreve o plano e sai, e o `on_exit` sobe o coder com o ponteiro pro plano, de modo que plano falho nunca vira código escrito no escuro. O workspace é uma **árvore de painéis divisíveis serializada na URL** (agente, terminal, chat, diff, preview, qualquer arquivo, ou outra tentativa do mesmo prompt como abas), com explorer de arquivos, editor **CodeMirror 6** e preview embutido do app rodando. A revisão de diff traz **comentários por linha que voltam para a sessão do agente**; o **corpo do PR é escrito no servidor por um agente headless** a partir do diff real e do resultado real dos checks, com o golden path gravado em **Chrome headless (Ferrum)** e embutido como GIF. Inclui ainda **Design Mode** (anotar o app vivo como comentário de Figma, mandando o estado vivo do DOM do elemento em vez de screenshot), quatro **agent loop patterns** (Turn/Goal/Time/Proactive) atrás de guardas de custo, tentativas e kill-switch com webhooks verificados por HMAC, e integrações com **Trello / Linear / Jira**. Single-process por design — o registry de PTYs vive na memória do Puma. Empacotado como app desktop nativo (**Tauri 2 + WebView2** no Windows, backend Rails rodando em **WSL**), com i18n completa em pt-BR e inglês.",
            "Publiquei uma trilogia de plugins para o **Claude Code** cobrindo entrada, saída e efeitos colaterais do agente: **lean-output** comprime outputs de **RSpec**, **RuboCop** e **Brakeman** em **-70% a -97% de tokens** com garantia zero-loss de falhas; **rails-context** injeta dossiê curado (colunas, índices, associações, validações e rotas) reduzindo drasticamente a superfície lida pelo modelo em vez de carregar `db/schema.rb` e models inteiros; **rails-guard** intercepta comandos Rails destrutivos (`db:drop`, `db:reset`, `rails destroy`, `runner` com `delete_all`) via hook `PreToolUse`, exigindo confirmação humana antes da execução.",
          ],
        },
        {
          role: "DESENVOLVEDOR FULL STACK",
          company: "GoTechDS",
          period: "Jun 2023 — Jul 2023",
          summary:
            "Contribuí com funcionalidades de autenticação e dashboard em um produto Rails já estabelecido, via code review e desenvolvimento colaborativo.",
          tags: ["Rails", "Devise", "Code Review"],
          bullets: [
            "Contribuí para a implementação de features do produto **Go Tech DS** em **Ruby on Rails** e **Devise**, seguindo cards priorizados no **Trello** dentro da arquitetura já definida pelo time.",
            "Desenvolvi funcionalidades no fluxo de **autenticação** (login, cadastro e recuperação de senha) e no dashboard, sob orientação técnica dos desenvolvedores mais experientes.",
            "Participei ativamente de **code reviews** e **pair programming**, ganhando ramp-up rápido em uma base de código nova e no fluxo do time.",
          ],
        },
        {
          role: "DESENVOLVEDOR FULL STACK",
          company: "Autônomo \\\\ Blogs & Micro-SaaS",
          period: "Nov 2022 — Mai 2023",
          summary:
            "Entrega ponta a ponta de landing pages, blogs e pequenos softwares — do levantamento e modelagem do banco até deploy e suporte.",
          tags: ["Full Stack", "Clientes", "Entrega"],
          bullets: [
            "Entrega ponta a ponta de **blogs, landing pages e mini-softwares** para clientes diretos — do levantamento à produção.",
            "Atuei como **único responsável por cada projeto**: requisitos, modelagem **PostgreSQL**, backend em **Ruby on Rails**, frontend, deploy e suporte.",
            "Configurei **pipelines de CI/CD**, domínios, SSL e monitoramento em cada projeto entregue.",
            "Lidei diretamente com **comunicação com cliente, negociação de escopo e precificação**, construindo relações de longo prazo com clientes recorrentes.",
            "Aprendi novas stacks sob demanda (**Stimulus**, **Tailwind**, **AWS S3**, gateways de pagamento) pra entregar o que cada projeto pedia.",
          ],
        },
      ],
    },
  },
  skills: {
    title: "SKILLS TÉCNICAS",
    subtitle: "Ferramentas e tecnologias que uso pra entregar",
    techTitle: "TECNOLOGIAS E FERRAMENTAS",
    techSubtitle:
      "Stack moderna, respaldada pelas melhores práticas do mercado — pra escalar e performar sob pressão.",
    allLabel: "TODOS",
    countSuffix: "TECHS",
    levelLabel: "Nível",
    levels: {
      ADVANCED: "Avançado",
      INTERMEDIATE: "Intermediário",
      FAMILIAR: "Familiarizado",
    },
    categories: {
      languages: "linguagens",
      frameworks: "frameworks & libs",
      databases: "bancos de dados",
      devops: "devops & cloud",
      testing: "testes & qualidade",
      architecture: "arquitetura",
    },
  },
  education: {
    title: "FORMAÇÃO",
    items: [
      {
        degree: "AWS SERVERLESS DEMONSTRATED",
        school: "Amazon Web Services (AWS)",
        period: "Emitido em set 2026 · Expira em set 2027",
      },
      {
        degree: "ANÁLISE E DESENVOLVIMENTO DE SISTEMAS — CURSANDO",
        school: "Wyden — São José do Rio Preto, SP",
        period: "2024 — 2026 (previsão dez/2026)",
      },
      {
        degree: "LEARN RAILS AND RUBY PROGRAMMING",
        school: "Udemy — John Elder",
        period: "2023",
      },
      {
        degree: "CURSO DE INGLÊS",
        school: "CNA — São José do Rio Preto (Downtown)",
        period: "2019",
      },
    ],
  },
  projects: {
    title: "PROJETOS",
    subtitle: "Algumas coisas que construí com tecnologias modernas",
    filters: {
      all: "Todos",
      web: "Aplicações web",
      backend: "Backend & sistemas",
      tools: "Dev tools & IA",
    },
    liveSite: "Ver no ar",
    viewCode: "Ver código",
    askAbout: "Privado — me pergunte",
    prev: "Anterior",
    next: "Próximo",
    pageLabel: "Página",
    items: {
      swarm: {
        type: "App desktop",
        summary:
          "Agent Development Environment que roda de 1 a 4 agentes de código em paralelo, cada um num git worktree isolado com PTY ao vivo, revisão de diff e merge num clique.",
        details:
          "Um **Agent Development Environment** em **Rails 8 + Hotwire** que roda **1 a 4 agentes de código em paralelo**, cada um no seu **git worktree** isolado com **PTY** real transmitido via **ActionCable**. Diff ao vivo com comentários por linha que voltam direto pra sessão do agente, grid `/compare` pra escolher a melhor tentativa, merge ou PR num clique, e build desktop nativo com **Tauri 2 + WebView2** rodando o backend Rails dentro do **WSL**.",
      },
      obrahub: {
        type: "Full Stack",
        summary:
          "Em produção na Engemil: transforma as planilhas que a engenharia já preenche em apontamento de horas, RDO e a medição que o cliente assina.",
        details:
          "**Atualmente em produção na Engemil.** Acompanha o trabalho executado em obras: cada obra tem seus encarregados vinculados, e cada um lança quantas horas trabalhou, em que cargo, em que dia, com foto opcional. O admin importa esses lançamentos em massa a partir de uma planilha **Excel** mais um zip com as fotos. **Rails 8.1**, **PostgreSQL**, **Hotwire**, **Devise + Pundit**, **Solid Cache** e **Active Storage** — sem bundler JS, sem fila.",
      },
      tally: {
        type: "Backend",
        summary:
          "Conciliação de retorno bancário: um motor Kotlin presta conta de cada linha — conciliada, em revisão, sem par ou rejeitada — e um console Rails mostra em EN e pt-BR.",
        details:
          "Concilia **arquivos de retorno bancário** contra recebíveis esperados e presta conta de cada linha: conciliada, aguardando revisão, sem correspondência ou rejeitada com motivo. Um motor em **Kotlin** decide e nunca emite texto pra humano — emite códigos estáveis que um console **Rails** renderiza em inglês e pt-BR. O que o motor não decide sozinho vai pra uma fila humana levando os candidatos e o motivo.",
      },
      pulse: {
        type: "API + Mobile",
        summary:
          "Monitoramento de uptime e heartbeat self-hosted: workers de checagem, detecção de incidentes, alerta por e-mail e app Expo com push.",
        details:
          "**Monitoramento de uptime e heartbeat** self-hosted — cola uma URL, ele checa num intervalo fixo e avisa quando cai. API em **Fastify + TypeScript** com workers **BullMQ** (check, reconcile, notify) sobre **PostgreSQL** e **Redis**, tudo de pé com um único `docker compose`. Tem app mobile em **Expo** com push notification e um importador **NDJSON** em streaming sobre `pg-copy-streams`.",
      },
      pipelineHq: {
        type: "Full Stack",
        summary:
          "CRM B2B multi-tenant em Rails 8.1 com Solid Queue, Cache e Cable, auth nativa com 10 camadas de hardening e um ADR por decisão.",
        details:
          "**CRM B2B multi-tenant** full-stack em **Rails 8.1.3** — pipeline de vendas no estilo Pipedrive/HubSpot. Usa **Solid Queue / Solid Cache / Solid Cable** (zero Redis, zero Sidekiq), **Hotwire** (Turbo + Stimulus), **Tailwind v4** e **auth nativa do Rails** estendida com **10 camadas de hardening** (2FA TOTP, backup codes, sudo mode, rate limit, audit log, honeypot). Cada decisão tem um **ADR**.",
      },
      jornada: {
        type: "Backend",
        summary:
          "Motor de ponto em .NET 9 que calcula cada dia contra regras trabalhistas com vigência e fecha o período num resultado imutável e reproduzível.",
      },
      leanOutput: {
        type: "Plugin do Claude Code",
        summary:
          "Mantém saída longa de ferramenta fora da janela de contexto — manda pro disco atrás de um ponteiro e comprime RSpec, RuboCop e Brakeman sem perder falha.",
        details:
          "**Plugin do Claude Code** que mantém saída longa de ferramenta fora da janela de contexto: despeja resultados grandes em disco e entrega um ponteiro ao modelo, omite o que o contexto já tem, e comprime **RSpec**, **RuboCop**, **Brakeman**, `git diff`, cargo e grep no caminho. Medido reprocessando **12.008 resultados reais (10,54 MB)** — menos tokens, **nenhuma falha perdida**.",
      },
      amnesia: {
        type: "App em tempo real",
        summary:
          "Um Discord enxuto: canais de texto e voz em tempo real e transmissão de tela com Phoenix Channels e LiveKit, e cliente desktop em Electron.",
        details:
          "Um Discord enxuto — **canais de texto e de voz** em tempo real, transmissão de tela e app desktop. **Elixir + Phoenix 1.8** com Channels e Presence resolvem sala, entrada e quem-está-online sem código de infraestrutura, **LiveKit** (SFU) carrega a mídia, e o cliente é **Electron + React + Vite + Tailwind v4**.",
      },
      glossa: {
        type: "Full Stack",
        summary:
          "Arquivos de tradução de ponta a ponta: backend Rails 8 JSON:API e frontend Ember Octane que pede os plurais CLDR do locale alvo. 208 exemplos RSpec.",
      },
      expresso3300: {
        type: "Full Stack",
        summary:
          "Plataforma de gestão de pessoas: treinamentos, férias, desempenho, notificações multicanal, exportações, Power BI e um assistente com IA.",
      },
      atsOnRails: {
        type: "Ferramenta com IA",
        summary:
          "Cola uma vaga e recebe um veredito por termo contra fatos com evidência: já coberto, alcançável, ou lacuna real — que ele se recusa a inventar.",
        details:
          "Cola uma descrição de vaga e recebe um **veredito por termo** contra fatos que têm evidência por trás: já coberto por um bullet, **alcançável** (um fato descreve aquele trabalho e só não usa a palavra), ou **lacuna** real — que a ferramenta aponta em vez de escrever assim mesmo. A cobertura é lida só da prosa dos bullets, porque palavra-chave em lista de skills não pontua contra matcher com LLM: medido **76% → 98%** movendo cinco termos pra dentro dos bullets de experiência.",
      },
      telehealth: {
        type: "Microsserviços",
        summary:
          "Dois serviços, dois bancos: API GraphQL em Rails para agenda e prontuário, e um serviço Django de cobrança com webhooks Stripe idempotentes.",
      },
      shelflog: {
        type: "Full Stack",
        summary:
          "Controle de validade para gôndola de supermercado: busca por código de barras, status por produto e alertas via web push. Pensado para o Muffato.",
        details:
          "**Controle de validade** para gôndola de supermercado, em **Rails**: busca por código de barras ou nome, categorias, foto do produto e alerta via **web push**, com status por produto (vencido, vencendo, ok, tranquilo) a partir de limites configuráveis. Pensado originalmente para o **Muffato**.",
      },
      interviewSim: {
        type: "App com IA",
        summary:
          "Simulador de entrevista com IA: um entrevistador movido a Claude conduz a sessão em tempo real e devolve feedback estruturado.",
      },
      interviewCopilot: {
        type: "Ferramenta com IA",
        summary:
          "Copiloto de entrevista ao vivo: ouve, transcreve e começa a responder antes de a pergunta terminar, com seu currículo e a vaga como contexto.",
      },
      railsGuard: {
        type: "Plugin do Claude Code",
        summary:
          "Bloqueia os comandos Rails irrecuperáveis que um agente poderia rodar — db:drop, db:reset, runners destrutivos — e pergunta antes nos arriscados.",
      },
      railsContext: {
        type: "Plugin do Claude Code",
        summary:
          "Context engineering para Rails: entrega ao agente um resumo curado de colunas, associações, validações e rotas, em vez do schema e dos models inteiros.",
      },
      swarmPlugin: {
        type: "Plugin do Claude Code",
        summary:
          "Roda o mesmo prompt em N git worktrees isolados em paralelo e deixa você comparar o diff de cada tentativa e mesclar a melhor — ou abrir um PR.",
      },
      systemDesignPrimer: {
        type: "Laboratório",
        summary:
          "Um laboratório Rails 8 de system design: cache, N+1, índice, hot key, contenção de escrita e fila — cada camada precisa se provar num número medido.",
      },
      brasilApiRuby: {
        type: "Biblioteca",
        summary:
          "Meu primeiro passo em open source: um wrapper Ruby inicial para a BrasilAPI — aprendendo a publicar pacotes e código em público.",
        details:
          "Tentativa no início da carreira de criar um **wrapper Ruby** pra **BrasilAPI**. O código era ingênuo na época, mas foi meu **primeiro mergulho em open-source** — publicar código público, lidar com empacotamento e aprender com a experiência.",
      },
    },
  },
  testimonials: {
    title: "DEPOIMENTOS",
    subtitle: "O que dizem sobre o meu trabalho",
    prevLabel: "Depoimento anterior",
    nextLabel: "Próximo depoimento",
    goToLabel: "Ir para o depoimento",
    items: [
      {
        quote:
          "Trabalhei com Washington no projeto Compras, no qual ele teve um papel fundamental na evolução da qualidade técnica da aplicação. Além de implementar melhorias no projeto, ele estruturou uma iniciativa de testes automatizados que aumentou a cobertura da suíte RSpec de 35% para 89%. Durante esse processo, Washington foi responsável por me mentorar, criando e organizando cards de testes no Trello, explicando os cenários que deveriam ser cobertos e revisando minhas implementações. Sua orientação me ajudou a compreender melhor RSpec, boas práticas de testes e a importância de prevenir regressões. Washington demonstrou não apenas conhecimento técnico, mas também organização, paciência e capacidade de compartilhar conhecimento. Sua liderança foi essencial para elevar a confiabilidade do projeto e contribuir para o meu desenvolvimento profissional.",
        name: "Dev · Was Advisory",
        role: "Mentoria em RSpec · Projeto Compras",
      },
      {
        quote:
          "Tive a oportunidade de ser mentorado por Washington durante a evolução do projeto Compras. Ele recebeu a responsabilidade de orientar dois desenvolvedores na criação e melhoria dos testes automatizados do sistema, organizando as atividades por meio de cards no Trello e acompanhando nosso progresso técnico. Washington participou diretamente das mudanças realizadas no projeto e liderou o trabalho que aumentou a cobertura da suíte RSpec de 35% para 89%. Durante a mentoria, ele nos ajudava a identificar cenários importantes, estruturar specs mais confiáveis e entender como os testes protegiam as regras de negócio contra regressões. Sua atuação combinou execução técnica, liderança e compartilhamento de conhecimento. Além de melhorar significativamente a qualidade do projeto, Washington criou um ambiente em que conseguimos evoluir como desenvolvedores e assumir as tarefas com mais autonomia.",
        name: "Dev · Was Advisory",
        role: "Mentoria em RSpec · Projeto Compras",
      },
    ],
  },
  spokenLanguages: {
    title: "IDIOMAS",
    items: [
      { language: "PORTUGUÊS", level: "NATIVO" },
      { language: "INGLÊS", level: "B2 (TÉCNICO)" },
    ],
  },
  resume: {
    title: "CURRÍCULO",
    subtitle: "Linha do tempo da carreira & CV pra baixar",
    downloadCta: "BAIXAR PDF",
    timelineTitle: "LINHA DO TEMPO",
    openSourceTitle: "PROJETOS & OPEN SOURCE",
    privateRepoLabel: "REPO PRIVADO",
  },
  contact: {
    kicker: "ENTRE EM CONTATO",
    badge: "RESPOSTA EM 24H",
    headline: "BORA TIRAR SUA IDEIA DO PAPEL",
    headlineEmphasis: "?",
    subheadline:
      "Aberto a projetos freelance, consultoria e oportunidades full-time.",
    ctaPrimary: "INICIAR CONVERSA",
    ctaSecondary: "VER CURRÍCULO",
    title: "VAMOS CONVERSAR",
    body:
      "Tem um projeto em mente ou uma oportunidade pra discutir? Vou adorar ouvir.",
    emailLabel: "Me envie um email",
    inboxLabel: "Inbox",
    socialLabel: "Me encontre online",
    available: "DISPONÍVEL",
    channelsTitle: "CANAIS",
    metaLocation: { label: "LOCALIZAÇÃO", value: "BRASIL, GMT-3" },
    metaResponse: { label: "TEMPO DE RESPOSTA", value: "EM ATÉ 24H" },
    metaStatus: { label: "STATUS", value: "DISPONÍVEL" },
    form: {
      title: "NOVA MENSAGEM",
      status: "RASCUNHO",
      nameLabel: "NOME",
      namePlaceholder: "Seu nome",
      emailLabel: "EMAIL",
      emailPlaceholder: "seu@email.com",
      subjectLabel: "ASSUNTO",
      subjectPlaceholder: "Sobre o que é?",
      messageLabel: "MENSAGEM",
      messagePlaceholder:
        "Tem um projeto em mente ou uma pergunta? Manda uma mensagem — respondo em até 24h.",
      sendCta: "ENVIAR MENSAGEM",
    },
  },
  footer: "feito com next.js + tailwind",
  toggle: {
    switchLang: "Mudar idioma",
    switchTheme: {
      toLight: "Mudar para tema claro",
      toDark: "Mudar para tema escuro",
    },
  },
  meta: {
    aboutMe: {
      title: "Sobre — Washington Pereira",
      description:
        "Desenvolvedor full-stack especializado em Ruby on Rails. Experiência profissional, contexto e stack.",
    },
    skills: {
      title: "Skills — Washington Pereira",
      description:
        "Skills técnicas: Ruby on Rails, PostgreSQL, Redis, Sidekiq, React, Next.js e mais.",
    },
    resume: {
      title: "Currículo — Washington Pereira",
      description: "Linha do tempo da carreira e currículo em PDF.",
    },
    contact: {
      title: "Contato — Washington Pereira",
      description:
        "Entre em contato com Washington Pereira, desenvolvedor full-stack.",
    },
    swarm: {
      title: "Swarm — Agent Development Environment",
      description:
        "Uma IDE desktop pra agentes de código: 1 a 4 agentes Claude Code ou Codex em worktrees Git paralelos, PTYs ao vivo, revisão de diff com comentários por linha, merge ou PR.",
    },
    obrahub: {
      title: "ObraHub — apontamento e medição de mão de obra em campo",
      description:
        "Estudo de caso: o monólito Rails 8 feito para a Engemil que troca o ciclo papel → planilha → redigitação por importação de planilha, saldo vivo de pacote e exportação da medição idêntica ao formato do cliente.",
    },
  },
  swarm: {
    hero: {
      kicker: "// PROJETO — DESTAQUE",
      title: "SWARM",
      tagline: "Agent Development Environment",
      subtitle:
        "Uma IDE desktop pra agentes de código. Rode de 1 a 4 agentes Claude Code ou Codex em worktrees Git paralelos, acompanhe cada um num PTY ao vivo, revise o diff com comentários por linha e faça merge ou abra o PR — tudo na mesma janela.",
      ctaGithub: "Ver no GitHub",
      ctaCli: "Plugin CLI",
      agentLabel: "agente",
    },
    pty: {
      kicker: "// 02 — AO VIVO",
      title: "Toda task planeja antes de codar.",
      subtitle:
        "A task nasce pending, sem worktree — criar não gasta disco nem dinheiro. O Start cria a worktree, o planner escreve o plano e sai, e só então o on_exit sobe o coder. Sem plano não-vazio, não tem coder.",
      promptLabel: "prompt",
      promptLine: "adiciona paginação por cursor no DealsController#index",
      windowLabel: "swarm — task #142 — painel do agente",
      lines: [
        { kind: "sys", text: "task #142 · pending — ainda sem worktree" },
        { kind: "sys", text: "start: git worktree add .swarm/worktrees/a3f2  branch swarm/cursor-pagination" },
        { kind: "ok", text: "worktree pronta · PTY registrado (task=142 pane=agent)" },
        { kind: "sys", text: "" },
        { kind: "task", text: "[planner · claude-code] lendo routes.rb, deals_controller.rb, deal_spec.rb" },
        { kind: "task", text: "[planner · claude-code] escrevendo o plano em disco" },
        { kind: "ok", text: "[planner] saiu com 0 — plano escrito, 34 linhas" },
        { kind: "sys", text: "" },
        { kind: "sys", text: "on_exit: plano não-vazio → handoff pro coder no mesmo pane" },
        { kind: "task", text: "[coder · codex] editando deals_controller.rb, deal.rb, deal_spec.rb" },
        { kind: "ok", text: "[coder] +48 −12 em 3 arquivos" },
        { kind: "sys", text: "" },
        { kind: "sys", text: "status de processo: running → exited. o status do usuário quem define é você." },
      ],
    },
    compare: {
      kicker: "// 03 — REVISÃO",
      title: "Tentativas lado a lado, como abas.",
      subtitle:
        "O arranjo da tela é uma árvore de divisões escrita na URL. Qualquer superfície vira aba — o agente, um terminal, o chat, o diff, o preview, um arquivo ou outra tentativa do mesmo prompt. É assim que duas CLIs diferentes no mesmo prompt ficam lado a lado.",
      hint: "?panes=agent;(diff|preview)   ·   ; divide · | empilha · , abas · () aninha",
      mergeLabel: "Mesclar",
      discardLabel: "Descartar",
      viewDiffLabel: "Abrir diff",
      attempts: [
        {
          id: "cursor-pagination-a3f2",
          agent: "claude-code",
          elapsed: "2m14s",
          files: "3 arquivos · +48 −12",
          preview: "def index\n  @deals = policy_scope(Deal).paginate(cursor: params[:cursor])\n  render json: {\n    data: @deals,\n    next: @deals.next_cursor,\n  }\nend",
        },
        {
          id: "cursor-pagination-b7c1",
          agent: "codex",
          elapsed: "1m58s",
          files: "2 arquivos · +36 −8",
          preview: "def index\n  scope = policy_scope(Deal).order(:id)\n  @deals = scope.after(params[:cursor]).limit(25)\n  render json: DealSerializer.wrap(@deals)\nend",
        },
        {
          id: "cursor-pagination-9d0e",
          agent: "claude-code",
          elapsed: "3m01s",
          files: "5 arquivos · +72 −18",
          preview: "def index\n  paginator = CursorPaginator.new(\n    scope: policy_scope(Deal),\n    cursor: params[:cursor],\n    per: 25,\n  )\n  render json: paginator.page\nend",
        },
        {
          id: "cursor-pagination-c204",
          agent: "codex",
          elapsed: "2m47s",
          files: "4 arquivos · +52 −22",
          preview: "def index\n  @deals = DealQuery\n    .for(current_user)\n    .cursor_page(params[:cursor])\n  render json: @deals\nend",
        },
      ],
    },
    features: {
      kicker: "// 04 — CAPACIDADES",
      title: "Um ambiente, não um wrapper de uma CLI.",
      subtitle: "Oito coisas que ele faz, todas na sua máquina.",
      items: [
        {
          title: "Planner, depois coder",
          description:
            "O handoff é uma fase de PTY, não um job: o planner roda no mesmo pane, escreve o plano e sai, e o on_exit sobe o coder com o ponteiro pro plano. “Planner falhou” nunca vira “coda no escuro”.",
        },
        {
          title: "Claude Code e Codex",
          description:
            "Dois adapters atrás de um mapa — de 1 a 4 agentes em paralelo, cada um na sua worktree e sua branch. CLI nova é uma entrada no mapa mais uma classe; a validação e o formulário saem daí.",
        },
        {
          title: "PTYs de verdade",
          description:
            "PTY.spawn por pane, registrado em memória por (task, pane) e transmitido em base64 via ActionCable. O stop escala HUP → TERM → KILL, e o scrollback vai pra disco a cada 5s — morte abrupta perde no máximo 5 segundos.",
        },
        {
          title: "Painéis moram na URL",
          description:
            "O arranjo é uma árvore de divisões serializada na query string. Trocar de aba é reordenar, fechar é remover, dividir é inserir — cada ação é um link, então reload, botão de voltar e favorito simplesmente funcionam.",
        },
        {
          title: "Diff que responde",
          description:
            "Committed, uncommitted e untracked contra o merge-base, parseado no servidor. Comente qualquer arquivo:linha e o comentário volta pro agente como instrução.",
        },
        {
          title: "PR com evidência real",
          description:
            "O corpo é escrito no servidor por um agente headless a partir do diff real, do prompt original e do resultado real dos checks — “sem check command” e “nunca rodados” continuam distintos de um resultado de verdade. O golden path é gravado em Chrome headless e embutido como GIF.",
        },
        {
          title: "Preview e Design Mode",
          description:
            "O app da worktree sobe num PTY atrás de um proxy cuja detecção de porta não depende do stack respeitar $PORT. O Design Mode anota a tela viva como quem comenta num Figma — o estado vivo do elemento é serializado do DOM e re-renderizado com a sessão do usuário, não é screenshot.",
        },
        {
          title: "Loops com guardas",
          description:
            "Turn, Goal, Time e Proactive, todos atrás das mesmas guardas inegociáveis: teto de custo, teto de tentativas, kill-switch global, timeout de julgamento e HMAC-SHA256 sobre o corpo cru do webhook. Do lado dos trackers, Trello (bidirecional), Linear e Jira.",
        },
      ],
    },
    architecture: {
      kicker: "// 05 — POR DENTRO",
      title: "O que acontece quando você aperta Start.",
      subtitle:
        "Uma task pending não tem worktree. O Start cria, o planner faz handoff pro coder no mesmo PTY, e tudo que o agente produz volta por um único processo Puma — o registry vive em memória, então WEB_CONCURRENCY é proibido por design.",
      nodes: [
        { id: "task", label: "Task · pending" },
        { id: "start", label: "Start → worktree" },
        { id: "planner", label: "Planner (PTY)" },
        { id: "adapters", label: "Claude Code · Codex" },
        { id: "coder", label: "Agente coder" },
        { id: "cable", label: "PTY + ActionCable" },
        { id: "workspace", label: "Painéis · diff" },
        { id: "ship", label: "Merge / PR" },
      ],
    },
    stack: {
      kicker: "// 06 — STACK",
      title: "Construído sobre.",
      items: [
        "Rails 8.1",
        "Hotwire",
        "Turbo",
        "Stimulus",
        "Importmap",
        "Tailwind v4",
        "Propshaft",
        "SQLite",
        "ActionCable (async)",
        "PTY.spawn",
        "Rouge",
        "xterm.js",
        "CodeMirror 6",
        "Ferrum",
        "Tauri 2",
        "Rust",
        "WebView2",
        "GitHub CLI",
      ],
    },
    roadmap: {
      kicker: "// 07 — MARCOS",
      title: "O que já está dentro.",
      subtitle: "Tudo abaixo já está entregue e rodando — é a ferramenta como ela existe, não um plano.",
      items: [
        {
          marker: "01",
          title: "Orquestrador",
          description: "Worktrees e branches isolados, streaming PTY ao vivo, revisão de diff, merge / descarte / PR.",
        },
        {
          marker: "02",
          title: "Comparação",
          description: "N tentativas do mesmo prompt revisadas lado a lado, comentários por linha voltando pro agente.",
        },
        {
          marker: "03",
          title: "Workspace",
          description: "Painéis divisíveis serializados na URL, com explorer, editor, preview, chat e qualquer arquivo como abas arrastáveis.",
        },
        {
          marker: "04",
          title: "Duas CLIs, um planner",
          description: "Adapters de Claude Code e Codex, e uma fase de planner por onde toda task passa antes de escrever código.",
        },
        {
          marker: "05",
          title: "PR com evidência",
          description: "Corpo escrito por agente headless a partir do diff real e do resultado real dos checks; golden path gravado em Chrome headless como GIF inline.",
        },
        {
          marker: "06",
          title: "Design Mode",
          description: "Anote o app rodando como quem comenta num Figma — o elemento é serializado do DOM vivo e re-renderizado com a sessão do usuário.",
        },
        {
          marker: "07",
          title: "Loops e trackers",
          description: "Turn, Goal, Time e Proactive atrás de guardas de custo, tentativas e kill-switch, mais integrações com Trello, Linear e Jira.",
        },
        {
          marker: "08",
          title: "Desktop",
          description: "Janela Tauri 2 em porta fixa com process group próprio; WebView2 no Windows, com o Rails rodando dentro do WSL.",
        },
      ],
    },
    story: {
      kicker: "// 08 — HISTÓRIA",
      title: "Como começou.",
      body: [
        "Eu queria uma IDE pra agentes de código, não um wrapper de um agente só. Registra um repo local, dispara um prompt, e de 1 a 4 agentes atacam em paralelo — cada um na sua worktree e sua branch, cada um num PTY ao vivo, com o explorer de arquivos, o editor, o app rodando, o chat e o diff na mesma janela.",
        "É um app Rails 8 em Hotwire e SQLite, single-process por design: o registry de PTYs vive na memória do Puma, então WEB_CONCURRENCY é proibido — dois processos significam dois registries e uma UI mostrando terminal vazio pra um agente que está rodando muito bem. O Tauri 2 empacota como janela nativa; no Windows isso é WebView2 com o Rails rodando dentro do WSL.",
        "Uma regra acabou atravessando o projeto inteiro: desconhecido nunca pode virar valor. Modelo que não está na tabela de preços paga a linha mais cara. Transcript ilegível devolve :unknown e para o loop, em vez de contar como zero gasto. E prompt que monta evidência precisa dizer ao modelo onde está o buraco — porque prompt sem evidência não devolve “não sei”, devolve invenção plausível.",
      ],
      inspiredByLabel: "Ver código no GitHub",
    },
    finalCta: {
      kicker: "// 09 — EXPERIMENTA",
      title: "Aponta pra um repo e aperta Start.",
      subtitle:
        "O Swarm roda na sua máquina, contra os seus repos locais. O plugin de Claude Code leva o mesmo fan-out pra dentro da CLI.",
      ctaGithub: "github.com/wasdevv/swarm",
      ctaCli: "swarm-plugin (CLI)",
      ctaDocs: "Ler a documentação",
    },
  },
  obrahub: {
    hero: {
      kicker: "// ESTUDO DE CASO — SISTEMA DE CLIENTE",
      title: "OBRAHUB",
      tagline: "Apontamento e medição de mão de obra em campo",
      subtitle:
        "Feito para a Engemil, prestadora de manutenção e montagem industrial em Mogi Guaçu/SP — e desenhado desde o começo para generalizar num setor que roda todo o mesmo ciclo. Ele substitui o ciclo papel → planilha → redigitação por um fluxo só: importa a planilha que a engenharia já preenche, mantém o saldo de cada pacote como conta viva, e exporta o documento de medição idêntico ao formato que o cliente assina.",
      badges: ["Monólito Rails 8", "Em produção", "Desenvolvimento ativo"],
      ctaContact: "Conversar sobre esse projeto",
    },
    problem: {
      kicker: "// 01 — O PROBLEMA",
      title: "O dinheiro escapava na redigitação.",
      subtitle:
        "A Engemil aloca equipes dentro da planta do seu maior cliente, e todo mês precisa provar — obra por obra, pessoa por pessoa, dia por dia — quantas horas foram trabalhadas e quanto isso custa. Esse documento é assinado pelos dois lados. Antes do sistema, produzi-lo era assim:",
      beforeLabel: "O ciclo antigo",
      beforeSteps: [
        "o encarregado anota em papel quem trabalhou, em que cargo e por quantas horas",
        "alguém digita isso numa planilha de apontamento",
        "no fim do mês, alguém redigita aquilo numa segunda planilha, a de medição, no formato que o cliente aceita",
        "o cliente confere célula a célula e assina",
      ],
      items: [
        {
          title: "Redigitação é onde o dinheiro escapa",
          description:
            "Hora que não foi transcrita não é faturada, e ninguém descobre — porque não há com o que comparar.",
        },
        {
          title: "Não há saldo",
          description:
            "O cliente aprova pacotes de trabalho com horas orçadas. Saber quanto sobrou de um pacote exigia somar apontamentos à mão.",
        },
        {
          title: "O formato do cliente é lei",
          description:
            "A planilha da medição tem uma forma exata — fonte, cor, formato de número, posição de bloco. Uma medição “parecida” volta.",
        },
      ],
    },
    rules: {
      kicker: "// 02 — COMO AS REGRAS CHEGARAM AQUI",
      title: "Nada aqui saiu de um documento de especificação.",
      subtitle:
        "O sistema foi levantado em rodadas sucessivas de discussão, review e feedback com o responsável na Engemil por produzir tudo isso na mão — e cada rodada trocou uma suposição por um fato da operação. Os artefatos reais serviram de especificação: a planilha de medição de referência, a de apontamento da engenharia, a mestre de pacotes e o cadastro de obras. Três regras que só aparecem na conversa com quem já fez o trabalho:",
      items: [
        {
          title: "A obra não tem tipo",
          description:
            "O sistema chegou a ter Project#kind (ase | hh | pacote). Estava errado: a mesma obra tem dia de pacote, dia de HH e dia de ASE. Quem declara a natureza do trabalho é o relatório do dia, não o cadastro da obra. O campo foi removido.",
        },
        {
          title: "Dois dos códigos não são hora nenhuma",
          description:
            "FE e FO são códigos, não tempo. E o adicional noturno é um acréscimo de 45% sobre o valor, não tempo trabalhado — somá-lo às horas inflava a medição.",
        },
        {
          title: "74 dos 84 pacotes não têm data",
          description:
            "Eles trazem a palavra “UNIFICADOS” no lugar da data de emissão. O campo virou opcional por causa disso, não por elegância de modelagem.",
        },
      ],
    },
    domain: {
      kicker: "// 03 — O DOMÍNIO",
      title: "Uma obra, um dia, uma linha.",
      subtitle:
        "Dez tabelas de domínio. A operação inteira cabe num modelo só, e é por isso que ele é uma aplicação e não várias.",
      tree: `User (admin | supervisor | encarregado)
 └─ ProjectSupervisor ── Project ── Package        (a fatia orçada)
                            └────── Rdo            (o dia de trabalho)
                                     └── WorkEntry (a linha: quem, cargo, horas)
Employee ── Position (cargo, valor/hora)
ImportBatch ── ImportError`,
      entities: [
        {
          name: "Project · Package",
          description:
            "Project é a obra. Package é a fatia que o cliente mandou orçar sozinha — tem horas estimadas, valor de venda e valor faturado.",
        },
        {
          name: "Rdo",
          description:
            "O Relatório Diário de Obra: obra, período, quem assina, descrição, foto. Ele declara a natureza do dia — pacote (desconta de um Package), HH (não desconta de nada) ou ASE, o serviço extra autorizado por um código próprio, que é o código que a fatura cita.",
        },
        {
          name: "WorkEntry",
          description: "A linha dentro do relatório: pessoa, cargo, dia, horas, tipo de hora, foto.",
        },
        {
          name: "Employee",
          description:
            "A pessoa em campo — deliberadamente não é um User. Uma equipe de centenas não pode virar centenas de logins que ninguém lembra de revogar.",
        },
        {
          name: "Measurement",
          description:
            "Não é tabela. É objeto de leitura que transforma as horas de um período em fatura, com os preços de hoje.",
        },
      ],
      hoursTitle: "Os cinco tipos de hora",
      hoursFactorLabel: "fator",
      hours: [
        { code: "hn", factor: "1,0", label: "hora normal" },
        { code: "fa", factor: "1,6", label: "extra fator A" },
        { code: "fb", factor: "2,0", label: "extra fator B" },
        { code: "an", factor: "0,45", label: "adicional noturno — acréscimo, não tempo" },
        { code: "fd", factor: "1,0", label: "folga de dobra" },
      ],
      balanceTitle: "Saldo é conta, não coluna",
      balanceBody:
        "Horas usadas, saldo, progresso e valor a faturar saem de query no momento da leitura. Um pacote de 663 h que recebe um RDO de 9 h passa a mostrar 654 h de saldo na hora, sem nenhuma coluna sendo escrita — e portanto sem o risco clássico de o total gravado divergir das linhas que o compõem.",
    },
    architecture: {
      kicker: "// 04 — ARQUITETURA",
      title: "Um processo, um banco, um deploy.",
      subtitle:
        "É um monólito Rails, e isso é escolha, não limitação. Os dados são fortemente relacionados — um lançamento de hora só existe dentro de um RDO, que só existe dentro de uma obra — e não há duas equipes trabalhando em ritmos diferentes. Fatiar isso em serviços compraria transação distribuída para uma empresa que fecha uma medição por mês.",
      items: [
        {
          title: "Models",
          description: "As regras que valem sempre — validação, escopo, cálculo de saldo.",
        },
        {
          title: "Policies · 12",
          description:
            "Quem pode ver e fazer o quê, por registro. O mesmo policy_scope que filtra a lista filtra o autocomplete e o dashboard — um contador que soma horas que a pessoa não pode ler é um vazamento com cara de indicador.",
        },
        {
          title: "POROs de consulta",
          description:
            "Measurement, ProjectWorkReport, DashboardReport, RdoQuery — leitura que não merece virar model.",
        },
        {
          title: "Importers · 12 e exporters · 5",
          description:
            "Um importador por formato de arquivo de entrada; exportadores para a medição, a carta de encaminhamento e a folha do RDO para impressão.",
        },
        {
          title: "Três papéis",
          description:
            "Admin faz tudo, e é o único que dá acesso a alguém e vê dinheiro de pacote. Supervisor tem o operacional inteiro, menos criar usuário. O encarregado está em campo: assina o RDO e só enxerga onde está vinculado.",
        },
        {
          title: "Sem processamento em segundo plano — de propósito",
          description:
            "O RDO é fechado dentro da requisição que o salva, e a importação é empurrada pela própria tela, um pedaço por envio. Um worker consultando o banco impediria o contêiner de dormir, e o app ficaria de pé 24 horas por dia esperando uma importação por mês.",
        },
      ],
      stackTitle: "Construído sobre",
      stack: [
        "Rails 8",
        "PostgreSQL",
        "Hotwire",
        "Turbo",
        "Stimulus",
        "Importmap",
        "Tailwind",
        "Devise",
        "Pundit",
        "RSpec",
        "Docker",
        "Railway",
      ],
    },
    decisions: {
      kicker: "// 05 — AS DECISÕES QUE VALEM CONTAR",
      title: "As partes que custaram mais para acertar.",
      subtitle: "Quatro problemas em que a implementação óbvia é a errada.",
      items: [
        {
          title: "O Excel do cliente, célula a célula",
          description:
            "“Idêntico” não significa “parecido”. O trabalho foi descompactar o .xlsx de referência e ler o XML, porque o olho não pega o que quebra: os fills usam cor de tema com tint, não RGB, então ler só o atributo RGB não vê fill nenhum; dinheiro usa o formato CONTÁBIL, que é o que encosta o R$ na borda esquerda e o número na direita; e no Resumo cada tipo de hora ocupa duas colunas, então escrever em colunas consecutivas põe todo valor duas casas à esquerda. Há um teste que faz parse estrito do styles.xml gerado, porque um format_code com aspas não escapadas produz um arquivo que o Excel se recusa a abrir — e nem a biblioteca de leitura nem os testes de conteúdo percebem.",
        },
        {
          title: "Importar duas vezes não pode duplicar",
          description:
            "A chave de idempotência é um SHA-256 da linha: obra, encarregado, cargo, data e tipo de hora. O upsert atualiza o mesmo registro em vez de criar um segundo. Sem o tipo de hora na conta, HN e FA do mesmo dia colidiam e uma sumia. Um detalhe que custou caro: o digest carrega o package_id só quando ele existe — acrescentá-lo sempre mudaria o digest de tudo que já estava gravado, e o próximo envio do mesmo arquivo criaria uma cópia de cada linha.",
        },
        {
          title: "O importador cria cadastro, mas não inventa dinheiro",
          description:
            "Obra, cargo, funcionário e usuário que faltam são criados, e a tela diz quais foram — criar em silêncio é o que transforma um cargo digitado errado em cadastro permanente que ninguém sabe de onde veio. Pacote que não existe, porém, recusa a linha: pacote tem horas estimadas e valor de venda, então inventá-lo escreveria um orçamento que ninguém aprovou.",
        },
        {
          title: "O celular não é uma versão menor da tela",
          description:
            "O encarregado está em obra, com o telefone. Uma tabela de sete colunas atrás de rolagem lateral cabe tecnicamente, e ninguém arrasta até a coluna Situação sem cabeçalho à vista para saber onde parou. Abaixo de 640px cada tabela vira cartão rotulado, com o rótulo saindo do data-label de cada célula. Um teste reprova qualquer tabela nova que pule isso, porque ela passaria em toda request spec e sumiria da tela do celular do mesmo jeito.",
        },
      ],
    },
    numbers: {
      kicker: "// 06 — NÚMEROS",
      title: "Medidos, não estimados.",
      subtitle: "Contagens do repositório em 30/08/2026, e números de uso real.",
      stats: [
        { value: "899", label: "exemplos de teste, 0 falhas" },
        { value: "10", label: "tabelas de domínio (+3 do Active Storage)" },
        { value: "17 · 15 · 12", label: "models · controllers · policies" },
        { value: "19", label: "importadores e exportadores" },
        { value: "72", label: "views" },
        { value: "37", label: "migrations" },
        { value: "~22,7k", label: "linhas em app/ e spec/" },
        { value: "129", label: "commits, 08–30/08/2026" },
      ],
      measuredTitle: "De uso real",
      measured: [
        { value: "11.551 h", label: "de mão de obra fechadas em um mês, cada uma amarrada à obra, ao cargo e ao pacote que pagou por ela" },
        { value: "216", label: "RDOs montados a partir da planilha que a engenharia já preenchia — ninguém digitou um relatório" },
        { value: "3 s", label: "para importar 1.395 apontamentos, conferir contra o cadastro e recusar o que não bate" },
        { value: "24", label: "abas no Excel de medição, no formato que o cliente assina" },
      ],
    },
    status: {
      kicker: "// 07 — ESTADO ATUAL",
      title: "Em produção, e honestamente inacabado.",
      subtitle:
        "Portfólio que só lista acertos não sustenta a pergunta seguinte. Os testes de escala contam queries: a listagem tem de custar o mesmo com dez registros e com dez mil — um arquivo real de importação chega a 8.504 RDOs, e é por isso que o fechamento em lote é uma sentença SQL por fatia, e não um percurso registro a registro.",
      doneTitle: "Pronto e em uso",
      done: [
        "cadastro de obras, pacotes, funcionários, cargos e usuários",
        "RDO manual e em lote a partir da programação",
        "importação de planilha com relatório de recusa",
        "medição calculada e exportada em Excel no formato exato do cliente",
        "folha do RDO para impressão",
        "dashboard",
        "revisão de celular do sistema inteiro",
      ],
      openTitle: "Em aberto",
      open: [
        "as linhas PACOTE da medição ainda não são geradas pelo exportador — o dado já existe, falta mapear o layout",
        "dois jobs continuam no repositório sem ninguém os enfileirar: ou o assíncrono volta de propósito, ou eles saem",
        "não há teste de navegador — rolagem lateral real e o zoom de campo do Safari seguem como conferência manual",
        "a padronização das telas de cadastro sob um CRUD herdado está decidida e não começou",
      ],
      directionTitle: "Para onde vai",
      direction:
        "Foi feito para uma prestadora, mas o ciclo que ele substitui não é específico de uma: equipes alocadas dentro da planta de um cliente, horas provadas mês a mês, um documento de medição no formato que o cliente dita. Generalizar isso num produto para o setor é a direção — o trabalho multi-cliente não começou, e nada aqui está vendido para uma segunda empresa ainda.",
      ctaLabel: "Conversar sobre esse projeto",
    },
  },
}

export const dictionaries: Record<Lang, Dict> = { en, pt }

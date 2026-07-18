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
  }
  sidebar: {
    stats: Stat[]
    contactPhone: string
    contactPhoneLabel: string
    contactEmailLabel: string
    contactLinkedInLabel: string
    contactGithubLabel: string
  }
  aboutMe: {
    codeTabs: {
      title: string
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
        blocks: {
          openSource: {
            swarm: string
          }
          education: {
            degree: string
            institution: string
            status: string
            expected: string
          }
          languages: {
            portuguese: string
            english: string
          }
        }
      }
      readme: {
        filename: string
        title: string
        paragraphs: string[]
      }
      stack: {
        filename: string
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
    openSourceItems: {
      name: string
      year: string
      url: string
      description: string
    }[]
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
      promptLine: string
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
        version: string
        status: "shipped" | "shipping" | "planned"
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
}

const en: Dict = {
  profile: {
    nameLine1: "WASHINGTON",
    nameLine2: "CARDOSO.",
    role: "Full-Stack Developer",
    yearsLabel: "3+ years",
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
    resume: "RESUME",
    contact: "CONTACT",
  },
  sidebar: {
    stats: [
      { value: "3+", label: "years in Rails" },
      { value: "2s → 200ms", label: "p99 latency cut" },
      { value: "3x", label: "faster critical paths" },
      { value: "99.9%+", label: "production uptime" },
    ],
    contactPhone: "+55 17 98843-2434",
    contactPhoneLabel: "Phone",
    contactEmailLabel: "Email",
    contactLinkedInLabel: "LinkedIn",
    contactGithubLabel: "GitHub",
  },
  aboutMe: {
    codeTabs: {
      title: "Context",
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
        blocks: {
          openSource: {
            swarm: "Agent Development Environment (Rails 8 + Hotwire + Tauri)",
          },
          education: {
            degree: "Systems Analysis and Development",
            institution: "Wyden",
            status: "in_progress",
            expected: "Dec/2026",
          },
          languages: {
            portuguese: "native",
            english: "B2 (technical)",
          },
        },
      },
      readme: {
        filename: "README.md",
        title: "About",
        paragraphs: [
          "Full Stack Software Engineer with over 3 years of experience developing scalable applications on Ruby on Rails and multi-tenant SaaS platforms.",
          "Solid background in backend architecture, REST APIs, automated testing, CI/CD, observability and performance optimization.",
          "Proven track record of delivering measurable improvements in latency, reliability and development team productivity, building high-quality software with clean architecture and modern software engineering practices.",
        ],
      },
      stack: {
        filename: "stack.json",
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
            "Built **Swarm**, an Agent Development Environment on **Rails 8 + Hotwire** that orchestrates up to **4 parallel Claude Code agents per prompt**, each in an isolated Git worktree with real-time PTY over **ActionCable** (xterm.js, zero-latency streaming, `Ctrl+Shift+F` search and scrollback replay on reconnect). Provides a `/compare` grid to pick the best attempt across agents, live diff (committed, uncommitted and untracked) against the merge-base with per-line comments that flow straight back into the agent's session, one-click `--no-ff` merge or PR creation via **GitHub CLI**, embedded iframe preview of the running app on a free port, a **CodeMirror 6** editor with autocomplete and syntax highlighting for 7+ languages (Ruby, JS/TS, HTML/ERB, CSS, JSON, YAML, Markdown), a split-shell inside the worktree, automatic session resume via `claude --continue` and persistent history with scrollback flushed to disk every 5s. Packaged as a native desktop app (**Tauri 2 + WebView2** on Windows with the Rails backend running inside **WSL**), with complete i18n in pt-BR and English.",
            "Published a trilogy of **Claude Code** plugins covering agent input, output and side effects: **lean-output** compresses **RSpec**, **RuboCop** and **Brakeman** outputs by **-70% to -97% tokens** with a zero-loss guarantee on failures; **rails-context** injects a curated dossier (columns, indexes, associations, validations and routes), drastically shrinking the model's read surface instead of loading full `db/schema.rb` and models; **rails-guard** intercepts destructive Rails commands (`db:drop`, `db:reset`, `rails destroy`, `runner` with `delete_all`) via a `PreToolUse` hook, requiring human confirmation before execution.",
          ],
        },
        {
          role: "FULL STACK DEVELOPER",
          company: "GoTechDS",
          period: "Jun 2023 — Jul 2023",
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
    openSourceItems: [
      {
        name: "PipelineHQ",
        year: "2026",
        url: "https://github.com/wasdevv/pipeline_hq",
        description:
          "Full-stack **multi-tenant B2B CRM** built on **Rails 8.1.3** — Pipedrive/HubSpot-style sales pipeline. Uses **Solid Queue / Solid Cache / Solid Cable** (zero Redis, zero Sidekiq), **Hotwire** (Turbo + Stimulus), **Tailwind v4** and **native Rails auth** extended with **10 hardening layers** (TOTP 2FA, backup codes, sudo mode, rate limit, audit log, honeypot). Each decision is backed by an **ADR**.",
      },
      {
        name: "BrasilAPI Ruby",
        year: "2022",
        url: "https://github.com/wasdevv/BrasilAPI-ruby",
        description:
          "Early-career attempt to build a **Ruby wrapper** for **BrasilAPI**. The code was naive at the time, but it was my **first dive into open-source** — publishing public code, dealing with packaging and learning from the experience.",
      },
    ],
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
        "Orchestrate up to 4 Claude Code agents in parallel Git worktrees. Review diffs, merge the best attempt, ship faster.",
    },
  },
  swarm: {
    hero: {
      kicker: "// PRODUCT — FEATURED",
      title: "SWARM",
      tagline: "Agent Development Environment",
      subtitle:
        "Orchestrate up to 4 Claude Code agents in parallel Git worktrees. Review each attempt's diff, merge the best one, ship faster — without leaving localhost.",
      ctaGithub: "Star on GitHub",
      ctaCli: "Install CLI plugin",
      agentLabel: "agent",
    },
    pty: {
      kicker: "// 02 — LIVE",
      title: "One prompt, four attempts.",
      subtitle:
        "This is what a spawn looks like — real PTY over ActionCable, xterm.js on the client, zero-latency streaming.",
      promptLine: 'swarm> spawn 3 "add cursor pagination to DealsController#index"',
    },
    compare: {
      kicker: "// 03 — REVIEW",
      title: "Compare grid.",
      subtitle:
        "Every attempt runs in its own worktree, its own branch. Diff them side by side and pick the best.",
      hint: "Hover to focus · click to expand",
      mergeLabel: "Merge",
      discardLabel: "Discard",
      viewDiffLabel: "View diff",
      attempts: [
        {
          id: "20260715-1445-a3f2",
          elapsed: "2m14s",
          files: "3 files · +48 −12",
          preview: "def index\n  @deals = policy_scope(Deal).paginate(cursor: params[:cursor])\n  render json: {\n    data: @deals,\n    next: @deals.next_cursor,\n  }\nend",
        },
        {
          id: "20260715-1445-b7c1",
          elapsed: "1m58s",
          files: "2 files · +36 −8",
          preview: "def index\n  scope = policy_scope(Deal).order(:id)\n  @deals = scope.after(params[:cursor]).limit(25)\n  render json: DealSerializer.wrap(@deals)\nend",
        },
        {
          id: "20260715-1445-9d0e",
          elapsed: "3m01s",
          files: "5 files · +72 −18",
          preview: "def index\n  paginator = CursorPaginator.new(\n    scope: policy_scope(Deal),\n    cursor: params[:cursor],\n    per: 25,\n  )\n  render json: paginator.page\nend",
        },
        {
          id: "20260715-1445-c204",
          elapsed: "2m47s",
          files: "4 files · +52 −22",
          preview: "def index\n  @deals = DealQuery\n    .for(current_user)\n    .cursor_page(params[:cursor])\n  render json: @deals\nend",
        },
      ],
    },
    features: {
      kicker: "// 04 — CAPABILITIES",
      title: "Everything you need to fan out and ship.",
      subtitle: "Eight capabilities, one localhost.",
      items: [
        {
          title: "Isolated worktrees",
          description:
            "Every agent gets its own Git worktree and branch — attempts never see each other's changes.",
        },
        {
          title: "Real-time PTY",
          description:
            "xterm.js over ActionCable with zero-latency streaming, Ctrl+Shift+F search and scrollback replay.",
        },
        {
          title: "Live diff review",
          description:
            "Committed, uncommitted and untracked — everything the agent produced against merge-base, auto-refreshing.",
        },
        {
          title: "Per-line comments",
          description:
            "Comment on any file:line inside the diff and the feedback flows straight back into the agent's session.",
        },
        {
          title: "One-click merge",
          description:
            "Commit the worktree, --no-ff into your default branch, and remove the worktree — aborts cleanly on conflict.",
        },
        {
          title: "PR via GitHub CLI",
          description:
            "Push the task branch and open a pull request through gh, straight from the Diff tab.",
        },
        {
          title: "Session resume",
          description:
            "Agent died (token limit, app closed) — claude --continue reopens the same conversation in the same worktree.",
        },
        {
          title: "Native desktop",
          description:
            "Ships as Tauri 2 + WebView2 on Windows with the Rails backend running inside WSL. No terminal required.",
        },
      ],
    },
    architecture: {
      kicker: "// 05 — INSIDE",
      title: "How the fanout works.",
      subtitle:
        "One user prompt, N Git worktrees, N Claude Code processes streamed through ActionCable to a single review pane.",
      nodes: [
        { id: "prompt", label: "User prompt" },
        { id: "orchestrator", label: "Swarm orchestrator" },
        { id: "worktrees", label: "Worktree pool" },
        { id: "ptys", label: "PTY 1..N" },
        { id: "claude", label: "Claude Code processes" },
        { id: "cable", label: "ActionCable stream" },
        { id: "diff", label: "Live diff" },
        { id: "ship", label: "Merge / PR" },
      ],
    },
    stack: {
      kicker: "// 06 — STACK",
      title: "Built on.",
      items: [
        "Ruby 4.x",
        "Rails 8.1",
        "Hotwire",
        "Turbo",
        "Stimulus",
        "Tailwind v4",
        "PostgreSQL",
        "Solid Queue",
        "Solid Cache",
        "Solid Cable",
        "ActionCable",
        "xterm.js",
        "CodeMirror 6",
        "Tauri 2",
        "WebView2",
        "GitHub CLI",
      ],
    },
    roadmap: {
      kicker: "// 07 — ROADMAP",
      title: "Where it's going.",
      subtitle: "Shipped, shipping and planned — as of today.",
      items: [
        {
          version: "v0.1",
          status: "shipped",
          title: "MVP orchestrator",
          description: "Isolated worktrees, PTY streaming, live diff review, merge / discard / PR.",
        },
        {
          version: "v0.2",
          status: "shipped",
          title: "Compare grid",
          description: "Side-by-side review of N attempts, per-line comments flowing back into the agent.",
        },
        {
          version: "v0.3",
          status: "shipping",
          title: "Desktop app",
          description: "Tauri 2 + WebView2 native shell for Windows, Rails backend inside WSL.",
        },
        {
          version: "v0.4",
          status: "planned",
          title: "Multi-project workspace",
          description: "One Swarm session spanning multiple repositories, with cross-repo diff and search.",
        },
        {
          version: "v0.5",
          status: "planned",
          title: "MCP integration",
          description: "Model Context Protocol adapters so agents in Swarm can call the same tools your IDE does.",
        },
      ],
    },
    story: {
      kicker: "// 08 — STORY",
      title: "How it started.",
      body: [
        "I wanted the same core idea as Orca — spawn multiple coding agents against a task and pick the best — but running fully offline, shipping as a native Windows app, and built on Rails 8 with Hotwire so the whole loop stays in one process.",
        "The first version was 400 lines of Ruby and one xterm.js pane. Then I added worktrees, then live diff, then per-line comments feeding back into the agent's session. Then Tauri 2 to ship it as a real desktop app. Then a separate CLI plugin so you can get 80% of the value inside Claude Code itself.",
        "It's the tool I wanted every time I typed a hard prompt and had to guess which of my agent's five possible interpretations would win.",
      ],
      inspiredByLabel: "Inspired by Orca",
    },
    finalCta: {
      kicker: "// 09 — TRY IT",
      title: "Ship your next attempt in parallel.",
      subtitle:
        "Star the repo, install the plugin, or read the docs. Everything is open source and runs on your machine.",
      ctaGithub: "github.com/wasdevv/swarm",
      ctaCli: "swarm-plugin (CLI)",
      ctaDocs: "Read the docs",
    },
  },
}

const pt: Dict = {
  profile: {
    nameLine1: "WASHINGTON",
    nameLine2: "CARDOSO.",
    role: "Desenvolvedor Full-Stack",
    yearsLabel: "3+ anos",
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
  },
  sidebar: {
    stats: [
      { value: "3+", label: "anos em Rails" },
      { value: "2s → 200ms", label: "redução de latência p99" },
      { value: "3x", label: "paths críticos mais rápidos" },
      { value: "99.9%+", label: "uptime em produção" },
    ],
    contactPhone: "+55 17 98843-2434",
    contactPhoneLabel: "Telefone",
    contactEmailLabel: "Email",
    contactLinkedInLabel: "LinkedIn",
    contactGithubLabel: "GitHub",
  },
  aboutMe: {
    codeTabs: {
      title: "Contexto",
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
        blocks: {
          openSource: {
            swarm: "Agent Development Environment (Rails 8 + Hotwire + Tauri)",
          },
          education: {
            degree: "Análise e Desenvolvimento de Sistemas",
            institution: "Wyden",
            status: "cursando",
            expected: "dez/2026",
          },
          languages: {
            portuguese: "nativo",
            english: "B2 (técnico)",
          },
        },
      },
      readme: {
        filename: "README.md",
        title: "Sobre",
        paragraphs: [
          "Engenheiro de Software Full Stack com mais de 3 anos de experiência no desenvolvimento de aplicações escaláveis em Ruby on Rails e plataformas SaaS multi-tenant.",
          "Experiência em arquitetura de backend, APIs REST, testes automatizados, CI/CD, observabilidade e otimização de desempenho.",
          "Histórico comprovado na entrega de melhorias mensuráveis em latência, confiabilidade e produtividade da equipe de desenvolvimento, construindo software de alta qualidade com arquitetura limpa e práticas modernas de engenharia de software.",
        ],
      },
      stack: {
        filename: "stack.json",
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
            "Desenvolvi o **Swarm**, um Agent Development Environment em **Rails 8 + Hotwire** que orquestra até **4 agentes Claude Code em paralelo por prompt**, cada um em worktree Git isolado com PTY em tempo real via **ActionCable** (xterm.js, streaming zero-latency, busca `Ctrl+Shift+F` e scrollback replay ao reconectar). Fornece grid `/compare` para eleger a melhor tentativa entre os agentes, diff ao vivo (committed, uncommitted e untracked) contra o merge-base com comentários por linha que voltam direto para a sessão do agente, merge `--no-ff` com um clique ou abertura de PR via **GitHub CLI**, preview do app em iframe embutido em porta livre, editor **CodeMirror 6** com autocomplete e syntax highlighting para 7+ linguagens (Ruby, JS/TS, HTML/ERB, CSS, JSON, YAML, Markdown), split-shell dentro do worktree, resume automático de sessão via `claude --continue` e histórico persistente com scrollback flushed a cada 5s. Empacotado como app desktop nativo (**Tauri 2 + WebView2** no Windows, backend Rails rodando em **WSL**), com i18n completa em pt-BR e inglês.",
            "Publiquei uma trilogia de plugins para o **Claude Code** cobrindo entrada, saída e efeitos colaterais do agente: **lean-output** comprime outputs de **RSpec**, **RuboCop** e **Brakeman** em **-70% a -97% de tokens** com garantia zero-loss de falhas; **rails-context** injeta dossiê curado (colunas, índices, associações, validações e rotas) reduzindo drasticamente a superfície lida pelo modelo em vez de carregar `db/schema.rb` e models inteiros; **rails-guard** intercepta comandos Rails destrutivos (`db:drop`, `db:reset`, `rails destroy`, `runner` com `delete_all`) via hook `PreToolUse`, exigindo confirmação humana antes da execução.",
          ],
        },
        {
          role: "DESENVOLVEDOR FULL STACK",
          company: "GoTechDS",
          period: "Jun 2023 — Jul 2023",
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
    openSourceItems: [
      {
        name: "PipelineHQ",
        year: "2026",
        url: "https://github.com/wasdevv/pipeline_hq",
        description:
          "**CRM B2B multi-tenant** full-stack construído em **Rails 8.1.3** — pipeline de vendas estilo Pipedrive/HubSpot. Usa **Solid Queue / Solid Cache / Solid Cable** (zero Redis, zero Sidekiq), **Hotwire** (Turbo + Stimulus), **Tailwind v4** e **auth nativa do Rails** estendida com **10 camadas de hardening** (TOTP 2FA, backup codes, sudo mode, rate limit, audit log, honeypot). Cada decisão é documentada em **ADR**.",
      },
      {
        name: "BrasilAPI Ruby",
        year: "2022",
        url: "https://github.com/wasdevv/BrasilAPI-ruby",
        description:
          "Tentativa no início da carreira de criar um **wrapper Ruby** pra **BrasilAPI**. O código era ingênuo na época, mas foi meu **primeiro mergulho em open-source** — publicar código público, lidar com empacotamento e aprender com a experiência.",
      },
    ],
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
        "Orquestre até 4 agentes Claude Code em paralelo, cada um em um worktree Git isolado. Revise diffs, faça merge da melhor tentativa, entregue mais rápido.",
    },
  },
  swarm: {
    hero: {
      kicker: "// PROJETO — DESTAQUE",
      title: "SWARM",
      tagline: "Agent Development Environment",
      subtitle:
        "Orquestre até 4 agentes Claude Code em worktrees Git paralelos. Revise o diff de cada tentativa, faça merge da melhor, entregue mais rápido — sem sair do localhost.",
      ctaGithub: "Estrela no GitHub",
      ctaCli: "Instalar plugin CLI",
      agentLabel: "agente",
    },
    pty: {
      kicker: "// 02 — AO VIVO",
      title: "Um prompt, quatro tentativas.",
      subtitle:
        "É assim que um spawn se comporta — PTY real via ActionCable, xterm.js no cliente, streaming sem latência.",
      promptLine: 'swarm> spawn 3 "adiciona paginação por cursor no DealsController#index"',
    },
    compare: {
      kicker: "// 03 — REVISÃO",
      title: "Grid de comparação.",
      subtitle:
        "Cada tentativa roda em seu próprio worktree, em sua própria branch. Compare lado a lado e escolha a melhor.",
      hint: "Passe o mouse para focar · clique para expandir",
      mergeLabel: "Mesclar",
      discardLabel: "Descartar",
      viewDiffLabel: "Ver diff",
      attempts: [
        {
          id: "20260715-1445-a3f2",
          elapsed: "2m14s",
          files: "3 arquivos · +48 −12",
          preview: "def index\n  @deals = policy_scope(Deal).paginate(cursor: params[:cursor])\n  render json: {\n    data: @deals,\n    next: @deals.next_cursor,\n  }\nend",
        },
        {
          id: "20260715-1445-b7c1",
          elapsed: "1m58s",
          files: "2 arquivos · +36 −8",
          preview: "def index\n  scope = policy_scope(Deal).order(:id)\n  @deals = scope.after(params[:cursor]).limit(25)\n  render json: DealSerializer.wrap(@deals)\nend",
        },
        {
          id: "20260715-1445-9d0e",
          elapsed: "3m01s",
          files: "5 arquivos · +72 −18",
          preview: "def index\n  paginator = CursorPaginator.new(\n    scope: policy_scope(Deal),\n    cursor: params[:cursor],\n    per: 25,\n  )\n  render json: paginator.page\nend",
        },
        {
          id: "20260715-1445-c204",
          elapsed: "2m47s",
          files: "4 arquivos · +52 −22",
          preview: "def index\n  @deals = DealQuery\n    .for(current_user)\n    .cursor_page(params[:cursor])\n  render json: @deals\nend",
        },
      ],
    },
    features: {
      kicker: "// 04 — CAPACIDADES",
      title: "Tudo que você precisa pra fanout e entrega.",
      subtitle: "Oito capacidades, um localhost.",
      items: [
        {
          title: "Worktrees isolados",
          description:
            "Cada agente ganha seu próprio worktree Git e branch — as tentativas nunca enxergam as mudanças uma da outra.",
        },
        {
          title: "PTY em tempo real",
          description:
            "xterm.js sobre ActionCable com streaming zero-latência, busca Ctrl+Shift+F e scrollback replay ao reconectar.",
        },
        {
          title: "Diff ao vivo",
          description:
            "Committed, uncommitted e untracked — tudo que o agente produziu contra o merge-base, atualizando sozinho.",
        },
        {
          title: "Comentários por linha",
          description:
            "Comente qualquer arquivo:linha no diff e o feedback volta direto pra sessão do agente.",
        },
        {
          title: "Merge com um clique",
          description:
            "Commita o worktree, --no-ff na branch padrão, remove o worktree — e aborta limpo em caso de conflito.",
        },
        {
          title: "PR via GitHub CLI",
          description:
            "Push da branch da task e abertura do PR via gh, direto da aba de Diff.",
        },
        {
          title: "Resume de sessão",
          description:
            "Agente morreu (limite de token, app fechado) — claude --continue reabre a mesma conversa no mesmo worktree.",
        },
        {
          title: "Desktop nativo",
          description:
            "Empacotado com Tauri 2 + WebView2 no Windows, com backend Rails rodando dentro do WSL. Sem terminal.",
        },
      ],
    },
    architecture: {
      kicker: "// 05 — POR DENTRO",
      title: "Como o fanout funciona.",
      subtitle:
        "Um prompt do usuário, N worktrees Git, N processos Claude Code streamados via ActionCable pra um único painel de revisão.",
      nodes: [
        { id: "prompt", label: "Prompt do usuário" },
        { id: "orchestrator", label: "Orquestrador Swarm" },
        { id: "worktrees", label: "Pool de worktrees" },
        { id: "ptys", label: "PTY 1..N" },
        { id: "claude", label: "Processos Claude Code" },
        { id: "cable", label: "Stream ActionCable" },
        { id: "diff", label: "Diff ao vivo" },
        { id: "ship", label: "Merge / PR" },
      ],
    },
    stack: {
      kicker: "// 06 — STACK",
      title: "Construído sobre.",
      items: [
        "Ruby 4.x",
        "Rails 8.1",
        "Hotwire",
        "Turbo",
        "Stimulus",
        "Tailwind v4",
        "PostgreSQL",
        "Solid Queue",
        "Solid Cache",
        "Solid Cable",
        "ActionCable",
        "xterm.js",
        "CodeMirror 6",
        "Tauri 2",
        "WebView2",
        "GitHub CLI",
      ],
    },
    roadmap: {
      kicker: "// 07 — ROADMAP",
      title: "Pra onde tá indo.",
      subtitle: "Entregue, em construção e planejado — como está hoje.",
      items: [
        {
          version: "v0.1",
          status: "shipped",
          title: "MVP do orquestrador",
          description: "Worktrees isolados, streaming PTY, revisão de diff ao vivo, merge / descarte / PR.",
        },
        {
          version: "v0.2",
          status: "shipped",
          title: "Grid de comparação",
          description: "Revisão lado a lado de N tentativas, comentários por linha voltando pro agente.",
        },
        {
          version: "v0.3",
          status: "shipping",
          title: "App desktop",
          description: "Shell nativo Tauri 2 + WebView2 pra Windows, backend Rails rodando dentro do WSL.",
        },
        {
          version: "v0.4",
          status: "planned",
          title: "Workspace multi-projeto",
          description: "Uma única sessão Swarm cobrindo vários repositórios, com diff e busca cross-repo.",
        },
        {
          version: "v0.5",
          status: "planned",
          title: "Integração MCP",
          description: "Adaptadores Model Context Protocol pra os agentes no Swarm chamarem as mesmas ferramentas do seu IDE.",
        },
      ],
    },
    story: {
      kicker: "// 08 — HISTÓRIA",
      title: "Como começou.",
      body: [
        "Eu queria a mesma ideia central do Orca — spawn de múltiplos agentes de código contra uma task e escolher o melhor — mas rodando 100% offline, empacotado como app nativo pro Windows, e construído sobre Rails 8 com Hotwire pra manter todo o loop num único processo.",
        "A primeira versão foram 400 linhas de Ruby e um painel xterm.js. Depois veio worktrees, depois diff ao vivo, depois comentários por linha voltando pra sessão do agente. Depois Tauri 2 pra empacotar como desktop de verdade. Depois um plugin CLI separado pra você ter 80% do valor dentro do próprio Claude Code.",
        "É a ferramenta que eu queria toda vez que digitava um prompt difícil e precisava adivinhar qual das cinco interpretações possíveis do meu agente ia vencer.",
      ],
      inspiredByLabel: "Inspirado no Orca",
    },
    finalCta: {
      kicker: "// 09 — EXPERIMENTA",
      title: "Envie sua próxima tentativa em paralelo.",
      subtitle:
        "Estrela no repo, instala o plugin, ou lê a documentação. Tudo é open source e roda na sua máquina.",
      ctaGithub: "github.com/wasdevv/swarm",
      ctaCli: "swarm-plugin (CLI)",
      ctaDocs: "Ler a documentação",
    },
  },
}

export const dictionaries: Record<Lang, Dict> = { en, pt }

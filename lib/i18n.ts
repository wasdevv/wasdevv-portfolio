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
            "Built **Swarm**, an Agent Development Environment on **Rails 8 + Hotwire + SQLite** that runs **1–4 Claude Code or Codex agents in parallel**, each in an isolated Git worktree and branch, streamed live from a real **PTY** over **ActionCable**. Every task goes through a **planner phase before any code is written** — the planner runs in the PTY, writes the plan and exits, and `on_exit` starts the coder pointed at it, so a failed plan never becomes code written blind. The workspace is a **tree of splittable panes serialized into the URL** (agent, terminal, chat, diff, preview, any file, or another attempt at the same prompt as tabs), with a file explorer, a **CodeMirror 6** editor and an embedded preview of the running app. Diff review carries **per-line comments that flow back into the agent's session**; **PR bodies are written server-side by a headless agent** from the real diff and the actual check results, with the golden path recorded in headless **Chrome (Ferrum)** and embedded as a GIF. Also ships **Design Mode** (annotate the live app like a Figma comment, sending the element's live DOM state rather than a screenshot), four **agent loop patterns** (Turn/Goal/Time/Proactive) behind cost, attempt and kill-switch guards with HMAC-verified webhooks, and **Trello / Linear / Jira** integrations. Single-process by design — the PTY registry lives in Puma's memory. Packaged as a native desktop app (**Tauri 2 + WebView2** on Windows with the Rails backend running inside **WSL**), with complete i18n in pt-BR and English.",
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
        "A desktop IDE for coding agents: 1–4 Claude Code or Codex agents in parallel Git worktrees, live PTYs, diff review with per-line comments, merge or PR.",
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
            "Desenvolvi o **Swarm**, um Agent Development Environment em **Rails 8 + Hotwire + SQLite** que roda **1 a 4 agentes Claude Code ou Codex em paralelo**, cada um em worktree Git e branch isolados, transmitidos ao vivo de um **PTY** real via **ActionCable**. Toda task passa por uma **fase de planner antes de escrever qualquer código** — o planner roda no PTY, escreve o plano e sai, e o `on_exit` sobe o coder com o ponteiro pro plano, de modo que plano falho nunca vira código escrito no escuro. O workspace é uma **árvore de painéis divisíveis serializada na URL** (agente, terminal, chat, diff, preview, qualquer arquivo, ou outra tentativa do mesmo prompt como abas), com explorer de arquivos, editor **CodeMirror 6** e preview embutido do app rodando. A revisão de diff traz **comentários por linha que voltam para a sessão do agente**; o **corpo do PR é escrito no servidor por um agente headless** a partir do diff real e do resultado real dos checks, com o golden path gravado em **Chrome headless (Ferrum)** e embutido como GIF. Inclui ainda **Design Mode** (anotar o app vivo como comentário de Figma, mandando o estado vivo do DOM do elemento em vez de screenshot), quatro **agent loop patterns** (Turn/Goal/Time/Proactive) atrás de guardas de custo, tentativas e kill-switch com webhooks verificados por HMAC, e integrações com **Trello / Linear / Jira**. Single-process por design — o registry de PTYs vive na memória do Puma. Empacotado como app desktop nativo (**Tauri 2 + WebView2** no Windows, backend Rails rodando em **WSL**), com i18n completa em pt-BR e inglês.",
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
        "Uma IDE desktop pra agentes de código: 1 a 4 agentes Claude Code ou Codex em worktrees Git paralelos, PTYs ao vivo, revisão de diff com comentários por linha, merge ou PR.",
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
}

export const dictionaries: Record<Lang, Dict> = { en, pt }

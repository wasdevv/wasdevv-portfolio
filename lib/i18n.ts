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

/** A "Software I've shipped" project card (Swarm, Serverless). */
type HomeCase = {
  kicker: string
  title: string
  /** Opening line; "*text*" is set in the italic serif. */
  lead: string
  body: string
  cta: string
  figures: { value: string; label: string }[]
  pillars: { title: string; text: string }[]
  decision: { label: string; text: string }
}

type HomeProject = {
  kicker: string
  title: string
  body: string
  bullets: string[]
  cta: string
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
    /** The /projects page. */
    page: {
      label: string
      /** "*text*" is set in the violet italic serif. */
      title: string
      intro: string
      count: string
      details: string
      code: string
      site: string
      private: string
    }
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
    currentLabel: string
  }
  contact: {
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
    form: {
      title: string
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
  swarm: {
    hero: {
      title: string
      tagline: string
      subtitle: string
      ctaGithub: string
      ctaCli: string
    }
    screens: {
      kicker: string
      title: string
      review: { alt: string; caption: string }
    }
    pty: {
      title: string
      subtitle: string
      promptLabel: string
      promptLine: string
      windowLabel: string
      lines: { kind: "sys" | "task" | "ok"; text: string }[]
    }
    compare: {
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
      title: string
      subtitle: string
      items: {
        title: string
        description: string
      }[]
    }
    automations: {
      title: string
      subtitle: string
      items: { title: string; description: string }[]
    }
    architecture: {
      title: string
      subtitle: string
      nodes: {
        id: string
        label: string
      }[]
    }
    stack: {
      title: string
      items: string[]
    }
    roadmap: {
      title: string
      subtitle: string
      items: {
        marker: string
        title: string
        description: string
      }[]
    }
    story: {
      title: string
      body: string[]
      inspiredByLabel: string
    }
    finalCta: {
      title: string
      subtitle: string
      ctaGithub: string
      ctaCli: string
      ctaDocs: string
    }
  }
  obrahub: {
    hero: {
      title: string
      tagline: string
      subtitle: string
      badges: string[]
      ctaContact: string
    }
    problem: {
      title: string
      subtitle: string
      beforeLabel: string
      beforeSteps: string[]
      items: { title: string; description: string }[]
    }
    rules: {
      title: string
      subtitle: string
      items: { title: string; description: string }[]
    }
    domain: {
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
      title: string
      subtitle: string
      items: { title: string; description: string }[]
      stackTitle: string
      stack: string[]
    }
    decisions: {
      title: string
      subtitle: string
      items: { title: string; description: string }[]
    }
    numbers: {
      title: string
      subtitle: string
      stats: { value: string; label: string }[]
      measuredTitle: string
      measured: { value: string; label: string }[]
    }
    status: {
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
  ecommerce: {
    hero: {
      title: string
      tagline: string
      subtitle: string
      badges: string[]
      ctaRepo: string
      ctaContact: string
    }
    overview: {
      title: string
      subtitle: string
      flowsTitle: string
      flows: string[]
      localTitle: string
      localBody: string
    }
    architecture: {
      title: string
      subtitle: string
      diagram: string
      items: { title: string; description: string }[]
    }
    problems: {
      title: string
      subtitle: string
      proofLabel: string
      items: { title: string; description: string; proof?: string }[]
    }
    ml: {
      title: string
      subtitle: string
      diagram: string
      items: { title: string; description: string }[]
    }
    infra: {
      title: string
      subtitle: string
      items: { title: string; description: string }[]
    }
    cicd: {
      title: string
      subtitle: string
      diagram: string
      items: { title: string; description: string }[]
    }
    observability: {
      title: string
      subtitle: string
      items: { title: string; description: string }[]
    }
    quality: {
      title: string
      subtitle: string
      stats: { value: string; label: string }[]
      layerLabel: string
      coverageLabel: string
      rows: { layer: string; coverage: string }[]
    }
    status: {
      title: string
      subtitle: string
      doneTitle: string
      done: string[]
      pendingTitle: string
      pending: string[]
      costTitle: string
      cost: string
      learnedTitle: string
      learned: string[]
      ctaRepo: string
      ctaContact: string
    }
  }
  // Copy for the / homepage. Strings support **bold** and `code` via HomeRich.
  home: {
    nav: {
      home: string
      work: string
      more: string
      lightMode: string
      darkMode: string
      projects: string
      obrahub: string
      swarm: string
      serverless: string
      experience: string
      about: string
      skills: string
      resume: string
      openToWork: string
    }
    hero: {
      badge: string
      roleAccent: string
      roleRest: string
      /** Short line under the name, items separated by " · ". */
      focus: string
      pitch: string
      pitchMore: string
      pitchStrong: string
      downloadResume: string
      emailMe: string
      shippedFor: string
      clients: string[]
      terminal: { title: string; boot: string[]; ready: string; localTime: string }
      facts: { label: string; value: string; accent?: boolean }[]
    }
    intro: {
      label: string
      statement: string
      details: string[]
      more: string
    }
    sectionIndex: {
      label: string
      about: string
      work: string
      case: string
      experience: string
      how: string
      contact: string
    }
    proof: {
      label: string
      heading: string
      items: {
        label: string
        before: string
        after: string
        /** Headline figure, counted from `start` to `value`. */
        value: number
        start: number
        decimals?: number
        prefix?: string
        unit: string
        /** Word set in the italic serif next to the figure. */
        word: string
        /** Optional italic serif line under the figure. */
        note?: string
        /** time: the violet "after" share shrinks from 1 to `to`; growth: it grows from `from` to `to`. */
        kind: "time" | "growth"
        from: number
        to: number
      }[]
    }
    highlights: { value: string; label: string }[]
    work: {
      title: string
      allProjects: string
      projects: {
        obrahub: HomeProject & {
          checks: string[]
          /** Headline figures for the Tork card, counted up when they appear. */
          figures: { value: string; label: string }[]
          screenshotAlt: string
          videoLabel: string
          play: string
          pause: string
          seek: string
          mute: string
          unmute: string
          volume: string
          expand: string
          collapse: string
          /** Video chapters; their start times live in components/home/tork-demo.tsx. */
          chapters: { title: string; text: string }[]
        }
        swarm: HomeCase & {
          screenshotAlt: string
          lifecycleTitle: string
          lifecycle: { title: string; text: string }[]
        }
        serverless: HomeCase & {
          diagramLabel: string
          opsNote: string
          provenTitle: string
          proven: { scenario: string; result: string }[]
        }
      }
      more: {
        trilogyKicker: string
        trilogyTitle: string
        trilogyBody: string
        shelflogKicker: string
        shelflogBody: string
        restKicker: string
        restTitle: string
        restCta: string
      }
    }
    bugCase: {
      kicker: string
      title: string
      cause: string
      fix: string
      facts: { label: string; value: string }[]
      fileLabel: string
    }
    testimonials: {
      title: string
      prev: string
      next: string
      pause: string
      play: string
      /** `role` reads "Role · Company"; `linkedin` is the author's profile URL, when known. */
      items: { quote: string; name: string; role: string; context: string; linkedin?: string }[]
    }
    contact: {
      label: string
      /** "*text*" is set in the violet italic serif. */
      title: string
      copy: string
      copied: string
      copyLabel: string
      availability: string
      resume: string
    }
    experience: {
      title: string
      showAll: string
      showLess: string
      items: {
        period: string
        role: string
        company: string
        summary?: string
        /** Headline figures shown as cards above the bullets. */
        stats?: { value: string; label: string; detail: string }[]
        /** When set, the first N bullets (in written order) are the ones shown before "Show all". */
        featured?: number
        bullets: string[]
        stack?: string
      }[]
    }
    howIWork: {
      title: string
      items: { stat: string; title: string; body: string }[]
    }
    skills: {
      title: string
      production: string
      builtWith: string
      groups: { label: string; production: string[]; builtWith: string[] }[]
    }
    footer: {
      kicker: string
      title: string
      resume: string
    }
  }
}

const en: Dict = {
  profile: {
    nameLine1: "Washington",
    nameLine2: "Cardoso",
    role: "Full-Stack Developer",
    yearsLabel: "4 years",
    location: "Brazil",
    tagline:
      "Ruby on Rails specialist building scalable web platforms with focus on performance, clean code and shipping real value.",
    availableLabel: "available for projects",
    downloadResume: "Download resume",
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
        { value: "35% → 89%", label: "test coverage via CI/CD" },
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
      title: "Professional experience",
      rolesLabel: "roles",
      items: [
        {
          role: "Full-Stack Developer",
          company: "Was Advisory",
          period: "Aug 2023 – Present",
          isCurrent: true,
          summary:
            "Building multi-tenant SaaS systems with Rails, PostgreSQL, Redis and React. Cut a critical endpoint from 3.5 seconds to 180 milliseconds and kept reliable workflows running at scale.",
          tags: ["Ruby on Rails", "PostgreSQL", "React", "Redis"],
          bullets: [
            "Optimized a critical endpoint, cutting latency from **3.5s to 180ms** (-94%) by identifying **N+1** queries, implementing **eager loading** and **3-layer Redis caching**, impacting **100k+ requests/day**.",
            "Rearchitected the CSV report export pipeline, replacing synchronous processing with an asynchronous architecture using **Sidekiq**, **PostgreSQL COPY**, streaming and **Amazon S3**, reducing export time of 1.77M records from ~80h to 7min (~600×).",
            "Optimized PostgreSQL queries on a base with **14M+ records**, designing composite indexes and refining query strategies that cut response time from **12.7s to 0.2ms** (~63,000×).",
            "Designed and delivered from scratch the **Extrato de Débitos** (Debt Statement) module with dynamic search over millions of tax debt installments, sustaining **17 incremental releases in 5 months** as the main author; eliminated N+1 in polymorphic associations (not resolvable by Rails eager loading) via manual preload, replaced in-memory ID loading with SQL subqueries and closed recurring 500 errors in production.",
            "Ensured penny-to-penny financial consistency across three independent screens diverging in production (**Extrato de Débitos**, **Atendimento** and **Maiores Devedores**), implementing a shared totals composition resolver that made taxpayer debt auditable line by line.",
            "Reduced write cost on high-volume tables by removing **33 unused indexes** and adding unique indexes on join tables via concurrent migrations (`algorithm: :concurrently`) applied with zero downtime.",
            "Diagnosed and fixed a race condition emitting duplicate protocol numbers in a municipal administrative system (same protocol generated 3× under double-click), replacing `SELECT MAX(number)+1` without lock with **pg_advisory_xact_lock** scoped by department and year, preserving cross-department concurrency, with explicit transaction guard and uniqueness validation as second defense layer.",
            "Architected and implemented the integration with the external **SINAL API**, documented in **OpenAPI/Swagger**, processing **100k+ records/month** in a **multi-tenant** environment, applying **Faraday**, **distributed Circuit Breaker (Stoplight)**, **Retry with Exponential Backoff**, **Outbox Pattern**, advisory locks in **PostgreSQL** and **Sidekiq** for asynchronous processing, sustaining **99.9% uptime** and zero duplicate records even with an unstable provider.",
            "Built automated test suites with **RSpec** and **Capybara**, raising coverage from **35% to 89%** and reducing production bugs through robust **CI/CD** pipelines, with **RuboCop** and **Brakeman** for static analysis and security.",
            "Evolved the critical **Acordos de Dívida Ativa** (Active Debt Agreements) module in a **multi-tenant** architecture serving **50+ municipalities**, during the system migration from **Rails 7 to Rails 8**, structured with **Devise**, **Service Objects** and **Form::Builder** to encapsulate complex fiscal rules, delivering **15+ per-municipality customizations via feature flags**, cutting delivery time by **60%**, zeroing cross-tenant regressions and reducing module-related support tickets by **59%**.",
            "Monitored production applications using observability tools (**Datadog**), identifying and resolving incidents proactively before they affected end users.",
            "Hands-on experience with **Kubernetes** in production (accessed via **Pritunl VPN**), using **ArgoCD** (GitOps), **Headlamp** and **Grafana** for continuous deploy, cluster management and incident monitoring in a high-availability environment.",
            "Built **ObraHub**, the labor tracking and billing system for **Engemil**, an industrial maintenance and assembly contractor, specified through successive rounds of review and feedback with the person who produced the whole process by hand: a **Rails 8 + PostgreSQL + Hotwire** monolith (Devise, Pundit, 12 policies, 19 importers/exporters) that replaced a paper-to-spreadsheet-to-retyping cycle. Imports the spreadsheet engineering already fills in, with **SHA-256 row digests** for idempotent `upsert_all` so re-uploading a file never duplicates; keeps each work package's balance as a **query, not a stored column**, so a 663h package shows its new balance the moment a report lands; and exports the monthly billing workbook **byte-identical** to the client's reference file: theme-colour fills with tint, ACCOUNTING number format and a two-column-per-hour-type summary layout, with a test that strictly parses the generated `styles.xml`. **899 examples, 0 failures**; **11,551h** closed in one month and **1,395 entries** imported and validated in **3s** in real use.",
            "Built **shelflog**, an installable **Rails** PWA for shelf expiry-date control, designed for use in **Muffato's PAS** (a major Brazilian supermarket chain): barcode and name lookup, a per-product status driven by configurable thresholds, and an hourly **Solid Queue** job that sends **web push** alerts for expired and soon-to-expire stock.",
            "Built **Swarm**, an Agent Development Environment on **Rails 8 + Hotwire + SQLite** that runs **1–4 Claude Code or Codex agents in parallel**, each in an isolated Git worktree and branch, streamed live from a real **PTY** over **ActionCable**. Every task goes through a **planner phase before any code is written**: the planner runs in the PTY, writes a PRD with acceptance criteria and exits, and `on_exit` starts the coder pointed at it, so a failed plan never becomes code written blind. The workspace is a **tree of splittable panes serialized into the URL** (agent, terminal, chat, diff, preview, any file, or another attempt at the same prompt as tabs), with a file explorer, a **CodeMirror 6** editor and an embedded preview of the running app. Diff review carries **per-line comments that flow back into the agent's session**; **PR bodies are written server-side by a headless agent** from the real diff and the actual check results, with the golden path recorded in headless **Chrome (Ferrum)** and embedded as a GIF. Also ships **Design Mode** (annotate the live app like a Figma comment, sending the element's live DOM state rather than a screenshot), four **agent loop patterns** (Turn/Goal/Time/Proactive) behind cost, attempt and kill-switch guards with HMAC-verified webhooks, and **Trello / Linear / Jira** integrations. Single-process by design: the PTY registry lives in Puma's memory. Packaged as a native desktop app (**Tauri 2 + WebView2** on Windows with the Rails backend running inside **WSL**), with complete i18n in pt-BR and English.",
            "Published a trilogy of **Claude Code** plugins covering agent input, output and side effects: **lean-output** compresses **RSpec**, **RuboCop** and **Brakeman** outputs by **-70% to -97% tokens** with a zero-loss guarantee on failures; **rails-context** injects a curated dossier (columns, indexes, associations, validations and routes), drastically shrinking the model's read surface instead of loading full `db/schema.rb` and models; **rails-guard** intercepts destructive Rails commands (`db:drop`, `db:reset`, `rails destroy`, `runner` with `delete_all`) via a `PreToolUse` hook, requiring human confirmation before execution.",
          ],
        },
        {
          role: "Full-Stack Developer",
          company: "GoTechDS",
          period: "Jun 2023 – Jul 2023",
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
          role: "Full-Stack Developer",
          company: "Independent \\\\ Blogs & Micro-SaaS",
          period: "Nov 2022 – May 2023",
          summary:
            "Delivered landing pages, blogs and small software products end to end, from discovery and database design to deployment and support.",
          tags: ["Full Stack", "Clients", "Delivery"],
          bullets: [
            "End-to-end delivery of **blogs, landing pages and mini-softwares** for direct clients, from discovery to production.",
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
    title: "Technical skills",
    subtitle: "Tools and technologies I use to ship",
    techTitle: "Technologies and tools",
    techSubtitle:
      "What I use day to day, and how deep I go in each one. Advanced means I have shipped and maintained it in production.",
    allLabel: "All",
    countSuffix: "technologies",
    levelLabel: "Skill level",
    levels: {
      ADVANCED: "Advanced",
      INTERMEDIATE: "Intermediate",
      FAMILIAR: "Familiar",
    },
    categories: {
      languages: "Languages",
      frameworks: "Frameworks and libraries",
      databases: "Databases",
      devops: "DevOps and cloud",
      testing: "Testing and quality",
      architecture: "Architecture",
    },
  },
  education: {
    title: "Education",
    items: [
      {
        degree: "AWS SERVERLESS DEMONSTRATED",
        school: "Amazon Web Services (AWS)",
        period: "Issued Sep 2026 · Expires Sep 2027",
      },
      {
        degree: "Systems Analysis and Development (in progress)",
        school: "Wyden – São José do Rio Preto, SP",
        period: "2024 – 2026 (expected Dec/2026)",
      },
      {
        degree: "Learn Rails and Ruby Programming",
        school: "Udemy – John Elder",
        period: "2023",
      },
      {
        degree: "English course",
        school: "CNA – São José do Rio Preto (Downtown)",
        period: "2019",
      },
    ],
  },
  projects: {
    title: "Projects",
    subtitle: "Some things I've built with modern technologies",
    filters: {
      all: "All projects",
      web: "Web apps",
      backend: "Backend & systems",
      tools: "Dev tools & AI",
    },
    liveSite: "Live site",
    viewCode: "View code",
    askAbout: "Private: ask me",
    page: {
      label: "// Projects",
      title: "Everything I've *built*.",
      intro: "Products in production, case studies, open-source tools and the experiments behind them.",
      count: "{count} projects",
      details: "Details",
      code: "Code",
      site: "Live",
      private: "Private",
    },
    prev: "Previous",
    next: "Next",
    pageLabel: "Page",
    items: {
      swarm: {
        type: "Desktop app",
        summary:
          "Agent Development Environment that runs 1–4 coding agents in parallel, each in an isolated git worktree with a live PTY, diff review and one-click merge.",
        details:
          "An **Agent Development Environment** on **Rails 8 + Hotwire** that runs **1–4 coding agents in parallel**, each in its own isolated **git worktree** with a real **PTY** streamed over **ActionCable**. Live diff with line comments that flow straight back into the agent's session, a `/compare` grid to pick the best attempt, one-click merge or PR, and a native desktop build via **Tauri 2 + WebView2** with the Rails backend inside **WSL**. **Automations** fire tasks on their own: cron schedules, GitHub CI failures through an **AWS Lambda + SQS** relay provisioned with **Terraform**, and Trello cards, with Jira, Linear and GitHub panels alongside.",
      },
      obrahub: {
        type: "Full Stack",
        summary:
          "In production at Engemil: turns the spreadsheets site engineers already fill in into labor tracking, daily reports and the measurement the client signs.",
        details:
          "**Currently in production at Engemil.** Tracks work executed on construction sites: each site has its assigned foremen, and each one logs how many hours they worked, in which role, on which day, with an optional photo. Admins bulk-import those entries from an **Excel** spreadsheet plus a zip of the photos. **Rails 8.1**, **PostgreSQL**, **Hotwire**, **Devise + Pundit**, **Solid Cache** and **Active Storage**, no JS bundler, no job queue.",
      },
      ecommerceServerless: {
        type: "Serverless Backend",
        summary:
          "E-commerce API on AWS Lambda: idempotent orders, transactional outbox to SQS, Terraform with OIDC CI/CD and SageMaker product recommendations.",
        details:
          "Study project: an e-commerce API on **AWS Lambda** (Node.js 24 + Express 5) where every guarantee has a test. Concurrency-safe stock debit, mandatory **Idempotency-Key**, a **transactional outbox** to **SQS** with SKIP LOCKED, **RDS Proxy**, presigned S3 uploads and item-item recommendations served by **SageMaker Serverless** with a best-sellers fallback. **10 Terraform modules**, 3 environments, secrets out of the state, **OIDC** deploys with manual prod approval, **OpenTelemetry/X-Ray** tracing, 69 tests against real PostgreSQL and Redis.",
      },
      tally: {
        type: "Backend",
        summary:
          "Bank return file reconciliation: a Kotlin engine accounts for every line (matched, in review, unmatched or rejected) and a Rails console shows it in EN and pt-BR.",
        details:
          "Reconciles **bank return files** against expected receivables and accounts for every single line: matched, awaiting review, unmatched, or rejected with a reason. A **Kotlin** engine decides and never emits human-facing text: it emits stable codes that a **Rails** console renders in English and pt-BR. Whatever the engine will not decide alone goes to a human queue carrying the candidates and the reason.",
      },
      pulse: {
        type: "API + Mobile",
        summary:
          "Self-hosted uptime and heartbeat monitoring: check workers, incident detection, email alerts and an Expo app with push notifications.",
        details:
          "Self-hosted **uptime and heartbeat monitoring**: paste a URL, it checks on a fixed interval and tells you when it goes down. **Fastify + TypeScript** API with **BullMQ** workers (check, reconcile, notify) over **PostgreSQL** and **Redis**, the whole stack up with a single `docker compose`. Ships an **Expo** mobile app with push notifications and a streaming **NDJSON** importer built on `pg-copy-streams`.",
      },
      pipelineHq: {
        type: "Full Stack",
        summary:
          "Multi-tenant B2B CRM on Rails 8.1 with Solid Queue, Cache and Cable, native auth hardened in 10 layers and an ADR behind every decision.",
        details:
          "Full-stack **multi-tenant B2B CRM** built on **Rails 8.1.3**: Pipedrive/HubSpot-style sales pipeline. Uses **Solid Queue / Solid Cache / Solid Cable** (zero Redis, zero Sidekiq), **Hotwire** (Turbo + Stimulus), **Tailwind v4** and **native Rails auth** extended with **10 hardening layers** (TOTP 2FA, backup codes, sudo mode, rate limit, audit log, honeypot). Each decision is backed by an **ADR**.",
      },
      jornada: {
        type: "Backend",
        summary:
          ".NET 9 timekeeping engine that computes each day against effective-dated labour rules and closes a period into an immutable, reproducible result.",
      },
      leanOutput: {
        type: "Claude Code plugin",
        summary:
          "Keeps long tool output out of the context window: spills it to disk behind a pointer and compresses RSpec, RuboCop and Brakeman without losing a failure.",
        details:
          "A **Claude Code plugin** that keeps long tool output out of the context window: it spills big results to disk and hands the model a pointer, withholds what the context already holds, and compresses **RSpec**, **RuboCop**, **Brakeman**, `git diff`, cargo and grep on the way past. Measured by replaying **12,008 real tool results (10.54 MB)**: fewer tokens, **zero lost failures**.",
      },
      amnesia: {
        type: "Real-time app",
        summary:
          "A lean Discord: real-time text and voice channels and screen sharing on Phoenix Channels and LiveKit, with an Electron desktop client.",
        details:
          "A lean Discord: real-time **text and voice channels**, screen sharing and a desktop app. **Elixir + Phoenix 1.8** Channels and Presence resolve rooms, join and who-is-online with no infrastructure code, **LiveKit** (SFU) carries the media, and the client is **Electron + React + Vite + Tailwind v4**.",
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
          "Paste a job description and get a **per-term verdict** against facts that have evidence behind them: already covered by a bullet, **earnable** (a fact describes that work and simply does not use the word), or a real **gap**, which the tool reports instead of writing it anyway. Coverage is read from bullet prose only, because a keyword sitting in a skills list scores nothing against an LLM matcher: measured **76% → 98%** by moving five terms into experience bullets.",
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
          "Blocks the irrecoverable Rails commands an agent might run (db:drop, db:reset, destructive runners) and asks first on the risky ones.",
      },
      railsContext: {
        type: "Claude Code plugin",
        summary:
          "Context engineering for Rails: hands the agent a curated digest of columns, associations, validations and routes instead of whole schema and model files.",
      },
      swarmPlugin: {
        type: "Claude Code plugin",
        summary:
          "Runs the same prompt across N isolated git worktrees in parallel, then lets you diff each attempt and merge the best one, or open a PR.",
      },
      systemDesignPrimer: {
        type: "Lab",
        summary:
          "A Rails 8 lab for system design: cache, N+1, indexes, hot keys, write contention and queues, each layer has to prove itself in a measured number.",
      },
      brasilApiRuby: {
        type: "Library",
        summary:
          "My first open-source step: an early Ruby wrapper for BrasilAPI. Learning to publish packages and code in public.",
        details:
          "Early-career attempt to build a **Ruby wrapper** for **BrasilAPI**. The code was naive at the time, but it was my **first dive into open-source**: publishing public code, dealing with packaging and learning from the experience.",
      },
    },
  },
  testimonials: {
    title: "Testimonials",
    subtitle: "What people say about my work",
    prevLabel: "Previous testimonial",
    nextLabel: "Next testimonial",
    goToLabel: "Go to testimonial",
    items: [
      {
        quote:
          "I worked with Washington on the Compras project, where he played a key role in raising the application's technical quality. Beyond shipping improvements to the project, he structured an automated testing initiative that took the RSpec suite's coverage from 35% to 89%. Along the way, Washington mentored me: creating and organizing testing cards in Trello, explaining which scenarios had to be covered and reviewing my implementations. His guidance helped me better understand RSpec, testing best practices and why preventing regressions matters. Washington showed not only technical knowledge but also organization, patience and a real ability to share what he knows. His leadership was essential to making the project more reliable and to my own professional growth.",
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
    title: "Languages",
    items: [
      { language: "Portuguese", level: "Native" },
      { language: "English", level: "B2 (technical)" },
    ],
  },
  resume: {
    title: "Resume",
    subtitle: "Career timeline and downloadable CV",
    downloadCta: "Download PDF",
    timelineTitle: "Career timeline",
    openSourceTitle: "Projects and open source",
    privateRepoLabel: "Private repo",
    currentLabel: "Current",
  },
  contact: {
    headline: "Got an idea? Let's build it together",
    headlineEmphasis: ".",
    subheadline:
      "Open to freelance projects, consulting and full-time opportunities.",
    ctaPrimary: "Start a conversation",
    ctaSecondary: "View resume",
    title: "Let's talk",
    body:
      "Got a project in mind or an opportunity to discuss? I'd love to hear from you.",
    emailLabel: "Email me",
    inboxLabel: "Inbox",
    socialLabel: "Find me online",
    available: "Available",
    channelsTitle: "Channels",
    metaLocation: { label: "Location", value: "Brazil, GMT-3" },
    metaResponse: { label: "Response time", value: "Within 24h" },
    form: {
      title: "New message",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "your@email.com",
      subjectLabel: "Subject",
      subjectPlaceholder: "What's this about?",
      messageLabel: "Message",
      messagePlaceholder:
        "Have a project in mind or a question to ask? Send me a message: I'll reply within 24 hours.",
      sendCta: "Send message",
    },
  },
  footer: "built with next.js + tailwind",
  swarm: {
    hero: {
      title: "Swarm",
      tagline: "Agent Development Environment",
      subtitle:
        "A desktop IDE for coding agents. Run 1–4 Claude Code or Codex agents in parallel Git worktrees, watch each one in a live PTY, review the diff with per-line comments, then merge or open the PR: all in one window.",
      ctaGithub: "View on GitHub",
      ctaCli: "CLI plugin",
    },
    screens: {
      kicker: "// IN THE APP",
      title: "The real app, not a mockup",
      review: {
        alt: "Swarm with a Claude Code session on the left and the diff review on the right, with a line-comment box under each file",
        caption: "Agent and review side by side: the live session on the left, the diff on the right, where line comments go back to the agent.",
      },
    },
    pty: {
      title: "Every task plans before it codes.",
      subtitle:
        "A task is born pending, with no worktree: creating one costs neither disk nor money. Start creates the worktree, the planner writes the plan and exits, and only then does on_exit bring up the coder. No non-empty plan, no coder.",
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
      title: "Attempts side by side, as tabs.",
      subtitle:
        "The screen is a tree of splits written into the URL. Any surface becomes a tab: the agent, a terminal, the chat, the diff, the preview, a file, or another attempt at the same prompt. That is how two different CLIs on one prompt end up next to each other.",
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
      title: "An environment, not a wrapper around one CLI.",
      subtitle: "Eight things it does, all on your machine.",
      items: [
        {
          title: "Planner writes a PRD, then coder",
          description:
            "The handoff is a PTY phase, not a job: the planner runs in the same pane, writes a PRD (problem, requirements, acceptance criteria, risks, steps) and exits, and on_exit starts the coder pointed at it. A PRD with no acceptance criteria stops the task with that reason: “the planner failed” never turns into “code in the dark”.",
        },
        {
          title: "Claude Code and Codex",
          description:
            "Two adapters behind one map: 1 to 4 agents in parallel, each in its own worktree and branch. A new CLI is a map entry plus a class; the validation and the form follow from there.",
        },
        {
          title: "Real PTYs",
          description:
            "PTY.spawn per pane, registered in memory by (task, pane), streamed base64 over ActionCable. Stop escalates HUP → TERM → KILL, and scrollback flushes to disk every 5s so an abrupt death loses at most 5 seconds.",
        },
        {
          title: "Panes live in the URL",
          description:
            "The layout is a tree of splits serialized into the query string. Switching tabs is reordering, closing is removing, splitting is inserting, every action is a link, so reload, back button and bookmarks all just work.",
        },
        {
          title: "Diff review that talks back",
          description:
            "Committed, uncommitted and untracked against merge-base, parsed server-side. Comment on any file:line and the comment goes back to the agent as an instruction.",
        },
        {
          title: "PR with real evidence",
          description:
            "The body is written server-side by a headless agent from the real diff, the original prompt and the actual check results: “no check command” and “never ran” stay distinct from a real result. The golden path is recorded in headless Chrome and embedded as a GIF.",
        },
        {
          title: "Preview and Design Mode",
          description:
            "The worktree's app boots in a PTY behind a proxy whose port detection does not rely on the stack honoring $PORT. Design Mode annotates the live screen like Figma comments: the element's live state is serialized from the DOM and re-rendered with the user's session, not screenshotted.",
        },
        {
          title: "Loops with guards",
          description:
            "Turn, Goal, Time and Proactive, all behind the same non-negotiable guards: cost ceiling, attempt ceiling, global kill switch, judgment timeout. An unreadable transcript stops the loop instead of counting as zero spent.",
        },
      ],
    },
    automations: {
      title: "Work that starts without you.",
      subtitle:
        "One Automations page holds everything that fires on its own (schedules, triggers and boards) with the controls, not just the list. Every run still goes through the cost, attempt and kill-switch guards.",
      items: [
        {
          title: "Scheduled tasks",
          description:
            "A cron expression, parsed by Fugit, fires a prompt into a fresh worktree on schedule. Optional run cap, pause and resume, and three honest states: active, paused and finished. Lowering the cap stops the schedule, so the panel and the scheduler never disagree.",
        },
        {
          title: "CI failure starts an agent",
          description:
            "A failed GitHub check suite opens a task on its own: HMAC-SHA256 over the raw body, actor allowlist, budget, run cap and cooldown. Branch and SHA pass a strict regex and the repo is pinned to the real git origin, so nothing from the payload reaches the prompt raw.",
        },
        {
          title: "Webhook relay on AWS",
          description:
            "Swarm runs behind NAT in WSL, where GitHub cannot reach it. A Lambda provisioned with Terraform keeps the raw body and headers in SQS without validating anything; the app drains the queue every minute over an outbound connection and runs the same HMAC check and deduplication as a direct delivery.",
        },
        {
          title: "Trello, both ways",
          description:
            "A card you are added to becomes a pending task, no worktree, no agent, nothing spent until you press Start. The other way, the card moves to Doing, PR and Done and gets a comment as the task starts, opens a PR and is merged or discarded.",
        },
        {
          title: "Jira, Linear and GitHub",
          description:
            "Tracker panels next to Tasks: Jira Cloud on the current /search/jql endpoint, Linear over GraphQL, and a GitHub panel for issues, PRs and projects in GitHub's own query syntax. An expired credential shows as an error, never as an empty backlog.",
        },
        {
          title: "Goal loop with a judge",
          description:
            "The PRD's acceptance criteria feed the Goal loop. A judge (QA gate, custom shell or evaluator) checks every attempt and retries until it passes, and every stop is named: passed, judge crash, budget exhausted, usage unavailable or attempts exhausted.",
        },
      ],
    },
    architecture: {
      title: "What happens when you press Start.",
      subtitle:
        "A pending task has no worktree. Start creates it, the planner writes a PRD and hands off to the coder in the same PTY, and everything the agent produces streams back through a single Puma process: the registry lives in memory, so WEB_CONCURRENCY is forbidden by design.",
      nodes: [
        { id: "task", label: "Task · pending" },
        { id: "start", label: "Start → worktree" },
        { id: "planner", label: "Planner → PRD" },
        { id: "adapters", label: "Claude Code · Codex" },
        { id: "coder", label: "Coder agent" },
        { id: "cable", label: "PTY + ActionCable" },
        { id: "workspace", label: "Panes · diff" },
        { id: "ship", label: "Merge / PR" },
      ],
    },
    stack: {
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
        "Solid Queue",
        "Fugit",
        "tmux",
        "AWS Lambda",
        "SQS",
        "Terraform",
        "GitHub Actions",
      ],
    },
    roadmap: {
      title: "What is already in.",
      subtitle: "Everything below is shipped and running: this is the tool as it exists, not a plan.",
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
          description: "Splittable panes serialized into the URL, with the explorer, editor, preview, chat and any file as draggable tabs, plus a Jump Palette for tasks, projects and commands.",
        },
        {
          marker: "04",
          title: "Two CLIs, one planner",
          description: "Claude Code and Codex adapters, and a planner phase that writes a PRD for every task before any code is written.",
        },
        {
          marker: "05",
          title: "PR with evidence",
          description: "Body written by a headless agent from the real diff and real check results; golden path recorded in headless Chrome as an inline GIF.",
        },
        {
          marker: "06",
          title: "Design Mode",
          description: "Annotate the running app like a Figma comment: the element is serialized from the live DOM and re-rendered with the user's session.",
        },
        {
          marker: "07",
          title: "Automations",
          description: "Cron schedules, CI-failure triggers through an AWS relay (Lambda + SQS on Terraform), Trello both ways, and Jira, Linear and GitHub panels.",
        },
        {
          marker: "08",
          title: "Desktop",
          description: "Tauri 2 window on a fixed port with its own process group; WebView2 on Windows, with Rails running inside WSL.",
        },
        {
          marker: "09",
          title: "CI/CD",
          description: "CI, infra and release workflows on GitHub Actions: RSpec, RuboCop and a security scan on every PR and push to main, and the Windows .exe built and released by Actions.",
        },
        {
          marker: "10",
          title: "tmux sidecar",
          description: "tmux as the backend for agent, shell and preview panes: phase A of ADR 001, shipped behind SWARM_TMUX=1.",
        },
      ],
    },
    story: {
      title: "How it started.",
      body: [
        "I wanted an IDE for coding agents, not a wrapper around one. Register a local repo, fire a prompt, and 1 to 4 agents go at it in parallel, each in its own Git worktree and branch, each in a live PTY, with the file explorer, the editor, the running app, the chat and the diff all in the same window.",
        "It is a Rails 8 app on Hotwire and SQLite, single-process by design: the PTY registry lives in Puma's memory, so WEB_CONCURRENCY is forbidden. Two processes mean two registries and a UI showing an empty terminal for an agent that is very much running. Tauri 2 wraps it as a native window; on Windows that is WebView2 with Rails running inside WSL.",
        "One rule ended up running through the whole thing: unknown must never become a value. A model missing from the price table pays the most expensive row. An unreadable transcript returns :unknown and stops the loop instead of counting as zero spent. And a prompt that assembles evidence has to tell the model where the hole is, because a prompt without evidence does not answer “I don't know”, it answers with a plausible invention.",
      ],
      inspiredByLabel: "View source on GitHub",
    },
    finalCta: {
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
      title: "ObraHub",
      tagline: "Labor tracking and billing for industrial field work",
      subtitle:
        "Built for Engemil, an industrial maintenance and assembly contractor in Mogi Guaçu, Brazil, and shaped from the start to generalize to a sector that all runs the same cycle. It replaces paper → spreadsheet → retyping with one flow: import the spreadsheet engineering already fills in, keep every work package's balance as a live account, and export the monthly billing document byte-identical to the format the client signs.",
      badges: ["Rails 8 monolith", "In production", "Active development"],
      ctaContact: "Talk about this project",
    },
    problem: {
      title: "Money escaped in the retyping.",
      subtitle:
        "Engemil allocates crews inside its largest client's plant, and every month it has to prove (job by job, person by person, day by day) how many hours were worked and what they cost. That document is signed by both sides. Before the system, producing it looked like this:",
      beforeLabel: "The old cycle",
      beforeSteps: [
        "the foreman writes on paper who worked, in what role, for how many hours",
        "someone types that into a tracking spreadsheet",
        "at month end, someone retypes it into a second spreadsheet: the billing one, in the format the client accepts",
        "the client checks it cell by cell and signs",
      ],
      items: [
        {
          title: "Retyping is where money escapes",
          description:
            "An hour that never got transcribed never got billed, and nobody finds out, because there is nothing to compare it against.",
        },
        {
          title: "There is no balance",
          description:
            "The client approves work packages with budgeted hours. Knowing how much was left in a package meant adding up entries by hand.",
        },
        {
          title: "The client's format is law",
          description:
            "The billing spreadsheet has an exact shape: font, colour, number format, block position. A billing document that merely looks similar comes back.",
        },
      ],
    },
    rules: {
      title: "Nothing here came from a written spec.",
      subtitle:
        "The system was drawn out in successive rounds of discussion, review and feedback with the person at Engemil who was responsible for producing all of this by hand, each round trading an assumption for a fact about the operation. The real artefacts served as the specification: the reference billing workbook, the engineering tracking spreadsheet, the master package sheet and the job register. Three rules that only ever surface in conversation with someone who has done the work:",
      items: [
        {
          title: "The job has no type",
          description:
            "The system briefly had Project#kind (ase | hh | pacote). It was wrong: the same job has package days, hourly days and extra-service days. What declares the nature of the work is the daily report, not the job record. The column was removed.",
        },
        {
          title: "Two of the codes are not hours at all",
          description:
            "FE and FO are codes, not time. And the night-shift differential is a 45% uplift on the rate, not time worked: adding it to the hours inflated the billing.",
        },
        {
          title: "74 of 84 packages have no date",
          description:
            "They carry the word “UNIFIED” where the issue date should be. The field became optional because of that, not out of modelling elegance.",
        },
      ],
    },
    domain: {
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
            "Project is the job. Package is the slice the client asked to be quoted on its own: it carries estimated hours, sale value and billed value.",
        },
        {
          name: "Rdo",
          description:
            "The daily work report: job, period, who signs, description, photo. It declares the nature of the day: package (draws down a Package), hourly (draws down nothing), or authorised extra service, identified by its own code, which is the code the invoice cites.",
        },
        {
          name: "WorkEntry",
          description: "The line inside the report: person, role, date, hours, hour type, photo.",
        },
        {
          name: "Employee",
          description:
            "The person in the field: deliberately not a User. A crew of hundreds cannot become hundreds of logins nobody remembers to revoke.",
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
        "Used hours, remaining hours, progress and value-to-bill all come out of a query at read time. A 663-hour package that receives a 9-hour report shows 654 hours remaining immediately, with no column being written, and therefore none of the classic risk of a stored total drifting from the lines that make it up.",
    },
    architecture: {
      title: "One process, one database, one deploy.",
      subtitle:
        "It is a Rails monolith, and that is a choice rather than a limitation. The data is tightly related (an hour entry only exists inside a daily report, which only exists inside a job) and there are no two teams moving at different speeds. Splitting it into services would buy distributed transactions for a company that closes one billing cycle a month.",
      items: [
        {
          title: "Models",
          description: "The rules that always hold: validation, scoping, balance calculation.",
        },
        {
          title: "Policies · 12",
          description:
            "Who can see and do what, per record. The same policy scope that filters the list filters the autocomplete and the dashboard: a counter that sums hours the viewer may not read is a leak wearing the face of a metric.",
        },
        {
          title: "Query objects",
          description:
            "Measurement, ProjectWorkReport, DashboardReport, RdoQuery: reads that do not deserve to be models.",
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
      title: "The parts that cost the most to get right.",
      subtitle: "Four problems where the obvious implementation is the wrong one.",
      items: [
        {
          title: "The client's workbook, cell by cell",
          description:
            "“Identical” does not mean “similar”. The work was unzipping the reference .xlsx and reading the XML, because the eye does not catch what breaks: fills use theme colours with tint rather than RGB, so reading only the RGB attribute sees no fill at all; money uses the ACCOUNTING format, which is what pins the currency symbol to the left edge and the number to the right; and in the summary sheet each hour type occupies two columns, so writing into consecutive columns puts every value two cells to the left. There is a test that strictly parses the generated styles.xml, because an unescaped quote in a format code produces a file Excel refuses to open, and neither the reading library nor the content tests notice.",
        },
        {
          title: "Importing twice must not duplicate",
          description:
            "The idempotency key is a SHA-256 of the row: job, foreman, role, date and hour type. An upsert updates the same record instead of creating a second one. Without the hour type in the digest, a regular and an overtime entry on the same day collided and one vanished. A detail that cost real time: the digest carries the package id only when there is one. Adding it unconditionally would change the digest of everything already stored, and the next upload of the same file would create a copy of every line.",
        },
        {
          title: "The importer creates records, but never invents money",
          description:
            "Missing jobs, roles, employees and users are created, and the screen says which ones: creating silently is what turns a misspelled role into a permanent record nobody can trace. A missing package, though, rejects the line: packages carry estimated hours and a sale value, so inventing one would write a budget nobody approved.",
        },
        {
          title: "The phone is not a smaller version of the screen",
          description:
            "The foreman is on site with a phone. A seven-column table behind horizontal scroll technically fits, and nobody drags to the status column without a header in view to know where they are. Below 640px every table becomes a labelled card, with the label coming from each cell's data attribute. A test fails any new table that skips it, because such a table would pass every request spec and still disappear on the phone.",
        },
      ],
    },
    numbers: {
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
        { value: "216", label: "daily reports built from the spreadsheet engineering already filled in, nobody typed a report" },
        { value: "3 s", label: "to import 1,395 entries, check them against the register and reject what does not match" },
        { value: "24", label: "sheets in the billing workbook, in the format the client signs" },
      ],
    },
    status: {
      title: "In production, and honestly unfinished.",
      subtitle:
        "A portfolio that only lists what worked does not survive the next question. Scale tests count queries: a listing has to cost the same with ten records and with ten thousand. A real import file reaches 8,504 daily reports, which is why batch closing is one SQL statement per slice rather than a walk record by record.",
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
        "the PACKAGE lines of the billing document are not generated by the exporter yet: the data already exists, the layout mapping does not",
        "two jobs remain in the repository with nothing enqueueing them: either async comes back on purpose, or they go",
        "no browser tests: real horizontal scroll and mobile Safari zoom are still a manual check",
        "standardising the register screens under an inherited CRUD is decided and not started",
      ],
      directionTitle: "Where it is headed",
      direction:
        "It was built for one contractor, but the cycle it replaces is not specific to one: crews allocated inside a client's plant, hours proven month by month, a billing document in a format the client dictates. Generalizing it into a product for that sector is the direction: the multi-client work has not started, and nothing here is sold to a second company yet.",
      ctaLabel: "Talk about this project",
    },
  },
  ecommerce: {
    hero: {
      title: "Serverless",
      tagline: "E-commerce API on AWS Lambda",
      subtitle:
        "An e-commerce API on AWS Lambda with infrastructure as code, CI/CD on GitHub Actions, full observability and Machine Learning product recommendations. The goal: every decision has a written reason, and every guarantee has a test that proves it.",
      badges: [
        "Node.js 24",
        "Express 5",
        "AWS Lambda",
        "API Gateway",
        "RDS PostgreSQL",
        "ElastiCache (Valkey)",
        "SQS",
        "EventBridge",
        "S3",
        "SageMaker",
        "Terraform",
        "GitHub Actions",
        "OpenTelemetry",
        "X-Ray",
        "Docker Compose",
        "Python",
      ],
      ctaRepo: "github.com/wasdevv/ecommerce-serverless",
      ctaContact: "Talk about this project",
    },
    overview: {
      title: "More than a Lambda hello world.",
      subtitle:
        "A study project built to practise how a serverless backend is really made: transactions, idempotency, async events, least-privilege IAM and a real deploy pipeline.",
      flowsTitle: "What the API covers",
      flows: [
        "sign-up and login with JWT",
        "paginated, cached catalogue",
        "transactional, idempotent orders",
        "image upload straight to S3",
        "asynchronous event processing",
        "personalised product recommendations",
      ],
      localTitle: "Runs without an AWS account",
      localBody:
        "The whole stack runs locally with docker compose, and the same application runs on Lambda without changing a line.",
    },
    architecture: {
      title: "4 Lambdas, 4 different triggers.",
      subtitle:
        "A private VPC across 2 availability zones. RDS and ElastiCache have no public access, and every connection uses TLS.",
      diagram: `client ─HTTPS→ API Gateway ─→ λ api (Express 5)
                                ├─→ RDS Proxy ─→ PostgreSQL
                                ├─→ ElastiCache (Valkey)
                                ├┄→ S3, private           presigned POST
                                └┄→ SageMaker serverless  InvokeEndpoint

EventBridge ─→ λ dispatcher ─→ SQS ─→ λ worker
                                └┄→ DLQ

λ ops        no HTTP route: migrations and admin tasks`,
      items: [
        {
          title: "api",
          description: "Express 5 behind API Gateway. The same app runs in docker compose locally.",
        },
        {
          title: "dispatcher",
          description: "Scheduled by EventBridge. Publishes pending outbox events to SQS.",
        },
        {
          title: "worker",
          description: "Consumes SQS with partial batch failure, so one bad message goes to the DLQ without blocking the batch.",
        },
        {
          title: "ops",
          description: "No HTTP route at all: migrations, training data export and admin tasks.",
        },
        {
          title: "10 Terraform modules",
          description: "Three environments (dev, staging, prod), each with its own state.",
        },
        {
          title: "RDS Proxy",
          description: "Each Lambda execution environment opens its own connections and can exhaust the database in a traffic spike. The proxy keeps the pool and multiplexes them.",
        },
      ],
    },
    problems: {
      title: "Each guarantee has a test behind it.",
      subtitle:
        "The failures a real store hits under concurrency, retries and outages, and how the API handles each one.",
      proofLabel: "test",
      items: [
        {
          title: "No negative stock, even under concurrency",
          description:
            "Stock is debited with UPDATE … WHERE stock >= quantity inside the order transaction, taking locks in a fixed order to avoid deadlocks. A database constraint is the last line of defence.",
          proof: "4 concurrent buyers fight over 1 unit, and exactly one gets 201.",
        },
        {
          title: "No duplicate order from a client retry",
          description:
            "The Idempotency-Key header is mandatory. The same key with the same body returns the same order with no new stock debit. The same key with a different body returns 409.",
          proof: "3 concurrent retries with the same key become a single order.",
        },
        {
          title: "No event lost between the database and the queue",
          description:
            "Transactional outbox: the event is written in the order's transaction, and a dispatcher publishes it with FOR UPDATE SKIP LOCKED, so two dispatchers never publish the same event. The worker deduplicates by event id.",
          proof: "With SQS down, the event waits in the outbox and is published when the queue comes back.",
        },
        {
          title: "A cache that can't take the app down",
          description:
            "Cache-aside on Redis treats every error as a miss, with short timeouts. If Redis goes down, the catalogue keeps answering straight from the database.",
        },
        {
          title: "Safe uploads",
          description:
            "Presigned POST instead of PUT, because only the POST policy can cap the file size. The server generates the object key inside the user's own prefix, so no client can write into another user's space.",
        },
        {
          title: "Database connections from Lambda",
          description:
            "RDS Proxy holds the connection pool so a burst of cold Lambda environments doesn't exhaust PostgreSQL.",
        },
      ],
    },
    ml: {
      title: "Recommendations from what similar customers bought.",
      subtitle:
        "GET /api/v1/recommendations suggests products from item-item collaborative filtering, served by SageMaker Serverless Inference.",
      diagram: `PostgreSQL ─→ anonymised export ─→ S3 ─→ Python training ─→ model.tar.gz
                                                                  │
λ api ─InvokeEndpoint, 800 ms→ SageMaker Serverless ←─────────────┘
  └─ timeout · no history · model down ─→ best sellers`,
      items: [
        {
          title: "The right model for the problem",
          description:
            "Item-item collaborative filtering with cosine similarity, trained from scratch on the purchase history. Fine-tuning was ruled out on purpose: it needs a pre-trained model, a GPU and data volume a small store doesn't have.",
        },
        {
          title: "Pay per invocation",
          description:
            "SageMaker Serverless Inference with the official scikit-learn container. No instance running 24 hours a day.",
        },
        {
          title: "An optional dependency",
          description:
            "With an 800 ms timeout, no customer history or the model down, the API answers with best sellers. The X-Recommendation-Source header says where the list came from.",
        },
        {
          title: "Consistent with the store",
          description:
            "The model only returns ids. Price and stock always come from the database, so an out-of-stock product is never recommended.",
        },
        {
          title: "Private and reproducible",
          description:
            "The training export turns the customer id into an HMAC with a fresh random salt each time. The same data produces a byte-identical artifact, and the model version is the hash of its content.",
        },
        {
          title: "Tested end to end",
          description:
            "One test exports from PostgreSQL, trains, starts the inference server and checks that the API switches from “best sellers” to “model”.",
        },
      ],
    },
    infra: {
      title: "Terraform with no secrets in the state.",
      subtitle: "10 modules, 3 environments, and a test suite that runs without an AWS account.",
      items: [
        {
          title: "Secrets out of the state",
          description:
            "RDS generates and keeps its own password (manage_master_user_password). The JWT key is an ephemeral value written through a write-only argument, so it never appears in the Terraform state.",
        },
        {
          title: "Least-privilege IAM",
          description:
            "One role per function, each reaching only what that function uses. api can only invoke the recommendation endpoint; ops can only write under training/.",
        },
        {
          title: "Configuration guards",
          description: "A check block refuses a production plan without Multi-AZ.",
        },
        {
          title: "Native state locking",
          description: "Locking happens natively in S3, with no DynamoDB table.",
        },
        {
          title: "terraform test with a mocked provider",
          description:
            "Validates all three environments across 8 scenarios, with no AWS account and no cost.",
        },
        {
          title: "Generated docs",
          description: "Each module has a README produced by terraform-docs and checked in CI.",
        },
      ],
    },
    cicd: {
      title: "No AWS keys in GitHub.",
      subtitle: "GitHub Actions authenticates with OIDC, and production needs a human to approve.",
      diagram: `pull request ─┬─→ tests · lint · build · compose + smoke · terraform
              └─→ terraform plan × 3 environments (read-only role)

push main ───→ deploy dev ─→ deploy prod (manual approval)`,
      items: [
        {
          title: "OIDC instead of keys",
          description:
            "The production role can only be assumed by a job in the prod environment, which requires manual approval.",
        },
        {
          title: "Pull requests never apply",
          description: "The plan role is read-only.",
        },
        {
          title: "Deploy from the saved plan",
          description:
            "Serialised per environment, followed by migrations and a smoke test.",
        },
        {
          title: "Full local stack in CI",
          description:
            "docker compose comes up and the smoke test goes from sign-up to order, through the trained recommendation.",
        },
      ],
    },
    observability: {
      title: "Follow one order from HTTP to the worker.",
      subtitle: "Structured logs, end-to-end correlation, tracing and alarms on what actually breaks.",
      items: [
        {
          title: "Structured JSON logs",
          description:
            "Every line carries the correlation ID and trace ID. Password, token and email are redacted automatically.",
        },
        {
          title: "End-to-end correlation ID",
          description:
            "It crosses the HTTP request, the outbox, the SQS message and the worker, so one saved CloudWatch Logs Insights query shows an order's whole path.",
        },
        {
          title: "OpenTelemetry and X-Ray",
          description:
            "Locally, an OpenTelemetry collector runs as a sidecar. On Lambda, where there are no side-by-side containers, the equivalent is X-Ray through a Lambda Extension.",
        },
        {
          title: "Dashboard and alarms",
          description:
            "A CloudWatch dashboard and alarms for 5xx, p95 latency, errors per function, any message in the DLQ and messages ageing in the queue.",
        },
      ],
    },
    quality: {
      title: "Tested against the real thing.",
      subtitle:
        "Row locks, constraints, transactions and SKIP LOCKED don't exist in a mock, so the tests use a real database and cache on purpose.",
      stats: [
        { value: "69", label: "backend tests against real PostgreSQL and Redis" },
        { value: "~95%", label: "line coverage (~83% branches, CI floor of 80%)" },
        { value: "9", label: "ML tests: training, inference contract and HTTP server" },
        { value: "8", label: "terraform test scenarios" },
      ],
      layerLabel: "Layer",
      coverageLabel: "Coverage",
      rows: [
        { layer: "Backend (Jest + Supertest)", coverage: "69 tests against real PostgreSQL and Redis" },
        { layer: "Machine Learning (unittest)", coverage: "9 tests: training, inference contract and HTTP server" },
        { layer: "Infrastructure", coverage: "terraform fmt, validate and test (8 scenarios)" },
        { layer: "Artifact", coverage: "The Lambda zip is unpacked the way AWS does it and invoked with a real API Gateway event" },
        { layer: "Integration", coverage: "Smoke test against the full Docker Compose stack" },
      ],
    },
    status: {
      title: "What is proven, and what isn't yet.",
      subtitle: "The pipeline is ready. A deploy to a real AWS account has not run yet.",
      doneTitle: "Verified",
      done: [
        "tests, lint, build, Terraform validate/test and the Docker stack, all in CI",
        "recommendations end to end, locally and in CI",
      ],
      pendingTitle: "Pipeline ready, not run yet",
      pending: ["deploy to a real AWS account: apply, SageMaker, X-Ray"],
      costTitle: "Estimated cost",
      cost:
        "About US$ 0.12/hour for the dev environment. It's an estimate, not a bill. Fixed costs dominate: NAT, RDS Proxy, RDS and ElastiCache, not the Lambdas. That's why the project runs 100% locally and goes up to AWS only to test, torn down the same day.",
      learnedTitle: "What I learned",
      learned: [
        "The gap between “written to the database” and “published to the queue” is real, and the outbox closes it.",
        "Idempotency has to be designed in from the start, not added later.",
        "Serverless has hidden fixed costs: NAT, Proxy and the database bill while idle, and the Lambdas barely register.",
        "Pick the ML model that fits the problem. Simple, explainable collaborative filtering beats a big model when data is scarce.",
        "Optional dependencies (cache, ML model) need a timeout and a fallback, so their failure never becomes the user's failure.",
        "Infrastructure security: OIDC instead of keys, secrets out of the state and minimal IAM per function.",
        "Writing down why each decision was made is worth as much as the code.",
      ],
      ctaRepo: "Read the code",
      ctaContact: "Talk about this project",
    },
  },
  home: {
    nav: {
      home: "Home",
      work: "Work",
      more: "More",
      lightMode: "Switch to light mode",
      projects: "Projects",
      darkMode: "Switch to dark mode",
      obrahub: "ObraHub",
      swarm: "Swarm",
      serverless: "Serverless",
      experience: "Experience",
      about: "About",
      skills: "Skills",
      resume: "Resume",
      openToWork: "Open to work",
    },
    hero: {
      badge: "Available now · open to remote",
      roleAccent: "Full-Stack",
      roleRest: "Software Engineer",
      focus: "Backend-focused · Performance · Reliability",
      pitch: "I build systems that don't break under pressure.",
      pitchMore: "Performance, reliability and scalable architecture. From complex backend systems to polished user experiences.",
      pitchStrong: "Complex problems. Elegant solutions. Measurable impact.",
      downloadResume: "Download resume",
      emailMe: "Email me",
      shippedFor: "shipped for",
      clients: ["Pare.Ai", "W/P Advisory", "Universe Pro", "Tork", "GoTechDS"],
      terminal: {
        title: "washington — zsh",
        boot: [
          "4 years of Ruby on Rails in production",
          "PostgreSQL tuned on 14M+ rows",
          "p99 latency 3.5 s → 180 ms",
          "test coverage 35% → 89%",
          "resume.pdf ready to download",
        ],
        ready: "ready",
        localTime: "Local time",
      },
      facts: [
        { label: "Availability", value: "Immediate", accent: true },
        { label: "Work model", value: "Remote · Brazil or abroad" },
        { label: "Location", value: "São José do Rio Preto, SP" },
        { label: "English", value: "B2 · daily in PRs and docs" },
        { label: "Contract", value: "PJ · CLT · International B2B" },
      ],
    },
    intro: {
      label: "About",
      statement:
        "From distributed systems to AI-powered products, I turn complex problems into *reliable software*.",
      details: [
        "I build and optimize software systems where performance, reliability, and scalability matter.",
        "With nearly four years of engineering experience, I've worked on production-grade Ruby on Rails platforms serving 50+ Brazilian municipalities, alongside full-stack applications, distributed architectures, and cloud infrastructure.",
        "I'm also deeply interested in AI Engineering — building LLM integrations, RAG systems, autonomous agents, and developer tools with Claude, OpenAI, MCP, and modern orchestration frameworks.",
        "I enjoy solving complex engineering problems, improving developer workflows, and turning ambitious ideas into dependable software.",
      ],
      more: "More about me",
    },
    sectionIndex: {
      label: "Sections",
      about: "About",
      work: "Work",
      case: "Case",
      experience: "Experience",
      how: "How I work",
      contact: "Contact",
    },
    proof: {
      label: "// Measured in production",
      heading: "Before → after, *on real traffic*",
      items: [
        { label: "critical endpoint · 100k req/day", before: "3.5 s", after: "180 ms", value: 19, start: 1, unit: "×", word: "faster", kind: "time", from: 1, to: 180 / 3500 },
        { label: "csv export · 1.77M rows", before: "~80 h", after: "7 min", value: 690, start: 1, prefix: "~", unit: "×", word: "faster", kind: "time", from: 1, to: 7 / 4800 },
        { label: "query · 14M rows", before: "12.7 s", after: "0.2 ms", value: 0.2, start: 12700, decimals: 1, unit: " ms", word: "", note: "composite index", kind: "time", from: 1, to: 0.2 / 12700 },
        { label: "test coverage · rspec", before: "35%", after: "89%", value: 54, start: 0, prefix: "+", unit: "", word: "pts", kind: "growth", from: 0.35, to: 0.89 },
      ],
    },
    highlights: [
      { value: "50+", label: "municipalities on one codebase" },
      { value: "17", label: "releases in 5 months as main author" },
      { value: "99.9%", label: "uptime on an unstable provider" },
      { value: "0", label: "downtime index migrations" },
    ],
    work: {
      title: "Software I've shipped",
      allProjects: "All {count} projects →",
      projects: {
        obrahub: {
          kicker: "formerly ObraHub · in production at Engemil",
          title: "Tork",
          body: "Labor tracking and billing for an industrial contractor that ran on paper, spreadsheets and retyping. Built round by round with the person who did the job by hand.",
          bullets: [
            "Re-uploading a file never duplicates a row",
            "Billing workbook exported identical to the client's reference file",
            "11,551 hours closed in its first month",
          ],
          cta: "See it in more detail →",
          checks: ["PostgreSQL RLS between tenants", "Excel identical to the client's template", "Signed by phone, no login"],
          figures: [
            { value: "1,900+", label: "RSpec tests" },
            { value: "95%", label: "line coverage" },
            { value: "5", label: "hour categories calculated" },
          ],
          screenshotAlt: "ObraHub dashboard: 354 hours worked in 30 days, with a daily bar chart",
          videoLabel: "Tork product demo: from the daily report on the phone to the month-end measurement",
          play: "Play the demo",
          pause: "Pause the demo",
          seek: "Video timeline",
          mute: "Mute",
          unmute: "Turn sound on",
          volume: "Volume",
          expand: "Expand",
          collapse: "Exit",
          chapters: [
            { title: "Logged once, on site", text: "The foreman files the daily report on his phone; hours are calculated" },
            { title: "Live office dashboard", text: "Every site's progress and package balance, in real time" },
            { title: "Approved and signed", text: "The supervisor approves; the client signs by phone, no login" },
            { title: "Measurement, ready", text: "Month-end billing by person and role, straight from the reports" },
          ],
        },
        swarm: {
          kicker: "AI engineering project · multi-agent platform",
          screenshotAlt: "Swarm with a Claude Code session on the left and the diff review on the right",
          title: "Swarm",
          lead: "*250+ pull requests* in 30 days. One orchestrated AI engineering workflow.",
          body: "An autonomous multi-agent software engineering platform. It runs Claude Code and Codex in parallel, coordinates persistent AI teams, automates the development workflow and reviews every implementation in one real-time workspace.",
          cta: "See it in more detail →",
          figures: [
            { value: "250+", label: "pull requests in a single month" },
            { value: "100+", label: "isolated git worktrees" },
            { value: "4", label: "concurrent agents, Claude Code + Codex" },
            { value: "3", label: "review rounds between agents" },
          ],
          pillars: [
            { title: "Up to 4 parallel agents", text: "Claude Code and Codex working at the same time, each in an isolated environment" },
            { title: "Autonomous AI teams", text: "Persistent agents that collaborate, delegate and review each other's work" },
            { title: "Cost-aware execution", text: "Per-task token tracking, spending limits and fail-closed cost governance" },
            { title: "Native desktop app", text: "Windows desktop through Tauri 2, Rust and WSL integration" },
          ],
          decision: {
            label: "One Rails process, on purpose",
            text: "PTY terminals and agent sessions live in the Puma process's memory, and the architecture is designed around that.",
          },
          lifecycleTitle: "AI-driven engineering lifecycle",
          lifecycle: [
            { title: "PRD & requirements", text: "Scope, constraints and acceptance criteria" },
            { title: "Technical planning", text: "Architecture decisions and task breakdown" },
            { title: "Parallel implementation", text: "Agents work in isolated git worktrees" },
            { title: "Automated review", text: "AI teams inspect diffs and send feedback" },
            { title: "Validation & delivery", text: "Tests, pull request, review fixes, merge" },
          ],
        },
        serverless: {
          kicker: "Study project · Node.js, React, React Native & AWS",
          title: "Full-stack AI-powered serverless e-commerce platform",
          lead: "*4 buyers, 1 unit:* exactly one purchase. Every guarantee has a test that proves it.",
          body: "A web and mobile storefront (React and React Native) on one serverless AWS backend: 4 independently triggered Lambdas in a private VPC, with product recommendations from SageMaker and generative features from the Claude API.",
          cta: "See it in more detail →",
          figures: [
            { value: "95%", label: "backend line coverage" },
            { value: "83%", label: "branch coverage" },
            { value: "10", label: "reusable Terraform modules" },
            { value: "3", label: "isolated environments: dev, staging, prod" },
          ],
          pillars: [
            { title: "Fault-tolerant events", text: "SQS, EventBridge, dead-letter queues and a transactional outbox: a queue outage loses no committed event" },
            { title: "Two kinds of AI", text: "Claude API for generative features, SageMaker item-item collaborative filtering for recommendations" },
            { title: "Secure CI/CD", text: "GitHub Actions with AWS OIDC, no long-lived keys, per-environment plans and manual approval for production" },
            { title: "End-to-end tracing", text: "OpenTelemetry, X-Ray and CloudWatch, with correlation IDs carried through HTTP, events, SQS and workers" },
          ],
          decision: {
            label: "Pay per invocation, on purpose",
            text: "Recommendations run on SageMaker Serverless, so no inference instance idles. If it takes longer than 800 ms, the store falls back and keeps selling.",
          },
          diagramLabel: "Architecture: API Gateway to the api Lambda, which talks to PostgreSQL through RDS Proxy, Valkey, S3 and SageMaker; EventBridge triggers the dispatcher, which feeds SQS and the worker, with a dead-letter queue; an ops Lambda has no HTTP route.",
          opsNote: "no HTTP route: migrations, admin tasks",
          provenTitle: "Proven by tests",
          proven: [
            { scenario: "4 buyers, 1 unit left", result: "exactly 1 purchase, stock never negative" },
            { scenario: "3 requests, same idempotency key", result: "1 order, stock deducted once" },
            { scenario: "queue down", result: "events wait in the outbox, none lost" },
            { scenario: "69 backend + 9 ML + 8 Terraform tests", result: "backend against real PostgreSQL and Redis" },
          ],
        },
      },
      more: {
        trilogyKicker: "Open source · Claude Code",
        trilogyTitle: "Rails plugin trilogy",
        trilogyBody:
          "Cuts RSpec and RuboCop output by 70–97% of tokens, and blocks `db:drop` until a human says yes.",
        shelflogKicker: "PWA · Retail",
        shelflogBody:
          "Shelf expiry control for a supermarket floor: barcode lookup and hourly push alerts.",
        restKicker: "{count} more",
        restTitle: "Web apps, systems, dev tools",
        restCta: "Browse all projects →",
      },
    },
    bugCase: {
      kicker: "One bug, start to finish",
      title: "The same protocol number, three times.",
      cause:
        "A double-click in a municipal records system issued duplicate protocol numbers. The next number came from `MAX(number) + 1`, read without a lock.",
      fix: "A transaction-scoped advisory lock per department and year fixed it without serialising the whole table. A uniqueness check stays as the second line of defence.",
      facts: [
        { label: "Cause", value: "read-then-write race" },
        { label: "Fix", value: "pg_advisory_xact_lock" },
        { label: "Scope", value: "department + year" },
      ],
      fileLabel: "app/models/protocol.rb · simplified",
    },
    testimonials: {
      title: "What people I worked with say",
      prev: "Previous testimonial",
      next: "Next testimonial",
      pause: "Pause testimonials",
      play: "Play testimonials",
      items: [
        {
          quote:
            "Washington didn't just deliver another software platform. He took the time to understand how our operation actually works and built a solution around our real-world needs.",
          name: "Guilherme",
          role: "Ingrideon",
          context: "Tork · client since August",
        },
        {
          quote:
            "He structured an automated testing initiative that took the RSpec suite's coverage from 35% to 89%. Along the way he mentored me: creating testing cards in Trello, explaining which scenarios had to be covered and reviewing my implementations.",
          name: "Samuel",
          role: "Developer · W/P Advisory",
          context: "Compras project · RSpec mentorship",
        },
        {
          quote:
            "He was put in charge of guiding two developers in improving the system's automated tests. He helped us spot the scenarios that mattered, write more reliable specs and understand how tests protect business rules against regressions.",
          name: "Iarhel",
          role: "Developer · W/P Advisory",
          context: "Compras project · RSpec mentorship",
        },
        {
          quote:
            "He built the Protocol API and implemented the Gov.br integration. After specializing in Claude Code and LLMs, he brought that into our development and helped raise our productivity. We were among the top deliverers on the team, and his contribution played an important part in that.",
          name: "Lucas",
          role: "Developer · W/P Advisory",
          context: "Protocol API · Gov.br integration",
        },
      ],
    },
    experience: {
      title: "Experience",
      showAll: "Show all",
      showLess: "Show less",
      items: [
        {
          period: "Dec 2026 – Present",
          role: "Mid-level Developer (Pleno I)",
          company: "Pare.Ai (on track to Senior)",
          bullets: [],
          stack: "Node.js · React · React Native · Delphi",
        },
        {
          period: "Aug 2026 – Present",
          role: "Founder & Engineer",
          company: "Tork (In production · Engemil partnership since Aug 2026)",
          summary:
            "Construction and industrial maintenance management SaaS. Replaces paper and spreadsheets with one platform for crews, time entries, contracts, hour packages and measurements.",
          stats: [
            { value: "1,900+", label: "Automated tests", detail: "RSpec, Capybara, Cuprite" },
            { value: "95%", label: "Code coverage", detail: "SimpleCov" },
            { value: "PostgreSQL RLS", label: "Database security", detail: "Multi-tenant isolation" },
            { value: "AI-powered", label: "Document processing", detail: "Claude API, in development" },
          ],
          featured: 5,
          bullets: [
            "**Multi-tenant architecture and database security:** data isolation with PostgreSQL Row-Level Security, backed by Pundit authorization policies, database constraints and automated tests against cross-organization access.",
            "**Advanced Excel generation and financial reporting:** a caxlsx export engine that faithfully reproduces each client's financial template (accounting formats, styles, colours, merged cells and layout), with automated fidelity tests.",
            "**Automated workforce tracking and business rules:** a mobile-first daily site report (RDO) that calculates shifts, breaks, night hours and five hour categories with their own factors, cutting inconsistencies in time entries.",
            "**Payment infrastructure and webhook reliability:** Asaas API integration for plans, recurring charges and webhooks, with HMAC signature validation, idempotency and payment status synced to platform access. Not yet released to production.",
            "**AI-powered document processing with Claude:** architecture in development that reads purchase orders and PDFs through the Anthropic API to pre-fill Packages and ASEs, with human review before saving and token and cost tracking per organization.",
            "**Approval and digital signature:** secure-link flows that let external inspectors review, return or approve daily reports and sign from their phone, recording authorship, date and document integrity.",
            "**Idempotent data import:** pipelines for spreadsheets and ZIP files with deduplication, validation, related-record creation and concurrency control to prevent duplicates and inconsistencies.",
            "**Per-organization customization:** independent settings for forms, fields, data grids, printed documents, logos, signatures and visual identity for each client.",
            "**Test quality and automation:** a suite of about 1,900 RSpec, Capybara and Cuprite tests at 95% line coverage, with an extra run under RLS in CI plus Brakeman and Bundler Audit security checks.",
          ],
          stack: "Ruby on Rails 8.1 · Ruby 4 · PostgreSQL · Hotwire · Tailwind CSS 4 · Asaas · AWS S3 · RSpec · Docker · Railway",
        },
        {
          period: "Aug 2023 – Nov 2026",
          role: "Full-Stack Developer",
          company: "W/P Advisory (contract)",
          summary:
            "Rails backend for a multi-tenant tax and debt platform serving 50+ municipalities. Led performance work, the Debt Statement module, the SINAL API integration and the Rails 7 → 8 migration of the debt agreements module.",
          bullets: [
            "Cut a critical endpoint from **3.5 s to 180 ms** by removing N+1 queries and adding a 3-layer Redis cache, on 100k+ requests a day.",
            "Rebuilt the CSV export as an async pipeline (Sidekiq, PostgreSQL COPY, streaming to S3): 1.77M records went from **~80 h to 7 min**.",
            "Designed composite indexes on a 14M-row base, taking a query from **12.7 s to 0.2 ms**.",
            "Built the Debt Statement module from scratch as main author, **17 releases in 5 months**, and closed its recurring 500 errors.",
            "Made taxpayer debt totals match **to the cent** across three screens that disagreed in production, with one shared resolver.",
            "Integrated the SINAL API (**100k+ records/month**) with circuit breaker, retries and outbox: 99.9% uptime and zero duplicates on an unstable provider.",
            "Fixed a race that issued the same protocol number 3× on double-click, using a scoped `pg_advisory_xact_lock`.",
            "Removed **33 unused indexes** and added unique ones with concurrent migrations, zero downtime.",
            "Raised test coverage from **35% to 89%** with RSpec and Capybara, plus RuboCop and Brakeman in CI.",
            "Evolved the Debt Agreements module through the Rails 7 → 8 migration with **15+ per-municipality** feature flags: 60% faster delivery, 59% fewer support tickets.",
            "Ran production on Kubernetes with ArgoCD, Grafana and Datadog, catching incidents before users did.",
          ],
          stack: "Rails · PostgreSQL · Sidekiq · Redis · Kubernetes · Datadog",
        },
        {
          period: "Jun 2023 – Jul 2023",
          role: "Full-Stack Developer",
          company: "GoTechDS",
          bullets: [
            "Shipped features on the Go Tech DS product with Rails and Devise, from Trello cards prioritised by the team.",
            "Built the authentication flow (login, signup, password recovery) and the dashboard.",
            "Ramped up fast on a new codebase through code reviews and pair programming.",
          ],
        },
        {
          period: "Nov 2022 – May 2023",
          role: "Full-Stack Developer",
          company: "Independent (freelance)",
          bullets: [
            "Delivered end-to-end software solutions for independent clients, including business applications, websites, landing pages, internal tools, and workflow automation, managing projects from initial discovery to production deployment.",
            "Conducted business requirements analysis, working directly with clients to understand operational workflows, identify inefficiencies, and translate manual processes into practical software solutions.",
            "Developed backend applications using Ruby on Rails, Python, Node.js, and Delphi, selecting technologies according to business needs, project complexity, and deployment requirements.",
            "Automated spreadsheet-driven workflows, transforming manually maintained Excel data into structured database operations, application features, and more reliable business processes.",
            "Designed and implemented database schemas, CRUD operations, business rules, RESTful APIs, and third-party integrations, including AWS S3 storage and payment gateway services.",
            "Built responsive web interfaces using JavaScript, Stimulus, and Tailwind CSS, connecting frontend components to backend services and external APIs.",
            "Managed infrastructure and production deployments, including application configuration, environment variables, database setup, file storage, troubleshooting, and post-deployment maintenance.",
            "Owned the complete client delivery lifecycle, including technical discovery, requirements gathering, project estimation, scope management, development, testing, deployment, and ongoing support.",
            "Established recurring client relationships through technical ownership, transparent communication, and reliable delivery of solutions aligned with real business requirements.",
          ],
          stack: "Ruby on Rails · Python · Node.js · Delphi · JavaScript · Stimulus · Tailwind CSS · AWS S3",
        },
      ],
    },
    howIWork: {
      title: "How I work",
      items: [
        {
          stat: "899 / 0",
          title: "Tests come first",
          body: "ObraHub ships with 899 examples and zero failures. Every guarantee I claim has a test that tries to break it.",
        },
        {
          stat: "0 dupes",
          title: "Safe to retry",
          body: "Idempotency keys, outboxes and advisory locks, so double-clicks, retries and flaky providers don't create bad data.",
        },
        {
          stat: "33 indexes",
          title: "Small, safe steps",
          body: "Removed 33 unused indexes with concurrent migrations and zero downtime. Measure first, change one thing, measure again.",
        },
      ],
    },
    skills: {
      title: "Technical skills",
      production: "Used in production",
      builtWith: "Built with",
      groups: [
        {
          label: "Languages",
          production: ["Ruby", "SQL", "JavaScript", "Delphi"],
          builtWith: ["TypeScript", "Python", "Shell", "Kotlin", "C#", "Elixir", "Rust"],
        },
        {
          label: "Frameworks",
          production: ["Ruby on Rails", "Hotwire", "Stimulus", "React", "Node.js", "React Native"],
          builtWith: ["Next.js", "Tailwind CSS", "Tauri", "Sinatra", "Spring Boot", "Django", ".NET", "Phoenix", "Ember.js", "Electron"],
        },
        {
          label: "Databases",
          production: ["PostgreSQL", "Redis"],
          builtWith: ["SQLite", "MySQL", "Elasticsearch", "SQL Server"],
        },
        {
          label: "DevOps & cloud",
          production: ["Sidekiq", "Kubernetes", "ArgoCD", "Datadog", "Grafana", "AWS S3", "Docker", "CI/CD", "Git", "Linux"],
          builtWith: ["Terraform", "AWS Lambda", "Solid Queue", "RabbitMQ", "OpenTelemetry"],
        },
        {
          label: "Testing & quality",
          production: ["RSpec", "TDD", "Capybara", "RuboCop", "Brakeman", "Jest", "Vitest", "Supertest", "Playwright", "Cypress", "Testcontainers", "MSW", "ESLint", "Prettier", "Stryker"],
          builtWith: ["Selenium"],
        },
        {
          label: "Architecture",
          production: ["Multi-tenant SaaS", "RESTful APIs", "Event-driven / outbox", "Clean Architecture"],
          builtWith: ["WebSockets", "GraphQL", "MCP", "RAG", "Claude API"],
        },
      ],
    },
    contact: {
      label: "// Contact",
      title: "Have a slow or fragile system? *Let's fix it.*",
      copy: "Copy",
      copied: "Copied",
      copyLabel: "Copy the email address",
      availability: "Full-Stack Developer · open to full-time roles · remote or Brazil · replies within 24h",
      resume: "Resume (PDF)",
    },
    footer: {
      kicker: "Open to backend roles · remote or Brazil",
      title: "Have a slow or fragile Rails app?",
      resume: "Resume",
    },
  },
}

const pt: Dict = {
  profile: {
    nameLine1: "Washington",
    nameLine2: "Cardoso",
    role: "Desenvolvedor Full-Stack",
    yearsLabel: "4 anos",
    location: "Brasil",
    tagline:
      "Especialista em Ruby on Rails construindo plataformas web escaláveis com foco em performance, código limpo e entregar valor de verdade.",
    availableLabel: "disponível para projetos",
    downloadResume: "Baixar currículo",
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
        { value: "35% → 89%", label: "cobertura de testes via CI/CD" },
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
      title: "Experiência profissional",
      rolesLabel: "cargos",
      items: [
        {
          role: "Desenvolvedor Full-Stack",
          company: "Was Advisory",
          period: "Ago 2023 – Presente",
          isCurrent: true,
          summary:
            "Construção de sistemas SaaS multi-tenant com Rails, PostgreSQL, Redis e React. Reduzi um endpoint crítico de 3,5 segundos para 180 milissegundos e mantive fluxos confiáveis rodando em escala.",
          tags: ["Ruby on Rails", "PostgreSQL", "React", "Redis"],
          bullets: [
            "Otimizei endpoint crítico reduzindo latência de **3,5s para 180ms** (-94%) através de identificação de queries **N+1**, implementação de **eager loading** e **cache Redis em 3 camadas**, impactando **100k+ requisições/dia**.",
            "Rearquitetei o pipeline de exportação de relatórios CSV, substituindo o processamento síncrono por uma arquitetura assíncrona com **Sidekiq**, **PostgreSQL COPY**, streaming e **Amazon S3**, reduzindo o tempo de exportação de 1,77M registros de ~80h para 7min (~600×).",
            "Otimizei consultas PostgreSQL em uma base com **14M+ registros**, projetando índices compostos e refinando estratégias de consulta que reduziram o tempo de resposta de **12,7s para 0,2ms** (~63.000×).",
            "Projetei e implementei do zero o módulo de **Extrato de Débitos** com busca dinâmica sobre base com milhões de parcelas de dívida ativa, sustentando **17 entregas incrementais em 5 meses** como autor principal; eliminei N+1 em associações polimórficas (não resolvíveis por eager loading do Rails) via preload manual, substituí carregamento de IDs em memória por subqueries SQL e encerrei erros 500 recorrentes em produção.",
            "Garanti consistência financeira centavo a centavo entre três telas independentes que divergiam em produção (**Extrato de Débitos**, **Tela de Atendimento** e **Maiores Devedores**), implementando um resolver de composição de totais compartilhado que tornou o débito do contribuinte auditável linha a linha.",
            "Reduzi o custo de escrita em tabelas de alto volume removendo **33 índices não utilizados** e adicionando índices únicos em tabelas de junção, via migrations concorrentes (`algorithm: :concurrently`) aplicadas sem downtime.",
            "Diagnostiquei e corrigi race condition que emitia números de protocolo duplicados em sistema de processos administrativos municipais (mesmo protocolo gerado 3× sob duplo-clique), substituindo `SELECT MAX(number)+1` sem lock por **pg_advisory_xact_lock** escopado por departamento e ano, preservando concorrência entre departamentos, com guarda de transação explícita e validação de unicidade como segunda camada de defesa.",
            "Arquitetei e implementei a integração com a API externa (**SINAL**), documentada em **OpenAPI/Swagger**, que processava **100k+ registros/mês** em ambiente **multi-tenant**, aplicando **Faraday**, **Circuit Breaker distribuído (Stoplight)**, **Retry com Exponential Backoff**, **Outbox Pattern**, advisory locks no **PostgreSQL** e **Sidekiq** para processamento assíncrono, o que sustentou **99,9% de disponibilidade** e zero duplicação de cadastros mesmo com o fornecedor instável.",
            "Implementei suítes de testes automatizados com **RSpec** e **Capybara**, aumentando a cobertura de testes de **35% para 89%** e reduzindo bugs em produção graças a pipelines de **CI/CD** robustos, com **RuboCop** e **Brakeman** para análise estática e segurança.",
            "Evoluí o módulo crítico de **Acordos de Dívida Ativa** em arquitetura **multi-tenant** atendendo **50+ municípios**, durante a migração do sistema do **Rails 7 para o Rails 8**, estruturado com **Devise**, **Service Objects** e **Form::Builder** para encapsular regras fiscais complexas, entregando **15+ customizações específicas por prefeitura via feature flags**, o que reduziu em **60% o tempo de entrega** de demandas municipais, zerou regressões cross-tenant e cortou em **59% os chamados de suporte** relacionados ao módulo.",
            "Monitorei aplicações em produção utilizando ferramentas de observabilidade (**Datadog**), identificando e resolvendo incidentes de forma proativa antes que afetassem o usuário final.",
            "Atuação prática em **Kubernetes** em produção (acesso via **Pritunl VPN**), utilizando **ArgoCD** (GitOps), **Headlamp** e **Grafana** para deploy contínuo, gestão de cluster e monitoramento de incidentes em ambiente de alta disponibilidade.",
            "Desenvolvi o **ObraHub**, o sistema de apontamento e medição da **Engemil**, prestadora de manutenção e montagem industrial, especificado em rodadas sucessivas de review e feedback com o responsável por produzir todo o processo na mão: um monólito **Rails 8 + PostgreSQL + Hotwire** (Devise, Pundit, 12 policies, 19 importadores/exportadores) que substituiu o ciclo papel → planilha → redigitação. Importa a planilha que a engenharia já preenche, com **digest SHA-256 da linha** para `upsert_all` idempotente, de modo que reenviar o mesmo arquivo nunca duplica; mantém o saldo de cada pacote como **query, não coluna gravada**, então um pacote de 663h mostra o saldo novo no instante em que o RDO entra; e exporta a medição mensal **idêntica byte a byte** ao arquivo de referência do cliente: fills com cor de tema e tint, formato numérico CONTÁBIL e o Resumo com duas colunas por tipo de hora, com teste que faz parse estrito do `styles.xml` gerado. **899 exemplos, 0 falhas**; em uso real, **11.551h** fechadas em um mês e **1.395 apontamentos** importados e validados em **3s**.",
            "Desenvolvi o **shelflog**, PWA em **Rails** para controle de validade em gôndola, pensado para uso no **PAS do Muffato** (uma grande rede de supermercados do Brasil): busca por código de barras ou nome, status por produto a partir de limites configuráveis e um job horário no **Solid Queue** que dispara alertas via **web push** de produtos vencidos e a vencer.",
            "Desenvolvi o **Swarm**, um Agent Development Environment em **Rails 8 + Hotwire + SQLite** que roda **1 a 4 agentes Claude Code ou Codex em paralelo**, cada um em worktree Git e branch isolados, transmitidos ao vivo de um **PTY** real via **ActionCable**. Toda task passa por uma **fase de planner antes de escrever qualquer código**: o planner roda no PTY, escreve um PRD com critérios de aceite e sai, e o `on_exit` sobe o coder com o ponteiro pro PRD, de modo que plano falho nunca vira código escrito no escuro. O workspace é uma **árvore de painéis divisíveis serializada na URL** (agente, terminal, chat, diff, preview, qualquer arquivo, ou outra tentativa do mesmo prompt como abas), com explorer de arquivos, editor **CodeMirror 6** e preview embutido do app rodando. A revisão de diff traz **comentários por linha que voltam para a sessão do agente**; o **corpo do PR é escrito no servidor por um agente headless** a partir do diff real e do resultado real dos checks, com o golden path gravado em **Chrome headless (Ferrum)** e embutido como GIF. Inclui ainda **Design Mode** (anotar o app vivo como comentário de Figma, mandando o estado vivo do DOM do elemento em vez de screenshot), quatro **agent loop patterns** (Turn/Goal/Time/Proactive) atrás de guardas de custo, tentativas e kill-switch com webhooks verificados por HMAC, e integrações com **Trello / Linear / Jira**. Single-process por design: o registry de PTYs vive na memória do Puma. Empacotado como app desktop nativo (**Tauri 2 + WebView2** no Windows, backend Rails rodando em **WSL**), com i18n completa em pt-BR e inglês.",
            "Publiquei uma trilogia de plugins para o **Claude Code** cobrindo entrada, saída e efeitos colaterais do agente: **lean-output** comprime outputs de **RSpec**, **RuboCop** e **Brakeman** em **-70% a -97% de tokens** com garantia zero-loss de falhas; **rails-context** injeta dossiê curado (colunas, índices, associações, validações e rotas) reduzindo drasticamente a superfície lida pelo modelo em vez de carregar `db/schema.rb` e models inteiros; **rails-guard** intercepta comandos Rails destrutivos (`db:drop`, `db:reset`, `rails destroy`, `runner` com `delete_all`) via hook `PreToolUse`, exigindo confirmação humana antes da execução.",
          ],
        },
        {
          role: "Desenvolvedor Full-Stack",
          company: "GoTechDS",
          period: "Jun 2023 – Jul 2023",
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
          role: "Desenvolvedor Full-Stack",
          company: "Autônomo \\\\ Blogs & Micro-SaaS",
          period: "Nov 2022 – Mai 2023",
          summary:
            "Entrega ponta a ponta de landing pages, blogs e pequenos softwares, do levantamento e modelagem do banco até deploy e suporte.",
          tags: ["Full Stack", "Clientes", "Entrega"],
          bullets: [
            "Entrega ponta a ponta de **blogs, landing pages e mini-softwares** para clientes diretos, do levantamento à produção.",
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
    title: "Skills técnicas",
    subtitle: "Ferramentas e tecnologias que uso pra entregar",
    techTitle: "Tecnologias e ferramentas",
    techSubtitle:
      "O que uso no dia a dia e o quanto domino cada um. Avançado significa que já entreguei e mantive em produção.",
    allLabel: "Todos",
    countSuffix: "tecnologias",
    levelLabel: "Nível",
    levels: {
      ADVANCED: "Avançado",
      INTERMEDIATE: "Intermediário",
      FAMILIAR: "Familiarizado",
    },
    categories: {
      languages: "Linguagens",
      frameworks: "Frameworks e bibliotecas",
      databases: "Bancos de dados",
      devops: "DevOps e cloud",
      testing: "Testes e qualidade",
      architecture: "Arquitetura",
    },
  },
  education: {
    title: "Formação",
    items: [
      {
        degree: "AWS SERVERLESS DEMONSTRATED",
        school: "Amazon Web Services (AWS)",
        period: "Emitido em set 2026 · Expira em set 2027",
      },
      {
        degree: "Análise e Desenvolvimento de Sistemas (cursando)",
        school: "Wyden – São José do Rio Preto, SP",
        period: "2024 – 2026 (previsão dez/2026)",
      },
      {
        degree: "Learn Rails and Ruby Programming",
        school: "Udemy – John Elder",
        period: "2023",
      },
      {
        degree: "Curso de inglês",
        school: "CNA – São José do Rio Preto (Downtown)",
        period: "2019",
      },
    ],
  },
  projects: {
    title: "Projetos",
    subtitle: "Algumas coisas que construí com tecnologias modernas",
    filters: {
      all: "Todos",
      web: "Aplicações web",
      backend: "Backend & sistemas",
      tools: "Dev tools & IA",
    },
    liveSite: "Ver no ar",
    viewCode: "Ver código",
    askAbout: "Privado: me pergunte",
    page: {
      label: "// Projetos",
      title: "Tudo o que eu já *construí*.",
      intro: "Produtos em produção, estudos de caso, ferramentas open source e os experimentos por trás deles.",
      count: "{count} projetos",
      details: "Detalhes",
      code: "Código",
      site: "No ar",
      private: "Privado",
    },
    prev: "Anterior",
    next: "Próximo",
    pageLabel: "Página",
    items: {
      swarm: {
        type: "App desktop",
        summary:
          "Agent Development Environment que roda de 1 a 4 agentes de código em paralelo, cada um num git worktree isolado com PTY ao vivo, revisão de diff e merge num clique.",
        details:
          "Um **Agent Development Environment** em **Rails 8 + Hotwire** que roda **1 a 4 agentes de código em paralelo**, cada um no seu **git worktree** isolado com **PTY** real transmitido via **ActionCable**. Diff ao vivo com comentários por linha que voltam direto pra sessão do agente, grid `/compare` pra escolher a melhor tentativa, merge ou PR num clique, e build desktop nativo com **Tauri 2 + WebView2** rodando o backend Rails dentro do **WSL**. **Automações** disparam tasks sozinhas: agendamentos cron, falhas de CI do GitHub via relay **AWS Lambda + SQS** provisionado com **Terraform** e cards do Trello, com painéis de Jira, Linear e GitHub ao lado.",
      },
      obrahub: {
        type: "Full Stack",
        summary:
          "Em produção na Engemil: transforma as planilhas que a engenharia já preenche em apontamento de horas, RDO e a medição que o cliente assina.",
        details:
          "**Atualmente em produção na Engemil.** Acompanha o trabalho executado em obras: cada obra tem seus encarregados vinculados, e cada um lança quantas horas trabalhou, em que cargo, em que dia, com foto opcional. O admin importa esses lançamentos em massa a partir de uma planilha **Excel** mais um zip com as fotos. **Rails 8.1**, **PostgreSQL**, **Hotwire**, **Devise + Pundit**, **Solid Cache** e **Active Storage**, sem bundler JS, sem fila.",
      },
      ecommerceServerless: {
        type: "Backend Serverless",
        summary:
          "API de e-commerce em AWS Lambda: pedidos idempotentes, transactional outbox para o SQS, Terraform com CI/CD via OIDC e recomendação de produtos com SageMaker.",
        details:
          "Projeto de estudo: uma API de e-commerce em **AWS Lambda** (Node.js 24 + Express 5) em que cada garantia tem um teste. Débito de estoque seguro sob concorrência, **Idempotency-Key** obrigatório, **transactional outbox** para o **SQS** com SKIP LOCKED, **RDS Proxy**, upload pré-assinado no S3 e recomendação item-item servida pelo **SageMaker Serverless** com fallback para os mais vendidos. **10 módulos Terraform**, 3 ambientes, segredos fora do state, deploy com **OIDC** e aprovação manual em produção, tracing com **OpenTelemetry/X-Ray**, 69 testes contra PostgreSQL e Redis reais.",
      },
      tally: {
        type: "Backend",
        summary:
          "Conciliação de retorno bancário: um motor Kotlin presta conta de cada linha (conciliada, em revisão, sem par ou rejeitada) e um console Rails mostra em EN e pt-BR.",
        details:
          "Concilia **arquivos de retorno bancário** contra recebíveis esperados e presta conta de cada linha: conciliada, aguardando revisão, sem correspondência ou rejeitada com motivo. Um motor em **Kotlin** decide e nunca emite texto pra humano: emite códigos estáveis que um console **Rails** renderiza em inglês e pt-BR. O que o motor não decide sozinho vai pra uma fila humana levando os candidatos e o motivo.",
      },
      pulse: {
        type: "API + Mobile",
        summary:
          "Monitoramento de uptime e heartbeat self-hosted: workers de checagem, detecção de incidentes, alerta por e-mail e app Expo com push.",
        details:
          "**Monitoramento de uptime e heartbeat** self-hosted: cola uma URL, ele checa num intervalo fixo e avisa quando cai. API em **Fastify + TypeScript** com workers **BullMQ** (check, reconcile, notify) sobre **PostgreSQL** e **Redis**, tudo de pé com um único `docker compose`. Tem app mobile em **Expo** com push notification e um importador **NDJSON** em streaming sobre `pg-copy-streams`.",
      },
      pipelineHq: {
        type: "Full Stack",
        summary:
          "CRM B2B multi-tenant em Rails 8.1 com Solid Queue, Cache e Cable, auth nativa com 10 camadas de hardening e um ADR por decisão.",
        details:
          "**CRM B2B multi-tenant** full-stack em **Rails 8.1.3**: pipeline de vendas no estilo Pipedrive/HubSpot. Usa **Solid Queue / Solid Cache / Solid Cable** (zero Redis, zero Sidekiq), **Hotwire** (Turbo + Stimulus), **Tailwind v4** e **auth nativa do Rails** estendida com **10 camadas de hardening** (2FA TOTP, backup codes, sudo mode, rate limit, audit log, honeypot). Cada decisão tem um **ADR**.",
      },
      jornada: {
        type: "Backend",
        summary:
          "Motor de ponto em .NET 9 que calcula cada dia contra regras trabalhistas com vigência e fecha o período num resultado imutável e reproduzível.",
      },
      leanOutput: {
        type: "Plugin do Claude Code",
        summary:
          "Mantém saída longa de ferramenta fora da janela de contexto: manda pro disco atrás de um ponteiro e comprime RSpec, RuboCop e Brakeman sem perder falha.",
        details:
          "**Plugin do Claude Code** que mantém saída longa de ferramenta fora da janela de contexto: despeja resultados grandes em disco e entrega um ponteiro ao modelo, omite o que o contexto já tem, e comprime **RSpec**, **RuboCop**, **Brakeman**, `git diff`, cargo e grep no caminho. Medido reprocessando **12.008 resultados reais (10,54 MB)**: menos tokens, **nenhuma falha perdida**.",
      },
      amnesia: {
        type: "App em tempo real",
        summary:
          "Um Discord enxuto: canais de texto e voz em tempo real e transmissão de tela com Phoenix Channels e LiveKit, e cliente desktop em Electron.",
        details:
          "Um Discord enxuto: **canais de texto e de voz** em tempo real, transmissão de tela e app desktop. **Elixir + Phoenix 1.8** com Channels e Presence resolvem sala, entrada e quem-está-online sem código de infraestrutura, **LiveKit** (SFU) carrega a mídia, e o cliente é **Electron + React + Vite + Tailwind v4**.",
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
          "Cola uma vaga e recebe um veredito por termo contra fatos com evidência: já coberto, alcançável, ou lacuna real, que ele se recusa a inventar.",
        details:
          "Cola uma descrição de vaga e recebe um **veredito por termo** contra fatos que têm evidência por trás: já coberto por um bullet, **alcançável** (um fato descreve aquele trabalho e só não usa a palavra), ou **lacuna** real, que a ferramenta aponta em vez de escrever assim mesmo. A cobertura é lida só da prosa dos bullets, porque palavra-chave em lista de skills não pontua contra matcher com LLM: medido **76% → 98%** movendo cinco termos pra dentro dos bullets de experiência.",
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
          "Bloqueia os comandos Rails irrecuperáveis que um agente poderia rodar (db:drop, db:reset, runners destrutivos) e pergunta antes nos arriscados.",
      },
      railsContext: {
        type: "Plugin do Claude Code",
        summary:
          "Context engineering para Rails: entrega ao agente um resumo curado de colunas, associações, validações e rotas, em vez do schema e dos models inteiros.",
      },
      swarmPlugin: {
        type: "Plugin do Claude Code",
        summary:
          "Roda o mesmo prompt em N git worktrees isolados em paralelo e deixa você comparar o diff de cada tentativa e mesclar a melhor, ou abrir um PR.",
      },
      systemDesignPrimer: {
        type: "Laboratório",
        summary:
          "Um laboratório Rails 8 de system design: cache, N+1, índice, hot key, contenção de escrita e fila, cada camada precisa se provar num número medido.",
      },
      brasilApiRuby: {
        type: "Biblioteca",
        summary:
          "Meu primeiro passo em open source: um wrapper Ruby inicial para a BrasilAPI. Aprendendo a publicar pacotes e código em público.",
        details:
          "Tentativa no início da carreira de criar um **wrapper Ruby** pra **BrasilAPI**. O código era ingênuo na época, mas foi meu **primeiro mergulho em open-source**: publicar código público, lidar com empacotamento e aprender com a experiência.",
      },
    },
  },
  testimonials: {
    title: "Depoimentos",
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
    title: "Idiomas",
    items: [
      { language: "Português", level: "Nativo" },
      { language: "Inglês", level: "B2 (técnico)" },
    ],
  },
  resume: {
    title: "Currículo",
    subtitle: "Linha do tempo da carreira & CV pra baixar",
    downloadCta: "Baixar PDF",
    timelineTitle: "Linha do tempo",
    openSourceTitle: "Projetos e open source",
    privateRepoLabel: "Repo privado",
    currentLabel: "Atual",
  },
  contact: {
    headline: "Bora tirar sua ideia do papel",
    headlineEmphasis: "?",
    subheadline:
      "Aberto a projetos freelance, consultoria e oportunidades full-time.",
    ctaPrimary: "Iniciar conversa",
    ctaSecondary: "Ver currículo",
    title: "Vamos conversar",
    body:
      "Tem um projeto em mente ou uma oportunidade pra discutir? Vou adorar ouvir.",
    emailLabel: "Me envie um email",
    inboxLabel: "Inbox",
    socialLabel: "Me encontre online",
    available: "Disponível",
    channelsTitle: "Canais",
    metaLocation: { label: "Localização", value: "Brasil, GMT-3" },
    metaResponse: { label: "Tempo de resposta", value: "Em até 24h" },
    form: {
      title: "Nova mensagem",
      nameLabel: "Nome",
      namePlaceholder: "Seu nome",
      emailLabel: "Email",
      emailPlaceholder: "seu@email.com",
      subjectLabel: "Assunto",
      subjectPlaceholder: "Sobre o que é?",
      messageLabel: "Mensagem",
      messagePlaceholder:
        "Tem um projeto em mente ou uma pergunta? Manda uma mensagem: respondo em até 24h.",
      sendCta: "Enviar mensagem",
    },
  },
  footer: "feito com next.js + tailwind",
  swarm: {
    hero: {
      title: "Swarm",
      tagline: "Agent Development Environment",
      subtitle:
        "Uma IDE desktop pra agentes de código. Rode de 1 a 4 agentes Claude Code ou Codex em worktrees Git paralelos, acompanhe cada um num PTY ao vivo, revise o diff com comentários por linha e faça merge ou abra o PR: tudo na mesma janela.",
      ctaGithub: "Ver no GitHub",
      ctaCli: "Plugin CLI",
    },
    screens: {
      kicker: "// NO APP",
      title: "O app de verdade, não um mockup",
      review: {
        alt: "Swarm com uma sessão do Claude Code à esquerda e a revisão do diff à direita, com uma caixa de comentário por linha em cada arquivo",
        caption: "Agente e revisão lado a lado: a sessão ao vivo à esquerda e o diff à direita, onde comentários por linha voltam para o agente.",
      },
    },
    pty: {
      title: "Toda task planeja antes de codar.",
      subtitle:
        "A task nasce pending, sem worktree: criar não gasta disco nem dinheiro. O Start cria a worktree, o planner escreve o plano e sai, e só então o on_exit sobe o coder. Sem plano não-vazio, não tem coder.",
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
      title: "Tentativas lado a lado, como abas.",
      subtitle:
        "O arranjo da tela é uma árvore de divisões escrita na URL. Qualquer superfície vira aba: o agente, um terminal, o chat, o diff, o preview, um arquivo ou outra tentativa do mesmo prompt. É assim que duas CLIs diferentes no mesmo prompt ficam lado a lado.",
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
      title: "Um ambiente, não um wrapper de uma CLI.",
      subtitle: "Oito coisas que ele faz, todas na sua máquina.",
      items: [
        {
          title: "Planner escreve um PRD, depois coder",
          description:
            "O handoff é uma fase de PTY, não um job: o planner roda no mesmo pane, escreve um PRD (problema, requisitos, critérios de aceite, riscos, passos) e sai, e o on_exit sobe o coder com o ponteiro pro PRD. PRD sem critério de aceite para a task com esse motivo: “planner falhou” nunca vira “coda no escuro”.",
        },
        {
          title: "Claude Code e Codex",
          description:
            "Dois adapters atrás de um mapa, de 1 a 4 agentes em paralelo, cada um na sua worktree e sua branch. CLI nova é uma entrada no mapa mais uma classe; a validação e o formulário saem daí.",
        },
        {
          title: "PTYs de verdade",
          description:
            "PTY.spawn por pane, registrado em memória por (task, pane) e transmitido em base64 via ActionCable. O stop escala HUP → TERM → KILL, e o scrollback vai pra disco a cada 5s: morte abrupta perde no máximo 5 segundos.",
        },
        {
          title: "Painéis moram na URL",
          description:
            "O arranjo é uma árvore de divisões serializada na query string. Trocar de aba é reordenar, fechar é remover, dividir é inserir, cada ação é um link, então reload, botão de voltar e favorito simplesmente funcionam.",
        },
        {
          title: "Diff que responde",
          description:
            "Committed, uncommitted e untracked contra o merge-base, parseado no servidor. Comente qualquer arquivo:linha e o comentário volta pro agente como instrução.",
        },
        {
          title: "PR com evidência real",
          description:
            "O corpo é escrito no servidor por um agente headless a partir do diff real, do prompt original e do resultado real dos checks: “sem check command” e “nunca rodados” continuam distintos de um resultado de verdade. O golden path é gravado em Chrome headless e embutido como GIF.",
        },
        {
          title: "Preview e Design Mode",
          description:
            "O app da worktree sobe num PTY atrás de um proxy cuja detecção de porta não depende do stack respeitar $PORT. O Design Mode anota a tela viva como quem comenta num Figma: o estado vivo do elemento é serializado do DOM e re-renderizado com a sessão do usuário, não é screenshot.",
        },
        {
          title: "Loops com guardas",
          description:
            "Turn, Goal, Time e Proactive, todos atrás das mesmas guardas inegociáveis: teto de custo, teto de tentativas, kill-switch global e timeout de julgamento. Transcript ilegível para o loop em vez de contar como zero gasto.",
        },
      ],
    },
    automations: {
      title: "Trabalho que começa sem você.",
      subtitle:
        "Uma página de Automações junta tudo que dispara sozinho (agendamentos, triggers e quadros) com os controles, não só a lista. Toda execução continua passando pelas guardas de custo, tentativas e kill-switch.",
      items: [
        {
          title: "Tasks agendadas",
          description:
            "Uma expressão cron, lida pelo Fugit, dispara um prompt numa worktree nova no horário. Teto de execuções opcional, pausar e retomar, e três estados honestos: ativa, pausada e encerrada. Baixar o teto para o agendamento, então o painel e o scheduler nunca discordam.",
        },
        {
          title: "CI falhou, agente sobe",
          description:
            "Um check suite do GitHub que falha abre uma task sozinho: HMAC-SHA256 sobre o corpo cru, allowlist de quem pode disparar, orçamento, teto de execuções e cooldown. Branch e SHA passam por regex estrita e o repo é fixado contra o origin real do git, então nada do payload entra cru no prompt.",
        },
        {
          title: "Relay de webhook na AWS",
          description:
            "O Swarm roda atrás de NAT no WSL, onde o GitHub não alcança. Uma Lambda provisionada com Terraform guarda o corpo cru e os headers numa fila SQS sem validar nada; o app drena a fila a cada minuto por uma conexão de saída e aplica o mesmo HMAC e a mesma deduplicação de uma entrega direta.",
        },
        {
          title: "Trello nos dois sentidos",
          description:
            "Card em que você é adicionado vira task pendente, sem worktree, sem agente, nada gasto até você apertar Start. No sentido contrário, o card anda para Doing, PR e Done e ganha um comentário quando a task começa, abre PR e é mesclada ou descartada.",
        },
        {
          title: "Jira, Linear e GitHub",
          description:
            "Painéis de tracker ao lado das Tasks: Jira Cloud no endpoint atual /search/jql, Linear via GraphQL e um painel do GitHub com issues, PRs e projects na sintaxe de busca do próprio GitHub. Credencial expirada aparece como erro, nunca como backlog vazio.",
        },
        {
          title: "Loop Goal com judge",
          description:
            "Os critérios de aceite do PRD alimentam o loop Goal. Um judge (QA gate, shell customizado ou evaluator) confere cada tentativa e tenta de novo até passar, e toda parada tem nome: passou, judge quebrou, orçamento esgotado, uso indisponível ou tentativas esgotadas.",
        },
      ],
    },
    architecture: {
      title: "O que acontece quando você aperta Start.",
      subtitle:
        "Uma task pending não tem worktree. O Start cria, o planner escreve um PRD e faz handoff pro coder no mesmo PTY, e tudo que o agente produz volta por um único processo Puma: o registry vive em memória, então WEB_CONCURRENCY é proibido por design.",
      nodes: [
        { id: "task", label: "Task · pending" },
        { id: "start", label: "Start → worktree" },
        { id: "planner", label: "Planner → PRD" },
        { id: "adapters", label: "Claude Code · Codex" },
        { id: "coder", label: "Agente coder" },
        { id: "cable", label: "PTY + ActionCable" },
        { id: "workspace", label: "Painéis · diff" },
        { id: "ship", label: "Merge / PR" },
      ],
    },
    stack: {
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
        "Solid Queue",
        "Fugit",
        "tmux",
        "AWS Lambda",
        "SQS",
        "Terraform",
        "GitHub Actions",
      ],
    },
    roadmap: {
      title: "O que já está dentro.",
      subtitle: "Tudo abaixo já está entregue e rodando: é a ferramenta como ela existe, não um plano.",
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
          description: "Painéis divisíveis serializados na URL, com explorer, editor, preview, chat e qualquer arquivo como abas arrastáveis, mais um Jump Palette para tasks, projetos e comandos.",
        },
        {
          marker: "04",
          title: "Duas CLIs, um planner",
          description: "Adapters de Claude Code e Codex, e uma fase de planner que escreve um PRD para toda task antes de qualquer código.",
        },
        {
          marker: "05",
          title: "PR com evidência",
          description: "Corpo escrito por agente headless a partir do diff real e do resultado real dos checks; golden path gravado em Chrome headless como GIF inline.",
        },
        {
          marker: "06",
          title: "Design Mode",
          description: "Anote o app rodando como quem comenta num Figma: o elemento é serializado do DOM vivo e re-renderizado com a sessão do usuário.",
        },
        {
          marker: "07",
          title: "Automações",
          description: "Agendamentos cron, triggers de CI falho via relay na AWS (Lambda + SQS em Terraform), Trello nos dois sentidos e painéis de Jira, Linear e GitHub.",
        },
        {
          marker: "08",
          title: "Desktop",
          description: "Janela Tauri 2 em porta fixa com process group próprio; WebView2 no Windows, com o Rails rodando dentro do WSL.",
        },
        {
          marker: "09",
          title: "CI/CD",
          description: "Workflows de CI, infra e release no GitHub Actions: RSpec, RuboCop e scan de segurança em todo PR e push na main, e o .exe do Windows gerado e publicado pelo Actions.",
        },
        {
          marker: "10",
          title: "Sidecar tmux",
          description: "tmux como backend dos panes de agente, shell e preview: fase A do ADR 001, entregue atrás de SWARM_TMUX=1.",
        },
      ],
    },
    story: {
      title: "Como começou.",
      body: [
        "Eu queria uma IDE pra agentes de código, não um wrapper de um agente só. Registra um repo local, dispara um prompt, e de 1 a 4 agentes atacam em paralelo, cada um na sua worktree e sua branch, cada um num PTY ao vivo, com o explorer de arquivos, o editor, o app rodando, o chat e o diff na mesma janela.",
        "É um app Rails 8 em Hotwire e SQLite, single-process por design: o registry de PTYs vive na memória do Puma, então WEB_CONCURRENCY é proibido. Dois processos significam dois registries e uma UI mostrando terminal vazio pra um agente que está rodando muito bem. O Tauri 2 empacota como janela nativa; no Windows isso é WebView2 com o Rails rodando dentro do WSL.",
        "Uma regra acabou atravessando o projeto inteiro: desconhecido nunca pode virar valor. Modelo que não está na tabela de preços paga a linha mais cara. Transcript ilegível devolve :unknown e para o loop, em vez de contar como zero gasto. E prompt que monta evidência precisa dizer ao modelo onde está o buraco, porque prompt sem evidência não devolve “não sei”, devolve invenção plausível.",
      ],
      inspiredByLabel: "Ver código no GitHub",
    },
    finalCta: {
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
      title: "ObraHub",
      tagline: "Apontamento e medição de mão de obra em campo",
      subtitle:
        "Feito para a Engemil, prestadora de manutenção e montagem industrial em Mogi Guaçu/SP, e desenhado desde o começo para generalizar num setor que roda todo o mesmo ciclo. Ele substitui o ciclo papel → planilha → redigitação por um fluxo só: importa a planilha que a engenharia já preenche, mantém o saldo de cada pacote como conta viva, e exporta o documento de medição idêntico ao formato que o cliente assina.",
      badges: ["Monólito Rails 8", "Em produção", "Desenvolvimento ativo"],
      ctaContact: "Conversar sobre esse projeto",
    },
    problem: {
      title: "O dinheiro escapava na redigitação.",
      subtitle:
        "A Engemil aloca equipes dentro da planta do seu maior cliente, e todo mês precisa provar (obra por obra, pessoa por pessoa, dia por dia) quantas horas foram trabalhadas e quanto isso custa. Esse documento é assinado pelos dois lados. Antes do sistema, produzi-lo era assim:",
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
            "Hora que não foi transcrita não é faturada, e ninguém descobre, porque não há com o que comparar.",
        },
        {
          title: "Não há saldo",
          description:
            "O cliente aprova pacotes de trabalho com horas orçadas. Saber quanto sobrou de um pacote exigia somar apontamentos à mão.",
        },
        {
          title: "O formato do cliente é lei",
          description:
            "A planilha da medição tem uma forma exata: fonte, cor, formato de número, posição de bloco. Uma medição “parecida” volta.",
        },
      ],
    },
    rules: {
      title: "Nada aqui saiu de um documento de especificação.",
      subtitle:
        "O sistema foi levantado em rodadas sucessivas de discussão, review e feedback com o responsável na Engemil por produzir tudo isso na mão, e cada rodada trocou uma suposição por um fato da operação. Os artefatos reais serviram de especificação: a planilha de medição de referência, a de apontamento da engenharia, a mestre de pacotes e o cadastro de obras. Três regras que só aparecem na conversa com quem já fez o trabalho:",
      items: [
        {
          title: "A obra não tem tipo",
          description:
            "O sistema chegou a ter Project#kind (ase | hh | pacote). Estava errado: a mesma obra tem dia de pacote, dia de HH e dia de ASE. Quem declara a natureza do trabalho é o relatório do dia, não o cadastro da obra. O campo foi removido.",
        },
        {
          title: "Dois dos códigos não são hora nenhuma",
          description:
            "FE e FO são códigos, não tempo. E o adicional noturno é um acréscimo de 45% sobre o valor, não tempo trabalhado: somá-lo às horas inflava a medição.",
        },
        {
          title: "74 dos 84 pacotes não têm data",
          description:
            "Eles trazem a palavra “UNIFICADOS” no lugar da data de emissão. O campo virou opcional por causa disso, não por elegância de modelagem.",
        },
      ],
    },
    domain: {
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
            "Project é a obra. Package é a fatia que o cliente mandou orçar sozinha: tem horas estimadas, valor de venda e valor faturado.",
        },
        {
          name: "Rdo",
          description:
            "O Relatório Diário de Obra: obra, período, quem assina, descrição, foto. Ele declara a natureza do dia: pacote (desconta de um Package), HH (não desconta de nada) ou ASE, o serviço extra autorizado por um código próprio, que é o código que a fatura cita.",
        },
        {
          name: "WorkEntry",
          description: "A linha dentro do relatório: pessoa, cargo, dia, horas, tipo de hora, foto.",
        },
        {
          name: "Employee",
          description:
            "A pessoa em campo: deliberadamente não é um User. Uma equipe de centenas não pode virar centenas de logins que ninguém lembra de revogar.",
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
        "Horas usadas, saldo, progresso e valor a faturar saem de query no momento da leitura. Um pacote de 663 h que recebe um RDO de 9 h passa a mostrar 654 h de saldo na hora, sem nenhuma coluna sendo escrita, e portanto sem o risco clássico de o total gravado divergir das linhas que o compõem.",
    },
    architecture: {
      title: "Um processo, um banco, um deploy.",
      subtitle:
        "É um monólito Rails, e isso é escolha, não limitação. Os dados são fortemente relacionados (um lançamento de hora só existe dentro de um RDO, que só existe dentro de uma obra) e não há duas equipes trabalhando em ritmos diferentes. Fatiar isso em serviços compraria transação distribuída para uma empresa que fecha uma medição por mês.",
      items: [
        {
          title: "Models",
          description: "As regras que valem sempre: validação, escopo, cálculo de saldo.",
        },
        {
          title: "Policies · 12",
          description:
            "Quem pode ver e fazer o quê, por registro. O mesmo policy_scope que filtra a lista filtra o autocomplete e o dashboard: um contador que soma horas que a pessoa não pode ler é um vazamento com cara de indicador.",
        },
        {
          title: "POROs de consulta",
          description:
            "Measurement, ProjectWorkReport, DashboardReport, RdoQuery: leitura que não merece virar model.",
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
      title: "As partes que custaram mais para acertar.",
      subtitle: "Quatro problemas em que a implementação óbvia é a errada.",
      items: [
        {
          title: "O Excel do cliente, célula a célula",
          description:
            "“Idêntico” não significa “parecido”. O trabalho foi descompactar o .xlsx de referência e ler o XML, porque o olho não pega o que quebra: os fills usam cor de tema com tint, não RGB, então ler só o atributo RGB não vê fill nenhum; dinheiro usa o formato CONTÁBIL, que é o que encosta o R$ na borda esquerda e o número na direita; e no Resumo cada tipo de hora ocupa duas colunas, então escrever em colunas consecutivas põe todo valor duas casas à esquerda. Há um teste que faz parse estrito do styles.xml gerado, porque um format_code com aspas não escapadas produz um arquivo que o Excel se recusa a abrir, e nem a biblioteca de leitura nem os testes de conteúdo percebem.",
        },
        {
          title: "Importar duas vezes não pode duplicar",
          description:
            "A chave de idempotência é um SHA-256 da linha: obra, encarregado, cargo, data e tipo de hora. O upsert atualiza o mesmo registro em vez de criar um segundo. Sem o tipo de hora na conta, HN e FA do mesmo dia colidiam e uma sumia. Um detalhe que custou caro: o digest carrega o package_id só quando ele existe. Acrescentá-lo sempre mudaria o digest de tudo que já estava gravado, e o próximo envio do mesmo arquivo criaria uma cópia de cada linha.",
        },
        {
          title: "O importador cria cadastro, mas não inventa dinheiro",
          description:
            "Obra, cargo, funcionário e usuário que faltam são criados, e a tela diz quais foram: criar em silêncio é o que transforma um cargo digitado errado em cadastro permanente que ninguém sabe de onde veio. Pacote que não existe, porém, recusa a linha: pacote tem horas estimadas e valor de venda, então inventá-lo escreveria um orçamento que ninguém aprovou.",
        },
        {
          title: "O celular não é uma versão menor da tela",
          description:
            "O encarregado está em obra, com o telefone. Uma tabela de sete colunas atrás de rolagem lateral cabe tecnicamente, e ninguém arrasta até a coluna Situação sem cabeçalho à vista para saber onde parou. Abaixo de 640px cada tabela vira cartão rotulado, com o rótulo saindo do data-label de cada célula. Um teste reprova qualquer tabela nova que pule isso, porque ela passaria em toda request spec e sumiria da tela do celular do mesmo jeito.",
        },
      ],
    },
    numbers: {
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
        { value: "216", label: "RDOs montados a partir da planilha que a engenharia já preenchia: ninguém digitou um relatório" },
        { value: "3 s", label: "para importar 1.395 apontamentos, conferir contra o cadastro e recusar o que não bate" },
        { value: "24", label: "abas no Excel de medição, no formato que o cliente assina" },
      ],
    },
    status: {
      title: "Em produção, e honestamente inacabado.",
      subtitle:
        "Portfólio que só lista acertos não sustenta a pergunta seguinte. Os testes de escala contam queries: a listagem tem de custar o mesmo com dez registros e com dez mil. Um arquivo real de importação chega a 8.504 RDOs, e é por isso que o fechamento em lote é uma sentença SQL por fatia, e não um percurso registro a registro.",
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
        "as linhas PACOTE da medição ainda não são geradas pelo exportador: o dado já existe, falta mapear o layout",
        "dois jobs continuam no repositório sem ninguém os enfileirar: ou o assíncrono volta de propósito, ou eles saem",
        "não há teste de navegador: rolagem lateral real e o zoom de campo do Safari seguem como conferência manual",
        "a padronização das telas de cadastro sob um CRUD herdado está decidida e não começou",
      ],
      directionTitle: "Para onde vai",
      direction:
        "Foi feito para uma prestadora, mas o ciclo que ele substitui não é específico de uma: equipes alocadas dentro da planta de um cliente, horas provadas mês a mês, um documento de medição no formato que o cliente dita. Generalizar isso num produto para o setor é a direção: o trabalho multi-cliente não começou, e nada aqui está vendido para uma segunda empresa ainda.",
      ctaLabel: "Conversar sobre esse projeto",
    },
  },
  ecommerce: {
    hero: {
      title: "Serverless",
      tagline: "API de e-commerce em AWS Lambda",
      subtitle:
        "API de e-commerce em AWS Lambda com infraestrutura como código, CI/CD com GitHub Actions, observabilidade completa e recomendação de produtos com Machine Learning. A meta: cada decisão tem uma justificativa escrita, e cada garantia tem um teste que a prova.",
      badges: [
        "Node.js 24",
        "Express 5",
        "AWS Lambda",
        "API Gateway",
        "RDS PostgreSQL",
        "ElastiCache (Valkey)",
        "SQS",
        "EventBridge",
        "S3",
        "SageMaker",
        "Terraform",
        "GitHub Actions",
        "OpenTelemetry",
        "X-Ray",
        "Docker Compose",
        "Python",
      ],
      ctaRepo: "github.com/wasdevv/ecommerce-serverless",
      ctaContact: "Conversar sobre esse projeto",
    },
    overview: {
      title: "Mais que o hello world de uma Lambda.",
      subtitle:
        "Projeto de estudo construído para praticar como um backend serverless é feito de verdade: transações, idempotência, eventos assíncronos, IAM de menor privilégio e um pipeline de deploy real.",
      flowsTitle: "O que a API cobre",
      flows: [
        "cadastro e login com JWT",
        "catálogo paginado com cache",
        "pedidos transacionais e idempotentes",
        "upload de imagens direto ao S3",
        "processamento assíncrono de eventos",
        "recomendação personalizada de produtos",
      ],
      localTitle: "Roda sem conta AWS",
      localBody:
        "Tudo roda localmente com docker compose, e a mesma aplicação roda na Lambda sem mudar uma linha.",
    },
    architecture: {
      title: "4 Lambdas, 4 gatilhos diferentes.",
      subtitle:
        "VPC privada em 2 zonas de disponibilidade. RDS e ElastiCache sem acesso público, e TLS em todas as conexões.",
      diagram: `client ─HTTPS→ API Gateway ─→ λ api (Express 5)
                                ├─→ RDS Proxy ─→ PostgreSQL
                                ├─→ ElastiCache (Valkey)
                                ├┄→ S3 privado            POST pré-assinado
                                └┄→ SageMaker serverless  InvokeEndpoint

EventBridge ─→ λ dispatcher ─→ SQS ─→ λ worker
                                └┄→ DLQ

λ ops        sem rota HTTP: migrações e tarefas administrativas`,
      items: [
        {
          title: "api",
          description: "Express 5 atrás do API Gateway. A mesma aplicação roda no docker compose local.",
        },
        {
          title: "dispatcher",
          description: "Agendado pelo EventBridge. Publica no SQS os eventos pendentes da outbox.",
        },
        {
          title: "worker",
          description: "Consome o SQS com partial batch failure, então uma mensagem ruim vai para a DLQ sem travar o lote.",
        },
        {
          title: "ops",
          description: "Sem nenhuma rota HTTP: migrações, export de dados de treino e tarefas administrativas.",
        },
        {
          title: "10 módulos Terraform",
          description: "Três ambientes (dev, staging, prod), cada um com state separado.",
        },
        {
          title: "RDS Proxy",
          description: "Cada ambiente de execução da Lambda abre suas próprias conexões, o que pode esgotar o banco num pico de tráfego. O proxy mantém o pool e multiplexa as conexões.",
        },
      ],
    },
    problems: {
      title: "Cada garantia tem um teste por trás.",
      subtitle:
        "As falhas que uma loja real encontra com concorrência, retries e quedas, e como a API trata cada uma.",
      proofLabel: "teste",
      items: [
        {
          title: "Sem estoque negativo, mesmo sob concorrência",
          description:
            "O débito de estoque é um UPDATE … WHERE stock >= quantidade dentro da transação do pedido, com locks sempre na mesma ordem para evitar deadlock. Uma constraint no banco é a última linha de defesa.",
          proof: "4 compradores simultâneos disputando 1 unidade, e exatamente um recebe 201.",
        },
        {
          title: "Sem pedido duplicado por retry do cliente",
          description:
            "O header Idempotency-Key é obrigatório. A mesma chave com o mesmo corpo devolve o mesmo pedido, sem novo débito de estoque. A mesma chave com outro corpo devolve 409.",
          proof: "3 retries concorrentes com a mesma chave viram um pedido só.",
        },
        {
          title: "Nenhum evento perdido entre o banco e a fila",
          description:
            "Transactional outbox: o evento é gravado na mesma transação do pedido, e um dispatcher publica no SQS com FOR UPDATE SKIP LOCKED, para que dois dispatchers nunca publiquem o mesmo evento. O worker deduplica pelo id do evento.",
          proof: "Com o SQS fora do ar, o evento espera na outbox e é publicado quando a fila volta.",
        },
        {
          title: "Cache que não derruba a aplicação",
          description:
            "O cache-aside no Redis trata erro como miss, com timeouts curtos. Se o Redis cai, o catálogo continua respondendo direto do banco.",
        },
        {
          title: "Upload seguro",
          description:
            "POST pré-assinado em vez de PUT, porque só a policy do POST permite limitar o tamanho do arquivo. A chave é gerada pelo servidor dentro do prefixo do próprio usuário, então um cliente não consegue escrever no espaço de outro.",
        },
        {
          title: "Conexões de banco com Lambda",
          description:
            "O RDS Proxy mantém o pool de conexões, para que uma rajada de ambientes Lambda novos não esgote o PostgreSQL.",
        },
      ],
    },
    ml: {
      title: "Recomendação pelo que clientes parecidos compraram.",
      subtitle:
        "GET /api/v1/recommendations sugere produtos por filtragem colaborativa item-item, servida pelo SageMaker Serverless Inference.",
      diagram: `PostgreSQL ─→ export anonimizado ─→ S3 ─→ treino em Python ─→ model.tar.gz
                                                                   │
λ api ─InvokeEndpoint, 800 ms→ SageMaker Serverless ←──────────────┘
  └─ timeout · sem histórico · modelo fora ─→ mais vendidos`,
      items: [
        {
          title: "O modelo certo para o problema",
          description:
            "Filtragem colaborativa item-item com similaridade de cosseno, treinada do zero com o histórico de compras. Fine-tuning foi descartado de propósito: exige um modelo pré-treinado, GPU e um volume de dados que uma loja pequena não tem.",
        },
        {
          title: "Paga por invocação",
          description:
            "SageMaker Serverless Inference com o container oficial de scikit-learn. Nenhuma instância ligada 24 horas por dia.",
        },
        {
          title: "Uma dependência opcional",
          description:
            "Com timeout de 800 ms, cliente sem histórico ou modelo fora do ar, a API responde com os mais vendidos. O header X-Recommendation-Source informa a origem da lista.",
        },
        {
          title: "Consistente com a loja",
          description:
            "O modelo só devolve ids. Preço e estoque vêm sempre do banco, então um produto esgotado nunca é recomendado.",
        },
        {
          title: "Privado e reprodutível",
          description:
            "No export para treino, o id do cliente vira um HMAC com sal aleatório a cada exportação. Os mesmos dados geram o mesmo artefato, byte a byte, e a versão do modelo é o hash do seu conteúdo.",
        },
        {
          title: "Testado de ponta a ponta",
          description:
            "Um teste exporta do PostgreSQL, treina, sobe o servidor de inferência e verifica que a API passa de “mais vendidos” para “modelo”.",
        },
      ],
    },
    infra: {
      title: "Terraform sem segredo no state.",
      subtitle: "10 módulos, 3 ambientes e uma suíte de testes que roda sem conta AWS.",
      items: [
        {
          title: "Segredos fora do state",
          description:
            "O RDS gera e guarda a própria senha (manage_master_user_password). A chave JWT é um valor efêmero gravado por argumento write-only, então nunca aparece no state do Terraform.",
        },
        {
          title: "IAM de menor privilégio",
          description:
            "Um role por função, e cada um só acessa o que a função usa. A api só pode invocar o endpoint de recomendação; a ops só escreve no prefixo training/.",
        },
        {
          title: "Guardas de configuração",
          description: "Um bloco check recusa o plan de produção sem Multi-AZ.",
        },
        {
          title: "Lock nativo do state",
          description: "O lock é feito nativamente no S3, sem tabela DynamoDB.",
        },
        {
          title: "terraform test com provider simulado",
          description:
            "Valida os três ambientes em 8 cenários, sem conta AWS e sem custo.",
        },
        {
          title: "Documentação gerada",
          description: "Cada módulo tem um README produzido pelo terraform-docs e verificado no CI.",
        },
      ],
    },
    cicd: {
      title: "Nenhuma chave AWS no GitHub.",
      subtitle: "O GitHub Actions autentica com OIDC, e produção exige aprovação humana.",
      diagram: `pull request ─┬─→ testes · lint · build · compose + smoke · terraform
              └─→ terraform plan × 3 ambientes (role somente leitura)

push main ───→ deploy dev ─→ deploy prod (aprovação manual)`,
      items: [
        {
          title: "OIDC em vez de chaves",
          description:
            "O role de produção só pode ser assumido por um job no ambiente prod, que exige aprovação manual.",
        },
        {
          title: "Pull request nunca aplica",
          description: "O role de plan é somente leitura.",
        },
        {
          title: "Deploy pelo plano salvo",
          description:
            "Serializado por ambiente, seguido de migração e smoke test.",
        },
        {
          title: "Stack local completa no CI",
          description:
            "O docker compose sobe e o smoke test vai do cadastro ao pedido, passando pela recomendação treinada.",
        },
      ],
    },
    observability: {
      title: "Siga um pedido do HTTP até o worker.",
      subtitle: "Logs estruturados, correlação de ponta a ponta, tracing e alarmes no que de fato quebra.",
      items: [
        {
          title: "Logs JSON estruturados",
          description:
            "Toda linha leva o correlation ID e o trace ID. Senha, token e email são redigidos automaticamente.",
        },
        {
          title: "Correlation ID fim a fim",
          description:
            "Atravessa a requisição HTTP, a outbox, a mensagem SQS e o worker, então uma consulta salva no CloudWatch Logs Insights mostra o caminho completo de um pedido.",
        },
        {
          title: "OpenTelemetry e X-Ray",
          description:
            "No ambiente local, um collector OpenTelemetry roda como sidecar. Na Lambda, onde não existem containers lado a lado, o equivalente é o X-Ray com uma Lambda Extension.",
        },
        {
          title: "Dashboard e alarmes",
          description:
            "Dashboard CloudWatch e alarmes para 5xx, latência p95, erros por função, qualquer mensagem na DLQ e mensagens envelhecendo na fila.",
        },
      ],
    },
    quality: {
      title: "Testado contra o real.",
      subtitle:
        "Lock de linha, constraint, transação e SKIP LOCKED não existem num mock, então os testes usam banco e cache de verdade de propósito.",
      stats: [
        { value: "69", label: "testes de backend contra PostgreSQL e Redis reais" },
        { value: "~95%", label: "de cobertura de linhas (~83% de branches, mínimo de 80% no CI)" },
        { value: "9", label: "testes de ML: treino, contrato de inferência e servidor HTTP" },
        { value: "8", label: "cenários de terraform test" },
      ],
      layerLabel: "Camada",
      coverageLabel: "Cobertura",
      rows: [
        { layer: "Backend (Jest + Supertest)", coverage: "69 testes contra PostgreSQL e Redis reais" },
        { layer: "Machine Learning (unittest)", coverage: "9 testes: treino, contrato de inferência e servidor HTTP" },
        { layer: "Infraestrutura", coverage: "terraform fmt, validate e test (8 cenários)" },
        { layer: "Artefato", coverage: "O zip da Lambda é extraído como a AWS faz e invocado com um evento real do API Gateway" },
        { layer: "Integração", coverage: "Smoke test contra a stack completa em Docker Compose" },
      ],
    },
    status: {
      title: "O que está provado, e o que ainda não.",
      subtitle: "O pipeline está pronto. O deploy numa conta AWS real ainda não foi executado.",
      doneTitle: "Verificado",
      done: [
        "testes, lint, build, Terraform validate/test e a stack Docker, tudo no CI",
        "recomendação de ponta a ponta, local e no CI",
      ],
      pendingTitle: "Pipeline pronto, ainda não executado",
      pending: ["deploy numa conta AWS real: apply, SageMaker, X-Ray"],
      costTitle: "Custo estimado",
      cost:
        "Cerca de US$ 0,12/hora no ambiente dev. É uma estimativa, não uma fatura. O que domina é o custo fixo de NAT, RDS Proxy, RDS e ElastiCache, não as Lambdas. Por isso o projeto roda 100% local e sobe na AWS só para testar, destruído no mesmo dia.",
      learnedTitle: "O que aprendi",
      learned: [
        "A janela entre “gravou no banco” e “publicou na fila” é real, e o outbox fecha essa janela.",
        "Idempotência deve ser desenhada desde o início, não adicionada depois.",
        "Serverless tem custo fixo escondido: NAT, Proxy e banco cobram parados, e a Lambda quase não pesa.",
        "Escolher o modelo de ML certo para o problema. Filtragem colaborativa simples e explicável vence um modelo grande quando os dados são poucos.",
        "Dependências opcionais (cache, modelo de ML) precisam de timeout e fallback, para que a falha delas nunca vire falha do usuário.",
        "Segurança na infraestrutura: OIDC em vez de chaves, segredos fora do state e IAM mínimo por função.",
        "Documentar o porquê de cada decisão vale tanto quanto o código.",
      ],
      ctaRepo: "Ler o código",
      ctaContact: "Conversar sobre esse projeto",
    },
  },
  home: {
    nav: {
      home: "Início",
      work: "Projetos",
      more: "Mais",
      lightMode: "Mudar para o modo claro",
      projects: "Projetos",
      darkMode: "Mudar para o modo escuro",
      obrahub: "ObraHub",
      swarm: "Swarm",
      serverless: "Serverless",
      experience: "Experiência",
      about: "Sobre",
      skills: "Skills",
      resume: "Currículo",
      openToWork: "Disponível",
    },
    hero: {
      badge: "Disponível agora · aberto a remoto",
      roleAccent: "Engenheiro de Software",
      roleRest: "Full-Stack",
      focus: "Foco em backend · Performance · Confiabilidade",
      pitch: "Construo sistemas que não quebram sob pressão.",
      pitchMore: "Performance, confiabilidade e arquitetura escalável. De sistemas backend complexos a experiências de usuário bem acabadas.",
      pitchStrong: "Problemas complexos. Soluções elegantes. Impacto mensurável.",
      downloadResume: "Baixar currículo",
      emailMe: "Mandar email",
      shippedFor: "entregue para",
      clients: ["Pare.Ai", "W/P Advisory", "Universe Pro", "Tork", "GoTechDS"],
      terminal: {
        title: "washington — zsh",
        boot: [
          "4 anos de Ruby on Rails em produção",
          "PostgreSQL ajustado em 14M+ linhas",
          "latência p99 3,5 s → 180 ms",
          "cobertura de testes 35% → 89%",
          "curriculo.pdf pronto para baixar",
        ],
        ready: "pronto",
        localTime: "Horário local",
      },
      facts: [
        { label: "Disponibilidade", value: "Imediata", accent: true },
        { label: "Modelo", value: "Remoto · Brasil ou exterior" },
        { label: "Local", value: "São José do Rio Preto, SP" },
        { label: "Inglês", value: "B2 · todo dia em PRs e docs" },
        { label: "Contrato", value: "PJ · CLT · B2B internacional" },
      ],
    },
    intro: {
      label: "Sobre",
      statement:
        "De sistemas distribuídos a produtos com IA, transformo problemas complexos em *software confiável*.",
      details: [
        "Construo e otimizo sistemas de software onde performance, confiabilidade e escalabilidade importam.",
        "Com quase quatro anos de experiência em engenharia, trabalhei em plataformas Ruby on Rails em produção que atendem mais de 50 prefeituras brasileiras, além de aplicações full-stack, arquiteturas distribuídas e infraestrutura em nuvem.",
        "Também tenho grande interesse em AI Engineering — integrações com LLMs, sistemas RAG, agentes autônomos e ferramentas para desenvolvedores com Claude, OpenAI, MCP e frameworks modernos de orquestração.",
        "Gosto de resolver problemas complexos de engenharia, melhorar o fluxo de trabalho dos desenvolvedores e transformar ideias ambiciosas em software confiável.",
      ],
      more: "Mais sobre mim",
    },
    sectionIndex: {
      label: "Seções",
      about: "Sobre",
      work: "Projetos",
      case: "Case",
      experience: "Experiência",
      how: "Como trabalho",
      contact: "Contato",
    },
    proof: {
      label: "// Medido em produção",
      heading: "Antes → depois, *em tráfego real*",
      items: [
        { label: "endpoint crítico · 100k req/dia", before: "3,5 s", after: "180 ms", value: 19, start: 1, unit: "×", word: "mais rápido", kind: "time", from: 1, to: 180 / 3500 },
        { label: "export csv · 1,77M linhas", before: "~80 h", after: "7 min", value: 690, start: 1, prefix: "~", unit: "×", word: "mais rápido", kind: "time", from: 1, to: 7 / 4800 },
        { label: "consulta · 14M linhas", before: "12,7 s", after: "0,2 ms", value: 0.2, start: 12700, decimals: 1, unit: " ms", word: "", note: "índice composto", kind: "time", from: 1, to: 0.2 / 12700 },
        { label: "cobertura de testes · rspec", before: "35%", after: "89%", value: 54, start: 0, prefix: "+", unit: "", word: "pts", kind: "growth", from: 0.35, to: 0.89 },
      ],
    },
    highlights: [
      { value: "50+", label: "prefeituras numa só base de código" },
      { value: "17", label: "releases em 5 meses como autor principal" },
      { value: "99,9%", label: "de uptime com um provedor instável" },
      { value: "0", label: "downtime em migrações de índice" },
    ],
    work: {
      title: "Software que coloquei no ar",
      allProjects: "Todos os {count} projetos →",
      projects: {
        obrahub: {
          kicker: "antes ObraHub · em produção na Engemil",
          title: "Tork",
          body: "Apontamento e medição de mão de obra para uma prestadora industrial que rodava em papel, planilha e redigitação. Construído rodada a rodada com quem fazia o trabalho à mão.",
          bullets: [
            "Reenviar um arquivo nunca duplica uma linha",
            "Planilha de medição exportada idêntica ao arquivo de referência do cliente",
            "11.551 horas fechadas no primeiro mês",
          ],
          cta: "Veja com mais detalhes →",
          checks: ["PostgreSQL RLS entre empresas", "Excel idêntico ao modelo do cliente", "Assinado pelo celular, sem login"],
          figures: [
            { value: "1.900+", label: "testes RSpec" },
            { value: "95%", label: "de cobertura" },
            { value: "5", label: "categorias de hora calculadas" },
          ],
          screenshotAlt: "Dashboard do ObraHub: 354 horas trabalhadas em 30 dias, com gráfico de barras por dia",
          videoLabel: "Demonstração do Tork: do RDO no celular à medição do fim do mês",
          play: "Reproduzir a demonstração",
          pause: "Pausar a demonstração",
          seek: "Linha do tempo do vídeo",
          mute: "Tirar o som",
          unmute: "Ligar o som",
          volume: "Volume",
          expand: "Expandir",
          collapse: "Sair",
          chapters: [
            { title: "Lançado uma vez, na obra", text: "O encarregado lança o RDO pelo celular; as horas saem calculadas" },
            { title: "Painel do escritório ao vivo", text: "Andamento de cada obra e saldo dos pacotes em tempo real" },
            { title: "Aprovado e assinado", text: "O supervisor aprova; o cliente assina pelo celular, sem login" },
            { title: "Medição pronta", text: "A medição do mês por pessoa e função, direto dos RDOs" },
          ],
        },
        swarm: {
          kicker: "Projeto de engenharia com IA · plataforma multiagente",
          screenshotAlt: "Swarm com uma sessão do Claude Code à esquerda e a revisão do diff à direita",
          title: "Swarm",
          lead: "*250+ pull requests* em 30 dias. Um único fluxo de engenharia orquestrado por IA.",
          body: "Uma plataforma autônoma de engenharia de software multiagente. Roda Claude Code e Codex em paralelo, coordena times de IA persistentes, automatiza o fluxo de desenvolvimento e revisa cada implementação num workspace em tempo real.",
          cta: "Veja com mais detalhes →",
          figures: [
            { value: "250+", label: "pull requests em um único mês" },
            { value: "100+", label: "git worktrees isolados" },
            { value: "4", label: "agentes simultâneos, Claude Code + Codex" },
            { value: "3", label: "rodadas de revisão entre agentes" },
          ],
          pillars: [
            { title: "Até 4 agentes em paralelo", text: "Claude Code e Codex trabalhando ao mesmo tempo, cada um num ambiente isolado" },
            { title: "Times de IA autônomos", text: "Agentes persistentes que colaboram, delegam e revisam o trabalho um do outro" },
            { title: "Execução com controle de custo", text: "Tokens por tarefa, limites de gasto e governança de custo fail-closed" },
            { title: "App desktop nativo", text: "Desktop Windows com Tauri 2, Rust e integração com WSL" },
          ],
          decision: {
            label: "Um único processo Rails, de propósito",
            text: "Os terminais PTY e as sessões dos agentes vivem na memória do processo Puma, e a arquitetura foi desenhada em torno disso.",
          },
          lifecycleTitle: "Ciclo de engenharia guiado por IA",
          lifecycle: [
            { title: "PRD e requisitos", text: "Escopo, restrições e critérios de aceite" },
            { title: "Planejamento técnico", text: "Decisões de arquitetura e divisão em tarefas" },
            { title: "Implementação paralela", text: "Agentes trabalham em git worktrees isolados" },
            { title: "Revisão automatizada", text: "Times de IA inspecionam o diff e dão feedback" },
            { title: "Validação e entrega", text: "Testes, pull request, ajustes da revisão, merge" },
          ],
        },
        serverless: {
          kicker: "Projeto de estudo · Node.js, React, React Native e AWS",
          title: "Plataforma de e-commerce serverless full-stack com IA",
          lead: "*4 compradores, 1 unidade:* exatamente uma compra. Cada garantia tem um teste que a prova.",
          body: "Uma loja web e mobile (React e React Native) sobre um único backend serverless na AWS: 4 Lambdas com gatilhos independentes numa VPC privada, recomendações de produto pelo SageMaker e recursos generativos pela API do Claude.",
          cta: "Veja com mais detalhes →",
          figures: [
            { value: "95%", label: "cobertura de linhas no backend" },
            { value: "83%", label: "cobertura de branches" },
            { value: "10", label: "módulos Terraform reutilizáveis" },
            { value: "3", label: "ambientes isolados: dev, staging, prod" },
          ],
          pillars: [
            { title: "Eventos tolerantes a falha", text: "SQS, EventBridge, dead-letter queues e outbox transacional: fila fora do ar não perde evento já gravado" },
            { title: "Dois tipos de IA", text: "API do Claude para recursos generativos, filtragem colaborativa item-item no SageMaker para recomendações" },
            { title: "CI/CD seguro", text: "GitHub Actions com AWS OIDC, sem chaves de longa duração, plano por ambiente e aprovação manual em produção" },
            { title: "Rastreamento ponta a ponta", text: "OpenTelemetry, X-Ray e CloudWatch, com correlation IDs passando por HTTP, eventos, SQS e workers" },
          ],
          decision: {
            label: "Pagar por invocação, de propósito",
            text: "As recomendações rodam no SageMaker Serverless, então nenhuma instância de inferência fica ociosa. Se passar de 800 ms, a loja usa o fallback e continua vendendo.",
          },
          diagramLabel: "Arquitetura: API Gateway para a Lambda api, que fala com o PostgreSQL via RDS Proxy, Valkey, S3 e SageMaker; o EventBridge dispara o dispatcher, que alimenta o SQS e o worker, com dead-letter queue; uma Lambda ops não tem rota HTTP.",
          opsNote: "sem rota HTTP: migrations, tarefas de admin",
          provenTitle: "Provado por testes",
          proven: [
            { scenario: "4 compradores, 1 unidade", result: "exatamente 1 compra, estoque nunca negativo" },
            { scenario: "3 requisições, mesma chave de idempotência", result: "1 pedido, estoque baixado uma vez" },
            { scenario: "fila fora do ar", result: "eventos esperam na outbox, nenhum perdido" },
            { scenario: "69 testes de backend + 9 de ML + 8 de Terraform", result: "backend contra PostgreSQL e Redis reais" },
          ],
        },
      },
      more: {
        trilogyKicker: "Open source · Claude Code",
        trilogyTitle: "Trilogia de plugins Rails",
        trilogyBody:
          "Corta de 70% a 97% dos tokens da saída do RSpec e do RuboCop, e bloqueia `db:drop` até um humano dizer sim.",
        shelflogKicker: "PWA · Varejo",
        shelflogBody:
          "Controle de validade na gôndola de um supermercado: leitura de código de barras e alertas push de hora em hora.",
        restKicker: "Mais {count}",
        restTitle: "Apps web, sistemas, ferramentas de dev",
        restCta: "Ver todos os projetos →",
      },
    },
    bugCase: {
      kicker: "Um bug, do começo ao fim",
      title: "O mesmo número de protocolo, três vezes.",
      cause:
        "Um clique duplo num sistema de protocolo municipal gerava números repetidos. O próximo número vinha de `MAX(number) + 1`, lido sem lock.",
      fix: "Um advisory lock com escopo de transação, por departamento e ano, resolveu sem serializar a tabela inteira. Uma checagem de unicidade continua como segunda linha de defesa.",
      facts: [
        { label: "Causa", value: "corrida de ler-e-gravar" },
        { label: "Correção", value: "pg_advisory_xact_lock" },
        { label: "Escopo", value: "departamento + ano" },
      ],
      fileLabel: "app/models/protocol.rb · simplificado",
    },
    testimonials: {
      title: "O que dizem as pessoas com quem trabalhei",
      prev: "Depoimento anterior",
      next: "Próximo depoimento",
      pause: "Pausar depoimentos",
      play: "Reproduzir depoimentos",
      items: [
        {
          quote:
            "O Washington não entregou só mais uma plataforma de software. Ele dedicou tempo para entender como a nossa operação funciona de verdade e construiu uma solução em cima das nossas necessidades reais.",
          name: "Guilherme",
          role: "Ingrideon",
          context: "Tork · cliente desde agosto",
        },
        {
          quote:
            "Ele estruturou uma iniciativa de testes automatizados que levou a cobertura da suíte RSpec de 35% para 89%. No caminho, me mentorou: criando cards de teste no Trello, explicando quais cenários precisavam ser cobertos e revisando minhas implementações.",
          name: "Samuel",
          role: "Desenvolvedor · W/P Advisory",
          context: "Projeto Compras · mentoria em RSpec",
        },
        {
          quote:
            "Ele ficou responsável por orientar dois desenvolvedores na melhoria dos testes automatizados do sistema. Ajudou a identificar os cenários que importavam, escrever specs mais confiáveis e entender como os testes protegem as regras de negócio contra regressões.",
          name: "Iarhel",
          role: "Desenvolvedor · W/P Advisory",
          context: "Projeto Compras · mentoria em RSpec",
        },
        {
          quote:
            "Ele construiu a API de Protocolo e implementou a integração com o Gov.br. Depois de se especializar em Claude Code e LLMs, levou isso para o nosso desenvolvimento e ajudou a aumentar nossa produtividade. Ficamos entre os que mais entregaram no time, e a contribuição dele teve papel importante nisso.",
          name: "Lucas",
          role: "Desenvolvedor · W/P Advisory",
          context: "API de Protocolo · integração Gov.br",
        },
      ],
    },
    experience: {
      title: "Experiência",
      showAll: "Ver todos",
      showLess: "Ver menos",
      items: [
        {
          period: "dez 2026 – atual",
          role: "Programador Pleno I",
          company: "Pare.Ai (subindo para Sênior)",
          bullets: [],
          stack: "Node.js · React · React Native · Delphi",
        },
        {
          period: "ago 2026 – atual",
          role: "Fundador e engenheiro",
          company: "Tork (Em produção · parceria com a Engemil desde ago 2026)",
          summary:
            "SaaS de gestão de obras e manutenção industrial. Substitui controles manuais e planilhas por uma plataforma única para equipes, apontamentos, contratos, pacotes de horas e medições.",
          stats: [
            { value: "1.900+", label: "Testes automatizados", detail: "RSpec, Capybara, Cuprite" },
            { value: "95%", label: "Cobertura de código", detail: "SimpleCov" },
            { value: "PostgreSQL RLS", label: "Segurança no banco", detail: "Isolamento multi-tenant" },
            { value: "Com IA", label: "Leitura de documentos", detail: "API do Claude, em desenvolvimento" },
          ],
          featured: 5,
          bullets: [
            "**Arquitetura multi-tenant e segurança:** isolamento de dados com PostgreSQL Row-Level Security (RLS), complementado por políticas de autorização com Pundit, restrições no banco e testes automatizados contra acesso cruzado entre organizações.",
            "**Geração de medições em Excel:** mecanismo de exportação com caxlsx que reproduz fielmente o template financeiro de cada cliente, preservando formatação contábil, estilos, cores, células mescladas e estrutura da planilha, com testes automatizados de fidelidade.",
            "**RDO e cálculo de horas:** Registro Diário de Obras mobile-first, com cálculo automático de jornadas, intervalos, horas noturnas e cinco categorias de horas com fatores específicos, reduzindo inconsistências nos apontamentos.",
            "**Billing e pagamentos:** integração com a API do Asaas para planos, cobranças recorrentes e webhooks, com validação de assinatura HMAC, idempotência e sincronização do status de pagamento com as permissões de acesso. Integração ainda não publicada em produção.",
            "**AI Engineering com a API do Claude:** arquitetura em desenvolvimento para interpretar pedidos de compra e PDFs com a API da Anthropic, estruturando informações para preencher Pacotes e ASEs, com revisão humana antes de salvar e rastreamento de tokens e custos por organização.",
            "**Aprovação e assinatura digital:** fluxos de aprovação por links seguros, em que fiscais externos revisam, devolvem ou aprovam RDOs e assinam pelo celular, com registro de autoria, data e integridade dos documentos.",
            "**Importação idempotente de dados:** pipelines para planilhas e arquivos ZIP, com deduplicação, validações, criação de registros relacionados e controle de concorrência para evitar inconsistências e duplicações.",
            "**Customização por organização:** configurações independentes de formulários, campos, grades de dados, documentos impressos, logotipos, assinaturas e identidade visual de cada cliente.",
            "**Qualidade e automação de testes:** suíte com cerca de 1.900 testes RSpec, Capybara e Cuprite, com 95% de cobertura de linhas, execução adicional sob RLS no CI e verificações de segurança com Brakeman e Bundler Audit.",
          ],
          stack: "Ruby on Rails 8.1 · Ruby 4 · PostgreSQL · Hotwire · Tailwind CSS 4 · Asaas · AWS S3 · RSpec · Docker · Railway",
        },
        {
          period: "ago 2023 – nov 2026",
          role: "Desenvolvedor Full-Stack",
          company: "W/P Advisory (PJ)",
          summary:
            "Backend Rails de uma plataforma multi-tenant de tributos e dívida ativa atendendo mais de 50 prefeituras. Liderei a frente de performance, o módulo de Extrato de Débitos, a integração com a API SINAL e a migração Rails 7 → 8 do módulo de parcelamentos.",
          bullets: [
            "Reduzi um endpoint crítico de **3,5 s para 180 ms** eliminando N+1 e adicionando cache Redis em 3 camadas, com mais de 100 mil requisições por dia.",
            "Refiz a exportação CSV como pipeline assíncrono (Sidekiq, COPY do PostgreSQL, streaming para o S3): 1,77M registros foram de **~80 h para 7 min**.",
            "Desenhei índices compostos numa base de 14M linhas, levando uma consulta de **12,7 s para 0,2 ms**.",
            "Construí do zero o módulo de Extrato de Débitos como autor principal, **17 releases em 5 meses**, e acabei com os erros 500 recorrentes.",
            "Fiz os totais de dívida do contribuinte baterem **até o centavo** em três telas que divergiam em produção, com um resolvedor compartilhado.",
            "Integrei a API SINAL (**100 mil+ registros/mês**) com circuit breaker, retries e outbox: 99,9% de uptime e zero duplicados com um provedor instável.",
            "Corrigi uma corrida que gerava o mesmo número de protocolo 3× no clique duplo, usando um `pg_advisory_xact_lock` com escopo.",
            "Removi **33 índices sem uso** e adicionei índices únicos com migrações concorrentes, sem downtime.",
            "Subi a cobertura de testes de **35% para 89%** com RSpec e Capybara, além de RuboCop e Brakeman no CI.",
            "Evoluí o módulo de Parcelamentos na migração Rails 7 → 8 com **mais de 15 feature flags por prefeitura**: entregas 60% mais rápidas e 59% menos chamados de suporte.",
            "Operei produção em Kubernetes com ArgoCD, Grafana e Datadog, pegando incidentes antes dos usuários.",
          ],
          stack: "Rails · PostgreSQL · Sidekiq · Redis · Kubernetes · Datadog",
        },
        {
          period: "jun 2023 – jul 2023",
          role: "Desenvolvedor Full-Stack",
          company: "GoTechDS",
          bullets: [
            "Entreguei funcionalidades no produto Go Tech DS com Rails e Devise, a partir de cards no Trello priorizados pelo time.",
            "Construí o fluxo de autenticação (login, cadastro, recuperação de senha) e o dashboard.",
            "Me adaptei rápido a uma base de código nova com code review e pair programming.",
          ],
        },
        {
          period: "nov 2022 – mai 2023",
          role: "Desenvolvedor Full-Stack",
          company: "Autônomo (freelance)",
          bullets: [
            "Entreguei soluções de software de ponta a ponta para clientes independentes, incluindo aplicações de negócio, sites, landing pages, ferramentas internas e automação de fluxos, conduzindo os projetos da descoberta inicial ao deploy em produção.",
            "Fiz análise de requisitos de negócio trabalhando direto com os clientes para entender os fluxos operacionais, identificar ineficiências e transformar processos manuais em soluções de software práticas.",
            "Desenvolvi aplicações backend com Ruby on Rails, Python, Node.js e Delphi, escolhendo a tecnologia conforme a necessidade do negócio, a complexidade do projeto e os requisitos de deploy.",
            "Automatizei fluxos baseados em planilhas, transformando dados de Excel mantidos à mão em operações estruturadas de banco, funcionalidades da aplicação e processos de negócio mais confiáveis.",
            "Projetei e implementei schemas de banco, operações CRUD, regras de negócio, APIs RESTful e integrações com terceiros, incluindo armazenamento no AWS S3 e gateways de pagamento.",
            "Construí interfaces web responsivas com JavaScript, Stimulus e Tailwind CSS, conectando componentes de frontend a serviços de backend e APIs externas.",
            "Cuidei da infraestrutura e dos deploys em produção, incluindo configuração da aplicação, variáveis de ambiente, banco de dados, armazenamento de arquivos, troubleshooting e manutenção pós-deploy.",
            "Assumi todo o ciclo de entrega ao cliente: discovery técnico, levantamento de requisitos, estimativa, gestão de escopo, desenvolvimento, testes, deploy e suporte contínuo.",
            "Construí relacionamentos recorrentes com clientes por meio de ownership técnico, comunicação transparente e entrega confiável de soluções alinhadas às necessidades reais do negócio.",
          ],
          stack: "Ruby on Rails · Python · Node.js · Delphi · JavaScript · Stimulus · Tailwind CSS · AWS S3",
        },
      ],
    },
    howIWork: {
      title: "Como eu trabalho",
      items: [
        {
          stat: "899 / 0",
          title: "Teste vem primeiro",
          body: "O ObraHub vai para produção com 899 exemplos e zero falhas. Cada garantia que eu afirmo tem um teste tentando quebrá-la.",
        },
        {
          stat: "0 duplicados",
          title: "Seguro para repetir",
          body: "Chaves de idempotência, outbox e advisory locks, para que clique duplo, retry e provedor instável não gerem dado errado.",
        },
        {
          stat: "33 índices",
          title: "Passos pequenos e seguros",
          body: "Removi 33 índices sem uso com migrações concorrentes e zero downtime. Medir antes, mudar uma coisa, medir de novo.",
        },
      ],
    },
    skills: {
      title: "Habilidades técnicas",
      production: "Usado em produção",
      builtWith: "Já construí com",
      groups: [
        {
          label: "Linguagens",
          production: ["Ruby", "SQL", "JavaScript", "Delphi"],
          builtWith: ["TypeScript", "Python", "Shell", "Kotlin", "C#", "Elixir", "Rust"],
        },
        {
          label: "Frameworks",
          production: ["Ruby on Rails", "Hotwire", "Stimulus", "React", "Node.js", "React Native"],
          builtWith: ["Next.js", "Tailwind CSS", "Tauri", "Sinatra", "Spring Boot", "Django", ".NET", "Phoenix", "Ember.js", "Electron"],
        },
        {
          label: "Bancos de dados",
          production: ["PostgreSQL", "Redis"],
          builtWith: ["SQLite", "MySQL", "Elasticsearch", "SQL Server"],
        },
        {
          label: "DevOps e cloud",
          production: ["Sidekiq", "Kubernetes", "ArgoCD", "Datadog", "Grafana", "AWS S3", "Docker", "CI/CD", "Git", "Linux"],
          builtWith: ["Terraform", "AWS Lambda", "Solid Queue", "RabbitMQ", "OpenTelemetry"],
        },
        {
          label: "Testes e qualidade",
          production: ["RSpec", "TDD", "Capybara", "RuboCop", "Brakeman", "Jest", "Vitest", "Supertest", "Playwright", "Cypress", "Testcontainers", "MSW", "ESLint", "Prettier", "Stryker"],
          builtWith: ["Selenium"],
        },
        {
          label: "Arquitetura",
          production: ["SaaS multi-tenant", "APIs RESTful", "Orientado a eventos / outbox", "Clean Architecture"],
          builtWith: ["WebSockets", "GraphQL", "MCP", "RAG", "Claude API"],
        },
      ],
    },
    contact: {
      label: "// Contato",
      title: "Seu sistema está lento ou frágil? *Vamos resolver.*",
      copy: "Copiar",
      copied: "Copiado",
      copyLabel: "Copiar o endereço de e-mail",
      availability: "Full-Stack Developer · aberto a vagas full-time · remoto ou Brasil · respondo em até 24h",
      resume: "Currículo (PDF)",
    },
    footer: {
      kicker: "Aberto a vagas de backend · remoto ou Brasil",
      title: "Tem um app Rails lento ou frágil?",
      resume: "Currículo",
    },
  },
}

export const dictionaries: Record<Lang, Dict> = { en, pt }

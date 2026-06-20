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
    title: string
    body: string
    emailLabel: string
    inboxLabel: string
    socialLabel: string
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
      },
      readme: {
        filename: "README.md",
        title: "About",
        paragraphs: [
          "I'm a full-stack developer specialized in Ruby on Rails, building production systems from the database to the UI.",
          "I enjoy solving complex problems with simple solutions, writing maintainable code and collaborating with product teams to ship features that move the needle.",
          "Outside of code, I'm always exploring new technologies, contributing to open-source and pushing my Rails knowledge deeper.",
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
          company: "Was Advisory \\\\ providing dev services to Nobe Sistemas, GoTechDS",
          period: "May 2024 — Present",
          isCurrent: true,
          bullets: [
            "Founded **Was Advisory**, providing **Ruby on Rails** and full-stack development services to other software companies (**Nobe Sistemas**, **GoTechDS**, among others).",
            "Embedded directly into client product teams, owning feature delivery, **PostgreSQL** schema design with strategic indexing, **Sidekiq** background processing and **AWS** deploys.",
            "Designing **AI agent orchestration** architectures (**hub-and-spoke**) to automate internal workflows and product features.",
            "Cut a client's critical path latency from **2s to 200ms** through index optimization, N+1 elimination and **Redis** caching layers.",
            "Maintaining **99.9%+ uptime** across client projects with proactive monitoring and fast incident response.",
          ],
        },
        {
          role: "FULL STACK DEVELOPER",
          company: "GoTechDS",
          period: "Feb 2024 — Mar 2024",
          bullets: [
            "Joined a **Ruby on Rails** product team, contributing to core features and bug fixes under tight delivery cycles.",
            "Wrote tests with **RSpec** and **Capybara**, helping raise overall coverage and catch regressions early.",
            "Collaborated through **code reviews** and pair programming, ramping up quickly on a legacy codebase.",
          ],
        },
        {
          role: "FULL STACK DEVELOPER",
          company: "Independent \\\\ Blogs & Micro-SaaS",
          period: "Jun 2023 — Feb 2024",
          bullets: [
            "End-to-end delivery of **blogs, landing pages and mini-softwares** for direct clients — from discovery to production.",
            "Worked as the **single owner of every project**: requirements, **PostgreSQL** modeling, backend in **Ruby on Rails**, frontend in **React/Next.js**, deploy and ongoing support.",
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
        degree: "BACHELOR'S IN COMPUTER SCIENCE (PAUSED)",
        school: "Wyden — São José do Rio Preto, SP",
        period: "2022 — 2023",
      },
      {
        degree: "SYSTEMS ANALYSIS & DATABASES COURSE",
        school: "Udemy",
        period: "Self-paced",
      },
    ],
  },
  spokenLanguages: {
    title: "LANGUAGES",
    items: [
      { language: "PORTUGUESE", level: "NATIVE" },
      { language: "ENGLISH", level: "INTERMEDIATE B1" },
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
    title: "GET IN TOUCH",
    body:
      "Got a project in mind, a job offer or just want to chat? My inbox is always open.",
    emailLabel: "Email me",
    inboxLabel: "Inbox",
    socialLabel: "Find me online",
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
      },
      readme: {
        filename: "README.md",
        title: "Sobre",
        paragraphs: [
          "Sou desenvolvedor full-stack especializado em Ruby on Rails, construindo sistemas em produção do banco de dados à interface.",
          "Curto resolver problemas complexos com soluções simples, escrever código manutenível e colaborar com times de produto pra entregar features que movem ponteiro.",
          "Fora do código, estou sempre estudando novas tecnologias, contribuindo em open-source e aprofundando meu conhecimento em Rails.",
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
          company: "Was Advisory \\\\ prestando serviços para Nobe Sistemas, GoTechDS",
          period: "Mai 2024 — Presente",
          isCurrent: true,
          bullets: [
            "Fundei a **Was Advisory**, prestando serviços de desenvolvimento **Ruby on Rails** e full-stack para outras empresas de software (**Nobe Sistemas**, **GoTechDS**, entre outras).",
            "Atuando embarcado nos times de produto dos clientes, com **entrega de features ponta a ponta**, modelagem **PostgreSQL** com indexação estratégica, processamento assíncrono com **Sidekiq** e deploys na **AWS**.",
            "Desenhando arquiteturas de **orquestração de agentes de IA** (**hub-and-spoke**) para automatizar fluxos internos e features de produto.",
            "Reduzi a latência de caminhos críticos de **2s para 200ms** com otimização de índices, eliminação de N+1 e camadas de cache com **Redis**.",
            "Mantendo **99.9%+ de uptime** entre os projetos com monitoramento proativo e resposta rápida a incidentes.",
          ],
        },
        {
          role: "DESENVOLVEDOR FULL STACK",
          company: "GoTechDS",
          period: "Fev 2024 — Mar 2024",
          bullets: [
            "Atuei no time de produto **Ruby on Rails**, contribuindo com features e correções de bugs em ciclos curtos de entrega.",
            "Escrevi testes com **RSpec** e **Capybara**, aumentando cobertura e capturando regressões antes da produção.",
            "Colaborei via **code reviews** e pair programming, fazendo ramp-up rápido em codebase legado.",
          ],
        },
        {
          role: "DESENVOLVEDOR FULL STACK",
          company: "Autônomo \\\\ Blogs & Micro-SaaS",
          period: "Jun 2023 — Fev 2024",
          bullets: [
            "Entrega ponta a ponta de **blogs, landing pages e mini-softwares** para clientes diretos — do levantamento à produção.",
            "Atuei como **único responsável por cada projeto**: requisitos, modelagem **PostgreSQL**, backend em **Ruby on Rails**, frontend em **React/Next.js**, deploy e suporte.",
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
        degree: "BACHARELADO EM CIÊNCIA DA COMPUTAÇÃO (TRANCADO)",
        school: "Wyden — São José do Rio Preto, SP",
        period: "2022 — 2023",
      },
      {
        degree: "CURSO DE ANÁLISE DE SISTEMAS & BANCO DE DADOS",
        school: "Udemy",
        period: "Self-paced",
      },
    ],
  },
  spokenLanguages: {
    title: "IDIOMAS",
    items: [
      { language: "PORTUGUÊS", level: "NATIVO" },
      { language: "INGLÊS", level: "INTERMEDIÁRIO B1" },
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
    title: "VAMOS CONVERSAR",
    body:
      "Tem um projeto em mente, uma vaga ou só quer trocar uma ideia? Minha caixa de entrada está sempre aberta.",
    emailLabel: "Me envie um email",
    inboxLabel: "Inbox",
    socialLabel: "Me encontre online",
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
  },
}

export const dictionaries: Record<Lang, Dict> = { en, pt }

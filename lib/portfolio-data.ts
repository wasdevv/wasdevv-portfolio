// Language-independent data: identifiers, URLs, emails, dates and numbers.
// Translatable content lives in lib/i18n.ts.

export const profile = {
  name: "Washington Cardoso",
  handle: "wasdevv",
  focus: "Ruby on Rails",
  available: true,
  email: "cardosowashington2003@gmail.com",
  social: {
    github: "https://github.com/wasdevv",
    linkedin: "https://www.linkedin.com/in/washington-cardoso-6a3558261/",
  },
}

export const stats = [
  { value: "3+", key: "experience" as const },
  { value: "20+", key: "projects" as const },
  { value: "15+", key: "technologies" as const },
]

export type SkillLevel = "ADVANCED" | "INTERMEDIATE" | "FAMILIAR"

export type SkillCategory =
  | "languages"
  | "frameworks"
  | "databases"
  | "devops"
  | "testing"
  | "architecture"

export type Skill = {
  name: string
  // simple-icons slug (https://simpleicons.org). For tech without official logo, omit.
  icon?: string
  iconColor?: string
  level: SkillLevel
  category: SkillCategory
}

export const skills: Skill[] = [
  // Languages
  { name: "Ruby", icon: "ruby", iconColor: "CC342D", level: "ADVANCED", category: "languages" },
  { name: "JavaScript", icon: "javascript", iconColor: "F7DF1E", level: "ADVANCED", category: "languages" },
  { name: "TypeScript", icon: "typescript", iconColor: "3178C6", level: "ADVANCED", category: "languages" },
  { name: "Kotlin", icon: "kotlin", iconColor: "7F52FF", level: "INTERMEDIATE", category: "languages" },
  { name: "Python", icon: "python", iconColor: "3776AB", level: "INTERMEDIATE", category: "languages" },
  { name: "SQL", icon: "postgresql", iconColor: "4169E1", level: "ADVANCED", category: "languages" },
  { name: "Shell Script", icon: "gnubash", iconColor: "4EAA25", level: "INTERMEDIATE", category: "languages" },
  { name: "C#", level: "INTERMEDIATE", category: "languages" },
  { name: "Elixir", icon: "elixir", iconColor: "A57BD6", level: "INTERMEDIATE", category: "languages" },
  { name: "Rust", icon: "rust", iconColor: "DEA584", level: "FAMILIAR", category: "languages" },
  // Frameworks
  { name: "Ruby on Rails", icon: "rubyonrails", iconColor: "D30001", level: "ADVANCED", category: "frameworks" },
  { name: "Spring Boot", icon: "springboot", iconColor: "6DB33F", level: "INTERMEDIATE", category: "frameworks" },
  { name: "React", icon: "react", iconColor: "61DAFB", level: "ADVANCED", category: "frameworks" },
  { name: "Django", icon: "django", iconColor: "092E20", level: "FAMILIAR", category: "frameworks" },
  { name: "Sinatra", icon: "ruby", iconColor: "CC342D", level: "INTERMEDIATE", category: "frameworks" },
  { name: "Stimulus", icon: "stimulus", iconColor: "77E8B9", level: "INTERMEDIATE", category: "frameworks" },
  { name: "Hotwire", icon: "hotwire", iconColor: "FFE801", level: "ADVANCED", category: "frameworks" },
  { name: "Tailwind CSS", icon: "tailwindcss", iconColor: "06B6D4", level: "ADVANCED", category: "frameworks" },
  { name: "Next.js", icon: "nextdotjs", iconColor: "FFFFFF", level: "INTERMEDIATE", category: "frameworks" },
  { name: "Node.js", icon: "nodedotjs", iconColor: "5FA04E", level: "INTERMEDIATE", category: "frameworks" },
  { name: ".NET", icon: "dotnet", iconColor: "8B6FE8", level: "INTERMEDIATE", category: "frameworks" },
  { name: "Phoenix", icon: "phoenixframework", iconColor: "FD4F00", level: "INTERMEDIATE", category: "frameworks" },
  { name: "Ember.js", icon: "emberdotjs", iconColor: "E04E39", level: "INTERMEDIATE", category: "frameworks" },
  { name: "Tauri", icon: "tauri", iconColor: "FFC131", level: "INTERMEDIATE", category: "frameworks" },
  { name: "React Native", icon: "react", iconColor: "61DAFB", level: "FAMILIAR", category: "frameworks" },
  { name: "Electron", icon: "electron", iconColor: "9FEAF9", level: "FAMILIAR", category: "frameworks" },
  // Databases
  { name: "PostgreSQL", icon: "postgresql", iconColor: "4169E1", level: "ADVANCED", category: "databases" },
  { name: "MySQL", icon: "mysql", iconColor: "4479A1", level: "INTERMEDIATE", category: "databases" },
  { name: "Redis", icon: "redis", iconColor: "DC382D", level: "ADVANCED", category: "databases" },
  { name: "Elasticsearch", icon: "elasticsearch", iconColor: "005571", level: "FAMILIAR", category: "databases" },
  { name: "SQLite", icon: "sqlite", iconColor: "0F80CC", level: "INTERMEDIATE", category: "databases" },
  { name: "SQL Server", level: "FAMILIAR", category: "databases" },
  // DevOps & Cloud
  // no icon: simple-icons removed the AWS logo (cdn.simpleicons.org/amazonaws 404s)
  { name: "AWS", level: "INTERMEDIATE", category: "devops" },
  { name: "Docker", icon: "docker", iconColor: "2496ED", level: "ADVANCED", category: "devops" },
  { name: "Git/GitHub", icon: "github", iconColor: "FFFFFF", level: "ADVANCED", category: "devops" },
  { name: "CI/CD", icon: "githubactions", iconColor: "2088FF", level: "INTERMEDIATE", category: "devops" },
  { name: "Sidekiq", icon: "ruby", iconColor: "B1003E", level: "ADVANCED", category: "devops" },
  { name: "Linux", icon: "linux", iconColor: "FCC624", level: "ADVANCED", category: "devops" },
  { name: "Kubernetes", icon: "kubernetes", iconColor: "326CE5", level: "FAMILIAR", category: "devops" },
  { name: "ArgoCD", icon: "argo", iconColor: "EF7B4D", level: "FAMILIAR", category: "devops" },
  { name: "Grafana", icon: "grafana", iconColor: "F46800", level: "INTERMEDIATE", category: "devops" },
  { name: "Datadog", icon: "datadog", iconColor: "632CA6", level: "INTERMEDIATE", category: "devops" },
  { name: "Solid Queue", icon: "rubyonrails", iconColor: "D30001", level: "INTERMEDIATE", category: "devops" },
  { name: "RabbitMQ", icon: "rabbitmq", iconColor: "FF6600", level: "FAMILIAR", category: "devops" },
  { name: "OpenTelemetry", icon: "opentelemetry", iconColor: "F5A800", level: "FAMILIAR", category: "devops" },
  // Testing & Quality
  { name: "RSpec", icon: "ruby", iconColor: "CC342D", level: "ADVANCED", category: "testing" },
  { name: "Capybara", icon: "ruby", iconColor: "CC342D", level: "ADVANCED", category: "testing" },
  { name: "TDD", level: "ADVANCED", category: "testing" },
  { name: "Selenium", icon: "selenium", iconColor: "43B02A", level: "INTERMEDIATE", category: "testing" },
  { name: "RuboCop", icon: "rubocop", iconColor: "E34F26", level: "ADVANCED", category: "testing" },
  { name: "Brakeman", level: "INTERMEDIATE", category: "testing" },
  { name: "Testcontainers", level: "INTERMEDIATE", category: "testing" },
  // Architecture
  { name: "Clean Architecture", level: "ADVANCED", category: "architecture" },
  { name: "RESTful APIs", level: "ADVANCED", category: "architecture" },
  { name: "GraphQL", icon: "graphql", iconColor: "E10098", level: "INTERMEDIATE", category: "architecture" },
  { name: "Event-Driven", level: "INTERMEDIATE", category: "architecture" },
  { name: "MCP", icon: "modelcontextprotocol", iconColor: "FFFFFF", level: "INTERMEDIATE", category: "architecture" },
  { name: "RAG", level: "FAMILIAR", category: "architecture" },
  { name: "WebSockets", level: "ADVANCED", category: "architecture" },
  { name: "Multi-tenant SaaS", level: "ADVANCED", category: "architecture" },
  { name: "Claude API", icon: "claude", iconColor: "D97757", level: "INTERMEDIATE", category: "architecture" },
]

// Backwards-compatible groups for stack.json + about-me skills table
export const skillGroups: { key: SkillCategory; items: string[] }[] = (
  ["languages", "frameworks", "databases", "devops", "testing", "architecture"] as const
).map((key) => ({
  key,
  items: skills.filter((s) => s.category === key).map((s) => s.name),
}))

export type ProjectCategory = "web" | "backend" | "tools"

export type Project = {
  key: ProjectKey
  name: string
  category: ProjectCategory
  year: string
  tags: string[]
  // simple-icons slugs drawn on the generated cover when there is no screenshot
  icons: string[]
  image?: string
  repo?: string
  site?: string
}

export type ProjectKey =
  | "swarm"
  | "obrahub"
  | "tally"
  | "pulse"
  | "pipelineHq"
  | "jornada"
  | "leanOutput"
  | "amnesia"
  | "glossa"
  | "expresso3300"
  | "atsOnRails"
  | "telehealth"
  | "shelflog"
  | "interviewSim"
  | "interviewCopilot"
  | "railsGuard"
  | "railsContext"
  | "swarmPlugin"
  | "systemDesignPrimer"
  | "brasilApiRuby"

// Only repos that answer 200 to an anonymous visitor get a `repo` link.
export const projects: Project[] = [
  { key: "swarm", name: "Swarm", category: "tools", year: "2026", tags: ["Rails 8", "Hotwire", "ActionCable", "Tauri 2", "SQLite"], icons: ["rubyonrails", "tauri"], image: "/projects/swarm.webp" },
  { key: "obrahub", name: "ObraHub", category: "web", year: "2026", tags: ["Rails 8.1", "PostgreSQL", "Hotwire", "Devise", "Pundit"], icons: ["rubyonrails", "postgresql"], image: "/projects/obrahub.webp", site: "https://obrahub.up.railway.app" },
  { key: "tally", name: "Tally", category: "backend", year: "2026", tags: ["Kotlin", "Spring Boot", "jOOQ", "Rails", "PostgreSQL"], icons: ["kotlin", "springboot", "rubyonrails"], repo: "https://github.com/wasdevv/tally" },
  { key: "pulse", name: "Pulse", category: "backend", year: "2026", tags: ["Node.js", "Fastify", "BullMQ", "PostgreSQL", "Expo"], icons: ["nodedotjs", "typescript", "react"], repo: "https://github.com/wasdevv/pulse" },
  { key: "pipelineHq", name: "PipelineHQ", category: "web", year: "2026", tags: ["Rails 8.1", "Hotwire", "Tailwind v4", "PostgreSQL"], icons: ["rubyonrails", "hotwire", "postgresql"], repo: "https://github.com/wasdevv/pipeline_hq" },
  { key: "jornada", name: "Jornada", category: "backend", year: "2026", tags: [".NET 9", "EF Core", "MassTransit", "RabbitMQ", "SQL Server"], icons: ["dotnet", "rabbitmq", "opentelemetry"] },
  { key: "leanOutput", name: "lean-output", category: "tools", year: "2026", tags: ["Ruby", "Claude Code", "Hooks", "RSpec"], icons: ["claude", "ruby"], repo: "https://github.com/wasdevv/lean-output" },
  { key: "amnesia", name: "Amnesia", category: "web", year: "2026", tags: ["Elixir", "Phoenix", "LiveKit", "Electron", "React"], icons: ["elixir", "phoenixframework", "electron"] },
  { key: "glossa", name: "Glossa", category: "web", year: "2026", tags: ["Rails 8", "Ember.js", "JSON:API", "PostgreSQL"], icons: ["rubyonrails", "emberdotjs"] },
  { key: "expresso3300", name: "Expresso3300", category: "web", year: "2026", tags: ["Rails 8.1", "React 19", "TypeScript", "Tailwind v4"], icons: ["rubyonrails", "react", "typescript"], repo: "https://github.com/wasdevv/expresso3300" },
  { key: "atsOnRails", name: "ATS on Rails", category: "tools", year: "2026", tags: ["Rails 8", "SQLite", "Hotwire", "Claude CLI"], icons: ["rubyonrails", "claude"] },
  { key: "telehealth", name: "Telehealth Platform", category: "backend", year: "2026", tags: ["Rails", "GraphQL", "Django", "Celery", "Stripe"], icons: ["rubyonrails", "graphql", "django"], repo: "https://github.com/wasdevv/telehealth-clinical-api" },
  { key: "shelflog", name: "shelflog", category: "web", year: "2026", tags: ["Rails", "PostgreSQL", "Hotwire", "Web Push"], icons: ["rubyonrails", "postgresql"] },
  { key: "interviewSim", name: "Interview Sim", category: "tools", year: "2026", tags: ["Rails 8", "Hotwire", "Claude API", "Solid Cable"], icons: ["rubyonrails", "claude"], repo: "https://github.com/wasdevv/interview-sim" },
  { key: "interviewCopilot", name: "Interview Copilot", category: "tools", year: "2026", tags: ["Node.js", "Tauri", "Ollama", "LLM"], icons: ["nodedotjs", "tauri", "ollama"] },
  { key: "railsGuard", name: "rails-guard", category: "tools", year: "2026", tags: ["Ruby", "Claude Code", "PreToolUse hook"], icons: ["claude", "rubyonrails"], repo: "https://github.com/wasdevv/rails-guard" },
  { key: "railsContext", name: "rails-context", category: "tools", year: "2026", tags: ["Ruby", "Claude Code", "Rails"], icons: ["claude", "rubyonrails"], repo: "https://github.com/wasdevv/rails-context" },
  { key: "swarmPlugin", name: "swarm-plugin", category: "tools", year: "2026", tags: ["Ruby", "Git worktrees", "Claude Code", "GitHub CLI"], icons: ["claude", "git"], repo: "https://github.com/wasdevv/swarm-plugin" },
  { key: "systemDesignPrimer", name: "Rails System Design Primer", category: "backend", year: "2026", tags: ["Rails 8", "PostgreSQL", "Redis", "Benchmarks"], icons: ["rubyonrails", "redis", "postgresql"] },
  { key: "brasilApiRuby", name: "BrasilAPI Ruby", category: "backend", year: "2022", tags: ["Ruby", "API", "Open Source"], icons: ["ruby"], repo: "https://github.com/wasdevv/BrasilAPI-ruby" },
]

export const experiencesMeta = [
  { key: "current" as const, period: "2024 — Present" },
  { key: "previous" as const, period: "2023 — 2024" },
  { key: "first" as const, period: "2022 — 2023" },
]

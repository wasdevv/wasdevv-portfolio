// Language-independent data: identifiers, URLs, emails, dates and numbers.
// Translatable content lives in lib/i18n.ts.

export const profile = {
  name: "Washington Cardoso",
  handle: "wasdevv",
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
  { name: "SQL", icon: "postgresql", iconColor: "4169E1", level: "ADVANCED", category: "languages" },
  { name: "Shell Script", icon: "gnubash", iconColor: "4EAA25", level: "INTERMEDIATE", category: "languages" },
  // Frameworks
  { name: "Ruby on Rails", icon: "rubyonrails", iconColor: "D30001", level: "ADVANCED", category: "frameworks" },
  { name: "React", icon: "react", iconColor: "61DAFB", level: "ADVANCED", category: "frameworks" },
  { name: "Next.js", icon: "nextdotjs", iconColor: "FFFFFF", level: "INTERMEDIATE", category: "frameworks" },
  { name: "Django", icon: "django", iconColor: "092E20", level: "FAMILIAR", category: "frameworks" },
  { name: "Sinatra", icon: "ruby", iconColor: "CC342D", level: "INTERMEDIATE", category: "frameworks" },
  { name: "Stimulus", icon: "stimulus", iconColor: "77E8B9", level: "INTERMEDIATE", category: "frameworks" },
  // Databases
  { name: "PostgreSQL", icon: "postgresql", iconColor: "4169E1", level: "ADVANCED", category: "databases" },
  { name: "Redis", icon: "redis", iconColor: "DC382D", level: "ADVANCED", category: "databases" },
  { name: "Elasticsearch", icon: "elasticsearch", iconColor: "005571", level: "FAMILIAR", category: "databases" },
  // DevOps & Cloud
  { name: "AWS", icon: "amazonaws", iconColor: "FF9900", level: "INTERMEDIATE", category: "devops" },
  { name: "Docker", icon: "docker", iconColor: "2496ED", level: "ADVANCED", category: "devops" },
  { name: "Git/GitHub", icon: "github", iconColor: "FFFFFF", level: "ADVANCED", category: "devops" },
  { name: "CI/CD", icon: "githubactions", iconColor: "2088FF", level: "INTERMEDIATE", category: "devops" },
  { name: "Sidekiq", icon: "ruby", iconColor: "B1003E", level: "ADVANCED", category: "devops" },
  { name: "Linux", icon: "linux", iconColor: "FCC624", level: "ADVANCED", category: "devops" },
  // Testing & Quality
  { name: "RSpec", icon: "ruby", iconColor: "CC342D", level: "ADVANCED", category: "testing" },
  { name: "Capybara", icon: "ruby", iconColor: "CC342D", level: "ADVANCED", category: "testing" },
  { name: "TDD", level: "ADVANCED", category: "testing" },
  // Architecture
  { name: "Hub-and-Spoke", level: "INTERMEDIATE", category: "architecture" },
  { name: "AI Agent Orchestration", level: "INTERMEDIATE", category: "architecture" },
  { name: "Clean Architecture", level: "ADVANCED", category: "architecture" },
  { name: "RESTful APIs", level: "ADVANCED", category: "architecture" },
  { name: "Event-Driven", level: "INTERMEDIATE", category: "architecture" },
]

// Backwards-compatible groups for stack.json + about-me skills table
export const skillGroups: { key: SkillCategory; items: string[] }[] = (
  ["languages", "frameworks", "databases", "devops", "testing", "architecture"] as const
).map((key) => ({
  key,
  items: skills.filter((s) => s.category === key).map((s) => s.name),
}))

export const projectsMeta = [
  {
    key: "one" as const,
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    year: "2025",
    url: "https://exemplo.com",
    repo: "https://github.com/seu_usuario/projeto-um",
  },
  {
    key: "two" as const,
    stack: ["Ruby on Rails", "React", "Redis", "Docker"],
    year: "2024",
    url: "https://exemplo.com",
    repo: "https://github.com/seu_usuario/projeto-dois",
  },
]

export const experiencesMeta = [
  { key: "current" as const, period: "2024 — Present" },
  { key: "previous" as const, period: "2023 — 2024" },
  { key: "first" as const, period: "2022 — 2023" },
]

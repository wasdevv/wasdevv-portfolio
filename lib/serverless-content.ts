// /ecommerce-serverless labels that are new to the redesigned page; the body
// copy is the translated case-study copy in lib/i18n.ts (t.ecommerce).

export type ServerlessCopy = {
  label: string
  tagline: string
  meta: string[]
  repo: string
  sections: Record<
    "overview" | "architecture" | "guarantees" | "ml" | "infra" | "cicd" | "observability" | "quality" | "status",
    string
  >
  flowsTitle: string
}

const en: ServerlessCopy = {
  label: "// Study project · AWS",
  tagline: "An e-commerce API on AWS Lambda where *every guarantee has a test*.",
  meta: ["Study project", "Node.js 24 · Express 5", "Terraform · 3 environments"],
  repo: "Code on GitHub",
  sections: {
    overview: "01 · Overview",
    architecture: "02 · Architecture",
    guarantees: "03 · Guarantees",
    ml: "04 · Recommendations",
    infra: "05 · Infrastructure",
    cicd: "06 · CI/CD",
    observability: "07 · Observability",
    quality: "08 · Quality",
    status: "09 · Status",
  },
  flowsTitle: "What the API covers",
}

const pt: ServerlessCopy = {
  label: "// Projeto de estudo · AWS",
  tagline: "Uma API de e-commerce em AWS Lambda em que *cada garantia tem um teste*.",
  meta: ["Projeto de estudo", "Node.js 24 · Express 5", "Terraform · 3 ambientes"],
  repo: "Código no GitHub",
  sections: {
    overview: "01 · Visão geral",
    architecture: "02 · Arquitetura",
    guarantees: "03 · Garantias",
    ml: "04 · Recomendações",
    infra: "05 · Infraestrutura",
    cicd: "06 · CI/CD",
    observability: "07 · Observabilidade",
    quality: "08 · Qualidade",
    status: "09 · Status",
  },
  flowsTitle: "O que a API cobre",
}

export const serverlessContent = { en, pt }

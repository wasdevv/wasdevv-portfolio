import type { Metadata } from "next"
import { EcommerceView } from "./view"

export const metadata: Metadata = {
  title: "Serverless e-commerce API",
  description:
    "An e-commerce API on AWS Lambda with infrastructure as code, CI/CD, full observability and a test behind every guarantee.",
}

export default function EcommercePage() {
  return <EcommerceView />
}

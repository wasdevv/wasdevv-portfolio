"use client"

import { useLanguage } from "@/components/language-provider"
import { CaseFrame, CaseText, FrameLabel } from "./case-parts"

const STACK =
  "React · React Native · Node.js 24 · Express 5 · PostgreSQL · Redis / Valkey · AWS Lambda · API Gateway · RDS · S3 · SQS · EventBridge · Claude API · SageMaker · Python · scikit-learn · Terraform · Docker · GitHub Actions · OpenTelemetry"

const fn = "text-hp-violet"
const dim = "text-hp-lilac-dim"

/** The "Software I've shipped" serverless card: the story on the left, architecture and proven guarantees on the right. */
export function ServerlessCard() {
  const { t } = useLanguage()
  const copy = t.home.work.projects.serverless

  return (
    <article className="grid items-start gap-x-12 gap-y-8 border-t border-hp-line py-12 font-geist lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
      <div className="order-2 min-w-0 lg:order-1">
        <CaseText copy={copy} stack={STACK} href="/ecommerce-serverless" />
      </div>

      <CaseFrame label="ecommerce-serverless · architecture" className="order-1 lg:sticky lg:top-[120px] lg:order-2">
        <div className="overflow-x-auto">
          <pre aria-label={copy.diagramLabel} className="m-0 w-max px-6 py-7 font-plex-mono text-[13px] leading-[1.9] text-hp-lilac-soft">
            {"client ─HTTPS→ API Gateway ─→ "}
            <span className={fn}>λ api</span>
            {" (Express 5)\n                               ├─→ RDS Proxy ─→ PostgreSQL\n                               ├─→ ElastiCache (Valkey)\n                               ├┄→ S3, private\n                               └┄→ SageMaker serverless "}
            <span className={dim}>800 ms → fallback</span>
            {"\n\nEventBridge ─→ "}
            <span className={fn}>λ dispatcher</span>
            {" ─→ SQS ─→ "}
            <span className={fn}>λ worker</span>
            {"\n                                └┄→ DLQ\n\n"}
            <span className={fn}>λ ops</span>
            {"   "}
            <span className={dim}>{copy.opsNote}</span>
          </pre>
        </div>

        <div className="border-t border-hp-line px-5 pb-5 pt-4">
          <FrameLabel>{copy.provenTitle}</FrameLabel>
          <ul className="m-0 flex list-none flex-col p-0 font-plex-mono text-[13px]">
            {copy.proven.map((test) => (
              <li
                key={test.scenario}
                className="grid gap-x-4 gap-y-0.5 border-t border-hp-line py-2.5 sm:grid-cols-[minmax(0,1fr)_auto]"
              >
                <span className="text-hp-lilac-soft">
                  <span className="text-hp-violet">✓ </span>
                  {test.scenario}
                </span>
                <span className="pl-4 text-hp-lilac sm:pl-0 sm:text-right">→ {test.result}</span>
              </li>
            ))}
          </ul>
        </div>
      </CaseFrame>
    </article>
  )
}

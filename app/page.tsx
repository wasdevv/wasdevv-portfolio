import type { Metadata } from "next"
import { HomeBugCase } from "@/components/home/bug-case"
import { HomeExperience } from "@/components/home/experience"
import { HomeHero } from "@/components/home/hero"
import { HomeHowIWork } from "@/components/home/how-i-work"
import { HomeProof } from "@/components/home/proof"
import { SiteChrome } from "@/components/home/site-chrome"
import { HomeTestimonials } from "@/components/home/testimonials"
import { HomeWork } from "@/components/home/work"

export const metadata: Metadata = {
  title: "Washington Cardoso — Backend Engineer",
  description:
    "Rails and PostgreSQL developer who makes slow apps fast and keeps them correct, on software used by 50+ Brazilian municipalities.",
}

// The homepage has its own fixed dark design (no sidebar or theme toggle);
// the about/skills/resume/contact pages keep the shared shell.
export default function HomePage() {
  return (
    <SiteChrome>
      <main className="font-plex text-[17px] leading-[1.6]">
        <HomeHero />
        <HomeProof />
        <HomeWork />
        <HomeBugCase />
        <HomeTestimonials />
        <HomeExperience />
        <HomeHowIWork />
      </main>
    </SiteChrome>
  )
}

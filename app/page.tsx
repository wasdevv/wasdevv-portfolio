import type { Metadata } from "next"
import { HomeContact } from "@/components/home/contact"
import { HomeExperience } from "@/components/home/experience"
import { HomeHero } from "@/components/home/hero"
import { HomeIntro } from "@/components/home/intro"
import { HomeProof } from "@/components/home/proof"
import { SectionIndex } from "@/components/home/section-index"
import { SiteChrome } from "@/components/home/site-chrome"
import { HomeTestimonials } from "@/components/home/testimonials"
import { HomeWork } from "@/components/home/work"

export const metadata: Metadata = {
  title: "Washington Cardoso — Backend Engineer",
  description:
    "Rails and PostgreSQL developer who makes slow apps fast and keeps them correct, on software used by 50+ Brazilian municipalities.",
}

// The homepage has its own fixed dark design (no sidebar or theme toggle);
// /resume keeps the shared shell (about-me, skills and contact are parked as
// app/(shell)/_about-me, _skills and _contact, off the site for now). The bug case and
// how-I-work left the homepage in Nov 2026; the skills live in the About, and
// the contact section closes the page (there is no /contact page any more).
export default function HomePage() {
  return (
    <SiteChrome contact={false} themable>
      <main id="main" className="font-plex text-[17px] leading-[1.6]">
        <HomeHero />
        <HomeIntro />
        <HomeExperience />
        <HomeProof />
        <HomeWork />
        <HomeTestimonials />
        <HomeContact />
      </main>
      <SectionIndex />
    </SiteChrome>
  )
}

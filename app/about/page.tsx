import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { StorySection } from "@/components/about/story-section"
import { PhilosophySection } from "@/components/about/philosophy-section"
import { ExpertiseSection } from "@/components/about/expertise-section"

export const metadata = {
  title: "About | Nordic & Arctic Travel Designer",
  description: "Learn about my journey from expedition crew to luxury travel designer, specializing in bespoke Nordic and Arctic itineraries.",
}

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        <AboutHero />
        <StorySection />
        <PhilosophySection />
        <ExpertiseSection />
      </main>
      <Footer />
    </>
  )
}

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { IntroSection } from "@/components/home/intro-section"
import { FeaturedItineraries } from "@/components/home/featured-itineraries"
import { ExperienceSection } from "@/components/home/experience-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <IntroSection />
        <FeaturedItineraries />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}

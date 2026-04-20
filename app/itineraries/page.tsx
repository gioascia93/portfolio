import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ItinerariesHero } from "@/components/itineraries/itineraries-hero"
import { ItineraryGrid } from "@/components/itineraries/itinerary-grid"
import { ProcessSection } from "@/components/itineraries/process-section"

export const metadata = {
  title: "Signature Itineraries | Nordic & Arctic Travel Designer",
  description: "Explore bespoke luxury itineraries across Norway, Finland, Iceland, Sweden, and the Arctic. Each journey is crafted with expedition expertise and meticulous attention to detail.",
}

export default function ItinerariesPage() {
  return (
    <>
      <Navigation />
      <main>
        <ItinerariesHero />
        <ItineraryGrid />
        <ProcessSection />
      </main>
      <Footer />
    </>
  )
}

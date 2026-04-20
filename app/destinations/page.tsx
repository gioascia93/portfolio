import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { DestinationsHero } from "@/components/destinations/destinations-hero"
import { DestinationsGrid } from "@/components/destinations/destinations-grid"

export const metadata = {
  title: "Destinations | Nordic & Arctic Travel Designer",
  description: "Explore the Nordic and Arctic regions: Norway, Finland, Sweden, Iceland, Denmark, Svalbard, Faroe Islands, and Greenland. Deep expertise in every destination.",
}

export default function DestinationsPage() {
  return (
    <>
      <Navigation />
      <main>
        <DestinationsHero />
        <DestinationsGrid />
      </main>
      <Footer />
    </>
  )
}

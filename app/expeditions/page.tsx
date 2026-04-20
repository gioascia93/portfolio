import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ExpeditionsHero } from "@/components/expeditions/expeditions-hero"
import { ExpeditionsContent } from "@/components/expeditions/expeditions-content"
import { ExpeditionsCTA } from "@/components/expeditions/expeditions-cta"

export const metadata = {
  title: "Expedition Experience | Nordic & Arctic Travel Designer",
  description: "Antarctic expeditions, South Georgia wildlife encounters, and polar region expertise. Expedition travel informs a deeper understanding of remote luxury logistics.",
}

export default function ExpeditionsPage() {
  return (
    <>
      <Navigation />
      <main>
        <ExpeditionsHero />
        <ExpeditionsContent />
        <ExpeditionsCTA />
      </main>
      <Footer />
    </>
  )
}

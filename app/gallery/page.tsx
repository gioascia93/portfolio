import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { GalleryHero } from "@/components/gallery/gallery-hero"
import { GalleryGrid } from "@/components/gallery/gallery-grid"

export const metadata = {
  title: "Visual Stories | Nordic & Arctic Travel Designer",
  description: "Wildlife and landscape photography from Nordic and Arctic expeditions. A curated collection of visual stories from the far North.",
}

export default function GalleryPage() {
  return (
    <>
      <Navigation />
      <main>
        <GalleryHero />
        <GalleryGrid />
      </main>
      <Footer />
    </>
  )
}

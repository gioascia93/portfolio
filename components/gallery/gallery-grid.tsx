"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const galleryImages = [
  {
    src: "/images/hero-fjord.jpg",
    alt: "Norwegian fjord at golden hour",
    caption: "Geirangerfjord",
    category: "Landscapes",
    size: "large",
  },
  {
    src: "/images/svalbard-polar.jpg",
    alt: "Polar bear on Arctic ice",
    caption: "Svalbard, 79°N",
    category: "Wildlife",
    size: "medium",
  },
  {
    src: "/images/northern-lights.jpg",
    alt: "Aurora borealis over Lapland",
    caption: "Finnish Lapland",
    category: "Aurora",
    size: "medium",
  },
  {
    src: "/images/puffins.jpg",
    alt: "Atlantic puffins",
    caption: "Faroe Islands",
    category: "Wildlife",
    size: "medium",
  },
  {
    src: "/images/iceland-glacier.jpg",
    alt: "Glacier lagoon with icebergs",
    caption: "Jökulsárlón, Iceland",
    category: "Landscapes",
    size: "large",
  },
  {
    src: "/images/arctic-fox.jpg",
    alt: "Arctic fox in winter coat",
    caption: "Svalbard",
    category: "Wildlife",
    size: "medium",
  },
  {
    src: "/images/lapland-lodge.jpg",
    alt: "Arctic lodge at twilight",
    caption: "Swedish Lapland",
    category: "Atmosphere",
    size: "medium",
  },
  {
    src: "/images/whale-tail.jpg",
    alt: "Humpback whale fluke",
    caption: "Norwegian Arctic",
    category: "Wildlife",
    size: "medium",
  },
  {
    src: "/images/antarctica.jpg",
    alt: "Antarctic expedition",
    caption: "Antarctic Peninsula",
    category: "Expeditions",
    size: "large",
  },
  {
    src: "/images/norway-train.jpg",
    alt: "Scenic railway journey",
    caption: "Flåm Railway, Norway",
    category: "Journeys",
    size: "medium",
  },
  {
    src: "/images/finland-winter.jpg",
    alt: "Winter forest landscape",
    caption: "Finnish Lapland",
    category: "Landscapes",
    size: "medium",
  },
  {
    src: "/images/sweden-forest.jpg",
    alt: "Autumn forest",
    caption: "Swedish Wilderness",
    category: "Landscapes",
    size: "medium",
  },
]

export function GalleryGrid() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.05 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <section ref={sectionRef} className="pb-24 lg:pb-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Masonry-style grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((image, index) => (
              <div
                key={image.src}
                className={cn(
                  "break-inside-avoid cursor-pointer group transition-all duration-700",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${index * 50}ms` }}
                onClick={() => setSelectedImage(image)}
              >
                <div className={cn(
                  "relative overflow-hidden",
                  image.size === "large" ? "aspect-[3/4]" : "aspect-[4/3]"
                )}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                  
                  {/* Caption on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-sm">{image.caption}</p>
                    <p className="text-white/60 text-xs uppercase tracking-widest">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors text-sm tracking-widest uppercase"
            onClick={() => setSelectedImage(null)}
          >
            Close
          </button>
          <div className="relative max-w-5xl max-h-[85vh] w-full h-full">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
            <p className="text-white">{selectedImage.caption}</p>
            <p className="text-white/50 text-sm uppercase tracking-widest">{selectedImage.category}</p>
          </div>
        </div>
      )}
    </>
  )
}

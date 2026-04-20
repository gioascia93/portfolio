"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const itineraries = [
  {
    id: 1,
    slug: "lofoten-arctic-summer",
    title: "Lofoten Islands",
    subtitle: "Arctic Summer Journey",
    image: "/images/lofoten-rorbu.jpg",
  },
  {
    id: 2,
    slug: "norwegian-fjords-hidden-valleys",
    title: "Norwegian Fjords",
    subtitle: "Hidden Valleys Experience",
    image: "/images/fjord-waterfall.jpg",
  },
  {
    id: 3,
    slug: "iceland-summer-fire-ice",
    title: "Iceland",
    subtitle: "Summer Along the Edge of Fire and Ice",
    image: "/images/iceland-glacier.jpg",
  },
  {
    id: 4,
    slug: "swedish-lapland-arctic-winter",
    title: "Swedish Lapland",
    subtitle: "Arctic Winter Experience",
    image: "/images/treehotel.jpg",
  },
  {
    id: 5,
    slug: "svalbard-polar-summer-expedition",
    title: "Svalbard",
    subtitle: "Polar Arctic Summer Expedition",
    image: "/images/svalbard-polar.jpg",
  },
  {
    id: 6,
    slug: "finnish-lapland-northern-lights",
    title: "Finnish Lapland",
    subtitle: "Northern Lights Escape",
    image: "/images/northern-lights.jpg",
  },
]

export function FeaturedItineraries() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="featured-itineraries" ref={sectionRef} className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div
          className={cn(
            "flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Signature Collection
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">
              Featured Itineraries
            </h2>
            <p className="mt-8 text-muted-foreground leading-relaxed">
              A curated selection of journey concepts demonstrating approach to pacing, storytelling, and high-end travel design.
            </p>
          </div>
        </div>

        {/* Itineraries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {itineraries
            .sort((a, b) => a.id - b.id)
            .map((itinerary, index) => (
              <Link
                key={itinerary.slug}
                href={`/itineraries/${itinerary.slug}`}
                className={cn(
                  "group relative overflow-hidden transition-all duration-700",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="aspect-[4/5] relative">
                  <Image
                    src={itinerary.image}
                    alt={itinerary.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <h3 className="font-serif text-xl text-white mb-1">
                      {itinerary.title}
                    </h3>
                    <p className="text-white/70 text-sm mb-4">{itinerary.subtitle}</p>
                    <button className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 w-fit bg-transparent border-white/50 text-white hover:bg-white hover:text-foreground text-xs tracking-wide cursor-pointer">Explore</button>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </section>
  )
}

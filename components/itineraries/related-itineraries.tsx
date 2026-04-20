"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const allItineraries = [
  {
    slug: "finnish-lapland-aurora",
    title: "Finnish Lapland Aurora",
    subtitle: "Private Northern Lights Journey",
    image: "/images/northern-lights.jpg",
    duration: "7 Days",
  },
  {
    slug: "norway-fjords",
    title: "Norway Fjords Journey",
    subtitle: "Oslo to Bergen via Scenic Rail",
    image: "/images/hero-fjord.jpg",
    duration: "10 Days",
  },
  {
    slug: "iceland-faroe",
    title: "Nordic Island Circuit",
    subtitle: "Iceland & Faroe Islands",
    image: "/images/iceland-glacier.jpg",
    duration: "12 Days",
  },
  {
    slug: "svalbard-expedition",
    title: "Svalbard Expedition",
    subtitle: "Wildlife & Polar Adventure",
    image: "/images/svalbard-polar.jpg",
    duration: "8 Days",
  },
]

interface RelatedItinerariesProps {
  currentSlug: string
}

export function RelatedItineraries({ currentSlug }: RelatedItinerariesProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const relatedItineraries = allItineraries
    .filter((it) => it.slug !== currentSlug)
    .slice(0, 3)

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
    <section ref={sectionRef} className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div
          className={cn(
            "flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Continue Exploring
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              More Journeys
            </h2>
          </div>
          <Link
            href="/itineraries"
            className="group flex items-center gap-2 text-sm tracking-widest uppercase text-foreground hover:text-muted-foreground transition-colors"
          >
            View All
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedItineraries.map((itinerary, index) => (
            <Link
              key={itinerary.slug}
              href={`/itineraries/${itinerary.slug}`}
              className={cn(
                "group transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="aspect-[4/3] relative overflow-hidden mb-4">
                <Image
                  src={itinerary.image}
                  alt={itinerary.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">
                {itinerary.duration}
              </p>
              <h3 className="font-serif text-xl text-foreground group-hover:opacity-70 transition-opacity">
                {itinerary.title}
              </h3>
              <p className="text-muted-foreground">{itinerary.subtitle}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

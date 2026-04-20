"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const itineraries = [
  {
    slug: "finnish-lapland-aurora",
    title: "Finnish Lapland Aurora",
    subtitle: "Private Northern Lights Journey",
    description: "An immersive winter odyssey through Finnish Lapland, chasing the aurora borealis while staying in the region's most exclusive glass igloos and wilderness lodges.",
    image: "/images/northern-lights.jpg",
    duration: "7 Days",
    season: "December - March",
    highlights: ["Glass Igloo Accommodation", "Private Aurora Hunting", "Husky Safari", "Ice Floating Experience"],
  },
  {
    slug: "norway-fjords",
    title: "Luxury Fjords Journey",
    subtitle: "Oslo to Bergen via Scenic Rail",
    description: "A masterfully paced journey through Norway's most dramatic landscapes, combining the iconic Flåm Railway with private fjord cruises and boutique mountain lodges.",
    image: "/images/hero-fjord.jpg",
    duration: "10 Days",
    season: "May - September",
    highlights: ["Flåm Railway Experience", "Private Fjord Cruise", "Mountain Lodge Stay", "Bergen Food Tour"],
  },
  {
    slug: "iceland-faroe",
    title: "Nordic Island Circuit",
    subtitle: "Iceland & Faroe Islands",
    description: "An epic exploration of the North Atlantic's most captivating islands, from Iceland's volcanic landscapes to the Faroe Islands' dramatic sea cliffs.",
    image: "/images/iceland-glacier.jpg",
    duration: "12 Days",
    season: "June - August",
    highlights: ["Glacier Hiking", "Faroe Island Puffins", "Blue Lagoon", "Volcanic Landscapes"],
  },
  {
    slug: "svalbard-expedition",
    title: "Svalbard Expedition",
    subtitle: "Wildlife & Polar Adventure",
    description: "A true Arctic expedition to the high north, combining wildlife encounters with polar bear country exploration and historic expedition heritage.",
    image: "/images/svalbard-polar.jpg",
    duration: "8 Days",
    season: "June - August",
    highlights: ["Polar Bear Watching", "Glacier Kayaking", "Arctic Wildlife", "Expedition Cruising"],
  },
  {
    slug: "sweden-wilderness",
    title: "Swedish Wilderness",
    subtitle: "Design Hotels & Arctic Experiences",
    description: "Where Scandinavian design meets untamed wilderness—from the ICEHOTEL in Jukkasjärvi to treehouse lodges and traditional Sámi experiences.",
    image: "/images/lapland-lodge.jpg",
    duration: "9 Days",
    season: "Year-Round",
    highlights: ["ICEHOTEL Stay", "Treehotel Experience", "Sámi Culture", "Arctic Spa"],
  },
  {
    slug: "norway-coastal",
    title: "Norwegian Coastal Voyage",
    subtitle: "Hurtigruten Route Reimagined",
    description: "The classic Norwegian coastal journey elevated with private excursions, boutique hotels, and insider access to remote fishing villages.",
    image: "/images/norway-train.jpg",
    duration: "14 Days",
    season: "May - September",
    highlights: ["Coastal Voyage", "Lofoten Islands", "Midnight Sun", "Tromsø Gateway"],
  },
]

export function ItineraryGrid() {
  const [isVisible, setIsVisible] = useState(false)
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
    <section ref={sectionRef} className="pb-32 lg:pb-48 bg-background">
      <div className="mx-auto max-w-5xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-24 lg:gap-40">
          {itineraries.map((itinerary, index) => (
            <article
              key={itinerary.slug}
              className={cn(
                "group transition-all duration-1000",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image - full width for cinematic feel */}
              <Link
                href={`/itineraries/${itinerary.slug}`}
                className="relative aspect-video lg:aspect-[21/9] overflow-hidden mb-12 lg:mb-16 block"
              >
                <Image
                  src={itinerary.image}
                  alt={itinerary.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-102"
                  quality={90}
                />
              </Link>

              {/* Content - editorial layout */}
              <div className="max-w-2xl">
                <Link href={`/itineraries/${itinerary.slug}`}>
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 group-hover:opacity-70 transition-opacity leading-tight tracking-tight">
                    {itinerary.title}
                  </h2>
                </Link>
                
                <p className="text-base lg:text-lg text-foreground/70 mb-6 font-light">
                  {itinerary.subtitle}
                </p>
                
                <p className="text-sm leading-relaxed text-foreground/65 mb-10 max-w-xl font-light">
                  {itinerary.description}
                </p>

                <Link
                  href={`/itineraries/${itinerary.slug}`}
                  className="group/link inline-flex items-center gap-3 text-xs tracking-wider uppercase text-foreground hover:text-foreground/60 transition-colors"
                >
                  Explore Journey
                  <ArrowRight className="w-3 h-3 group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

const philosophyPoints = [
  {
    title: "Cinematic Pacing",
    description: "Every journey has rhythm—moments of intensity followed by reflection. I design itineraries that breathe, allowing travelers to absorb rather than simply consume.",
  },
  {
    title: "Seasonal Intelligence",
    description: "The North is defined by light. Understanding when the midnight sun illuminates fjords or when darkness reveals the aurora transforms good trips into transcendent ones.",
  },
  {
    title: "Authentic Luxury",
    description: "True luxury in the North isn't about opulence—it's about access. Private moments with extraordinary landscapes, hosted by those who know them intimately.",
  },
  {
    title: "Invisible Logistics",
    description: "The best experiences feel effortless. Behind that ease lies meticulous planning—understanding ferry schedules, weather patterns, and the precise timing of transitions.",
  },
]

export function PhilosophySection() {
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
    <section ref={sectionRef} className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div
          className={cn(
            "max-w-3xl mb-16 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">
            Design Philosophy
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
            How I Approach Travel Design
          </h2>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
            Journeys should feel cinematic, meaningful, and precisely orchestrated. 
            These principles guide every itinerary I create.
          </p>
        </div>

        {/* Philosophy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {philosophyPoints.map((point, index) => (
            <div
              key={point.title}
              className={cn(
                "p-8 lg:p-10 bg-secondary border border-border transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <span className="text-sm tracking-widest text-muted-foreground">
                0{index + 1}
              </span>
              <h3 className="font-serif text-2xl text-foreground mt-4 mb-4">
                {point.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

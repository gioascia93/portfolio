"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export function StorySection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div
          className={cn(
            "transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-8">
            The Journey
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight mb-12">
            From Expedition Decks to Design Desks
          </h2>
        </div>

        <div
          className={cn(
            "space-y-8 text-muted-foreground leading-relaxed transition-all duration-1000 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <p className="text-lg">
            My path into travel design began not behind a desk, but on the bow of 
            an expedition vessel watching glaciers calve into the Arctic sea. Years 
            working with Hurtigruten taught me what it means to navigate the 
            unpredictable—both literally and in the art of crafting experiences.
          </p>
          <p>
            That foundation in expedition operations led me to a boutique Nordic DMC, 
            where I discovered my true calling: translating the raw power of northern 
            landscapes into journeys that feel both intimate and epic. I learned to 
            read the subtle rhythms of Nordic seasons, to understand why timing matters 
            as much as destination.
          </p>
          <p>
            Today, I bring together operational precision and creative vision. I know 
            which lodge keeper will share stories of the old ways, which guide can read 
            the aurora like a weather forecast, which mountain pass reveals the fjord 
            at its most dramatic light. This isn&apos;t knowledge you can research—it&apos;s 
            earned through years of presence in these landscapes.
          </p>
        </div>

        {/* Timeline */}
        <div
          className={cn(
            "mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-400",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          {[
            { 
              year: "2012", 
              title: "Expedition Beginnings", 
              description: "Joined Hurtigruten as expedition crew" 
            },
            { 
              year: "2016", 
              title: "Nordic DMC", 
              description: "Senior travel designer for luxury Nordic operator" 
            },
            { 
              year: "2020", 
              title: "Independent Practice", 
              description: "Launched freelance travel design consultancy" 
            },
          ].map((milestone, index) => (
            <div
              key={milestone.year}
              className={cn(
                "border-l-2 border-border pl-6 transition-all duration-700",
                isVisible ? "opacity-100" : "opacity-0"
              )}
              style={{ transitionDelay: `${500 + index * 100}ms` }}
            >
              <p className="font-serif text-3xl text-foreground mb-2">{milestone.year}</p>
              <p className="font-medium text-foreground mb-1">{milestone.title}</p>
              <p className="text-sm text-muted-foreground">{milestone.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

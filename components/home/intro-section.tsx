"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const experiences = [
  { label: "Hurtigruten", description: "Expedition Expertise" },
  { label: "Nordic DMC", description: "Luxury Operations" },
]

const highlights = [
  { label: '5+ Years', sublabel: 'Experience' },
  { label: 'Nordic & Arctic', sublabel: 'Specialist' },
  { label: 'B2B & B2C', sublabel: 'Markets' },
  { label: 'Cruise & Expedition', sublabel: 'Expertise' },
]

export function IntroSection() {
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
    <section ref={sectionRef} className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <div
            className={cn(
              "transition-all duration-1000",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">
              About the Designer
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight text-balance">
              Where Expedition Meets Artistry
            </h2>
            <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
              <p>
                With roots in expedition travel and deep expertise in Nordic luxury operations,
                I craft journeys that transcend ordinary tourism. Each itinerary is meticulously
                designed to capture the essence of the North—its light, its silence, its raw beauty.
              </p>
              <p>
                From navigating the logistics of remote Arctic outposts to curating intimate
                encounters with Scandinavian culture, my approach combines operational precision
                with storytelling sensibility. The result: journeys that feel both effortless
                and unforgettable.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 my-10">
              {highlights.map((item) => (
                <div key={item.label} className="border-l border-border pl-4">
                  <p className="text-foreground text-sm font-medium">{item.label}</p>
                  <p className="text-muted-foreground text-xs tracking-wide">{item.sublabel}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          {/* Portrait Image - Smaller and more discreet */}
          <div className="w-full">
            <div className="relative aspect-[3/4] w-full max-w-[280px] mx-auto">
              <Image
                src="/images/giorgia.jpg"
                alt="Giorgia Ascia"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 280px mx-auto"
              />
            </div>
          </div>
          {/*<div
            className={cn(
              "relative aspect-[0.9/1] order-2 lg:order-1 transition-all duration-1000",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <Image
              src="/images/portrait.jpg"
              alt="Travel designer portrait"
              fill
              className="relative aspect-[3/4] w-full max-w-[280px] mx-auto md:mx-0"
              priority
            />
          </div>*/}
        </div>
      </div>
    </section>
  )
}
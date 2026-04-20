"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const destinations = [
  { name: "Norway", description: "Fjords & Coastal Beauty" },
  { name: "Finland", description: "Lapland & Aurora" },
  { name: "Iceland", description: "Fire & Ice" },
  { name: "Sweden", description: "Wilderness & Design" },
  { name: "Svalbard", description: "High Arctic" },
  { name: "Greenland", description: "Remote Frontier" },
]

export function ExperienceSection() {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Image */}
          <div
            className={cn(
              "relative aspect-[4/5] transition-all duration-1000",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <Image
              src="/images/iceland-glacier.jpg"
              alt="Icelandic glacier landscape"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <div
              className={cn(
                "transition-all duration-1000 delay-200",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">
                Expertise
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
                Destinations Mastered
              </h2>
              <p className="mt-8 text-muted-foreground leading-relaxed">
                Deep knowledge of Nordic and Arctic regions, with hands-on experience 
                in every destination. From the dramatic fjords of Norway to the volcanic 
                landscapes of Iceland, each journey benefits from years of local 
                relationships and operational expertise.
              </p>
            </div>

            {/* Destinations List */}
            <div
              className={cn(
                "mt-12 grid grid-cols-2 gap-x-8 gap-y-6 transition-all duration-1000 delay-400",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              {destinations.map((dest, index) => (
                <div
                  key={dest.name}
                  className={cn(
                    "border-l-2 border-border pl-4 transition-all duration-700",
                    isVisible ? "opacity-100" : "opacity-0"
                  )}
                  style={{ transitionDelay: `${500 + index * 50}ms` }}
                >
                  <p className="font-serif text-lg text-foreground">{dest.name}</p>
                  <p className="text-sm text-muted-foreground">{dest.description}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div
              className={cn(
                "mt-12 transition-all duration-1000 delay-600",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              <Link
                href="/destinations"
                className="group inline-flex items-center gap-2 text-sm tracking-widest uppercase text-foreground hover:text-muted-foreground transition-colors"
              >
                Explore Destinations
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

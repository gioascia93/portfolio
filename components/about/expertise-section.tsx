"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const skills = [
  "Bespoke Itinerary Design",
  "Nordic & Arctic Specialist",
  "Expedition Travel Operations",
  "Luxury Lodge & Hotel Curation",
  "Private Guide Coordination",
  "Wildlife & Photography Logistics",
  "Seasonal & Light Planning",
  "Remote Region Expertise",
]

export function ExpertiseSection() {
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
    <section ref={sectionRef} className="py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Content */}
          <div
            className={cn(
              "transition-all duration-1000",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <p className="text-sm tracking-[0.3em] uppercase text-primary-foreground/70 mb-6">
              Expertise
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight">
              What I Bring to Your Journey
            </h2>
            <p className="mt-8 text-primary-foreground/70 leading-relaxed">
              Years of hands-on experience in Nordic and Arctic travel have 
              equipped me with a unique skill set—combining creative vision 
              with operational mastery to deliver seamless luxury experiences.
            </p>

            <div className="mt-12">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground text-primary text-sm tracking-widest uppercase hover:opacity-90 transition-opacity"
              >
                Work With Me
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Skills List */}
          <div
            className={cn(
              "transition-all duration-1000 delay-200",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <div className="grid grid-cols-1 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={skill}
                  className={cn(
                    "flex items-center gap-4 py-4 border-b border-primary-foreground/20 transition-all duration-700",
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                  )}
                  style={{ transitionDelay: `${300 + index * 50}ms` }}
                >
                  <span className="text-sm text-primary-foreground/50">
                    0{index + 1}
                  </span>
                  <span className="text-primary-foreground">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const expeditions = [
  {
    name: "Antarctica",
    tagline: "The White Continent",
    image: "/images/antarctica.jpg",
    description: "The seventh continent remains Earth's last true wilderness—a realm of ice, silence, and wildlife encounters that redefine the word 'remote.' Expedition voyages here taught me that true luxury is access: standing among penguin colonies, kayaking past tabular icebergs, feeling the scale of the ice.",
    expertise: ["Expedition vessel selection", "Landing site sequencing", "Wildlife photography timing", "Weather contingency planning"],
  },
  {
    name: "South Georgia",
    tagline: "Wildlife Kingdom",
    image: "/images/svalbard-polar.jpg",
    description: "Often called the Serengeti of the Southern Ocean, South Georgia hosts the planet's greatest concentration of wildlife. King penguin colonies numbering in the hundreds of thousands, elephant seal beaches, and the haunting history of Shackleton's survival make this one of Earth's most powerful destinations.",
    expertise: ["King penguin colony logistics", "Shackleton heritage sites", "Elephant seal timing", "Multi-day expedition planning"],
  },
  {
    name: "Falkland Islands",
    tagline: "Penguin Paradise",
    image: "/images/iceland-glacier.jpg",
    description: "The gateway to Antarctic waters, the Falklands offer intimate wildlife encounters without the Drake Passage crossing. Five penguin species, albatross colonies, and British colonial heritage create a unique blend of natural and cultural experiences.",
    expertise: ["Multi-species penguin sites", "Black-browed albatross colonies", "Stanley cultural heritage", "Island hopping logistics"],
  },
]

export function ExpeditionsContent() {
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
        {/* Intro */}
        <div
          className={cn(
            "max-w-3xl mb-20 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight mb-8">
            Where Expedition Informs Design
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            My years in expedition travel—navigating polar waters, managing wildlife 
            encounters, understanding the rhythms of remote operations—directly inform 
            how I design Nordic journeys. Expedition experience teaches you to read 
            conditions, to build flexibility into structure, and to understand that 
            the most profound moments often emerge from careful preparation meeting 
            serendipity.
          </p>
        </div>

        {/* Expedition Destinations */}
        <div className="space-y-24">
          {expeditions.map((exp, index) => (
            <article
              key={exp.name}
              className={cn(
                "transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className={cn(
                "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center",
                index % 2 === 1 && "lg:grid-flow-dense"
              )}>
                {/* Image */}
                <div className={cn(
                  "relative aspect-[4/3] overflow-hidden",
                  index % 2 === 1 && "lg:col-start-2"
                )}>
                  <Image
                    src={exp.image}
                    alt={exp.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <p className="text-sm tracking-widest uppercase text-muted-foreground mb-2">
                    {exp.tagline}
                  </p>
                  <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                    {exp.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {exp.description}
                  </p>

                  {/* Expertise */}
                  <div>
                    <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">
                      Areas of Expertise
                    </p>
                    <ul className="space-y-2">
                      {exp.expertise.map((item) => (
                        <li key={item} className="flex items-center gap-3 text-foreground">
                          <span className="w-1.5 h-1.5 bg-foreground rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

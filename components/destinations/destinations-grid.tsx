"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const destinations = [
  {
    name: "Norway",
    tagline: "Fjords & Coastal Beauty",
    image: "/images/hero-fjord.jpg",
    description: "From the dramatic western fjords to the wild Lofoten Islands and the Arctic gateway of Tromsø, Norway offers some of Earth's most spectacular landscapes. The midnight sun of summer and the aurora-lit winters create two distinct but equally magical seasons for travel.",
    bestTime: "May–September for hiking and cruises; December–March for aurora and winter activities",
    highlights: ["Geirangerfjord & Nærøyfjord", "Lofoten Islands", "Bergen & Oslo", "Tromsø Gateway", "Hurtigruten Coastal Route"],
  },
  {
    name: "Finland",
    tagline: "Lapland & Aurora",
    image: "/images/finland-winter.jpg",
    description: "Finnish Lapland is the quintessential Arctic winter destination—glass igloos under the aurora, husky safaris through pristine forests, and the warmth of traditional saunas against the cold. The Midnight Sun summer offers a different magic: endless light and wild berry season.",
    bestTime: "December–March for aurora and winter; June–August for midnight sun",
    highlights: ["Rovaniemi & Santa Claus Village", "Glass Igloo Experiences", "Husky & Reindeer Safaris", "Ice Hotels & Aurora Lodges", "Sámi Cultural Heritage"],
  },
  {
    name: "Iceland",
    tagline: "Fire & Ice",
    image: "/images/iceland-glacier.jpg",
    description: "A land where glaciers meet volcanoes, geysers erupt beside ice lagoons, and the Northern Lights dance across the winter sky. Iceland's otherworldly landscapes demand time to appreciate—this is not a destination to rush through.",
    bestTime: "June–August for hiking and midnight sun; September–March for aurora",
    highlights: ["Golden Circle", "Glacier Lagoon & Diamond Beach", "Snæfellsnes Peninsula", "Blue Lagoon & Geothermal Bathing", "Highland Interior (summer)"],
  },
  {
    name: "Sweden",
    tagline: "Wilderness & Design",
    image: "/images/sweden-forest.jpg",
    description: "Swedish Lapland offers a unique blend of cutting-edge design and traditional Sámi culture. The ICEHOTEL, Treehotel, and other architectural marvels sit within vast wilderness, while Stockholm provides sophisticated urban contrast.",
    bestTime: "Year-round; winter for ice experiences, summer for hiking and midnight sun",
    highlights: ["ICEHOTEL Jukkasjärvi", "Treehotel Harads", "Abisko National Park", "Sámi Experiences", "Stockholm Archipelago"],
  },
  {
    name: "Svalbard",
    tagline: "High Arctic",
    image: "/images/svalbard-polar.jpg",
    description: "The Norwegian archipelago of Svalbard lies between mainland Norway and the North Pole—a true high Arctic wilderness. Polar bears, walrus, and reindeer roam landscapes of glaciers and tundra. This is expedition territory at its most pristine.",
    bestTime: "June–August for wildlife and midnight sun; March–April for returning light",
    highlights: ["Polar Bear Watching", "Glacier Kayaking", "Expedition Cruising", "Longyearbyen Culture", "Arctic Wildlife Photography"],
  },
  {
    name: "Faroe Islands",
    tagline: "Atlantic Mystery",
    image: "/images/iceland-glacier.jpg",
    description: "Eighteen volcanic islands between Norway and Iceland, draped in green grass and shrouded in mist. The Faroes feel like Europe's last secret—dramatic sea cliffs, grass-roofed villages, and some of the world's finest seabird colonies.",
    bestTime: "May–August for puffins and hiking; shoulder seasons for fewer crowds",
    highlights: ["Múlafossur Waterfall", "Mykines Puffin Island", "Tórshavn Old Town", "Sea Cliff Boat Tours", "Faroese Cuisine"],
  },
  {
    name: "Greenland",
    tagline: "Remote Frontier",
    image: "/images/svalbard-polar.jpg",
    description: "The world's largest island remains one of its most remote and least visited. Massive icebergs, Inuit culture, and landscapes that dwarf human imagination. Greenland requires patience and flexibility, rewarding those who make the journey.",
    bestTime: "June–September for accessibility; March–April for dog sledding",
    highlights: ["Ilulissat Icefjord", "Inuit Cultural Heritage", "Iceberg Cruising", "Dog Sledding Expeditions", "Northern Lights (winter)"],
  },
  {
    name: "Denmark",
    tagline: "Scandinavian Soul",
    image: "/images/norway-train.jpg",
    description: "While not Arctic, Denmark is the cultural heart of Scandinavia—and often the gateway. Copenhagen's design excellence, cozy hygge culture, and world-renowned culinary scene make it an ideal starting or ending point for Nordic journeys.",
    bestTime: "May–September for optimal weather; December for Christmas markets",
    highlights: ["Copenhagen Design", "Noma & New Nordic Cuisine", "Louisiana Museum", "Zealand Countryside", "Aarhus Culture"],
  },
]

export function DestinationsGrid() {
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
    <section ref={sectionRef} className="pb-24 lg:pb-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="space-y-24">
          {destinations.map((destination, index) => (
            <article
              key={destination.name}
              className={cn(
                "transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${index * 50}ms` }}
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
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <p className="text-sm tracking-widest uppercase text-muted-foreground mb-2">
                    {destination.tagline}
                  </p>
                  <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                    {destination.name}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {destination.description}
                  </p>

                  {/* Best Time */}
                  <div className="mb-6 p-4 bg-secondary">
                    <p className="text-sm tracking-widest uppercase text-muted-foreground mb-1">
                      Best Time to Visit
                    </p>
                    <p className="text-foreground">{destination.bestTime}</p>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {destination.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-3 py-1 text-xs tracking-wide uppercase border border-border text-foreground"
                      >
                        {highlight}
                      </span>
                    ))}
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

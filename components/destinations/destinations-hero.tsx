"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function DestinationsHero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className={cn(
            "max-w-3xl transition-all duration-1000",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">
            Expertise
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
            Destinations
          </h1>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Deep knowledge of Nordic and Arctic regions, cultivated through years 
            of exploration and professional experience. Each destination offers 
            unique possibilities shaped by season, light, and landscape.
          </p>
        </div>
      </div>
    </section>
  )
}

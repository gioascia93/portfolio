"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function GalleryHero() {
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
            Photography
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
            Visual Stories
          </h1>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Moments captured across Arctic and Nordic landscapes—wildlife encounters, 
            dramatic light, and the quiet poetry of the far North. Photography is 
            both documentation and meditation, a way of seeing these places more deeply.
          </p>
        </div>
      </div>
    </section>
  )
}

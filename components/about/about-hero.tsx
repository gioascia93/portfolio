"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export function AboutHero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div
            className={cn(
              "relative aspect-[4/5] order-2 lg:order-1 transition-all duration-1000",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <Image
              src="/images/portrait.jpg"
              alt="Travel designer portrait"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div
            className={cn(
              "order-1 lg:order-2 transition-all duration-1000 delay-200",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">
              About
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
              The Art of<br />Nordic Travel
            </h1>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
              I believe every journey should feel like a film—carefully paced, 
              emotionally resonant, and visually unforgettable. My role is to be 
              the invisible hand that orchestrates these moments.
            </p>
            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm tracking-widest uppercase text-muted-foreground mb-2">
                Specialization
              </p>
              <p className="font-serif text-xl text-foreground">
                Nordic & Arctic Luxury Travel Design
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

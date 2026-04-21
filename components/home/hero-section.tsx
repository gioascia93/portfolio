"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-fjord.jpg"
          alt="Norwegian fjord at golden hour"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <div
          className={cn(
            "max-w-4xl transition-all duration-1000 delay-300",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <p className="text-white/80 text-sm tracking-[0.3em] uppercase mb-6">
            Luxury Travel Design
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight tracking-tight text-balance">
            Nordic & Arctic
            <br />
            Travel Designer
          </h1>
          <p className="mt-8 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Designing bespoke journeys shaped by expedition experience and Nordic landscapes.
            Where travel becomes a study in light, space, and quiet discovery.
          </p>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#featured-itineraries"
              className="px-8 py-4 bg-white text-foreground text-sm tracking-widest uppercase hover:bg-white/90 transition-colors"
            >
              View Itineraries
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border border-white text-white text-sm tracking-widest uppercase hover:bg-white/10 transition-colors"
            >
              Work With Me
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className={cn(
            "absolute bottom-12 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="flex flex-col items-center gap-2 text-white/60">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}

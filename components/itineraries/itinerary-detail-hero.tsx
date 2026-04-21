"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { cn } from "@/lib/utils"

interface ItineraryDetailHeroProps {
  title: string
  subtitle: string
  heroImage: string
  heroTagline: string
}

export function ItineraryDetailHero({
  title,
  subtitle,
  heroImage,
  heroTagline,
}: ItineraryDetailHeroProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt={title}
          fill
          className="object-cover"
          priority
          quality={95}
        />
        {/* Minimal overlay - let image breathe */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Back Link */}
      <div className="absolute top-24 left-0 right-0 z-50">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <Link
            href="/#featured-itineraries"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white/90 transition-colors text-xs tracking-wider uppercase font-normal"
          >
            <ArrowLeft className="w-3 h-3" />
            Back
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-[600] flex items-end pb-20 lg:pb-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-12 w-full">
          <div
            className={cn(
              "max-w-3xl transition-all duration-[1400ms] delay-200",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            {/* Subtitle above title */}
            {/*<p className="text-[11px] uppercase tracking-[0.28em] text-white/50 font-light mb-5">
              {subtitle}
            </p>*/}
            <h1 className="font-serif text-5xl md:text-6xl lg:text-[80px] text-white leading-[1.05] tracking-tight">
              {title}
            </h1>
            <p className="mt-8 text-sm md:text-base text-white/70 font-medium tracking-wide max-w-md leading-relaxed">
              {heroTagline}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

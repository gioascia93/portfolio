"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export function ExpeditionsHero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-[60vh] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/antarctica.jpg"
          alt="Antarctic expedition"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full min-h-[60vh] flex items-end pb-16 lg:pb-24 pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
          <div
            className={cn(
              "max-w-3xl transition-all duration-1000 delay-200",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <p className="text-sm tracking-[0.3em] uppercase text-white/70 mb-6">
              Beyond the North
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
              Expedition Experience
            </h1>
            <p className="mt-6 text-lg text-white/80 max-w-2xl leading-relaxed">
              Polar expedition expertise that extends beyond the Arctic Circle—to 
              Antarctica, South Georgia, and the remote reaches of the Southern Ocean.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

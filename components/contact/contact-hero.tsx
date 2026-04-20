"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function ContactHero() {
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
            Work With Me
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
            Let&apos;s Create Something Extraordinary
          </h1>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Every journey begins with a conversation. Whether you have a clear 
            vision or just a spark of inspiration, I&apos;d love to hear about your 
            Nordic travel dreams.
          </p>
        </div>
      </div>
    </section>
  )
}

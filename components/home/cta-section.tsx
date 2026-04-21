"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function CTASection() {
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
    <section id="contact" ref={sectionRef} className="relative py-32 lg:py-48 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/svalbard-polar.jpg"
          alt="Arctic expedition landscape"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8 text-center">
        <div
          className={cn(
            "transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <p className="text-sm tracking-[0.3em] uppercase text-white/70 mb-6">
            Let&apos;s Create Something Extraordinary
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-6xl text-white leading-tight text-balance">
            Ready to design Nordic & Arctic travel experiences together?
          </h2>
          <p className="mt-8 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Currently seeking opportunities within luxury travel teams and destination specialists.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="mailto:gioascia93@gmail.com"
              className="px-8 py-4 bg-white text-foreground text-sm tracking-widest uppercase hover:bg-white/90 transition-colors"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface GridImage {
  src: string
  alt: string
  span?: "wide" | "tall" | "normal"
}

interface ItineraryContentProps {
  overview: string
  guestProfile: string
  whenToVisit: string
  journeyFlow: string[]
  activities: string[]
  accommodation: string
  designRationale: string
  gridImages: GridImage[]
}

function FadeIn({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.08 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-1000",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="block text-[10px] uppercase tracking-[0.25em] text-foreground/40 font-sans mb-6">
      {children}
    </span>
  )
}

export function ItineraryContent({
  overview,
  guestProfile,
  whenToVisit,
  journeyFlow,
  activities,
  accommodation,
  designRationale,
  gridImages = [],
}: ItineraryContentProps) {

  return (
    <article className="bg-background">

      {/* ─── OVERVIEW ─────────────────────────────────────────── */}
      <div className="mx-auto max-w-4xl px-6 lg:px-0 pt-12 pb-12 lg:pt-20 lg:pb-20">
        <FadeIn>
          <SectionLabel>Overview</SectionLabel>
          <p className="font-serif text-xl lg:text-2xl leading-relaxed text-foreground/85 font-light">
            {overview}
          </p>
        </FadeIn>
      </div>

      {/* ─── PHOTO GRID ───────────────────────────────────────── */}
      <FadeIn>
        <div className="grid grid-cols-4 gap-2 px-2 lg:gap-3 lg:px-3">
          {gridImages.map((img, i) => (
            <div
              key={i}
              className={cn(
                "relative overflow-hidden",
                img.span === "wide"
                  ? "col-span-1 lg:col-span-1 aspect-[1/1]"
                  : img.span === "tall"
                    ? "col-span-1 lg:col-span-1 aspect-[1/1]"
                    : "col-span-1 lg:col-span-1 aspect-[1/1]"
              )}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                quality={92}
              />
            </div>
          ))}
        </div>
      </FadeIn>

      {/* ─── GUEST PROFILE + WHEN TO VISIT ────────────────────── */}
      <div className="mx-auto max-w-4xl px-6 lg:px-0 pt-12 pb-4 lg:pt-20 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          <FadeIn>
            <div>
              <SectionLabel>Designed For</SectionLabel>
              <p className="text-sm leading-loose text-foreground/70 font-normal">
                {guestProfile}
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={120}>
            <div>
              <SectionLabel>When to Visit</SectionLabel>
              <p className="text-sm leading-loose text-foreground/70 font-normal">
                {whenToVisit}
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* ─── JOURNEY FLOW ─────────────────────────────────────── */}
      <div className="mx-auto max-w-4xl px-6 lg:px-0 pt-4 pb-12 lg:pt-8 pb-20">
        <FadeIn>
          <SectionLabel>Journey Flow</SectionLabel>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-3">
            {journeyFlow.map((stop, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="font-serif text-base lg:text-lg text-foreground/80 font-normal tracking-wide">
                  {stop}
                </span>
                {i < journeyFlow.length - 1 && (
                  <span className="text-foreground/25 text-sm">→</span>
                )}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* ─── DIVIDER ──────────────────────────────────────────── */}
      <div className="mx-auto max-w-4xl px-6 lg:px-0">
        <div className="h-px bg-foreground/14" />
      </div>

      {/* ─── ACCOMMODATION ────────────────────────────────────── */}
      <div className="mx-auto max-w-4xl px-6 lg:px-0 py-12 lg:py-20">
        <FadeIn>
          <SectionLabel>Types of Accommodation</SectionLabel>
          <p className="text-sm leading-loose text-foreground/70 font-normal">
            {accommodation}
          </p>
        </FadeIn>
      </div>

      {/* ─── DIVIDER ──────────────────────────────────────────── */}
      <div className="mx-auto max-w-4xl px-6 lg:px-0">
        <div className="h-px bg-foreground/14" />
      </div>

      {/* ─── POSSIBLE ACTIVITIES ──────────────────────────────── */}
      <div className="mx-auto max-w-4xl px-6 lg:px-0 py-12 lg:py-20">
        <FadeIn>
          <SectionLabel>Possible Activities</SectionLabel>
          <ul className="space-y-5">
            {activities.map((activity, i) => (
              <FadeIn key={i} delay={i * 60}>
                <li className="flex items-start gap-5">
                  <span className="text-foreground/20 mt-1.5 shrink-0 text-xs">◆</span>
                  <span className="text-sm leading-relaxed text-foreground/70 font-normal">
                    {activity}
                  </span>
                </li>
              </FadeIn>
            ))}
          </ul>
        </FadeIn>
      </div>

      {/* ─── DIVIDER ──────────────────────────────────────────── */}
      <div className="mx-auto max-w-4xl px-6 lg:px-0">
        <div className="h-px bg-foreground/14" />
      </div>

      {/* ─── DESIGN RATIONALE ─────────────────────────────────── */}
      <div className="mx-auto max-w-4xl px-6 lg:px-0 py-12 lg:py-20">
        <FadeIn>
          <SectionLabel>Design Rationale</SectionLabel>
          <p className="font-serif text-lg lg:text-xl leading-relaxed text-foreground/80 font-light italic">
            {designRationale}
          </p>
        </FadeIn>
      </div>

      {/* ─── END SPACER ───────────────────────────────────────── */}
      <div className="h-12 lg:h-20" />

    </article>
  )
}

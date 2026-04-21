"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/#featured-itineraries", label: "Itineraries" },
  { href: "/expeditions", label: "Expeditions" },
  { href: "/#contact", label: "Contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group">
              <span className={cn(
                "text-sm tracking-widest uppercase transition-colors duration-300 hover:opacity-70",
                isScrolled ? "text-foreground" : "text-white"
              )}>
                Giorgia Ascia
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.slice(1).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm tracking-widest uppercase transition-colors duration-300 hover:opacity-70",
                    isScrolled ? "text-foreground" : "text-white"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={cn(
                "lg:hidden p-2 transition-colors",
                isScrolled ? "text-foreground" : "text-white"
              )}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-background transition-opacity duration-500 lg:hidden",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 h-20">
            <span className="font-serif text-xl tracking-wide text-foreground">
              Aurora Voyages
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-foreground"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center flex-1 gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-serif text-3xl text-foreground hover:opacity-70 transition-opacity"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

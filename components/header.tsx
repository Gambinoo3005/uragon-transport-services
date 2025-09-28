"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Fleet", href: "/fleet" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Testimonials", href: "/testimonials" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center relative">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 flex-shrink-0">
            <Image
              src="/uragon_logo.jpg"
              alt="Uragon Transport Services Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
            <div className="text-lg font-semibold text-foreground leading-tight font-sans">
              <div>Uragon</div>
              <div className="text-primary">Transport</div>
            </div>
          </Link>

          {/* Desktop Navigation - Mathematically Centered */}
          <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2" style={{width: '450px'}}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap font-sans"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4 flex-shrink-0 ml-auto">
            <a
              href="tel:+639159234867"
              className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>+63 915 923 4867</span>
            </a>
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 text-sm font-semibold rounded-full shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105">Book Now</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden ml-auto" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <nav className="flex flex-col space-y-4 px-4 py-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t">
                <a
                  href="tel:+639159234867"
                  className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
                >
                  <Phone className="h-4 w-4" />
                  <span>+63 915 923 4867</span>
                </a>
                <Link href="/contact">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 text-sm font-semibold rounded-full shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105">Book Now</Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

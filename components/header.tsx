"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, ChevronDown, Clock, MapPin, Facebook, MessageCircle } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const navigation = [
    { 
      name: "Services", 
      href: "/services",
      dropdown: [
        { name: "Fleet", href: "/fleet" },
        { name: "Rates", href: "/rates" },
        { name: "How It Works", href: "/how-it-works" },
        { name: "Requirements", href: "/requirements" },
        { name: "Policies", href: "/policies" },
      ]
    },
    { 
      name: "Locations", 
      href: "/locations",
      dropdown: [
        { name: "Fleet", href: "/fleet" },
        { name: "Rates", href: "/rates" },
        { name: "How It Works", href: "/how-it-works" },
        { name: "Requirements", href: "/requirements" },
        { name: "Policies", href: "/policies" },
      ]
    },
    { 
      name: "Policies", 
      href: "/policies",
      dropdown: [
        { name: "Fleet", href: "/fleet" },
        { name: "Rates", href: "/rates" },
        { name: "How It Works", href: "/how-it-works" },
        { name: "Requirements", href: "/requirements" },
        { name: "FAQs", href: "/faqs" },
      ]
    },
    { name: "Fleet", href: "/fleet" },
    { name: "Rates", href: "/rates" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Requirements", href: "/requirements" },
    { name: "FAQs", href: "/faqs" },
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container mx-auto px-4">
        {/* First Row - Logo, Info, and Contact */}
        <div className="flex h-16 items-center relative">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 md:space-x-3 flex-shrink-0">
            <Image
              src="/uragon_logo.jpg"
              alt="Uragon Transport Services Logo"
              width={120}
              height={40}
              className="h-8 md:h-10 w-auto"
            />
            <div className="text-sm md:text-lg font-semibold text-foreground leading-tight font-sans">
              <div>Uragon</div>
              <div className="text-primary">Transport</div>
            </div>
          </Link>

          {/* Center Info - Business Hours and Location (Mathematically Centered) */}
          <div className="hidden lg:flex items-center space-x-6 text-sm text-muted-foreground absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>7:00 AM–7:00 PM daily</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Malilipot, Albay</span>
            </div>
          </div>

          {/* Right Side - Social Media, Phone, and Book Now */}
          <div className="flex items-center space-x-2 md:space-x-4 ml-auto">
            {/* Social Media Icons */}
            <div className="hidden md:flex items-center space-x-3">
              <a
                href="https://facebook.com/uragontransport"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#1877F2] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://t.me/uragontransport"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#0088CC] transition-colors"
                aria-label="Telegram"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/639159234867"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#25D366] transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </a>
            </div>

            {/* Phone and Book Now */}
            <div className="hidden md:flex items-center space-x-3">
              <a
                href="tel:+639159234867"
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className="hidden lg:inline">+63 915 923 4867</span>
                <span className="lg:hidden">Call</span>
              </a>
              <Link href="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 text-sm font-semibold rounded-full shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105">
                  <span className="hidden lg:inline">Book Now</span>
                  <span className="lg:hidden">Book</span>
                </Button>
              </Link>
            </div>

            {/* Mobile Call Button */}
            <a
              href="tel:+639159234867"
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              aria-label="Call"
            >
              <Phone className="h-4 w-4" />
            </a>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Second Row - Navigation */}
        <div className="hidden md:block border-t border-border/50">
          <nav className="flex items-center justify-center space-x-8 py-3">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap font-sans flex items-center space-x-1"
                >
                  <span>{item.name}</span>
                  {item.dropdown && <ChevronDown className="h-3 w-3" />}
                </Link>
                
                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-background border border-border rounded-md shadow-lg z-50">
                    <div className="py-1">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background">
            {/* Mobile Business Info */}
            <div className="px-4 py-4 border-b border-border/50">
              <div className="flex flex-col space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>7:00 AM–7:00 PM daily</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Malilipot, Albay</span>
                </div>
              </div>
            </div>
            
            <nav className="flex flex-col space-y-4 px-4 py-6">
              {/* Add Home link at the top of mobile menu */}
              <Link
                href="/"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors text-center block py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors text-center block py-2"
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

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
        { name: "Self Drive", href: "/services/self-drive" },
        { name: "With Driver", href: "/services/with-driver" },
        { name: "Airport Transfer", href: "/services/airport-transfer" },
        { name: "Tour Packages", href: "/services/tours" },
        { name: "Bridal Service", href: "/services/bridal-service" },
        { name: "Business Trips", href: "/services/business-trips" },
        { name: "Delivery", href: "/services/delivery" },
        { name: "Pick Up & Drop Off", href: "/services/pick-up-drop-off" },
      ]
    },
    { 
      name: "Locations", 
      href: "/locations",
      dropdown: [
        { name: "Albay", href: "/locations/albay" },
        { name: "Camalig", href: "/locations/camalig" },
        { name: "Daraga", href: "/locations/daraga" },
        { name: "Legazpi City", href: "/locations/legazpi-city" },
        { name: "Malilipot", href: "/locations/malilipot" },
        { name: "Tabaco", href: "/locations/tabaco" },
      ]
    },
    { 
      name: "Policies", 
      href: "/policies",
      dropdown: [
        { name: "Cancellation Policy", href: "/policies/cancellation" },
        { name: "Fuel Policy", href: "/policies/fuel-policy" },
        { name: "Insurance", href: "/policies/insurance" },
        { name: "Mileage Policy", href: "/policies/mileage-policy" },
      ]
    },
    { name: "Fleet", href: "/fleet" },
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
                href="https://m.me/uragontransport"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#0084FF] transition-colors"
                aria-label="Messenger"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>

            {/* Phone Number */}
            <div className="hidden md:flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <a href="tel:+639159234867" className="hover:text-foreground transition-colors">
                +63 915 923 4867
              </a>
            </div>

            {/* Book Now Button */}
            <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/contact">Book Now</Link>
            </Button>
          </div>
        </div>

        {/* Second Row - Navigation */}
        <div className="hidden lg:flex items-center justify-center py-4 border-t">
          <nav className="flex items-center space-x-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center space-x-1"
                  onFocus={() => item.dropdown && setActiveDropdown(item.name)}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget as Node)) {
                      setActiveDropdown(null)
                    }
                  }}
                >
                  <span>{item.name}</span>
                  {item.dropdown && <ChevronDown className="h-3 w-3" />}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <div
                    className="absolute left-0 top-full z-50 w-48 pt-2"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="rounded-lg border border-border bg-background shadow-lg">
                      <div className="py-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center justify-between py-4 border-t">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-foreground"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t bg-background">
            <nav className="py-4 space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="pl-4 space-y-1">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

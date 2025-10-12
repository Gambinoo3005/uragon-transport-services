"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { 
  Menu, 
  X, 
  Phone, 
  ChevronDown, 
  Clock, 
  MapPin, 
  Facebook, 
  MessageCircle,
  Mail,
  Instagram,
  Twitter
} from "lucide-react"

// ============================================================================
// SITE HEADER COMPONENT
// ============================================================================

interface NavigationItem {
  name: string
  href: string
  dropdown?: Array<{
    name: string
    href: string
  }>
}

interface ContactInfo {
  phone: string
  hours: string
  location: string
}

interface SocialLink {
  name: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}

interface SiteHeaderProps {
  logo: {
    src: string
    alt: string
    width: number
    height: number
  }
  companyName: string
  tagline: string
  navigation: NavigationItem[]
  contactInfo: ContactInfo
  socialLinks?: SocialLink[]
  showContactInfo?: boolean
  showSocialLinks?: boolean
  className?: string
}

export function SiteHeader({
  logo,
  companyName,
  tagline,
  navigation,
  contactInfo,
  socialLinks = [],
  showContactInfo = true,
  showSocialLinks = true,
  className
}: SiteHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <header className={cn("sticky top-0 z-50 w-full border-b bg-background", className)}>
      <div className="container mx-auto px-4">
        {/* First Row - Logo, Info, and Contact */}
        <div className="flex h-16 items-center relative">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 md:space-x-3 flex-shrink-0">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="h-8 md:h-10 w-auto"
            />
            <div className="text-sm md:text-lg font-semibold text-foreground leading-tight font-sans">
              <div>{companyName}</div>
              <div className="text-primary">{tagline}</div>
            </div>
          </Link>

          {/* Center Info - Business Hours and Location */}
          {showContactInfo && (
            <div className="hidden lg:flex items-center space-x-6 text-sm text-muted-foreground absolute left-1/2 transform -translate-x-1/2">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{contactInfo.hours}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>{contactInfo.location}</span>
              </div>
            </div>
          )}

          {/* Right Side - Social Media, Phone, and Book Now */}
          <div className="flex items-center space-x-2 md:space-x-4 ml-auto">
            {showSocialLinks && socialLinks.length > 0 && (
              <div className="hidden md:flex items-center space-x-2">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon
                  return (
                    <Link
                      key={social.name}
                      href={social.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <IconComponent className="h-4 w-4" />
                    </Link>
                  )
                })}
              </div>
            )}

            <div className="hidden md:flex items-center space-x-2 text-sm">
              <Phone className="h-4 w-4 text-primary" />
              <span className="font-medium">{contactInfo.phone}</span>
            </div>

            <Button size="sm" className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground">
              <MessageCircle className="h-4 w-4 mr-2" />
              Book Now
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Second Row - Navigation */}
        <div className="hidden md:flex items-center justify-center py-4 border-t">
          <nav className="flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center space-x-1"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <span>{item.name}</span>
                  {item.dropdown && <ChevronDown className="h-3 w-3" />}
                </Link>

                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg z-50">
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
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t">
            <div className="py-4 space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t">
                <div className="flex items-center space-x-2 text-sm mb-4">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="font-medium">{contactInfo.phone}</span>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

// ============================================================================
// SITE FOOTER COMPONENT
// ============================================================================

interface FooterLink {
  name: string
  href: string
}

interface FooterSection {
  title: string
  links: FooterLink[]
}

interface SiteFooterProps {
  companyName: string
  tagline: string
  description: string
  contactInfo: ContactInfo
  sections: FooterSection[]
  socialLinks?: SocialLink[]
  showSocialLinks?: boolean
  className?: string
}

export function SiteFooter({
  companyName,
  tagline,
  description,
  contactInfo,
  sections,
  socialLinks = [],
  showSocialLinks = true,
  className
}: SiteFooterProps) {
  return (
    <footer className={cn("bg-foreground text-background", className)}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-4">
              {companyName} <span className="text-primary">{tagline}</span>
            </div>
            <p className="text-background/80 mb-4 text-sm leading-relaxed">
              {description}
            </p>
            {showSocialLinks && socialLinks.length > 0 && (
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon
                  return (
                    <Link
                      key={social.name}
                      href={social.href}
                      className="text-background/60 hover:text-background transition-colors"
                    >
                      <IconComponent className="h-5 w-5" />
                    </Link>
                  )
                })}
              </div>
            )}
          </div>

          {/* Footer Sections */}
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2 text-sm">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-background/80 hover:text-background transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-background/80">{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-background/80">info@uragontransport.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-background/80">{contactInfo.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-background/80">{contactInfo.hours}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/60">
          <p>&copy; 2024 {companyName} {tagline}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

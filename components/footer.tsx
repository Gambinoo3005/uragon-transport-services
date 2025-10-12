import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-4">
              Uragon <span className="text-primary">Transport</span>
            </div>
            <p className="text-background/80 mb-4 text-sm leading-relaxed">
              Unlock your journey, travel anywhere. We offer affordable rates with unlimited mileage for self drive rentals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/fleet" className="text-background/80 hover:text-background transition-colors">
                  Our Fleet
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-background/80 hover:text-background transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-background/80 hover:text-background transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-background/80 hover:text-background transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-background/80 hover:text-background transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services/self-drive"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Self Drive
                </Link>
              </li>
              <li>
                <Link
                  href="/services/with-driver"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  With Driver
                </Link>
              </li>
              <li>
                <Link href="/services/airport-transfer" className="text-background/80 hover:text-background transition-colors">
                  Airport Transfer
                </Link>
              </li>
              <li>
                <Link
                  href="/services/tours"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Tour Packages
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info (NAP) */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-background/80">136 Purok 2 Sta. Teresa</p>
                  <p className="text-background/80">Malilipot, Albay 4510</p>
                  <p className="text-background/80">Philippines</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="tel:+639159234867" className="text-background/80 hover:text-background transition-colors">
                  +63 915 923 4867
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@uragontransport.com"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  info@uragontransport.com
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-background/80">Mon-Sun: 7:00 AM - 7:00 PM</p>
                  <p className="text-background/80">24/7 Road Assistance</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/60">
          <p>&copy; 2025 Uragon Transport Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
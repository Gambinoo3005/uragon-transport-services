import Link from "next/link"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingCTABanner } from "@/components/booking-cta-banner"
import { StickyBookButton } from "@/components/sticky-book-button"
import { LocationLandingHero } from "@/components/location-landing-hero"
import { SectionContainer, SectionHeader } from "@/components/ui/content-grid"
import { Plane, Building, ShoppingBag } from "lucide-react"

export const metadata: Metadata = {
  title: "Legazpi City Car Rental | Uragon Transport Services | Airport Transfer",
  description:
    "Car rental services in Legazpi City, Albay. Airport transfers, city tours, and transportation to Mayon Volcano. Professional drivers and reliable vehicles.",
  keywords: "Legazpi City car rental, Legazpi Airport transfer, Bicol car rental, Mayon Volcano tours, Legazpi transportation",
}

const locationData = {
  hero: {
    location: "Legazpi City",
    tagline: "Your gateway to Bicol's best experiences",
    description:
      "The capital city of Albay and our main service hub. Experience the perfect blend of urban convenience and natural beauty, with easy access to Mayon Volcano and other Bicol attractions.",
    badge: "Main Office",
    primaryAction: {
      label: "Book your ride",
      href: "/contact"
    },
    secondaryAction: {
      label: "Explore our fleet",
      href: "/fleet"
    }
  },
  overview: [
    "Legazpi City serves as the heart of our operations and the perfect starting point for your Bicol adventure. From seamless airport pickups to comfortable city tours, we've built our reputation on punctuality, local knowledge, and exceptional service.",
    "Whether you're arriving at Legazpi Airport, exploring the city's vibrant shopping districts, or heading out to witness the majestic Mayon Volcano, our fleet and drivers are ready to make every journey stress-free and memorable."
  ],
  highlights: [
    {
      title: "Legazpi Airport Transfer",
      description: "Reliable pickup and drop-off from Legazpi Airport with meet-and-greet service, flight tracking, and comfortable vehicles.",
      distance: "5 km from city center",
      duration: "15 minutes",
      features: ["Meet & greet at arrivals", "Flight delay monitoring", "Professional drivers", "Clean, sanitized vehicles"]
    },
    {
      title: "Embarcadero de Legazpi",
      description: "The city's premier waterfront commercial complex, perfect for dining, shopping, and entertainment with stunning Mayon views.",
      distance: "City center",
      duration: "1-2 hours",
      features: ["Shopping destinations", "Waterfront dining", "Entertainment venues", "Mayon viewpoint"]
    },
    {
      title: "Legazpi Boulevard",
      description: "Scenic coastal road offering breathtaking views of Mayon Volcano and the perfect backdrop for evening drives and photo opportunities.",
      distance: "City center",
      duration: "30 minutes",
      features: ["Scenic coastal drive", "Mayon photo spots", "Evening ambiance", "Local food stalls"]
    },
    {
      title: "Pacific Mall & Shopping",
      description: "Modern shopping destination with retail stores, cinema, dining options, and all the conveniences for your Legazpi stay.",
      distance: "2 km from city center",
      duration: "2-3 hours",
      features: ["Modern retail stores", "Cinema complex", "Food court & restaurants", "Banking & services"]
    }
  ],
  services: [
    {
      name: "Airport Transfer",
      icon: Plane,
      description: "Reliable pickup and drop-off from Legazpi Airport",
      duration: "15-30 minutes",
      price: "From ₱800",
      includes: ["Meet and greet at arrivals", "Flight tracking and delay monitoring", "Professional driver in uniform", "Clean and comfortable vehicle"]
    },
    {
      name: "City Tour",
      icon: Building,
      description: "Explore Legazpi City's main attractions with a knowledgeable local driver",
      duration: "4 hours",
      price: "From ₱1,500",
      includes: ["Professional driver-guide", "Fuel and toll fees", "City highlights and viewpoints", "Flexible photo stops"]
    },
    {
      name: "Shopping Service",
      icon: ShoppingBag,
      description: "Transport to malls and shopping centers with flexible wait time",
      duration: "Flexible",
      price: "From ₱1,000",
      includes: ["Wait time included in rate", "Professional driver", "Flexible schedule adjustments", "Multiple stops allowed"]
    }
  ],
  officeInfo: {
    address: "Rizal Street, Legazpi City, Albay",
    hours: "Daily 6:00 AM to 9:00 PM",
    parking: "Hub parking available",
    notes: [
      "Our Legazpi hub is centrally located for easy access from all major hotels and landmarks.",
      "Visit us for walk-in bookings, vehicle inspections, or to discuss custom itineraries with our team.",
      "Same-day bookings welcome subject to vehicle availability—call ahead to secure your preferred unit."
    ]
  },
  nearby: [
    "Direct access to all Albay destinations including Daraga, Camalig, and Mayon Volcano viewpoints",
    "Gateway to Sorsogon, Naga City, and the rest of Bicol region",
    "Ferry terminal connections to nearby islands and provinces"
  ]
}

export default function LegazpiCityPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <LocationLandingHero
          location={locationData.hero.location}
          tagline={locationData.hero.tagline}
          description={locationData.hero.description}
          badge={locationData.hero.badge}
          primaryAction={locationData.hero.primaryAction}
          secondaryAction={locationData.hero.secondaryAction}
        />

        <SectionContainer background="default" padding="xl">
          <div className="max-w-3xl mx-auto space-y-6">
            {locationData.overview.map((paragraph, index) => (
              <p key={index} className="text-lg text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </SectionContainer>

        <SectionContainer background="muted/30" padding="xl">
          <SectionHeader
            title="City highlights & destinations"
            description="Explore the best of Legazpi City with our reliable transportation"
            centered={false}
            maxWidth="3xl"
          />
          <div className="grid gap-8 md:grid-cols-2">
            {locationData.highlights.map((highlight, index) => (
              <div key={index} className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">{highlight.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {highlight.description}
                </p>
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <span>{highlight.distance}</span>
                  <span>•</span>
                  <span>{highlight.duration}</span>
                </div>
                <ul className="space-y-2 pt-2">
                  {highlight.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground leading-relaxed">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </SectionContainer>

        <SectionContainer background="default" padding="xl">
          <SectionHeader
            title="Our services in Legazpi City"
            description="Comprehensive transportation solutions designed for convenience and comfort"
            centered={false}
            maxWidth="3xl"
          />
          <div className="grid gap-8 md:grid-cols-3">
            {locationData.services.map((service, index) => (
              <div key={index} className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-wide text-muted-foreground">{service.duration}</p>
                    <p className="text-xl font-semibold text-foreground">{service.price}</p>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground">{service.name}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <div className="pt-2 border-t border-border/60">
                  <p className="text-sm font-medium text-foreground mb-2">Includes:</p>
                  <ul className="space-y-1">
                    {service.includes.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm text-muted-foreground leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </SectionContainer>

        <SectionContainer background="muted/30" padding="xl">
          <SectionHeader
            title="Visit our Legazpi City office"
            description="Our main hub for bookings, inquiries, and vehicle pick-up"
            centered={false}
            maxWidth="3xl"
          />
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Location & Hours</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {locationData.officeInfo.address}
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {locationData.officeInfo.hours}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  {locationData.officeInfo.parking}
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Why visit our hub?</h3>
              <ul className="space-y-3">
                {locationData.officeInfo.notes.map((note, index) => (
                  <li key={index} className="text-base text-muted-foreground leading-relaxed">
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </SectionContainer>

        <SectionContainer background="default" padding="xl">
          <SectionHeader
            title="Gateway to Bicol"
            description="From Legazpi City, explore the entire region"
            centered={false}
            maxWidth="3xl"
          />
          <ul className="space-y-4 max-w-3xl">
            {locationData.nearby.map((item, index) => (
              <li key={index} className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Link href="/locations" className="text-primary font-semibold">
              Explore all locations we serve
            </Link>
          </div>
        </SectionContainer>

        <BookingCTABanner />
      </main>
      <Footer />
      <StickyBookButton />
    </div>
  )
}

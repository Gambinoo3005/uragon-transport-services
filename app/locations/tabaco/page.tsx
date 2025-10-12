import Link from "next/link"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingCTABanner } from "@/components/booking-cta-banner"
import { StickyBookButton } from "@/components/sticky-book-button"
import { LocationLandingHero } from "@/components/location-landing-hero"
import { SectionContainer, SectionHeader } from "@/components/ui/content-grid"
import { Ship, Waves, Anchor } from "lucide-react"

export const metadata: Metadata = {
  title: "Tabaco Car Rental | Uragon Transport Services | Port & Island Tours",
  description:
    "Car rental services in Tabaco, Albay. Access to Tabaco Port, San Miguel Island, and beautiful beaches. Professional drivers and reliable vehicles available.",
  keywords: "Tabaco car rental, Tabaco Port, San Miguel Island, beach tours, Bicol car rental",
}

const locationData = {
  hero: {
    location: "Tabaco City",
    tagline: "Your coastal escape to island adventures",
    description:
      "A coastal city known for its port and beautiful beaches, Tabaco serves as a gateway to nearby islands and offers access to pristine beaches, island-hopping adventures, and maritime heritage. Let us take you from the port to paradise.",
    badge: "Coastal Gateway",
    primaryAction: {
      label: "Book coastal transfer",
      href: "/contact"
    },
    secondaryAction: {
      label: "View our vehicles",
      href: "/fleet"
    }
  },
  overview: [
    "Tabaco City is the maritime gateway to Bicol's most pristine islands and coastal treasures. With its bustling port connecting travelers to San Miguel Island and beyond, Tabaco offers the perfect blend of island adventure and coastal relaxation.",
    "Our transportation services ensure you arrive at the port on time for your island adventures, or deliver you comfortably to beachfront resorts where you can unwind and enjoy the coastal beauty of Albay."
  ],
  destinations: [
    {
      title: "Tabaco Port",
      description: "The main maritime hub of Albay, connecting travelers to nearby islands and provinces. Whether you're catching a ferry to San Miguel Island, Masbate, or other destinations, we ensure punctual port transfers with luggage assistance and real-time ferry schedule coordination.",
      distance: "25 km from Legazpi",
      duration: "30 minutes drive",
      highlights: ["Ferry terminal access", "Island-hopping gateway", "Luggage assistance", "Schedule coordination"]
    },
    {
      title: "San Miguel Island",
      description: "A pristine island paradise accessible from Tabaco Port, featuring white sand beaches, crystal-clear waters, and untouched natural beauty. Perfect for day trips, snorkeling, beach camping, and escaping the mainland hustle.",
      distance: "Ferry from Tabaco Port",
      duration: "Full day trip",
      highlights: ["White sand beaches", "Snorkeling spots", "Beach camping", "Island picnics"]
    },
    {
      title: "Tabaco Beach Resorts",
      description: "A collection of coastal resorts and beachfront accommodations offering stunning ocean views, water activities, and authentic seaside dining. Ideal for family weekends, romantic getaways, and group retreats.",
      distance: "20-30 km from Legazpi",
      duration: "Half to full day",
      highlights: ["Beachfront facilities", "Water sports", "Fresh seafood dining", "Sunset views"]
    },
    {
      title: "Misibis Bay Access",
      description: "Transportation to the exclusive Misibis Bay luxury resort, known for world-class amenities, private beaches, and upscale accommodations. We coordinate seamless transfers with resort check-in times.",
      distance: "35 km from Legazpi",
      duration: "45 minutes",
      highlights: ["Luxury resort access", "Private beach transfers", "Resort coordination", "VIP service"]
    }
  ],
  services: [
    {
      name: "Port Transfer Service",
      icon: Ship,
      description: "Reliable transportation to and from Tabaco Port with ferry schedule coordination and luggage handling",
      duration: "30 minutes",
      price: "From ₱1,000",
      includes: ["Professional driver", "Ferry schedule tracking", "Luggage assistance", "Port drop-off coordination"]
    },
    {
      name: "Island Tour Package",
      icon: Waves,
      description: "Full-day island adventure including port transfer, wait time, and return service for San Miguel Island trips",
      duration: "8-10 hours",
      price: "From ₱2,500",
      includes: ["Round-trip port transfer", "Driver wait time", "Flexible return schedule", "Cooler for beach supplies"]
    },
    {
      name: "Beach Resort Transfer",
      icon: Anchor,
      description: "Comfortable transport to coastal resorts with flexible schedules for day trips or overnight stays",
      duration: "Flexible",
      price: "From ₱1,800",
      includes: ["Professional driver", "Resort coordination", "Flexible timing", "Beach equipment space"]
    }
  ],
  portInfo: {
    ferryRoutes: [
      "San Miguel Island (daily departures)",
      "Masbate Province (multiple daily routes)",
      "Catanduanes connections (seasonal)",
      "Inter-island cargo and passenger ferries"
    ],
    travelTips: [
      "Book port transfers 24 hours ahead to coordinate with ferry schedules",
      "Arrive at least 30 minutes before ferry departure for ticketing",
      "Pack light for island trips—we provide storage for extra luggage",
      "Check weather conditions before island trips, especially during monsoon season"
    ]
  },
  beachActivities: [
    "Island hopping to multiple small islands around Tabaco Bay",
    "Snorkeling and diving at coral-rich spots near San Miguel Island",
    "Beach volleyball and water sports at resort areas",
    "Fresh seafood dining at beachfront eateries",
    "Sunset watching along the Tabaco coastal strip",
    "Beach camping and bonfire setups (with permits)"
  ]
}

export default function TabacoPage() {
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
            title="Coastal attractions & island gateways"
            description="Discover the maritime beauty and island adventures from Tabaco"
            centered={false}
            maxWidth="3xl"
          />
          <div className="grid gap-8 md:grid-cols-2">
            {locationData.destinations.map((destination, index) => (
              <div key={index} className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">{destination.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {destination.description}
                </p>
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <span>{destination.distance}</span>
                  <span>•</span>
                  <span>{destination.duration}</span>
                </div>
                <ul className="space-y-2 pt-2">
                  {destination.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="text-sm text-muted-foreground leading-relaxed">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </SectionContainer>

        <SectionContainer background="default" padding="xl">
          <SectionHeader
            title="Our Tabaco transport services"
            description="Seamless transfers for port, island, and beach adventures"
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
            title="Ferry routes & port information"
            description="Navigate your island adventures with confidence"
            centered={false}
            maxWidth="3xl"
          />
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Ferry Routes from Tabaco Port</h3>
              <ul className="space-y-3">
                {locationData.portInfo.ferryRoutes.map((route, index) => (
                  <li key={index} className="text-base text-muted-foreground leading-relaxed">
                    {route}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Port Transfer Tips</h3>
              <ul className="space-y-3">
                {locationData.portInfo.travelTips.map((tip, index) => (
                  <li key={index} className="text-base text-muted-foreground leading-relaxed">
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </SectionContainer>

        <SectionContainer background="default" padding="xl">
          <SectionHeader
            title="Beach & island activities"
            description="Make the most of your coastal adventure"
            centered={false}
            maxWidth="3xl"
          />
          <ul className="grid gap-4 md:grid-cols-2 max-w-4xl">
            {locationData.beachActivities.map((activity, index) => (
              <li key={index} className="text-base text-muted-foreground leading-relaxed">
                {activity}
              </li>
            ))}
          </ul>
        </SectionContainer>

        <BookingCTABanner />
      </main>
      <Footer />
      <StickyBookButton />
    </div>
  )
}

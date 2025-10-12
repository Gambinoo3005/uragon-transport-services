import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingCTABanner } from "@/components/booking-cta-banner"
import { StickyBookButton } from "@/components/sticky-book-button"
import { LocationsHero } from "@/components/locations-hero"
import { LocationGrid, type Location } from "@/components/location-grid"
import { SectionContainer, SectionHeader, StandardGrid } from "@/components/ui/content-grid"
import { ContentCard } from "@/components/ui/content-card"
import { MapPin, Phone, Car, Users, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Service Locations | Uragon Transport Services | Bicol Car Rental Locations",
  description:
    "Explore our service locations across Bicol. We provide car rental services in Albay, Legazpi City, Naga, and other key locations in the region.",
  keywords: "Bicol car rental locations, Albay car rental, Legazpi car rental, Naga car rental, service areas",
}

const locations: Location[] = [
  {
    name: "Albay",
    slug: "albay",
    description: "The heart of Bicol region, home to the majestic Mayon Volcano",
    image: "/mayon_hero.jpg",
    features: ["Mayon Volcano tours", "Cagsawa Ruins", "Lignon Hill Nature Park", "Daraga Church", "Sumlang Lake"],
    popular: true,
    distance: "Main service area",
    operatingHours: "6:00 AM - 8:00 PM",
  },
  {
    name: "Legazpi City",
    slug: "legazpi-city",
    description: "The capital city of Albay and our main service hub",
    image: "/placeholder.jpg",
    features: ["Legazpi Airport", "Embarcadero de Legazpi", "Legazpi Boulevard", "Pacific Mall", "City proper"],
    popular: true,
    distance: "Main office location",
    operatingHours: "6:00 AM - 8:00 PM",
  },
  {
    name: "Malilipot",
    slug: "malilipot",
    description: "A peaceful town known for its hot springs and natural beauty",
    image: "/placeholder.jpg",
    features: ["Malilipot Hot Springs", "Quitinday Green Hills", "Joroan Church", "Natural attractions", "Rural landscapes"],
    distance: "15 km from Legazpi",
    operatingHours: "7:00 AM - 7:00 PM",
  },
  {
    name: "Daraga",
    slug: "daraga",
    description: "Historic town with stunning views of Mayon Volcano",
    image: "/placeholder.jpg",
    features: ["Daraga Church", "Cagsawa Ruins", "Mayon Skyline View", "Historical sites", "Volcano viewing"],
    popular: true,
    distance: "8 km from Legazpi",
    operatingHours: "7:00 AM - 7:00 PM",
  },
  {
    name: "Tabaco",
    slug: "tabaco",
    description: "A coastal city known for its port and beautiful beaches",
    image: "/placeholder.jpg",
    features: ["Tabaco Port", "San Miguel Island", "Beach resorts", "Port area", "Coastal attractions"],
    distance: "25 km from Legazpi",
    operatingHours: "7:00 AM - 7:00 PM",
  },
  {
    name: "Camalig",
    slug: "camalig",
    description: "Gateway to Mayon Volcano with rich agricultural heritage",
    image: "/placeholder.jpg",
    features: ["Mayon Volcano base", "Agricultural areas", "Rural communities", "Volcano trekking", "Farm tours"],
    distance: "20 km from Legazpi",
    operatingHours: "7:00 AM - 7:00 PM",
  },
]

const services = [
  {
    name: "Airport Transfer",
    description: "Pickup and drop-off from Legazpi Airport and regional terminals",
    icon: Car,
  },
  {
    name: "City Tours",
    description: "Curated itineraries with local drivers who know every landmark",
    icon: MapPin,
  },
  {
    name: "Group Transportation",
    description: "Coaster and van options for families, corporate teams, and delegations",
    icon: Users,
  },
  {
    name: "Long Distance",
    description: "Inter-city and inter-province travel with vetted, experienced drivers",
    icon: Car,
  },
]

const regionalHighlights = [
  {
    title: "Local Coordinators",
    description: "Each hub is managed by a resident coordinator who ensures smooth handovers and quick resolutions.",
    icon: Users,
  },
  {
    title: "Top-Rated Service",
    description: "Consistent five-star feedback from tourists, OFWs, and corporate travellers returning to Bicol.",
    icon: Star,
  },
  {
    title: "Ready Fleet",
    description: "Sedans, SUVs, and vans are pre-positioned across the province for faster dispatch wherever you land.",
    icon: Car,
  },
]

export default function LocationsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <LocationsHero
          totalLocations={locations.length}
          highlightAreas={["Albay", "Daraga", "Legazpi City"]}
        />

        <LocationGrid locations={locations} />

        <SectionContainer background="muted/50" padding="xl">
          <SectionHeader
            title="Local Support Across Bicol"
            description="Our coordinators live in the communities they serve. Expect quick turnarounds, real-time updates, and the kind of wayfinding only locals can provide."
            maxWidth="3xl"
          />

          <StandardGrid variant="3col" gap="md">
            {regionalHighlights.map((highlight) => (
              <ContentCard
                key={highlight.title}
                type="icon"
                icon={highlight.icon}
                title={highlight.title}
                description={highlight.description}
                variant="default"
              />
            ))}
          </StandardGrid>
        </SectionContainer>

        <SectionContainer background="default" padding="xl">
          <SectionHeader
            title="Services Available in All Locations"
            description="No matter which pickup point you choose, you'll enjoy the same consistent process, documentation, and support."
            maxWidth="4xl"
          />

          <StandardGrid variant="4col" gap="md">
            {services.map((service) => (
              <ContentCard
                key={service.name}
                type="icon"
                icon={service.icon}
                title={service.name}
                description={service.description}
                variant="centered"
              />
            ))}
          </StandardGrid>
        </SectionContainer>

        <SectionContainer background="muted/40" padding="xl">
          <SectionHeader
            title="Know the Roads Before You Roll"
            description="Ask for route briefings, traffic windows, and weather updates. Our dispatchers coordinate with local barangays and tourism desks so you can travel with confidence."
            maxWidth="3xl"
          />

          <div className="max-w-4xl mx-auto">
            <ContentCard
              type="feature"
              title="Interactive Map Coming Soon"
              description="We're building a live map that shows meetup points, landmarks, and travel advisories for each hub."
              variant="default"
            />
          </div>
        </SectionContainer>

        <SectionContainer background="default" padding="xl">
          <SectionHeader
            title="Need Service in Your Area?"
            description="Let us know your pickup point and schedule. We'll confirm availability and coordinate the nearest dispatch team."
            maxWidth="2xl"
          />

          <div className="max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Phone className="h-5 w-5 text-primary" />
              <a
                href="tel:+639159234867"
                className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
              >
                +63 915 923 4867
              </a>
            </div>
            <p className="text-muted-foreground">
              Prefer messaging? Send us a Viber or WhatsApp chat and we'll get right back with options tailored to
              your trip.
            </p>
          </div>
        </SectionContainer>

        <BookingCTABanner />
      </main>
      <Footer />
      <StickyBookButton />
    </div>
  )
}

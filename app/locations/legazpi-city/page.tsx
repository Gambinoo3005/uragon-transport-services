import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingCTABanner } from "@/components/booking-cta-banner"
import { StickyBookButton } from "@/components/sticky-book-button"
import { PageHero } from "@/components/ui/hero-components"
import { SectionContainer, SectionHeader, StandardGrid } from "@/components/ui/content-grid"
import { ContentCard } from "@/components/ui/content-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  MapPin, 
  Clock, 
  Phone, 
  Car, 
  Building, 
  Plane, 
  ShoppingBag,
  Star,
  Navigation
} from "lucide-react"

export const metadata: Metadata = {
  title: "Legazpi City Car Rental | Uragon Transport Services | Airport Transfer",
  description:
    "Car rental services in Legazpi City, Albay. Airport transfers, city tours, and transportation to Mayon Volcano. Professional drivers and reliable vehicles.",
  keywords: "Legazpi City car rental, Legazpi Airport transfer, Bicol car rental, Mayon Volcano tours, Legazpi transportation",
}

const attractions = [
  {
    name: "Legazpi Airport",
    description: "Main gateway to Bicol region",
    image: "/placeholder.jpg",
    distance: "5 km from city center",
    duration: "15 minutes",
    features: ["Airport transfer", "Meet and greet", "Flight tracking"]
  },
  {
    name: "Embarcadero de Legazpi",
    description: "Waterfront commercial complex",
    image: "/placeholder.jpg",
    distance: "City center",
    duration: "1-2 hours",
    features: ["Shopping", "Dining", "Entertainment"]
  },
  {
    name: "Legazpi Boulevard",
    description: "Scenic coastal road with Mayon view",
    image: "/placeholder.jpg",
    distance: "City center",
    duration: "30 minutes",
    features: ["Scenic drive", "Photo opportunities", "Coastal views"]
  },
  {
    name: "Pacific Mall",
    description: "Modern shopping destination",
    image: "/placeholder.jpg",
    distance: "2 km from city center",
    duration: "2-3 hours",
    features: ["Shopping", "Cinema", "Food court"]
  }
]

const services = [
  {
    name: "Airport Transfer",
    description: "Reliable pickup and drop-off from Legazpi Airport",
    duration: "15-30 minutes",
    price: "From ₱800",
    includes: ["Meet and greet", "Flight tracking", "Professional driver", "Comfortable vehicle"],
    icon: Plane
  },
  {
    name: "City Tour",
    description: "Explore Legazpi City's main attractions",
    duration: "4 hours",
    price: "From ₱1,500",
    includes: ["Professional driver", "Vehicle", "City highlights", "Photo stops"],
    icon: Building
  },
  {
    name: "Shopping Service",
    description: "Transport to malls and shopping centers",
    duration: "Flexible",
    price: "From ₱1,000",
    includes: ["Wait time included", "Professional driver", "Flexible schedule", "Multiple stops"],
    icon: ShoppingBag
  }
]

export default function LegazpiCityPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>

        {/* Hero Section */}
        <PageHero
          title="Legazpi City"
          highlight="Legazpi"
          description="The capital city of Albay and our main service hub. Experience the perfect blend of urban convenience and natural beauty, with easy access to Mayon Volcano and other Bicol attractions."
          badge="Main Office"
        />

        {/* Key Attractions */}
        <SectionContainer background="default" padding="xl">
          <SectionHeader
            title="City Highlights"
            description="Explore the best of Legazpi City with our reliable transportation"
            maxWidth="4xl"
          />

          <StandardGrid variant="4col" gap="lg">
            {attractions.map((attraction, index) => (
              <ContentCard
                key={index}
                type="image"
                image={attraction.image}
                imageAlt={`${attraction.name} in Legazpi City`}
                title={attraction.name}
                description={attraction.description}
                variant="default"
              />
            ))}
          </StandardGrid>
        </SectionContainer>

        {/* Services */}
        <SectionContainer background="muted/50" padding="xl">
          <SectionHeader
            title="Our Services in Legazpi City"
            description="Comprehensive transportation solutions for the city"
            maxWidth="4xl"
          />

          <StandardGrid variant="3col" gap="lg">
            {services.map((service, index) => (
              <ContentCard
                key={index}
                type="icon"
                icon={service.icon}
                title={service.name}
                description={service.description}
                variant="centered"
              />
            ))}
          </StandardGrid>
        </SectionContainer>

        {/* Contact Information */}
        <SectionContainer background="default" padding="xl">
          <SectionHeader
            title="Our Legazpi City Office"
            description="Visit our main office or contact us for your transportation needs"
            maxWidth="4xl"
          />

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <ContentCard
                type="feature"
                title="Office Location"
                description="123 Rizal Street, Legazpi City, Albay"
                variant="default"
              />

              <ContentCard
                type="feature"
                title="Quick Contact"
                description="Ready to book your Legazpi City transportation? Contact us now for the best rates and service."
                variant="default"
              />
            </div>
          </div>
        </SectionContainer>

        <BookingCTABanner />
      </main>
      <Footer />
      <StickyBookButton />
    </div>
  )
}

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
  Mountain, 
  Camera, 
  Users,
  Star,
  Navigation
} from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Albay Car Rental | Uragon Transport Services | Mayon Volcano Tours",
  description:
    "Explore Albay with our car rental services. Visit Mayon Volcano, Cagsawa Ruins, and other attractions. Professional drivers and well-maintained vehicles available.",
  keywords: "Albay car rental, Mayon Volcano tours, Cagsawa Ruins, Bicol car rental, Albay transportation",
}

const attractions = [
  {
    name: "Mayon Volcano",
    description: "The world's most perfect cone volcano",
    image: "/mayon_hero.jpg",
    distance: "15 km from Legazpi",
    duration: "Half day tour",
    features: ["Volcano viewing", "Photo opportunities", "Nature trails"]
  },
  {
    name: "Cagsawa Ruins",
    description: "Historic church ruins with Mayon backdrop",
    image: "/placeholder.jpg",
    distance: "8 km from Legazpi",
    duration: "1-2 hours",
    features: ["Historical site", "Volcano view", "Photography"]
  },
  {
    name: "Lignon Hill Nature Park",
    description: "Panoramic view of Mayon Volcano and Legazpi",
    image: "/placeholder.jpg",
    distance: "5 km from Legazpi",
    duration: "1-2 hours",
    features: ["Scenic views", "Nature walk", "Zipline"]
  },
  {
    name: "Daraga Church",
    description: "Historic church with stunning architecture",
    image: "/placeholder.jpg",
    distance: "8 km from Legazpi",
    duration: "30 minutes",
    features: ["Historical site", "Architecture", "Religious site"]
  },
  {
    name: "Sumlang Lake",
    description: "Peaceful lake with Mayon Volcano reflection",
    image: "/placeholder.jpg",
    distance: "12 km from Legazpi",
    duration: "1-2 hours",
    features: ["Lake views", "Boat rides", "Photography"]
  }
]

const services = [
  {
    name: "Mayon Volcano Tour",
    description: "Full day tour of Mayon Volcano and surrounding attractions",
    duration: "8 hours",
    price: "From ₱2,500",
    includes: ["Professional driver", "Vehicle", "Tour guide", "All entrance fees"],
    icon: Mountain
  },
  {
    name: "City Tour",
    description: "Explore Legazpi City and nearby attractions",
    duration: "4 hours",
    price: "From ₱1,500",
    includes: ["Professional driver", "Vehicle", "City highlights", "Photo stops"],
    icon: Camera
  },
  {
    name: "Group Transportation",
    description: "Transport for families and groups",
    duration: "Flexible",
    price: "From ₱2,000",
    includes: ["Spacious vehicle", "Professional driver", "Flexible itinerary", "Group discounts"],
    icon: Users
  }
]

const vehicleOptions = [
  {
    name: "Toyota Vios",
    type: "Sedan",
    capacity: "4 passengers",
    price: "₱1,500/day",
    features: ["Air conditioning", "Manual transmission", "Fuel efficient"]
  },
  {
    name: "Toyota Innova",
    type: "MPV",
    capacity: "7 passengers",
    price: "₱2,000/day",
    features: ["Air conditioning", "Automatic transmission", "Spacious interior"]
  },
  {
    name: "Toyota Fortuner",
    type: "SUV",
    capacity: "7 passengers",
    price: "₱2,500/day",
    features: ["Air conditioning", "Automatic transmission", "High ground clearance"]
  }
]

export default function AlbayPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>

        {/* Hero Section */}
        <PageHero
          title="Explore Albay"
          highlight="Albay"
          description="Discover the beauty of Albay province, home to the majestic Mayon Volcano. Our car rental services make it easy to explore all the attractions this beautiful province has to offer."
          badge="Popular Destination"
        />

        {/* Key Attractions */}
        <SectionContainer background="default" padding="xl">
          <SectionHeader
            title="Must-Visit Attractions"
            description="Explore the best that Albay has to offer with our reliable transportation"
            maxWidth="4xl"
          />

          <StandardGrid variant="3col" gap="lg">
            {attractions.map((attraction, index) => (
              <ContentCard
                key={index}
                type="image"
                image={attraction.image}
                imageAlt={`${attraction.name} in Albay`}
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
            title="Our Services in Albay"
            description="Choose from our range of transportation services"
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

        {/* Vehicle Options */}
        <SectionContainer background="default" padding="xl">
          <SectionHeader
            title="Recommended Vehicles"
            description="Choose the perfect vehicle for your Albay adventure"
            maxWidth="4xl"
          />

          <StandardGrid variant="3col" gap="lg">
            {vehicleOptions.map((vehicle, index) => (
              <ContentCard
                key={index}
                type="feature"
                title={vehicle.name}
                description={`${vehicle.type} - ${vehicle.capacity}`}
                variant="centered"
              />
            ))}
          </StandardGrid>
        </SectionContainer>

        {/* Contact Information */}
        <SectionContainer background="muted/50" padding="xl">
          <SectionHeader
            title="Ready to Explore Albay?"
            description="Contact us to book your Albay adventure today"
            maxWidth="2xl"
          />

          <div className="max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Phone className="h-5 w-5 text-primary" />
              <a 
                href="tel:+639159234867" 
                className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
              >
                +63 915 923 4867
              </a>
            </div>
            <p className="text-muted-foreground mb-8">
              Call us to discuss your Albay itinerary and get the best rates for your trip
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Book Now
              </Button>
              <Button size="lg" variant="outline">
                View Fleet
              </Button>
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

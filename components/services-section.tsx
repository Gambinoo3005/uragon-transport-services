import { ContentCard } from "@/components/ui/content-card"
import { SectionContainer, SectionHeader, StandardGrid } from "@/components/ui/content-grid"
import { Button } from "@/components/ui/button"
import { Car, UserCheck, MapPin, Truck, Heart, Plane, Briefcase } from "lucide-react"
import Link from "next/link"

// 4 Most Popular Services for Homepage
const popularServices = [
  {
    id: "self-drive",
    title: "Self-Drive Rentals",
    description: "Rent a car and drive yourself with unlimited mileage within declared province. Perfect for exploring Bicol at your own pace.",
    icon: Car,
    href: "/services/self-drive",
  },
  {
    id: "with-driver",
    title: "With-Driver Service",
    description: "Professional drivers for your convenience. Perfect for business trips, tours, or when you prefer to sit back and relax.",
    icon: UserCheck,
    href: "/services/with-driver",
  },
  {
    id: "pickup-dropoff",
    title: "Pick-Up & Drop-Off",
    description: "Convenient pick up and drop off service to your preferred location. Available for all our vehicles with reliable timing.",
    icon: MapPin,
    href: "/services/pick-up-drop-off",
  },
  {
    id: "tours",
    title: "Tours (Local & Out-of-Town)",
    description: "Comprehensive tour packages for local Bicol destinations and out-of-town trips with experienced drivers.",
    icon: Plane,
    href: "/services/tours",
  },
]

export function ServicesSection() {
  return (
    <SectionContainer background="muted/30">
      <SectionHeader
        title="Our Services"
        description="Comprehensive transportation solutions for all your needs"
        highlight="Services"
      />

      <StandardGrid variant="2col" gap="md" className="mb-8">
        {popularServices.map((service) => (
          <ContentCard
            key={service.id}
            type="icon"
            icon={service.icon}
            title={service.title}
            description={service.description}
            href={service.href}
            buttonText="Learn More"
            variant="horizontal"
          />
        ))}
      </StandardGrid>

      <div className="text-center">
        <Link href="/services">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
          >
            View All Services
          </Button>
        </Link>
      </div>
    </SectionContainer>
  )
}


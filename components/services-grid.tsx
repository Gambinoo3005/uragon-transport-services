import { ContentCard } from "@/components/ui/content-card"
import { SectionContainer, SectionHeader, FeaturedGrid } from "@/components/ui/content-grid"
import { 
  Car, 
  UserCheck, 
  MapPin, 
  Truck, 
  Heart, 
  Plane, 
  Briefcase
} from "lucide-react"

const services = [
  {
    id: "self-drive",
    title: "Self-Drive Rentals",
    description: "Enjoy the freedom of unlimited mileage within your declared province/destination. Choose from compact cars to MPVs and SUVs, all well-maintained and insured. Ideal for day trips, errands, and weekend escapes.",
    icon: Car,
    href: "/services/self-drive",
  },
  {
    id: "with-driver",
    title: "With-Driver (Chauffeur) Service",
    description: "Ride with a courteous local driver who knows the roads, parking, and best routes. Perfect for airport runs, business meetings, and sightseeing when you want to relax between stops.",
    icon: UserCheck,
    href: "/services/with-driver",
  },
  {
    id: "transfers",
    title: "Pick-Up & Drop-Off (Airport/City Transfers)",
    description: "Seamless arrivals and departures for solo travelers, families, or teams. We monitor timing and coordinate meet-ups to minimize waiting and detours.",
    icon: MapPin,
    href: "/services/pick-up-drop-off",
  },
  {
    id: "delivery",
    title: "Vehicle Delivery",
    description: "Have your chosen unit delivered to your location for maximum convenience—great for busy schedules and early starts.",
    icon: Truck,
    href: "/services/delivery",
  },
  {
    id: "bridal",
    title: "Bridal Car Service",
    description: "Make the day effortless with a clean, elegant unit and professional handling. Coordinate routes, timing, and photo ops with our team.",
    icon: Heart,
    href: "/services/bridal-service",
  },
  {
    id: "tours",
    title: "Private Tours (Local & Out-of-Town)",
    description: "See Mayon and the Bicol highlights your way—custom itineraries, stops, and pacing. Available self-drive or with a driver.",
    icon: Plane,
    href: "/services/tours",
  },
  {
    id: "business",
    title: "Business Trips & Corporate Use",
    description: "Consistent, reliable vehicles for field work, client visits, and projects. Ask about monthly plans and company arrangements.",
    icon: Briefcase,
    href: "/services/business-trips",
  },
]

export function ServicesGrid() {
  const regularItems = services.map((service, index) => {
    const isLastItem = index === services.length - 1
    return (
      <ContentCard
        key={service.id}
        type="icon"
        icon={service.icon}
        title={service.title}
        description={service.description}
        href={service.href}
        buttonText="Learn More"
        variant="horizontal"
        className={isLastItem ? 'lg:col-start-2' : ''}
      />
    )
  })

  return (
    <SectionContainer background="default" padding="xl">
      <SectionHeader
        title="What We Offer"
        highlight="Offer"
      />

      <FeaturedGrid regularItems={regularItems} gap="md" />
    </SectionContainer>
  )
}

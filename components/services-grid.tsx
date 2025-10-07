import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Car, 
  UserCheck, 
  MapPin, 
  Truck, 
  Heart, 
  Plane, 
  Briefcase
} from "lucide-react"
import Link from "next/link"

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
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              What We <span className="text-primary">Offer</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon
              const isLastItem = index === services.length - 1
              return (
                <Card 
                  key={service.id} 
                  className={`h-full hover:shadow-lg transition-shadow group ${
                    isLastItem ? 'lg:col-start-2' : ''
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-2">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col h-full">
                    <p className="text-muted-foreground mb-6 flex-grow text-pretty">
                      {service.description}
                    </p>
                    
                    <Link href={service.href}>
                      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

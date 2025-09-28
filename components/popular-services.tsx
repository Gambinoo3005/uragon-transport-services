import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plane, Calendar, UserCheck, MapPin } from "lucide-react"

const services = [
  {
    id: 1,
    title: "Self Drive Rental",
    description:
      "Rent a car and drive yourself with unlimited mileage within declared province. Perfect for exploring Bicol at your own pace.",
    icon: Calendar,
    features: ["Unlimited Mileage", "24hrs Rental", "Comprehensive Insurance", "Same Gas Level Policy"],
    href: "/services/self-drive",
  },
  {
    id: 2,
    title: "With Driver Service",
    description:
      "Professional drivers for your convenience. Perfect for business trips, tours, or when you prefer to sit back and relax.",
    icon: UserCheck,
    features: ["Professional Drivers", "Local Knowledge", "Business Trips", "Tours"],
    href: "/services/with-driver",
  },
  {
    id: 3,
    title: "Pick Up & Drop Off",
    description: "Convenient pick up and drop off service to your preferred location. Available for all our vehicles.",
    icon: MapPin,
    features: ["Flexible Locations", "All Vehicles", "Convenient Service", "Reliable Timing"],
    href: "/services/pickup-dropoff",
  },
  {
    id: 4,
    title: "Bridal Service",
    description: "Special wedding transportation service with elegant vehicles and professional drivers for your special day.",
    icon: Plane,
    features: ["Elegant Vehicles", "Professional Drivers", "Wedding Packages", "Special Occasions"],
    href: "/services/bridal",
  },
]

export function PopularServices() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Popular Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            From airport transfers to complete tour packages, we offer comprehensive transportation solutions across
            Bicol.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <Card key={service.id} className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow text-pretty">{service.description}</p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent } from "@/components/ui/card"
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
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive transportation solutions for all your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {popularServices.map((service) => {
              const IconComponent = service.icon
              return (
                <Card key={service.id} className="h-full hover:shadow-lg transition-shadow group">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 flex-grow">
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
        </div>
      </div>
    </section>
  )
}


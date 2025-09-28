import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plane, Calendar, UserCheck, MapPin } from "lucide-react"
import Link from "next/link"

const services = [
  {
    id: "self-drive",
    title: "Self Drive Rental",
    description:
      "Rent a car and drive yourself with unlimited mileage within declared province. Perfect for exploring Bicol at your own pace with 24hrs rental.",
    icon: Calendar,
    image: "/toyota-vios-sedan-car-rental.jpg",
    features: ["Unlimited Mileage", "24hrs Rental", "Comprehensive Insurance", "Same Gas Level Policy"],
    startingPrice: "₱1,800",
    popular: true,
    href: "/services/self-drive",
  },
  {
    id: "with-driver",
    title: "With Driver Service",
    description:
      "Professional drivers for your convenience. Perfect for business trips, tours, or when you prefer to sit back and relax.",
    icon: UserCheck,
    image: "/toyota-innova-mpv-car-rental.jpg",
    features: ["Professional Drivers", "Local Knowledge", "Business Trips", "Tours"],
    startingPrice: "₱3,500",
    popular: true,
    href: "/services/with-driver",
  },
  {
    id: "pickup-dropoff",
    title: "Pick Up & Drop Off",
    description:
      "Convenient pick up and drop off service to your preferred location. Available for all our vehicles with reliable timing.",
    icon: MapPin,
    image: "/honda-city-sedan-car-rental.jpg",
    features: ["Flexible Locations", "All Vehicles", "Convenient Service", "Reliable Timing"],
    startingPrice: "₱500",
    popular: false,
    href: "/services/pickup-dropoff",
  },
  {
    id: "delivery",
    title: "Delivery Service",
    description:
      "Reliable delivery service for your packages and goods. Professional handling and timely delivery across Bicol region.",
    icon: Plane,
    image: "/hyundai-h350-van-car-rental.jpg",
    features: ["Professional Handling", "Timely Delivery", "Bicol Coverage", "Package Protection"],
    startingPrice: "₱800",
    popular: false,
    href: "/services/delivery",
  },
  {
    id: "bridal",
    title: "Bridal Service",
    description:
      "Special wedding transportation service with elegant vehicles and professional drivers for your special day.",
    icon: UserCheck,
    image: "/toyota-fortuner-suv-car-rental.jpg",
    features: ["Elegant Vehicles", "Professional Drivers", "Wedding Packages", "Special Occasions"],
    startingPrice: "₱4,000",
    popular: false,
    href: "/services/bridal",
  },
  {
    id: "tours",
    title: "Tour Packages",
    description:
      "Discover Bicol's beauty with our curated tour packages. Mayon Volcano, Caramoan, Donsol whale sharks, and more destinations.",
    icon: MapPin,
    image: "/modern-car-on-scenic-bicol-road-with-mayon-volcano.jpg",
    features: ["Curated Itineraries", "Local Guides", "All-Inclusive", "Custom Tours"],
    startingPrice: "₱5,000",
    popular: false,
    href: "/services/tours",
  },
]

export function ServicesGrid() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            Complete Transportation Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Whether you need a quick airport transfer or a comprehensive tour package, we have the perfect service for
            your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <Card key={service.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={`${service.title} - Uragon Tours`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {service.popular && (
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">Popular</Badge>
                  )}
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm p-2 rounded-full">
                    <IconComponent className="h-5 w-5 text-primary" />
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-semibold text-foreground">{service.title}</h3>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">Starting from</div>
                      <div className="text-lg font-bold text-primary">{service.startingPrice}</div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed text-pretty">{service.description}</p>

                  <div className="space-y-3 mb-6">
                    <div className="text-sm font-medium text-foreground">Key Features:</div>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Link href={service.href} className="flex-1">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                        Learn More
                      </Button>
                    </Link>
                    <Button variant="outline" className="bg-transparent">
                      Get Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

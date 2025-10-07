import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingCTABanner } from "@/components/booking-cta-banner"
import { StickyBookButton } from "@/components/sticky-book-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Phone, Car, Users, Star } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Service Locations | Uragon Transport Services | Bicol Car Rental Locations",
  description:
    "Explore our service locations across Bicol. We provide car rental services in Albay, Legazpi City, Naga, and other key locations in the region.",
  keywords: "Bicol car rental locations, Albay car rental, Legazpi car rental, Naga car rental, service areas",
}

const locations = [
  {
    name: "Albay",
    slug: "albay",
    description: "The heart of Bicol region, home to the majestic Mayon Volcano",
    image: "/mayon_hero.jpg",
    features: [
      "Mayon Volcano tours",
      "Cagsawa Ruins",
      "Lignon Hill Nature Park",
      "Daraga Church",
      "Sumlang Lake"
    ],
    popular: true,
    distance: "Main service area",
    operatingHours: "6:00 AM - 8:00 PM"
  },
  {
    name: "Legazpi City",
    slug: "legazpi-city",
    description: "The capital city of Albay and our main service hub",
    image: "/placeholder.jpg",
    features: [
      "Legazpi Airport",
      "Embarcadero de Legazpi",
      "Legazpi Boulevard",
      "Pacific Mall",
      "City proper"
    ],
    popular: true,
    distance: "Main office location",
    operatingHours: "6:00 AM - 8:00 PM"
  },
  {
    name: "Malilipot",
    slug: "malilipot",
    description: "A peaceful town known for its hot springs and natural beauty",
    image: "/placeholder.jpg",
    features: [
      "Malilipot Hot Springs",
      "Quitinday Green Hills",
      "Joroan Church",
      "Natural attractions",
      "Rural landscapes"
    ],
    popular: false,
    distance: "15 km from Legazpi",
    operatingHours: "7:00 AM - 7:00 PM"
  },
  {
    name: "Daraga",
    slug: "daraga",
    description: "Historic town with stunning views of Mayon Volcano",
    image: "/placeholder.jpg",
    features: [
      "Daraga Church",
      "Cagsawa Ruins",
      "Mayon Skyline View",
      "Historical sites",
      "Volcano viewing"
    ],
    popular: true,
    distance: "8 km from Legazpi",
    operatingHours: "7:00 AM - 7:00 PM"
  },
  {
    name: "Tabaco",
    slug: "tabaco",
    description: "A coastal city known for its port and beautiful beaches",
    image: "/placeholder.jpg",
    features: [
      "Tabaco Port",
      "San Miguel Island",
      "Beach resorts",
      "Port area",
      "Coastal attractions"
    ],
    popular: false,
    distance: "25 km from Legazpi",
    operatingHours: "7:00 AM - 7:00 PM"
  },
  {
    name: "Camalig",
    slug: "camalig",
    description: "Gateway to Mayon Volcano with rich agricultural heritage",
    image: "/placeholder.jpg",
    features: [
      "Mayon Volcano base",
      "Agricultural areas",
      "Rural communities",
      "Volcano trekking",
      "Farm tours"
    ],
    popular: false,
    distance: "20 km from Legazpi",
    operatingHours: "7:00 AM - 7:00 PM"
  }
]

const services = [
  {
    name: "Airport Transfer",
    description: "Pickup and drop-off from Legazpi Airport",
    icon: Car
  },
  {
    name: "City Tours",
    description: "Explore the best attractions in each location",
    icon: MapPin
  },
  {
    name: "Group Transportation",
    description: "Transport for families and groups",
    icon: Users
  },
  {
    name: "Long Distance",
    description: "Inter-city and inter-province travel",
    icon: Car
  }
]

export default function LocationsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Service Locations
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide car rental services across key locations in Bicol region. 
              From the bustling city of Legazpi to the peaceful towns of Albay, 
              we're here to serve your transportation needs.
            </p>
          </div>
        </section>

        {/* Locations Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Explore Our Locations</h2>
              <p className="text-lg text-muted-foreground">
                Click on any location to learn more about our services in that area
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {locations.map((location, index) => (
                <Link key={index} href={`/locations/${location.slug}`}>
                  <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <div className="relative">
                      <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                          <MapPin className="h-12 w-12 text-primary/50" />
                        </div>
                      </div>
                      {location.popular && (
                        <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
                          <Star className="h-3 w-3 mr-1" />
                          Popular
                        </Badge>
                      )}
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {location.name}
                      </CardTitle>
                      <CardDescription>{location.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>{location.distance}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{location.operatingHours}</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-sm mb-2">Key Attractions:</h4>
                          <div className="flex flex-wrap gap-1">
                            {location.features.slice(0, 3).map((feature, featureIndex) => (
                              <Badge key={featureIndex} variant="secondary" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                            {location.features.length > 3 && (
                              <Badge variant="secondary" className="text-xs">
                                +{location.features.length - 3} more
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Services Available */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Services Available in All Locations</h2>
              <p className="text-lg text-muted-foreground">
                We provide comprehensive transportation services across all our locations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{service.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Coverage Map */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Service Coverage</h2>
              <p className="text-lg text-muted-foreground">
                Our service area covers the entire Bicol region with focus on Albay province
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-8">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-16 w-16 text-primary/50 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-foreground mb-2">Interactive Map Coming Soon</h3>
                      <p className="text-muted-foreground">
                        We're working on an interactive map to show our service coverage and locations
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Need Service in Your Area?</h2>
              <p className="text-lg text-muted-foreground">
                Contact us to inquire about service availability in your specific location
              </p>
            </div>

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
              <p className="text-muted-foreground">
                Call us to discuss your transportation needs and we'll help you find the best solution
              </p>
            </div>
          </div>
        </section>

        <BookingCTABanner />
      </main>
      <Footer />
      <StickyBookButton />
    </div>
  )
}

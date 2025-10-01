import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingCTABanner } from "@/components/booking-cta-banner"
import { StickyBookButton } from "@/components/sticky-book-button"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  MapPin, 
  Clock, 
  Phone, 
  Car, 
  Mountain, 
  Church, 
  Camera,
  Star,
  Navigation
} from "lucide-react"

export const metadata: Metadata = {
  title: "Daraga Car Rental | Uragon Transport Services | Cagsawa Ruins Tours",
  description:
    "Car rental services in Daraga, Albay. Visit Cagsawa Ruins, Daraga Church, and enjoy stunning Mayon Volcano views. Professional drivers and reliable vehicles.",
  keywords: "Daraga car rental, Cagsawa Ruins tours, Daraga Church, Mayon Volcano views, Bicol car rental",
}

const attractions = [
  {
    name: "Cagsawa Ruins",
    description: "Historic church ruins with Mayon Volcano backdrop",
    image: "/placeholder.jpg",
    distance: "8 km from Legazpi",
    duration: "1-2 hours",
    features: ["Historical site", "Volcano view", "Photography", "Museum"]
  },
  {
    name: "Daraga Church",
    description: "Historic church with stunning architecture",
    image: "/placeholder.jpg",
    distance: "8 km from Legazpi",
    duration: "30 minutes",
    features: ["Historical site", "Architecture", "Religious site", "Heritage"]
  },
  {
    name: "Mayon Skyline View",
    description: "Perfect vantage point for Mayon Volcano",
    image: "/placeholder.jpg",
    distance: "10 km from Legazpi",
    duration: "1 hour",
    features: ["Volcano view", "Photo opportunities", "Scenic drive", "Panoramic views"]
  }
]

const services = [
  {
    name: "Cagsawa Ruins Tour",
    description: "Explore the historic ruins with Mayon backdrop",
    duration: "2 hours",
    price: "From ₱1,200",
    includes: ["Professional driver", "Vehicle", "Entrance fees", "Historical insights"],
    icon: Church
  },
  {
    name: "Heritage Tour",
    description: "Visit Daraga Church and historical sites",
    duration: "1.5 hours",
    price: "From ₱1,000",
    includes: ["Professional driver", "Vehicle", "Cultural guide", "Historical sites"],
    icon: Camera
  },
  {
    name: "Volcano Viewing Tour",
    description: "Best spots for Mayon Volcano photography",
    duration: "2 hours",
    price: "From ₱1,500",
    includes: ["Professional driver", "Vehicle", "Photo stops", "Scenic routes"],
    icon: Mountain
  }
]

export default function DaragaPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="container mx-auto px-4 py-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/locations">Locations</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Daraga</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Badge className="bg-primary text-primary-foreground">
                    <Star className="h-3 w-3 mr-1" />
                    Popular Destination
                  </Badge>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Daraga
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  A historic town with stunning views of Mayon Volcano. Home to the famous 
                  Cagsawa Ruins and Daraga Church, this charming town offers the perfect 
                  blend of history, culture, and natural beauty.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Book Now
                  </Button>
                  <Button size="lg" variant="outline">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Us
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <Church className="h-16 w-16 text-primary/50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Attractions */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Historic Attractions</h2>
              <p className="text-lg text-muted-foreground">
                Explore the rich history and stunning views of Daraga
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {attractions.map((attraction, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      <Mountain className="h-12 w-12 text-primary/50" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{attraction.name}</CardTitle>
                    <CardDescription>{attraction.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Navigation className="h-4 w-4" />
                        <span>{attraction.distance}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{attraction.duration}</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm mb-2">Features:</h4>
                        <div className="flex flex-wrap gap-1">
                          {attraction.features.map((feature, featureIndex) => (
                            <Badge key={featureIndex} variant="secondary" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Services in Daraga</h2>
              <p className="text-lg text-muted-foreground">
                Historical and cultural transportation experiences
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.name}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-2xl font-bold text-primary">{service.price}</div>
                      <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{service.duration}</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm mb-2">Includes:</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {service.includes.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-center space-x-2">
                              <span className="text-primary">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Explore Daraga?</h2>
              <p className="text-lg text-muted-foreground">
                Contact us to book your historical and cultural journey
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
              <p className="text-muted-foreground mb-8">
                Call us to plan your Daraga heritage tour
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
          </div>
        </section>

        <BookingCTABanner />
      </main>
      <Footer />
      <StickyBookButton />
    </div>
  )
}

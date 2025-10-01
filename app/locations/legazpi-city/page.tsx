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
                <BreadcrumbPage>Legazpi City</BreadcrumbPage>
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
                    Main Office
                  </Badge>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Legazpi City
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  The capital city of Albay and our main service hub. Experience the perfect 
                  blend of urban convenience and natural beauty, with easy access to Mayon 
                  Volcano and other Bicol attractions.
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
                    <Building className="h-16 w-16 text-primary/50" />
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
              <h2 className="text-3xl font-bold text-foreground mb-4">City Highlights</h2>
              <p className="text-lg text-muted-foreground">
                Explore the best of Legazpi City with our reliable transportation
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {attractions.map((attraction, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      <Building className="h-12 w-12 text-primary/50" />
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
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Services in Legazpi City</h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive transportation solutions for the city
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
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Legazpi City Office</h2>
              <p className="text-lg text-muted-foreground">
                Visit our main office or contact us for your transportation needs
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Office Location</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-5 w-5 text-primary" />
                        <span>123 Rizal Street, Legazpi City, Albay</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-5 w-5 text-primary" />
                        <span>6:00 AM - 8:00 PM (Daily)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="h-5 w-5 text-primary" />
                        <a href="tel:+639159234867" className="text-primary hover:underline">
                          +63 915 923 4867
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Quick Contact</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">
                        Ready to book your Legazpi City transportation? Contact us now for the best rates and service.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <Button className="bg-primary hover:bg-primary/90">
                          Book Now
                        </Button>
                        <Button variant="outline">
                          <Phone className="h-4 w-4 mr-2" />
                          Call Us
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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

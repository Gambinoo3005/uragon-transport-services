import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingCTABanner } from "@/components/booking-cta-banner"
import { StickyBookButton } from "@/components/sticky-book-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
                  Explore Albay
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Discover the beauty of Albay province, home to the majestic Mayon Volcano. 
                  Our car rental services make it easy to explore all the attractions this 
                  beautiful province has to offer.
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
                  <Image
                    src="/mayon_hero.jpg"
                    alt="Mayon Volcano in Albay"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Attractions */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Must-Visit Attractions</h2>
              <p className="text-lg text-muted-foreground">
                Explore the best that Albay has to offer with our reliable transportation
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Services in Albay</h2>
              <p className="text-lg text-muted-foreground">
                Choose from our range of transportation services
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

        {/* Vehicle Options */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Recommended Vehicles</h2>
              <p className="text-lg text-muted-foreground">
                Choose the perfect vehicle for your Albay adventure
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {vehicleOptions.map((vehicle, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <CardTitle className="text-xl">{vehicle.name}</CardTitle>
                    <CardDescription>{vehicle.type}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-2xl font-bold text-primary">{vehicle.price}</div>
                      <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>{vehicle.capacity}</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm mb-2">Features:</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {vehicle.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center space-x-2">
                              <span className="text-primary">•</span>
                              <span>{feature}</span>
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
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Explore Albay?</h2>
              <p className="text-lg text-muted-foreground">
                Contact us to book your Albay adventure today
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
          </div>
        </section>

        <BookingCTABanner />
      </main>
      <Footer />
      <StickyBookButton />
    </div>
  )
}

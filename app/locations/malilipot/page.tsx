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
  Droplets, 
  Church,
  Star,
  Navigation
} from "lucide-react"

export const metadata: Metadata = {
  title: "Malilipot Car Rental | Uragon Transport Services | Hot Springs Tours",
  description:
    "Car rental services in Malilipot, Albay. Visit hot springs, Quitinday Green Hills, and Joroan Church. Professional drivers and reliable vehicles available.",
  keywords: "Malilipot car rental, hot springs tours, Quitinday Green Hills, Joroan Church, Bicol car rental",
}

const attractions = [
  {
    name: "Malilipot Hot Springs",
    description: "Natural hot springs for relaxation",
    image: "/placeholder.jpg",
    distance: "15 km from Legazpi",
    duration: "2-3 hours",
    features: ["Hot springs", "Relaxation", "Natural therapy"]
  },
  {
    name: "Quitinday Green Hills",
    description: "Rolling hills with scenic views",
    image: "/placeholder.jpg",
    distance: "18 km from Legazpi",
    duration: "1-2 hours",
    features: ["Scenic views", "Photo opportunities", "Nature walk"]
  },
  {
    name: "Joroan Church",
    description: "Historic church with beautiful architecture",
    image: "/placeholder.jpg",
    distance: "12 km from Legazpi",
    duration: "30 minutes",
    features: ["Historical site", "Architecture", "Religious site"]
  }
]

const services = [
  {
    name: "Hot Springs Tour",
    description: "Relaxing day at Malilipot Hot Springs",
    duration: "4 hours",
    price: "From ₱1,800",
    includes: ["Professional driver", "Vehicle", "Entrance fees", "Wait time"],
    icon: Droplets
  },
  {
    name: "Nature Tour",
    description: "Explore Quitinday Green Hills and surrounding areas",
    duration: "3 hours",
    price: "From ₱1,500",
    includes: ["Professional driver", "Vehicle", "Photo stops", "Nature guide"],
    icon: Mountain
  },
  {
    name: "Heritage Tour",
    description: "Visit historical sites including Joroan Church",
    duration: "2 hours",
    price: "From ₱1,200",
    includes: ["Professional driver", "Vehicle", "Historical sites", "Cultural insights"],
    icon: Church
  }
]

export default function MalilipotPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>

        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-br from-primary/10 via-primary/15 to-primary/20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Malilipot
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  A peaceful town known for its natural hot springs and beautiful landscapes. 
                  Escape the city and immerse yourself in the therapeutic waters and scenic 
                  beauty that Malilipot has to offer.
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
                    <Droplets className="h-16 w-16 text-primary/50" />
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
              <h2 className="text-3xl font-bold text-foreground mb-4">Natural Attractions</h2>
              <p className="text-lg text-muted-foreground">
                Discover the natural beauty and therapeutic benefits of Malilipot
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
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Services in Malilipot</h2>
              <p className="text-lg text-muted-foreground">
                Relaxing and therapeutic transportation experiences
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
              <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Relax in Malilipot?</h2>
              <p className="text-lg text-muted-foreground">
                Contact us to book your therapeutic getaway
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
                Call us to plan your relaxing Malilipot experience
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

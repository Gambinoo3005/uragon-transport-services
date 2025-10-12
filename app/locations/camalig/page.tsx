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
  Trees, 
  Wheat,
  Star,
  Navigation
} from "lucide-react"

export const metadata: Metadata = {
  title: "Camalig Car Rental | Uragon Transport Services | Mayon Base Tours",
  description:
    "Car rental services in Camalig, Albay. Gateway to Mayon Volcano with rich agricultural heritage. Professional drivers and reliable vehicles available.",
  keywords: "Camalig car rental, Mayon Volcano base, agricultural tours, volcano trekking, Bicol car rental",
}

const attractions = [
  {
    name: "Mayon Volcano Base",
    description: "Gateway to Mayon Volcano trekking and exploration",
    image: "/placeholder.jpg",
    distance: "20 km from Legazpi",
    duration: "2-3 hours",
    features: ["Volcano access", "Trekking base", "Nature trails", "Adventure activities"]
  },
  {
    name: "Agricultural Areas",
    description: "Rich farming communities and agricultural landscapes",
    image: "/placeholder.jpg",
    distance: "15-25 km from Legazpi",
    duration: "1-2 hours",
    features: ["Farm tours", "Agricultural heritage", "Rural landscapes", "Local produce"]
  },
  {
    name: "Rural Communities",
    description: "Traditional Bicolano villages and communities",
    image: "/placeholder.jpg",
    distance: "18-30 km from Legazpi",
    duration: "Half day",
    features: ["Cultural immersion", "Local traditions", "Community visits", "Authentic experiences"]
  }
]

const services = [
  {
    name: "Volcano Trekking",
    description: "Transport to Mayon Volcano base for trekking",
    duration: "4 hours",
    price: "From ₱2,000",
    includes: ["Professional driver", "Vehicle", "Trekking base access", "Safety equipment"],
    icon: Mountain
  },
  {
    name: "Agricultural Tour",
    description: "Explore farming communities and agricultural areas",
    duration: "3 hours",
    price: "From ₱1,500",
    includes: ["Professional driver", "Vehicle", "Farm visits", "Local guide"],
    icon: Wheat
  },
  {
    name: "Rural Community Tour",
    description: "Visit traditional Bicolano villages",
    duration: "4 hours",
    price: "From ₱1,800",
    includes: ["Professional driver", "Vehicle", "Community visits", "Cultural insights"],
    icon: Trees
  }
]

export default function CamaligPage() {
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
                  Camalig
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Gateway to Mayon Volcano with rich agricultural heritage. Camalig offers 
                  a unique blend of adventure and rural charm, perfect for those seeking 
                  authentic Bicolano experiences and volcano exploration.
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
                    <Mountain className="h-16 w-16 text-primary/50" />
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
              <h2 className="text-3xl font-bold text-foreground mb-4">Rural & Adventure Attractions</h2>
              <p className="text-lg text-muted-foreground">
                Discover the agricultural heritage and adventure opportunities of Camalig
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
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Services in Camalig</h2>
              <p className="text-lg text-muted-foreground">
                Adventure and cultural transportation experiences
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
              <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Explore Camalig?</h2>
              <p className="text-lg text-muted-foreground">
                Contact us to book your rural and adventure experience
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
                Call us to plan your Camalig adventure and cultural tour
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

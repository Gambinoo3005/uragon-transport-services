import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingCTABanner } from "@/components/booking-cta-banner"
import { StickyBookButton } from "@/components/sticky-book-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Gauge, 
  CheckCircle, 
  Info, 
  AlertCircle,
  MapPin,
  Clock
} from "lucide-react"

export const metadata: Metadata = {
  title: "Mileage Policy | Uragon Transport Services | Unlimited Mileage Car Rental",
  description:
    "Learn about our mileage policy for car rentals. Unlimited mileage for self-drive rentals with no restrictions on distance traveled within Luzon.",
  keywords: "unlimited mileage car rental, mileage policy, car rental distance, Bicol car rental mileage",
}

const mileagePolicyPoints = [
  {
    title: "Unlimited Mileage",
    description: "No mileage restrictions for self-drive rentals",
    details: [
      "Drive as much as you want within Luzon",
      "No additional charges for distance traveled",
      "Perfect for long road trips and exploration",
      "Mileage is tracked for vehicle maintenance only"
    ],
    icon: CheckCircle
  },
  {
    title: "Geographic Coverage",
    description: "Coverage area for unlimited mileage",
    details: [
      "All of Luzon island",
      "Inter-province travel allowed",
      "City-to-city travel permitted",
      "Rural and urban areas included"
    ],
    icon: MapPin
  },
  {
    title: "Mileage Tracking",
    description: "How we track and monitor mileage",
    details: [
      "Starting mileage recorded at pickup",
      "Ending mileage recorded at return",
      "Total distance calculated automatically",
      "Mileage data used for maintenance scheduling"
    ],
    icon: Gauge
  },
  {
    title: "Restrictions",
    description: "Limited restrictions on vehicle usage",
    details: [
      "No off-road driving",
      "No racing or competitive driving",
      "No towing without permission",
      "No commercial passenger transport"
    ],
    icon: AlertCircle
  }
]

const benefits = [
  "No surprise charges for distance traveled",
  "Freedom to explore without limits",
  "Perfect for long-distance trips",
  "Cost-effective for extended rentals",
  "No need to calculate mileage costs"
]

const exceptions = [
  "With-driver service includes fuel and mileage",
  "Inter-island travel requires special permission",
  "Commercial use may have different terms",
  "Off-road driving is not permitted"
]

export default function MileagePolicyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Gauge className="h-8 w-8 text-primary" />
              <Badge className="bg-green-600">Unlimited Mileage</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Mileage Policy
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enjoy unlimited mileage with our self-drive rentals. Drive as much as you want 
              within Luzon without worrying about distance charges or restrictions.
            </p>
          </div>
        </section>

        {/* Policy Details */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Mileage Policy Details</h2>
              <p className="text-lg text-muted-foreground">
                Complete information about our unlimited mileage policy
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {mileagePolicyPoints.map((point, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <point.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{point.title}</CardTitle>
                        <CardDescription>{point.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {point.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Benefits of Unlimited Mileage</h2>
              <p className="text-lg text-muted-foreground">
                Why unlimited mileage makes your rental experience better
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Advantages for You</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Coverage Map */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Coverage Area</h2>
              <p className="text-lg text-muted-foreground">
                Where you can drive with unlimited mileage
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-8">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-16 w-16 text-primary/50 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-foreground mb-2">Luzon Island Coverage</h3>
                      <p className="text-muted-foreground">
                        Drive anywhere within Luzon island without mileage restrictions
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Exceptions */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Policy Exceptions</h2>
              <p className="text-lg text-muted-foreground">
                Special cases where mileage policy may differ
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="border-blue-200 bg-blue-50/50">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Info className="h-5 w-5 text-blue-600" />
                    <CardTitle className="text-blue-800">Special Cases</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-blue-700">
                    {exceptions.map((exception, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="text-blue-600">•</span>
                        <span>{exception}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="border-green-200 bg-green-50/50">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <CardTitle className="text-green-800">Great News!</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-green-700">
                    <p>
                      <strong>No mileage charges</strong> means you can explore freely without 
                      worrying about distance costs. Perfect for road trips, business travel, 
                      and extended exploration of the Bicol region.
                    </p>
                    <p>
                      <strong>Track your journey</strong> and visit multiple destinations 
                      without additional fees. Our unlimited mileage policy gives you the 
                      freedom to make the most of your rental.
                    </p>
                    <p>
                      <strong>Contact us</strong> if you have any questions about mileage 
                      policy or need assistance planning your route.
                    </p>
                  </div>
                </CardContent>
              </Card>
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

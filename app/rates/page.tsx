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
import { Check, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Car Rental Rates | Uragon Transport Services | Affordable Bicol Car Rental",
  description:
    "View our competitive car rental rates in Bicol. Affordable pricing with unlimited mileage for self-drive rentals. Transparent pricing with no hidden fees.",
  keywords: "car rental rates Bicol, affordable car rental, self drive rental rates, unlimited mileage, transparent pricing",
}

const vehicleRates = [
  {
    category: "Economy",
    vehicles: [
      {
        name: "Toyota Vios",
        type: "Sedan",
        daily: "₱1,500",
        weekly: "₱9,000",
        monthly: "₱35,000",
        features: ["4 passengers", "Air conditioning", "Manual transmission", "Unlimited mileage"],
        popular: false
      }
    ]
  },
  {
    category: "Compact SUV",
    vehicles: [
      {
        name: "Honda City",
        type: "Sedan",
        daily: "₱1,800",
        weekly: "₱10,800",
        monthly: "₱42,000",
        features: ["4 passengers", "Air conditioning", "Automatic transmission", "Unlimited mileage"],
        popular: true
      }
    ]
  },
  {
    category: "SUV",
    vehicles: [
      {
        name: "Toyota Fortuner",
        type: "SUV",
        daily: "₱2,500",
        weekly: "₱15,000",
        monthly: "₱58,000",
        features: ["7 passengers", "Air conditioning", "Automatic transmission", "Unlimited mileage"],
        popular: false
      },
      {
        name: "Mitsubishi Montero",
        type: "SUV",
        daily: "₱2,300",
        weekly: "₱13,800",
        monthly: "₱54,000",
        features: ["7 passengers", "Air conditioning", "Automatic transmission", "Unlimited mileage"],
        popular: false
      }
    ]
  },
  {
    category: "MPV",
    vehicles: [
      {
        name: "Toyota Innova",
        type: "MPV",
        daily: "₱2,000",
        weekly: "₱12,000",
        monthly: "₱47,000",
        features: ["7 passengers", "Air conditioning", "Automatic transmission", "Unlimited mileage"],
        popular: true
      }
    ]
  },
  {
    category: "Van",
    vehicles: [
      {
        name: "Hyundai H350",
        type: "Van",
        daily: "₱3,000",
        weekly: "₱18,000",
        monthly: "₱70,000",
        features: ["12 passengers", "Air conditioning", "Manual transmission", "Unlimited mileage"],
        popular: false
      }
    ]
  }
]

const serviceRates = [
  {
    name: "Self Drive",
    description: "Rent a car and drive yourself",
    baseRate: "From ₱1,500/day",
    features: ["Unlimited mileage", "Full insurance coverage", "24/7 roadside assistance", "Free delivery within Legazpi City"]
  },
  {
    name: "With Driver",
    description: "Professional driver included",
    baseRate: "From ₱2,500/day",
    features: ["Professional driver", "Unlimited mileage", "Full insurance coverage", "Fuel included"]
  },
  {
    name: "Airport Transfer",
    description: "Pickup and drop-off service",
    baseRate: "From ₱800/trip",
    features: ["Meet and greet", "Flight tracking", "Professional driver", "Comfortable vehicle"]
  },
  {
    name: "Bridal Service",
    description: "Special wedding day service",
    baseRate: "From ₱5,000/day",
    features: ["Decorated vehicle", "Professional driver", "Flexible timing", "Special care"]
  }
]

export default function RatesPage() {
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
                <BreadcrumbPage>Rates</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Transparent & Competitive Rates
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              No hidden fees, no surprises. Our rates are transparent and competitive, 
              with unlimited mileage included in all self-drive rentals.
            </p>
          </div>
        </section>

        {/* Vehicle Rates */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Vehicle Rental Rates</h2>
              <p className="text-lg text-muted-foreground">
                All rates include unlimited mileage and basic insurance coverage
              </p>
            </div>

            <div className="space-y-12">
              {vehicleRates.map((category) => (
                <div key={category.category}>
                  <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
                    {category.category}
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.vehicles.map((vehicle) => (
                      <Card key={vehicle.name} className="relative">
                        {vehicle.popular && (
                          <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                            <Star className="h-3 w-3 mr-1" />
                            Popular
                          </Badge>
                        )}
                        <CardHeader>
                          <CardTitle className="text-xl">{vehicle.name}</CardTitle>
                          <CardDescription>{vehicle.type}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="grid grid-cols-3 gap-2 text-center">
                              <div>
                                <div className="text-2xl font-bold text-primary">{vehicle.daily}</div>
                                <div className="text-sm text-muted-foreground">Daily</div>
                              </div>
                              <div>
                                <div className="text-2xl font-bold text-primary">{vehicle.weekly}</div>
                                <div className="text-sm text-muted-foreground">Weekly</div>
                              </div>
                              <div>
                                <div className="text-2xl font-bold text-primary">{vehicle.monthly}</div>
                                <div className="text-sm text-muted-foreground">Monthly</div>
                              </div>
                            </div>
                            <div className="space-y-2">
                              {vehicle.features.map((feature) => (
                                <div key={feature} className="flex items-center space-x-2">
                                  <Check className="h-4 w-4 text-primary" />
                                  <span className="text-sm">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Rates */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Service Rates</h2>
              <p className="text-lg text-muted-foreground">
                Additional services to enhance your rental experience
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceRates.map((service) => (
                <Card key={service.name} className="text-center">
                  <CardHeader>
                    <CardTitle className="text-xl">{service.name}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-2xl font-bold text-primary">{service.baseRate}</div>
                      <div className="space-y-2">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center space-x-2">
                            <Check className="h-4 w-4 text-primary" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                What's Included in Our Rates
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Included in All Rentals</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <Check className="h-5 w-5 text-primary mt-0.5" />
                      <span>Unlimited mileage for self-drive rentals</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="h-5 w-5 text-primary mt-0.5" />
                      <span>Basic insurance coverage</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="h-5 w-5 text-primary mt-0.5" />
                      <span>24/7 roadside assistance</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="h-5 w-5 text-primary mt-0.5" />
                      <span>Free delivery within Legazpi City</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Additional Charges</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-muted-foreground">•</span>
                      <span>Fuel charges (for self-drive rentals)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-muted-foreground">•</span>
                      <span>Driver service fee (₱500/day for with-driver service)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-muted-foreground">•</span>
                      <span>Late return fee (₱200/hour after grace period)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-muted-foreground">•</span>
                      <span>Cleaning fee for excessive dirt (₱500)</span>
                    </li>
                  </ul>
                </div>
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

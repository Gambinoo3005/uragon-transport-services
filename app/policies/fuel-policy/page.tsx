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
import { 
  Fuel, 
  AlertCircle, 
  CheckCircle, 
  Info,
  DollarSign,
  Clock
} from "lucide-react"

export const metadata: Metadata = {
  title: "Fuel Policy | Uragon Transport Services | Car Rental Fuel Terms",
  description:
    "Learn about our fuel policy for car rentals. Understand fuel requirements, charges, and what to expect when returning your rental vehicle.",
  keywords: "car rental fuel policy, fuel charges, rental car fuel, Bicol car rental fuel terms",
}

const fuelPolicyPoints = [
  {
    title: "Fuel Level at Pickup",
    description: "All vehicles are provided with a full tank of fuel",
    details: [
      "Vehicle will have full tank at pickup",
      "Fuel level will be recorded on rental agreement",
      "Customer is responsible for fuel consumption during rental",
      "No fuel charges at pickup"
    ],
    icon: CheckCircle
  },
  {
    title: "Fuel Level at Return",
    description: "Vehicle must be returned with the same fuel level as received",
    details: [
      "Return vehicle with full tank if received with full tank",
      "Fuel level will be checked upon return",
      "Customer responsible for refueling before return",
      "Fuel charges apply if returned with less fuel"
    ],
    icon: AlertCircle
  },
  {
    title: "Fuel Charges",
    description: "Additional charges for insufficient fuel level",
    details: [
      "₱80 per liter for missing fuel",
      "₱200 service fee for refueling",
      "Charges based on current fuel prices",
      "Payment required before vehicle return"
    ],
    icon: DollarSign
  },
  {
    title: "Refueling Options",
    description: "Convenient options for refueling your vehicle",
    details: [
      "Self-refuel at any gas station",
      "We can refuel for you (additional service fee)",
      "Gas stations available near our office",
      "24/7 gas stations in Legazpi City"
    ],
    icon: Info
  }
]

const fuelTips = [
  "Plan your refueling stops before returning the vehicle",
  "Keep fuel receipts as proof of refueling",
  "Allow extra time for refueling before return",
  "Check fuel level before starting your return journey",
  "Gas stations near our office: Shell, Petron, Caltex"
]

const exceptions = [
  "With-driver service includes fuel in the rate",
  "Long-term rentals may have different fuel arrangements",
  "Corporate accounts may have special fuel terms",
  "Emergency situations may have different policies"
]

export default function FuelPolicyPage() {
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
                <BreadcrumbLink href="/policies">Policies</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Fuel Policy</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Fuel className="h-8 w-8 text-primary" />
              <Badge variant="destructive">Important Policy</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Fuel Policy
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Understanding our fuel policy is essential for a smooth rental experience. 
              Please review these terms to avoid additional charges.
            </p>
          </div>
        </section>

        {/* Policy Details */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Fuel Policy Details</h2>
              <p className="text-lg text-muted-foreground">
                Complete information about fuel requirements and charges
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {fuelPolicyPoints.map((point, index) => (
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

        {/* Fuel Tips */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Fuel Tips</h2>
              <p className="text-lg text-muted-foreground">
                Helpful tips to avoid fuel charges and ensure smooth return
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Best Practices for Fuel Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {fuelTips.map((tip, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Exceptions */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Policy Exceptions</h2>
              <p className="text-lg text-muted-foreground">
                Special cases where fuel policy may differ
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
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="border-orange-200 bg-orange-50/50">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <AlertCircle className="h-5 w-5 text-orange-600" />
                    <CardTitle className="text-orange-800">Important Notice</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-orange-700">
                    <p>
                      <strong>Fuel charges are non-negotiable</strong> and must be paid before 
                      vehicle return. We recommend refueling at gas stations near our office 
                      to avoid service fees.
                    </p>
                    <p>
                      <strong>Current fuel prices</strong> are subject to market rates and may 
                      change without notice. Charges are calculated based on the fuel price 
                      at the time of return.
                    </p>
                    <p>
                      <strong>Contact us immediately</strong> if you have any questions about 
                      fuel policy or need assistance with refueling.
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

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
  FileText, 
  Fuel, 
  Gauge, 
  Shield, 
  X,
  CheckCircle,
  AlertCircle
} from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Rental Policies | Uragon Transport Services | Terms & Conditions",
  description:
    "View our comprehensive rental policies including fuel policy, mileage policy, insurance coverage, and cancellation terms. Transparent and fair policies for all customers.",
  keywords: "car rental policies, fuel policy, mileage policy, insurance, cancellation policy, rental terms",
}

const policies = [
  {
    name: "Fuel Policy",
    slug: "fuel-policy",
    description: "Understanding fuel requirements and charges",
    icon: Fuel,
    summary: "Return vehicle with same fuel level as received",
    important: true
  },
  {
    name: "Mileage Policy",
    slug: "mileage-policy",
    description: "Unlimited mileage for self-drive rentals",
    icon: Gauge,
    summary: "No mileage restrictions for most vehicles",
    important: true
  },
  {
    name: "Insurance",
    slug: "insurance",
    description: "Comprehensive insurance coverage details",
    icon: Shield,
    summary: "Basic insurance included, additional coverage available",
    important: true
  },
  {
    name: "Cancellation",
    slug: "cancellation",
    description: "Cancellation and modification policies",
    icon: X,
    summary: "Free cancellation up to 24 hours before pickup",
    important: false
  }
]

const generalTerms = [
  {
    title: "Rental Requirements",
    items: [
      "Valid driver's license (Philippine or international)",
      "Valid government-issued ID",
      "Credit card for security deposit",
      "Minimum age: 21 years (25 for premium vehicles)"
    ]
  },
  {
    title: "Vehicle Condition",
    items: [
      "Vehicle must be returned in same condition as received",
      "Report any damage immediately",
      "No smoking in vehicles",
      "No pets allowed without prior approval"
    ]
  },
  {
    title: "Usage Restrictions",
    items: [
      "No off-road driving",
      "No towing without permission",
      "No commercial passenger transport",
      "No racing or competitive driving"
    ]
  },
  {
    title: "Payment Terms",
    items: [
      "Full payment required at booking",
      "Security deposit held on credit card",
      "Additional charges for damages or violations",
      "Refunds processed within 3-5 business days"
    ]
  }
]

export default function PoliciesPage() {
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
                <BreadcrumbPage>Policies</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Rental Policies
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our transparent and fair policies ensure a smooth rental experience. 
              Please review our terms and conditions before booking your vehicle.
            </p>
          </div>
        </section>

        {/* Policy Cards */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Policies</h2>
              <p className="text-lg text-muted-foreground">
                Click on any policy to read the complete details
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {policies.map((policy, index) => (
                <Link key={index} href={`/policies/${policy.slug}`}>
                  <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
                    <CardHeader className="text-center">
                      <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                        <policy.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {policy.name}
                        </CardTitle>
                        {policy.important && (
                          <Badge variant="destructive" className="text-xs">
                            Important
                          </Badge>
                        )}
                      </div>
                      <CardDescription>{policy.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground mb-4">
                          {policy.summary}
                        </p>
                        <div className="flex items-center justify-center space-x-2 text-primary text-sm font-medium">
                          <span>Read More</span>
                          <FileText className="h-4 w-4" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* General Terms */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">General Terms & Conditions</h2>
              <p className="text-lg text-muted-foreground">
                Important information about your rental agreement
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {generalTerms.map((term, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">{term.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {term.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Important Notes */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="border-orange-200 bg-orange-50/50">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <AlertCircle className="h-5 w-5 text-orange-600" />
                    <CardTitle className="text-orange-800">Important Notes</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-orange-700">
                    <li className="flex items-start space-x-2">
                      <span className="text-orange-600">•</span>
                      <span>All policies are subject to change without notice</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-orange-600">•</span>
                      <span>Customers are responsible for reading and understanding all policies</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-orange-600">•</span>
                      <span>Violation of policies may result in additional charges or rental termination</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-orange-600">•</span>
                      <span>Contact us if you have any questions about our policies</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Questions About Our Policies?</h2>
              <p className="text-lg text-muted-foreground">
                Our customer service team is here to help clarify any policy questions
              </p>
            </div>

            <div className="max-w-2xl mx-auto text-center">
              <div className="flex items-center justify-center space-x-2 mb-6">
                <a 
                  href="tel:+639159234867" 
                  className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
                >
                  +63 915 923 4867
                </a>
              </div>
              <p className="text-muted-foreground">
                Call us for clarification on any policy or to discuss your specific rental needs
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

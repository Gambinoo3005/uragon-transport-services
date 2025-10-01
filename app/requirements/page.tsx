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
  User, 
  CreditCard, 
  Calendar, 
  FileText,
  CheckCircle,
  AlertCircle,
  Clock,
  Shield
} from "lucide-react"

export const metadata: Metadata = {
  title: "Rental Requirements | Uragon Transport Services | Driver License & Documents",
  description:
    "View the complete list of requirements for renting a car with Uragon Transport Services. Driver's license, valid ID, and other necessary documents.",
  keywords: "car rental requirements, driver license, valid ID, car rental documents, Bicol car rental requirements",
}

const driverRequirements = [
  {
    title: "Valid Driver's License",
    description: "Philippine driver's license or international driving permit",
    required: true,
    details: [
      "Must be valid and not expired",
      "Philippine driver's license (LTO issued)",
      "International driving permit accepted for foreign tourists",
      "License must be held for at least 1 year for most vehicles",
      "License must be held for at least 2 years for premium vehicles"
    ],
    icon: User
  },
  {
    title: "Valid Government ID",
    description: "Any government-issued identification document",
    required: true,
    details: [
      "Passport (for foreign tourists)",
      "SSS ID",
      "TIN ID",
      "PhilHealth ID",
      "Postal ID",
      "Voter's ID",
      "Driver's License (if not used as primary ID)"
    ],
    icon: FileText
  },
  {
    title: "Credit Card",
    description: "For security deposit and payment",
    required: true,
    details: [
      "Must be in the renter's name",
      "Sufficient credit limit for security deposit",
      "Visa, Mastercard, or American Express accepted",
      "Debit cards with sufficient balance accepted",
      "Security deposit varies by vehicle type"
    ],
    icon: CreditCard
  },
  {
    title: "Age Requirement",
    description: "Minimum age requirements for different vehicle categories",
    required: true,
    details: [
      "21 years old for economy and compact vehicles",
      "25 years old for SUVs and premium vehicles",
      "Maximum age: 70 years old",
      "Young driver surcharge may apply for drivers under 25"
    ],
    icon: Calendar
  }
]

const securityDeposits = [
  {
    category: "Economy Cars",
    vehicles: ["Toyota Vios", "Honda City"],
    amount: "₱5,000",
    description: "Refundable upon vehicle return in good condition"
  },
  {
    category: "Compact SUVs",
    vehicles: ["Toyota Fortuner", "Mitsubishi Montero"],
    amount: "₱10,000",
    description: "Refundable upon vehicle return in good condition"
  },
  {
    category: "MPVs",
    vehicles: ["Toyota Innova"],
    amount: "₱8,000",
    description: "Refundable upon vehicle return in good condition"
  },
  {
    category: "Vans",
    vehicles: ["Hyundai H350"],
    amount: "₱15,000",
    description: "Refundable upon vehicle return in good condition"
  }
]

const additionalDocuments = [
  {
    title: "Proof of Address",
    description: "Utility bill or bank statement (if required)",
    required: false,
    icon: FileText
  },
  {
    title: "Employment Certificate",
    description: "For corporate rentals or special cases",
    required: false,
    icon: FileText
  },
  {
    title: "Travel Insurance",
    description: "Recommended for international tourists",
    required: false,
    icon: Shield
  }
]

const restrictions = [
  {
    title: "Driving Experience",
    description: "Minimum driving experience requirements",
    details: [
      "At least 1 year of driving experience for economy vehicles",
      "At least 2 years of driving experience for SUVs and premium vehicles",
      "Clean driving record preferred",
      "No major traffic violations in the last 2 years"
    ]
  },
  {
    title: "Geographic Restrictions",
    description: "Areas where vehicles can be driven",
    details: [
      "Vehicles can be driven within Luzon",
      "Inter-island travel requires special permission",
      "Some areas may require additional insurance",
      "Off-road driving is not permitted"
    ]
  },
  {
    title: "Vehicle Usage",
    description: "Permitted and prohibited uses",
    details: [
      "Personal and business use permitted",
      "Commercial passenger transport not allowed",
      "Racing or competitive driving prohibited",
      "Towing is not permitted without approval"
    ]
  }
]

export default function RequirementsPage() {
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
                <BreadcrumbPage>Requirements</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Rental Requirements
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Before you can rent a vehicle with us, please ensure you meet all the necessary 
              requirements and have the required documents ready.
            </p>
          </div>
        </section>

        {/* Main Requirements */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Required Documents</h2>
              <p className="text-lg text-muted-foreground">
                These documents are mandatory for all rentals
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {driverRequirements.map((requirement, index) => (
                <Card key={index} className="relative">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-full flex-shrink-0">
                      <requirement.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <CardTitle className="text-xl">{requirement.title}</CardTitle>
                        <Badge variant="destructive" className="text-xs">
                          Required
                        </Badge>
                      </div>
                      <CardDescription className="mb-4">
                        {requirement.description}
                      </CardDescription>
                      <ul className="space-y-2">
                        {requirement.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Security Deposits */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Security Deposits</h2>
              <p className="text-lg text-muted-foreground">
                Security deposit amounts vary by vehicle category
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {securityDeposits.map((deposit, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <CardTitle className="text-lg">{deposit.category}</CardTitle>
                    <CardDescription>
                      {deposit.vehicles.join(", ")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-primary mb-2">
                      {deposit.amount}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {deposit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Documents */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Additional Documents</h2>
              <p className="text-lg text-muted-foreground">
                These documents may be required in certain circumstances
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {additionalDocuments.map((document, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-muted rounded-full w-fit">
                      <document.icon className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <CardTitle className="text-lg">{document.title}</CardTitle>
                    <CardDescription>{document.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="secondary" className="text-xs">
                      Optional
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Restrictions and Limitations */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Restrictions & Limitations</h2>
              <p className="text-lg text-muted-foreground">
                Important information about vehicle usage and restrictions
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {restrictions.map((restriction, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center space-x-2 mb-2">
                      <AlertCircle className="h-5 w-5 text-orange-500" />
                      <CardTitle className="text-lg">{restriction.title}</CardTitle>
                    </div>
                    <CardDescription>{restriction.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {restriction.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-2">
                          <span className="text-muted-foreground">•</span>
                          <span className="text-sm text-muted-foreground">{detail}</span>
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
                    <Clock className="h-5 w-5 text-orange-600" />
                    <CardTitle className="text-orange-800">Important Notes</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-orange-700">
                    <li className="flex items-start space-x-2">
                      <span className="text-orange-600">•</span>
                      <span>All documents must be original and valid at the time of rental</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-orange-600">•</span>
                      <span>Security deposits are held on your credit card and released upon vehicle return</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-orange-600">•</span>
                      <span>Additional charges may apply for drivers under 25 years old</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-orange-600">•</span>
                      <span>We reserve the right to refuse rental based on driving history or other factors</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-orange-600">•</span>
                      <span>Contact us if you have any questions about requirements</span>
                    </li>
                  </ul>
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

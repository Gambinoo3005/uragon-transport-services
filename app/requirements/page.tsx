import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingCTABanner } from "@/components/booking-cta-banner"
import { StickyBookButton } from "@/components/sticky-book-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  FileText,
  Camera,
  Globe,
  Receipt,
  CreditCard
} from "lucide-react"

export const metadata: Metadata = {
  title: "Rental Requirements | Uragon Transport Services | Required Documents",
  description:
    "Complete guide to Uragon Transport Services rental requirements. Learn about required documents for self-drive and with-driver bookings in Bicol.",
  keywords: "car rental requirements, driver license, valid ID, self-drive requirements, with-driver booking, Bicol car rental documents",
}

const selfDriveRequirements = [
  {
    title: "Valid Driver's License",
    description: "Non-expired Philippine driver's license",
    icon: FileText
  },
  {
    title: "One (1) Valid Government-issued ID",
    description: "Any government-issued identification document",
    icon: FileText
  },
  {
    title: "Selfie Holding Your ID",
    description: "Clear photo of yourself holding your ID for identity verification",
    icon: Camera
  },
  {
    title: "LTO Portal Login",
    description: "Access to LTO online portal for standard verification",
    icon: Globe
  },
  {
    title: "Proof of Billing",
    description: "Recent utility bill or bank statement to confirm address",
    icon: Receipt
  },
  {
    title: "Reservation Fee",
    description: "Minimum ₱1,000 to confirm booking (non-refundable)",
    icon: CreditCard
  }
]


export default function RequirementsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-background to-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                Rental <span className="text-primary">Requirements</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
                Everything you need to know about renting with Uragon Transport Services. Simple requirements, clear process, and transparent policies for both self-drive and with-driver bookings.
              </p>
            </div>
          </div>
        </section>


        {/* Required Documents (Self-Drive) */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Required Documents (Self-Drive)</h2>
              <p className="text-lg text-muted-foreground">
                Prepare these documents for booking and vehicle pickup
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {selfDriveRequirements.map((requirement, index) => (
                <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <requirement.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {requirement.title}
                      </h3>
                    </div>
                    
                    <p className="text-muted-foreground flex-grow">
                      {requirement.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* With-Driver Bookings */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">With-Driver Bookings</h2>
              <p className="text-lg text-muted-foreground">
                Simplified requirements for chauffeur-assisted trips
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      One (1) Valid Government ID
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground flex-grow">
                    Any government-issued identification document to verify your identity
                  </p>
                </CardContent>
              </Card>

              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <CreditCard className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      Reservation Fee
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground flex-grow">
                    Minimum ₱1,000 to confirm booking and secure the schedule (non-refundable)
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <p className="text-sm text-muted-foreground italic">
                Core ID + reservation requirement reflected in the policy and pricing sections.
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

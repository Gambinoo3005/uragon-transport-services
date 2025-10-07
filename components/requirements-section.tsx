import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, FileText, CreditCard, Camera, Globe, Receipt } from "lucide-react"

const requirements = [
  {
    icon: FileText,
    title: "Valid Driver's License",
    description: "Non-expired Philippine driver's license"
  },
  {
    icon: FileText,
    title: "One (1) Valid Government-issued ID",
    description: "Any government-issued identification document"
  },
  {
    icon: Camera,
    title: "Selfie Holding Your ID",
    description: "Clear photo of yourself holding your ID for identity verification"
  },
  {
    icon: Globe,
    title: "LTO Portal Login",
    description: "Access to LTO online portal for standard verification"
  },
  {
    icon: Receipt,
    title: "Proof of Billing",
    description: "Recent utility bill or bank statement to confirm address"
  },
  {
    icon: CreditCard,
    title: "Reservation Fee",
    description: "Minimum ₱1,000 to confirm booking (non-refundable)"
  },
]

export function RequirementsSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Requirements <span className="text-primary">(Self-Drive)</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              Bring these on the day of release (or send ahead for fast processing):
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {requirements.map((requirement, index) => {
              const IconComponent = requirement.icon
              return (
                <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {requirement.title}
                      </h3>
                    </div>
                    
                    <p className="text-muted-foreground flex-grow">
                      {requirement.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}


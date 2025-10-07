import { Button } from "@/components/ui/button"
import { CheckCircle, Percent, Clock, Shield } from "lucide-react"
import Link from "next/link"

export function RatesTeaser() {
  const inclusions = [
    "Unlimited mileage (within declared province)",
    "Comprehensive insurance + 24/7 roadside assistance",
    "Clean, sanitized units; flexible pick-up/drop-off"
  ]

  const discounts = [
    { period: "Monthly", discount: "up to 30%", icon: Percent },
    { period: "Weekly", discount: "10%", icon: Clock },
    { period: "3 Days", discount: "5%", icon: CheckCircle },
    { period: "6+1 Promo", discount: "Special", icon: Shield }
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Affordable Rates with <span className="text-primary">All-In Benefits</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Enjoy transparent pricing and value-packed inclusions when you book your car rental in Bicol:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Inclusions */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                What's Included
              </h3>
              <div className="space-y-4">
                {inclusions.map((inclusion, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{inclusion}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-muted/30 rounded-2xl">
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Reservation Fee
                </h4>
                <p className="text-muted-foreground">
                  Minimum ₱1,000 to confirm (non-refundable)
                </p>
              </div>
            </div>

            {/* Discounts */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Available Discounts
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {discounts.map((discount, index) => (
                  <div key={index} className="p-4 bg-muted/30 rounded-xl text-center">
                    <discount.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground mb-1">
                      {discount.discount}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {discount.period}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/fleet">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
              >
                View Fleet
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

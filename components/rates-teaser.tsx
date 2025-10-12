import { Button } from "@/components/ui/button"
import { CheckCircle, Percent, Clock, Shield } from "lucide-react"
import { SectionContainer, SectionHeader, StandardGrid } from "@/components/ui/content-grid"
import { InclusionExclusionBlock, StatsGridBlock } from "@/components/ui/content-blocks"
import Link from "next/link"

export function RatesTeaser() {
  const inclusions = [
    "Unlimited mileage (within declared province)",
    "Comprehensive insurance + 24/7 roadside assistance",
    "Clean, sanitized units; flexible pick-up/drop-off"
  ]

  const exclusions = [
    "Fuel costs (return with same level)",
    "Traffic violations and fines",
    "Damage beyond normal wear and tear"
  ]

  const discountStats = [
    {
      icon: Percent,
      number: "up to 30%",
      label: "Monthly",
      description: "Long-term rentals"
    },
    {
      icon: Clock,
      number: "10%",
      label: "Weekly",
      description: "7-day rentals"
    },
    {
      icon: CheckCircle,
      number: "5%",
      label: "3 Days",
      description: "Short-term rentals"
    },
    {
      icon: Shield,
      number: "Special",
      label: "6+1 Promo",
      description: "Extended rentals"
    }
  ]

  return (
    <SectionContainer background="default">
      <SectionHeader
        title="Affordable Rates with All-In Benefits"
        description="Enjoy transparent pricing and value-packed inclusions when you book your car rental in Bicol:"
        highlight="All-In Benefits"
        maxWidth="6xl"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
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
          <StatsGridBlock 
            stats={discountStats}
            variant="compact"
            columns={2}
          />
        </div>
      </div>

      <div className="text-center">
        <Link href="/fleet">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
          >
            View Fleet
          </Button>
        </Link>
      </div>
    </SectionContainer>
  )
}

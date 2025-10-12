import { ContentCard } from "@/components/ui/content-card"
import { SectionContainer, SectionHeader, StandardGrid } from "@/components/ui/content-grid"
import { Button } from "@/components/ui/button"
import { Star, Clock, Zap, Gift, Percent, Calendar } from "lucide-react"

export function LoyaltyCard() {
  const benefits = [
    {
      icon: Clock,
      title: "12 Hours Free Rental",
      description: "on participating units"
    },
    {
      icon: Zap,
      title: "Priority Booking Access",
      description: "skip the wait"
    },
    {
      icon: Gift,
      title: "Exclusive Member Promos",
      description: "member-only deals"
    },
    {
      icon: Star,
      title: "Free Upgrades",
      description: "on select vehicles"
    },
    {
      icon: Percent,
      title: "5% Off",
      description: "3rd and 7th rental day"
    },
    {
      icon: Calendar,
      title: "12 Hours Free",
      description: "on 10th rental day"
    }
  ]

  return (
    <SectionContainer background="gradient" className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Pricing Section */}
          <div className="text-center md:text-left space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Star className="w-6 h-6 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Loyalty Card
                </h2>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-bold text-primary">₱99.00</div>
                <p className="text-muted-foreground text-sm">One-time membership fee</p>
              </div>
            </div>
            
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
            >
              Get Your Card Today
            </Button>
          </div>

          {/* Benefits Grid */}
          <div className="md:col-span-2">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
              <Gift className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">
                Member Benefits
              </h3>
            </div>
            
            <StandardGrid variant="2col" gap="md">
              {benefits.map((benefit, index) => (
                <ContentCard
                  key={index}
                  type="benefit"
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                  variant="compact"
                />
              ))}
            </StandardGrid>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

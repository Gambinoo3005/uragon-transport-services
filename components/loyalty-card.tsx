import { ContentCard } from "@/components/ui/content-card"
import { SectionContainer, SectionHeader, StandardGrid } from "@/components/ui/content-grid"
import { Button } from "@/components/ui/button"
import { Clock, Zap, Percent, Star, Calendar, Gift } from "lucide-react"

const benefits = [
  { icon: Clock, title: "12 Hours Free", description: "Get a bonus half-day on select vehicles." },
  { icon: Zap, title: "Priority Booking", description: "Reserve high-demand units before public release." },
  { icon: Gift, title: "Exclusive Promos", description: "Access member-only discounts and partner perks." },
  { icon: Star, title: "Complimentary Upgrades", description: "Enjoy free upgrades when units are available." },
  { icon: Percent, title: "Stackable Savings", description: "Take 5% off on the 3rd and 7th rental day." },
  { icon: Calendar, title: "10th Rental Reward", description: "Receive 12 hours free on your next booking." }
]

export function LoyaltyCard() {
  return (
    <SectionContainer background="muted/30" padding="xl">
      <SectionHeader
        title="₱99 Loyalty Card Membership"
        description="Pay a one-time fee and unlock travel perks designed for frequent Uragon riders."
        maxWidth="4xl"
        highlight="Membership"
      />

      <div className="mt-10">
        <StandardGrid variant="3col" gap="md">
          {benefits.map((benefit) => (
            <ContentCard
              key={benefit.title}
              type="benefit"
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              variant="compact"
            />
          ))}
        </StandardGrid>
      </div>
    </SectionContainer>
  )
}

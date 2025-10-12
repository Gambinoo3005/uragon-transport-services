import { CheckCircle, Shield, MapPin, Wrench, FileCheck, Zap } from "lucide-react"
import { ContentCard } from "@/components/ui/content-card"
import { SectionContainer, SectionHeader, StandardGrid } from "@/components/ui/content-grid"

export function KeyUSPs() {
  const usps = [
    {
      icon: MapPin,
      title: "Unlimited Mileage",
      description: "Drive with confidence across your declared province/destination without worrying about hitting a mileage cap—perfect for tours, errands, and longer trips."
    },
    {
      icon: Shield,
      title: "Insured Fleet",
      description: "All vehicles are covered with comprehensive insurance and kept well-maintained for safety, reliability, and peace of mind on every journey."
    },
    {
      icon: Wrench,
      title: "24/7 Support",
      description: "Round-the-clock roadside assistance is included, and if something unexpected happens, we'll provide a replacement unit to keep you moving."
    },
    {
      icon: CheckCircle,
      title: "Flexible Options",
      description: "Choose self-drive or with-driver service, plus convenient pick-up & drop-off and vehicle delivery tailored to your schedule."
    },
    {
      icon: FileCheck,
      title: "Clear Policies",
      description: "Straightforward terms, transparent pricing, and quick confirmations—no guesswork, just smooth rentals from inquiry to return."
    },
    {
      icon: Zap,
      title: "Fast Booking",
      description: "Reserve in minutes via call/text with clear rates and same-day confirmation during operating hours (7:00 AM–7:00 PM)."
    }
  ]

  return (
    <SectionContainer background="muted/30">
      <SectionHeader
        title="Why Choose Uragon Transport?"
        description="Experience the difference with our comprehensive car rental services"
        highlight="Uragon Transport"
      />

      <StandardGrid variant="3col" gap="lg">
        {usps.map((usp, index) => (
          <ContentCard
            key={index}
            type="benefit"
            icon={usp.icon}
            title={usp.title}
            description={usp.description}
            variant="default"
          />
        ))}
      </StandardGrid>
    </SectionContainer>
  )
}

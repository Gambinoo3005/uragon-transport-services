import { ContentCard } from "@/components/ui/content-card"
import { SectionContainer, SectionHeader, StandardGrid } from "@/components/ui/content-grid"
import { Fuel, MapPin, Calendar } from "lucide-react"

const policies = [
  {
    icon: Fuel,
    title: "Fuel Policy",
    description: "Return the vehicle with the same fuel level as released."
  },
  {
    icon: MapPin,
    title: "Mileage Policy",
    description: "Unlimited within your declared province/destination."
  },
  {
    icon: Calendar,
    title: "Cancellations/Reschedule",
    description: "Reservation fee is non-refundable; one-time reschedule allowed at least 1 day before the original travel date; same-day reschedules not allowed."
  },
]

export function PoliciesSection() {
  return (
    <SectionContainer background="default">
      <SectionHeader
        title="Clear Policies"
        description="Transparent policies for a smooth rental experience"
        highlight="Policies"
      />

      <StandardGrid variant="3col" gap="lg">
        {policies.map((policy, index) => (
          <ContentCard
            key={index}
            type="icon"
            icon={policy.icon}
            title={policy.title}
            description={policy.description}
            variant="horizontal"
          />
        ))}
      </StandardGrid>
    </SectionContainer>
  )
}

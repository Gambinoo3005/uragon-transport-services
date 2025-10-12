import { Car, Users, MapPin, Clock } from "lucide-react"
import { SectionContainer, SectionHeader } from "@/components/ui/content-grid"
import { StatsGridBlock } from "@/components/ui/content-blocks"

const stats = [
  {
    icon: Car,
    number: "12+",
    label: "Modern Vehicles",
    description: "Well-maintained fleet",
  },
  {
    icon: Users,
    number: "100%",
    label: "Insured Units",
    description: "Full coverage protection",
  },
  {
    icon: MapPin,
    number: "6",
    label: "Bicol Locations",
    description: "Service coverage",
  },
  {
    icon: Clock,
    number: "24/7",
    label: "Support",
    description: "Always available",
  },
]

export function AboutStats() {
  return (
    <SectionContainer background="muted" padding="xl">
      <SectionHeader
        title="By the Numbers"
        description="Building trust through reliable service"
        maxWidth="6xl"
      />

      <StatsGridBlock 
        stats={stats}
        variant="default"
        columns={4}
      />
    </SectionContainer>
  )
}

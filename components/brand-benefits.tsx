import { ContentCard } from "@/components/ui/content-card"
import { SectionContainer, SectionHeader, StandardGrid } from "@/components/ui/content-grid"
import { Shield, Wrench, Clock, Star } from "lucide-react"

const benefits = [
  {
    icon: Shield,
    title: "Comprehensive Insurance",
    description: "All our vehicles come with full comprehensive insurance coverage, giving you complete peace of mind during your rental period.",
  },
  {
    icon: Wrench,
    title: "Regular Maintenance",
    description: "Every vehicle undergoes regular maintenance and safety inspections to ensure optimal performance and reliability.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Our dedicated support team is available round-the-clock to assist you with any questions or emergencies.",
  },
  {
    icon: Star,
    title: "Quality Assurance",
    description: "We only work with trusted brands and maintain high standards for all vehicles in our fleet.",
  },
]

export function BrandBenefits() {
  return (
    <SectionContainer background="muted/30">
      <SectionHeader
        title="Why Choose Our Vehicle Brands?"
        description="We partner with the most trusted automotive brands to provide you with reliable, safe, and comfortable vehicles for your Bicol adventure."
        maxWidth="2xl"
      />

      <StandardGrid variant="4col" gap="md">
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
    </SectionContainer>
  )
}

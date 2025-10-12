import { ContentCard } from "@/components/ui/content-card"
import { SectionContainer, SectionHeader, StandardGrid } from "@/components/ui/content-grid"
import { Shield, Eye, Heart, CheckCircle, Clock, DollarSign } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Reliability, First and Always",
    description:
      "Every vehicle is prepared with care; every booking is handled with clarity.",
  },
  {
    icon: Eye,
    title: "Transparency in Every Step",
    description:
      "Clear rates, clear rules, no surprises.",
  },
  {
    icon: CheckCircle,
    title: "Safety as a Habit",
    description:
      "Preventive maintenance, insured units, and responsible guidance for every trip.",
  },
  {
    icon: Heart,
    title: "Local Pride, Local Care",
    description: "We're part of the community we serve—rooted in Bicol, supporting local livelihoods.",
  },
  {
    icon: Clock,
    title: "Responsiveness That Matters",
    description: "Quick answers, helpful options, and calm solutions when plans change.",
  },
  {
    icon: DollarSign,
    title: "Value Without Compromise",
    description: "Fair pricing and flexible arrangements that respect your time and budget.",
  },
]

export function AboutValues() {
  return (
    <SectionContainer background="default" padding="xl">
      <SectionHeader
        title="What We Stand For"
        description="These principles guide every decision we make and every interaction we have with our customers."
        maxWidth="3xl"
      />

      <StandardGrid variant="3col" gap="lg">
        {values.map((value, index) => (
          <ContentCard
            key={index}
            type="benefit"
            icon={value.icon}
            title={value.title}
            description={value.description}
            variant="default"
            className="text-center p-6 bg-background rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow"
          />
        ))}
      </StandardGrid>
    </SectionContainer>
  )
}

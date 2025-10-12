import { ContentCard } from "@/components/ui/content-card"
import { SectionContainer, SectionHeader, StandardGrid } from "@/components/ui/content-grid"
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
    <SectionContainer background="default">
      <SectionHeader
        title="Requirements (Self-Drive)"
        description="Bring these on the day of release (or send ahead for fast processing):"
        highlight="(Self-Drive)"
      />

      <StandardGrid variant="3col" gap="md">
        {requirements.map((requirement, index) => (
          <ContentCard
            key={index}
            type="icon"
            icon={requirement.icon}
            title={requirement.title}
            description={requirement.description}
            variant="horizontal"
          />
        ))}
      </StandardGrid>
    </SectionContainer>
  )
}


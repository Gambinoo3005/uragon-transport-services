import { SectionContainer, SectionHeader } from "@/components/ui/content-grid"
import { TestimonialGridBlock } from "@/components/ui/content-blocks"

export function SocialProof() {
  const testimonials = [
    {
      text: "Smooth booking, spotless unit, and hassle-free pick-up. Roadside assistance gave extra peace of mind.",
      author: "Maria Santos",
      location: "Legazpi City",
      rating: 5
    },
    {
      text: "Friendly team and fair rates. Will book again for our next Bicol tour!",
      author: "John Dela Cruz", 
      location: "Daraga",
      rating: 5
    }
  ]

  return (
    <SectionContainer background="muted/30">
      <SectionHeader
        title="Why Travelers Choose Us for Car Rental in Bicol"
        highlight="Car Rental in Bicol"
        maxWidth="6xl"
      />

      <TestimonialGridBlock 
        testimonials={testimonials}
        variant="default"
        columns={2}
      />
    </SectionContainer>
  )
}

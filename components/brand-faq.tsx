import { FAQSection } from "@/components/ui/faq-component"

interface BrandData {
  name: string
  faqs: Array<{
    question: string
    answer: string
  }>
}

interface BrandFAQProps {
  brand: BrandData
}

export function BrandFAQ({ brand }: BrandFAQProps) {
  return (
    <FAQSection
      title="Frequently Asked Questions"
      description={`Common questions about renting ${brand.name} vehicles in Bicol.`}
      faqs={brand.faqs}
      variant="card"
      background="default"
      maxWidth="3xl"
    />
  )
}

import { FAQSection } from "@/components/ui/faq-component"

interface FAQ {
  question: string
  answer: string
}

interface ServiceData {
  faqs: FAQ[]
}

interface ServiceFAQProps {
  service: ServiceData
}

export function ServiceFAQ({ service }: ServiceFAQProps) {
  return (
    <FAQSection
      title="Frequently Asked Questions"
      description="Got questions? Here are the most common questions about our service."
      faqs={service.faqs}
      variant="default"
      background="default"
      maxWidth="3xl"
    />
  )
}

import { FAQSection } from "@/components/ui/faq-component"

export function FAQsPreview() {
  const faqs = [
    {
      question: "How do I book a car?",
      answer: "Call or text 0915 923 4867 between 7:00 AM–7:00 PM. A minimum ₱1,000 reservation fee confirms your booking."
    },
    {
      question: "What are the rental requirements?",
      answer: "Valid Driver's License, Government ID, selfie with ID, LTO Portal login, proof of billing, and reservation fee."
    },
    {
      question: "What discounts do you offer?",
      answer: "Up to 30% off monthly rentals, 10% off weekly, 5% off 3-day rentals, plus our 6+1 promo."
    },
    {
      question: "Do you offer pick-up and delivery?",
      answer: "Yes—we offer pick-up & drop-off and vehicle delivery. Fees depend on distance and schedule."
    }
  ]

  return (
    <FAQSection
      title="FAQs (Quick Answers)"
      description="Quick answers to common questions about our car rental services"
      faqs={faqs}
      variant="default"
      background="default"
      maxWidth="4xl"
      showViewAll={true}
      viewAllHref="/faqs"
      viewAllText="View All FAQs"
    />
  )
}

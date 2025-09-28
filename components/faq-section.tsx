import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What documents do I need to rent a car?",
    answer:
      "You'll need a valid driver's license, 1 valid government ID, selfie with ID, LTO Portal login, proof of billing, and a minimum ₱1,000 reservation fee to confirm your booking.",
  },
  {
    question: "Is insurance included in the rental price?",
    answer:
      "Yes, all our units are covered with comprehensive car insurance. This provides you with peace of mind during your rental period.",
  },
  {
    question: "What's your fuel policy?",
    answer:
      "We operate on a same gas level policy. You'll receive the vehicle at a certain fuel level and should return it with the same gas level as when delivered.",
  },
  {
    question: "What's your mileage policy?",
    answer:
      "We offer unlimited mileage within the declared province of destination. This means you can drive as much as you want within your specified area without additional charges.",
  },
  {
    question: "What happens if I have car trouble during my rental?",
    answer:
      "We provide 24/7 road assistance and a replacement unit if necessary. Simply call our emergency hotline and we'll dispatch help immediately.",
  },
  {
    question: "What's your cancellation policy?",
    answer:
      "Reservation fee is non-refundable but one-time reschedule is allowed at least 1 day prior to original travel date. Same day reschedule is not allowed.",
  },
  {
    question: "What forms of payment do you accept?",
    answer:
      "We accept online payment, cash, and bank transfer. A minimum ₱1,000 reservation fee is required to confirm your booking.",
  },
  {
    question: "Do you offer discounts for long-term rentals?",
    answer:
      "Yes, we offer up to 30% discount for monthly rentals. We also have 5% off for 3-day rentals and 10% off for weekly rentals. Current running promo is 6+1.",
  },
  {
    question: "Are vehicles available for out-of-town rentals?",
    answer:
      "Yes, our vehicles are available for out-of-town rentals outside Bicol. Contact us for specific arrangements and pricing.",
  },
]

export function FAQSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Got questions? We've got answers. Find everything you need to know about renting with Uragon Transport Services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-medium hover:no-underline">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

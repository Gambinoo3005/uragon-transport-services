import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

const faqs = [
  {
    question: "Can I take the car outside Albay?",
    answer: "Yes. Rentals are available within Bicol and for out-of-town trips—just declare your route and destination during booking."
  },
  {
    question: "What if the car breaks down during my trip?",
    answer: "You're covered with 24/7 roadside assistance and a replacement unit so you can continue your journey."
  },
  {
    question: "Is the reservation fee refundable?",
    answer: "No. The minimum ₱1,000 reservation fee confirms your booking and is non-refundable. You may reschedule once if it's at least 1 day before your original date."
  },
  {
    question: "What's included with self-drive rentals?",
    answer: "Unlimited mileage within your declared province/destination, insured units, and 24/7 roadside support. Fuel and tolls are shouldered by the renter."
  },
  {
    question: "Do you deliver the vehicle?",
    answer: "Yes, we can deliver and pick up the unit for added convenience. Coordinate timing with our team during operating hours (7:00 AM–7:00 PM)."
  }
]

export function ServicesFAQ() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              <span className="text-primary">FAQs</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Frequently asked questions about our services
            </p>
          </div>
          
          <Card className="mb-8">
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-medium hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed text-pretty">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          <div className="text-center">
            <Link href="/faqs">
              <button className="text-primary hover:text-primary/80 font-semibold text-lg transition-colors">
                View All FAQs →
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

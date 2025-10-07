"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function FAQsPreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              FAQs <span className="text-primary">(Quick Answers)</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions about our car rental services
            </p>
          </div>

          <div className="space-y-4 mb-12">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-muted/30 rounded-2xl overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <h3 className="text-xl font-semibold text-foreground pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`h-5 w-5 text-muted-foreground transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/faqs">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
              >
                View All FAQs
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export function FAQsPreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What are your operating hours?",
      answer: "7:00 AM–7:00 PM daily; roadside assistance is available 24/7."
    },
    {
      question: "What documents do I need?",
      answer: "Valid driver's license, one government ID, selfie with ID, LTO portal login, proof of billing, and the reservation fee."
    },
    {
      question: "Is the reservation fee refundable?",
      answer: "No. One-time reschedule allowed at least 1 day before the original date; same-day reschedules aren't allowed."
    },
    {
      question: "Do you offer self-drive and with-driver options?",
      answer: "Yes. We offer self-drive rentals (great for self-drive car rental Bicol) and with-driver services for convenience."
    },
    {
      question: "Any discounts?",
      answer: "Yes—up to 30% monthly, 10% weekly, 5% for 3-day rentals; plus 6+1 promo."
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
              Frequently Asked <span className="text-primary">Questions</span>
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
                  <h3 className="text-xl font-semibold text-foreground mb-3 pr-4">
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

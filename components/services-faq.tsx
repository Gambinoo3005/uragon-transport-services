import { FAQSection } from "@/components/ui/faq-component"

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
    <FAQSection
      title="FAQs"
      description="Frequently asked questions about our services"
      faqs={faqs}
      variant="card"
      background="default"
      maxWidth="4xl"
      showViewAll={true}
      viewAllHref="/faqs"
      viewAllText="View All FAQs"
      className="py-20"
    />
  )
}

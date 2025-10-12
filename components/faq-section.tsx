import { FAQSection as UnifiedFAQSection } from "@/components/ui/faq-component"

const faqs = [
  {
    question: "How do I book a car?",
    answer:
      "Call or text 0915 923 4867 between 7:00 AM–7:00 PM to check availability and reserve. A minimum ₱1,000 reservation fee confirms your booking. Same-day confirmations are processed during operating hours.",
  },
  {
    question: "What are the rental requirements?",
    answer:
      "For self-drive, prepare: Valid Driver's License, 1 Government-issued ID, Selfie with ID, LTO Portal login, Proof of billing, Reservation fee (minimum ₱1,000, non-refundable). All items must match the renter's identity.",
  },
  {
    question: "What discounts do you offer?",
    answer:
      "Up to 30% off for monthly rentals, 10% off for weekly rentals, 5% off for 3-day rentals, Promo: 6+1 (rent 6 days, get 1 day free). Available on qualified bookings; ask us for a tailored quote.",
  },
  {
    question: "Are your vehicles insured?",
    answer:
      "Yes. All units have comprehensive insurance, and we provide 24/7 roadside assistance. A replacement unit is provided in case of accident or breakdown (subject to availability and terms).",
  },
  {
    question: "Is there a mileage limit?",
    answer:
      "Unlimited mileage applies within your declared province/destination. Please declare your travel route upon booking.",
  },
  {
    question: "What is your fuel policy?",
    answer:
      "Return the vehicle with the same fuel level as when released.",
  },
  {
    question: "Can I cancel or reschedule?",
    answer:
      "Reservation fee: non-refundable. One-time reschedule: allowed if requested ≥ 1 day before your original travel date. Same-day reschedules: not allowed.",
  },
  {
    question: "Do you offer pick-up and delivery?",
    answer:
      "Yes, we offer pick-up & drop-off and vehicle delivery. Fees depend on distance and schedule.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "We service the Bicol Region and also support out-of-town rentals outside Bicol. Pickup/drop-off and delivery options are available (quoted separately).",
  },
]

export function FAQSection() {
  return (
    <UnifiedFAQSection
      title="Frequently Asked Questions"
      description="Got questions? We've got answers. Find everything you need to know about renting with Uragon Transport Services."
      faqs={faqs}
      variant="default"
      background="default"
      maxWidth="3xl"
    />
  )
}

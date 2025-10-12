import { PageHero } from "@/components/ui/hero-components"

export function ContactHero() {
  return (
    <PageHero
      title="Get in Touch"
      highlight="Touch"
      description="Ready to explore Bicol? Contact us for car rental bookings, questions, or travel advice. We're here to help make your journey unforgettable with our reliable vehicles and unlimited mileage."
      stats={[
        { number: "24/7", label: "Support" },
        { number: "7AM-7PM", label: "Business Hours" },
        { number: "100%", label: "Response Rate" },
        { number: "Fast", label: "Booking" }
      ]}
    />
  )
}

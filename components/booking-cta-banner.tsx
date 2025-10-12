import { CTABanner } from "@/components/ui/cta-banner"
import { Phone, MessageCircle } from "lucide-react"

export function BookingCTABanner() {
  return (
    <CTABanner
      title="Ready to drive?"
      description="Let's get you on your way. With Uragon Transport Services, you get insured units, unlimited mileage (within declared destination), and friendly support—start to finish."
      buttons={[
        {
          text: "Call 0915 923 4867",
          href: "tel:09159234867",
          icon: Phone
        },
        {
          text: "Book Now",
          href: "/contact",
          icon: MessageCircle
        }
      ]}
    />
  )
}

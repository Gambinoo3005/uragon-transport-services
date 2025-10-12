import { CTABanner } from "@/components/ui/cta-banner"
import { Phone, MessageCircle } from "lucide-react"

export function HomepageCTABanner() {
  return (
    <CTABanner
      title="Ready to drive?"
      description="Get car rental in bicol region with Uragon Transport Services—insured units, unlimited mileage (within declared destination), and friendly support."
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

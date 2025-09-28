import { Button } from "@/components/ui/button"
import { Phone, MessageCircle } from "lucide-react"

export function BookingCTABanner() {
  return (
    <div className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Ready to Book Your Ride?</h3>
            <p className="text-primary-foreground/90">Get instant quotes and book your perfect vehicle today</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              <Phone className="h-4 w-4 mr-2" />
              Call Now
            </Button>
            <Button variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

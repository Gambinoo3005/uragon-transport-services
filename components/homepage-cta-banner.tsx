import { Button } from "@/components/ui/button"
import { Phone, MessageCircle } from "lucide-react"

export function HomepageCTABanner() {
  return (
    <div className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to drive?</h3>
          <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            Get car rental in bicol region with Uragon Transport Services—insured units, unlimited mileage (within declared destination), and friendly support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" className="bg-background text-foreground hover:bg-background/90 px-8 py-3 text-lg font-semibold">
              <Phone className="h-5 w-5 mr-2" />
              Call 0915 923 4867
            </Button>
            <Button variant="secondary" className="bg-background text-foreground hover:bg-background/90 px-8 py-3 text-lg font-semibold">
              <MessageCircle className="h-5 w-5 mr-2" />
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

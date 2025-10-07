import { CheckCircle, Shield, Clock, MapPin, Wrench, FileCheck, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function KeyUSPs() {
  const usps = [
    {
      icon: MapPin,
      title: "Unlimited Mileage",
      description: "Drive with confidence across your declared province/destination without worrying about hitting a mileage cap—perfect for tours, errands, and longer trips."
    },
    {
      icon: Shield,
      title: "Insured Fleet",
      description: "All vehicles are covered with comprehensive insurance and kept well-maintained for safety, reliability, and peace of mind on every journey."
    },
    {
      icon: Wrench,
      title: "24/7 Support",
      description: "Round-the-clock roadside assistance is included, and if something unexpected happens, we'll provide a replacement unit to keep you moving."
    },
    {
      icon: CheckCircle,
      title: "Flexible Options",
      description: "Choose self-drive or with-driver service, plus convenient pick-up & drop-off and vehicle delivery tailored to your schedule."
    },
    {
      icon: FileCheck,
      title: "Clear Policies",
      description: "Straightforward terms, transparent pricing, and quick confirmations—no guesswork, just smooth rentals from inquiry to return."
    },
    {
      icon: Zap,
      title: "Fast Booking",
      description: "Reserve in minutes via call/text with clear rates and same-day confirmation during operating hours (7:00 AM–7:00 PM)."
    }
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose <span className="text-primary">Uragon Transport</span>?
            </h2>
            <p className="text-xl text-muted-foreground">
              Experience the difference with our comprehensive car rental services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {usps.map((usp, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <usp.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {usp.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {usp.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

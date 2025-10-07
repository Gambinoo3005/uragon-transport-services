import { Card, CardContent } from "@/components/ui/card"
import { Fuel, MapPin, Calendar, AlertCircle } from "lucide-react"

const policies = [
  {
    icon: Fuel,
    title: "Fuel Policy",
    description: "Return the vehicle with the same fuel level as released."
  },
  {
    icon: MapPin,
    title: "Mileage Policy",
    description: "Unlimited within your declared province/destination."
  },
  {
    icon: Calendar,
    title: "Cancellations/Reschedule",
    description: "Reservation fee is non-refundable; one-time reschedule allowed at least 1 day before the original travel date; same-day reschedules not allowed."
  },
]

export function PoliciesSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Clear <span className="text-primary">Policies</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Transparent policies for a smooth rental experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {policies.map((policy, index) => {
              const IconComponent = policy.icon
              return (
                <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {policy.title}
                      </h3>
                    </div>
                    
                    <p className="text-muted-foreground flex-grow">
                      {policy.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}


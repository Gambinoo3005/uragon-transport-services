import { Card, CardContent } from "@/components/ui/card"
import { Shield, Clock, Users, Award, Phone, MapPin } from "lucide-react"

const benefits = [
  {
    icon: Shield,
    title: "Fully Insured",
    description: "All vehicles come with comprehensive insurance coverage for your peace of mind.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer support and emergency roadside assistance.",
  },
  {
    icon: Users,
    title: "Professional Drivers",
    description: "Experienced, licensed drivers with extensive knowledge of Bicol region.",
  },
  {
    icon: Award,
    title: "Quality Guarantee",
    description: "Well-maintained vehicles and exceptional service standards.",
  },
  {
    icon: Phone,
    title: "Easy Booking",
    description: "Simple booking process via phone, WhatsApp, or online form.",
  },
  {
    icon: MapPin,
    title: "Local Expertise",
    description: "Deep knowledge of Bicol's roads, attractions, and hidden gems.",
  },
]

export function ServiceBenefits() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Why Choose Our Services?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            We go beyond just providing transportation. Our commitment to excellence ensures your journey is safe,
            comfortable, and memorable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty">{benefit.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent } from "@/components/ui/card"
import { Shield, Wrench, Clock, Star } from "lucide-react"

const benefits = [
  {
    icon: Shield,
    title: "Comprehensive Insurance",
    description: "All our vehicles come with full comprehensive insurance coverage, giving you complete peace of mind during your rental period.",
  },
  {
    icon: Wrench,
    title: "Regular Maintenance",
    description: "Every vehicle undergoes regular maintenance and safety inspections to ensure optimal performance and reliability.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Our dedicated support team is available round-the-clock to assist you with any questions or emergencies.",
  },
  {
    icon: Star,
    title: "Quality Assurance",
    description: "We only work with trusted brands and maintain high standards for all vehicles in our fleet.",
  },
]

export function BrandBenefits() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            Why Choose Our Vehicle Brands?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            We partner with the most trusted automotive brands to provide you with reliable, safe, and comfortable
            vehicles for your Bicol adventure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed text-pretty">{benefit.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

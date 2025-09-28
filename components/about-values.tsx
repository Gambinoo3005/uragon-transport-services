import { Shield, Heart, Users, Award } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Safety First",
    description:
      "All our vehicles undergo regular maintenance and safety inspections. Your safety is our top priority.",
  },
  {
    icon: Heart,
    title: "Local Passion",
    description:
      "We love Bicol and want to share its beauty with every traveler. Our local knowledge is your advantage.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description:
      "Every customer is family to us. We go above and beyond to ensure your rental experience exceeds expectations.",
  },
  {
    icon: Award,
    title: "Quality Service",
    description: "From booking to return, we maintain the highest standards of service and vehicle quality.",
  },
]

export function AboutValues() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Our Values</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              These core values guide everything we do and shape the experience we provide to every customer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground text-pretty">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

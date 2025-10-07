import { Car, Users, MapPin, Clock } from "lucide-react"

const stats = [
  {
    icon: Car,
    number: "12+",
    label: "Modern Vehicles",
    description: "Well-maintained fleet",
  },
  {
    icon: Users,
    number: "100%",
    label: "Insured Units",
    description: "Full coverage protection",
  },
  {
    icon: MapPin,
    number: "6",
    label: "Bicol Locations",
    description: "Service coverage",
  },
  {
    icon: Clock,
    number: "24/7",
    label: "Support",
    description: "Always available",
  },
]

export function AboutStats() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">By the Numbers</h2>
            <p className="text-xl text-muted-foreground text-pretty">Building trust through reliable service</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="h-10 w-10 text-primary" />
                </div>
                <div className="text-4xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-foreground mb-2">{stat.label}</div>
                <div className="text-base text-muted-foreground">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

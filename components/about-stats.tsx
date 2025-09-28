import { Car, Users, MapPin, Clock } from "lucide-react"

const stats = [
  {
    icon: Car,
    number: "50+",
    label: "Modern Vehicles",
    description: "Well-maintained fleet",
  },
  {
    icon: Users,
    number: "1000+",
    label: "Happy Customers",
    description: "Satisfied travelers",
  },
  {
    icon: MapPin,
    number: "5",
    label: "Bicol Provinces",
    description: "Service coverage",
  },
  {
    icon: Clock,
    number: "9",
    label: "Years Experience",
    description: "Serving since 2015",
  },
]

export function AboutStats() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">By the Numbers</h2>
            <p className="text-xl text-muted-foreground text-pretty">Our track record speaks for itself</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="h-10 w-10 text-primary" />
                </div>
                <div className="text-4xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-foreground mb-2">{stat.label}</div>
                <div className="text-muted-foreground">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import { CheckCircle, Shield, Clock, MapPin } from "lucide-react"

export function KeyUSPs() {
  const usps = [
    {
      icon: MapPin,
      title: "Unlimited mileage within declared destination province",
      description: "Drive without worrying about distance limits within your chosen province"
    },
    {
      icon: Shield,
      title: "Self-drive or with driver, plus pick-up/drop-off & delivery",
      description: "Flexible options to suit your needs with convenient service"
    },
    {
      icon: CheckCircle,
      title: "Comprehensive insurance + replacement unit support",
      description: "Full coverage and backup vehicles for peace of mind"
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {usps.map((usp, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-colors">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <usp.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {usp.title}
                </h3>
                <p className="text-muted-foreground">
                  {usp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import { Car, FileText, MapPin } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: Car,
      title: "Reserve",
      description: "Pick a unit and travel dates; pay the reservation fee to confirm."
    },
    {
      number: "02", 
      icon: FileText,
      title: "Verify",
      description: "Submit the required IDs and details for quick approval."
    },
    {
      number: "03",
      icon: MapPin,
      title: "Pick-Up or Delivery",
      description: "Get the vehicle at our location or have it delivered; return with the same fuel level."
    }
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works <span className="text-primary">(3 Easy Steps)</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Simple 3-step process to get your car rental
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div>
                  <div className="inline-flex items-center justify-center w-32 h-32 bg-primary/10 rounded-full mb-6 relative">
                    <step.icon className="h-12 w-12 text-primary" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-xl text-muted-foreground">
              Perfect for <span className="font-semibold text-foreground">car hire in Bicol</span> needs—from weddings to business trips.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

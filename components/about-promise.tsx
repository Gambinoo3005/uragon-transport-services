import { Handshake } from "lucide-react"

export function AboutPromise() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Handshake className="h-10 w-10 text-primary" />
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">Our Promise</h2>
          
          <div className="bg-background rounded-3xl p-8 lg:p-12 border border-border shadow-lg">
            <p className="text-xl lg:text-2xl text-muted-foreground text-pretty leading-relaxed">
              When you book with Uragon, you get more than a vehicle—you get a steady partner for your trip. 
              We'll keep the details simple, the car dependable, and the support human.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

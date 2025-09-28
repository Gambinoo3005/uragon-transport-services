import { Car, Users, Shield, Clock } from "lucide-react"

export function HeroStats() {
  return (
    <section className="py-16 bg-background border-b">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="bg-primary/10 p-4 rounded-2xl">
              <Car className="h-8 w-8 text-primary" />
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">50+</div>
              <div className="text-sm text-muted-foreground font-medium">Modern Vehicles</div>
            </div>
          </div>
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="bg-primary/10 p-4 rounded-2xl">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">1000+</div>
              <div className="text-sm text-muted-foreground font-medium">Happy Travelers</div>
            </div>
          </div>
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="bg-primary/10 p-4 rounded-2xl">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">Fully</div>
              <div className="text-sm text-muted-foreground font-medium">Insured Fleet</div>
            </div>
          </div>
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="bg-primary/10 p-4 rounded-2xl">
              <Clock className="h-8 w-8 text-primary" />
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">24/7</div>
              <div className="text-sm text-muted-foreground font-medium">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

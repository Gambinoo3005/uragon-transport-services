import { Star, Shield, Award, Users } from "lucide-react"

export function TrustSignals() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Why Choose Uragon Tours?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Trusted by thousands of travelers across Bicol for reliable, safe, and comfortable transportation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-2">4.9/5</div>
            <div className="text-muted-foreground">Average Rating</div>
            <div className="flex justify-center mt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
          </div>

          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-2">1000+</div>
            <div className="text-muted-foreground">Happy Travelers</div>
            <div className="text-sm text-muted-foreground mt-2">Served this year</div>
          </div>

          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-2">100%</div>
            <div className="text-muted-foreground">Insured Fleet</div>
            <div className="text-sm text-muted-foreground mt-2">Comprehensive coverage</div>
          </div>

          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-2">5+</div>
            <div className="text-muted-foreground">Years Experience</div>
            <div className="text-sm text-muted-foreground mt-2">In Bicol region</div>
          </div>
        </div>

        {/* Partner Logos Placeholder */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-6">Trusted by leading hotels and travel agencies</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="bg-muted h-12 w-24 rounded flex items-center justify-center text-xs text-muted-foreground">
              Partner 1
            </div>
            <div className="bg-muted h-12 w-24 rounded flex items-center justify-center text-xs text-muted-foreground">
              Partner 2
            </div>
            <div className="bg-muted h-12 w-24 rounded flex items-center justify-center text-xs text-muted-foreground">
              Partner 3
            </div>
            <div className="bg-muted h-12 w-24 rounded flex items-center justify-center text-xs text-muted-foreground">
              Partner 4
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

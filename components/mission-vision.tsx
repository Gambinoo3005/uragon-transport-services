import { Target, Eye } from "lucide-react"

export function MissionVision() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="text-center">
              <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="h-10 w-10 text-primary" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Mission</h2>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                To deliver safe, seamless, and transparent mobility across Bicol by providing well-maintained vehicles, 
                straightforward policies, and responsive support—so customers can focus on the journey, not the logistics.
              </p>
            </div>

            {/* Vision */}
            <div className="text-center">
              <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Eye className="h-10 w-10 text-primary" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Vision</h2>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                To be the most trusted mobility partner in the Bicol Region, known for dependable vehicles, 
                genuine local service, and a customer experience that sets the benchmark for provincial car rentals in the Philippines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

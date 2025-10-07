import { Shield, Eye, Heart, CheckCircle, Clock, DollarSign } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Reliability, First and Always",
    description:
      "Every vehicle is prepared with care; every booking is handled with clarity.",
  },
  {
    icon: Eye,
    title: "Transparency in Every Step",
    description:
      "Clear rates, clear rules, no surprises.",
  },
  {
    icon: CheckCircle,
    title: "Safety as a Habit",
    description:
      "Preventive maintenance, insured units, and responsible guidance for every trip.",
  },
  {
    icon: Heart,
    title: "Local Pride, Local Care",
    description: "We're part of the community we serve—rooted in Bicol, supporting local livelihoods.",
  },
  {
    icon: Clock,
    title: "Responsiveness That Matters",
    description: "Quick answers, helpful options, and calm solutions when plans change.",
  },
  {
    icon: DollarSign,
    title: "Value Without Compromise",
    description: "Fair pricing and flexible arrangements that respect your time and budget.",
  },
]

export function AboutValues() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">What We Stand For</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              These principles guide every decision we make and every interaction we have with our customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-background rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
                <p className="text-base text-muted-foreground text-pretty">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

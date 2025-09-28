import { Card, CardContent } from "@/components/ui/card"
import { Check, X } from "lucide-react"

interface ServiceFeature {
  title: string
  description: string
}

interface ServiceData {
  features: ServiceFeature[]
  inclusions: string[]
  exclusions: string[]
}

interface ServiceFeaturesProps {
  service: ServiceData
}

export function ServiceFeatures({ service }: ServiceFeaturesProps) {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Service Features</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Everything you need for a smooth and comfortable transfer experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {service.features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Inclusions & Exclusions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-6 text-green-600">What's Included</h3>
              <div className="space-y-3">
                {service.inclusions.map((inclusion, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-foreground">{inclusion}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-6 text-red-600">Not Included</h3>
              <div className="space-y-3">
                {service.exclusions.map((exclusion, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <X className="h-5 w-5 text-red-600 flex-shrink-0" />
                    <span className="text-foreground">{exclusion}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

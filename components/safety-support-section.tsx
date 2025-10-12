import { Card, CardContent } from "@/components/ui/card"
import { Shield } from "lucide-react"

export function SafetySupportSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Safety & <span className="text-primary">Support</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive coverage and round-the-clock assistance for your peace of mind
            </p>
          </div>

          <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Comprehensive Coverage & 24/7 Support
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    All units are covered by comprehensive insurance and backed by 24/7 roadside assistance. 
                    If an issue arises, we'll provide a replacement unit so your trip keeps moving.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

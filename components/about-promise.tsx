import { Handshake } from "lucide-react"
import { SectionContainer } from "@/components/ui/content-grid"
import { Card, CardContent } from "@/components/ui/card"

export function AboutPromise() {
  return (
    <SectionContainer background="muted" padding="xl">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8">
          <Handshake className="h-10 w-10 text-primary" />
        </div>
        
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">Our Promise</h2>
        
        <Card className="border-border shadow-lg">
          <CardContent className="p-8 lg:p-12">
            <p className="text-xl lg:text-2xl text-muted-foreground text-pretty leading-relaxed">
              When you book with Uragon, you get more than a vehicle—you get a steady partner for your trip. 
              We'll keep the details simple, the car dependable, and the support human.
            </p>
          </CardContent>
        </Card>
      </div>
    </SectionContainer>
  )
}

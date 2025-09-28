import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface PricingRow {
  route: string
  sedan: string
  suv: string
  van: string
}

interface ServiceData {
  pricing: PricingRow[]
}

interface ServicePricingProps {
  service: ServiceData
}

export function ServicePricing({ service }: ServicePricingProps) {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Pricing</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Transparent, fixed rates with no hidden fees. Prices include fuel, tolls, and basic waiting time.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-4 px-2 font-semibold">Route</th>
                    <th className="text-center py-4 px-2 font-semibold">Sedan (1-4 pax)</th>
                    <th className="text-center py-4 px-2 font-semibold">SUV (1-6 pax)</th>
                    <th className="text-center py-4 px-2 font-semibold">Van (1-10 pax)</th>
                  </tr>
                </thead>
                <tbody>
                  {service.pricing.map((row, index) => (
                    <tr key={index} className="border-b hover:bg-muted/20">
                      <td className="py-4 px-2 font-medium">{row.route}</td>
                      <td className="text-center py-4 px-2 text-primary font-semibold">{row.sedan}</td>
                      <td className="text-center py-4 px-2 text-primary font-semibold">{row.suv}</td>
                      <td className="text-center py-4 px-2 text-primary font-semibold">{row.van}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <h4 className="font-semibold mb-2">Additional Information:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Prices include fuel, tolls, and 1 hour waiting time</li>
                <li>• Additional waiting time: ₱200 per hour</li>
                <li>• Extra stops: ₱300 per stop</li>
                <li>• Night surcharge (10PM-6AM): +20%</li>
                <li>• Holiday surcharge: +30%</li>
              </ul>
            </div>

            <div className="text-center mt-6">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Book Your Transfer
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

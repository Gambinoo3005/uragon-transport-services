import { Card, CardContent } from "@/components/ui/card"
import { Vehicle } from "@/lib/vehicles"

interface VehiclePricingProps {
  vehicle: Vehicle
}

export function VehiclePricing({ vehicle }: VehiclePricingProps) {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              {vehicle.name} Pricing
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Competitive rates for the {vehicle.name}. All prices include comprehensive insurance and unlimited mileage within the declared province.
            </p>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-semibold">Duration</th>
                      <th className="text-left py-3 px-4 font-semibold">Rate</th>
                      <th className="text-left py-3 px-4 font-semibold">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-muted/30 transition-colors">
                      <td className="py-3 px-4 font-medium">12 Hours</td>
                      <td className="py-3 px-4 text-muted-foreground">{vehicle.pricePer12hr || 'Contact us'}</td>
                      <td className="py-3 px-4 text-right font-semibold text-primary">{vehicle.pricePer12hr || 'Contact us'}</td>
                    </tr>
                    <tr className="border-b hover:bg-muted/30 transition-colors">
                      <td className="py-3 px-4 font-medium">24 Hours</td>
                      <td className="py-3 px-4 text-muted-foreground">{vehicle.pricePerDay}</td>
                      <td className="py-3 px-4 text-right font-semibold text-primary">{vehicle.pricePerDay}</td>
                    </tr>
                    <tr className="border-b hover:bg-muted/30 transition-colors">
                      <td className="py-3 px-4 font-medium">3 Days</td>
                      <td className="py-3 px-4 text-muted-foreground">{vehicle.pricePerDay}/day</td>
                      <td className="py-3 px-4 text-right font-semibold text-primary">
                        ₱{(parseInt(vehicle.pricePerDay.replace("₱", "").replace(",", "")) * 3).toLocaleString()}
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-muted/30 transition-colors">
                      <td className="py-3 px-4 font-medium">1 Week</td>
                      <td className="py-3 px-4 text-muted-foreground">Special Rate</td>
                      <td className="py-3 px-4 text-right font-semibold text-primary">Contact Us</td>
                    </tr>
                    <tr className="hover:bg-muted/30 transition-colors">
                      <td className="py-3 px-4 font-medium">1 Month</td>
                      <td className="py-3 px-4 text-muted-foreground">Special Rate</td>
                      <td className="py-3 px-4 text-right font-semibold text-primary">Contact Us</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">What's Included:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                  {vehicle.inclusions.map((inclusion, index) => (
                    <div key={index}>• {inclusion}</div>
                  ))}
                </div>
              </div>

              <div className="mt-4 p-4 bg-red-50 dark:bg-red-950/20 rounded-lg">
                <h3 className="font-semibold text-red-700 dark:text-red-400 mb-2">Not Included:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-red-600 dark:text-red-400">
                  {vehicle.exclusions.map((exclusion, index) => (
                    <div key={index}>• {exclusion}</div>
                  ))}
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                <p className="text-sm text-blue-700 dark:text-blue-400">
                  <strong>Note:</strong> Prices may vary during peak seasons and holidays. Contact us for the most current rates and special offers. 
                  Weekly and monthly rentals available with special pricing.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

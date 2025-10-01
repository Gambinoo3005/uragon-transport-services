import { Card, CardContent } from "@/components/ui/card"
import { getAllVehicles } from "@/lib/vehicles"

interface BrandData {
  name: string
  slug: string
}

interface BrandPricingProps {
  brand: BrandData
}

export function BrandPricing({ brand }: BrandPricingProps) {
  // Get vehicles for this brand and create pricing table
  const allVehicles = getAllVehicles()
  const brandVehicles = allVehicles.filter(vehicle => 
    vehicle.brand?.toLowerCase() === brand.slug
  )

  // Group vehicles by category for pricing table
  const pricingData = brandVehicles.reduce((acc, vehicle) => {
    const category = vehicle.category
    if (!acc[category]) {
      acc[category] = {
        category,
        vehicles: [],
        priceRange: { min: Infinity, max: 0 }
      }
    }
    
    acc[category].vehicles.push(vehicle)
    const price = parseInt(vehicle.pricePerDay.replace('₱', '').replace(',', ''))
    acc[category].priceRange.min = Math.min(acc[category].priceRange.min, price)
    acc[category].priceRange.max = Math.max(acc[category].priceRange.max, price)
    
    return acc
  }, {} as Record<string, any>)

  const pricingRows = Object.values(pricingData).map((category: any) => ({
    category: category.category,
    priceRange: category.priceRange.min === category.priceRange.max 
      ? `₱${category.priceRange.min.toLocaleString()}`
      : `₱${category.priceRange.min.toLocaleString()} - ₱${category.priceRange.max.toLocaleString()}`,
    vehicles: category.vehicles.map((v: any) => v.name).join(', '),
    seats: `${Math.min(...category.vehicles.map((v: any) => v.seats))}-${Math.max(...category.vehicles.map((v: any) => v.seats))} seats`,
    transmission: [...new Set(category.vehicles.map((v: any) => v.transmission))].join(' / ')
  }))

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              {brand.name} Vehicle Pricing
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Competitive rates for all {brand.name} vehicles in our fleet. All prices include comprehensive insurance and unlimited mileage within the declared province.
            </p>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-semibold">Vehicle Category</th>
                      <th className="text-left py-3 px-4 font-semibold">Available Models</th>
                      <th className="text-left py-3 px-4 font-semibold">Seating</th>
                      <th className="text-left py-3 px-4 font-semibold">Transmission</th>
                      <th className="text-right py-3 px-4 font-semibold">Daily Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricingRows.map((row, index) => (
                      <tr key={index} className="border-b hover:bg-muted/30 transition-colors">
                        <td className="py-3 px-4 font-medium">{row.category}</td>
                        <td className="py-3 px-4 text-muted-foreground text-sm">{row.vehicles}</td>
                        <td className="py-3 px-4 text-muted-foreground">{row.seats}</td>
                        <td className="py-3 px-4 text-muted-foreground">{row.transmission}</td>
                        <td className="py-3 px-4 text-right font-semibold text-primary">{row.priceRange}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">What's Included:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <div>• Comprehensive vehicle insurance</div>
                  <div>• 24/7 roadside assistance</div>
                  <div>• Unlimited mileage within declared province</div>
                  <div>• Well-maintained {brand.name} vehicles</div>
                  <div>• Basic vehicle documentation</div>
                  <div>• Emergency contact support</div>
                </div>
              </div>

              <div className="mt-4 p-4 bg-red-50 dark:bg-red-950/20 rounded-lg">
                <h3 className="font-semibold text-red-700 dark:text-red-400 mb-2">Not Included:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-red-600 dark:text-red-400">
                  <div>• Fuel costs</div>
                  <div>• Toll fees</div>
                  <div>• Parking fees</div>
                  <div>• Traffic violations and fines</div>
                  <div>• Driver services</div>
                  <div>• Additional accessories</div>
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

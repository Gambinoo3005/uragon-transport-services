import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Percent, Calendar, Gift, Star } from "lucide-react"
import Link from "next/link"

const promos = [
  {
    id: "monthly",
    title: "Monthly Rentals",
    discount: "Up to 30% off",
    description: "Perfect for long-term business trips or extended stays",
    icon: Calendar,
    popular: true,
  },
  {
    id: "weekly",
    title: "Weekly Rentals",
    discount: "10% off",
    description: "Great for week-long adventures and business trips",
    icon: Calendar,
    popular: false,
  },
  {
    id: "3day",
    title: "3-Day Rentals",
    discount: "5% off",
    description: "Ideal for weekend getaways and short trips",
    icon: Calendar,
    popular: false,
  },
  {
    id: "6plus1",
    title: "6+1 Promo",
    discount: "1 Day Free",
    description: "Rent for 6 days, get 1 day free - maximum savings!",
    icon: Gift,
    popular: true,
  },
]

export function PromosSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Promos & <span className="text-primary">Discounts</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Save more with our special offers and long-term rental discounts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {promos.map((promo) => {
              const IconComponent = promo.icon
              return (
                <Card key={promo.id} className="h-full hover:shadow-lg transition-shadow group relative">
                  {promo.popular && (
                    <Badge className="absolute -top-2 -right-2 bg-primary text-primary-foreground z-10">
                      <Star className="h-3 w-3 mr-1" />
                      Popular
                    </Badge>
                  )}
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">
                          {promo.title}
                        </h3>
                        <span className="text-2xl font-bold text-primary">
                          {promo.discount}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground flex-grow">
                      {promo.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center">
            <Link href="/fleet">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105">
                View Fleet
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}


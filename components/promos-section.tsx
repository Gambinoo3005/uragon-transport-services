import { ContentCard } from "@/components/ui/content-card"
import { SectionContainer, SectionHeader, StandardGrid } from "@/components/ui/content-grid"
import { Button } from "@/components/ui/button"
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
    <SectionContainer background="default">
      <SectionHeader
        title="Promos & Discounts"
        description="Save more with our special offers and long-term rental discounts"
        highlight="Discounts"
      />

      <StandardGrid variant="4col" gap="md" className="mb-12">
        {promos.map((promo) => (
          <ContentCard
            key={promo.id}
            type="promo"
            icon={promo.icon}
            title={promo.title}
            description={promo.description}
            discount={promo.discount}
            popular={promo.popular}
          />
        ))}
      </StandardGrid>

      <div className="text-center">
        <Link href="/fleet">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105">
            View Fleet
          </Button>
        </Link>
      </div>
    </SectionContainer>
  )
}


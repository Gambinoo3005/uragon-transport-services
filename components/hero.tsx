import { FullScreenHero } from "@/components/ui/hero-components"

export function Hero() {
  return (
    <FullScreenHero
      title="Trusted Car Rental Service in Bicol Region"
      description="Unlock your journey with car rental in Bicol region. Get well-maintained units, comprehensive insurance, and 24/7 roadside assistance."
      backgroundImage="/mayon_hero.jpg"
      backgroundAlt="Car rental in Bicol with scenic Mayon Volcano view"
      highlight="Bicol Region"
      buttons={[
        {
          text: "Book Now",
          href: "/contact",
          variant: "default"
        },
        {
          text: "View Fleet",
          href: "/fleet",
          variant: "outline"
        }
      ]}
    />
  )
}

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin } from "lucide-react"
import { cn } from "@/lib/utils"

interface LocationHeroAction {
  label: string
  href: string
}

interface LocationLandingHeroProps {
  location: string
  tagline: string
  description: string
  badge?: string
  primaryAction: LocationHeroAction
  secondaryAction?: LocationHeroAction
  className?: string
}

export function LocationLandingHero({
  location,
  tagline,
  description,
  badge,
  primaryAction,
  secondaryAction,
  className
}: LocationLandingHeroProps) {
  return (
    <section
      className={cn(
        "relative flex items-center overflow-hidden cta-banner-primary text-white",
        "py-12 md:py-14 lg:py-0 lg:h-80",
        className
      )}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute -right-24 top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -left-24 bottom-0 h-48 w-48 rounded-full bg-primary/30 blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl">
          {/* Badge and location */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <div className="flex items-center gap-2 text-white">
              <MapPin className="h-4 w-4" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
                {location}
              </span>
            </div>
            {badge && (
              <Badge variant="secondary" className="text-xs bg-white/20 text-white border-white/30">
                {badge}
              </Badge>
            )}
          </div>

          {/* Main heading */}
          <h1 className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold leading-tight text-balance mb-4">
            {tagline}
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg text-white/85 leading-relaxed max-w-3xl mb-6">
            {description}
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              asChild
              className="bg-white text-primary hover:bg-white/90"
            >
              <Link href={primaryAction.href}>
                {primaryAction.label}
              </Link>
            </Button>
            {secondaryAction && (
              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-transparent border-white/60 text-white hover:bg-white/15 hover:text-white"
              >
                <Link href={secondaryAction.href}>
                  {secondaryAction.label}
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

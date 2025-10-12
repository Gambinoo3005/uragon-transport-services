import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ServiceHeroAction {
  label: string
  href: string
}

interface ServiceLandingHeroProps {
  eyebrow?: string
  title: string
  description: string
  primaryAction: ServiceHeroAction
  secondaryAction?: ServiceHeroAction
  className?: string
}

export function ServiceLandingHero({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  className
}: ServiceLandingHeroProps) {
  return (
    <section
      className={cn(
        "relative flex items-center overflow-hidden cta-banner-primary text-white",
        "py-12 md:py-14 lg:py-0 lg:h-80",
        className
      )}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute -right-24 top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -left-24 bottom-0 h-48 w-48 rounded-full bg-primary/30 blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl">
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
              {eyebrow}
            </p>
          )}

          <h1 className="mt-4 text-3xl md:text-4xl lg:text-[2.5rem] font-bold leading-tight text-balance">
            {title}
          </h1>

          <p className="mt-4 text-base md:text-lg text-white/85 leading-relaxed max-w-3xl">
            {description}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
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

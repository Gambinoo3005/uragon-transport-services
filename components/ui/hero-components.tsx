import { Button } from "@/components/ui/button"
import { StatsGridBlock } from "@/components/ui/content-blocks"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { LucideIcon } from "lucide-react"

// ============================================================================
// PAGE HERO COMPONENT (for section headers)
// ============================================================================

interface PageHeroProps {
  title: string
  subtitle?: string
  description?: string
  highlight?: string
  background?: 'default' | 'muted' | 'gradient'
  stats?: Array<{
    number: string
    label: string
    description?: string
  }>
  className?: string
  children?: React.ReactNode
}

export function PageHero({
  title,
  subtitle,
  description,
  highlight,
  background = 'gradient',
  stats,
  className,
  children
}: PageHeroProps) {
  const backgroundClasses = {
    default: 'bg-background',
    muted: 'bg-muted',
    gradient: 'cta-banner-primary'
  }

  return (
    <section className={cn('h-80 flex items-center', backgroundClasses[background], className)}>
      <div className="container mx-auto px-4 w-full">
        <div className="max-w-4xl mx-auto text-center">
          {subtitle && (
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-3 font-medium">{subtitle}</p>
          )}
          
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 text-balance">
            {highlight ? (
              <>
                {title.split(highlight)[0]}
                <span className="text-white/90">{highlight}</span>
                {title.split(highlight)[1]}
              </>
            ) : (
              title
            )}
          </h1>
          
          {description && (
            <p className="text-base md:text-lg lg:text-xl text-white/80 mb-6 text-pretty leading-relaxed">
              {description}
            </p>
          )}

          {children}

          {stats && stats.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mt-8">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// FULL SCREEN HERO COMPONENT (for homepage)
// ============================================================================

interface FullScreenHeroProps {
  title: string
  subtitle?: string
  description: string
  backgroundImage: string
  backgroundAlt: string
  highlight?: string
  buttons?: Array<{
    text: string
    href: string
    variant?: 'default' | 'secondary' | 'outline'
    icon?: LucideIcon
  }>
  className?: string
}

export function FullScreenHero({
  title,
  subtitle,
  description,
  backgroundImage,
  backgroundAlt,
  highlight,
  buttons = [],
  className
}: FullScreenHeroProps) {
  return (
    <section className={cn('relative min-h-screen flex items-center justify-center overflow-hidden', className)}>
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt={backgroundAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center -mt-[65px]">
        <div className="max-w-4xl mx-auto">
          <div className="relative mb-6 md:mb-8">
            <h1 className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 text-balance leading-[0.9] tracking-tight">
              <span className="block text-white drop-shadow-2xl">
                {title.split(highlight || '')[0]}
                {highlight && (
                  <>
                    <span className="text-primary font-black drop-shadow-2xl">
                      {highlight}
                    </span>
                    {title.split(highlight)[1]}
                  </>
                )}
              </span>
            </h1>
          </div>
          
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 md:mb-12 text-pretty leading-relaxed max-w-3xl mx-auto px-2">
            {description}
          </p>

          {buttons.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
              {buttons.map((button, index) => {
                const ButtonIcon = button.icon
                return (
                  <Link key={index} href={button.href}>
                    <Button
                      variant={button.variant || 'default'}
                      size="lg"
                      className={cn(
                        "px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105",
                        button.variant === 'secondary' && "bg-background text-foreground hover:bg-background/90",
                        button.variant === 'outline' && "bg-transparent border-2 border-white text-white hover:bg-white hover:text-foreground",
                        !button.variant && "bg-primary hover:bg-primary/90 text-primary-foreground hover:shadow-primary/25"
                      )}
                    >
                      {ButtonIcon && <ButtonIcon className="h-5 w-5 mr-2" />}
                      {button.text}
                    </Button>
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// DETAIL HERO COMPONENT (for detail pages)
// ============================================================================

interface DetailHeroProps {
  title: string
  subtitle?: string
  description?: string
  badge?: string
  image?: string
  imageAlt?: string
  background?: 'default' | 'muted' | 'gradient'
  className?: string
  children?: React.ReactNode
}

export function DetailHero({
  title,
  subtitle,
  description,
  badge,
  image,
  imageAlt,
  background = 'gradient',
  className,
  children
}: DetailHeroProps) {
  const backgroundClasses = {
    default: 'bg-background',
    muted: 'bg-muted',
    gradient: 'cta-banner-primary'
  }

  return (
    <section className={cn('h-80 flex items-center', backgroundClasses[background], className)}>
      <div className="container mx-auto px-4 w-full">
        <div className="max-w-4xl mx-auto text-center">
          {badge && (
            <div className="inline-block px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-3">
              {badge}
            </div>
          )}
          
          {subtitle && (
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-3 font-medium">{subtitle}</p>
          )}
          
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 text-balance">
            {title}
          </h1>
          
          {description && (
            <p className="text-base md:text-lg lg:text-xl text-white/80 mb-6 text-pretty leading-relaxed">
              {description}
            </p>
          )}

          {children}

          {image && (
            <div className="mt-8">
              <img
                src={image}
                alt={imageAlt || title}
                className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

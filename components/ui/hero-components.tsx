import { Button } from "@/components/ui/button"
import { SectionContainer } from "@/components/ui/content-grid"
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
    gradient: 'bg-gradient-to-br from-primary/10 via-primary/15 to-primary/20'
  }

  return (
    <section className={cn('py-16', backgroundClasses[background], className)}>
      <SectionContainer>
        <div className="max-w-4xl mx-auto text-center">
          {subtitle && (
            <p className="text-xl text-primary mb-6 font-medium">{subtitle}</p>
          )}
          
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            {highlight ? (
              <>
                {title.split(highlight)[0]}
                <span className="text-primary">{highlight}</span>
                {title.split(highlight)[1]}
              </>
            ) : (
              title
            )}
          </h1>
          
          {description && (
            <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
              {description}
            </p>
          )}

          {children}

          {stats && stats.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mt-8">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-2xl font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </SectionContainer>
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
    gradient: 'bg-gradient-to-br from-primary/10 via-primary/15 to-primary/20'
  }

  return (
    <section className={cn('py-16', backgroundClasses[background], className)}>
      <SectionContainer>
        <div className="max-w-4xl mx-auto text-center">
          {badge && (
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              {badge}
            </div>
          )}
          
          {subtitle && (
            <p className="text-xl text-primary mb-6 font-medium">{subtitle}</p>
          )}
          
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            {title}
          </h1>
          
          {description && (
            <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
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
      </SectionContainer>
    </section>
  )
}

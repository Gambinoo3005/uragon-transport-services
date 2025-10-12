import * as React from 'react'
import { cn } from '@/lib/utils'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { LucideIcon } from 'lucide-react'

// Base card props
interface BaseCardProps {
  className?: string
  children?: React.ReactNode
}

// Icon card props
interface IconCardProps extends BaseCardProps {
  icon: LucideIcon
  title: string
  description: string
  href?: string
  buttonText?: string
  variant?: 'default' | 'centered' | 'horizontal'
}

// Image card props
interface ImageCardProps extends BaseCardProps {
  image: string
  imageAlt: string
  title: string
  description?: string
  href?: string
  buttonText?: string
  badges?: string[]
  category?: string
  author?: string
  date?: string
  readTime?: string
}

// Feature card props
interface FeatureCardProps extends BaseCardProps {
  title: string
  description: string
  variant?: 'default' | 'compact'
}

// Promo card props
interface PromoCardProps extends BaseCardProps {
  icon: LucideIcon
  title: string
  description: string
  discount?: string
  popular?: boolean
  href?: string
  buttonText?: string
}

// Benefit card props
interface BenefitCardProps extends BaseCardProps {
  icon: LucideIcon
  title: string
  description: string
  variant?: 'default' | 'compact'
}

// Testimonial card props
interface TestimonialCardProps extends BaseCardProps {
  name: string
  location: string
  rating: number
  text: string
  service: string
  image?: string
}

// Team member card props
interface TeamCardProps extends BaseCardProps {
  name: string
  role: string
  description: string
  image: string
}

// Union type for all card variants
type ContentCardProps = 
  | ({ type: 'icon' } & IconCardProps)
  | ({ type: 'image' } & ImageCardProps)
  | ({ type: 'feature' } & FeatureCardProps)
  | ({ type: 'promo' } & PromoCardProps)
  | ({ type: 'benefit' } & BenefitCardProps)
  | ({ type: 'testimonial' } & TestimonialCardProps)
  | ({ type: 'team' } & TeamCardProps)

export function ContentCard(props: ContentCardProps) {
  const { type, className, ...rest } = props

  switch (type) {
    case 'icon':
      return <IconCard {...(rest as IconCardProps)} className={className} />
    case 'image':
      return <ImageCard {...(rest as ImageCardProps)} className={className} />
    case 'feature':
      return <FeatureCard {...(rest as FeatureCardProps)} className={className} />
    case 'promo':
      return <PromoCard {...(rest as PromoCardProps)} className={className} />
    case 'benefit':
      return <BenefitCard {...(rest as BenefitCardProps)} className={className} />
    case 'testimonial':
      return <TestimonialCard {...(rest as TestimonialCardProps)} className={className} />
    case 'team':
      return <TeamCard {...(rest as TeamCardProps)} className={className} />
    default:
      return null
  }
}

// Icon Card Component
function IconCard({ 
  icon: IconComponent, 
  title, 
  description, 
  href, 
  buttonText = "Learn More",
  variant = 'default',
  className 
}: IconCardProps) {
  const cardContent = (
    <Card className={cn("h-full hover:shadow-lg transition-shadow group", className)}>
      <CardContent className="p-6 flex flex-col h-full">
        {variant === 'horizontal' ? (
          <div className="flex items-center gap-4 mb-4">
            <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <IconComponent className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
          </div>
        ) : (
          <div className={cn(
            "flex items-center gap-4 mb-4",
            variant === 'centered' && "flex-col text-center"
          )}>
            <div className={cn(
              "flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center",
              variant === 'centered' && "mx-auto"
            )}>
              <IconComponent className="h-6 w-6 text-primary" />
            </div>
            <h3 className={cn(
              "text-xl font-semibold text-foreground group-hover:text-primary transition-colors",
              variant === 'centered' && "text-center"
            )}>
              {title}
            </h3>
          </div>
        )}
        
        <p className="text-muted-foreground flex-grow text-pretty">
          {description}
        </p>
        
        {href && (
          <div className="mt-6">
            <Button 
              variant="outline" 
              className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
            >
              {buttonText}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )

  return href ? <Link href={href}>{cardContent}</Link> : cardContent
}

// Image Card Component
function ImageCard({ 
  image, 
  imageAlt, 
  title, 
  description, 
  href, 
  buttonText = "Learn More",
  badges = [],
  category,
  author,
  date,
  readTime,
  className 
}: ImageCardProps) {
  const cardContent = (
    <Card className={cn("overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full", className)}>
      <div className="aspect-video overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={imageAlt}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader className="pb-3">
        {category && <Badge className="w-fit mb-2">{category}</Badge>}
        <CardTitle className="text-lg font-semibold text-foreground text-balance leading-tight">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        {description && (
          <p className="text-muted-foreground text-sm mb-4 text-pretty">{description}</p>
        )}
        
        {badges.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {badges.map((badge, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {badge}
              </Badge>
            ))}
          </div>
        )}
        
        {(author || date || readTime) && (
          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
            {author && <span>{author}</span>}
            {date && <span>{new Date(date).toLocaleDateString()}</span>}
            {readTime && <span>{readTime}</span>}
          </div>
        )}
        
        {buttonText && (
          <Button variant="outline" className="w-full">
            {buttonText}
          </Button>
        )}
      </CardContent>
    </Card>
  )

  return href ? <Link href={href}>{cardContent}</Link> : cardContent
}

// Feature Card Component
function FeatureCard({ 
  title, 
  description, 
  variant = 'default',
  className 
}: FeatureCardProps) {
  return (
    <Card className={cn("hover:shadow-lg transition-shadow", className)}>
      <CardContent className={cn("p-6", variant === 'compact' && "p-4")}>
        <h3 className={cn(
          "font-semibold text-foreground mb-3",
          variant === 'compact' ? "text-lg" : "text-xl"
        )}>
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          {description}
        </p>
      </CardContent>
    </Card>
  )
}

// Promo Card Component
function PromoCard({ 
  icon: IconComponent, 
  title, 
  description, 
  discount,
  popular = false,
  href,
  buttonText = "Learn More",
  className 
}: PromoCardProps) {
  const cardContent = (
    <Card className={cn("h-full hover:shadow-lg transition-shadow group relative", className)}>
      {popular && (
        <Badge className="absolute -top-2 -right-2 bg-primary text-primary-foreground z-10">
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
              {title}
            </h3>
            {discount && (
              <span className="text-2xl font-bold text-primary">
                {discount}
              </span>
            )}
          </div>
        </div>
        
        <p className="text-muted-foreground flex-grow">
          {description}
        </p>
        
        {href && (
          <div className="mt-6">
            <Button 
              variant="outline" 
              className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
            >
              {buttonText}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )

  return href ? <Link href={href}>{cardContent}</Link> : cardContent
}

// Benefit Card Component
function BenefitCard({ 
  icon: IconComponent, 
  title, 
  description, 
  variant = 'default',
  className 
}: BenefitCardProps) {
  return (
    <Card className={cn("text-center hover:shadow-md transition-shadow", className)}>
      <CardContent className={cn("p-6", variant === 'compact' && "p-4")}>
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <IconComponent className="h-6 w-6 text-primary" />
        </div>
        <h3 className={cn(
          "font-semibold text-foreground mb-2",
          variant === 'compact' ? "text-base" : "text-lg"
        )}>
          {title}
        </h3>
        <p className={cn(
          "text-muted-foreground leading-relaxed text-pretty",
          variant === 'compact' ? "text-sm" : "text-sm"
        )}>
          {description}
        </p>
      </CardContent>
    </Card>
  )
}

// Testimonial Card Component
function TestimonialCard({ 
  name, 
  location, 
  rating, 
  text, 
  service,
  image,
  className 
}: TestimonialCardProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardContent className="p-8 lg:p-12">
        <div className="flex items-start space-x-4">
          <div className="flex-grow">
            <p className="text-lg text-foreground mb-6 leading-relaxed text-pretty">
              "{text}"
            </p>

            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold text-foreground">{name}</div>
                <div className="text-sm text-muted-foreground">{location}</div>
                <div className="text-sm text-primary font-medium mt-1">
                  {service}
                </div>
              </div>

              <div className="flex items-center space-x-1">
                {[...Array(rating)].map((_, i) => (
                  <div key={i} className="h-4 w-4 bg-primary rounded-sm" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Team Card Component
function TeamCard({ 
  name, 
  role, 
  description, 
  image,
  className 
}: TeamCardProps) {
  return (
    <div className={cn("text-center", className)}>
      <div className="mb-8">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-40 h-40 rounded-full mx-auto object-cover shadow-xl border-4 border-background"
        />
      </div>
      <h3 className="text-2xl font-semibold text-foreground mb-3">{name}</h3>
      <div className="text-primary font-medium mb-6 text-lg">{role}</div>
      <p className="text-muted-foreground text-base text-pretty leading-relaxed max-w-sm mx-auto">
        {description}
      </p>
    </div>
  )
}

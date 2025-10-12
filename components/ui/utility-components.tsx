"use client"

import * as React from 'react'
import { cn } from '@/lib/utils'
import { Button } from './button'
import { Badge } from './badge'
import { Card, CardContent } from './card'
import { 
  Phone, 
  MessageCircle, 
  Calendar, 
  MapPin, 
  Star,
  Award,
  Shield,
  Clock,
  Users,
  Car,
  CheckCircle,
  ArrowRight,
  ChevronRight
} from 'lucide-react'

// ============================================================================
// STICKY BOOKING BUTTON COMPONENT
// ============================================================================

interface StickyBookButtonProps {
  text?: string
  href?: string
  onClick?: () => void
  variant?: 'default' | 'floating' | 'bottom-bar'
  position?: 'bottom-right' | 'bottom-left' | 'bottom-center'
  className?: string
}

export function StickyBookButton({
  text = "Book Now",
  href = "/contact",
  onClick,
  variant = 'floating',
  position = 'bottom-right',
  className
}: StickyBookButtonProps) {
  const positionClasses = {
    'bottom-right': 'bottom-6 right-6',
    'bottom-left': 'bottom-6 left-6',
    'bottom-center': 'bottom-6 left-1/2 transform -translate-x-1/2'
  }

  const variantClasses = {
    default: 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg',
    floating: 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl rounded-full w-16 h-16 flex items-center justify-center',
    'bottom-bar': 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg w-full max-w-md mx-auto'
  }

  const buttonContent = variant === 'floating' ? (
    <Phone className="w-6 h-6" />
  ) : (
    <>
      {text}
      <ArrowRight className="w-4 h-4 ml-2" />
    </>
  )

  if (onClick) {
    return (
      <Button
        onClick={onClick}
        size="lg"
        className={cn(
          'fixed z-50 transition-all duration-300 hover:scale-105',
          positionClasses[position],
          variantClasses[variant],
          className
        )}
      >
        {buttonContent}
      </Button>
    )
  }

  return (
    <Button
      asChild
      size="lg"
      className={cn(
        'fixed z-50 transition-all duration-300 hover:scale-105',
        positionClasses[position],
        variantClasses[variant],
        className
      )}
    >
      <a href={href}>
        {buttonContent}
      </a>
    </Button>
  )
}

// ============================================================================
// LOYALTY CARD COMPONENT
// ============================================================================

interface LoyaltyCardProps {
  title: string
  description: string
  benefits: string[]
  icon?: React.ComponentType<{ className?: string }>
  background?: 'default' | 'gradient' | 'primary'
  className?: string
}

export function LoyaltyCard({
  title,
  description,
  benefits,
  icon: IconComponent,
  background = 'gradient',
  className
}: LoyaltyCardProps) {
  const backgroundClasses = {
    default: 'bg-background border border-border',
    gradient: 'bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20',
    primary: 'bg-primary text-primary-foreground'
  }

  return (
    <Card className={cn(
      'p-8 text-center relative overflow-hidden',
      backgroundClasses[background],
      className
    )}>
      {background === 'gradient' && (
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16" />
      )}
      
      <div className="relative z-10">
        {IconComponent && (
          <div className={cn(
            'w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6',
            background === 'primary' ? 'bg-primary-foreground/20' : 'bg-primary/10'
          )}>
            <IconComponent className={cn(
              'w-8 h-8',
              background === 'primary' ? 'text-primary-foreground' : 'text-primary'
            )} />
          </div>
        )}
        
        <h3 className={cn(
          'text-2xl font-bold mb-4',
          background === 'primary' ? 'text-primary-foreground' : 'text-foreground'
        )}>
          {title}
        </h3>
        
        <p className={cn(
          'text-lg mb-6 leading-relaxed',
          background === 'primary' ? 'text-primary-foreground/90' : 'text-muted-foreground'
        )}>
          {description}
        </p>
        
        <ul className="space-y-3 text-left">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-center space-x-3">
              <CheckCircle className={cn(
                'w-5 h-5 flex-shrink-0',
                background === 'primary' ? 'text-primary-foreground' : 'text-primary'
              )} />
              <span className={cn(
                background === 'primary' ? 'text-primary-foreground' : 'text-foreground'
              )}>
                {benefit}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  )
}

// ============================================================================
// HERO STATS COMPONENT
// ============================================================================

interface HeroStat {
  number: string
  label: string
  description?: string
}

interface HeroStatsProps {
  stats: HeroStat[]
  background?: 'default' | 'muted' | 'transparent'
  variant?: 'default' | 'cards' | 'minimal'
  className?: string
}

export function HeroStats({
  stats,
  background = 'transparent',
  variant = 'default',
  className
}: HeroStatsProps) {
  const backgroundClasses = {
    default: 'bg-background',
    muted: 'bg-muted',
    transparent: 'bg-transparent'
  }

  const variantClasses = {
    default: 'grid grid-cols-2 md:grid-cols-4 gap-6 text-center',
    cards: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4',
    minimal: 'flex justify-center space-x-8 text-center'
  }

  if (variant === 'cards') {
    return (
      <div className={cn(
        'py-8',
        backgroundClasses[background],
        className
      )}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm font-medium text-foreground mb-1">
                    {stat.label}
                  </div>
                  {stat.description && (
                    <div className="text-xs text-muted-foreground">
                      {stat.description}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={cn(
      'py-8',
      backgroundClasses[background],
      className
    )}>
      <div className="container mx-auto px-4">
        <div className={variantClasses[variant]}>
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-3xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm font-medium text-foreground mb-1">
                {stat.label}
              </div>
              {stat.description && (
                <div className="text-xs text-muted-foreground">
                  {stat.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// TOP VEHICLES COMPONENT
// ============================================================================

interface TopVehicle {
  id: string
  name: string
  category: string
  image: string
  price: string
  rating: number
  reviews: number
  features: string[]
  href: string
}

interface TopVehiclesProps {
  title: string
  description?: string
  vehicles: TopVehicle[]
  maxItems?: number
  background?: 'default' | 'muted' | 'muted/30'
  className?: string
}

export function TopVehicles({
  title,
  description,
  vehicles,
  maxItems = 3,
  background = 'default',
  className
}: TopVehiclesProps) {
  const displayVehicles = vehicles.slice(0, maxItems)

  return (
    <div className={cn(
      'py-16',
      background === 'default' && 'bg-background',
      background === 'muted' && 'bg-muted',
      background === 'muted/30' && 'bg-muted/30',
      className
    )}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayVehicles.map((vehicle) => (
            <Card key={vehicle.id} className="group hover:shadow-lg transition-shadow duration-200">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-background/90 text-foreground">
                    {vehicle.category}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-foreground">
                    {vehicle.name}
                  </h3>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm text-muted-foreground">
                      {vehicle.rating} ({vehicle.reviews})
                    </span>
                  </div>
                </div>
                
                <div className="text-2xl font-bold text-primary mb-4">
                  {vehicle.price}
                </div>
                
                <ul className="space-y-2 mb-6">
                  {vehicle.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button asChild className="w-full">
                  <a href={vehicle.href}>
                    View Details
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// FLEET HIGHLIGHTS COMPONENT
// ============================================================================

interface FleetHighlight {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  value?: string
}

interface FleetHighlightsProps {
  title: string
  description?: string
  highlights: FleetHighlight[]
  background?: 'default' | 'muted' | 'muted/30'
  className?: string
}

export function FleetHighlights({
  title,
  description,
  highlights,
  background = 'muted/30',
  className
}: FleetHighlightsProps) {
  return (
    <div className={cn(
      'py-16',
      background === 'default' && 'bg-background',
      background === 'muted' && 'bg-muted',
      background === 'muted/30' && 'bg-muted/30',
      className
    )}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <highlight.icon className="w-8 h-8 text-primary" />
              </div>
              {highlight.value && (
                <div className="text-3xl font-bold text-primary mb-2">
                  {highlight.value}
                </div>
              )}
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {highlight.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// VEHICLE FILTERS COMPONENT
// ============================================================================

interface FilterOption {
  value: string
  label: string
  count?: number
}

interface VehicleFiltersProps {
  categories: FilterOption[]
  priceRanges: FilterOption[]
  features: FilterOption[]
  selectedCategory?: string
  selectedPriceRange?: string
  selectedFeatures: string[]
  onCategoryChange: (category: string) => void
  onPriceRangeChange: (priceRange: string) => void
  onFeatureToggle: (feature: string) => void
  onClearFilters: () => void
  className?: string
}

export function VehicleFilters({
  categories,
  priceRanges,
  features,
  selectedCategory,
  selectedPriceRange,
  selectedFeatures,
  onCategoryChange,
  onPriceRangeChange,
  onFeatureToggle,
  onClearFilters,
  className
}: VehicleFiltersProps) {
  return (
    <Card className={cn('p-6', className)}>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-foreground">Filters</h3>
          <Button variant="outline" size="sm" onClick={onClearFilters}>
            Clear All
          </Button>
        </div>

        {/* Category Filter */}
        <div>
          <h4 className="text-sm font-medium text-foreground mb-3">Category</h4>
          <div className="space-y-2">
            {categories.map((category) => (
              <label key={category.value} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="category"
                  value={category.value}
                  checked={selectedCategory === category.value}
                  onChange={(e) => onCategoryChange(e.target.value)}
                  className="text-primary focus:ring-primary"
                />
                <span className="text-sm text-foreground">
                  {category.label}
                  {category.count && (
                    <span className="text-muted-foreground ml-1">({category.count})</span>
                  )}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range Filter */}
        <div>
          <h4 className="text-sm font-medium text-foreground mb-3">Price Range</h4>
          <div className="space-y-2">
            {priceRanges.map((range) => (
              <label key={range.value} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="priceRange"
                  value={range.value}
                  checked={selectedPriceRange === range.value}
                  onChange={(e) => onPriceRangeChange(e.target.value)}
                  className="text-primary focus:ring-primary"
                />
                <span className="text-sm text-foreground">{range.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Features Filter */}
        <div>
          <h4 className="text-sm font-medium text-foreground mb-3">Features</h4>
          <div className="space-y-2">
            {features.map((feature) => (
              <label key={feature.value} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedFeatures.includes(feature.value)}
                  onChange={() => onFeatureToggle(feature.value)}
                  className="text-primary focus:ring-primary rounded"
                />
                <span className="text-sm text-foreground">
                  {feature.label}
                  {feature.count && (
                    <span className="text-muted-foreground ml-1">({feature.count})</span>
                  )}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
}

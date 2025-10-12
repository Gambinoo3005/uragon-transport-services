"use client"

import * as React from 'react'
import { cn } from '@/lib/utils'
import { SectionContainer, SectionHeader } from './content-grid'
import { ContentCard } from './content-card'
import { StandardGrid } from './content-grid'
import { Button } from './button'
import { Badge } from './badge'
import { Card, CardContent, CardHeader, CardTitle } from './card'
import { 
  CheckCircle, 
  Star, 
  Award, 
  Shield, 
  Clock, 
  Users, 
  MapPin, 
  Phone,
  Mail,
  MessageCircle,
  ArrowRight,
  ChevronRight
} from 'lucide-react'

// ============================================================================
// STORY SECTION COMPONENT
// ============================================================================

interface StorySectionProps {
  title: string
  subtitle?: string
  description: string
  image?: string
  imageAlt?: string
  reverse?: boolean
  background?: 'default' | 'muted' | 'muted/30'
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl'
  className?: string
}

export function StorySection({
  title,
  subtitle,
  description,
  image,
  imageAlt,
  reverse = false,
  background = 'default',
  maxWidth = '6xl',
  className
}: StorySectionProps) {
  return (
    <SectionContainer background={background} className={className}>
      <div className={cn(
        "grid gap-12 items-center",
        reverse ? "lg:grid-cols-[1fr,1fr]" : "lg:grid-cols-[1fr,1fr]",
        maxWidth === 'sm' && "max-w-sm mx-auto",
        maxWidth === 'md' && "max-w-md mx-auto",
        maxWidth === 'lg' && "max-w-lg mx-auto",
        maxWidth === 'xl' && "max-w-xl mx-auto",
        maxWidth === '2xl' && "max-w-2xl mx-auto",
        maxWidth === '3xl' && "max-w-3xl mx-auto",
        maxWidth === '4xl' && "max-w-4xl mx-auto",
        maxWidth === '5xl' && "max-w-5xl mx-auto",
        maxWidth === '6xl' && "max-w-6xl mx-auto",
        maxWidth === '7xl' && "max-w-7xl mx-auto"
      )}>
        {/* Content */}
        <div className={cn("space-y-6", reverse && "lg:order-2")}>
          {subtitle && (
            <Badge variant="outline" className="text-primary border-primary">
              {subtitle}
            </Badge>
          )}
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        {/* Image */}
        {image && (
          <div className={cn("relative", reverse && "lg:order-1")}>
            <div className="aspect-video rounded-lg overflow-hidden bg-muted">
              <img
                src={image}
                alt={imageAlt || title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </SectionContainer>
  )
}

// ============================================================================
// PROMISE SECTION COMPONENT
// ============================================================================

interface PromiseItem {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

interface PromiseSectionProps {
  title: string
  description?: string
  promises: PromiseItem[]
  background?: 'default' | 'muted' | 'muted/30'
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl'
  className?: string
}

export function PromiseSection({
  title,
  description,
  promises,
  background = 'muted/30',
  maxWidth = '6xl',
  className
}: PromiseSectionProps) {
  return (
    <SectionContainer background={background} className={className}>
      <SectionHeader
        title={title}
        description={description}
        maxWidth={maxWidth}
      />

      <StandardGrid variant="3col" gap="lg">
        {promises.map((promise, index) => (
          <ContentCard
            key={index}
            type="icon"
            icon={promise.icon}
            title={promise.title}
            description={promise.description}
            variant="centered"
          />
        ))}
      </StandardGrid>
    </SectionContainer>
  )
}

// ============================================================================
// MISSION VISION SECTION COMPONENT
// ============================================================================

interface MissionVisionProps {
  mission: {
    title: string
    description: string
    icon: React.ComponentType<{ className?: string }>
  }
  vision: {
    title: string
    description: string
    icon: React.ComponentType<{ className?: string }>
  }
  background?: 'default' | 'muted' | 'muted/30'
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl'
  className?: string
}

export function MissionVisionSection({
  mission,
  vision,
  background = 'default',
  maxWidth = '4xl',
  className
}: MissionVisionProps) {
  return (
    <SectionContainer background={background} className={className}>
      <div className={cn(
        "grid gap-8 md:grid-cols-2",
        maxWidth === 'sm' && "max-w-sm mx-auto",
        maxWidth === 'md' && "max-w-md mx-auto",
        maxWidth === 'lg' && "max-w-lg mx-auto",
        maxWidth === 'xl' && "max-w-xl mx-auto",
        maxWidth === '2xl' && "max-w-2xl mx-auto",
        maxWidth === '3xl' && "max-w-3xl mx-auto",
        maxWidth === '4xl' && "max-w-4xl mx-auto",
        maxWidth === '5xl' && "max-w-5xl mx-auto",
        maxWidth === '6xl' && "max-w-6xl mx-auto",
        maxWidth === '7xl' && "max-w-7xl mx-auto"
      )}>
        {/* Mission */}
        <Card className="text-center p-8">
          <CardHeader>
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <mission.icon className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="text-2xl font-bold text-foreground">
              {mission.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              {mission.description}
            </p>
          </CardContent>
        </Card>

        {/* Vision */}
        <Card className="text-center p-8">
          <CardHeader>
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <vision.icon className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="text-2xl font-bold text-foreground">
              {vision.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              {vision.description}
            </p>
          </CardContent>
        </Card>
      </div>
    </SectionContainer>
  )
}

// ============================================================================
// TEAM SECTION COMPONENT
// ============================================================================

interface TeamMember {
  name: string
  role: string
  image: string
  bio?: string
  social?: {
    linkedin?: string
    twitter?: string
    email?: string
  }
}

interface TeamSectionProps {
  title: string
  description?: string
  members: TeamMember[]
  background?: 'default' | 'muted' | 'muted/30'
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl'
  className?: string
}

export function TeamSection({
  title,
  description,
  members,
  background = 'muted/30',
  maxWidth = '6xl',
  className
}: TeamSectionProps) {
  return (
    <SectionContainer background={background} className={className}>
      <SectionHeader
        title={title}
        description={description}
        maxWidth={maxWidth}
      />

      <StandardGrid variant="4col" gap="lg">
        {members.map((member, index) => (
          <Card key={index} className="text-center overflow-hidden">
            <div className="aspect-square relative">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {member.name}
              </h3>
              <p className="text-primary font-medium mb-3">
                {member.role}
              </p>
              {member.bio && (
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </StandardGrid>
    </SectionContainer>
  )
}

// ============================================================================
// SERVICE AREAS SECTION COMPONENT
// ============================================================================

interface ServiceArea {
  name: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  features: string[]
}

interface ServiceAreasSectionProps {
  title: string
  description?: string
  areas: ServiceArea[]
  background?: 'default' | 'muted' | 'muted/30'
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl'
  className?: string
}

export function ServiceAreasSection({
  title,
  description,
  areas,
  background = 'default',
  maxWidth = '6xl',
  className
}: ServiceAreasSectionProps) {
  return (
    <SectionContainer background={background} className={className}>
      <SectionHeader
        title={title}
        description={description}
        maxWidth={maxWidth}
      />

      <StandardGrid variant="3col" gap="lg">
        {areas.map((area, index) => (
          <Card key={index} className="h-full">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <area.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  {area.name}
                </CardTitle>
              </div>
              <p className="text-muted-foreground">
                {area.description}
              </p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {area.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </StandardGrid>
    </SectionContainer>
  )
}

// ============================================================================
// SAFETY SUPPORT SECTION COMPONENT
// ============================================================================

interface SafetySupportItem {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  features: string[]
}

interface SafetySupportSectionProps {
  title: string
  description?: string
  items: SafetySupportItem[]
  background?: 'default' | 'muted' | 'muted/30'
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl'
  className?: string
}

export function SafetySupportSection({
  title,
  description,
  items,
  background = 'muted/30',
  maxWidth = '6xl',
  className
}: SafetySupportSectionProps) {
  return (
    <SectionContainer background={background} className={className}>
      <SectionHeader
        title={title}
        description={description}
        maxWidth={maxWidth}
      />

      <StandardGrid variant="2col" gap="lg">
        {items.map((item, index) => (
          <Card key={index} className="h-full">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  {item.title}
                </CardTitle>
              </div>
              <p className="text-muted-foreground">
                {item.description}
              </p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {item.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </StandardGrid>
    </SectionContainer>
  )
}

// ============================================================================
// POPULAR SERVICES SECTION COMPONENT
// ============================================================================

interface PopularService {
  name: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  href: string
  popular?: boolean
}

interface PopularServicesSectionProps {
  title: string
  description?: string
  services: PopularService[]
  background?: 'default' | 'muted' | 'muted/30'
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl'
  className?: string
}

export function PopularServicesSection({
  title,
  description,
  services,
  background = 'default',
  maxWidth = '6xl',
  className
}: PopularServicesSectionProps) {
  return (
    <SectionContainer background={background} className={className}>
      <SectionHeader
        title={title}
        description={description}
        maxWidth={maxWidth}
      />

      <StandardGrid variant="3col" gap="lg">
        {services.map((service, index) => (
          <Card key={index} className="group hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                {service.popular && (
                  <Badge variant="default" className="bg-primary text-primary-foreground">
                    Popular
                  </Badge>
                )}
              </div>
              <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                {service.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                {service.description}
              </p>
              <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </StandardGrid>
    </SectionContainer>
  )
}

// ============================================================================
// TRUST SIGNALS SECTION COMPONENT
// ============================================================================

interface TrustSignal {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  value?: string
}

interface TrustSignalsSectionProps {
  title: string
  description?: string
  signals: TrustSignal[]
  background?: 'default' | 'muted' | 'muted/30'
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl'
  className?: string
}

export function TrustSignalsSection({
  title,
  description,
  signals,
  background = 'muted/30',
  maxWidth = '6xl',
  className
}: TrustSignalsSectionProps) {
  return (
    <SectionContainer background={background} className={className}>
      <SectionHeader
        title={title}
        description={description}
        maxWidth={maxWidth}
      />

      <StandardGrid variant="4col" gap="lg">
        {signals.map((signal, index) => (
          <div key={index} className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <signal.icon className="w-8 h-8 text-primary" />
            </div>
            {signal.value && (
              <div className="text-3xl font-bold text-primary mb-2">
                {signal.value}
              </div>
            )}
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {signal.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {signal.description}
            </p>
          </div>
        ))}
      </StandardGrid>
    </SectionContainer>
  )
}

// ============================================================================
// CONTACT INFO SECTION COMPONENT
// ============================================================================

interface ContactInfoItem {
  icon: React.ComponentType<{ className?: string }>
  title: string
  value: string
  href?: string
}

interface ContactInfoSectionProps {
  title: string
  description?: string
  items: ContactInfoItem[]
  background?: 'default' | 'muted' | 'muted/30'
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl'
  className?: string
}

export function ContactInfoSection({
  title,
  description,
  items,
  background = 'default',
  maxWidth = '4xl',
  className
}: ContactInfoSectionProps) {
  return (
    <SectionContainer background={background} className={className}>
      <SectionHeader
        title={title}
        description={description}
        maxWidth={maxWidth}
      />

      <StandardGrid variant="3col" gap="lg">
        {items.map((item, index) => (
          <Card key={index} className="text-center p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <item.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {item.title}
            </h3>
            {item.href ? (
              <a
                href={item.href}
                className="text-primary hover:text-primary/80 transition-colors"
              >
                {item.value}
              </a>
            ) : (
              <p className="text-muted-foreground">
                {item.value}
              </p>
            )}
          </Card>
        ))}
      </StandardGrid>
    </SectionContainer>
  )
}

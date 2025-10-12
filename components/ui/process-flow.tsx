"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

// ============================================================================
// PROCESS FLOW COMPONENT
// ============================================================================

interface ProcessStep {
  id: string | number
  number: string
  title: string
  description: string
  icon?: string // Icon name as string instead of component
  details?: string
  requirements?: string[]
  tips?: string[]
}

interface ProcessFlowProps {
  title?: string
  description?: string
  steps: ProcessStep[]
  variant?: 'simple' | 'detailed' | 'interactive'
  layout?: 'horizontal' | 'vertical' | 'grid'
  background?: 'default' | 'muted' | 'muted/30'
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl'
  showNumbers?: boolean
  showIcons?: boolean
  highlight?: string
  className?: string
}

export function ProcessFlow({
  title = "How It Works",
  description,
  steps,
  variant = 'simple',
  layout = 'grid',
  background = 'muted/30',
  maxWidth = '6xl',
  showNumbers = true,
  showIcons = true,
  highlight,
  className
}: ProcessFlowProps) {
  const [activeStep, setActiveStep] = useState<string | number | null>(null)

  const backgroundClasses = {
    default: 'bg-background',
    muted: 'bg-muted',
    'muted/30': 'bg-muted/30'
  }

  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
    '6xl': 'max-w-6xl',
    '7xl': 'max-w-7xl'
  }

  const layoutClasses = {
    horizontal: 'flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8',
    vertical: 'flex flex-col space-y-8',
    grid: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
  }

  const renderSimpleStep = (step: ProcessStep, index: number) => {
    const isActive = activeStep === step.id

    return (
      <div
        key={step.id}
        className={cn(
          'text-center p-6 rounded-lg transition-all duration-300',
          variant === 'simple' && 'bg-background border border-border hover:border-primary/50',
          variant === 'detailed' && 'bg-background border border-border hover:shadow-lg',
          variant === 'interactive' && 'bg-background border border-border cursor-pointer hover:border-primary/50 hover:shadow-md',
          isActive && variant === 'interactive' && 'border-primary shadow-md'
        )}
        onClick={() => variant === 'interactive' && setActiveStep(isActive ? null : step.id)}
      >
        {showNumbers && (
          <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-full text-lg font-bold mb-4">
            {step.number}
          </div>
        )}
        
        {showIcons && step.icon && (
          <div className="flex justify-center mb-4">
            <div className="h-8 w-8 text-primary flex items-center justify-center">
              <span className="text-2xl">{step.icon}</span>
            </div>
          </div>
        )}

        <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
        <p className="text-muted-foreground leading-relaxed">{step.description}</p>

        {variant === 'detailed' && step.details && (
          <div className="mt-4 p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground">{step.details}</p>
          </div>
        )}

        {variant === 'interactive' && isActive && (
          <div className="mt-4 space-y-3">
            {step.requirements && step.requirements.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">Requirements:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {step.requirements.map((req, reqIndex) => (
                    <li key={reqIndex} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {step.tips && step.tips.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">Tips:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {step.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start">
                      <span className="text-primary mr-2">💡</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    )
  }

  const renderHorizontalStep = (step: ProcessStep, index: number) => {
    return (
      <div key={step.id} className="flex items-center">
        <div className="text-center">
          {showNumbers && (
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-full text-lg font-bold mb-3">
              {step.number}
            </div>
          )}
          
          {showIcons && step.icon && (
            <div className="flex justify-center mb-3">
              <div className="h-6 w-6 text-primary flex items-center justify-center">
                <span className="text-lg">{step.icon}</span>
              </div>
            </div>
          )}

          <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
          <p className="text-sm text-muted-foreground max-w-xs">{step.description}</p>
        </div>
        
        {index < steps.length - 1 && (
          <div className="hidden md:block mx-4">
            <div className="w-8 h-0.5 bg-border"></div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className={cn(
      'py-16',
      backgroundClasses[background],
      className
    )}>
      <div className="container mx-auto px-4">
        <div className={cn(
          'mx-auto',
          maxWidthClasses[maxWidth]
        )}>
          {(title || description) && (
            <div className="text-center mb-12">
              {title && (
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {highlight ? (
                    <>
                      {title.split(highlight)[0]}
                      <span className="text-primary">{highlight}</span>
                      {title.split(highlight)[1]}
                    </>
                  ) : (
                    title
                  )}
                </h2>
              )}
              {description && (
                <p className="text-lg text-muted-foreground">
                  {description}
                </p>
              )}
            </div>
          )}

          <div className={layoutClasses[layout]}>
            {layout === 'horizontal' 
              ? steps.map(renderHorizontalStep)
              : steps.map(renderSimpleStep)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

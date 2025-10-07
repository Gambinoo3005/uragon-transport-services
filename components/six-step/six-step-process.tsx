"use client"

import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import { StepDot } from "./step-dot"
import { StepArrow } from "./step-arrow"
import { StepDetailDialog } from "./step-detail-dialog"
import type { Step } from "@/lib/six-step-data"

interface SixStepProcessProps {
  steps: Step[]
  title?: string
  className?: string
}

export function SixStepProcess({ steps, title = "Simple 6-Step Process", className }: SixStepProcessProps) {
  // Force re-render with updated content
  const [activeStepId, setActiveStepId] = useState<number | null>(null)
  const stepRefs = useRef<{ [key: number]: HTMLButtonElement | null }>({})
  const previousActiveStepId = useRef<number | null>(null)

  // Analytics tracking
  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined' && (window as any).va) {
      (window as any).va('track', eventName, properties)
    }
  }

  // Track overview view on mount
  useEffect(() => {
    trackEvent('process_overview_viewed')
  }, [])

  // Handle step activation
  const handleStepActivate = (stepId: number) => {
    const step = steps.find(s => s.id === stepId)
    if (!step) return

    previousActiveStepId.current = stepId
    setActiveStepId(stepId)
    
    // Update URL hash
    if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', `#step-${stepId}`)
    }

    trackEvent('process_step_opened', { 
      stepId, 
      label: step.label 
    })
  }

  // Handle dialog close
  const handleDialogClose = (open: boolean) => {
    if (!open) {
      const currentStep = steps.find(s => s.id === activeStepId)
      
      setActiveStepId(null)
      
      // Clear URL hash
      if (typeof window !== 'undefined') {
        window.history.replaceState(null, '', window.location.pathname)
      }

      // Return focus to the originating circle
      if (previousActiveStepId.current && stepRefs.current[previousActiveStepId.current]) {
        setTimeout(() => {
          stepRefs.current[previousActiveStepId.current!]?.focus()
        }, 100)
      }

      if (currentStep) {
        trackEvent('process_step_closed', { 
          stepId: activeStepId, 
          label: currentStep.label,
          closeMethod: 'dialog' // Could be enhanced to track specific close method
        })
      }
    }
  }

  // Handle URL hash on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash
      const match = hash.match(/#step-(\d+)/)
      if (match) {
        const stepId = parseInt(match[1])
        if (steps.find(s => s.id === stepId)) {
          setActiveStepId(stepId)
        }
      }
    }
  }, [steps])

  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false

  const activeStep = steps.find(s => s.id === activeStepId)
  const isOverviewVisible = activeStepId === null

  return (
    <section className={cn("py-16", className)}>
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground">
            From inquiry to return, we've streamlined every step for your convenience
          </p>
        </div>

        {/* Overview - always visible */}
        <div className="max-w-6xl mx-auto">
          {/* Desktop Layout (≥1024px): single row */}
          <div className="hidden lg:flex items-center justify-center space-x-4">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <StepDot
                  ref={(el) => { stepRefs.current[step.id] = el }}
                  step={step}
                  size="lg"
                  onActivate={handleStepActivate}
                />
                {index < steps.length - 1 && (
                  <StepArrow direction="horizontal" />
                )}
              </div>
            ))}
          </div>

          {/* Tablet Layout (640-1023px): two rows (3+3) */}
          <div className="hidden md:block lg:hidden">
            {/* First row */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              {steps.slice(0, 3).map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <StepDot
                    ref={(el) => { stepRefs.current[step.id] = el }}
                    step={step}
                    size="md"
                    onActivate={handleStepActivate}
                  />
                  {index < 2 && (
                    <StepArrow direction="horizontal" />
                  )}
                </div>
              ))}
            </div>
            
            {/* Vertical connector between rows */}
            <div className="flex justify-center">
              <StepArrow direction="vertical" />
            </div>
            
            {/* Second row */}
            <div className="flex items-center justify-center space-x-4">
              {steps.slice(3, 6).map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <StepDot
                    ref={(el) => { stepRefs.current[step.id] = el }}
                    step={step}
                    size="md"
                    onActivate={handleStepActivate}
                  />
                  {index < 2 && (
                    <StepArrow direction="horizontal" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Layout (<640px): single column */}
          <div className="md:hidden space-y-4">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center">
                <StepDot
                  ref={(el) => { stepRefs.current[step.id] = el }}
                  step={step}
                  size="sm"
                  onActivate={handleStepActivate}
                />
                {index < steps.length - 1 && (
                  <StepArrow direction="vertical" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Pop-up Dialog */}
        <StepDetailDialog
          step={activeStep || null}
          open={activeStepId !== null}
          onOpenChange={handleDialogClose}
        />
      </div>
    </section>
  )
}

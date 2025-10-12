"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { StepDetailDialog } from "./step-detail-dialog"
import { StepDot } from "./step-dot"
import { StepArrow } from "./step-arrow"
import type { Step } from "@/lib/six-step-data"

interface SixStepProcessProps {
  steps: Step[]
  title?: string
  className?: string
}

export function SixStepProcess({ steps, title = "Simple 6-Step Process", className }: SixStepProcessProps) {
  const [selectedStep, setSelectedStep] = useState<Step | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleStepActivate = (stepId: number) => {
    const step = steps.find(s => s.id === stepId)
    if (step) {
      setSelectedStep(step)
      setIsDialogOpen(true)
    }
  }

  return (
    <>
      <section className={cn("py-16 bg-muted/30", className)}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From inquiry to return, we've streamlined every step for your convenience
            </p>
          </div>

          {/* Desktop: Horizontal flow with custom SVG arrows */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-center max-w-6xl mx-auto">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  {/* Step Circle */}
                  <div className="flex flex-col items-center">
                    <StepDot
                      step={step}
                      onActivate={handleStepActivate}
                      className="cursor-pointer hover:scale-105 transition-transform duration-200"
                    />
                  </div>

                  {/* Custom SVG Arrow between steps */}
                  {index < steps.length - 1 && (
                    <StepArrow direction="horizontal" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet: Vertical flow with custom SVG arrows */}
          <div className="lg:hidden space-y-6 max-w-2xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.id}>
                <div className="flex items-start space-x-4">
                  {/* Step Circle */}
                  <div className="flex-shrink-0">
                    <StepDot
                      step={step}
                      onActivate={handleStepActivate}
                      className="cursor-pointer hover:scale-105 transition-transform duration-200"
                    />
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 min-w-0">
                    <Card className="hover:shadow-md transition-shadow duration-200">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-foreground mb-2">
                              {step.title}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {step.summary}
                            </p>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleStepActivate(step.id)}
                            className="ml-4 flex-shrink-0"
                          >
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Custom SVG Arrow between steps */}
                {index < steps.length - 1 && (
                  <StepArrow direction="vertical" />
                )}
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Ready to start your journey? Get a quote in minutes.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get Started Now
            </Button>
          </div>
        </div>
      </section>

      {/* Step Detail Dialog */}
      <StepDetailDialog
        step={selectedStep}
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
    </>
  )
}
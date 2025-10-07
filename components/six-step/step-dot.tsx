"use client"

import { forwardRef } from "react"
import { cn } from "@/lib/utils"
import * as LucideIcons from "lucide-react"
import type { Step } from "@/lib/six-step-data"

interface StepDotProps {
  step: Step
  className?: string
  size?: "sm" | "md" | "lg"
  variant?: "default" | "brand" | "neutral" | "outline"
  onActivate: (stepId: number) => void
}

const sizeClasses = {
  sm: "w-20 h-20 text-xs",
  md: "w-24 h-24 text-sm", 
  lg: "w-28 h-28 text-base"
}

const variantClasses = {
  default: "bg-primary/10 hover:bg-primary/20 text-primary border-2 border-primary/20 hover:border-primary/40",
  brand: "bg-primary hover:bg-primary/90 text-primary-foreground border-2 border-primary",
  neutral: "bg-muted hover:bg-muted/80 text-foreground border-2 border-border hover:border-border/80",
  outline: "bg-background hover:bg-muted/50 text-foreground border-2 border-border hover:border-primary/40"
}

export const StepDot = forwardRef<HTMLButtonElement, StepDotProps>(
  ({ step, className, size = "md", variant = "default", onActivate }, ref) => {
    const IconComponent = step.icon ? (LucideIcons as any)[step.icon] : null
    
    const handleClick = () => {
      onActivate(step.id)
    }
    
    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault()
        onActivate(step.id)
      }
    }

    return (
      <button
        ref={ref}
        role="button"
        aria-label={`Step ${step.id}: ${step.label}`}
        className={cn(
          "relative rounded-full transition-all duration-200 ease-out",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
          "active:scale-95 transform-gpu",
          "flex flex-col items-center justify-center gap-1",
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        data-view-transition-name={`step-${step.id}`}
      >
        {/* Step number badge - large and overlapping */}
        <div className="absolute -top-3 -right-3 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold z-10 shadow-lg border-2 border-background">
          {step.id}
        </div>
        
        {/* Icon */}
        {IconComponent && (
          <IconComponent className="w-5 h-5 mb-1" />
        )}
        
        {/* Label */}
        <span className="font-medium leading-tight text-center px-1 truncate max-w-full">
          {step.label}
        </span>
      </button>
    )
  }
)

StepDot.displayName = "StepDot"

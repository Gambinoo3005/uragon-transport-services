"use client"

import * as React from 'react'
import { cn } from '@/lib/utils'
import { Skeleton } from '@/components/ui/skeleton'
import { Loader2, CheckCircle, XCircle, AlertTriangle, Info } from 'lucide-react'

// ============================================================================
// ANIMATION UTILITIES
// ============================================================================

export const ANIMATION_DURATIONS = {
  fast: 'duration-150',
  normal: 'duration-200',
  slow: 'duration-300',
  slower: 'duration-500'
} as const

export const ANIMATION_EASINGS = {
  linear: 'ease-linear',
  in: 'ease-in',
  out: 'ease-out',
  inOut: 'ease-in-out'
} as const

export const TRANSITION_TYPES = {
  all: 'transition-all',
  colors: 'transition-colors',
  opacity: 'transition-opacity',
  transform: 'transition-transform',
  shadow: 'transition-shadow',
  custom: 'transition-[color,box-shadow]'
} as const

// ============================================================================
// ANIMATED CONTAINER COMPONENT
// ============================================================================

interface AnimatedContainerProps {
  children: React.ReactNode
  animation?: 'fade' | 'slide' | 'scale' | 'bounce' | 'none'
  duration?: keyof typeof ANIMATION_DURATIONS
  delay?: number
  className?: string
  as?: keyof JSX.IntrinsicElements
}

export function AnimatedContainer({
  children,
  animation = 'fade',
  duration = 'normal',
  delay = 0,
  className,
  as: Component = 'div'
}: AnimatedContainerProps) {
  const animationClasses = {
    fade: 'animate-in fade-in-0',
    slide: 'animate-in slide-in-from-bottom-4',
    scale: 'animate-in zoom-in-95',
    bounce: 'animate-bounce',
    none: ''
  }

  const style = delay > 0 ? { animationDelay: `${delay}ms` } : undefined

  return (
    <Component
      className={cn(
        animationClasses[animation],
        ANIMATION_DURATIONS[duration],
        className
      )}
      style={style}
    >
      {children}
    </Component>
  )
}

// ============================================================================
// HOVER EFFECT COMPONENT
// ============================================================================

interface HoverEffectProps {
  children: React.ReactNode
  effect?: 'lift' | 'glow' | 'scale' | 'shadow' | 'border' | 'none'
  intensity?: 'subtle' | 'normal' | 'strong'
  className?: string
  as?: keyof JSX.IntrinsicElements
}

export function HoverEffect({
  children,
  effect = 'lift',
  intensity = 'normal',
  className,
  as: Component = 'div'
}: HoverEffectProps) {
  const effectClasses = {
    lift: {
      subtle: 'hover:-translate-y-0.5',
      normal: 'hover:-translate-y-1',
      strong: 'hover:-translate-y-2'
    },
    glow: {
      subtle: 'hover:shadow-lg hover:shadow-primary/10',
      normal: 'hover:shadow-xl hover:shadow-primary/20',
      strong: 'hover:shadow-2xl hover:shadow-primary/30'
    },
    scale: {
      subtle: 'hover:scale-[1.02]',
      normal: 'hover:scale-105',
      strong: 'hover:scale-110'
    },
    shadow: {
      subtle: 'hover:shadow-md',
      normal: 'hover:shadow-lg',
      strong: 'hover:shadow-xl'
    },
    border: {
      subtle: 'hover:border-primary/30',
      normal: 'hover:border-primary/50',
      strong: 'hover:border-primary'
    },
    none: {
      subtle: '',
      normal: '',
      strong: ''
    }
  }

  const baseClasses = 'transition-all duration-200 ease-out cursor-pointer'

  return (
    <Component
      className={cn(
        baseClasses,
        effectClasses[effect][intensity],
        className
      )}
    >
      {children}
    </Component>
  )
}

// ============================================================================
// LOADING COMPONENTS
// ============================================================================

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

export function LoadingSpinner({ size = 'md', className }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8',
    xl: 'h-12 w-12'
  }

  return (
    <Loader2 className={cn('animate-spin text-primary', sizeClasses[size], className)} />
  )
}

interface LoadingDotsProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function LoadingDots({ size = 'md', className }: LoadingDotsProps) {
  const sizeClasses = {
    sm: 'h-1 w-1',
    md: 'h-2 w-2',
    lg: 'h-3 w-3'
  }

  return (
    <div className={cn('flex space-x-1', className)}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={cn(
            'bg-primary rounded-full animate-pulse',
            sizeClasses[size]
          )}
          style={{
            animationDelay: `${i * 0.2}s`,
            animationDuration: '1s'
          }}
        />
      ))}
    </div>
  )
}

interface LoadingBarProps {
  progress?: number
  indeterminate?: boolean
  className?: string
}

export function LoadingBar({ progress = 0, indeterminate = false, className }: LoadingBarProps) {
  return (
    <div className={cn('w-full bg-muted rounded-full h-2 overflow-hidden', className)}>
      <div
        className={cn(
          'h-full bg-primary transition-all duration-300 ease-out',
          indeterminate && 'animate-pulse'
        )}
        style={{
          width: indeterminate ? '100%' : `${Math.min(100, Math.max(0, progress))}%`,
          transform: indeterminate ? 'translateX(-100%)' : 'translateX(0)',
          animation: indeterminate ? 'loading-bar 1.5s ease-in-out infinite' : undefined
        }}
      />
    </div>
  )
}

// ============================================================================
// ENHANCED SKELETON COMPONENTS
// ============================================================================

interface SkeletonCardProps {
  className?: string
  showImage?: boolean
  showTitle?: boolean
  showDescription?: boolean
  showButton?: boolean
}

export function SkeletonCard({
  className,
  showImage = true,
  showTitle = true,
  showDescription = true,
  showButton = true
}: SkeletonCardProps) {
  return (
    <div className={cn('p-6 space-y-4', className)}>
      {showImage && (
        <Skeleton className="h-48 w-full rounded-lg" />
      )}
      {showTitle && (
        <Skeleton className="h-6 w-3/4" />
      )}
      {showDescription && (
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/6" />
        </div>
      )}
      {showButton && (
        <Skeleton className="h-10 w-32" />
      )}
    </div>
  )
}

interface SkeletonListProps {
  items?: number
  className?: string
  showAvatar?: boolean
  showTitle?: boolean
  showDescription?: boolean
}

export function SkeletonList({
  items = 3,
  className,
  showAvatar = false,
  showTitle = true,
  showDescription = true
}: SkeletonListProps) {
  return (
    <div className={cn('space-y-4', className)}>
      {Array.from({ length: items }).map((_, i) => (
        <div key={i} className="flex items-center space-x-4">
          {showAvatar && (
            <Skeleton className="h-12 w-12 rounded-full" />
          )}
          <div className="flex-1 space-y-2">
            {showTitle && (
              <Skeleton className="h-4 w-1/4" />
            )}
            {showDescription && (
              <Skeleton className="h-3 w-3/4" />
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

// ============================================================================
// STATUS INDICATOR COMPONENT
// ============================================================================

interface StatusIndicatorProps {
  status: 'loading' | 'success' | 'error' | 'warning' | 'info'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  animated?: boolean
}

export function StatusIndicator({
  status,
  size = 'md',
  className,
  animated = true
}: StatusIndicatorProps) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8'
  }

  const statusConfig = {
    loading: {
      icon: LoadingSpinner,
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    success: {
      icon: CheckCircle,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    error: {
      icon: XCircle,
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    warning: {
      icon: AlertTriangle,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    info: {
      icon: Info,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    }
  }

  const config = statusConfig[status]
  const IconComponent = config.icon

  return (
    <div className={cn(
      'flex items-center justify-center rounded-full',
      config.bgColor,
      sizeClasses[size],
      className
    )}>
      <IconComponent
        className={cn(
          sizeClasses[size],
          config.color,
          animated && status === 'loading' && 'animate-spin'
        )}
      />
    </div>
  )
}

// ============================================================================
// FADE TRANSITION COMPONENT
// ============================================================================

interface FadeTransitionProps {
  children: React.ReactNode
  show: boolean
  duration?: keyof typeof ANIMATION_DURATIONS
  className?: string
  as?: keyof JSX.IntrinsicElements
}

export function FadeTransition({
  children,
  show,
  duration = 'normal',
  className,
  as: Component = 'div'
}: FadeTransitionProps) {
  return (
    <Component
      className={cn(
        'transition-opacity',
        ANIMATION_DURATIONS[duration],
        show ? 'opacity-100' : 'opacity-0 pointer-events-none',
        className
      )}
    >
      {children}
    </Component>
  )
}

// ============================================================================
// SLIDE TRANSITION COMPONENT
// ============================================================================

interface SlideTransitionProps {
  children: React.ReactNode
  show: boolean
  direction?: 'up' | 'down' | 'left' | 'right'
  duration?: keyof typeof ANIMATION_DURATIONS
  className?: string
  as?: keyof JSX.IntrinsicElements
}

export function SlideTransition({
  children,
  show,
  direction = 'up',
  duration = 'normal',
  className,
  as: Component = 'div'
}: SlideTransitionProps) {
  const directionClasses = {
    up: show ? 'translate-y-0' : 'translate-y-4',
    down: show ? 'translate-y-0' : '-translate-y-4',
    left: show ? 'translate-x-0' : 'translate-x-4',
    right: show ? 'translate-x-0' : '-translate-x-4'
  }

  return (
    <Component
      className={cn(
        'transition-transform',
        ANIMATION_DURATIONS[duration],
        directionClasses[direction],
        show ? 'opacity-100' : 'opacity-0',
        className
      )}
    >
      {children}
    </Component>
  )
}

// ============================================================================
// STAGGERED ANIMATION COMPONENT
// ============================================================================

interface StaggeredAnimationProps {
  children: React.ReactNode[]
  delay?: number
  duration?: keyof typeof ANIMATION_DURATIONS
  className?: string
  as?: keyof JSX.IntrinsicElements
}

export function StaggeredAnimation({
  children,
  delay = 100,
  duration = 'normal',
  className,
  as: Component = 'div'
}: StaggeredAnimationProps) {
  return (
    <Component className={className}>
      {children.map((child, index) => (
        <AnimatedContainer
          key={index}
          animation="fade"
          duration={duration}
          delay={index * delay}
        >
          {child}
        </AnimatedContainer>
      ))}
    </Component>
  )
}

// ============================================================================
// INTERACTIVE STATES COMPONENT
// ============================================================================

interface InteractiveStatesProps {
  children: React.ReactNode
  states?: ('hover' | 'focus' | 'active' | 'disabled')[]
  className?: string
  as?: keyof JSX.IntrinsicElements
}

export function InteractiveStates({
  children,
  states = ['hover', 'focus', 'active'],
  className,
  as: Component = 'div'
}: InteractiveStatesProps) {
  const stateClasses = {
    hover: 'hover:bg-accent hover:text-accent-foreground',
    focus: 'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
    active: 'active:scale-95',
    disabled: 'disabled:opacity-50 disabled:pointer-events-none'
  }

  const classes = states.map(state => stateClasses[state]).join(' ')

  return (
    <Component
      className={cn(
        'transition-all duration-200 ease-out',
        classes,
        className
      )}
    >
      {children}
    </Component>
  )
}

// ============================================================================
// ANIMATION HOOKS
// ============================================================================

export function useAnimation(duration: number = 300) {
  const [isAnimating, setIsAnimating] = React.useState(false)

  const startAnimation = React.useCallback(() => {
    setIsAnimating(true)
    const timer = setTimeout(() => setIsAnimating(false), duration)
    return () => clearTimeout(timer)
  }, [duration])

  return { isAnimating, startAnimation }
}

export function useStaggeredAnimation(items: any[], delay: number = 100) {
  const [visibleItems, setVisibleItems] = React.useState<number[]>([])

  React.useEffect(() => {
    const timers: NodeJS.Timeout[] = []
    
    items.forEach((_, index) => {
      const timer = setTimeout(() => {
        setVisibleItems(prev => [...prev, index])
      }, index * delay)
      timers.push(timer)
    })

    return () => timers.forEach(clearTimeout)
  }, [items, delay])

  return visibleItems
}

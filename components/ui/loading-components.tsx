"use client"

import * as React from 'react'
import { cn } from '@/lib/utils'
import { Skeleton } from '@/components/ui/skeleton'
import { 
  LoadingSpinner, 
  LoadingDots, 
  LoadingBar, 
  SkeletonCard, 
  SkeletonList,
  StatusIndicator 
} from '@/components/ui/animation-components'

// ============================================================================
// LOADING OVERLAY COMPONENT
// ============================================================================

interface LoadingOverlayProps {
  isLoading: boolean
  children: React.ReactNode
  spinner?: boolean
  message?: string
  className?: string
}

export function LoadingOverlay({
  isLoading,
  children,
  spinner = true,
  message,
  className
}: LoadingOverlayProps) {
  return (
    <div className={cn('relative', className)}>
      {children}
      {isLoading && (
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="flex flex-col items-center space-y-4">
            {spinner && <LoadingSpinner size="lg" />}
            {message && (
              <p className="text-sm text-muted-foreground text-center">
                {message}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

// ============================================================================
// LOADING BUTTON COMPONENT
// ============================================================================

interface LoadingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
  loadingText?: string
  children: React.ReactNode
}

export function LoadingButton({
  loading = false,
  loadingText = 'Loading...',
  children,
  disabled,
  className,
  ...props
}: LoadingButtonProps) {
  return (
    <button
      disabled={disabled || loading}
      className={cn(
        'inline-flex items-center justify-center gap-2',
        'transition-all duration-200',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        className
      )}
      {...props}
    >
      {loading && <LoadingSpinner size="sm" />}
      {loading ? loadingText : children}
    </button>
  )
}

// ============================================================================
// LOADING CARD COMPONENT
// ============================================================================

interface LoadingCardProps {
  isLoading: boolean
  children: React.ReactNode
  skeletonProps?: {
    showImage?: boolean
    showTitle?: boolean
    showDescription?: boolean
    showButton?: boolean
  }
  className?: string
}

export function LoadingCard({
  isLoading,
  children,
  skeletonProps = {},
  className
}: LoadingCardProps) {
  if (isLoading) {
    return <SkeletonCard {...skeletonProps} className={className} />
  }

  return <div className={className}>{children}</div>
}

// ============================================================================
// LOADING LIST COMPONENT
// ============================================================================

interface LoadingListProps {
  isLoading: boolean
  children: React.ReactNode
  items?: number
  skeletonProps?: {
    showAvatar?: boolean
    showTitle?: boolean
    showDescription?: boolean
  }
  className?: string
}

export function LoadingList({
  isLoading,
  children,
  items = 3,
  skeletonProps = {},
  className
}: LoadingListProps) {
  if (isLoading) {
    return <SkeletonList items={items} {...skeletonProps} className={className} />
  }

  return <div className={className}>{children}</div>
}

// ============================================================================
// LOADING STATE COMPONENT
// ============================================================================

interface LoadingStateProps {
  status: 'idle' | 'loading' | 'success' | 'error'
  loadingMessage?: string
  successMessage?: string
  errorMessage?: string
  children?: React.ReactNode
  className?: string
}

export function LoadingState({
  status,
  loadingMessage = 'Loading...',
  successMessage = 'Success!',
  errorMessage = 'Something went wrong',
  children,
  className
}: LoadingStateProps) {
  const getStatusConfig = () => {
    switch (status) {
      case 'loading':
        return {
          icon: <LoadingSpinner size="md" />,
          message: loadingMessage,
          color: 'text-primary'
        }
      case 'success':
        return {
          icon: <StatusIndicator status="success" size="md" />,
          message: successMessage,
          color: 'text-green-600'
        }
      case 'error':
        return {
          icon: <StatusIndicator status="error" size="md" />,
          message: errorMessage,
          color: 'text-red-600'
        }
      default:
        return null
    }
  }

  const config = getStatusConfig()

  if (!config) {
    return <div className={className}>{children}</div>
  }

  return (
    <div className={cn('flex flex-col items-center justify-center space-y-4 p-8', className)}>
      {config.icon}
      <p className={cn('text-sm font-medium', config.color)}>
        {config.message}
      </p>
    </div>
  )
}

// ============================================================================
// PROGRESS LOADING COMPONENT
// ============================================================================

interface ProgressLoadingProps {
  progress: number
  message?: string
  showPercentage?: boolean
  className?: string
}

export function ProgressLoading({
  progress,
  message,
  showPercentage = true,
  className
}: ProgressLoadingProps) {
  return (
    <div className={cn('w-full space-y-2', className)}>
      {message && (
        <p className="text-sm text-muted-foreground text-center">
          {message}
        </p>
      )}
      <LoadingBar progress={progress} />
      {showPercentage && (
        <p className="text-xs text-muted-foreground text-center">
          {Math.round(progress)}%
        </p>
      )}
    </div>
  )
}

// ============================================================================
// SKELETON GRID COMPONENT
// ============================================================================

interface SkeletonGridProps {
  items?: number
  columns?: number
  className?: string
  itemClassName?: string
}

export function SkeletonGrid({
  items = 6,
  columns = 3,
  className,
  itemClassName
}: SkeletonGridProps) {
  return (
    <div className={cn(
      'grid gap-4',
      columns === 1 && 'grid-cols-1',
      columns === 2 && 'grid-cols-1 md:grid-cols-2',
      columns === 3 && 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      columns === 4 && 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
      className
    )}>
      {Array.from({ length: items }).map((_, i) => (
        <SkeletonCard key={i} className={itemClassName} />
      ))}
    </div>
  )
}

// ============================================================================
// LOADING HOOKS
// ============================================================================

export function useLoading(initialState = false) {
  const [isLoading, setIsLoading] = React.useState(initialState)

  const startLoading = React.useCallback(() => setIsLoading(true), [])
  const stopLoading = React.useCallback(() => setIsLoading(false), [])
  const toggleLoading = React.useCallback(() => setIsLoading(prev => !prev), [])

  return {
    isLoading,
    startLoading,
    stopLoading,
    toggleLoading,
    setIsLoading
  }
}

export function useAsyncLoading<T extends (...args: any[]) => Promise<any>>(
  asyncFunction: T
) {
  const { isLoading, startLoading, stopLoading } = useLoading()

  const execute = React.useCallback(async (...args: Parameters<T>) => {
    try {
      startLoading()
      const result = await asyncFunction(...args)
      return result
    } finally {
      stopLoading()
    }
  }, [asyncFunction, startLoading, stopLoading])

  return {
    isLoading,
    execute
  }
}

// ============================================================================
// LOADING CONTEXT
// ============================================================================

interface LoadingContextType {
  globalLoading: boolean
  setGlobalLoading: (loading: boolean) => void
  loadingStates: Record<string, boolean>
  setLoadingState: (key: string, loading: boolean) => void
}

const LoadingContext = React.createContext<LoadingContextType | undefined>(undefined)

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [globalLoading, setGlobalLoading] = React.useState(false)
  const [loadingStates, setLoadingStates] = React.useState<Record<string, boolean>>({})

  const setLoadingState = React.useCallback((key: string, loading: boolean) => {
    setLoadingStates(prev => ({
      ...prev,
      [key]: loading
    }))
  }, [])

  return (
    <LoadingContext.Provider
      value={{
        globalLoading,
        setGlobalLoading,
        loadingStates,
        setLoadingState
      }}
    >
      {children}
    </LoadingContext.Provider>
  )
}

export function useLoadingContext() {
  const context = React.useContext(LoadingContext)
  if (!context) {
    throw new Error('useLoadingContext must be used within a LoadingProvider')
  }
  return context
}

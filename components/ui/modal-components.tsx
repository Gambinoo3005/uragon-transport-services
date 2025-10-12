"use client"

import * as React from 'react'
import { X, AlertTriangle, Info, CheckCircle, XCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter,
  DialogClose
} from '@/components/ui/dialog'
import { 
  AlertDialog, 
  AlertDialogContent, 
  AlertDialogHeader, 
  AlertDialogTitle, 
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel
} from '@/components/ui/alert-dialog'
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetDescription,
  SheetFooter
} from '@/components/ui/sheet'

// ============================================================================
// UNIFIED MODAL COMPONENT
// ============================================================================

interface ModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title?: string
  description?: string
  children: React.ReactNode
  variant?: 'default' | 'alert' | 'sheet'
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  side?: 'top' | 'right' | 'bottom' | 'left'
  showCloseButton?: boolean
  closeOnOverlayClick?: boolean
  closeOnEscape?: boolean
  className?: string
}

export function Modal({
  open,
  onOpenChange,
  title,
  description,
  children,
  variant = 'default',
  size = 'md',
  side = 'right',
  showCloseButton = true,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  className
}: ModalProps) {
  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    full: 'max-w-[95vw] max-h-[95vh]'
  }

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      onOpenChange(false)
    }
  }

  const handleEscape = (e: KeyboardEvent) => {
    if (closeOnEscape && e.key === 'Escape' && open) {
      onOpenChange(false)
    }
  }

  React.useEffect(() => {
    if (closeOnEscape) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [open, closeOnEscape])

  if (variant === 'alert') {
    return (
      <AlertDialog open={open} onOpenChange={onOpenChange}>
        <AlertDialogContent 
          className={cn(sizeClasses[size], className)}
          onPointerDownOutside={closeOnOverlayClick ? undefined : (e) => e.preventDefault()}
        >
          {title && (
            <AlertDialogHeader>
              <AlertDialogTitle>{title}</AlertDialogTitle>
              {description && (
                <AlertDialogDescription>{description}</AlertDialogDescription>
              )}
            </AlertDialogHeader>
          )}
          {children}
        </AlertDialogContent>
      </AlertDialog>
    )
  }

  if (variant === 'sheet') {
    return (
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent 
          side={side}
          className={cn(className)}
          onPointerDownOutside={closeOnOverlayClick ? undefined : (e) => e.preventDefault()}
        >
          {title && (
            <SheetHeader>
              <SheetTitle>{title}</SheetTitle>
              {description && (
                <SheetDescription>{description}</SheetDescription>
              )}
            </SheetHeader>
          )}
          {children}
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className={cn(sizeClasses[size], className)}
        showCloseButton={showCloseButton}
        onPointerDownOutside={closeOnOverlayClick ? undefined : (e) => e.preventDefault()}
      >
        {title && (
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            {description && (
              <DialogDescription>{description}</DialogDescription>
            )}
          </DialogHeader>
        )}
        {children}
      </DialogContent>
    </Dialog>
  )
}

// ============================================================================
// CONFIRMATION MODAL COMPONENT
// ============================================================================

interface ConfirmationModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onConfirm: () => void
  onCancel?: () => void
  title: string
  description?: string
  confirmText?: string
  cancelText?: string
  variant?: 'default' | 'destructive' | 'warning'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function ConfirmationModal({
  open,
  onOpenChange,
  onConfirm,
  onCancel,
  title,
  description,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  variant = 'default',
  size = 'md',
  className
}: ConfirmationModalProps) {
  const handleConfirm = () => {
    onConfirm()
    onOpenChange(false)
  }

  const handleCancel = () => {
    if (onCancel) {
      onCancel()
    }
    onOpenChange(false)
  }

  const getIcon = () => {
    switch (variant) {
      case 'destructive':
        return <XCircle className="h-6 w-6 text-red-500" />
      case 'warning':
        return <AlertTriangle className="h-6 w-6 text-yellow-500" />
      default:
        return <Info className="h-6 w-6 text-blue-500" />
    }
  }

  const getConfirmVariant = () => {
    switch (variant) {
      case 'destructive':
        return 'destructive'
      case 'warning':
        return 'default'
      default:
        return 'default'
    }
  }

  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      variant="alert"
      size={size}
      className={className}
    >
      <div className="flex items-start space-x-3">
        {getIcon()}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          {description && (
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          )}
        </div>
      </div>
      <AlertDialogFooter>
        <AlertDialogCancel onClick={handleCancel}>
          {cancelText}
        </AlertDialogCancel>
        <AlertDialogAction 
          onClick={handleConfirm}
          className={cn(
            variant === 'destructive' && 'bg-red-600 hover:bg-red-700',
            variant === 'warning' && 'bg-yellow-600 hover:bg-yellow-700'
          )}
        >
          {confirmText}
        </AlertDialogAction>
      </AlertDialogFooter>
    </Modal>
  )
}

// ============================================================================
// INFO MODAL COMPONENT
// ============================================================================

interface InfoModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  description?: string
  children?: React.ReactNode
  variant?: 'info' | 'success' | 'warning' | 'error'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showCloseButton?: boolean
  className?: string
}

export function InfoModal({
  open,
  onOpenChange,
  title,
  description,
  children,
  variant = 'info',
  size = 'md',
  showCloseButton = true,
  className
}: InfoModalProps) {
  const getIcon = () => {
    switch (variant) {
      case 'success':
        return <CheckCircle className="h-6 w-6 text-green-500" />
      case 'warning':
        return <AlertTriangle className="h-6 w-6 text-yellow-500" />
      case 'error':
        return <XCircle className="h-6 w-6 text-red-500" />
      default:
        return <Info className="h-6 w-6 text-blue-500" />
    }
  }

  const getIconBgColor = () => {
    switch (variant) {
      case 'success':
        return 'bg-green-50 border-green-200'
      case 'warning':
        return 'bg-yellow-50 border-yellow-200'
      case 'error':
        return 'bg-red-50 border-red-200'
      default:
        return 'bg-blue-50 border-blue-200'
    }
  }

  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      variant="default"
      size={size}
      showCloseButton={showCloseButton}
      className={className}
    >
      <div className="flex items-start space-x-4">
        <div className={cn(
          'flex-shrink-0 w-12 h-12 rounded-full border-2 flex items-center justify-center',
          getIconBgColor()
        )}>
          {getIcon()}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          {description && (
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          )}
          {children && (
            <div className="mt-4">
              {children}
            </div>
          )}
        </div>
      </div>
    </Modal>
  )
}

// ============================================================================
// DETAIL MODAL COMPONENT (for step details, etc.)
// ============================================================================

interface DetailModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  description?: string
  children: React.ReactNode
  icon?: React.ReactNode
  iconLabel?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  showCloseButton?: boolean
  className?: string
}

export function DetailModal({
  open,
  onOpenChange,
  title,
  description,
  children,
  icon,
  iconLabel,
  size = 'lg',
  showCloseButton = true,
  className
}: DetailModalProps) {
  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    full: 'max-w-[95vw] max-h-[95vh]'
  }

  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      variant="default"
      size={size}
      showCloseButton={showCloseButton}
      className={cn('p-0 gap-0 overflow-hidden', sizeClasses[size], className)}
    >
      {/* Custom Header */}
      <div className="px-6 py-4 border-b bg-muted/30 flex-shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {icon && (
              <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/20 flex flex-col items-center justify-center relative">
                {icon}
                {iconLabel && (
                  <span className="text-xs font-medium text-primary truncate max-w-full px-1 mt-1">
                    {iconLabel}
                  </span>
                )}
              </div>
            )}
            <div>
              <h2 className="text-2xl font-bold text-left">{title}</h2>
              {description && (
                <p className="text-sm text-muted-foreground mt-1">{description}</p>
              )}
            </div>
          </div>
          
          {showCloseButton && (
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full"
              onClick={() => onOpenChange(false)}
              aria-label="Close modal"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>

      {/* Body Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        {children}
      </div>
    </Modal>
  )
}

// ============================================================================
// FORM MODAL COMPONENT
// ============================================================================

interface FormModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  description?: string
  children: React.ReactNode
  onSubmit?: (e: React.FormEvent) => void
  submitText?: string
  cancelText?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  isLoading?: boolean
  className?: string
}

export function FormModal({
  open,
  onOpenChange,
  title,
  description,
  children,
  onSubmit,
  submitText = 'Submit',
  cancelText = 'Cancel',
  size = 'md',
  isLoading = false,
  className
}: FormModalProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (onSubmit) {
      onSubmit(e)
    }
  }

  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      variant="default"
      size={size}
      className={className}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {children}
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" disabled={isLoading}>
              {cancelText}
            </Button>
          </DialogClose>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Submitting...' : submitText}
          </Button>
        </DialogFooter>
      </form>
    </Modal>
  )
}

// ============================================================================
// MODAL UTILITIES
// ============================================================================

// Hook for managing modal state
export function useModal(initialOpen = false) {
  const [open, setOpen] = React.useState(initialOpen)

  const openModal = React.useCallback(() => setOpen(true), [])
  const closeModal = React.useCallback(() => setOpen(false), [])
  const toggleModal = React.useCallback(() => setOpen(prev => !prev), [])

  return {
    open,
    setOpen,
    openModal,
    closeModal,
    toggleModal
  }
}

// Hook for managing multiple modals
export function useModals() {
  const [modals, setModals] = React.useState<Record<string, boolean>>({})

  const openModal = React.useCallback((id: string) => {
    setModals(prev => ({ ...prev, [id]: true }))
  }, [])

  const closeModal = React.useCallback((id: string) => {
    setModals(prev => ({ ...prev, [id]: false }))
  }, [])

  const toggleModal = React.useCallback((id: string) => {
    setModals(prev => ({ ...prev, [id]: !prev[id] }))
  }, [])

  const isOpen = React.useCallback((id: string) => {
    return modals[id] || false
  }, [modals])

  return {
    modals,
    openModal,
    closeModal,
    toggleModal,
    isOpen
  }
}

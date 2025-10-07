"use client"

import { useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X, CheckCircle } from "lucide-react"
import * as LucideIcons from "lucide-react"
import { cn } from "@/lib/utils"
import type { Step } from "@/lib/six-step-data"

interface StepDetailDialogProps {
  step: Step | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function StepDetailDialog({ step, open, onOpenChange }: StepDetailDialogProps) {
  // Handle Esc key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        onOpenChange(false)
      }
    }
    
    document.addEventListener("keydown", handleEsc)
    return () => document.removeEventListener("keydown", handleEsc)
  }, [open, onOpenChange])

  if (!step) return null

  const IconComponent = step.icon ? (LucideIcons as any)[step.icon] : null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className="w-[900px] h-[400px] max-w-[95vw] max-h-[95vh] rounded-2xl p-0 gap-0 overflow-hidden [&>button]:hidden flex flex-col"
        onPointerDownOutside={() => onOpenChange(false)}
      >
        {/* Header with circle avatar clone */}
        <DialogHeader className="px-6 py-4 border-b bg-muted/30 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Circle avatar clone for morph animation */}
              <div 
                className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/20 flex flex-col items-center justify-center relative"
                data-view-transition-name={`step-${step.id}`}
              >
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold shadow-lg border-2 border-background">
                  {step.id}
                </div>
                {IconComponent && (
                  <IconComponent className="w-4 h-4 text-primary mb-0.5" />
                )}
                <span className="text-xs font-medium text-primary truncate max-w-full px-1">
                  {step.label}
                </span>
              </div>
              
              <div>
                <DialogTitle className="text-2xl font-bold text-left">
                  {step.title}
                </DialogTitle>
              </div>
            </div>
            
            {/* Close button */}
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full"
              onClick={() => onOpenChange(false)}
              aria-label="Close step details"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        {/* Body content */}
        <div className="flex-1 p-6 overflow-y-auto flex items-center justify-center">
          <div className="prose prose-base max-w-none text-foreground leading-loose text-center w-full">
            {step.id === 1 && (
              <p>
                Tell us your dates/times, destination/province, and whether you prefer self-drive or with-driver. We'll reply during 7:00 AM–7:00 PM with live availability, a clear 24-hour rate, and the inclusions so you can decide fast.
              </p>
            )}
            
            {step.id === 2 && (
              <p>
                Secure the vehicle with a ₱1,000 non-refundable reservation fee (cash/bank/online). Once posted, we'll lock your unit, confirm pickup/delivery details, and note any special requests—peak dates are first-paid, first-served.
              </p>
            )}
            
            {step.id === 3 && (
              <div className="space-y-4">
                <p>
                  Send your documents for quick verification so your unit is ready on time:
                </p>
                <div className="space-y-2 text-left inline-block">
                  <p>• Driver's license, one government ID, selfie with ID</p>
                  <p>• LTO Portal login and proof of billing</p>
                  <p>• Reservation payment confirmation</p>
                </div>
                <p>
                  Choosing with-driver? No documents needed—we'll assign a professional driver.
                </p>
              </div>
            )}
            
            {step.id === 4 && (
              <p>
                Meet us at the agreed time/place or opt for delivery. We'll do a brief walkthrough, record condition and fuel level, reconfirm your return time, and note your declared province to activate unlimited mileage coverage. You leave with keys and our hotline.
              </p>
            )}
            
            {step.id === 5 && (
              <p>
                Enjoy the trip with unlimited mileage within your declared province/destination. If anything comes up, our 24/7 roadside assistance is ready; for covered breakdowns, a replacement unit is provided (subject to availability and policy). Need an extension? Message early so we can check slots and rates.
              </p>
            )}
            
            {step.id === 6 && (
              <p>
                Return on schedule with the same fuel level as released. We'll run a quick inspection, finalize any balance, and close your booking. If you're extending, we'll confirm availability and update the agreement before your return time.
              </p>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

"use client"

import { DetailModal } from "@/components/ui/modal-components"
import * as LucideIcons from "lucide-react"
import type { Step } from "@/lib/six-step-data"

interface StepDetailDialogProps {
  step: Step | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function StepDetailDialog({ step, open, onOpenChange }: StepDetailDialogProps) {
  if (!step) return null

  const IconComponent = step.icon ? (LucideIcons as any)[step.icon] : null

  const getStepContent = () => {
    switch (step.id) {
      case 1:
        return (
          <p>
            Tell us your dates/times, destination/province, and whether you prefer self-drive or with-driver. We'll reply during 7:00 AM–7:00 PM with live availability, a clear 24-hour rate, and the inclusions so you can decide fast.
          </p>
        )
      case 2:
        return (
          <p>
            Secure the vehicle with a ₱1,000 non-refundable reservation fee (cash/bank/online). Once posted, we'll lock your unit, confirm pickup/delivery details, and note any special requests—peak dates are first-paid, first-served.
          </p>
        )
      case 3:
        return (
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
        )
      case 4:
        return (
          <p>
            Meet us at the agreed time/place or opt for delivery. We'll do a brief walkthrough, record condition and fuel level, reconfirm your return time, and note your declared province to activate unlimited mileage coverage. You leave with keys and our hotline.
          </p>
        )
      case 5:
        return (
          <p>
            Enjoy the trip with unlimited mileage within your declared province/destination. If anything comes up, our 24/7 roadside assistance is ready; for covered breakdowns, a replacement unit is provided (subject to availability and policy). Need an extension? Message early so we can check slots and rates.
          </p>
        )
      case 6:
        return (
          <p>
            Return on schedule with the same fuel level as released. We'll run a quick inspection, finalize any balance, and close your booking. If you're extending, we'll confirm availability and update the agreement before your return time.
          </p>
        )
      default:
        return <p>Step details not available.</p>
    }
  }

  const modalIcon = (
    <>
      <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold shadow-lg border-2 border-background">
        {step.id}
      </div>
      {IconComponent && (
        <IconComponent className="w-4 h-4 text-primary mb-0.5" />
      )}
    </>
  )

  return (
    <DetailModal
      open={open}
      onOpenChange={onOpenChange}
      title={step.title}
      icon={modalIcon}
      iconLabel={step.label}
      size="full"
      showCloseButton={false}
      className="w-[900px] h-[400px] max-w-[95vw] max-h-[95vh] rounded-2xl"
    >
      <div className="prose prose-base max-w-none text-foreground leading-loose text-center w-full">
        {getStepContent()}
      </div>
    </DetailModal>
  )
}

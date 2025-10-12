import { BookingForm as UnifiedBookingForm } from "@/components/ui/form-components"

export function QuickBookingForm() {
  return (
    <UnifiedBookingForm
      title="Quick Booking"
      description="Get your quote in seconds. Fill out the form below and we'll get back to you immediately."
      background="muted/30"
      maxWidth="4xl"
      redirectToContact={true}
    />
  )
}


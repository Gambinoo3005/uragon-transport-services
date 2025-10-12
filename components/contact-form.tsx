import { ContactForm as UnifiedContactForm } from "@/components/ui/form-components"

export function ContactForm() {
  return (
    <UnifiedContactForm
      variant="booking"
      showHeader={false}
      maxWidth="2xl"
    />
  )
}

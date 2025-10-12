import { FAQSection } from "@/components/ui/faq-component"
import { Vehicle } from "@/lib/vehicles"

interface VehicleFAQProps {
  vehicle: Vehicle
}

export function VehicleFAQ({ vehicle }: VehicleFAQProps) {
  // Generate vehicle-specific FAQs
  const faqs = [
    {
      question: `What documents do I need to rent the ${vehicle.name}?`,
      answer: `You need a valid driver's license, a valid ID, and a credit card for security deposit. International visitors can use their international driving permit along with their passport. The ${vehicle.name} is available for both local and international renters.`,
    },
    {
      question: `What is the minimum age requirement for the ${vehicle.name}?`,
      answer: `You must be at least 21 years old with a valid driver's license to rent the ${vehicle.name}. Drivers under 25 may be subject to additional fees. This ${vehicle.category.toLowerCase()} is perfect for responsible drivers of all ages.`,
    },
    {
      question: `Can I drive the ${vehicle.name} outside the declared province?`,
      answer: `Our unlimited mileage policy applies only within the declared province. Driving outside the province may incur additional charges and requires prior approval. The ${vehicle.name} is perfect for exploring all six provinces of Bicol Region.`,
    },
    {
      question: `What happens if the ${vehicle.name} breaks down?`,
      answer: `We provide 24/7 roadside assistance for all our vehicles including the ${vehicle.name}. If the vehicle cannot be repaired on-site, we will arrange for a replacement vehicle or alternative transportation at no extra cost.`,
    },
    {
      question: `Is the ${vehicle.name} fuel efficient?`,
      answer: `Yes, the ${vehicle.name} is designed for fuel efficiency. With its ${vehicle.specifications.engine} engine, you can expect good mileage whether you're driving in the city or on highways around Bicol.`,
    },
    {
      question: `Can I add an additional driver for the ${vehicle.name}?`,
      answer: `Yes, you can add an additional driver for a small fee. The additional driver must also meet our age and license requirements and be present during vehicle pickup. This is especially useful for long trips around Bicol.`,
    },
  ]

  return (
    <FAQSection
      title="Frequently Asked Questions"
      description={`Common questions about renting the ${vehicle.name} in Bicol.`}
      faqs={faqs}
      variant="card"
      background="default"
      maxWidth="3xl"
    />
  )
}

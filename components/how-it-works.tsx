import { ProcessFlow } from "@/components/ui/process-flow"

export function HowItWorks() {
  const steps = [
    {
      id: 1,
      number: "01",
      title: "Reserve",
      description: "Pick a unit and travel dates; pay the reservation fee to confirm."
    },
    {
      id: 2,
      number: "02",
      title: "Verify",
      description: "Submit the required IDs and details for quick approval."
    },
    {
      id: 3,
      number: "03",
      title: "Pick-Up or Delivery",
      description: "Get the vehicle at our location or have it delivered; return with the same fuel level."
    }
  ]

  return (
    <div>
      <ProcessFlow
        title="How It Works (3 Easy Steps)"
        description="Simple 3-step process to get your car rental"
        steps={steps}
        variant="simple"
        layout="grid"
        background="default"
        maxWidth="6xl"
        showNumbers={true}
        showIcons={false}
        highlight="(3 Easy Steps)"
      />
      
      <div className="text-center py-8 bg-background">
        <div className="container mx-auto px-4">
          <p className="text-xl text-muted-foreground">
            Perfect for <span className="font-semibold text-foreground">car hire in Bicol</span> needs—from weddings to business trips.
          </p>
        </div>
      </div>
    </div>
  )
}

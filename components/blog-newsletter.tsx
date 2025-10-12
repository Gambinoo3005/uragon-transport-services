import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SectionContainer, SectionHeader } from "@/components/ui/content-grid"

export function BlogNewsletter() {
  return (
    <SectionContainer background="muted" padding="lg">
      <div className="max-w-2xl mx-auto text-center">
        <SectionHeader
          title="Stay Updated with Travel Tips"
          description="Get the latest travel guides, car rental tips, and exclusive offers delivered to your inbox."
          centered={true}
          maxWidth="2xl"
        />
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input type="email" placeholder="Enter your email" className="flex-1" />
          <Button className="bg-primary hover:bg-primary/90">Subscribe</Button>
        </div>
        <p className="text-xs text-muted-foreground mt-4">No spam, unsubscribe at any time.</p>
      </div>
    </SectionContainer>
  )
}

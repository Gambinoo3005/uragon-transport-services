import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function BlogNewsletter() {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Stay Updated with Travel Tips</h2>
          <p className="text-muted-foreground mb-8 text-pretty">
            Get the latest travel guides, car rental tips, and exclusive offers delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input type="email" placeholder="Enter your email" className="flex-1" />
            <Button className="bg-primary hover:bg-primary/90">Subscribe</Button>
          </div>
          <p className="text-xs text-muted-foreground mt-4">No spam, unsubscribe at any time.</p>
        </div>
      </div>
    </section>
  )
}

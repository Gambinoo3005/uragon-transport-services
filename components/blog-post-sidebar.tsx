import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function BlogPostSidebar() {
  return (
    <div className="space-y-8">
      {/* Newsletter Signup */}
      <Card>
        <CardHeader>
          <CardTitle>Stay Updated</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Get travel tips and rental deals delivered to your inbox.
          </p>
          <div className="space-y-3">
            <Input type="email" placeholder="Your email" />
            <Button className="w-full">Subscribe</Button>
          </div>
        </CardContent>
      </Card>

      {/* Popular Tags */}
      <Card>
        <CardHeader>
          <CardTitle>Popular Tags</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {["Mayon Volcano", "Car Rental", "Bicol Travel", "Food Guide", "Beach Hopping", "Budget Travel"].map(
              (tag) => (
                <Button key={tag} variant="outline" size="sm" className="text-xs bg-transparent">
                  {tag}
                </Button>
              ),
            )}
          </div>
        </CardContent>
      </Card>

      {/* Quick Contact */}
      <Card>
        <CardHeader>
          <CardTitle>Need a Rental Car?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">Ready to explore Bicol? Book your rental car now.</p>
          <Button className="w-full">Book Now</Button>
        </CardContent>
      </Card>
    </div>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { Star, Clock, Zap, Gift, Percent, Calendar } from "lucide-react"

export function LoyaltyCard() {
  return (
    <section className="relative py-12 bg-gradient-to-br from-primary/5 via-background to-primary/10 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Pricing Section */}
            <div className="text-center md:text-left space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 flex items-center justify-center md:justify-start gap-2">
                  <Star className="w-6 h-6 text-primary" />
                  Loyalty Card
                </h2>
                <div className="mb-4">
                  <div className="text-5xl font-bold text-primary">₱99.00</div>
                  <p className="text-muted-foreground text-sm">One-time membership fee</p>
                </div>
              </div>
              
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
              >
                Get Your Card Today
              </Button>
            </div>

            {/* Benefits Grid */}
            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold text-foreground mb-6 text-center md:text-left flex items-center justify-center md:justify-start gap-2">
                <Gift className="w-5 h-5 text-primary" />
                Member Benefits
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-background/80 backdrop-blur-sm hover:bg-background/90 transition-all duration-300 group border border-border/50">
                  <div className="bg-primary/10 rounded-lg p-2 group-hover:bg-primary/20 transition-colors duration-300">
                    <Clock className="w-4 h-4 flex-shrink-0 text-primary" />
                  </div>
                  <div>
                    <div className="text-base font-medium">12 Hours Free Rental</div>
                    <div className="text-sm text-muted-foreground">on participating units</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-xl bg-background/80 backdrop-blur-sm hover:bg-background/90 transition-all duration-300 group border border-border/50">
                  <div className="bg-primary/10 rounded-lg p-2 group-hover:bg-primary/20 transition-colors duration-300">
                    <Zap className="w-4 h-4 flex-shrink-0 text-primary" />
                  </div>
                  <div>
                    <div className="text-base font-medium">Priority Booking Access</div>
                    <div className="text-sm text-muted-foreground">skip the wait</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-xl bg-background/80 backdrop-blur-sm hover:bg-background/90 transition-all duration-300 group border border-border/50">
                  <div className="bg-primary/10 rounded-lg p-2 group-hover:bg-primary/20 transition-colors duration-300">
                    <Gift className="w-4 h-4 flex-shrink-0 text-primary" />
                  </div>
                  <div>
                    <div className="text-base font-medium">Exclusive Member Promos</div>
                    <div className="text-sm text-muted-foreground">member-only deals</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-xl bg-background/80 backdrop-blur-sm hover:bg-background/90 transition-all duration-300 group border border-border/50">
                  <div className="bg-primary/10 rounded-lg p-2 group-hover:bg-primary/20 transition-colors duration-300">
                    <Star className="w-4 h-4 flex-shrink-0 text-primary" />
                  </div>
                  <div>
                    <div className="text-base font-medium">Free Upgrades</div>
                    <div className="text-sm text-muted-foreground">on select vehicles</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-xl bg-background/80 backdrop-blur-sm hover:bg-background/90 transition-all duration-300 group border border-border/50">
                  <div className="bg-primary/10 rounded-lg p-2 group-hover:bg-primary/20 transition-colors duration-300">
                    <Percent className="w-4 h-4 flex-shrink-0 text-primary" />
                  </div>
                  <div>
                    <div className="text-base font-medium">5% Off</div>
                    <div className="text-sm text-muted-foreground">3rd and 7th rental day</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-xl bg-background/80 backdrop-blur-sm hover:bg-background/90 transition-all duration-300 group border border-border/50">
                  <div className="bg-primary/10 rounded-lg p-2 group-hover:bg-primary/20 transition-colors duration-300">
                    <Calendar className="w-4 h-4 flex-shrink-0 text-primary" />
                  </div>
                  <div>
                    <div className="text-base font-medium">12 Hours Free</div>
                    <div className="text-sm text-muted-foreground">on 10th rental day</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

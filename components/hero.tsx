"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/mayon_hero.jpg"
          alt="Car rental in Bicol with scenic Mayon Volcano view"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center -mt-[65px]">
        <div className="max-w-4xl mx-auto">
          <div className="relative mb-6 md:mb-8">
            {/* Main heading with enhanced styling */}
            <h1 className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 text-balance leading-[0.9] tracking-tight">
              <span className="block text-white drop-shadow-2xl">
                Trusted Car Rental Service
              </span>
              
              <span className="block mt-2 text-white drop-shadow-2xl">
                in{" "}
                <span className="text-primary font-black drop-shadow-2xl">
                  Bicol Region
                </span>
              </span>
            </h1>
            
          </div>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 md:mb-12 text-pretty leading-relaxed max-w-3xl mx-auto px-2">
            Unlock your journey, travel anywhere. Get well-maintained units, comprehensive insurance, and 24/7 roadside assistance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                Book Now
              </Button>
            </Link>
            <Link href="/rates">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-black bg-transparent px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full backdrop-blur-sm hover:backdrop-blur-none transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                View Rates
              </Button>
            </Link>
          </div>
        </div>
      </div>

    </section>
  )
}

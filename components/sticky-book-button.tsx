"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function StickyBookButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 md:hidden">
      <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg rounded-full px-6">
        <Phone className="h-4 w-4 mr-2" />
        Book Now
      </Button>
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import { StickyBookButton as UnifiedStickyBookButton } from "@/components/ui/utility-components"

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
    <UnifiedStickyBookButton
      text="Book Now"
      href="/contact"
      variant="floating"
      position="bottom-right"
      className="md:hidden"
    />
  )
}

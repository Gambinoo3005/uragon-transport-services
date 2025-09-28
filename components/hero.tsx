"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import Link from "next/link"

export function Hero() {
  const [currentPlace, setCurrentPlace] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [shuffledPlaces, setShuffledPlaces] = useState<string[]>([])
  const [recentPlaces, setRecentPlaces] = useState<string[]>([])

  const places = [
    "Albay",
    "Legazpi",
    "Tabaco",
    "Ligao",
    "Malilipot",
    "Polangui",
    "Oas",
    "Libon",
    "Guinobatan",
    "Camalig",
    "Daraga",
    "Rapu-Rapu",
    "Jovellar",
    "Manito",
    "Pio Duran",
    "Tiwi"
  ]

  // Function to shuffle array
  const shuffleArray = (array: string[]) => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  // Function to get next place avoiding recent ones
  const getNextPlace = () => {
    if (shuffledPlaces.length === 0) {
      const shuffled = shuffleArray(places)
      setShuffledPlaces(shuffled)
      return shuffled[0]
    }

    // Filter out recent places (last 4)
    const availablePlaces = shuffledPlaces.filter(place => !recentPlaces.includes(place))
    
    // If all places have been used recently, reset recent places and use all places
    if (availablePlaces.length === 0) {
      setRecentPlaces([])
      const shuffled = shuffleArray(places)
      setShuffledPlaces(shuffled)
      return shuffled[0]
    }

    // Get random place from available ones
    const randomIndex = Math.floor(Math.random() * availablePlaces.length)
    return availablePlaces[randomIndex]
  }

  // Initialize shuffled places on component mount
  useEffect(() => {
    const shuffled = shuffleArray(places)
    setShuffledPlaces(shuffled)
  }, [])

  useEffect(() => {
    if (shuffledPlaces.length === 0) return
    
    const current = shuffledPlaces[currentPlace]
    
    if (!isDeleting) {
      if (displayText.length < current.length) {
        const timeout = setTimeout(() => {
          setDisplayText(current.slice(0, displayText.length + 1))
        }, 100)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => {
          setIsDeleting(true)
        }, 2000)
        return () => clearTimeout(timeout)
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 50)
        return () => clearTimeout(timeout)
      } else {
        setIsDeleting(false)
        
        // Add current place to recent places
        const currentPlaceName = shuffledPlaces[currentPlace]
        setRecentPlaces(prev => {
          const updated = [...prev, currentPlaceName]
          // Keep only last 4 places
          return updated.length > 4 ? updated.slice(-4) : updated
        })
        
        // Get next place
        const nextPlace = getNextPlace()
        const nextIndex = shuffledPlaces.indexOf(nextPlace)
        
        if (nextIndex !== -1) {
          setCurrentPlace(nextIndex)
        } else {
          // If place not found in current shuffled array, get a new shuffled array
          const newShuffled = shuffleArray(places)
          setShuffledPlaces(newShuffled)
          setCurrentPlace(0)
        }
      }
    }
  }, [displayText, isDeleting, currentPlace, shuffledPlaces])

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
          <div className="relative mb-8">
            {/* Main heading with enhanced styling */}
            <h1 className="relative text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 text-balance leading-[0.9] tracking-tight">
              <span className="block text-white drop-shadow-2xl">
                Rent with
              </span>
              
              <span className="block mt-2 text-white drop-shadow-2xl">
                Confidence in
              </span>
              
              <div className="block mt-2 relative text-center">
                <span className="text-primary drop-shadow-2xl font-black relative whitespace-nowrap">
                  <span className="invisible">Rapu-Rapu</span>
                  <span className="absolute left-1/2 transform -translate-x-1/2 whitespace-nowrap text-primary">
                    {displayText}
                  </span>
                </span>
              </div>
            </h1>
            
          </div>
          <p className="text-xl md:text-2xl text-white/90 mb-8 text-pretty leading-relaxed max-w-3xl mx-auto">
            Unlock your journey, travel anywhere. We offer affordable rates with unlimited mileage for self drive rentals. Safe, secure and clean units for every clients' convenience.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
              >
                Book Your Ride
              </Button>
            </Link>
            <Link href="/fleet">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-black bg-transparent px-12 py-4 text-lg font-semibold rounded-full backdrop-blur-sm hover:backdrop-blur-none transition-all duration-300 hover:scale-105"
              >
                View Fleet
              </Button>
            </Link>
          </div>
        </div>
      </div>

    </section>
  )
}

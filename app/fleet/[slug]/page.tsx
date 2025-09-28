import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingCTABanner } from "@/components/booking-cta-banner"
import { StickyBookButton } from "@/components/sticky-book-button"
import { VehicleDetail } from "@/components/vehicle-detail"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { notFound } from "next/navigation"

// This would typically come from a database or CMS
const vehicles = {
  "toyota-vios": {
    id: "toyota-vios",
    name: "Toyota Vios",
    category: "Sedan",
    images: ["/toyota-vios-sedan-car-rental.jpg", "/toyota-vios-interior.jpg", "/toyota-vios-dashboard.jpg"],
    seats: 5,
    transmission: "Automatic",
    fuel: "Gasoline",
    pricePerDay: "₱2,500",
    rating: 4.8,
    reviews: 124,
    description:
      "The Toyota Vios is perfect for city driving and short trips around Bicol. With its fuel-efficient engine and comfortable interior, it's ideal for couples or small families exploring the region.",
    features: [
      "Air Conditioning",
      "GPS Navigation",
      "Bluetooth Connectivity",
      "USB Charging Ports",
      "Power Steering",
      "Central Locking",
    ],
    inclusions: [
      "Comprehensive Insurance",
      "24/7 Roadside Assistance",
      "Free Delivery (Legazpi/Naga)",
      "Unlimited Mileage",
      "Basic Maintenance",
    ],
    exclusions: ["Fuel", "Toll Fees", "Parking Fees", "Driver (Self-Drive Only)"],
    specifications: {
      engine: "1.3L 4-Cylinder",
      fuelCapacity: "42 Liters",
      luggage: "2-3 Large Bags",
      doors: 4,
      aircon: "Manual A/C",
    },
  },
  "toyota-innova": {
    id: "toyota-innova",
    name: "Toyota Innova",
    category: "MPV",
    images: ["/toyota-innova-mpv-car-rental.jpg", "/toyota-innova-interior-spacious.jpg", "/toyota-innova-luggage-space.jpg"],
    seats: 8,
    transmission: "Manual",
    fuel: "Diesel",
    pricePerDay: "₱3,500",
    rating: 4.9,
    reviews: 89,
    description:
      "The Toyota Innova is our most popular family vehicle, offering spacious seating for up to 8 passengers. Perfect for family trips, group tours, and airport transfers with ample luggage space.",
    features: [
      "Spacious Interior",
      "Air Conditioning",
      "USB Charging Ports",
      "Luggage Space",
      "Power Steering",
      "ABS Brakes",
    ],
    inclusions: [
      "Comprehensive Insurance",
      "24/7 Roadside Assistance",
      "Free Delivery (Legazpi/Naga)",
      "Unlimited Mileage",
      "Basic Maintenance",
    ],
    exclusions: ["Fuel", "Toll Fees", "Parking Fees", "Driver (Self-Drive Only)"],
    specifications: {
      engine: "2.5L Diesel",
      fuelCapacity: "55 Liters",
      luggage: "4-6 Large Bags",
      doors: 4,
      aircon: "Manual A/C",
    },
  },
}

interface VehiclePageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: VehiclePageProps) {
  const vehicle = vehicles[params.slug as keyof typeof vehicles]

  if (!vehicle) {
    return {
      title: "Vehicle Not Found | Uragon Tours",
    }
  }

  return {
    title: `${vehicle.name} - ${vehicle.category} Rental | Uragon Tours`,
    description: `Rent the ${vehicle.name} for ${vehicle.pricePerDay}/day. ${vehicle.description}`,
    keywords: `${vehicle.name} rental Bicol, ${vehicle.category} rental, car rental Legazpi Naga`,
  }
}

export default function VehiclePage({ params }: VehiclePageProps) {
  const vehicle = vehicles[params.slug as keyof typeof vehicles]

  if (!vehicle) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="container mx-auto px-4 py-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/fleet">Fleet</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{vehicle.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <VehicleDetail vehicle={vehicle} />
        <BookingCTABanner />
      </main>
      <Footer />
      <StickyBookButton />
    </div>
  )
}

export async function generateStaticParams() {
  return Object.keys(vehicles).map((slug) => ({
    slug,
  }))
}

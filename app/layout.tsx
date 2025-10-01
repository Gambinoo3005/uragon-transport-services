import type React from "react"
import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Car Rental in Albay | Uragon Transport Services — Bicol-Wide Coverage",
  description:
    "Book safe, clean cars with unlimited mileage, daily rates, 24/7 roadside assistance, and delivery/pick-up across Albay and the wider Bicol Region. Self-drive or with driver. Reserve now.",
  generator: "v0.app",
  keywords: "car rental Albay, car rental Bicol, Legazpi car rental, Tabaco car rental, Daraga car rental, self drive rental, with driver service, unlimited mileage, 24/7 roadside assistance, comprehensive insurance, Bicol Region car rental",
  openGraph: {
    title: "Car Rental in Albay | Uragon Transport Services — Bicol-Wide Coverage",
    description:
      "Book safe, clean cars with unlimited mileage, daily rates, 24/7 roadside assistance, and delivery/pick-up across Albay and the wider Bicol Region. Self-drive or with driver. Reserve now.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Rental in Albay | Uragon Transport Services — Bicol-Wide Coverage",
    description:
      "Book safe, clean cars with unlimited mileage, daily rates, 24/7 roadside assistance, and delivery/pick-up across Albay and the wider Bicol Region. Self-drive or with driver. Reserve now.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} font-sans`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}

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
  title: "Car Rental in Bicol Region | Uragon Transport Services",
  description:
    "Affordable self-drive and with-driver rentals across Albay and the Bicol Region. Insured vehicles, 24/7 roadside assistance, unlimited mileage (within declared destination), and easy booking.",
  generator: "v0.app",
  keywords: "car rental in Bicol region, car rental Albay, car rental Bicol, Legazpi car rental, Tabaco car rental, Daraga car rental, self drive rental, with driver service, unlimited mileage, 24/7 roadside assistance, comprehensive insurance, Bicol Region car rental",
  openGraph: {
    title: "Car Rental in Bicol Region | Uragon Transport Services",
    description:
      "Affordable self-drive and with-driver rentals across Albay and the Bicol Region. Insured vehicles, 24/7 roadside assistance, unlimited mileage (within declared destination), and easy booking.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Rental in Bicol Region | Uragon Transport Services",
    description:
      "Affordable self-drive and with-driver rentals across Albay and the Bicol Region. Insured vehicles, 24/7 roadside assistance, unlimited mileage (within declared destination), and easy booking.",
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

"use client"

import { cn } from "@/lib/utils"

interface StepArrowProps {
  direction?: "horizontal" | "vertical"
  className?: string
}

export function StepArrow({ direction = "horizontal", className }: StepArrowProps) {
  if (direction === "vertical") {
    return (
      <div className={cn("flex justify-center py-4", className)}>
        <svg
          width="32"
          height="40"
          viewBox="0 0 32 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-primary"
          aria-hidden="true"
        >
          {/* Vertical line - solid and thick */}
          <line
            x1="16"
            y1="0"
            x2="16"
            y2="30"
            stroke="currentColor"
            strokeWidth="4"
          />
          {/* Arrow head - filled */}
          <path
            d="M10 26 L16 32 L22 26 Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    )
  }

  return (
    <div className={cn("flex items-center justify-center px-4", className)}>
      <svg
        width="60"
        height="32"
        viewBox="0 0 60 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
        aria-hidden="true"
      >
        {/* Horizontal line - solid and thick */}
        <line
          x1="0"
          y1="16"
          x2="48"
          y2="16"
          stroke="currentColor"
          strokeWidth="4"
        />
        {/* Arrow head - filled */}
        <path
          d="M44 10 L52 16 L44 22 Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

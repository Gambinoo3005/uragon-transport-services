export type Step = {
  id: 1 | 2 | 3 | 4 | 5 | 6;
  label: string;      // single word, ≤10 chars, no spaces/hyphens/underscores
  title: string;      // full title for the pop-up
  summary: string;    // 1–2 sentence overview
  details: string[];  // bullet points for the pop-up
  icon?: string;      // optional Lucide icon name
}

// Validation function for labels
export function validateStepLabel(label: string): string {
  if (/[\s\-_]/.test(label)) {
    console.warn(`Step label "${label}" contains whitespace or separators. Using first token.`);
    return label.split(/[\s\-_]/)[0];
  }
  
  if (label.length > 10) {
    console.warn(`Step label "${label}" exceeds 10 characters. Truncating.`);
    return label.substring(0, 10);
  }
  
  return label;
}

// Sample data for Uragon Transport Services
export const uragonSteps: Step[] = [
  {
    id: 1,
    label: "Inquire",
    title: "Inquire & Get a Quote",
    summary: "You provide: dates & times, destination/province, self-drive or with-driver, preferred vehicle. We respond: live availability, clear 24-hour rate, inclusions, and requirements.",
    details: [
      "You get: a ready-to-book quote plus payment options",
      "Available 7:00 AM–7:00 PM for inquiries",
      "Live availability confirmation",
      "Clear 24-hour rate structure",
      "Complete inclusions breakdown",
      "Requirements checklist provided"
    ],
    icon: "Search"
  },
  {
    id: 2,
    label: "Reserve",
    title: "Reserve Your Unit",
    summary: "You pay: ₱1,000 non-refundable reservation fee via cash/bank/online. We secure: your chosen unit and send a reservation confirmation with pickup/delivery details.",
    details: [
      "₱1,000 non-refundable reservation fee",
      "Payment via cash/bank/online",
      "Unit secured upon payment",
      "Reservation confirmation sent",
      "Pickup/delivery details included",
      "Tip: peak dates are first-paid, first-served"
    ],
    icon: "CreditCard"
  },
  {
    id: 3,
    label: "Submit",
    title: "Submit Requirements (Self-Drive)",
    summary: "You send: driver's license, 1 government ID, selfie w/ ID, LTO Portal login, proof of billing, reservation receipt. We verify: during operating hours and confirm if anything else is needed.",
    details: [
      "Driver's license (valid)",
      "1 government-issued ID",
      "Selfie with ID",
      "LTO Portal login credentials",
      "Proof of billing address",
      "Reservation receipt copy"
    ],
    icon: "FileText"
  },
  {
    id: 4,
    label: "Handover",
    title: "Handover: Pick-Up or Delivery",
    summary: "You arrive/receive: at the agreed time/place with original IDs (if self-drive). We brief: vehicle walkthrough, note fuel & condition, reconfirm return time and declared province for unlimited mileage.",
    details: [
      "Arrive with original IDs (self-drive)",
      "Complete vehicle walkthrough",
      "Note fuel level and condition",
      "Reconfirm return time",
      "Confirm declared province for unlimited mileage",
      "You leave with: keys, contact numbers, safety checklist"
    ],
    icon: "Car"
  },
  {
    id: 5,
    label: "Drive",
    title: "Drive with Confidence",
    summary: "You enjoy: unlimited mileage within your declared province/destination. We support: 24/7 roadside assistance; covered breakdowns get a replacement unit (subject to availability/policy).",
    details: [
      "Unlimited mileage within declared province",
      "24/7 roadside assistance available",
      "Replacement unit for covered breakdowns",
      "Subject to availability and policy",
      "Message early for extensions",
      "Route updates can be requested"
    ],
    icon: "MapPin"
  },
  {
    id: 6,
    label: "Return",
    title: "Return & Close-Out",
    summary: "You return: on time, same fuel level, unit in good order. We complete: quick inspection and finalize any balance. Need more time? We'll check availability and confirm updated rates.",
    details: [
      "Return on time with same fuel level",
      "Unit must be in good order",
      "Quick inspection completed",
      "Final balance calculation",
      "Extensions: availability check required",
      "Updated rates confirmed for extensions"
    ],
    icon: "CheckCircle"
  }
].map(step => ({
  ...step,
  label: validateStepLabel(step.label)
}));

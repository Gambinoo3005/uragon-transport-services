# Service Page Template Guide

This guide explains how to use the service page template to create new service pages for Uragon Transport Services.

## Template Location
The template is located at: `app/services/template/page.tsx`

## How to Use the Template

### 1. Create a New Service Page
1. Copy the template file to a new directory under `app/services/[service-name]/`
2. Rename the file to `page.tsx`
3. Update the folder name to match your service (e.g., `self-drive`, `with-driver`, `bridal-service`)

### 2. Update the Metadata
Replace the placeholder metadata with your service information:

```typescript
export const metadata = {
  title: "[Service Name] - [Service Description] | Uragon Transport Services",
  description: "[Service description for SEO]",
  keywords: "[relevant keywords separated by commas]",
}
```

**Example:**
```typescript
export const metadata = {
  title: "Self Drive Rental - Unlimited Mileage Car Rental | Uragon Transport Services",
  description: "Rent a car and drive yourself with unlimited mileage within declared province. Perfect for exploring Bicol at your own pace.",
  keywords: "self drive rental, car rental Bicol, unlimited mileage, self drive car rental Philippines",
}
```

### 3. Update the Service Data
Replace all placeholder content in the `serviceData` object:

#### Basic Information
- `title`: The main service name
- `subtitle`: Brief tagline or description
- `description`: 2-3 sentence detailed description
- `image`: Path to service image (place in `/public/` folder)

#### Features (6 recommended)
Each feature should have:
- `title`: Short, descriptive title
- `description`: Detailed explanation of the benefit

#### Inclusions & Exclusions
- `inclusions`: Array of what's included in the service
- `exclusions`: Array of what's not included

#### Pricing Table
Update the pricing array with your service rates:
- `route`: Description of the service/route
- `sedan`: Price for sedan
- `suv`: Price for SUV
- `van`: Price for van

#### FAQs (5 recommended)
Each FAQ should have:
- `question`: Common customer question
- `answer`: Detailed, helpful answer

#### Content Sections (NEW - for SEO)
The template now includes 5 additional content sections with 2 paragraphs each for better SEO:

- `introduction`: 2 paragraphs about the service and target audience
- `benefits`: 2 paragraphs explaining main benefits and value proposition
- `process`: 2 paragraphs explaining booking process and requirements
- `areas`: 2 paragraphs about service coverage and limitations
- `tips`: 2 paragraphs with practical advice and preparation tips

Each paragraph should be 1-2 sentences, focusing on essential information that readers actually need.

### 4. Update the Breadcrumb
Change the last breadcrumb item to match your service name:

```typescript
<BreadcrumbPage>[Service Name]</BreadcrumbPage>
```

### 5. Update the Component Name
Change the function name from `ServiceTemplatePage` to match your service:

```typescript
export default function [ServiceName]Page() {
```

## Template Structure

The template includes these sections:

1. **Hero Section** - Service title, subtitle, description, and CTA buttons
2. **Features Section** - Key features in a grid layout
3. **Inclusions/Exclusions** - What's included and not included
4. **Content Sections** (NEW) - 5 concise content sections for SEO:
   - About [Service Name] - Brief introduction and target audience
   - Why Choose [Service Name] - Key benefits and value proposition
   - How [Service Name] Works - Booking process and requirements
   - Service Areas - Coverage areas and limitations
   - Tips & Recommendations - Practical advice and preparation
5. **Pricing Table** - Service pricing in a table format
6. **FAQ Section** - Common questions and answers
7. **Booking CTA** - Call-to-action for booking

## Required Components

The template uses these existing components:
- `ServiceDetailHero`
- `ServiceFeatures`
- `ServicePricing`
- `ServiceFAQ`
- `BookingCTABanner`
- `StickyBookButton`

## Image Requirements

- Service images should be placed in the `/public/` folder
- Recommended size: 800x600px or similar aspect ratio
- Format: JPG or PNG
- Name files descriptively (e.g., `self-drive-service.jpg`)

## SEO Best Practices

1. **Title**: Include service name and key benefit
2. **Description**: 150-160 characters, include main keywords
3. **Keywords**: Include relevant search terms customers might use
4. **Content**: Use natural language with keywords throughout
5. **Images**: Include descriptive alt text
6. **Content Sections**: The new content sections provide 10 focused paragraphs of essential information for better SEO
7. **Keyword Density**: Naturally include primary and secondary keywords throughout the content
8. **Local SEO**: Mention specific locations, cities, and areas in Bicol
9. **Long-tail Keywords**: Include phrases customers might search for
10. **User Intent**: Address different stages of the customer journey

## Example Service Page

Here's how a completed service page might look:

```typescript
const serviceData = {
  title: "Self Drive Rental",
  subtitle: "Drive yourself with unlimited mileage",
  description: "Rent a car and explore Bicol at your own pace with our self-drive rental service. Enjoy unlimited mileage within the declared province and the freedom to create your own itinerary.",
  image: "/self-drive-service.jpg",
  features: [
    {
      title: "Unlimited Mileage",
      description: "Drive as much as you want within the declared province with no additional mileage charges.",
    },
    // ... more features
  ],
  // ... rest of the data
}
```

## Tips for Success

1. **Research Keywords**: Use tools like Google Keyword Planner to find relevant terms
2. **Customer Focus**: Write from the customer's perspective, addressing their needs
3. **Clear Pricing**: Make pricing transparent and easy to understand
4. **Comprehensive FAQs**: Address common concerns and objections
5. **Call-to-Action**: Include clear booking instructions and contact information

## File Structure Example

```
app/services/
├── template/
│   └── page.tsx (template file)
├── self-drive/
│   └── page.tsx (created from template)
├── with-driver/
│   └── page.tsx (created from template)
└── bridal-service/
    └── page.tsx (created from template)
```

This template provides a consistent structure for all service pages while allowing customization for each specific service.

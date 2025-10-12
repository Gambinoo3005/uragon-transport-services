import { SectionContainer, SectionHeader } from "@/components/ui/content-grid"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import Link from "next/link"

// ============================================================================
// FAQ COMPONENT
// ============================================================================

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  title?: string
  description?: string
  faqs: FAQItem[]
  variant?: 'default' | 'card' | 'compact'
  background?: 'default' | 'muted' | 'muted/30'
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl'
  showViewAll?: boolean
  viewAllHref?: string
  viewAllText?: string
  highlight?: string
  className?: string
}

export function FAQSection({
  title = "Frequently Asked Questions",
  description,
  faqs,
  variant = 'default',
  background = 'default',
  maxWidth = '3xl',
  showViewAll = false,
  viewAllHref = '/faqs',
  viewAllText = 'View All FAQs',
  highlight,
  className
}: FAQSectionProps) {
  const backgroundClasses = {
    default: 'bg-background',
    muted: 'bg-muted',
    'muted/30': 'bg-muted/30'
  }

  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
    '6xl': 'max-w-6xl',
    '7xl': 'max-w-7xl'
  }

  const accordionContent = (
    <Accordion type="single" collapsible className={cn(
      variant === 'compact' ? 'space-y-2' : 'space-y-4'
    )}>
      {faqs.map((faq, index) => (
        <AccordionItem 
          key={index} 
          value={`item-${index}`} 
          className={cn(
            'border rounded-lg px-6',
            variant === 'compact' && 'px-4'
          )}
        >
          <AccordionTrigger className={cn(
            'text-left font-medium hover:no-underline',
            variant === 'compact' && 'text-sm py-3'
          )}>
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className={cn(
            'text-muted-foreground leading-relaxed',
            variant === 'compact' && 'text-sm'
          )}>
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )

  const content = (
    <div className={cn(
      'py-16',
      backgroundClasses[background],
      className
    )}>
      <div className="container mx-auto px-4">
        <div className={cn(
          'mx-auto',
          maxWidthClasses[maxWidth]
        )}>
          {(title || description) && (
            <div className="text-center mb-12">
              {title && (
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
                  {highlight ? (
                    <>
                      {title.split(highlight)[0]}
                      <span className="text-primary">{highlight}</span>
                      {title.split(highlight)[1]}
                    </>
                  ) : (
                    title
                  )}
                </h2>
              )}
              {description && (
                <p className="text-lg text-muted-foreground text-pretty">
                  {description}
                </p>
              )}
            </div>
          )}

          {variant === 'card' ? (
            <Card>
              <CardContent className="p-6">
                {accordionContent}
              </CardContent>
            </Card>
          ) : (
            accordionContent
          )}

          {showViewAll && (
            <div className="text-center mt-8">
              <Link href={viewAllHref}>
                <button className="text-primary hover:text-primary/80 font-semibold text-lg transition-colors">
                  {viewAllText} →
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )

  return content
}

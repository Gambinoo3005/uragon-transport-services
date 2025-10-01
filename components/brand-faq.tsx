import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface BrandData {
  name: string
  faqs: Array<{
    question: string
    answer: string
  }>
}

interface BrandFAQProps {
  brand: BrandData
}

export function BrandFAQ({ brand }: BrandFAQProps) {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Common questions about renting {brand.name} vehicles in Bicol.
            </p>
          </div>

          <Card>
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {brand.faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed text-pretty">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

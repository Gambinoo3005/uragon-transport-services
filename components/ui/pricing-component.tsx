import { SectionContainer, SectionHeader } from "@/components/ui/content-grid"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// ============================================================================
// PRICING COMPONENT
// ============================================================================

interface PricingRow {
  [key: string]: string | number
}

interface PricingColumn {
  key: string
  label: string
  align?: 'left' | 'center' | 'right'
  className?: string
}

interface PricingTableProps {
  title?: string
  description?: string
  columns: PricingColumn[]
  rows: PricingRow[]
  variant?: 'default' | 'route' | 'vehicle' | 'duration'
  background?: 'default' | 'muted' | 'muted/30'
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl'
  showDisclaimer?: boolean
  disclaimer?: string
  showCTA?: boolean
  ctaText?: string
  ctaHref?: string
  className?: string
}

export function PricingTable({
  title,
  description,
  columns,
  rows,
  variant = 'default',
  background = 'muted/30',
  maxWidth = '4xl',
  showDisclaimer = true,
  disclaimer = "Prices may vary during peak seasons and holidays. Contact us for the most current rates and special offers.",
  showCTA = false,
  ctaText = "Book Now",
  ctaHref = "/contact",
  className
}: PricingTableProps) {
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

  const getColumnAlignment = (align?: 'left' | 'center' | 'right') => {
    switch (align) {
      case 'center': return 'text-center'
      case 'right': return 'text-right'
      default: return 'text-left'
    }
  }

  const getRowClassName = (index: number) => {
    const baseClasses = 'border-b hover:bg-muted/20 transition-colors'
    const variantClasses = {
      default: '',
      route: 'hover:bg-muted/30',
      vehicle: 'hover:bg-muted/30',
      duration: 'hover:bg-muted/30'
    }
    return cn(baseClasses, variantClasses[variant])
  }

  const getCellClassName = (column: PricingColumn, isHeader = false) => {
    const baseClasses = isHeader ? 'py-4 px-2 font-semibold' : 'py-4 px-2'
    const alignmentClass = getColumnAlignment(column.align)
    const variantClasses = {
      default: '',
      route: isHeader ? '' : column.key.includes('price') ? 'text-primary font-semibold' : 'font-medium',
      vehicle: isHeader ? '' : column.key.includes('price') ? 'text-primary font-semibold' : 'text-muted-foreground',
      duration: isHeader ? '' : column.key.includes('price') ? 'text-primary font-semibold' : 'font-medium'
    }
    
    return cn(
      baseClasses,
      alignmentClass,
      column.className,
      variantClasses[variant]
    )
  }

  return (
    <div className={cn(
      'py-16',
      backgroundClasses[background],
      className
    )}>
      <SectionContainer>
        <div className={cn(
          'mx-auto',
          maxWidthClasses[maxWidth]
        )}>
          {(title || description) && (
            <SectionHeader
              title={title || 'Pricing'}
              description={description}
              maxWidth="2xl"
            />
          )}

          <Card>
            <CardContent className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      {columns.map((column, index) => (
                        <th key={index} className={getCellClassName(column, true)}>
                          {column.label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row, rowIndex) => (
                      <tr key={rowIndex} className={getRowClassName(rowIndex)}>
                        {columns.map((column, colIndex) => (
                          <td key={colIndex} className={getCellClassName(column)}>
                            {row[column.key]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {showDisclaimer && (
                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    * {disclaimer}
                  </p>
                </div>
              )}

              {showCTA && (
                <div className="mt-6 text-center">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <a href={ctaHref}>{ctaText}</a>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </SectionContainer>
    </div>
  )
}

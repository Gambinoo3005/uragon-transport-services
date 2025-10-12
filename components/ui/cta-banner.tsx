import { Button } from "@/components/ui/button"
import { SectionContainer } from "@/components/ui/content-grid"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

// ============================================================================
// CTA BANNER COMPONENT
// ============================================================================

interface CTABannerProps {
  title: string
  description: string
  buttons?: Array<{
    text: string
    href?: string
    onClick?: () => void
    variant?: 'default' | 'secondary' | 'outline'
    icon?: LucideIcon
  }>
  background?: 'primary' | 'secondary' | 'muted'
  className?: string
}

export function CTABanner({
  title,
  description,
  buttons = [],
  background = 'primary',
  className
}: CTABannerProps) {
  const backgroundClasses = {
    primary: 'bg-primary text-primary-foreground',
    secondary: 'bg-secondary text-secondary-foreground',
    muted: 'bg-muted text-muted-foreground'
  }

  const buttonClasses = {
    primary: 'bg-background text-foreground hover:bg-background/90',
    secondary: 'bg-background text-foreground hover:bg-background/90',
    muted: 'bg-primary text-primary-foreground hover:bg-primary/90'
  }

  return (
    <div className={cn(backgroundClasses[background], 'py-12', className)}>
      <SectionContainer>
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">{title}</h3>
          <p className="text-xl mb-8 leading-relaxed opacity-90">
            {description}
          </p>
          
          {buttons.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {buttons.map((button, index) => {
                const ButtonIcon = button.icon
                const buttonElement = (
                  <Button
                    key={index}
                    variant={button.variant || 'secondary'}
                    className={cn(
                      'px-8 py-3 text-lg font-semibold',
                      buttonClasses[background]
                    )}
                    onClick={button.onClick}
                  >
                    {ButtonIcon && <ButtonIcon className="h-5 w-5 mr-2" />}
                    {button.text}
                  </Button>
                )

                return button.href ? (
                  <a key={index} href={button.href}>
                    {buttonElement}
                  </a>
                ) : (
                  buttonElement
                )
              })}
            </div>
          )}
        </div>
      </SectionContainer>
    </div>
  )
}

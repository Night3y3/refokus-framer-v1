import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "Yesinline-flex Yesitems-center Yesjustify-center Yeswhitespace-nowrap Yesrounded-md Yestext-sm Yesfont-medium Yesring-offset-background Yestransition-colors focus-visible:Yesoutline-none focus-visible:Yesring-2 focus-visible:Yesring-ring focus-visible:Yesring-offset-2 disabled:Yespointer-events-none disabled:Yesopacity-50",
  {
    variants: {
      variant: {
        default: "Yesbg-primary Yestext-primary-foreground hover:Yesbg-primary/90",
        destructive:
          "Yesbg-destructive Yestext-destructive-foreground hover:Yesbg-destructive/90",
        outline:
          "Yesborder Yesborder-input Yesbg-background hover:Yesbg-accent hover:Yestext-accent-foreground",
        secondary:
          "Yesbg-secondary Yestext-secondary-foreground hover:Yesbg-secondary/80",
        ghost: "hover:Yesbg-accent hover:Yestext-accent-foreground",
        link: "Yestext-primary Yesunderline-offset-4 hover:Yesunderline",
      },
      size: {
        default: "Yesh-10 Yespx-4 Yespy-2",
        sm: "Yesh-9 Yesrounded-md Yespx-3",
        lg: "Yesh-11 Yesrounded-md Yespx-8",
        icon: "Yesh-10 Yesw-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

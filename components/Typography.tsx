import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const typographyVariants = cva('text-foreground', {
  variants: {
    variant: {
      h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 mt-6',
      h2: 'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-4 mt-6',
      h3: 'scroll-m-20 text-2xl font-semibold tracking-tight mb-4 mt-6',
      h4: 'scroll-m-20 text-xl font-semibold tracking-tight mb-4 mt-6',
      h5: 'scroll-m-20 text-lg font-semibold tracking-tight',
      p: 'leading-7 [&:not(:first-child)]:mt-6',
      blockquote: 'mt-6 border-l-2 pl-6 italic',
      list: 'my-6 ml-6 list-disc [&>li]:mt-2',
      inlineCode:
        'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
      lead: 'text-xl text-muted-foreground',
      large: 'text-lg font-semibold',
      small: 'text-sm font-medium leading-none',
      muted: 'text-sm text-muted-foreground',
    },
  },
  defaultVariants: {
    variant: 'p',
  },
})

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  as?: React.ElementType
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, as, ...props }, ref) => {
    const Comp =
      as ||
      (variant === 'h1'
        ? 'h1'
        : variant === 'h2'
        ? 'h2'
        : variant === 'h3'
        ? 'h3'
        : variant === 'h4'
        ? 'h4'
        : variant === 'h5'
        ? 'h5'
        : variant === 'blockquote'
        ? 'blockquote'
        : variant === 'list'
        ? 'ul'
        : variant === 'inlineCode'
        ? 'code'
        : 'p')

    return (
      <Comp
        className={cn(typographyVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

Typography.displayName = 'Typography'

export { Typography, typographyVariants }

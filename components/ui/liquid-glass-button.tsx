"use client"

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'

export interface LiquidGlassButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  size?: 'default' | 'sm' | 'lg' | 'icon'
  variant?: 'default' | 'primary' | 'outline'
  pulse?: boolean
}

const LiquidGlassButton = React.forwardRef<HTMLButtonElement, LiquidGlassButtonProps>(
  ({ className, asChild = false, size = 'default', variant = 'default', pulse = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'

    const sizeClasses = {
      default: '',
      sm: 'liquid-glass-btn-sm',
      lg: 'liquid-glass-btn-lg',
      icon: 'liquid-glass-btn-icon',
    }

    const variantClasses = {
      default: '',
      primary: 'liquid-glass-btn-primary',
      outline: 'liquid-glass-btn-outline',
    }

    return (
      <Comp
        className={cn(
          'liquid-glass-btn',
          sizeClasses[size],
          variantClasses[variant],
          pulse && 'liquid-glass-btn-pulse',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
LiquidGlassButton.displayName = 'LiquidGlassButton'

export { LiquidGlassButton }
'use client'

import { motion } from 'framer-motion'
import { tapScale } from '@/lib/motion'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  className?: string
  disabled?: boolean
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  className = '',
  disabled = false,
}: ButtonProps) {
  const baseClasses = 'font-medium rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variantClasses = {
    primary: 'bg-rain-blue text-white hover:bg-rain-blue-dark focus:ring-rain-blue',
    secondary: 'border-2 border-rain-gray text-rain-gray hover:bg-rain-light focus:ring-rain-gray',
    ghost: 'text-rain-gray hover:bg-rain-light focus:ring-rain-gray',
  }
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`
  
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileTap={disabled ? {} : tapScale}
      className={classes}
    >
      {children}
    </motion.button>
  )
}


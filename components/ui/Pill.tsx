'use client'

import { ReactNode } from 'react'

interface PillProps {
  children: ReactNode
  variant?: 'default' | 'new' | 'bestseller'
  className?: string
}

export default function Pill({ children, variant = 'default', className = '' }: PillProps) {
  const variantClasses = {
    default: 'bg-rain-light text-rain-gray',
    new: 'bg-rain-blue text-white',
    bestseller: 'bg-rain-gray text-white',
  }
  
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  )
}


'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

export interface CartItem {
  productId: string
  slug: string
  quantity: number
  size?: string
  color?: string
}

interface CartContextType {
  cartItems: CartItem[]
  isCartOpen: boolean
  addToCart: (productId: string, slug: string, size?: string, color?: string) => void
  removeFromCart: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  toggleCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = (productId: string, slug: string, size?: string, color?: string) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (item) => item.productId === productId && item.size === size && item.color === color
      )
      if (existing) {
        return prev.map((item) =>
          item.productId === productId && item.size === size && item.color === color
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { productId, slug, quantity: 1, size, color }]
    })
  }

  const removeFromCart = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.productId !== productId))
  }

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.productId === productId ? { ...item, quantity } : item
      )
    )
  }

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev)
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        toggleCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}


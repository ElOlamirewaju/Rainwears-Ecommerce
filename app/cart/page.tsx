'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/cart/CartDrawer'
import Button from '@/components/ui/Button'
import { CartProvider, useCart } from '@/context/CartContext'
import { products } from '@/lib/products'
import { formatPrice } from '@/lib/format'
import Image from 'next/image'
import { Plus, Minus, Trash2 } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motion'

function CartContent() {
  const { cartItems, updateQuantity, removeFromCart } = useCart()

  const total = cartItems.reduce((sum, item) => {
    const product = products.find((p) => p.id === item.productId)
    return sum + (product?.price || 0) * item.quantity
  }, 0)

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-24 pb-20">
          <div className="max-w-container mx-auto px-6 lg:px-12">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-center py-20"
            >
              <h1 className="text-4xl font-semibold text-rain-gray mb-4">Your cart is empty</h1>
              <p className="text-gray-600 mb-8">Start adding items to your cart</p>
              <Link href="/shop">
                <Button size="lg">Continue Shopping</Button>
              </Link>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 pb-20">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-4xl font-semibold text-rain-gray mb-12">Shopping Cart</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-6">
                {cartItems.map((item) => {
                  const product = products.find((p) => p.id === item.productId)
                  if (!product) return null

                  return (
                    <motion.div
                      key={`${item.productId}-${item.size}-${item.color}`}
                      variants={fadeUp}
                      className="flex gap-6 p-6 border border-gray-200 rounded-2xl"
                    >
                      <Link href={`/product/${product.slug}`} className="relative w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden">
                        <Image
                          src={product.images[0]}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </Link>
                      <div className="flex-1">
                        <Link href={`/product/${product.slug}`}>
                          <h3 className="text-xl font-semibold text-rain-gray mb-2 hover:text-rain-blue">
                            {product.name}
                          </h3>
                        </Link>
                        {(item.size || item.color) && (
                          <p className="text-sm text-gray-600 mb-2">
                            {item.size && `Size: ${item.size}`}
                            {item.size && item.color && ' • '}
                            {item.color && `Color: ${item.color}`}
                          </p>
                        )}
                        <p className="text-lg font-semibold text-rain-gray mb-4">
                          {formatPrice(product.price)}
                        </p>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-3 border-2 border-gray-200 rounded-full px-4 py-2">
                            <button
                              onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                              className="p-1 hover:bg-rain-light rounded-full transition-colors"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="w-8 text-center font-medium">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                              className="p-1 hover:bg-rain-light rounded-full transition-colors"
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.productId)}
                            className="text-red-500 hover:text-red-700 transition-colors flex items-center gap-2"
                          >
                            <Trash2 size={18} />
                            <span className="text-sm">Remove</span>
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Order Summary */}
              <div className="lg:sticky lg:top-24 lg:h-fit">
                <div className="p-6 border border-gray-200 rounded-2xl bg-rain-light">
                  <h2 className="text-xl font-semibold text-rain-gray mb-6">Order Summary</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal</span>
                      <span>{formatPrice(total)}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Shipping</span>
                      <span className="text-rain-blue">Free</span>
                    </div>
                    <div className="border-t pt-4 flex justify-between text-lg font-semibold">
                      <span>Total</span>
                      <span>{formatPrice(total)}</span>
                    </div>
                  </div>

                  <Link href="/checkout" className="block">
                    <Button size="lg" className="w-full">Proceed to Checkout</Button>
                  </Link>
                  
                  <p className="text-sm text-gray-600 mt-4 text-center">
                    Free delivery in 2–4 days. 30-day returns.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default function CartPage() {
  return (
    <CartProvider>
      <CartContent />
      <CartDrawer />
    </CartProvider>
  )
}


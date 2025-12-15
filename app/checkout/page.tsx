'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Button from '@/components/ui/Button'
import { CartProvider, useCart } from '@/context/CartContext'
import { products } from '@/lib/products'
import { formatPrice } from '@/lib/format'
import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motion'

function CheckoutContent() {
  const { cartItems } = useCart()
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zip: '',
    country: 'United States',
  })

  const subtotal = cartItems.reduce((sum, item) => {
    const product = products.find((p) => p.id === item.productId)
    return sum + (product?.price || 0) * item.quantity
  }, 0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock checkout - in production, this would integrate with Stripe
    alert('This is a portfolio demo. Checkout functionality would integrate with Stripe in production.')
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-24 pb-20">
          <div className="max-w-container mx-auto px-6 lg:px-12">
            <div className="text-center py-20">
              <h1 className="text-4xl font-semibold text-rain-gray mb-4">Your cart is empty</h1>
              <Button size="lg" onClick={() => window.location.href = '/shop'}>
                Continue Shopping
              </Button>
            </div>
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
            <h1 className="text-4xl font-semibold text-rain-gray mb-12">Checkout</h1>
            
            <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Form */}
              <div className="lg:col-span-2 space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold text-rain-gray mb-6">Contact Information</h2>
                  <div className="space-y-4">
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rain-blue"
                    />
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-rain-gray mb-6">Shipping Address</h2>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="First Name"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rain-blue"
                      />
                      <input
                        type="text"
                        placeholder="Last Name"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rain-blue"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Address"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rain-blue"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="City"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rain-blue"
                      />
                      <input
                        type="text"
                        placeholder="ZIP Code"
                        required
                        value={formData.zip}
                        onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                        className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rain-blue"
                      />
                    </div>
                    <select
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rain-blue"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>United Kingdom</option>
                    </select>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-rain-gray mb-6">Payment</h2>
                  <div className="p-6 border border-gray-300 rounded-lg bg-rain-light">
                    <p className="text-gray-600 text-center">
                      This is a portfolio demo. In production, this would integrate with Stripe for secure payment processing.
                    </p>
                  </div>
                </section>
              </div>

              {/* Order Summary */}
              <div className="lg:sticky lg:top-24 lg:h-fit">
                <div className="p-6 border border-gray-200 rounded-2xl bg-rain-light">
                  <h2 className="text-xl font-semibold text-rain-gray mb-6">Order Summary</h2>
                  
                  <div className="space-y-3 mb-6">
                    {cartItems.map((item) => {
                      const product = products.find((p) => p.id === item.productId)
                      if (!product) return null
                      return (
                        <div key={item.productId} className="flex justify-between text-sm">
                          <span className="text-gray-600">
                            {product.name} × {item.quantity}
                          </span>
                          <span className="text-gray-600">
                            {formatPrice(product.price * item.quantity)}
                          </span>
                        </div>
                      )
                    })}
                  </div>

                  <div className="space-y-4 border-t pt-4 mb-6">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal</span>
                      <span>{formatPrice(subtotal)}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Shipping</span>
                      <span className="text-rain-blue">Free</span>
                    </div>
                    <div className="flex justify-between text-lg font-semibold border-t pt-4">
                      <span>Total</span>
                      <span>{formatPrice(subtotal)}</span>
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Complete Order
                  </Button>
                  
                  <p className="text-xs text-gray-600 mt-4 text-center">
                    By completing your purchase, you agree to our Terms of Service.
                  </p>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default function CheckoutPage() {
  return (
    <CartProvider>
      <CheckoutContent />
    </CartProvider>
  )
}


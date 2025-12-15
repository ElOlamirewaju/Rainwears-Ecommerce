'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ProductGrid from '@/components/product/ProductGrid'
import CartDrawer from '@/components/cart/CartDrawer'
import { CartProvider } from '@/context/CartContext'
import { products, Product } from '@/lib/products'
import { fadeUp } from '@/lib/motion'
import { motion } from 'framer-motion'

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  
  const categories: Product['category'][] = ['Jackets', 'Pants', 'Umbrellas', 'Bags', 'Ponchos']
  
  const filteredProducts = selectedCategory
    ? products.filter(p => p.category === selectedCategory)
    : products

  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-24 pb-20">
          <div className="max-w-container mx-auto px-6 lg:px-12">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mb-12"
            >
              <h1 className="text-section mb-4 text-rain-gray">Shop</h1>
              <p className="text-lg text-gray-600">
                Premium rain gear for every condition.
              </p>
            </motion.div>

            {/* Filters */}
            <div className="mb-8 flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === null
                    ? 'bg-rain-blue text-white'
                    : 'bg-rain-light text-rain-gray hover:bg-gray-200'
                }`}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-rain-blue text-white'
                      : 'bg-rain-light text-rain-gray hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <ProductGrid products={filteredProducts} />
          </div>
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}


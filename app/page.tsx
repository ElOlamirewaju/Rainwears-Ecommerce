'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/Home/Hero'
import TechnologySection from '@/components/Home/TechnologySection'
import ProductGrid from '@/components/product/ProductGrid'
import ProductCarousel from '@/components/Home/ProductCarousel'
import CartDrawer from '@/components/cart/CartDrawer'
import { CartProvider } from '@/context/CartContext'
import { products } from '@/lib/products'
import { fadeUp } from '@/lib/motion'
import { motion } from 'framer-motion'

export default function Home() {
  // Featured products (first 3)
  const featuredProducts = products.slice(0, 3)

  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />

          <div className="max-w-container mx-auto px-6 lg:px-12 -mt-8">
            <ProductCarousel products={products.slice(0, 6)} />
          </div>
          
          {/* Featured Products */}
          <section className="py-24">
            <div className="max-w-container mx-auto px-6 lg:px-12">
              <div className="glass-card soft-border rounded-3xl p-6 lg:p-10 shadow-xl">
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-12"
                >
                  <div>
                    <h2 className="text-section mb-3 text-rain-gray">
                      Featured Products
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl">
                      Curated edits with atelier finishes. Explore tailored shells, sculpted umbrellas, and travel-grade carry crafted for modern luxury.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    Live inventory sync
                  </div>
                </motion.div>
                <ProductGrid products={featuredProducts} />
              </div>
            </div>
          </section>

          <TechnologySection />
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}

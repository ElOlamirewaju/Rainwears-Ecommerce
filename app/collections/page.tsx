'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/cart/CartDrawer'
import { CartProvider } from '@/context/CartContext'
import { fadeUp, staggerContainer } from '@/lib/motion'
import { products } from '@/lib/products'

const collections = [
  {
    id: 'storm',
    name: 'Storm Series',
    description: 'Maximum protection for extreme conditions. Built to withstand heavy rain, strong winds, and demanding adventures.',
    image: '/stormshell/stormshell-crimson.png',
    category: 'Stormproof',
    productSlugs: [
      'rainwears-stormshell',
      'rainwears-mistlite',
      'rainwears-urbandry-parka',
      'rainwears-cloudfold-poncho',
      'rainwears-drypack-backpack',
    ],
  },
  {
    id: 'urban',
    name: 'Urban Series',
    description: 'City-ready rain gear that blends style with function. Perfect for daily commutes and urban adventures.',
    image: '/urbandry/urbandry-burnt-orange-front.png',
    category: 'Urban',
    productSlugs: [
      'rainwears-urbandry-parka',
      'rainwears-cloudfold-poncho',
      'rainwears-drypack-backpack',
      'rainwears-flowpants',
    ],
  },
  {
    id: 'lightweight',
    name: 'Lightweight Collection',
    description: 'Ultra-packable protection that disappears into your pack. Essential gear for travelers and minimalists.',
    image: '/umbrella/aerocanopy-black.png',
    category: 'Lightweight',
    productSlugs: [
      'rainwears-aerocanopy-umbrella',
      'rainwears-aerocanopy-umbrella-gold',
      'rainwears-flowpants',
    ],
  },
  {
    id: 'complete',
    name: 'Complete Protection',
    description: 'Full-body coverage from head to toe. Jackets, pants, and accessories designed to work together.',
    image: '/drypack/drypack-front.png',
    category: 'Complete',
    productSlugs: [
      'rainwears-aerocanopy-umbrella',
      'rainwears-aerocanopy-umbrella-gold',
      'rainwears-drypack-backpack',
      'rainwears-flowpants',
    ],
  },
]

export default function CollectionsPage() {
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
              className="mb-16 text-center"
            >
              <h1 className="text-hero mb-6 text-rain-gray">Collections</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Curated selections designed for specific needs and adventures.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {collections.map((collection, index) => (
                <motion.div
                  key={collection.id}
                  variants={fadeUp}
                  className="group"
                >
                  <Link href={`/shop?collection=${collection.id}`}>
                    <div className="relative h-96 rounded-2xl overflow-hidden bg-rain-light cursor-pointer">
                      <Image
                        src={collection.image}
                        alt={collection.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                        <span className="text-sm font-medium mb-2 block opacity-90">
                          {collection.category}
                        </span>
                        <h2 className="text-3xl font-semibold mb-3">
                          {collection.name}
                        </h2>
                        <p className="text-white/90 mb-4 leading-relaxed">
                          {collection.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {collection.productSlugs
                            .map(slug => products.find(p => p.slug === slug)?.name)
                            .filter(Boolean)
                            .map((name) => (
                              <span
                                key={name}
                                className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm"
                              >
                                {name}
                              </span>
                            ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Featured Technology */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-24 pt-24 border-t"
            >
              <div className="text-center mb-12">
                <h2 className="text-section mb-4 text-rain-gray">
                  Built for Performance
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Every collection shares our core technology principles.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-semibold text-rain-blue mb-2">
                    20K
                  </div>
                  <h3 className="text-lg font-medium text-rain-gray mb-2">
                    Waterproof Rating
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Maximum protection in our Storm Series products
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-semibold text-rain-blue mb-2">
                    285g
                  </div>
                  <h3 className="text-lg font-medium text-rain-gray mb-2">
                    Lightest Weight
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Ultra-lightweight options in our Lightweight Collection
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-semibold text-rain-blue mb-2">
                    100%
                  </div>
                  <h3 className="text-lg font-medium text-rain-gray mb-2">
                    Seam Sealed
                  </h3>
                  <p className="text-gray-600 text-sm">
                    All products feature fully sealed construction
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}

'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Product } from '@/lib/products'
import { formatPrice } from '@/lib/format'

interface ProductCarouselProps {
  products: Product[]
}

export default function ProductCarousel({ products }: ProductCarouselProps) {
  const marquee = [...products, ...products]

  return (
    <section className="relative overflow-hidden rounded-[28px] border border-gray-100 glass-card notion-grid notion-surface">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-white via-transparent to-white" />
      <div className="relative px-6 py-6 lg:px-10 lg:py-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-rain-blue/10 text-xs font-semibold text-rain-blue">
              Live carousel
            </span>
            <p className="text-sm text-gray-500">Drag to explore or let it glide.</p>
          </div>
          <div className="text-sm text-gray-500 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Always in motion
          </div>
        </div>

        <motion.div
          className="flex gap-5 md:gap-6"
          drag="x"
          dragConstraints={{ left: -120, right: 120 }}
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, duration: 28, ease: 'linear' }}
        >
          {marquee.map((product, index) => (
            <motion.div
              key={`${product.id}-${index}`}
              whileHover={{ rotateX: 0, rotateY: 0, y: -4, scale: 1.02 }}
              className="min-w-[240px] max-w-[240px] sm:min-w-[260px] sm:max-w-[260px] rounded-2xl border border-gray-100 bg-white/80 backdrop-blur shadow-sm overflow-hidden"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Link href={`/product/${product.slug}`}>
                <div className="relative aspect-[4/5] overflow-hidden bg-rain-light">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 640px) 60vw, 240px"
                  />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-white/80 text-xs font-semibold text-rain-gray">
                      {product.tags[0] || 'Featured'}
                    </span>
                    <span className="px-2 py-1 rounded-full bg-rain-blue/10 text-[11px] font-semibold text-rain-blue">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="p-4 space-y-2">
                  <p className="text-sm text-gray-500">{product.story}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold text-rain-gray">{formatPrice(product.price)}</p>
                    <span className="text-xs text-gray-500">Tap to view</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

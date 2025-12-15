'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { hoverScale, fadeUp } from '@/lib/motion'
import { Product } from '@/lib/products'
import { formatPrice } from '@/lib/format'
import Pill from '@/components/ui/Pill'

interface ProductCardProps {
  product: Product
  index?: number
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const hasNewTag = product.tags.includes('New')
  const hasBestSellerTag = product.tags.includes('Best Seller')
  
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      transition={{ delay: index * 0.1 }}
    >
      <Link href={`/product/${product.slug}`}>
        <motion.div
          whileHover={hoverScale}
          className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow cursor-pointer group"
        >
          <div className="relative aspect-square bg-rain-light overflow-hidden">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {product.compareAtPrice && (
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-red-600">
                Save {Math.round((1 - product.price / product.compareAtPrice) * 100)}%
              </div>
            )}
          </div>
          <div className="p-6">
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-rain-gray mt-2 mb-1 opacity-100">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                  {product.story}
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {hasNewTag && <Pill variant="new">New</Pill>}
              {hasBestSellerTag && <Pill variant="bestseller">Best Seller</Pill>}
              {product.tags.filter(t => !['New', 'Best Seller'].includes(t)).slice(0, 2).map(tag => (
                <Pill key={tag}>{tag}</Pill>
              ))}
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <span className="text-2xl font-semibold text-rain-gray">
                  {formatPrice(product.price)}
                </span>
                {product.compareAtPrice && (
                  <span className="ml-2 text-sm text-gray-500 line-through">
                    {formatPrice(product.compareAtPrice)}
                  </span>
                )}
              </div>
              <span className="text-sm text-gray-500">
                {product.category}
              </span>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  )
}


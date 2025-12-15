'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { ArrowLeft, Check } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/cart/CartDrawer'
import Button from '@/components/ui/Button'
import Accordion from '@/components/ui/Accordion'
import { CartProvider, useCart } from '@/context/CartContext'
import { getProductBySlug, Product } from '@/lib/products'
import { formatPrice, formatWeight } from '@/lib/format'
import { fadeUp } from '@/lib/motion'
import { useMemo } from 'react'

function ProductDetailContent() {
  const params = useParams()
  const router = useRouter()
  const { addToCart, toggleCart } = useCart()
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [selectedColor, setSelectedColor] = useState<string>('')
  const [selectedSize, setSelectedSize] = useState<string>('')
  const [quantity, setQuantity] = useState(1)
  const [isSticky, setIsSticky] = useState(false)

  const product = getProductBySlug(params.slug as string)

  const galleryImages = useMemo(() => {
    if (!product) return []
    const colorImages = product.colors
      .map((color) => color.image)
      .filter((img): img is string => Boolean(img))
    return Array.from(new Set([...(product.images || []), ...colorImages]))
  }, [product])

  useEffect(() => {
    if (product) {
      setSelectedColor(product.colors[0]?.label || '')
      setSelectedSize(product.sizes[0] || '')
      const firstColorImage = product.colors[0]?.image
      if (firstColorImage && galleryImages.length) {
        const idx = galleryImages.indexOf(firstColorImage)
        setSelectedImageIndex(idx >= 0 ? idx : 0)
      } else {
        setSelectedImageIndex(0)
      }
    }
  }, [product, galleryImages])

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Product not found</p>
      </div>
    )
  }

  const handleColorSelect = (colorLabel: string) => {
    setSelectedColor(colorLabel)
    const color = product.colors.find((c) => c.label === colorLabel)
    if (color?.image && galleryImages.length) {
      const idx = galleryImages.indexOf(color.image)
      if (idx >= 0) {
        setSelectedImageIndex(idx)
        return
      }
    }
    setSelectedImageIndex(0)
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product.id, product.slug, selectedSize, selectedColor)
    }
    toggleCart()
  }

  useEffect(() => {
    if (selectedImageIndex >= galleryImages.length) {
      setSelectedImageIndex(0)
    }
  }, [galleryImages, selectedImageIndex])

  const heroImage = galleryImages[selectedImageIndex] || product.images[0]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 pb-20">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-rain-gray hover:text-rain-blue mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Image Gallery */}
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-square rounded-2xl overflow-hidden bg-rain-light mb-4"
              >
                <Image
                  src={heroImage}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
              {galleryImages.length > 1 && (
                <div className="flex gap-4 overflow-x-auto pb-2">
                  {galleryImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImageIndex === index
                          ? 'border-rain-blue'
                          : 'border-transparent hover:border-gray-300'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${product.name} view ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="lg:sticky lg:top-24 lg:h-fit"
            >
              <h1 className="text-4xl md:text-5xl font-semibold text-rain-gray mb-4">
                {product.name}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {product.story}
              </p>

              <div className="mb-8">
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-semibold text-rain-gray">
                    {formatPrice(product.price)}
                  </span>
                  {product.compareAtPrice && (
                    <span className="text-xl text-gray-500 line-through">
                      {formatPrice(product.compareAtPrice)}
                    </span>
                  )}
                </div>
              </div>

              {/* Color Selector */}
              {product.colors.length > 1 && (
                <div className="mb-6">
                  <p className="text-sm font-medium text-rain-gray mb-3">
                    Color: {selectedColor}
                  </p>
                  <div className="flex gap-3">
                    {product.colors.map((color) => (
                      <button
                        key={color.label}
                        onClick={() => handleColorSelect(color.label)}
                        className={`relative w-12 h-12 rounded-full border-2 transition-all ${
                          selectedColor === color.label
                            ? 'border-rain-blue ring-2 ring-rain-blue ring-offset-2'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                        style={{ backgroundColor: color.hex }}
                      >
                        {selectedColor === color.label && (
                          <Check size={16} className="absolute inset-0 m-auto text-white drop-shadow" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selector */}
              {product.sizes.length > 1 && (
                <div className="mb-6">
                  <p className="text-sm font-medium text-rain-gray mb-3">
                    Size: {selectedSize}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-6 py-3 rounded-full border-2 font-medium transition-all ${
                          selectedSize === size
                            ? 'border-rain-blue bg-rain-blue text-white'
                            : 'border-gray-300 text-rain-gray hover:border-rain-blue'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="mb-8">
                <p className="text-sm font-medium text-rain-gray mb-3">
                  Quantity
                </p>
                <div className="flex items-center gap-4 border-2 border-gray-200 rounded-full px-4 py-2 w-fit">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-1 hover:bg-rain-light rounded-full transition-colors"
                  >
                    <span className="text-xl">−</span>
                  </button>
                  <span className="w-12 text-center font-medium">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-1 hover:bg-rain-light rounded-full transition-colors"
                  >
                    <span className="text-xl">+</span>
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <div className="space-y-4 mb-8">
                <Button size="lg" onClick={handleAddToCart} className="w-full">
                  Add to Cart
                </Button>
                <Button size="lg" variant="secondary" className="w-full">
                  Buy Now
                </Button>
              </div>

              <p className="text-sm text-gray-600">
                {product.shippingInfo}
              </p>
            </motion.div>
          </div>

          {/* Specs & Details */}
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Features */}
            <section>
              <h2 className="text-2xl font-semibold text-rain-gray mb-6">Features</h2>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check size={20} className="text-rain-blue flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Specs */}
            <section>
              <h2 className="text-2xl font-semibold text-rain-gray mb-6">Specifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <dt className="text-sm font-medium text-gray-500 mb-1">Waterproof Rating</dt>
                  <dd className="text-lg font-semibold text-rain-gray">{product.specs.waterproofRating}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500 mb-1">Breathability</dt>
                  <dd className="text-lg font-semibold text-rain-gray">{product.specs.breathability} g/m²/24h</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500 mb-1">Weight</dt>
                  <dd className="text-lg font-semibold text-rain-gray">{formatWeight(product.specs.weight)}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500 mb-1">Fabric</dt>
                  <dd className="text-lg font-semibold text-rain-gray">{product.specs.fabric}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500 mb-1">Seam Sealed</dt>
                  <dd className="text-lg font-semibold text-rain-gray">
                    {product.specs.seamSealed ? 'Yes' : 'No'}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500 mb-1">Packable</dt>
                  <dd className="text-lg font-semibold text-rain-gray">
                    {product.specs.packable ? 'Yes' : 'No'}
                  </dd>
                </div>
              </div>
            </section>

            {/* Accordions */}
            <section className="space-y-4">
              <Accordion title="Care Instructions">
                <ul className="list-disc list-inside space-y-2">
                  {product.careInstructions.map((instruction, index) => (
                    <li key={index} className="text-gray-600">{instruction}</li>
                  ))}
                </ul>
              </Accordion>
              <Accordion title="Delivery & Returns">
                <p className="text-gray-600">{product.shippingInfo}</p>
              </Accordion>
            </section>
          </div>
        </div>

        {/* Sticky Buy Panel */}
        {isSticky && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-40 lg:hidden"
          >
            <div className="max-w-container mx-auto px-6 py-4">
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <p className="font-semibold text-rain-gray">{product.name}</p>
                  <p className="text-lg font-semibold text-rain-gray">{formatPrice(product.price)}</p>
                </div>
                <Button size="lg" onClick={handleAddToCart}>
                  Add to Cart
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default function ProductDetail() {
  return (
    <CartProvider>
      <ProductDetailContent />
      <CartDrawer />
    </CartProvider>
  )
}

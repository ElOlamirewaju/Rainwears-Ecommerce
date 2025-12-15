'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingBag, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { cartItems, toggleCart } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-sm'
            : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <nav className="max-w-container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="text-2xl font-semibold text-rain-gray">
              Rainwears
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/shop"
                className="text-sm font-medium text-rain-gray hover:text-rain-blue transition-colors"
              >
                Shop
              </Link>
              <Link
                href="/collections"
                className="text-sm font-medium text-rain-gray hover:text-rain-blue transition-colors"
              >
                Collections
              </Link>
              <Link
                href="/support"
                className="text-sm font-medium text-rain-gray hover:text-rain-blue transition-colors"
              >
                Support
              </Link>
            </div>

            {/* Cart Button */}
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleCart}
                className="relative p-2 text-rain-gray hover:text-rain-blue transition-colors focus:outline-none focus:ring-2 focus:ring-rain-blue focus:ring-offset-2 rounded"
              >
                <ShoppingBag size={20} />
                {cartItemCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 bg-rain-blue text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium"
                  >
                    {cartItemCount}
                  </motion.span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-rain-gray focus:outline-none focus:ring-2 focus:ring-rain-blue focus:ring-offset-2 rounded"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-white border-t"
            >
              <div className="px-6 py-4 space-y-4">
                <Link
                  href="/shop"
                  className="block text-sm font-medium text-rain-gray"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Shop
                </Link>
                <Link
                  href="/collections"
                  className="block text-sm font-medium text-rain-gray"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Collections
                </Link>
                <Link
                  href="/support"
                  className="block text-sm font-medium text-rain-gray"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Support
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}


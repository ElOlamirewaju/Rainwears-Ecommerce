'use client'

import { motion } from 'framer-motion'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/cart/CartDrawer'
import Accordion from '@/components/ui/Accordion'
import { CartProvider } from '@/context/CartContext'
import { fadeUp } from '@/lib/motion'

export default function SupportPage() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-24 pb-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mb-16 text-center"
            >
              <h1 className="text-hero mb-6 text-rain-gray">Support</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Everything you need to know about shipping, returns, warranty, and more.
              </p>
            </motion.div>

            {/* Shipping Section */}
            <motion.section
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              id="shipping"
              className="mb-16"
            >
              <h2 className="text-section mb-8 text-rain-gray">Shipping</h2>
              <div className="space-y-4">
                <Accordion title="How long does shipping take?">
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      Free standard shipping takes 2–4 business days within the United States. Express shipping (1–2 business days) is available at checkout for an additional fee.
                    </p>
                    <div className="bg-rain-light p-4 rounded-lg">
                      <p className="font-medium text-rain-gray mb-2">International Shipping</p>
                      <p className="text-gray-600 text-sm">
                        We currently ship to Canada, United Kingdom, and select European countries. International orders typically take 5–10 business days. Duties and taxes may apply.
                      </p>
                    </div>
                  </div>
                </Accordion>
                <Accordion title="Do you offer free shipping?">
                  <p className="text-gray-600">
                    Yes, we offer free standard shipping on all orders within the United States. No minimum purchase required.
                  </p>
                </Accordion>
                <Accordion title="Can I track my order?">
                  <p className="text-gray-600">
                    Yes, once your order ships, you'll receive a tracking number via email. You can track your package's progress in real-time using the provided link.
                  </p>
                </Accordion>
                <Accordion title="What if my order hasn't arrived?">
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      If your order hasn't arrived within the expected timeframe, please contact us with your order number. We'll investigate and work to resolve the issue promptly.
                    </p>
                    <p className="text-gray-600">
                      Most delays are due to carrier issues or incorrect addresses. Please ensure your shipping address is correct at checkout.
                    </p>
                  </div>
                </Accordion>
              </div>
            </motion.section>

            {/* Returns Section */}
            <motion.section
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              id="returns"
              className="mb-16"
            >
              <h2 className="text-section mb-8 text-rain-gray">Returns & Exchanges</h2>
              <div className="space-y-4">
                <Accordion title="What is your return policy?">
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      We offer a 30-day return policy. Items must be unworn, unwashed, and in their original packaging with tags attached.
                    </p>
                    <p className="text-gray-600">
                      Returns are free within the United States. We'll provide a prepaid return label via email once your return request is approved.
                    </p>
                  </div>
                </Accordion>
                <Accordion title="How do I return an item?">
                  <div className="space-y-4">
                    <ol className="list-decimal list-inside space-y-2 text-gray-600">
                      <li>Contact us at support@rainwears.com with your order number</li>
                      <li>We'll send you a return authorization and prepaid label</li>
                      <li>Package the item securely in its original packaging</li>
                      <li>Drop off at any USPS location or schedule a pickup</li>
                      <li>Refund will be processed within 5–7 business days of receipt</li>
                    </ol>
                  </div>
                </Accordion>
                <Accordion title="Can I exchange an item?">
                  <p className="text-gray-600">
                    Yes, exchanges are available for size or color changes. Simply initiate a return and place a new order for your preferred size or color. Exchanges are subject to availability.
                  </p>
                </Accordion>
                <Accordion title="What if my item is defective?">
                  <p className="text-gray-600">
                    If you receive a defective item, please contact us immediately. We'll cover all return shipping costs and expedite your replacement or refund.
                  </p>
                </Accordion>
              </div>
            </motion.section>

            {/* Warranty Section */}
            <motion.section
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              id="warranty"
              className="mb-16"
            >
              <h2 className="text-section mb-8 text-rain-gray">Warranty</h2>
              <div className="space-y-4">
                <Accordion title="What does your warranty cover?">
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      All Rainwears products come with a 2-year warranty against manufacturing defects in materials and workmanship. This includes:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                      <li>Seam failures</li>
                      <li>Zipper malfunctions</li>
                      <li>Fabric delamination</li>
                      <li>Waterproof coating failures</li>
                    </ul>
                    <p className="text-gray-600">
                      Normal wear and tear, damage from misuse, or alterations are not covered.
                    </p>
                  </div>
                </Accordion>
                <Accordion title="How do I make a warranty claim?">
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      Contact our support team at warranty@rainwears.com with:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                      <li>Your order number or purchase date</li>
                      <li>Photos of the defect</li>
                      <li>Description of the issue</li>
                    </ul>
                    <p className="text-gray-600">
                      We'll review your claim and guide you through the warranty process.
                    </p>
                  </div>
                </Accordion>
                <Accordion title="What is the DWR coating warranty?">
                  <p className="text-gray-600">
                    Our durable water repellent (DWR) coating is designed to last the lifetime of the product with proper care. If the coating fails due to manufacturing defects, we'll reapply it free of charge or replace the product.
                  </p>
                </Accordion>
              </div>
            </motion.section>

            {/* Care Section */}
            <motion.section
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-section mb-8 text-rain-gray">Care & Maintenance</h2>
              <div className="space-y-4">
                <Accordion title="How do I care for my rainwear?">
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      Proper care extends the life of your rainwear:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                      <li>Machine wash cold on gentle cycle</li>
                      <li>Use technical fabric detergent (no fabric softener)</li>
                      <li>Air dry or tumble dry on low heat</li>
                      <li>Reapply DWR coating as needed (every 6–12 months)</li>
                      <li>Store in a cool, dry place when not in use</li>
                    </ul>
                  </div>
                </Accordion>
                <Accordion title="How do I restore the DWR coating?">
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      When water stops beading on the surface, it's time to restore the DWR coating:
                    </p>
                    <ol className="list-decimal list-inside space-y-2 text-gray-600 ml-4">
                      <li>Clean the garment according to care instructions</li>
                      <li>Apply DWR spray evenly to the outer fabric</li>
                      <li>Tumble dry on low heat for 20 minutes to activate</li>
                      <li>Allow to air dry completely</li>
                    </ol>
                    <p className="text-gray-600">
                      We recommend Nikwax or Granger's DWR products.
                    </p>
                  </div>
                </Accordion>
              </div>
            </motion.section>

            {/* Contact Section */}
            <motion.section
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              id="contact"
              className="mb-16"
            >
              <h2 className="text-section mb-8 text-rain-gray">Contact Us</h2>
              <div className="bg-rain-light rounded-2xl p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-rain-gray mb-2">Email</h3>
                    <a
                      href="mailto:support@rainwears.com"
                      className="text-rain-blue hover:underline"
                    >
                      support@rainwears.com
                    </a>
                  </div>
                  <div>
                    <h3 className="font-semibold text-rain-gray mb-2">Phone</h3>
                    <a
                      href="tel:+18001234567"
                      className="text-rain-blue hover:underline"
                    >
                      1-800-123-4567
                    </a>
                    <p className="text-sm text-gray-600 mt-1">
                      Monday–Friday, 9am–5pm EST
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-rain-gray mb-2">Response Time</h3>
                    <p className="text-gray-600">
                      We typically respond to all inquiries within 24 hours during business days.
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>
          </div>
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}


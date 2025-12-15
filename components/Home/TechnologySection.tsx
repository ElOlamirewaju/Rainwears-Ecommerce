'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/motion'
import { Droplets, Layers, ShieldCheck, Move, Box } from 'lucide-react'

const technologies = [
  {
    title: '20K Waterproof Rating',
    description: 'Built to resist heavy rain without sacrificing comfort.',
    icon: Droplets,
  },
  {
    title: 'Breathable Layering',
    description: 'Vents heat while maintaining a sealed exterior.',
    icon: Move,
  },
  {
    title: 'Seam-Sealed Construction',
    description: 'No weak points. No shortcuts.',
    icon: ShieldCheck,
  },
  {
    title: 'Packable Design',
    description: 'Folds into a compact carry form.',
    icon: Box,
  },
]

export default function TechnologySection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-x-0 top-12 h-48 bg-gradient-to-b from-rain-light/70 to-transparent pointer-events-none" />
      <div className="max-w-container mx-auto px-6 lg:px-12 relative">
        <div className="glass-card soft-border rounded-3xl p-6 lg:p-8 shadow-lg">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-10"
          >
            <div>
              <h2 className="text-section mb-3 text-rain-gray">
                Rainwears Technology
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                Luxury craft meets technical rigor: every module is tuned for silent movement, breathability, and couture-grade finishing.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rain-blue/10 text-rain-blue font-semibold text-sm">
              <Layers size={16} />
              Adaptive layering on
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {technologies.map((tech) => {
              const Icon = tech.icon
              return (
                <motion.div
                  key={tech.title}
                  variants={fadeUp}
                  className="rounded-2xl border border-gray-100 bg-white/80 backdrop-blur-sm p-4 shadow-sm hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-10 w-10 rounded-xl bg-rain-blue/10 text-rain-blue flex items-center justify-center">
                      <Icon size={18} />
                    </div>
                    <span className="text-[11px] px-2 py-1 rounded-full bg-rain-light text-gray-600">
                      Synced
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-rain-gray mb-2">
                    {tech.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {tech.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

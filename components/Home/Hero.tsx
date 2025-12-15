'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motion'
import Button from '@/components/ui/Button'
import Link from 'next/link'
import { ArrowRight, Command, Sparkles, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden notion-surface notion-grid">
      <div className="absolute -left-24 -top-24 w-72 h-72 bg-[#d8e7ff] floating-blob" />
      <div className="absolute right-[-80px] top-12 w-72 h-72 bg-[#ffe7d9] floating-blob" />
      <div className="max-w-container mx-auto px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-[1.05fr,0.95fr] gap-12 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm soft-border shadow-sm">
              <Sparkles size={16} className="text-rain-blue" />
              <span className="text-sm font-medium text-rain-gray">Edition No. 01 — StormShell Atelier</span>
            </div>

            <motion.h1
              variants={fadeUp}
              className="text-[2.8rem] leading-[1.05] md:text-[4.4rem] font-medium text-rain-gray"
            >
              Rainwear with a gallery-level calm.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg md:text-2xl text-gray-600 leading-relaxed max-w-2xl"
            >
              Architectural shells, tactile linings, and sculpted silhouettes. Precision-crafted pieces that keep you dry, composed, and unmistakably polished.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <Link href="/shop">
                <Button size="lg" className="w-full sm:w-auto flex items-center gap-2">
                  Shop the collection
                  <ArrowRight size={18} />
                </Button>
              </Link>
              <Link href="/product/rainwears-stormshell">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto flex items-center gap-2">
                  Explore StormShell
                  <Command size={16} />
                </Button>
              </Link>
            </motion.div>

            <div className="grid sm:grid-cols-3 gap-4">
              {[
                '3D taped seams with whisper-quiet vents',
                'Lightning-dry interiors lined for comfort',
                'Packable pockets with couture finishing',
              ].map((item) => (
                <motion.div
                  key={item}
                  variants={fadeUp}
                  className="glass-card soft-border rounded-2xl px-4 py-5 flex gap-3 items-start"
                >
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rain-blue/10 text-rain-blue">
                    <Zap size={16} />
                  </span>
                  <p className="text-sm text-rain-gray leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="relative">
            <div className="absolute inset-0 blur-3xl bg-gradient-to-b from-rain-blue/10 via-transparent to-rain-blue/0 pointer-events-none" />
            <div className="relative h-full" style={{ perspective: '1600px' }}>
              <motion.div
                initial={{ rotateX: 12, rotateY: -10, y: 20, opacity: 0 }}
                animate={{ rotateX: 18, rotateY: -6, y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                className="glass-card soft-border rounded-[28px] p-8 shadow-xl"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-rain-blue to-rain-blue-dark text-white flex items-center justify-center font-semibold">
                      RW
                    </div>
                    <div>
                    <p className="text-sm text-gray-500">Rainwears Studio</p>
                    <p className="text-lg font-semibold text-rain-gray">StormShell Atelier</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <span className="h-2 w-2 rounded-full bg-green-400" />
                    <span className="h-2 w-2 rounded-full bg-amber-400" />
                    <span className="h-2 w-2 rounded-full bg-rose-400" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { title: 'StormShell', detail: '20K waterproof · 3L shield' },
                    { title: 'CloudLiner', detail: 'Breathable fleece · snaps in' },
                    { title: 'JetPants', detail: 'Articulated knees · packable' },
                    { title: 'CityCape', detail: 'Featherlight · reflective seams' },
                  ].map((card, idx) => (
                    <motion.div
                      key={card.title}
                      whileHover={{ rotateX: 0, rotateY: 0, y: -3 }}
                      className="rounded-2xl p-4 border border-gray-100 bg-white/70 backdrop-blur-sm shadow-sm"
                      style={{
                        transformStyle: 'preserve-3d',
                        transform: `translateZ(${(idx + 1) * 6}px)`,
                      }}
                    >
                      <p className="text-sm text-gray-500">{card.title}</p>
                      <p className="font-semibold text-rain-gray">{card.detail}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-rain-light p-4 shadow-inner">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-sm font-medium text-rain-gray">Workspace Sync</p>
                    <span className="px-3 py-1 rounded-full bg-rain-blue/10 text-xs font-semibold text-rain-blue">
                      Live
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <div className="h-20 w-20 rounded-xl overflow-hidden border border-gray-100 bg-white/60" />
                    <div className="flex-1 space-y-2">
                      <div className="h-3 rounded bg-rain-blue/20 w-2/3" />
                      <div className="h-3 rounded bg-gray-200 w-3/4" />
                      <div className="h-3 rounded bg-gray-200 w-1/2" />
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.6 }}
                className="absolute -right-4 -bottom-10 rounded-3xl glass-card soft-border p-4 shadow-lg max-w-[220px]"
                style={{ transform: 'rotateY(10deg) rotateX(10deg)' }}
              >
                <p className="text-xs text-gray-500 mb-2">Moisture radar</p>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-rain-blue to-rain-blue-dark" />
                  <div>
                    <p className="text-sm font-semibold text-rain-gray">Adaptive venting</p>
                    <p className="text-xs text-gray-500">Auto-adjusted</p>
                  </div>
                </div>
                <div className="mt-3 h-2 rounded-full bg-rain-blue/20 w-4/5" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

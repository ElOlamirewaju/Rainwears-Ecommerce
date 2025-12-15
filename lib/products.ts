export interface ProductColor {
  label: string
  hex: string
  image?: string
}

export interface ProductSpecs {
  waterproofRating: string // e.g., "10K", "20K" (mm)
  breathability: string // g/m²/24h
  seamSealed: boolean
  fabric: string
  weight: number // grams
  packable: boolean
}

export interface Product {
  id: string
  name: string
  slug: string
  price: number
  compareAtPrice?: number
  images: string[]
  colors: ProductColor[]
  sizes: string[]
  category: 'Jackets' | 'Pants' | 'Umbrellas' | 'Bags' | 'Ponchos'
  tags: string[]
  rating: number
  reviewCount: number
  specs: ProductSpecs
  story: string
  features: string[]
  careInstructions: string[]
  shippingInfo: string
}

export const products: Product[] = [  {
    id: '1',
    name: 'Rainwears StormShell',
    slug: 'rainwears-stormshell',
    price: 120,
    compareAtPrice: 399,
    images: [
      '/stormshell/stormshell-crimson.png',
      '/stormshell/stormshell-black.png',
      '/stormshell/stormshell-black-close.png',
      '/stormshell/stormshell-teal.png',
    ],
    colors: [
      { label: 'Crimson Red', hex: '#b91c1c', image: '/stormshell/stormshell-crimson.png' },
      { label: 'Black', hex: '#111827', image: '/stormshell/stormshell-black.png' },
      { label: 'Teal', hex: '#0f766e', image: '/stormshell/stormshell-teal.png' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    category: 'Jackets',
    tags: ['Signature', 'Stormproof', 'Lightweight'],
    rating: 4.8,
    reviewCount: 247,
    specs: {
      waterproofRating: '20K',
      breathability: '15,000',
      seamSealed: true,
      fabric: '3-layer shell',
      weight: 420,
      packable: true,
    },
    story: 'Our flagship alpine shell, cut for movement and finished with couture-level detailing. StormShell pairs 20K protection with breathable comfort for severe weather and elevated city looks.',
    features: [
      '20K waterproof rating',
      'Fully seam-sealed construction',
      'Articulated sleeves for movement',
      'Packs into own pocket',
      'Adjustable hood and cuffs',
    ],
    careInstructions: [
      'Machine wash cold, gentle cycle',
      'Use technical fabric detergent',
      'Do not use fabric softener',
      'Tumble dry low or air dry',
      'Reapply DWR coating as needed',
    ],
    shippingInfo: 'Complimentary delivery in 2–4 days. 30-day returns.',
  },  {
    id: '2',
    name: 'Rainwears MistLite',
    slug: 'rainwears-mistlite',
    price: 300,
    images: [
      '/mistlite/mistlite-cream.png',
      '/mistlite/mistlite-fold.png',
      '/mistlite/mistlite-model-1.png',
      '/mistlite/mistlite-model-2.png',
      '/mistlite/mistlite-pearl-grey.png',
      '/mistlite/mistlite-products.png',
    ],
    colors: [
      { label: 'Cream', hex: '#f5f0e8', image: '/mistlite/mistlite-cream.png' },
      { label: 'Pearl Grey', hex: '#d8d6d1', image: '/mistlite/mistlite-pearl-grey.png' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    category: 'Jackets',
    tags: ['Limited Edition', 'Featherweight', 'Packable'],
    rating: 4.9,
    reviewCount: 189,
    specs: {
      waterproofRating: '10K',
      breathability: '12,000',
      seamSealed: true,
      fabric: '2.5-layer shell',
      weight: 285,
      packable: true,
    },
    story: 'A limited drop crafted for collectors of calm. MistLite drapes like silk, packs to nothing, and keeps you dry with a whisper-light 2.5L shell.',
    features: [
      '10K waterproof rating',
      'Ultra-lightweight at 285g',
      'Packs into compact pouch',
      'Seam-sealed critical areas',
      'Zippered chest pocket',
    ],
    careInstructions: [
      'Machine wash cold',
      'Technical fabric detergent',
      'Air dry or tumble dry low',
    ],
    shippingInfo: 'Complimentary delivery in 2–4 days. 30-day returns.',
  },  {
    id: '3',
    name: 'Rainwears UrbanDry Parka',
    slug: 'rainwears-urbandry-parka',
    price: 400,
    images: [
      '/urbandry/urbandry-burnt-orange-front.png',
      '/urbandry/urbandry-burnt-orange-back.png',
      '/urbandry/urbandry-burnt-orange-runway.png',
      '/urbandry/urbandry-burnt-orange.png',
      '/urbandry/urbandry-black.png',
      '/urbandry/urbandry-black-model.png',
    ],
    colors: [
      { label: 'Burnt Orange', hex: '#d97706', image: '/urbandry/urbandry-burnt-orange-front.png' },
      { label: 'Black', hex: '#000000', image: '/urbandry/urbandry-black.png' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    category: 'Jackets',
    tags: ['New', 'Runway Edition', 'Extended Length'],
    rating: 4.9,
    reviewCount: 156,
    specs: {
      waterproofRating: '20K',
      breathability: '18,000',
      seamSealed: true,
      fabric: '3-layer shell with fleece lining',
      weight: 580,
      packable: false,
    },
    story: 'Runway-inspired tailoring meets weather armor. UrbanDry Parka uses a 3-layer shell with a supple lining for draped, elongated silhouettes and confident city coverage.',
    features: [
      '20K waterproof rating',
      'Extended length coverage',
      'Fleece-lined interior',
      'Hidden adjustable hood',
      'Multiple secure pockets',
    ],
    careInstructions: [
      'Professional cleaning recommended',
      'Or machine wash cold, gentle',
      'Air dry only',
    ],
    shippingInfo: 'Complimentary delivery in 2–4 days. 30-day returns.',
  },  {
    id: '4',
    name: 'Rainwears CloudFold Poncho',
    slug: 'rainwears-cloudfold-poncho',
    price: 500,
    images: [
      '/cloudfold/cloudfold-1.png',
      '/cloudfold/cloudfold-model.png',
      '/cloudfold/cloudfold-2.png',
      '/cloudfold/cloudfold-3.png',
    ],
    colors: [
      { label: 'Brown', hex: '#a0522d', image: '/cloudfold/cloudfold-1.png' },
    ],
    sizes: ['One Size'],
    category: 'Ponchos',
    tags: ['Urban Luxe', 'Ultra-Packable', 'Lightweight'],
    rating: 4.5,
    reviewCount: 98,
    specs: {
      waterproofRating: '10K',
      breathability: '8,000',
      seamSealed: false,
      fabric: 'Coated ripstop',
      weight: 145,
      packable: true,
    },
    story: 'An architectural poncho cut for modern streets. CloudFold drapes in a rich brown tone, packs flat, and elevates stormy days with minimalist luxury.',
    features: [
      'Folds to pocket size',
      'One-size fits all',
      'Snap closure',
      'Integrated hood',
    ],
    careInstructions: [
      'Hand wash cold',
      'Air dry',
      'Store unfolded when possible',
    ],
    shippingInfo: 'Complimentary delivery in 2–4 days.',
  },  {
    id: '5',
    name: 'Rainwears AeroCanopy Umbrella',
    slug: 'rainwears-aerocanopy-umbrella',
    price: 120,
    images: [
      '/umbrella/aerocanopy-black.png',
      '/umbrella/aerocanopy-black-model.png',
      '/umbrella/aerocanopy-crimson-1.png',
      '/umbrella/aerocanopy-crimson-2.png',
    ],
    colors: [
      { label: 'Black', hex: '#0b1018', image: '/umbrella/aerocanopy-black.png' },
      { label: 'Crimson Red', hex: '#b91c1c', image: '/umbrella/aerocanopy-crimson-1.png' },
    ],
    sizes: ['One Size'],
    category: 'Umbrellas',
    tags: ['Windproof', 'Compact', 'Studio Edition'],
    rating: 4.7,
    reviewCount: 312,
    specs: {
      waterproofRating: 'Fully Waterproof',
      breathability: 'N/A',
      seamSealed: true,
      fabric: 'Double-layer canopy',
      weight: 320,
      packable: true,
    },
    story: 'A sleek, wind-tunnel-tested canopy for elevated commutes. AeroCanopy blends sculpted lines with a reinforced double-layer frame for luxury protection.',
    features: [
      'Wind-resistant construction',
      'Auto-open mechanism',
      'Compact when closed',
      'Ergonomic handle',
      'Ventilated canopy design',
    ],
    careInstructions: [
      'Wipe clean with damp cloth',
      'Allow to dry fully before closing',
      'Store in dry place',
    ],
    shippingInfo: 'Complimentary delivery in 2–4 days.',
  },  {
    id: '5-gold',
    name: 'Rainwears AeroCanopy Umbrella Gold',
    slug: 'rainwears-aerocanopy-umbrella-gold',
    price: 200,
    images: [
      '/umbrella/aerocanopy-gold.png',
      '/umbrella/aerocanopy-black-model.png',
      '/umbrella/aerocanopy-black.png',
      '/umbrella/aerocanopy-crimson-1.png',
    ],
    colors: [
      { label: 'Gold', hex: '#d97706', image: '/umbrella/aerocanopy-gold.png' },
      { label: 'Black', hex: '#0b1018', image: '/umbrella/aerocanopy-black.png' },
    ],
    sizes: ['One Size'],
    category: 'Umbrellas',
    tags: ['Luxury', 'Windproof', 'Limited Atelier'],
    rating: 4.9,
    reviewCount: 126,
    specs: {
      waterproofRating: 'Fully Waterproof',
      breathability: 'N/A',
      seamSealed: true,
      fabric: 'Double-layer canopy with gold-finish hardware',
      weight: 320,
      packable: true,
    },
    story: 'A limited atelier edition with gold-accented hardware and the same wind-tunnel pedigree. Crafted for discerning travelers who demand calm in any forecast.',
    features: [
      'Gold-accent hardware',
      'Wind-resistant double canopy',
      'Auto-open mechanism',
      'Ergonomic leather-touch handle',
      'Limited run finish',
    ],
    careInstructions: [
      'Wipe clean with soft cloth',
      'Allow to dry fully before closing',
      'Store in protective sleeve',
    ],
    shippingInfo: 'Free delivery in 2–4 days.',
  },  {
    id: '6',
    name: 'Rainwears DryPack Backpack',
    slug: 'rainwears-drypack-backpack',
    price: 100,
    images: [
      '/drypack/drypack-front.png',
      '/drypack/drypack-side.png',
      '/drypack/drypack-detail.png',
    ],
    colors: [
      { label: 'Black', hex: '#000000', image: '/drypack/drypack-front.png' },
    ],
    sizes: ['20L', '30L', '40L'],
    category: 'Bags',
    tags: ['Fully Sealed', 'Laptop Compartment', 'Travel Luxe'],
    rating: 4.8,
    reviewCount: 201,
    specs: {
      waterproofRating: 'IPX8',
      breathability: 'N/A',
      seamSealed: true,
      fabric: 'TPU-coated nylon',
      weight: 680,
      packable: false,
    },
    story: 'A streamlined dry pack with couture-level sealing. DryPack protects tech and tailoring alike with a sculpted profile and submersible-grade construction.',
    features: [
      'Fully waterproof construction',
      'Roll-top closure',
      'Padded laptop compartment',
      'Adjustable shoulder straps',
      'Multiple organization pockets',
    ],
    careInstructions: [
      'Wipe clean with damp cloth',
      'Air dry',
      'Store with closure open',
    ],
    shippingInfo: 'Free delivery in 2–4 days.',
  },  {
    id: '7',
    name: 'Rainwears FlowPants',
    slug: 'rainwears-flowpants',
    price: 150,
    images: [
      '/flowpants/flowpants-1.png',
      '/flowpants/flowpants-2.png',
      '/flowpants/flowpants-3.png',
      '/flowpants/flowpants-4.png',
    ],
    colors: [
      { label: 'Black', hex: '#000000', image: '/flowpants/flowpants-1.png' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    category: 'Pants',
    tags: ['Waterproof', 'Breathable', 'Tailored Stretch'],
    rating: 4.7,
    reviewCount: 134,
    specs: {
      waterproofRating: '15K',
      breathability: '10,000',
      seamSealed: true,
      fabric: '2.5-layer stretch',
      weight: 320,
      packable: true,
    },
    story: 'Streamlined technical trousers with a tailored drape. FlowPants use 2.5-layer stretch for silent movement and polished rain protection.',
    features: [
      '15K waterproof rating',
      'Stretch fabric for mobility',
      'Fully seam-sealed',
      'Adjustable waistband',
      'Zippered side pockets',
    ],
    careInstructions: [
      'Machine wash cold',
      'Technical fabric detergent',
      'Air dry or tumble dry low',
    ],
    shippingInfo: 'Free delivery in 2–4 days.',
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug)
}

export function getProductsByCategory(category: Product['category']): Product[] {
  return products.filter(p => p.category === category)
}

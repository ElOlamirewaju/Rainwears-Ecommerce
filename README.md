# Rainwears - Premium Rain Gear E-Commerce

A beautifully designed e-commerce website for premium rain gear, built with Next.js, TypeScript, Framer Motion, and Tailwind CSS. Features an Apple-inspired minimalist design with smooth animations and premium UX.

## Brand Concept

Rainwears is a premium rain gear ecommerce store specializing in jackets, shells, ponchos, umbrellas, and waterproof bags. The design philosophy is:

- **Minimal, clean, confident**
- **"Hardware-grade" product presentation** (Apple style)
- **Smooth animations** that feel intentional, not flashy
- **Short, clear, calm** brand voice

## Features

### Design & UX
- 🎨 **Apple-style UI/UX** - Clean, minimalist design with lots of whitespace
- 🎭 **Framer Motion** - Subtle, intentional animations throughout
- 📱 **Fully Responsive** - Works seamlessly on all devices
- ♿ **Accessible** - Focus states, keyboard navigation, ARIA labels

## 🖼️ Screenshots

### Home Page
![Home Page](https://github.com/ElOlamirewaju/Rainwears-Ecommerce/tree/main/public/screenshot/home.png)

### Product Grid
![Shop Page](https://github.com/ElOlamirewaju/Rainwears-Ecommerce/tree/main/public/screenshot/shop.png)

### Product Detail
![Product Detail](https://github.com/ElOlamirewaju/Rainwears-Ecommerce/tree/main/public/screenshot/product-detail.png)

### Shopping Cart
![Cart](https://github.com/ElOlamirewaju/Rainwears-Ecommerce/tree/main/public/screenshot/cart.png)

### Checkout
![Checkout](https://github.com/ElOlamirewaju/Rainwears-Ecommerce/tree/main/public/screenshot/checkout.png)


### E-Commerce Features
- 🛍️ **Product Catalog** - 6 premium rain gear products with detailed specs
- 🛒 **Shopping Cart** - Slide-out drawer (Apple-like) and dedicated cart page
- 📦 **Product Details** - Image galleries, color/size selectors, specs, reviews
- 💳 **Checkout Flow** - Complete checkout with order summary
- 🔍 **Shop Filtering** - Filter products by category

### Product Information
- Waterproof ratings (10K, 20K mm)
- Breathability specs (g/m²/24h)
- Detailed fabric and construction information
- Weight and packability details
- Care instructions and shipping info

## Tech Stack

- **Framework**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **State Management**: React Context API

## Project Structure

```
/app
  /(marketing)
    page.tsx                 # Home page
  /shop
    page.tsx                 # Shop with filters
  /product/[slug]
    page.tsx                 # Product detail pages
  /cart
    page.tsx                 # Cart page
  /checkout
    page.tsx                 # Checkout page
/components
  /ui                        # UI primitives
    Button.tsx
    Pill.tsx
    Accordion.tsx
  /layout                    # Layout components
    Header.tsx
    Footer.tsx
  /product                   # Product components
    ProductCard.tsx
    ProductGrid.tsx
  /cart                      # Cart components
    CartDrawer.tsx
  /Home                      # Home page sections
    Hero.tsx
    TechnologySection.tsx
/lib
  products.ts                # Product data
  format.ts                  # Formatting utilities
  motion.ts                  # Framer Motion presets
/context
  CartContext.tsx            # Shopping cart state
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Pages & Routes

- `/` - Home page with hero, featured products, and technology section
- `/shop` - Product grid with category filters
- `/product/[slug]` - Individual product detail pages
- `/cart` - Shopping cart page
- `/checkout` - Checkout flow

## Design System

### Colors
- **Rain Blue**: `#0066CC` (primary)
- **Gray**: `#1d1d1f` (text)
- **Light Gray**: `#f5f5f7` (backgrounds)

### Typography
- **Hero**: 4rem–5rem, semibold
- **Section**: 2rem, semibold
- **Body**: 1rem (15px)
- **Caption**: 0.8125rem

### Motion
- **Page transitions**: 350ms, smooth easing
- **Hover effects**: 200ms, subtle scale (1.02)
- **Micro interactions**: 100–200ms
- All animations respect `prefers-reduced-motion`

## Product Catalog

The site includes 6 premium rain gear products:

1. **Rainwears StormShell** - 20K waterproof jacket
2. **Rainwears MistLite** - Lightweight 10K jacket
3. **Rainwears UrbanDry Parka** - Extended length parka
4. **Rainwears CloudFold Poncho** - Ultra-packable poncho
5. **Rainwears AeroCanopy Umbrella** - Windproof umbrella
6. **Rainwears DryPack Backpack** - Waterproof backpack

Each product includes:
- Multiple images
- Color and size options
- Technical specifications
- Features and care instructions

## Customization

### Adding Products

Edit `lib/products.ts` to add or modify products. Follow the `Product` interface structure.

### Styling

The design system is configured in `tailwind.config.js`. Rainwears brand colors and typography are defined there.

### Animations

Framer Motion animations can be customized in `lib/motion.ts`. The design uses smooth, subtle animations throughout.

## Build for Production

```bash
npm run build
npm start
```

## Portfolio Features

This project demonstrates:

- **Design System** - Consistent typography, spacing, and color palette
- **Component Library** - Reusable UI components
- **Animation System** - Consistent motion design language
- **E-Commerce UX** - Complete shopping flow
- **Responsive Design** - Mobile-first approach
- **Type Safety** - Full TypeScript implementation

## Contributing

Contributions are welcome! Please read `CONTRIBUTING.md` for development guidelines and expectations.

## License

This project is licensed under the MIT License. See `LICENSE` for details.

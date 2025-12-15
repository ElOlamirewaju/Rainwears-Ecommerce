import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rainwears - Premium Rain Gear',
  description: 'Premium rainwear engineered to move, breathe, and disappear into your day. Weather, refined.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}


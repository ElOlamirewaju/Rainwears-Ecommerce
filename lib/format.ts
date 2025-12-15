export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

export function formatWeight(grams: number): string {
  if (grams < 1000) {
    return `${grams}g`
  }
  return `${(grams / 1000).toFixed(1)}kg`
}

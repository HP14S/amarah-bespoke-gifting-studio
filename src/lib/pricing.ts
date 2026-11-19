/** Starting price shown on gift items and cards (the exact price is shared on WhatsApp). */
export const GIFTS_STARTING_PRICE = 3;
export const CURRENCY_SYMBOL = "£";

export function formatPrice(amount: number): string {
  const value = Number.isInteger(amount) ? String(amount) : amount.toFixed(2);
  return `${CURRENCY_SYMBOL}${value}`;
}

export function startingPriceLabel(amount: number = GIFTS_STARTING_PRICE): string {
  return `From ${formatPrice(amount)}`;
}

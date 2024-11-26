export function formatCurrency(
  { currency, format }: { currency: string; format: string },
  total: number
): string {
  return new Intl.NumberFormat(currency, {
    currency: format,
    style: "currency",
  }).format(total);
}

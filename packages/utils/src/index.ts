export function formatDate(date: string | Date) {
  return new Date(date).toLocaleDateString("fi-FI", {});
}

export function formatNumber(number: number) {
  if (!number) return undefined;
  return number.toLocaleString("fi-FI", {
    maximumFractionDigits: 0,
  });
}

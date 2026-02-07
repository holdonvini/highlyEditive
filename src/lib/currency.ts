/**
 * Currency formatting utilities using Intl.NumberFormat
 */

export type CurrencyCode =
  | "INR"
  | "USD"
  | "EUR"
  | "GBP"
  | "JPY"
  | "AUD"
  | "CAD"
  | "CNY"
  | string;

export interface FormatCurrencyOptions {
  /** Currency code (e.g., 'INR', 'USD') */
  currency: CurrencyCode;
  /** Locale for formatting (defaults to 'en-IN' for INR, 'en-US' otherwise) */
  locale?: string;
  /** Minimum fraction digits (default: 0) */
  minimumFractionDigits?: number;
  /** Maximum fraction digits (default: 2) */
  maximumFractionDigits?: number;
  /** Display style: 'symbol' | 'narrowSymbol' | 'code' | 'name' */
  currencyDisplay?: "symbol" | "narrowSymbol" | "code" | "name";
}

/**
 * Get the default locale for a currency
 */
export function getDefaultLocale(currency: CurrencyCode): string {
  const localeMap: Record<string, string> = {
    INR: "en-IN",
    USD: "en-US",
    EUR: "de-DE",
    GBP: "en-GB",
    JPY: "ja-JP",
    AUD: "en-AU",
    CAD: "en-CA",
    CNY: "zh-CN",
  };
  return localeMap[currency] || "en-US";
}

/**
 * Format a number as currency
 * @example formatCurrency(1234.5, { currency: 'INR' }) // "₹1,234.50"
 * @example formatCurrency(1234.5, { currency: 'USD' }) // "$1,234.50"
 */
export function formatCurrency(
  amount: number,
  options: FormatCurrencyOptions,
): string {
  const {
    currency,
    locale = getDefaultLocale(currency),
    minimumFractionDigits = 0,
    maximumFractionDigits = 2,
    currencyDisplay = "symbol",
  } = options;

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits,
    maximumFractionDigits,
    currencyDisplay,
  }).format(amount);
}

/**
 * Format currency in compact notation (e.g., 1K, 1M, 1Cr for INR)
 * @example formatCurrencyCompact(1500000, { currency: 'INR' }) // "₹15L"
 * @example formatCurrencyCompact(1500000, { currency: 'USD' }) // "$1.5M"
 */
export function formatCurrencyCompact(
  amount: number,
  options: FormatCurrencyOptions,
): string {
  const {
    currency,
    locale = getDefaultLocale(currency),
    currencyDisplay = "symbol",
  } = options;

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    currencyDisplay,
    notation: "compact",
    compactDisplay: "short",
  }).format(amount);
}

/**
 * Get the currency symbol for a given currency code
 * @example getCurrencySymbol('INR') // "₹"
 * @example getCurrencySymbol('USD') // "$"
 */
export function getCurrencySymbol(
  currency: CurrencyCode,
  locale?: string,
): string {
  const resolvedLocale = locale || getDefaultLocale(currency);

  return (
    new Intl.NumberFormat(resolvedLocale, {
      style: "currency",
      currency,
      currencyDisplay: "symbol",
    })
      .formatToParts(0)
      .find((part) => part.type === "currency")?.value || currency
  );
}

/**
 * Format price with currency symbol only (no decimal places)
 * Useful for displaying whole number prices
 * @example formatWholePrice(1234, { currency: 'INR' }) // "₹1,234"
 */
export function formatWholePrice(
  amount: number,
  options: Omit<
    FormatCurrencyOptions,
    "minimumFractionDigits" | "maximumFractionDigits"
  >,
): string {
  return formatCurrency(amount, {
    ...options,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

/**
 * Format price range
 * @example formatPriceRange(100, 500, { currency: 'INR' }) // "₹100 - ₹500"
 */
export function formatPriceRange(
  minAmount: number,
  maxAmount: number,
  options: FormatCurrencyOptions,
): string {
  const formattedMin = formatCurrency(minAmount, options);
  const formattedMax = formatCurrency(maxAmount, options);
  return `${formattedMin} - ${formattedMax}`;
}

/**
 * Parse a currency string back to a number
 * Note: This is a basic parser and may not work for all locales
 * @example parseCurrencyString("₹1,234.50") // 1234.5
 * @example parseCurrencyString("$1,234.50") // 1234.5
 */
export function parseCurrencyString(currencyString: string): number {
  // Remove all non-numeric characters except decimal point and minus
  const numericString = currencyString
    .replace(/[^\d.,-]/g, "")
    .replace(/,/g, "");

  return parseFloat(numericString) || 0;
}

/**
 * Convert amount from one currency to another (requires exchange rate)
 * @example convertCurrency(100, 83.5) // 8350 (100 USD to INR at rate 83.5)
 */
export function convertCurrency(amount: number, exchangeRate: number): number {
  return amount * exchangeRate;
}

/**
 * Format currency with custom prefix/suffix
 * @example formatCurrencyWithLabel(1234, { currency: 'INR' }, 'Starting at')
 * // "Starting at ₹1,234"
 */
export function formatCurrencyWithLabel(
  amount: number,
  options: FormatCurrencyOptions,
  prefix?: string,
  suffix?: string,
): string {
  const formatted = formatCurrency(amount, options);
  const parts: string[] = [];

  if (prefix) parts.push(prefix);
  parts.push(formatted);
  if (suffix) parts.push(suffix);

  return parts.join(" ");
}

import { type ClassValue, clsx } from 'clsx';
import { DateTimeFormatOptions } from 'next-intl';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number, currency: string = '$'): string {
  const formattedAmount = amount.toLocaleString();

  return `${formattedAmount}${currency.toUpperCase()}`;
}

export function convertBytesToKB(bytes) {
  return `${(bytes / 1024).toFixed(2)}KB`;
}

export function formatDate(date: Date) {
  const options: DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  return new Date(date).toLocaleDateString('en-US', options);
}

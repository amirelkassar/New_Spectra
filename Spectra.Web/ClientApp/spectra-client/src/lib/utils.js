import { clsx } from 'clsx';
import dayjs from 'dayjs';
import 'dayjs/locale/ar';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount, currency = '$') {
  const formattedAmount = amount.toLocaleString();

  return `${formattedAmount}${currency.toUpperCase()}`;
}

export function convertBytesToKB(bytes) {
  return `${(bytes / 1024).toFixed(2)}KB`;
}

export function formatDate(date) {
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  return new Date(date).toLocaleDateString(
    'en-US',
    options
  );
}

export function getDate(date = '', locale = 'en') {
  if (!date || typeof date !== 'string')
    return {
      fullYear: '',
      time: '',
      fullYearWithMonthName: '',
    };

  const fullYear = dayjs(date)
    .locale(locale)
    .format('YYYY/MM/DD');
  const time = dayjs(date).locale(locale).format('hh:mm A');
  const fullYearWithMonthName = dayjs(date)
    .locale(locale)
    .format('DD MMM, YYYY');

  return {
    fullYear,
    time,
    fullYearWithMonthName,
  };
}

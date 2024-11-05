import { clsx } from 'clsx';
import dayjs from 'dayjs';
import 'dayjs/locale/ar';
import relativeTime from 'dayjs/plugin/relativeTime';
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
      timeFromNow: '',
    };

  const fullYear = dayjs(date)
    .locale(locale)
    .format('YYYY/MM/DD');
  const time = dayjs(date).locale(locale).format('hh:mm A');
  const fullYearWithMonthName = dayjs(date)
    .locale(locale)
    .format('DD MMM, YYYY');

  dayjs.extend(relativeTime);
  const timeFromNow = dayjs(date).locale(locale).fromNow();

  return {
    fullYear,
    time,
    fullYearWithMonthName,
    timeFromNow,
  };
}

export function calculateAgeInMonths(birthDate) {
  const birthDateTimestamp = new Date(birthDate).getTime();
  const todayTimestamp = new Date().getTime();

  const differenceInMilliseconds =
    todayTimestamp - birthDateTimestamp;

  if (differenceInMilliseconds < 0) {
    return 0;
  }

  // تحويل الفرق إلى أشهر (تقريبي)
  const months = Math.floor(
    differenceInMilliseconds / (1000 * 60 * 60 * 24 * 30.44)
  );

  return months;
}

import { clsx } from 'clsx';
import dayjs from 'dayjs';
import 'dayjs/locale/ar';
import relativeTime from 'dayjs/plugin/relativeTime';
import { serialize } from 'object-to-formdata';
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
    return null;
  }

  // تحويل الفرق إلى أشهر (تقريبي)
  const months = Math.floor(
    differenceInMilliseconds / (1000 * 60 * 60 * 24 * 30.44)
  );

  return months;
}

export function handlePagination(
  noPerPage = 4,
  page = 1,
  data = []
) {
  const startIndex = (page - 1) * noPerPage;
  const endIndex = page * noPerPage;
  return data.slice(startIndex, endIndex);
}

export const getFormData = (data) => {
  return serialize(data, {
    indices: true,
    nullsAsUndefineds: true,
  });
};

export const buildQuery = (baseUrl, params = {}) => {
  const queryString = Object.entries(params)
    .filter(
      ([_, value]) => value !== undefined && value !== null
    )
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(
          value
        )}`
    )
    .join('&');
  return queryString
    ? `${baseUrl}?${queryString}`
    : baseUrl;
};

export function getQueries(pageNum, search = '', queries) {
  if (pageNum === '*')
    return {
      search: '',
      skipCount: 0,
      maxCount: 100,
    };

  // Ensure pageNum is at least 1
  const validPageNum = pageNum < 1 ? 1 : pageNum;

  // Calculate skipCount based on the valid page number and maxCount
  const skipCount = (validPageNum - 1) * queries.maxCount;

  // Return updated queries
  return {
    ...queries,
    skipCount,
    search,
  };
}

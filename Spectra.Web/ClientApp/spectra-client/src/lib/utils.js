import ROUTES from '@/routes';
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
  if (!amount) return '--';
  const formattedAmount = amount.toLocaleString();

  return `${formattedAmount} ${currency.toUpperCase()}`;
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
  return new Date(date).toLocaleDateString('en-US', options);
}

export function getDate(date = '', locale = 'en') {
  if (!date || typeof date !== 'string')
    return {
      fullYear: '',
      time: '',
      fullYearWithMonthName: '',
      timeFromNow: '',
    };

  const fullYear = dayjs(date).locale(locale).format('YYYY/MM/DD');
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

export function handlePagination(noPerPage = 4, page = 1, data = []) {
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
    // eslint-disable-next-line no-unused-vars
    .filter(([_, value]) => value !== undefined && value !== null)
    .flatMap(([key, value]) => {
      // Handle arrays by returning multiple key=value pairs
      if (Array.isArray(value)) {
        return value
          .filter((item) => item?.toString().trim() !== '') // Filter empty items
          .map(
            (item) =>
              `${encodeURIComponent(key)}=${encodeURIComponent(item)}`
          );
      }
      return `${encodeURIComponent(key)}=${encodeURIComponent(
        value
      )}`;
    })
    .join('&');

  return queryString ? `${baseUrl}?${queryString}` : baseUrl;
};

export const getSkipCountFromPageNum = (pageNum, maxCount) => {
  if (pageNum === 'all') return { skipCount: 0, maxCount: 100 };
  if (!pageNum) return { skipCount: 0, maxCount };

  // Ensure pageNum is at least 1
  const validPageNum = pageNum < 1 ? 1 : pageNum;

  // Calculate skipCount based on the valid page number and maxCount
  const skipCount = (validPageNum - 1) * maxCount;

  return { skipCount, maxCount };
};

export function getQueries({ params, initialQueries }) {
  const { maxCount, skipCount } = getSkipCountFromPageNum(
    params.pageNum,
    initialQueries.maxCount
  );

  const filteredParams = Object.fromEntries(
    Object.entries(params).filter(([key, value]) => {
      if (key === 'pageNum') return false; // Ignore pageNum
      if (Array.isArray(value)) {
        return value.some((item) => item?.toString().trim() !== ''); // Check non-empty arrays
      }
      return value?.toString().trim() !== ''; // Filter non-empty single values
    })
  );

  return {
    maxCount,
    skipCount,
    ...filteredParams,
  };
}

export const getErrors = (error) => {
  if (!error) return { code: '', message: '' };
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    const code = error?.status;
    const errors = error?.response?.data?.errors;

    if (!errors) return { code, message: '' };

    const message = Object.entries(errors)
      // eslint-disable-next-line no-unused-vars
      .map(([_, value]) => value?.join(', '))
      .join(', ');

    return { code, message };
  } //  else if (error.request) {
  //   // The request was made but no response was received
  //   return error.request;
  // } else {
  //   // Something happened in setting up the request that triggered an Error
  //   return error.message;
  // }
};

export const getFormErrors = (error) => {
  if (!error) return null;
  if (!error?.response) return null;

  const errors = error?.response?.data?.errors;
  if (!errors) return null;

  const errorsObj = Object.entries(errors).reduce(
    (acc, [key, value]) => {
      const formattedKey = key[0].toLowerCase() + key.slice(1);
      acc[formattedKey] = value?.join(', ');
      return acc;
    },
    {}
  );

  return errorsObj;
};

export const downloadFile = async (url, fileName) => {
  try {
    const response = await fetch(url);
    const blob = await response.blob();

    // إنشاء URL من blob
    const blobUrl = window.URL.createObjectURL(blob);

    // إنشاء عنصر <a> لتحميل الملف
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = fileName || 'downloaded-file'; // اسم الملف مع امتداده

    // محاكاة النقر على الرابط
    document.body.appendChild(link);
    link.click();

    // تنظيف الـ DOM وإلغاء الـ objectURL
    document.body.removeChild(link);
    window.URL.revokeObjectURL(blobUrl);
  } catch (error) {
    console.error('Error fetching the file:', error);
  }
};

export const printFile = async (url) => {
  try {
    const response = await fetch(url);
    const blob = await response.blob();

    // إنشاء URL للملف
    const blobUrl = URL.createObjectURL(blob);

    // فتح نافذة جديدة
    const printWindow = window.open(blobUrl, '_blank');

    // التأكد من تحميل الملف ثم الطباعة
    printWindow.onload = () => {
      printWindow.print();
      printWindow.onafterprint = () => {
        printWindow.close(); // إغلاق النافذة بعد الطباعة
        URL.revokeObjectURL(blobUrl); // تنظيف الـ objectURL
      };
    };
  } catch (error) {
    console.error('Error fetching or printing the file:', error);
  }
};

export const getRedirectPath = (roles, hasActiveContract = true) => {
  switch (roles[0]) {
    case 'SystemAdmin':
    case 'CustomerSupport':
    case 'Accountant':
      return ROUTES.ADMIN.MAIN;
    case 'Doctor':
    case 'Specialist':
    case 'DepartmentHead':
    case 'ServiceHead':
      if (!hasActiveContract)
        return ROUTES.DOCTOR.CONTRACTS.DASHBOARD;
      return ROUTES.DOCTOR.MAIN;
    case 'Client':
      return ROUTES.CLIENT.MAIN.HOME;
    default:
      return ROUTES.HOME;
  }
};

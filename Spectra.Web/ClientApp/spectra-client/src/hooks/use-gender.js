'use client';

import { useLocale } from 'next-intl';

export const useGender = (gender) => {
  const locale = useLocale();

  switch (String(gender).toLowerCase()) {
    case '1':
      return locale === 'en' ? 'Female' : 'انثي';
    case '2':
      return locale === 'en' ? 'Male' : 'ذكر';
    default:
      return '';
  }
};

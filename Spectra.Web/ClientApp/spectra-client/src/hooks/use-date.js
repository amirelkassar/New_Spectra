'use client';

import dayjs from 'dayjs';
import 'dayjs/locale/ar';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useLocale } from 'next-intl';

export const useDate = (date = '') => {
  const locale = useLocale();

  if (!date || typeof date !== 'string')
    return {
      fullYear: '',
      time: '',
      fullYearWithMonthName: '',
      timeFromNow: '',
      dayOfTheMonth: '',
      fullMonthName: '',
    };

  const fullYear = dayjs(date).locale(locale).format('YYYY/MM/DD');
  const time = dayjs(date).locale(locale).format('hh:mm A');
  const fullYearWithMonthName = dayjs(date)
    .locale(locale)
    .format('DD MMM, YYYY');

  dayjs.extend(relativeTime);
  const timeFromNow = dayjs(date).locale(locale).fromNow();

  const dayOfTheMonth = dayjs(date).locale(locale).format('DD');

  const fullMonthName = dayjs(date).locale(locale).format('MMMM');

  return {
    fullYear,
    time,
    fullYearWithMonthName,
    timeFromNow,
    dayOfTheMonth,
    fullMonthName,
  };
};

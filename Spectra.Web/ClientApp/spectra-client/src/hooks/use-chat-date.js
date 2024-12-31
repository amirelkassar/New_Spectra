'use client';

import dayjs from 'dayjs';
import 'dayjs/locale/ar';
import 'dayjs/locale/en';
import isToday from 'dayjs/plugin/isToday';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import { useLocale } from 'next-intl';

dayjs.extend(isToday);
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

export const useChatDate = (date = '') => {
  const locale = useLocale();

  if (!date || typeof date !== 'string') {
    return {
      formattedDate: '',
    };
  }

  const now = dayjs();
  const inputDate = dayjs(date).locale(locale);

  let formattedDate = '';

  if (inputDate.isToday()) {
    // SAME DAY
    formattedDate = inputDate.format('hh:mm A');
  } else if (inputDate.isSame(now, 'week')) {
    // SAME WEEK
    formattedDate = inputDate.format('dddd hh:mm A');
  } else if (inputDate.isSame(now, 'year')) {
    // SAME YEAR
    formattedDate = inputDate.format('D MMM hh:mm A');
  } else {
    // OLDER YEARS
    formattedDate = inputDate.format('D MMM YYYY hh:mm A');
  }

  return {
    time: formattedDate,
  };
};

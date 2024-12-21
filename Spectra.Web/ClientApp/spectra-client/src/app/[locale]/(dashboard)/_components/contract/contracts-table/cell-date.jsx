'use client';

import { useDate } from '@/hooks/use-date';

export const CellDate = ({ date = '' }) => {
  const { fullYear } = useDate(date);

  return fullYear;
};

'use client';

import { useTranslations } from 'next-intl';

export const Translate = ({ value = '', target = 'general_obj' }) => {
  const t = useTranslations(target);

  if (!value) return null;
  return t(value);
};

'use client';

import { useToken } from './use-token';

export const useImagePath = (path = '') => {
  const token = useToken();

  if (!path) return '';
  if (typeof path !== 'string') return '';
  if (!path?.startsWith('http')) return '';

  return `${path}?token=${token}`;
};

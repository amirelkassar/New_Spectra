'use client';

import { useContext } from 'react';

import { TokenContext } from '@/providers/token-provider';

export const useToken = () => {
  const context = useContext(TokenContext);
  if (!context) {
    throw new Error(
      'useToken must be used within a TokenProvider or no Token was provided!!'
    );
  }
  return context;
};

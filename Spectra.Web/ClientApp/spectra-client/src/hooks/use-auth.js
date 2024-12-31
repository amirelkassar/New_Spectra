'use client';

import { useContext } from 'react';

import { SessionConetext } from '@/providers/session-provider';

export const useAuth = () => {
  const context = useContext(SessionConetext);
  if (!context) {
    throw new Error(
      'useAuth must be used within a SessionProvider or no Session was provided!!'
    );
  }

  const value = {
    userId: context?.userId || '',
    firstName: context?.firstName || '',
    lastName: context?.lastName || '',
    email: context?.email || '',
    roles: context?.roles || [],
    permissions: context?.permissions || [],
    hasActiveContract: context?.hasActiveContract || false,
    setSession: context?.setSession,
  };

  return value;
};

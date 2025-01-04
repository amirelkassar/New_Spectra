'use client';

import { createContext, useState } from 'react';

export const SessionConetext = createContext(null);

export const SessionProvider = ({ children, initialValue }) => {
  const [session, setSession] = useState(initialValue);

  const clearSession = () => {
    setSession({
      userId: '',
      firstName: '',
      lastName: '',
      email: '',
      roles: [],
      permissions: [],
      hasActiveContract: false,
    });
  };

  const value = {
    userId: session?.userId || '',
    firstName: session?.firstName || '',
    lastName: session?.lastName || '',
    email: session?.email || '',
    roles: session?.roles || [],
    permissions: session?.permissions || [],
    hasActiveContract: session?.hasActiveContract || false,
    setSession,
    clearSession,
  };

  return (
    <SessionConetext.Provider value={value}>
      {children}
    </SessionConetext.Provider>
  );
};

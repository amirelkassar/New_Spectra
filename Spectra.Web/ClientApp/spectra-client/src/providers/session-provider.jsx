'use client';

import { createContext, useState } from 'react';

export const SessionConetext = createContext(null);

export const SessionProvider = ({ children, initialValue }) => {
  const [session, setSession] = useState(initialValue);

  const value = {
    roles: session?.roles || [],
    permissions: session?.permissions || [],
    hasActiveContract: session?.hasActiveContract || false,
    setSession,
  };

  return (
    <SessionConetext.Provider value={value}>
      {children}
    </SessionConetext.Provider>
  );
};

'use client';

import { createContext, useContext, useState } from 'react';

const SessionConetext = createContext(null);

export const SessionProvider = ({ children, initialValue = {} }) => {
  const [session, setSession] = useState(initialValue);

  const value = {
    roles: session?.roles,
    permissions: session?.permissions,
    setSession,
  };

  return (
    <SessionConetext.Provider value={value}>
      {children}
    </SessionConetext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(SessionConetext);
  if (!context) {
    throw new Error(
      'useAuth must be used within a SessionProvider or no Session was provided!!'
    );
  }
  return context;
};

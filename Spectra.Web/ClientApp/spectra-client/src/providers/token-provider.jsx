'use client';

import { createContext, useState } from 'react';

export const TokenContext = createContext(null);

export const TokenProvider = ({ children, initialValue = '' }) => {
  const [token, setToken] = useState(initialValue);

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};

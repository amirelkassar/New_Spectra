'use client';

import { createContext, useContext, useState } from 'react';

const TokenContext = createContext(null);

export const TokenProvider = ({ children, value }) => {
  const [token, setToken] = useState(value);

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};

export const useToken = () => {
  const context = useContext(TokenContext);
  if (!context) {
    throw new Error(
      'useToken must be used within a TokenProvider or no Token was provided!!'
    );
  }
  return context;
};

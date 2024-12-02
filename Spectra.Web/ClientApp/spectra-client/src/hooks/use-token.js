'use client';

import { createContext, useContext, useState } from 'react';

const tokenConetext = createContext(null);

export const TokenProvider = ({ children, value }) => {
  const [token] = useState(value);

  return (
    <tokenConetext.Provider value={token}>
      {children}
    </tokenConetext.Provider>
  );
};

export const useToken = () => {
  const context = useContext(tokenConetext);
  // if (!context) {
  //   throw new Error(
  //     'useToken must be used within a TokenProvider'
  //   );
  // }
  return context;
};

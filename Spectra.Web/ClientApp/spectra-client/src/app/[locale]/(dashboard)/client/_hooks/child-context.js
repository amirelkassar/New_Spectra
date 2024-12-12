'use client';

import { createContext, useContext, useState } from 'react';

const ChildContext = createContext({});

export const ChildContextProvider = ({
  initialValue = {},
  children,
}) => {
  const [child, set] = useState(initialValue);

  const setChild = (child) => {
    set(child);
    if (typeof window !== 'undefined') {
      localStorage.setItem('child', JSON.stringify(child));
    }
  };

  const getChild = () => {
    if (typeof window !== 'undefined') {
      const child = localStorage.getItem('child') || null;
      if (child) {
        return JSON.parse(child);
      }
    }
    return child;
  };

  return (
    <ChildContext.Provider value={{ getChild, setChild }}>
      {children}
    </ChildContext.Provider>
  );
};

export const useChild = () => {
  return useContext(ChildContext);
};

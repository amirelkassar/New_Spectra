'use client';

import { createContext, useContext, useState } from 'react';

const BookContext = createContext({});

export const BookContextProvider = ({ children }) => {
  const [selected, setSelected] = useState({
    doctorId: null,
    specializationId: null,
  });

  return (
    <BookContext.Provider
      value={{
        selected,
        setSelected,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export const useBook = () => {
  return useContext(BookContext);
};

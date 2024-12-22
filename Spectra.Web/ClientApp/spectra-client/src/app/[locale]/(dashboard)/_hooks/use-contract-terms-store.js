'use client';

import { createContext, useContext, useState } from 'react';
import { createStore, useStore } from 'zustand';

const ContractContext = createContext(undefined);

const infoSection = {
  arName: '',
  enName: '',
  arDate: '',
  enDate: '',
};

export const ContractTermsProvider = ({
  children,
  initialValue = {
    infoSection,
    sections: [],
    doctorSignaturePath: null,
    adminSignaturePath: null,
    headSignaturePath: null,
  },
}) => {
  const [store] = useState(() =>
    createStore((set) => ({
      infoSection: initialValue.infoSection || infoSection,

      sections: initialValue.sections || [],

      doctorSignaturePath: initialValue.doctorSignaturePath || null,
      adminSignaturePath: initialValue.adminSignaturePath || null,
      headSignaturePath: initialValue.headSignaturePath || null,

      setInfoSection: (event) =>
        set((state) => ({
          infoSection: {
            ...state.infoSection,
            [event.target.name]: event.target.value,
          },
        })),

      setSection: (id, event) => {
        set((state) => {
          const sections = [...state.sections];
          const section = sections.find(
            (section) => section.id === id
          );
          section[event.target.name] = event.target.value;
          return { sections };
        });
      },
    }))
  );

  return (
    <ContractContext.Provider value={store}>
      {children}
    </ContractContext.Provider>
  );
};

export const useContractTermsStore = (selector) => {
  const store = useContext(ContractContext);
  if (store === undefined) {
    throw new Error(
      'useContractTermsStore must be used within a ContractTermsProvider'
    );
  }
  return useStore(store, selector);
};

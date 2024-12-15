'use client';

import { createContext, useContext, useState } from 'react';
import { createStore, useStore } from 'zustand';

const ContractContext = createContext(undefined);

export const ContractProvider = ({
  children,
  initialState = {
    freelancer: [],
    spectraTeam: [],
    workDays: {
      hoursPerDay: '',
      daysPerWeek: '',
    },
    freelanceEmployeePercentage: '',
  },
}) => {
  const [store] = useState(() =>
    createStore((set) => ({
      freelancer: initialState?.freelancer || [],

      spectraTeam: initialState?.spectraTeam || [],

      selectedFreelanceIds:
        initialState?.freelancer?.map((service) => service.id) || [],

      selectedSpectraTeamIds:
        initialState?.spectraTeam?.map((service) => service.id) || [],

      workDays: initialState?.workDays || {
        hoursPerDay: '',
        daysPerWeek: '',
      },

      freelanceEmployeePercentage:
        initialState?.freelanceEmployeePercentage || '',

      isChatOpen: false,

      openChat: () => set(() => ({ isChatOpen: true })),

      closeChat: () => set(() => ({ isChatOpen: false })),

      toggleChat: () =>
        set((state) => ({ isChatOpen: !state.isChatOpen })),

      setWorkDays: (workDays) => set(() => ({ workDays })),

      setfreelanceEmployeePercentage: (freelanceEmployeePercentage) =>
        set(() => {
          if (freelanceEmployeePercentage > 70)
            return {
              freelanceEmployeePercentage: '70',
            };

          if (freelanceEmployeePercentage < 0)
            return {
              freelanceEmployeePercentage: '0',
            };

          return {
            freelanceEmployeePercentage,
          };
        }),

      setSelectedFreelanceIds: (service) => {
        set((state) => {
          return {
            selectedFreelanceIds: [
              ...state.selectedFreelanceIds,
              service.id,
            ],
            freelancer: [...state.freelancer, service],
          };
        });
      },

      setSelectedSpectraTeamIds: (service) => {
        set((state) => {
          return {
            selectedSpectraTeamIds: [
              ...state.selectedSpectraTeamIds,
              service.id,
            ],
            spectraTeam: [...state.spectraTeam, service],
          };
        });
      },

      removeService: (serviceId, category) => {
        if (!serviceId || !category) return;

        set((state) => {
          if (category === 'freelancer') {
            const freelancer = state.freelancer;
            const selectedFreelanceIds = state.selectedFreelanceIds;

            const updatedFreelancer = freelancer.filter(
              (s) => s.id !== serviceId
            );

            const updatedSelectedFreelanceIds =
              selectedFreelanceIds.filter((s) => s !== serviceId);

            return {
              freelancer: updatedFreelancer,
              selectedFreelanceIds: updatedSelectedFreelanceIds,
            };
          } else {
            const spectraTeam = state.spectraTeam;
            const selectedSpectraTeamIds =
              state.selectedSpectraTeamIds;

            const updatedSpectraTeam = spectraTeam.filter(
              (s) => s.id !== serviceId
            );

            const updatedSelectedSpectraTeamIds =
              selectedSpectraTeamIds.filter((s) => s !== serviceId);

            return {
              spectraTeam: updatedSpectraTeam,
              selectedSpectraTeamIds: updatedSelectedSpectraTeamIds,
            };
          }
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

export const useContractStore = (selector) => {
  const store = useContext(ContractContext);
  if (store === undefined) {
    throw new Error(
      'useContractStore must be used within a ContractProvider'
    );
  }
  return useStore(store, selector);
};

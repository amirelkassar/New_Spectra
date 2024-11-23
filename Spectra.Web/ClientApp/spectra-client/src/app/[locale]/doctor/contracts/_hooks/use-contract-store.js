'use client';

import { createContext, useContext, useState } from 'react';
import { createStore, useStore } from 'zustand';

const ContractContext = createContext(undefined);

export const ContractProvider = ({
  children,
  initialState = {
    allServices: [],
    freelancer: [],
    spectraTeam: [],
    workDays: {
      hoursPerDay: '',
      daysPerWeek: '',
    },
  },
}) => {
  const [store] = useState(() =>
    createStore((set, get) => ({
      allServices: initialState?.allServices || [],

      freelancer: initialState?.freelancer || [],

      spectraTeam: initialState?.spectraTeam || [],

      selectedFreelanceIds:
        initialState?.freelancer?.map(
          (service) => service.id
        ) || [],

      selectedSpectraTeamIds:
        initialState?.spectraTeam?.map(
          (service) => service.id
        ) || [],

      workDays: initialState?.workDays || {
        hoursPerDay: '',
        daysPerWeek: '',
      },

      isChatOpen: false,

      openChat: () => set(() => ({ isChatOpen: true })),

      closeChat: () => set(() => ({ isChatOpen: false })),

      toggleChat: () =>
        set((state) => ({ isChatOpen: !state.isChatOpen })),

      setWorkDays: (workDays) => set(() => ({ workDays })),

      setSelectedFreelanceIds: (serviceId) => {
        const service = get().allServices.find(
          (service) => service.id === serviceId
        );

        if (!service) return;

        set((state) => {
          return {
            selectedFreelanceIds: [
              ...state.selectedFreelanceIds,
              serviceId,
            ],
            freelancer: [...state.freelancer, service],
          };
        });
      },

      setSelectedSpectraTeamIds: (serviceId) => {
        const service = get().allServices.find(
          (service) => service.id === serviceId
        );

        if (!service) return;

        set((state) => {
          return {
            selectedSpectraTeamIds: [
              ...state.selectedSpectraTeamIds,
              serviceId,
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
            const selectedFreelanceIds =
              state.selectedFreelanceIds;

            const updatedFreelancer = freelancer.filter(
              (s) => s.id !== serviceId
            );

            const updatedSelectedFreelanceIds =
              selectedFreelanceIds.filter(
                (s) => s !== serviceId
              );

            return {
              freelancer: updatedFreelancer,
              selectedFreelanceIds:
                updatedSelectedFreelanceIds,
            };
          } else {
            const spectraTeam = state.spectraTeam;
            const selectedSpectraTeamIds =
              state.selectedSpectraTeamIds;

            const updatedSpectraTeam = spectraTeam.filter(
              (s) => s.id !== serviceId
            );

            const updatedSelectedSpectraTeamIds =
              selectedSpectraTeamIds.filter(
                (s) => s !== serviceId
              );

            return {
              spectraTeam: updatedSpectraTeam,
              selectedSpectraTeamIds:
                updatedSelectedSpectraTeamIds,
            };
          }
        });
      },

      setFreelancerPrice: (newPrice, serviceId) => {
        if (!serviceId) return;

        set((state) => {
          const freelancer = state.freelancer;

          const updatedFreelancer = freelancer.map((s) => {
            if (s.id === serviceId) {
              return {
                ...s,
                price: newPrice,
              };
            }

            return s;
          });

          return {
            freelancer: updatedFreelancer,
          };
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

'use client';

import { CONTRACT_RATES } from '@/data';
import { createContext, useContext, useState } from 'react';
import { createStore, useStore } from 'zustand';

const ContractContext = createContext(undefined);

export const ContractProvider = ({
  children,
  initialState = {
    hoursOfWork: '',
    daysOfWork: '',
    freelancingServices: [],
    spectraTeamServices: [],
  },
}) => {
  const [store] = useState(() =>
    createStore((set) => ({
      freelancingServices: initialState?.freelancingServices || [],

      spectraTeamServices: initialState?.spectraTeamServices || [],

      freelancePercentage: String(
        initialState?.freelancingServices[0]?.employeePercentage || ''
      ),

      spectraTeamPercentage: String(
        initialState?.spectraTeamServices[0]?.employeePercentage || ''
      ),

      selectedFreelanceIds:
        initialState?.freelancingServices?.map(
          (service) => service.serviceId
        ) || [],

      selectedSpectraTeamIds:
        initialState?.spectraTeamServices?.map(
          (service) => service.serviceId
        ) || [],

      hoursOfWork: String(initialState?.hoursOfWork) || '',

      daysOfWork: String(initialState?.daysOfWork) || '',

      isChatOpen: false,

      openChat: () => set(() => ({ isChatOpen: true })),

      closeChat: () => set(() => ({ isChatOpen: false })),

      toggleChat: () =>
        set((state) => ({ isChatOpen: !state.isChatOpen })),

      setHoursOfWork: (hoursOfWork) => set(() => ({ hoursOfWork })),

      setDaysOfWork: (daysOfWork) => set(() => ({ daysOfWork })),

      setFreelancePercentage: (value) => {
        let percentage = +value;

        if (percentage > 70) percentage = 70;
        if (percentage < 0) percentage = 0;

        set((state) => {
          const employeePercentage = percentage;
          const platformPercentage = 100 - employeePercentage;
          const updatedFreelance = state.freelancingServices.map(
            (service) => ({
              ...service,
              employeePercentage,
              platformPercentage,
              employeeFees: Math.round(
                (service.serviceFees * employeePercentage) / 100
              ),
              platformFees: Math.round(
                (service.serviceFees * platformPercentage) / 100
              ),
            })
          );

          return {
            freelancePercentage: percentage,
            freelancingServices: updatedFreelance,
          };
        });
      },

      setSpectraTeamPercentage: (value) => {
        let percentage = +value;

        if (percentage > 60) percentage = 60;
        if (percentage < 0) percentage = 0;

        set((state) => {
          const employeePercentage = percentage;
          const platformPercentage = 100 - employeePercentage;
          const updatedSpectraTeam = state.spectraTeamServices.map(
            (service) => ({
              ...service,
              employeePercentage,
              platformPercentage,
              employeeFees: Math.round(
                (service.serviceFees * employeePercentage) / 100
              ),
              platformFees: Math.round(
                (service.serviceFees * platformPercentage) / 100
              ),
            })
          );
          return {
            spectraTeamPercentage: percentage,
            spectraTeamServices: updatedSpectraTeam,
          };
        });
      },
      setSelectedFreelance: (service) => {
        set((state) => {
          const employeePercentage = +state.freelancePercentage;
          const platformPercentage = 100 - employeePercentage;
          const employeeFees = Math.round(
            (service?.price ||
              service?.serviceFees * employeePercentage) / 100
          );
          const platformFees = Math.round(
            (service?.price ||
              service?.serviceFees * platformPercentage) / 100
          );

          const newService = {
            serviceId: service?.id || service?.serviceId,
            arName: service?.arName,
            enName: service?.enName,
            arTerms:
              service?.arTermsAndConditions || service?.arTerms,
            enTerms:
              service?.enTermsAndConditions || service?.enTerms,
            serviceFees: service?.price || service?.serviceFees,
            duration:
              service?.duration || CONTRACT_RATES.freelancer.duration,
            employeePercentage,
            platformPercentage,
            employeeFees,
            platformFees,
          };
          return {
            selectedFreelanceIds: [
              ...state.selectedFreelanceIds,
              service.id,
            ],
            freelancingServices: [
              ...state.freelancingServices,
              newService,
            ],
          };
        });
      },

      setSelectedSpectraTeam: (service) => {
        set((state) => {
          const employeePercentage = +state.spectraTeamPercentage;
          const platformPercentage = 100 - employeePercentage;
          const employeeFees = Math.round(
            (service?.price ||
              service?.serviceFees * employeePercentage) / 100
          );
          const platformFees = Math.round(
            (service?.price ||
              service?.serviceFees * platformPercentage) / 100
          );

          const newService = {
            serviceId: service?.id || service?.serviceId,
            arName: service?.arName,
            enName: service?.enName,
            arTerms:
              service?.arTermsAndConditions || service?.arTerms,
            enTerms:
              service?.enTermsAndConditions || service?.enTerms,
            serviceFees: service?.price || service?.serviceFees,
            duration:
              service?.duration ||
              CONTRACT_RATES.spectraTeam.duration,
            employeePercentage,
            platformPercentage,
            employeeFees,
            platformFees,
          };

          return {
            selectedSpectraTeamIds: [
              ...state.selectedSpectraTeamIds,
              service.id,
            ],
            spectraTeamServices: [
              ...state.spectraTeamServices,
              newService,
            ],
          };
        });
      },

      removeService: (removedId, category) => {
        if (!removedId || !category) return;

        set((state) => {
          if (category === 'freelancer') {
            const freelancer = state.freelancingServices;
            const selectedFreelanceIds = state.selectedFreelanceIds;

            const updatedFreelancer = freelancer.filter(
              (s) => s.serviceId !== removedId
            );

            const updatedSelectedFreelanceIds =
              selectedFreelanceIds.filter((id) => id !== removedId);

            return {
              freelancingServices: updatedFreelancer,
              selectedFreelanceIds: updatedSelectedFreelanceIds,
            };
          } else {
            const spectraTeam = state.spectraTeamServices;
            const selectedSpectraTeamIds =
              state.selectedSpectraTeamIds;

            const updatedSpectraTeam = spectraTeam.filter(
              (s) => s.serviceId !== removedId
            );

            const updatedSelectedSpectraTeamIds =
              selectedSpectraTeamIds.filter((id) => id !== removedId);

            return {
              spectraTeamServices: updatedSpectraTeam,
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

// {
//   "hoursOfWork": 5,
//   "daysOfWork": 4,
//   "freelancingServices": [
//     {
//       "serviceId": "01JEX8NKKX5GCAQ3C5R0Q2N5DC",
//       "platformPercentage": 30,
//       "employeePercentage": 70,
//       "serviceFees": 400,
//       "employeeFees": 280,
//       "platformFees": 120,
//       "duration": 15
//     }
//   ],
//   "spectraTeamServices": [
//     {
//       "serviceId": "01JEX8NKKX5GCAQ3C5R0Q2N5DC",
//       "platformPercentage": 40,
//       "employeePercentage": 60,
//       "serviceFees": 400,
//       "employeeFees": 240,
//       "platformFees": 160,
//       "duration": 30
//     }
//   ]
// }

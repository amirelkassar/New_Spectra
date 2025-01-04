'use client';

import { CONTRACT_RATES } from '@/data';
import { createContext, useContext, useState } from 'react';
import { createStore, useStore } from 'zustand';

const ContractContext = createContext(undefined);

export const ContractProvider = ({
  children,
  role = '',
  initialState = {
    hoursOfWork: '',
    daysOfWork: '',
    freelancingPercentage: '',
    spectraTeamPercentage: '',
    freelancingDuration: '',
    spectraTeamDuration: '',
    freelancingServices: [],
    spectraTeamServices: [],
  },
}) => {
  const [store] = useState(() =>
    createStore((set) => ({
      hoursOfWork: initialState?.hoursOfWork || '',

      daysOfWork: initialState?.daysOfWork || '',

      freelancePercentage: initialState?.freelancingPercentage || '',

      spectraTeamPercentage:
        initialState?.spectraTeamPercentage || '',

      freelancingDuration:
        initialState?.freelancingDuration ||
        CONTRACT_RATES.freelancer.duration,

      spectraTeamDuration:
        initialState?.spectraTeamDuration ||
        CONTRACT_RATES.spectraTeam.duration,

      freelancingServices: initialState?.freelancingServices || [],

      spectraTeamServices: initialState?.spectraTeamServices || [],

      freelancingServicesIds:
        initialState?.freelancingServices?.map((s) => s?.serviceId) ||
        [],

      spectraTeamServicesIds:
        initialState?.spectraTeamServices?.map((s) => s?.serviceId) ||
        [],

      setHoursOfWork: (hoursOfWork) =>
        set(() => {
          // the houres of work must be a number between 1 and 16
          let hours = +hoursOfWork;

          if (hours > 16) hours = '';
          if (hours < 1) hours = '';

          return { hoursOfWork: String(hours) };
        }),

      setDaysOfWork: (daysOfWork) =>
        set(() => {
          // the days of work must be a number between 1 and 7
          let days = +daysOfWork;

          if (days > 7) days = '';
          if (days < 1) days = '';

          return { daysOfWork: String(days) };
        }),

      setFreelancePercentage: (value) =>
        set(() => {
          // the percentage must be a number between 1 and 70
          let percentage = +value;

          if (percentage > 70 && role !== 'admin') percentage = '';
          if (percentage > 100 && role === 'admin') percentage = '';
          if (percentage < 1) percentage = '';

          return { freelancePercentage: String(percentage) };
        }),

      setSpectraTeamPercentage: (value) =>
        set(() => {
          // the percentage must be a number between 1 and 40
          let percentage = +value;

          if (percentage > 40 && role !== 'admin') percentage = '';
          if (percentage > 100 && role === 'admin') percentage = '';
          if (percentage < 1) percentage = '';

          return { spectraTeamPercentage: String(percentage) };
        }),

      setSelectedFreelance: (service) =>
        set((state) => {
          const newService = {
            serviceId: service?.id,
            arName: service?.arName,
            enName: service?.enName,
            arTerms: service?.arTermsAndConditions,
            enTerms: service?.enTermsAndConditions,
            serviceFees: service?.price,
          };

          return {
            freelancingServices: [
              ...state.freelancingServices,
              newService,
            ],
            freelancingServicesIds: [
              ...state.freelancingServicesIds,
              service?.id,
            ],
          };
        }),

      setSelectedSpectraTeam: (service) =>
        set((state) => {
          const newService = {
            serviceId: service?.id,
            arName: service?.arName,
            enName: service?.enName,
            arTerms: service?.arTermsAndConditions,
            enTerms: service?.enTermsAndConditions,
            serviceFees: service?.price,
          };

          return {
            spectraTeamServices: [
              ...state.spectraTeamServices,
              newService,
            ],
            spectraTeamServicesIds: [
              ...state.spectraTeamServicesIds,
              service?.id,
            ],
          };
        }),

      removeService: (removedId, category) => {
        if (!removedId || !category) return;

        set((state) => {
          if (category === 'freelancer') {
            const freelancer = state.freelancingServices;
            const freelancerIds = state.freelancingServicesIds;

            const updatedFreelancer = freelancer.filter(
              (s) => s.serviceId !== removedId
            );

            const updatedFreelancerIds = freelancerIds.filter(
              (id) => id !== removedId
            );

            return {
              freelancingServices: updatedFreelancer,
              freelancingServicesIds: updatedFreelancerIds,
            };
          } else {
            const spectraTeam = state.spectraTeamServices;
            const spectraTeamIds = state.spectraTeamServicesIds;

            const updatedSpectraTeam = spectraTeam.filter(
              (s) => s.serviceId !== removedId
            );

            const updatedSpectraTeamIds = spectraTeamIds.filter(
              (id) => id !== removedId
            );

            return {
              spectraTeamServices: updatedSpectraTeam,
              spectraTeamServicesIds: updatedSpectraTeamIds,
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

export function getContractFormInitialState(activeContract) {
  return {
    daysOfWork: activeContract?.daysOfWork || '',
    hoursOfWork: activeContract?.hoursOfWork || '',
    freelancingPercentage:
      activeContract?.freelancingPercentage || '',
    spectraTeamPercentage:
      activeContract?.spectraTeamPercentage || '',
    freelancingDuration: activeContract?.freelancingDuration || '',
    spectraTeamDuration: activeContract?.spectraTeamDuration || '',
    freelancingServices: activeContract?.freelancingServices || [],
    spectraTeamServices: activeContract?.spectraTeamServices || [],
  };
}

'use client';

import { useRouter } from '@/i18n/routing';

import { Toast } from '@/components/toast';
import { useAddEmployeeContract } from '@/hooks/queries/employee/contract';
import { useContractStore } from './use-contract-store';

import { CONTRACT_RATES } from '../contract';
import ROUTES from '@/routes';

export const useNewContract = () => {
  const router = useRouter();

  const freelance = useContractStore((s) => s.freelancer) || [];
  const spectraTeam = useContractStore((s) => s.spectraTeam) || [];
  const freelancePercentage =
    useContractStore((s) => s.freelanceEmployeePercentage) || '';
  const { hoursPerDay, daysPerWeek } = useContractStore(
    (s) => s.workDays
  );

  const { mutateAsync: sendContract, isPending } =
    useAddEmployeeContract();

  const disabled =
    (!freelance.length && !spectraTeam.length) ||
    !freelancePercentage ||
    !hoursPerDay ||
    !daysPerWeek;

  const onSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (disabled) return;

    const data = {
      hoursOfWork: hoursPerDay,
      daysOfWork: daysPerWeek,
      freelancingServices: freelance.map((service) => ({
        serviceId: service?.id,
        platformPercentage: 100 - freelancePercentage,
        employeePercentage: +freelancePercentage,
        serviceFees: service?.price,
        employeeFees: (service?.price * freelancePercentage) / 100,
        platformFees:
          (service?.price * (100 - freelancePercentage)) / 100,
        duration: CONTRACT_RATES.freelancer.duration,
      })),
      spectraTeamServices: spectraTeam.map((service) => ({
        serviceId: service?.id,
        platformPercentage:
          CONTRACT_RATES.spectraTeam.platformPercentage,
        employeePercentage:
          CONTRACT_RATES.spectraTeam.employeePercentage,
        serviceFees: service?.price,
        employeeFees:
          (service?.price *
            CONTRACT_RATES.spectraTeam.employeePercentage) /
          100,
        platformFees:
          (service?.price *
            CONTRACT_RATES.spectraTeam.platformPercentage) /
          100,
        duration: CONTRACT_RATES.spectraTeam.duration,
      })),
    };

    Toast.Promise(sendContract(data), {
      success: 'Contract sent successfully',
      onSuccess: () =>
        router.replace(ROUTES.DOCTOR.CONTRACTS.DASHBOARD),
    });
  };

  return { disabled, onSubmit, isPending };
};

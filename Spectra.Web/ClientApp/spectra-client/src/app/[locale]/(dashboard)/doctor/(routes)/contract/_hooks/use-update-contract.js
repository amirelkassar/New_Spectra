'use client';

import { useRouter } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import { useQueryClient } from '@tanstack/react-query';

import { Toast } from '@/components/toast';
import {
  initialQueryKey,
  useUpateEmployeeContract,
} from '@/hooks/queries/employee/contract';
import { useContractStore } from '@/dashboard/_hooks/use-contract-store';
import ROUTES from '@/routes';

export const useUpdateContract = (id) => {
  const locale = useLocale();

  const queryClient = useQueryClient();

  const router = useRouter();

  const hoursOfWork = +useContractStore((s) => s.hoursOfWork);
  const daysOfWork = +useContractStore((s) => s.daysOfWork);
  const freelancingPercentage = +useContractStore(
    (s) => s.freelancePercentage
  );
  const spectraTeamPercentage = +useContractStore(
    (s) => s.spectraTeamPercentage
  );
  const freelancingDuration = +useContractStore(
    (s) => s.freelancingDuration
  );
  const spectraTeamDuration = +useContractStore(
    (s) => s.spectraTeamDuration
  );
  const freelancingServices =
    useContractStore((s) => s.freelancingServicesIds) || [];
  const spectraTeamServices =
    useContractStore((s) => s.spectraTeamServicesIds) || [];

  const { mutateAsync: updateContract, isPending } =
    useUpateEmployeeContract();

  const disabled =
    (!freelancingServices.length && !spectraTeamServices.length) ||
    !hoursOfWork ||
    !daysOfWork ||
    !freelancingPercentage ||
    !spectraTeamPercentage ||
    !freelancingDuration ||
    !spectraTeamDuration;

  const onSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (disabled) return;

    const data = {
      id,
      hoursOfWork,
      daysOfWork,
      freelancingPercentage,
      spectraTeamPercentage,
      freelancingDuration,
      spectraTeamDuration,
      freelancingServices,
      spectraTeamServices,
    };

    Toast.Promise(updateContract(data), {
      success:
        locale === 'en'
          ? 'Contract updated successfully'
          : 'تم تعديل العقد بنجاح',
      onSuccess: () => {
        router.replace(ROUTES.DOCTOR.CONTRACT.DASHBOARD);
        queryClient.refetchQueries({
          queryKey: [initialQueryKey],
        });
      },
    });
  };

  return { disabled, onSubmit, isPending };
};

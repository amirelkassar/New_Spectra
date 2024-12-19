'use client';

import { useRouter } from '@/i18n/routing';
import { useLocale } from 'next-intl';

import { Toast } from '@/components/toast';
import { useAddEmployeeContract } from '@/hooks/queries/employee/contract';
import { useContractStore } from '@/dashboard/_hooks/use-contract-store';

import ROUTES from '@/routes';

export const useNewContract = () => {
  const locale = useLocale();

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

  const { mutateAsync: sendContract, isPending } =
    useAddEmployeeContract();

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
      hoursOfWork,
      daysOfWork,
      freelancingPercentage,
      spectraTeamPercentage,
      freelancingDuration,
      spectraTeamDuration,
      freelancingServices,
      spectraTeamServices,
    };

    Toast.Promise(sendContract(data), {
      success:
        locale === 'en'
          ? 'Contract sent successfully'
          : 'تم إرسال العقد بنجاح',
      onSuccess: () =>
        router.replace(ROUTES.DOCTOR.CONTRACTS.DASHBOARD),
    });
  };

  return { disabled, onSubmit, isPending };
};

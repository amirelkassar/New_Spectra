'use client';

import { useUserServices } from '@/hooks/queries/user/services';
import { ServicesSelect } from '../../_components/ui';
import { useContractStore } from '../../_hooks';

export const ChooseServices = () => {
  const { data, isLoading, isError } = useUserServices({
    pageNum: 'all',
    serviceType: 1,
  });

  const selectedFreelanceIds = useContractStore(
    (s) => s.selectedFreelanceIds
  );

  const selectedSpectraTeamIds = useContractStore(
    (s) => s.selectedSpectraTeamIds
  );

  const setSelectedFreelanceIds = useContractStore(
    (s) => s.setSelectedFreelanceIds
  );

  const setSelectedSpectraTeamIds = useContractStore(
    (s) => s.setSelectedSpectraTeamIds
  );

  return (
    <ServicesSelect
      data={data?.data?.items}
      isLoading={isLoading}
      isError={isError}
      isDataEmpty={!data?.data?.totalCount}
      selectedFreelance={selectedFreelanceIds}
      selectedSpectra={selectedSpectraTeamIds}
      onFreelanceSelect={setSelectedFreelanceIds}
      onSpectraSelect={setSelectedSpectraTeamIds}
    />
  );
};

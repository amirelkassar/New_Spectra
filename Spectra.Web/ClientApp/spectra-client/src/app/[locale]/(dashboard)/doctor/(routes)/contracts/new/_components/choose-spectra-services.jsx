'use client';

import { useUserServices } from '@/hooks/queries/user/services';
import { ServicesSelect } from '../../_components/ui';
import { useContractStore } from '../../_hooks';

export const ChooseSpectraServices = () => {
  const { data, isPending, isError } = useUserServices({
    pageNum: 'all',
    serviceType: 1,
    spectraTeamOnly: 'true',
  });

  const selectedSpectraTeamIds = useContractStore(
    (s) => s.selectedSpectraTeamIds
  );

  const setSelectedSpectraTeam = useContractStore(
    (s) => s.setSelectedSpectraTeam
  );

  const removeService = useContractStore((s) => s.removeService);

  return (
    <ServicesSelect
      data={data?.data?.items}
      isLoading={isPending}
      isError={isError}
      isDataEmpty={!data?.data?.totalCount}
      selectedIds={selectedSpectraTeamIds}
      onSelect={setSelectedSpectraTeam}
      onRemove={(id) => removeService(id, 'spectraTeam')}
      placeholder='Select Spectra Team Services'
    />
  );
};

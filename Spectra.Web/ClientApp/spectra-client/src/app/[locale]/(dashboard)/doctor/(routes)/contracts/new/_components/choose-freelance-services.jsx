'use client';

import { useUserServices } from '@/hooks/queries/user/services';
import { ServicesSelect } from '../../_components/ui';
import { useContractStore } from '../../_hooks';

export const ChooseFreelanceServices = () => {
  const { data, isPending, isError } = useUserServices({
    pageNum: 'all',
    serviceType: 1,
    freeLancerOnly: 'true',
  });

  const selectedFreelanceIds = useContractStore(
    (s) => s.selectedFreelanceIds
  );

  const setSelectedFreelance = useContractStore(
    (s) => s.setSelectedFreelance
  );

  const removeService = useContractStore((s) => s.removeService);

  return (
    <ServicesSelect
      data={data?.data?.items}
      isLoading={isPending}
      isError={isError}
      isDataEmpty={!data?.data?.totalCount}
      selectedIds={selectedFreelanceIds}
      onSelect={setSelectedFreelance}
      onRemove={(id) => removeService(id, 'freelancer')}
      placeholder='Select freelance services'
    />
  );
};

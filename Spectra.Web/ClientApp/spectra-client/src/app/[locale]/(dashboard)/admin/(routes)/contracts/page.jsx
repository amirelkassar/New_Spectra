import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { prefetchAdminContracts } from '@/hooks/queries/admin/contract';
import { ContractsTable } from './_components/contracts-table';

const ContractsPage = async () => {
  const qc = await prefetchAdminContracts();

  return (
    <HydrationBoundary state={dehydrate(qc)}>
      <ContractsTable />
    </HydrationBoundary>
  );
};

export default ContractsPage;

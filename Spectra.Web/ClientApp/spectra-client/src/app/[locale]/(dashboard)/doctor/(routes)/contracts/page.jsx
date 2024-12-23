import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { ContractsTable } from './_components/contracts-table';
import { prefetchEmployeeHeadContracts } from '@/hooks/queries/employee-head/contract';

const ContractsPage = async () => {
  const qc = await prefetchEmployeeHeadContracts();

  return (
    <HydrationBoundary state={dehydrate(qc)}>
      <ContractsTable />
    </HydrationBoundary>
  );
};

export default ContractsPage;

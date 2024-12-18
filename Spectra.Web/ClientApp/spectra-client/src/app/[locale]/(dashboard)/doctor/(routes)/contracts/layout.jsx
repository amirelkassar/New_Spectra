import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { prefetchEmployeeContract } from '@/hooks/queries/employee/contract';
import { ContractLayout } from './_components/contract-layout';

export const contractState = {
  0: 'Canceled',
  1: 'Contracting',
  2: 'Accepted',
};

const Layout = async ({ children }) => {
  const queryClient = await prefetchEmployeeContract();
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ContractLayout>{children}</ContractLayout>
    </HydrationBoundary>
  );
};

export default Layout;

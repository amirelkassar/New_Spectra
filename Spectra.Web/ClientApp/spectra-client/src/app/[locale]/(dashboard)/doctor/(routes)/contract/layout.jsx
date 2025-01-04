import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { prefetchEmployeeContract } from '@/hooks/queries/employee/contract';
import { ContractLayout } from './_components/contract-layout';
import { ChatHub } from '@/components/chat-hub';

const Layout = async ({ children }) => {
  const queryClient = await prefetchEmployeeContract();
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ContractLayout>{children}</ContractLayout>
      <ChatHub />
    </HydrationBoundary>
  );
};

export default Layout;

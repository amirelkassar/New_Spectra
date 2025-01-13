import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { MyAccounts } from '../_components/my-accounts';
import { prefetchUserAccountList } from '@/hooks/queries/user/billing-management';

const AccountsSlot = async () => {
  const queryClient = await prefetchUserAccountList();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MyAccounts />
    </HydrationBoundary>
  );
};

export default AccountsSlot;

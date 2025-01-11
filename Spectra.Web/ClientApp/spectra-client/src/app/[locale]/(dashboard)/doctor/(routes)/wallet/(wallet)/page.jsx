import { prefetchUserWallet } from '@/hooks/queries/user/billing-management';
import { MyWallet } from '../_components/my-wallet';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

const WalletSlot = async () => {
  const queryClient = await prefetchUserWallet();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MyWallet />
    </HydrationBoundary>
  );
};

export default WalletSlot;

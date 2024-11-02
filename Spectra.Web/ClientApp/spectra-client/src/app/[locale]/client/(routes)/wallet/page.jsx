import { Divider } from '@mantine/core';

import { MyAccounts } from './_components/my-accounts';
import { MyCards } from './_components/my-cards';
import { AllTransactions } from './_components/all-transactions';
import { H1, Container } from '@/client/_components/ui';
import { Wallet } from '@/client/_components/payments';

const WalletPage = () => {
  return (
    <Container className='space-y-5'>
      <H1>محفظة سبيكترا</H1>

      <Wallet />

      <div className='lg:flex lg:flex-wrap w-full lg:gap-5 space-y-5 lg:space-y-0 lg:*:flex-1'>
        <div className='space-y-5 h-auto'>
          <MyAccounts />
          <MyCards />
        </div>

        <Divider my='sm' className='lg:hidden' />

        <AllTransactions className='h-auto' />
      </div>
    </Container>
  );
};

export default WalletPage;

import { Divider } from '@mantine/core';

import { MyAccounts } from './_components/my-accounts';
import { MyCards } from './_components/my-cards';
import { AllTransactions } from './_components/all-transactions';
import { Container } from '@/app/[locale]/(dashboard)/client/_components/ui';
import { MyWallet } from './_components/my-wallet';

const WalletPage = () => {
  return (
    <Container>
      <MyWallet />

      <div className='lg:flex lg:flex-wrap w-full lg:gap-5 space-y-5 lg:space-y-0 lg:*:flex-1'>
        <div>
          <MyAccounts />
          <MyCards />
        </div>

        <Divider my='sm' className='lg:hidden' />

        <AllTransactions />
      </div>
    </Container>
  );
};

export default WalletPage;

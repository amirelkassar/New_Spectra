import { Divider } from '@mantine/core';

import Container from '../../_components/container';
import { Heading } from '../../_components/heading';
import { MyAccounts } from './_components/my-accounts';
import { MyCards } from './_components/my-cards';
import { AllTransactions } from './_components/all-transactions';

const WalletPage = () => {
  return (
    <Container>
      <Heading label='المحفظة' />

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

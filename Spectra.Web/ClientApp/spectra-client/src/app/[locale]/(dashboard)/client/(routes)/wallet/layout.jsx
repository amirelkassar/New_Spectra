import { Divider } from '@mantine/core';
import { useTranslations } from 'next-intl';

import { Container, H1 } from '@/client/_components/ui';

const WalletLayout = ({
  children,
  accounts,
  // cards,
  transactions,
}) => {
  const tg = useTranslations('general_obj');

  return (
    <Container className='flex flex-col'>
      <H1 id='wallet' className='mb-5 capitalize'>
        {tg('my_wallet')}
      </H1>

      {/* WALLET */}
      {children}

      <div className='lg:flex lg:flex-wrap w-full lg:gap-5 space-y-5 lg:space-y-0 lg:*:flex-1'>
        <div>
          {accounts}
          {/* {cards} */}
        </div>

        <Divider my='sm' className='lg:hidden' />

        {transactions}
      </div>
    </Container>
  );
};

export default WalletLayout;

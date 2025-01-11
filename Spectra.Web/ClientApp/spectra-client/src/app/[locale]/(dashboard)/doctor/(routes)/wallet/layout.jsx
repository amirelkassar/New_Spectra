import { Divider } from '@mantine/core';

const WalletLayout = ({
  children,
  accounts,
  // cards,
  transactions,
}) => {
  return (
    <div>
      {children}

      <div className='lg:flex lg:flex-wrap w-full lg:gap-5 space-y-5 lg:space-y-0 lg:*:flex-1'>
        <div>
          {accounts}
          {/* {cards} */}
        </div>

        <Divider my='sm' className='lg:hidden' />

        {transactions}
      </div>
    </div>
  );
};

export default WalletLayout;

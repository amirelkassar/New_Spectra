'use client';

import { Wallet } from '@/dashboard/_components/payments';
import { Section } from '@/client/_components/ui';
import { useUserWallet } from '@/hooks/queries/user/billing-management';
import { QueryWrapper } from '@/components/query-wrapper';

export const MyWallet = () => {
  const query = useUserWallet();

  return (
    <Section className='mdl:pt-0' id='wallet'>
      <QueryWrapper query={query}>
        {({ data }) => (
          <Wallet
            data={{
              balance: data?.currentBalance || 0,
              used: data?.usedBalance || 0,
              deposits: data?.deposits || 0,
              transfers: data?.transfers || 0,
            }}
          />
        )}
      </QueryWrapper>
    </Section>
  );
};

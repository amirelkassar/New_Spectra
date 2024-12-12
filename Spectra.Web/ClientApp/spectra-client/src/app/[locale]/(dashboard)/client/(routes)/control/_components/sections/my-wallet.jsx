import {
  Section,
  SectionTitle,
} from '@/app/[locale]/(dashboard)/client/_components/ui';
import { Wallet } from '@/app/[locale]/(dashboard)/client/_components/payments';

export const MyWallet = () => {
  return (
    <Section id='my-wallet'>
      <SectionTitle id='my-wallet' className='mb-5'>
        رصيدي
      </SectionTitle>

      <Wallet />
    </Section>
  );
};

import { Wallet } from '@/app/[locale]/(dashboard)/client/_components/payments';
import {
  H1,
  Section,
} from '@/app/[locale]/(dashboard)/client/_components/ui';

export const MyWallet = () => {
  return (
    <Section className='mdl:pt-0' id='wallet'>
      <H1 id='wallet' className='mb-5'>
        محفظة سبيكترا
      </H1>

      <Wallet />
    </Section>
  );
};

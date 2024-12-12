import Card from '@/components/card';
import { BankAccount } from './bank-account';
import { Section } from '@/app/[locale]/(dashboard)/client/_components/ui';

const myAcconutData = [
  {
    bankName: 'بنك الراجحي',
    accountHolder: 'احمد محمد عبدالله',
    bankLogo: '',
    isVerified: true,
  },
  {
    bankName: 'بنك المشرق',
    accountHolder: 'احمد علي محمد',
    bankLogo: '',
    isVerified: false,
  },
];

export const MyAccounts = () => {
  return (
    <Section id='my-accounts'>
      <Card
        titleId='my-accounts'
        title='حساباتي البنكية'
        className='space-y-5'
      >
        <div className='space-y-3'>
          {myAcconutData.map((a) => (
            <BankAccount key={a.accountHolder} {...a} />
          ))}
        </div>
      </Card>
    </Section>
  );
};

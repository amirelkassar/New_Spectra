import Card from '@/components/card';
import { BankAccount } from './bank-account';

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
    <section className='text-black'>
      <Card className='space-y-5'>
        <h2 className='font-bold text-sm lg:text-medium'>
          حساباتي البنكية
        </h2>

        <div className='space-y-3'>
          {myAcconutData.map((a) => (
            <BankAccount key={a.accountHolder} {...a} />
          ))}
        </div>
      </Card>
    </section>
  );
};

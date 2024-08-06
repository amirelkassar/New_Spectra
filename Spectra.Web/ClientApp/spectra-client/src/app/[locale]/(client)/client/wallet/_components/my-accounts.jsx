import Card from '@/components/card';
import DeleteIcon from '@/assets/icons/delete';
import Avatar from '@/components/avatar';

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

const BankAccount = ({
  bankName = '',
  accountHolder = '',
  bankLogo = '',
}) => {
  return (
    <div className='flex items-center gap-3 border-2 border-grayLight py-3 px-5 w-full'>
      <div className='flex-1 flex items-center gap-3'>
        <Avatar
          name={bankName}
          src={bankLogo}
          className='size-11 lg:size-14 rounded-full'
        />

        <div>
          <h3 className='font-bold text-xs lg:text-base text-[#1D3A70]'>
            {bankName}
          </h3>
          <p className='text-xs lg:text-base text-[#6B7280]'>
            {accountHolder}
          </p>
        </div>
      </div>

      <button>
        <DeleteIcon />
      </button>
    </div>
  );
};

import Card from '@/components/card';
import PaymentReceived from '@/assets/icons/payment-received';
import { cn } from '@/lib/utils';

export const AllTransactions = ({ className = '' }) => {
  return (
    <section className={cn('text-black', className)}>
      <Card className='space-y-5 h-full'>
        <h2 className='font-bold text-sm lg:text-medium'>
          جميع التحويلات
        </h2>
        <span className='bg-greenMain rounded-lg py-1 px-3 text-sm lg:text-medium font-bold text-white w-full max-w-24 flex items-center justify-center'>
          اليوم
        </span>

        <div className='max-h-[70vh] overflow-y-auto'>
          <Transaction />
          <Transaction />
          <Transaction />
          <Transaction />
          <Transaction />
          <Transaction />
          <Transaction />
          <Transaction />
          <Transaction />
        </div>
      </Card>
    </section>
  );
};

const Transaction = ({
  senderName = 'عبدالله الشيخ',
  date = '12/12/2022',
  timeFrom = '2 د',
  amount = '200 ريال',
  type = 'تحويل',
}) => {
  return (
    <div className='flex gap-5 p-3 border-b-2 border-grayLight last:border-transparent !text-xs lg:!text-base'>
      <div className='w-fit my-auto'>
        <PaymentReceived />
      </div>
      <div className='flex-1 min-w-60'>
        <h4 className='font-bold text-grayDark'>
          {type} {amount}
        </h4>
        <p>لقد تم تحويل مبلغ {amount} من</p>
        <h5 className='font-bold'>{senderName}</h5>
      </div>
      <div className='text-xs text-end'>
        <span>{timeFrom}</span>
        <span className='text-grayDark block'>{date}</span>
      </div>
    </div>
  );
};

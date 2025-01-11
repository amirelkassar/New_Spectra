import PaymentReceived from '@/assets/icons/payment-received';

export const Transaction = ({
  senderName = 'عبدالله الشيخ',
  date = '12/12/2022',
  timeFrom = '2 د',
  amount = '200 ريال',
  type = 'تحويل',
}) => {
  return (
    <div className='flex gap-5 p-3 border-b-2 border-grayLight last:border-transparent !text-xs mdl:!text-base'>
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

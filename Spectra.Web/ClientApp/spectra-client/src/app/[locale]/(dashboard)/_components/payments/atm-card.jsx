import ATMCardBG from '@/assets/icons/atm-card-bg';
import MasterCard from '@/assets/icons/master-card';

export const ATMCard = ({
  cardHolder = 'احمد عبدالله',
  cardNumber = '**** **** **** 1234',
  expiryDate = '4/28',
  cardLogo = <MasterCard />,
}) => {
  return (
    <div
      dir='rtl'
      className='w-80 h-48 bg-greenMain rounded-2xl overflow-hidden !font-bold !text-white flex'
    >
      <div>
        <ATMCardBG />
        <ATMCardBG />
      </div>
      <div
        dir='ltr'
        className='p-5 flex flex-1 flex-col justify-between'
      >
        {cardLogo}
        <div className='w-full'>
          <span className='block text-sm'>{cardNumber}</span>
          <span className='text-xs'>{expiryDate}</span>
        </div>
        <p className='text-sm'>{cardHolder}</p>
      </div>
    </div>
  );
};

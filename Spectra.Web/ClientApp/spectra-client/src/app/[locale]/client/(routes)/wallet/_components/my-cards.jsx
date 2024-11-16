import Card from '@/components/card';
import ATMCardBG from '@/assets/icons/atm-card-bg';
import MasterCard from '@/assets/icons/master-card';
import { AddButton } from '@/components/buttons/add-button';
import {
  Section,
  SectionTitle,
} from '@/client/_components/ui';
export const MyCards = () => {
  return (
    <Section id='my-cards'>
      <Card className='space-y-5'>
        <div className='flex gap-5 items-center'>
          <SectionTitle id='my-cards'>بطاقاتي</SectionTitle>

          <AddButton>اضافة بطاقة</AddButton>
        </div>
        <div className='w-full overflow-x-auto lg:overflow-x-visible pb-5 lg:pb-0'>
          <div className='flex gap-5 items-center w-fit min-w-fit lg:block mx-auto lg:space-y-5 *:shrink-0'>
            <ATMCard />
            <ATMCard />
          </div>
        </div>
      </Card>
    </Section>
  );
};

const ATMCard = ({
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
          <span className='block text-sm'>
            {cardNumber}
          </span>
          <span className='text-xs'>{expiryDate}</span>
        </div>
        <p className='text-sm'>{cardHolder}</p>
      </div>
    </div>
  );
};

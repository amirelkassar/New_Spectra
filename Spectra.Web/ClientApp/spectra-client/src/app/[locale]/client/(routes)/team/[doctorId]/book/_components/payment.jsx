import { Section } from '@/client/_components/ui';
import CreditCardIcon from '@/assets/icons/credit-card';
import InsurancePayIcon from '@/assets/icons/insurance-pay';
import Wallet2 from '@/assets/icons/wallet2';
import Button from '@/components/button';
import Card from '@/components/card';

export const Payment = () => {
  return (
    <Section>
      <Card className='space-y-5' title='الدفع من خلال'>
        <div className='flex items-center gap-5'>
          <Button
            variant='blueLight'
            className='w-full py-5 px-2 bg-blueLighter flex-col mdl:flex-row'
          >
            <InsurancePayIcon className='size-10 lg:size-14' />
            التأمين
          </Button>

          <Button
            variant='blueLight'
            className='w-full py-5 px-2 bg-blueLighter flex-col mdl:flex-row'
          >
            <CreditCardIcon className='size-10 lg:size-14' />
            البطاقة الائتمانية
          </Button>

          <Button
            variant='blueLight'
            className='w-full py-5 px-2 bg-blueLighter flex-col mdl:flex-row'
          >
            <Wallet2 className='size-10 lg:size-14 text-greenMain' />
            محفظة سبيكترا
          </Button>
        </div>
      </Card>
    </Section>
  );
};

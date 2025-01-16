import Card from '@/components/card';

import { AddButton } from '@/components/buttons/add-button';
import { Section, SectionTitle } from '@/client/_components/ui';
import { ATMCard } from '@/dashboard/_components/payments';

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

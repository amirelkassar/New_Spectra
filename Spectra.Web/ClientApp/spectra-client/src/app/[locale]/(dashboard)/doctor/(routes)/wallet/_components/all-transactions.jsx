import Card from '@/components/card';
import { Section } from '@/client/_components/ui';
import {
  FilterBadge,
  Transaction,
} from '@/dashboard/_components/payments';

export const AllTransactions = () => {
  return (
    <Section id='all-transactions'>
      <Card
        titleId='all-transactions'
        title='جميع التحويلات'
        className='space-y-5 h-full'
      >
        <FilterBadge>اليوم</FilterBadge>

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
    </Section>
  );
};

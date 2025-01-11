import { useTranslations } from 'next-intl';

import { Section } from '@/client/_components/ui';
import {
  FilterBadge,
  Transaction,
} from '@/dashboard/_components/payments';
import Card from '@/components/card';

export const AllTransactions = () => {
  const t = useTranslations('payments_obj');

  const data = [];

  return (
    <Section id='all-transactions'>
      <Card
        titleId='all-transactions'
        title={t('all_transactions')}
        className='space-y-5 h-full'
      >
        <FilterBadge>{t('today')}</FilterBadge>

        <div className='max-h-[70vh] min-h-[50vh] overflow-y-auto'>
          {!!data?.length ? (
            <Transaction />
          ) : (
            <div className='text-center text-grayDark'>
              {t('no_transactions')}
            </div>
          )}
        </div>
      </Card>
    </Section>
  );
};

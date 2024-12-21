'use client';

import { useTranslations } from 'next-intl';

import { FilterType } from '@/components/table/filter-type';
import { FilterButton } from '@/components/table/filter-button';

export const StateFilter = ({ value = '', setValue = () => {} }) => {
  const tg = useTranslations('general_obj');

  return (
    <div className='flex flex-col mdl:flex-row mdl:flex-wrap gap-y-4 mdl:gap-x-6 mb-5'>
      <FilterType>{tg('filter')}:</FilterType>

      <div className='flex *:flex-1 mdl:*:flex-none mdl:flex-wrap gap-y-5'>
        <FilterButton
          onClick={() => setValue('')}
          aria-pressed={value === ''}
        >
          {tg('all')}
        </FilterButton>

        <FilterButton
          onClick={() => setValue('0')}
          aria-pressed={value === '0'}
        >
          {tg('rejected')}
        </FilterButton>

        <FilterButton
          onClick={() => setValue('1')}
          aria-pressed={value === '1'}
        >
          {tg('contracting')}
        </FilterButton>
        <FilterButton
          onClick={() => setValue('2')}
          aria-pressed={value === '2'}
        >
          {tg('accepted')}
        </FilterButton>
      </div>
    </div>
  );
};

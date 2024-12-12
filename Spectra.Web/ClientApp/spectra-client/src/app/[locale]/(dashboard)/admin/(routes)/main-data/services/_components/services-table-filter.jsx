'use client';

import { FilterButton } from '@/components/table/filter-button';
import { FilterType } from '@/components/table/filter-type';

export const ServicesTableFilter = ({
  type = '',
  setType = () => {},
}) => {
  return (
    <div className='flex flex-col mdl:flex-row gap-y-4 mdl:gap-x-6 mb-5'>
      <FilterType>فلتر بالنوع:</FilterType>

      <div className='flex *:flex-1 mdl:*:flex-none'>
        <FilterButton
          onClick={() => setType('')}
          aria-pressed={type === ''}
        >
          الكل
        </FilterButton>

        <FilterButton
          onClick={() => setType('1')}
          aria-pressed={type === '1'}
        >
          داخلية
        </FilterButton>

        <FilterButton
          onClick={() => setType('2')}
          aria-pressed={type === '2'}
        >
          تعرض
        </FilterButton>
      </div>
    </div>
  );
};

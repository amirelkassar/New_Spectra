'use client';

import FilterIcon from '@/assets/icons/filter';
import { FilterButton } from '@/components/table/filter-button';

export const ServicesTableFilter = ({
  type = '',
  setType = () => {},
}) => {
  return (
    <div className='flex flex-col mdl:flex-row gap-y-4 mdl:gap-x-6 mb-5'>
      <FilterType>فلتر بالنوع :</FilterType>

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

const FilterType = ({ children }) => {
  return (
    <div className='inline-flex items-center gap-3 font-bold text-xs lg:text-base'>
      <FilterIcon />
      {children}
    </div>
  );
};

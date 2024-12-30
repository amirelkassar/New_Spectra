'use client';

import { FilterButton } from '@/components/table/filter-button';
import { FilterType } from '@/components/table/filter-type';

export const StaffTableFilter = ({
  type = '',
  setType = () => {},
  disabled = false,
  hideDoctor = false,
  hideSpecialist = false,
  hideAccountant = false,
  hideSecretary = false,
}) => {
  return (
    <div className='flex flex-col mdl:flex-row gap-y-4 mdl:gap-x-6 mb-5'>
      <FilterType>فلتر بالنوع:</FilterType>

      <div className='flex *:flex-1 mdl:*:flex-none'>
        <FilterButton
          onClick={() => setType('')}
          aria-pressed={type === ''}
          disabled={disabled}
        >
          الكل
        </FilterButton>

        {!hideDoctor && (
          <FilterButton
            onClick={() => setType('1')}
            aria-pressed={type === '1'}
            disabled={disabled}
          >
            طبيب
          </FilterButton>
        )}

        {!hideSpecialist && (
          <FilterButton
            onClick={() => setType('2')}
            aria-pressed={type === '2'}
            disabled={disabled}
          >
            اخصائي
          </FilterButton>
        )}

        {!hideAccountant && (
          <FilterButton
            onClick={() => setType('3')}
            aria-pressed={type === '3'}
            disabled={disabled}
          >
            محاسب
          </FilterButton>
        )}

        {!hideSecretary && (
          <FilterButton
            onClick={() => setType('4')}
            aria-pressed={type === '4'}
            disabled={disabled}
          >
            سكرتير
          </FilterButton>
        )}
      </div>
    </div>
  );
};

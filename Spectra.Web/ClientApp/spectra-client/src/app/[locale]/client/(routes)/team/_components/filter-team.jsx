'use client';

import SelectInput from '@/components/inputs/select-input';

export const FilterTeam = () => {
  return (
    <div className='max-w-xs'>
      <SelectInput
        size={'xl'}
        data={[
          'اخصائى نفسي',
          'توحد',
          'فرط حركة',
          'ثنائي القطب',
        ]}
        placeholder='اختر التخصص'
        searchable
        clearable
        allowDeselect
      />
    </div>
  );
};

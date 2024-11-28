'use client';

import { memo } from 'react';

import { QueryWrapper } from '@/components/query-wrapper';
import { GetSpecializationID } from '@/hooks/queries/admin/main-data/specialties';
import { Info } from '../../../_components/info';

export const ViewSpeciality = ({ id }) => {
  const query = GetSpecializationID(id);

  return (
    <QueryWrapper query={query}>
      {({ data }) => <Speciality data={data} />}
    </QueryWrapper>
  );
};

const Speciality = memo(({ data }) => {
  return (
    <div className='space-y-5'>
      <Info label='اسم التخصص' data={data?.name} />

      <Info label='وصف التخصص' data={data?.description} />

      <Info
        label='تكلفة الجلسة'
        data={`${data?.consultationCost} ر.س`}
      />

      <Info label='الكود' data={data?.code} />
    </div>
  );
});

Speciality.displayName = 'Speciality';

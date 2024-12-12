'use client';

import { memo } from 'react';

import { QueryWrapper } from '@/components/query-wrapper';
import { GetSpecializationID } from '@/hooks/queries/admin/main-data/specialties';
import { Info } from '@/app/[locale]/(dashboard)/admin/_components/ui';

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
      <Info label='التخصص' data={data?.arName} />

      <Info label='الاسم العلمي' data={data?.enName} />

      <Info
        label='وصف التخصص باللغة العربية'
        data={data?.arDescription}
      />

      <Info
        label='وصف التخصص باللغة الانجليزية'
        data={data?.enDescription}
      />

      <Info
        label='تكلفة الجلسة'
        data={`${data?.consultationCost} ر.س`}
      />

      <Info label='الكود' data={data?.code} />
    </div>
  );
});

Speciality.displayName = 'Speciality';

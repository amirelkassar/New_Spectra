'use client';

import { QueryWrapper } from '@/components/query-wrapper';
import { Info } from '../../../_components/info';
import { GetInternalExaminationID } from '@/hooks/queries/admin/main-data/testsInterior';

export const ViewTest = ({ id }) => {
  const query = GetInternalExaminationID(id);

  return (
    <QueryWrapper query={query}>
      {({ data }) => <Test data={data} />}
    </QueryWrapper>
  );
};

const Test = ({ data }) => {
  return (
    <div className='flex flex-col gap-5'>
      <Info data={data.name} label='الاسم' />

      <Info data={data.code} label='الكود' />
    </div>
  );
};

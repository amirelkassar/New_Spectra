'use client';

import AnalysisIcon from '@/assets/icons/analysis';
import RumorsIcon from '@/assets/icons/rumors';
import { QueryWrapper } from '@/components/query-wrapper';
import { GetMedicalTestsID } from '@/hooks/queries/admin/main-data/analysis';
import { useMemo } from 'react';
import { Info } from '@/admin/_components/ui';

export const ViewAnalysis = ({ id }) => {
  const query = GetMedicalTestsID(id);

  return (
    <QueryWrapper query={query}>
      {({ data }) => <Analysis data={data} />}
    </QueryWrapper>
  );
};

const Analysis = ({ data }) => {
  const examinationTypes = useMemo(() => {
    if (data?.examinationTypes === 1)
      return {
        name: 'تحاليل',
        icon: (
          <AnalysisIcon className='text-greenMain size-3 md:size-5' />
        ),
      };

    if (data?.examinationTypes === 2)
      return {
        name: 'اشعة',
        icon: (
          <RumorsIcon className='text-greenMain size-3 md:size-5' />
        ),
      };
  }, [data.examinationTypes]);

  if (!data) return null;
  return (
    <div className='flex flex-col gap-5'>
      <Info
        label='النوع'
        data={examinationTypes?.name}
        icon={examinationTypes?.icon}
      />

      <Info label='الاسم العلمي' data={data?.name} />

      <Info label='الكود' data={data?.code} />
    </div>
  );
};

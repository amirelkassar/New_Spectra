'use client';

import AnalysisIcon from '@/assets/icons/analysis';
import RumorsIcon from '@/assets/icons/rumors';
import { QueryWrapper } from '@/components/query-wrapper';
import { GetMedicalTestsID } from '@/hooks/queries/admin/main-data/analysis';
import { useMemo } from 'react';

export const ViewAnalysis = ({ id }) => {
  const {
    data,
    isPending,
    isError,
    isPaused,
    refetch,
    failureReason,
  } = GetMedicalTestsID(id);

  const errorCode = failureReason?.status;
  const item = data?.data;
  const hasData = !!item?.length;

  return (
    <QueryWrapper
      status={{
        isPending,
        isPaused,
        isError,
        hasData,
        errorCode,
      }}
      refetch={refetch}
    >
      <Analysis data={item} />
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

const Info = ({ data, label = '', icon }) => {
  return (
    <div className='pb-5 border-b border-grayLight last:border-transparent'>
      <h3 className='font-bold mb-2 text-xs md:text-base'>
        {label}
      </h3>
      {icon ? (
        <div className='flex items-center gap-5'>
          <div className='flex bg-blueLight size-6 md:size-10 rounded-full items-center justify-center shrink-0'>
            {icon}
          </div>
          <p className='text-sm md:text-xl'>{data}</p>
        </div>
      ) : (
        <p className='text-sm md:text-xl'>{data}</p>
      )}
    </div>
  );
};

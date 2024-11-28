'use client';

import { memo } from 'react';

import { QueryWrapper } from '@/components/query-wrapper';
import { GetSpecializationID } from '@/hooks/queries/admin/main-data/specialties';

export const ViewSpeciality = ({ id }) => {
  const {
    data,
    refetch,
    isPending,
    isPaused,
    isError,
    failureReason,
  } = GetSpecializationID(id);

  const item = data?.data;
  const hasData = !!item?.name;
  const errorCode = failureReason?.status;

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
      <Speciality data={item} />
    </QueryWrapper>
  );
};

const Speciality = memo(({ data }) => {
  return (
    <div className='flex flex-col gap-5'>
      <div className='pb-5 border-b last-of-type:border-none border-grayLight'>
        <h3 className='font-bold mb-2 text-[12px] lg:text-[16px]'>
          اسم التخصص
        </h3>
        <p className='text-[14px] lg:text-[20px]  font-Regular'>
          {data.name}
        </p>
      </div>
      <div className='pb-5 border-b last-of-type:border-none border-grayLight'>
        <h3 className='font-bold mb-2 text-[12px] lg:text-[16px]'>
          وصف التخصص
        </h3>
        <p className='text-[14px] lg:text-[20px]  font-Regular'>
          {data.description}
        </p>
      </div>
      <div className='pb-5 border-b last-of-type:border-none border-grayLight'>
        <h3 className='font-bold mb-2 text-[12px] lg:text-[16px]'>
          تكلفة الجلسة
        </h3>
        <p className='text-[14px] lg:text-[20px]  font-Regular'>
          {data.consultationCost} ر.س
        </p>
      </div>
      <div className='pb-5 border-b last-of-type:border-none border-grayLight'>
        <h3 className='font-bold mb-2 text-[12px] lg:text-[16px]'>
          الكود
        </h3>
        <p className='text-[14px] lg:text-[20px]  font-Regular'>
          {data.code}
        </p>
      </div>
    </div>
  );
});

Speciality.displayName = 'Speciality';

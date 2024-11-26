'use client';

import AnalysisIcon from '@/assets/icons/analysis';
import RumorsIcon from '@/assets/icons/rumors';
import { QueryWrapper } from '@/components/query-wrapper';
import { GetMedicalTestsID } from '@/hooks/queries/admin/main-data/analysis';

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
  if (!data) return null;
  return (
    <div className='flex flex-col gap-5'>
      <div className='pb-5 border-b last-of-type:border-none border-grayLight'>
        <h3 className='font-bold mb-2 text-[12px] lg:text-[16px]'>
          النوع
        </h3>
        {data.examinationTypes === 1 ? (
          <div className='flex items-center gap-6'>
            <div className='flex bg-blueLight size-[38px] rounded-full items-center justify-center p-2'>
              <AnalysisIcon />
            </div>
            <p className='text-[14px] lg:text-[20px]  font-Regular'>
              تحاليل
            </p>
          </div>
        ) : (
          <div className='flex items-center gap-6'>
            <div className='flex bg-blueLight size-[38px] rounded-full items-center justify-center p-2'>
              <RumorsIcon />
            </div>
            <p className='text-[14px] lg:text-[20px]  font-Regular'>
              اشعات
            </p>
          </div>
        )}
      </div>
      <div className='pb-5 border-b last-of-type:border-none border-grayLight'>
        <h3 className='font-bold mb-2 text-[12px] lg:text-[16px]'>
          الاسم العلمى
        </h3>
        <p className='text-[14px] lg:text-[20px]  font-Regular'>
          {data.name}
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
};

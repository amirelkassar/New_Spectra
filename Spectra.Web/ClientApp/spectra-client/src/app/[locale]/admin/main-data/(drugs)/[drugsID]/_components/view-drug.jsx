'use client';

import { useMemo } from 'react';
import Image from 'next/image';

import { GetDrugsID } from '@/hooks/queries/admin/main-data/drugs';
import { QueryWrapper } from '@/components/query-wrapper';

export const ViewDrug = ({ id }) => {
  const {
    data,
    refetch,
    isPending,
    isPaused,
    isError,
    failureReason,
  } = GetDrugsID(id);

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
      <Drug data={item} />
    </QueryWrapper>
  );
};

const Drug = ({ data }) => {
  const image = useMemo(
    () =>
      data?.imagePath
        ? `${data?.imagePath}?token=${process.env.NEXT_PUBLIC_TOKEN}`
        : '',
    [data?.imagePath]
  );

  if (!data) return null;
  return (
    <div className='flex flex-col gap-5'>
      <div className='pb-5 border-b last-of-type:border-none border-grayLight'>
        <h3 className='font-bold mb-2 text-[12px] lg:text-[16px]'>
          صورة العقار
        </h3>
        {image ? (
          <div className='flex items-center gap-2 mt-6 flex-wrap'>
            <Image
              alt='drugs'
              src={image}
              className=' h-[60px] lg:h-[100px] w-auto object-contain'
              width={100}
              height={110}
            />
          </div>
        ) : (
          <p className='text-xs p-5'>لا يوجد صورة</p>
        )}
      </div>
      <div className='pb-5 border-b last-of-type:border-none border-grayLight'>
        <h3 className='font-bold mb-2 text-[12px] lg:text-[16px]'>
          الاسم{' '}
        </h3>
        <p className=' text-[14px] lg:text-[20px] font-Regular'>
          {data.name}
        </p>
      </div>
      <div className='pb-5 border-b last-of-type:border-none border-grayLight'>
        <h3 className='font-bold mb-2 text-[12px] lg:text-[16px]'>
          الكود
        </h3>
        <p className=' text-[14px] lg:text-[20px] font-Regular'>
          {data.code}
        </p>
      </div>
      <div className='pb-5 border-b last-of-type:border-none border-grayLight'>
        <h3 className='font-bold mb-2 text-[12px] lg:text-[16px]'>
          المادة الفعالة
        </h3>
        <p className=' text-[14px] lg:text-[20px] font-Regular'>
          {data.activeIngredient}
        </p>
      </div>
      <div className='pb-5 border-b last-of-type:border-none border-grayLight'>
        <h3 className='font-bold mb-2 text-[12px] lg:text-[16px]'>
          الاسم العلمى
        </h3>
        <p className=' text-[14px] lg:text-[20px] font-Regular'>
          {data.scientificName}
        </p>
      </div>
      <div className='pb-5 border-b last-of-type:border-none border-grayLight'>
        <h3 className='font-bold mb-2 text-[12px] lg:text-[16px]'>
          النوع
        </h3>
        <p className=' text-[14px] lg:text-[20px] font-Regular'>
          {data.type}
        </p>
      </div>

      <div className='pb-5 border-b last-of-type:border-none border-grayLight'>
        <h3 className='font-bold mb-2 text-[12px] lg:text-[16px]'>
          الجرعة الموصى بها
        </h3>
        <p className=' font-Regular text-[12px] lg:text-[16px]'>
          {data.recommendedDosage}
        </p>
      </div>
      <div className='pb-5 border-b last-of-type:border-none border-grayLight'>
        <h3 className='font-bold mb-2 text-[12px] lg:text-[16px]'>
          تركيز الدواء
        </h3>
        <p className=' font-Regular text-[12px] lg:text-[16px]'>
          {data.doncentration}
        </p>
      </div>
      <div className='pb-5 border-b last-of-type:border-none border-grayLight'>
        <h3 className='font-bold mb-2 text-[12px] lg:text-[16px]'>
          تفاعلات الدواء مع ادوية اخرى
        </h3>
        <p className=' font-Regular text-[12px] lg:text-[16px]'>
          {data.interactionsWithOtherdrugs}
        </p>
      </div>
      <div className='pb-5 border-b last-of-type:border-none border-grayLight'>
        <h3 className='font-bold mb-2 text-[12px] lg:text-[16px]'>
          موانع الاستخدام
        </h3>
        <p className=' font-Regular text-[12px] lg:text-[16px]'>
          {data.contraindications}
        </p>
      </div>
      <div className='bg-blueLight rounded-xl px-8 py-7'>
        <h3 className='font-bold mb-3 text-[12px] lg:text-[16px]'>
          ملاحظات
        </h3>
        <p className=' text-[14px] lg:text-[20px] font-Regular pb-3 '>
          {data.nots}
        </p>
      </div>
    </div>
  );
};

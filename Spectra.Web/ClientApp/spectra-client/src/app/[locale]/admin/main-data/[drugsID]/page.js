'use client';
import BackIcon from '@/assets/icons/back';
import { Link } from '@/navigation';
import ROUTES from '@/routes';
import Image from 'next/image';
import React from 'react';
import imgDrugs from '@/assets/images/drugs.png';
import ActionMenu from '../_components/ActionMenuDetails';
import { GetDrugsID } from '@/useAPI/admin/main-data/drugs';
import NoDataYet from '@/components/noDataYet';
import HandelShowDataID from '@/components/handelShowDataID';

function page({ params }) {
  const { data, isLoading } = GetDrugsID(params.drugsID);
  // console.log(data?.data.data);

  return (
    <div>
      <div className='flex items-center  mb-10 justify-between gap-4'>
        <div className='flex   items-center gap-4 '>
          <Link
            href={ROUTES.ADMIN.DATAMAIN.HOME}
            className=' w-[30px] lg:w-[44px] h-[30px] lg:h-[44px] rounded-[50%]  flex items-center justify-center'
          >
            <BackIcon className={'w-full h-full'} />
          </Link>
          <h2 className='headTitleDash'>العقاقير</h2>
        </div>
        <ActionMenu id={params.drugsID} />
      </div>
      <HandelShowDataID
        isLoading={isLoading}
        statusCode={data?.data.code}
      >
        {data?.data.code === 200 && (
          <div className='flex flex-col gap-5'>
            <div className='pb-5 border-b last-of-type:border-none border-grayLight'>
              <h3 className='font-bold mb-2 text-[12px] lg:text-[16px]'>
                صور العقار{' '}
              </h3>
              <div className='flex items-center gap-2 mt-6 flex-wrap'>
                <Image
                  alt='drugs'
                  src={imgDrugs}
                  className=' h-[60px] lg:h-[100px] w-auto object-contain'
                  width={100}
                  height={110}
                />
                <Image
                  alt='drugs'
                  src={imgDrugs}
                  className=' h-[60px] lg:h-[100px] w-auto object-contain'
                  width={100}
                  height={110}
                />
                <Image
                  alt='drugs'
                  src={imgDrugs}
                  className=' h-[60px] lg:h-[100px] w-auto object-contain'
                  width={100}
                  height={110}
                />
              </div>
            </div>
            <div className='pb-5 border-b last-of-type:border-none border-grayLight'>
              <h3 className='font-bold mb-2 text-[12px] lg:text-[16px]'>
                الاسم{' '}
              </h3>
              <p className=' text-[14px] lg:text-[20px] font-Regular'>
                {data?.data.data.name}
              </p>
            </div>
            <div className='pb-5 border-b last-of-type:border-none border-grayLight'>
              <h3 className='font-bold mb-2 text-[12px] lg:text-[16px]'>
                الكود
              </h3>
              <p className=' text-[14px] lg:text-[20px] font-Regular'>
                {data?.data.data.id}{' '}
              </p>
            </div>
            <div className='pb-5 border-b last-of-type:border-none border-grayLight'>
              <h3 className='font-bold mb-2 text-[12px] lg:text-[16px]'>
                المادة الفعالة
              </h3>
              <p className=' text-[14px] lg:text-[20px] font-Regular'>
                {data?.data.data.activeIngredient}
              </p>
            </div>
            <div className='pb-5 border-b last-of-type:border-none border-grayLight'>
              <h3 className='font-bold mb-2 text-[12px] lg:text-[16px]'>
                الاسم العلمى
              </h3>
              <p className=' text-[14px] lg:text-[20px] font-Regular'>
                {data?.data.data.scientificName}
              </p>
            </div>
            <div className='pb-5 border-b last-of-type:border-none border-grayLight'>
              <h3 className='font-bold mb-2 text-[12px] lg:text-[16px]'>
                النوع
              </h3>
              <p className=' text-[14px] lg:text-[20px] font-Regular'>
                {' '}
                {data?.data.data.contraindications}{' '}
              </p>
            </div>

            <div className='pb-5 border-b last-of-type:border-none border-grayLight'>
              <h3 className='font-bold mb-2 text-[12px] lg:text-[16px]'>
                الجرعة الموصى بها
              </h3>
              <p className=' font-Regular text-[12px] lg:text-[16px]'>
                {data?.data.data.recommendedDosage}
              </p>
            </div>
            <div className='pb-5 border-b last-of-type:border-none border-grayLight'>
              <h3 className='font-bold mb-2 text-[12px] lg:text-[16px]'>
                تركيز الدواء
              </h3>
              <p className=' font-Regular text-[12px] lg:text-[16px]'>
                {data?.data.data.doncentration}
              </p>
            </div>
            <div className='pb-5 border-b last-of-type:border-none border-grayLight'>
              <h3 className='font-bold mb-2 text-[12px] lg:text-[16px]'>
                تفاعلات الدواء مع ادوية اخرى
              </h3>
              <p className=' font-Regular text-[12px] lg:text-[16px]'>
                {data?.data.data.interactionsWithOtherdrugs}
              </p>
            </div>
            <div className='pb-5 border-b last-of-type:border-none border-grayLight'>
              <h3 className='font-bold mb-2 text-[12px] lg:text-[16px]'>
                موانع الاستخدام
              </h3>
              <p className=' font-Regular text-[12px] lg:text-[16px]'>
                {data?.data.data.contraindications}
              </p>
            </div>
            <div className='bg-blueLight rounded-xl px-8 py-7'>
              <h3 className='font-bold mb-3 text-[12px] lg:text-[16px]'>
                ملاحظات
              </h3>
              <p className=' text-[14px] lg:text-[20px] font-Regular pb-3 '>
                {data?.data.data.notes}
              </p>
            </div>
          </div>
        )}
      </HandelShowDataID>
    </div>
  );
}

export default page;

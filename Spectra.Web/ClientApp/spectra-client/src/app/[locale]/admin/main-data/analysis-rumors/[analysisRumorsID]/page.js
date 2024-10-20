'use client';
import React from 'react';
import AddMainData from '../../_components/add-drugs';
import ROUTES from '@/routes';
import ActionMenu from '../../_components/ActionMenuAnalysisDetails';
import { Link } from '@/navigation';
import BackIcon from '@/assets/icons/back';
import AnalysisIcon from '@/assets/icons/analysis';
import { GetMedicalTestsID } from '@/useAPI/admin/main-data/analysis';
import NoDataYet from '@/components/noDataYet';
import HandelShowDataID from '@/components/handelShowDataID';
function page({ params }) {
  const { data, isLoading } = GetMedicalTestsID(
    params.analysisRumorsID
  );
  console.log(data?.data.data);

  return (
    <div>
      <div className='flex items-center justify-between gap-5 mb-10'>
        <div className='flex  flex-col mt-6 lg:mt-0 flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-6'>
          <Link
            href={ROUTES.ADMIN.DATAMAIN.ANALYSISRUMORS}
            className=' w-[30px] lg:w-[44px] h-[30px] lg:h-[44px] rounded-[50%]  flex items-center justify-center'
          >
            <BackIcon className={'w-full h-full'} />
          </Link>
          <h2 className='headTitleDash'>
            التحاليل و الاشعات{' '}
          </h2>
          <AddMainData
            title={'أضافة نوع  '}
            path={ROUTES.ADMIN.DATAMAIN.ANALYSISRUMORSADD}
          />
        </div>
        <ActionMenu id={params.analysisRumorsID} />
      </div>
      <HandelShowDataID
        isLoading={isLoading}
        statusCode={data?.data.code}
      >
        {data?.data.code === 200 && (
          <div className='flex flex-col gap-5'>
            <div className='pb-5 border-b last-of-type:border-none border-grayLight'>
              <h3 className='font-bold mb-2 text-[12px] lg:text-[16px]'>
                النوع
              </h3>
              <div className='flex items-center gap-6'>
                <div className='flex bg-blueLight size-[38px] rounded-full items-center justify-center p-2'>
                  <AnalysisIcon />
                </div>
                <p className='text-[14px] lg:text-[20px]  font-Regular'>
                  تحاليل
                </p>
              </div>
            </div>
            <div className='pb-5 border-b last-of-type:border-none border-grayLight'>
              <h3 className='font-bold mb-2 text-[12px] lg:text-[16px]'>
                الاسم العلمى باللغة العربية
              </h3>
              <p className='text-[14px] lg:text-[20px]  font-Regular'>
                {' '}
                {data.data.data.scientificName}
              </p>
            </div>
            <div className='pb-5 border-b last-of-type:border-none border-grayLight'>
              <h3 className='font-bold mb-2 text-[12px] lg:text-[16px]'>
                الاسم العلمى باللغة الانجليزية
              </h3>
              <p className='text-[14px] lg:text-[20px]  font-Regular'>
                {data.data.data.scientificName}
              </p>
            </div>
            <div className='pb-5 border-b last-of-type:border-none border-grayLight'>
              <h3 className='font-bold mb-2 text-[12px] lg:text-[16px]'>
                الكود
              </h3>
              <p className='text-[14px] lg:text-[20px]  font-Regular'>
                {' '}
                {data.data.data.code}
              </p>
            </div>
            <div className='pb-5 border-b last-of-type:border-none border-grayLight'>
              <h3 className='font-bold mb-2 text-[12px] lg:text-[16px]'>
                ملاحظات
              </h3>
              <p className='text-[14px] lg:text-[20px]  font-Regular'>
                {data.data.data.notes}
              </p>
            </div>
          </div>
        )}
      </HandelShowDataID>
    </div>
  );
}

export default page;

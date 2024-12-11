'use client';
import React from 'react';
import Card from '@/components/card';
import { Link } from '@/i18n/routing';
import BackIcon from '@/assets/icons/back';
import ROUTES from '@/routes';
import Image from 'next/image';
import imgStaff from '@/assets/images/staff.png';
import ActionMenu from './ActionMenuStaff';
import PageEditStaff from './pageEditStaff';
import { useParams, useSearchParams } from 'next/navigation';
import HandelShowDataID from '@/components/handelShowDataID';
import { useStaffById } from '@/hooks/queries/admin/staff/staff';

function StaffInformation() {
  const searchParams = useSearchParams();
  const params = useParams();
  const { data, isLoading } = useStaffById(
    params.id,
    searchParams.get('type') === 'Accountant' ? 3 : 4
  );

  console.log(data);

  return searchParams.get('edit') === 'true' ? (
    <PageEditStaff id={params.id} />
  ) : (
    <HandelShowDataID
      isLoading={isLoading}
      statusCode={data?.data.code}
    >
      {data?.data.code === 200 && (
        <div className='flex flex-col gap-5 w-full'>
          <Card>
            <div className='flex items-center justify-between mb-8  gap-5'>
              <div className='flex items-center gap-2 lg:gap-3'>
                <Link
                  href={ROUTES.ADMIN.STAFF.DASHBOARD}
                  className=' w-[30px] lg:w-[44px] h-[30px] lg:h-[44px] rounded-[50%]  flex items-center justify-center'
                >
                  <BackIcon className={'w-full h-full'} />
                </Link>
                <h2 className='text-base lg:text-xl font-bold '>
                  الموظفين
                </h2>
              </div>
              <ActionMenu id={params.id} />
            </div>
            <div className='flex flex-wrap gap-3 mdl:gap-6 items-center'>
              <Image
                src={imgStaff}
                alt='imgStaff'
                width={230}
                height={230}
                className=' size-[142px] lg:size-[230px] aspect-square'
              />

              <ul className='flex flex-col gap-4 mdl:gap-7'>
                <li className=' flex items-center gap-5 text-xs lg:text-base font-Regular'>
                  <h4 className='text-xs lg:text-base font-Regular min-w-[84px] mdl:min-w-[130px]'>
                    الاسم
                  </h4>
                  <p className='text-xs lg:text-base font-bold'>
                    {data?.data.data.firstName}
                  </p>
                </li>
                <li className=' flex items-center gap-4 lg:gap-8 text-xs lg:text-base font-Regular'>
                  <h4 className='text-xs lg:text-base font-Regular min-w-[84px] mdl:min-w-[130px]'>
                    رقم الهاتف
                  </h4>
                  <p className='text-xs lg:text-base font-bold'>
                    {data?.data.data.phoneNumbers}
                  </p>
                </li>
                <li className=' flex items-center gap-5 text-xs lg:text-base font-Regular'>
                  <h4 className='text-xs lg:text-base font-Regular min-w-[84px] mdl:min-w-[130px]'>
                    البريد الالكترونى
                  </h4>
                  <p className='text-xs lg:text-base font-bold'>
                    {data?.data.data.emailaddress}
                  </p>
                </li>
                <li className=' flex items-center gap-5 text-xs lg:text-base font-Regular'>
                  <h4 className='text-xs lg:text-base font-Regular min-w-[84px] mdl:min-w-[130px]'>
                    رقم الهوية
                  </h4>
                  <p className='text-xs lg:text-base font-bold'>
                    {data?.data.data.nationalId}
                  </p>
                </li>
                <li className=' flex items-center gap-5 text-xs lg:text-base font-Regular'>
                  <h4 className='text-xs lg:text-base font-Regular min-w-[84px] mdl:min-w-[130px]'>
                    عدد العملاء
                  </h4>
                  <p className='text-xs lg:text-base font-bold'>
                    {data?.data.data.jobTypes} عميل
                  </p>
                </li>
              </ul>
            </div>
          </Card>
          <Card>
            <h3 className='text-sm lg:text-xl font-bold mb-6 lg:mb-8'>
              الوصف الوظيفى
            </h3>
            <ul className='flex flex-col gap-5 '>
              <li className='flex items-center gap-4 lg:gap-8'>
                <h4 className='text-xs lg:text-base font-Regular min-w-[130px]'>
                  المسمى الوظيفي
                </h4>
                <p className='text-xs lg:text-base font-bold'>
                  {data?.data.data.jobName}
                </p>
              </li>
              <li className='flex items-center gap-4 lg:gap-8'>
                <h4 className='text-xs lg:text-base font-Regular min-w-[130px]'>
                  القسم
                </h4>
                <p className='text-xs lg:text-base font-bold'>
                  {data?.data.data.diagnoses || '--'}
                </p>
              </li>
              <li className='flex items-center gap-4 lg:gap-8'>
                <h4 className='text-xs lg:text-base font-Regular min-w-[130px]'>
                  المؤهلات
                </h4>
                <p className='text-xs lg:text-base font-bold'>
                  {data?.data.data.qualifications}
                </p>
              </li>
              <li className='flex items-center gap-4 lg:gap-8'>
                <h4 className='text-xs lg:text-base font-Regular min-w-[130px]'>
                  تاريخ الانضمام
                </h4>
                <p className='text-xs lg:text-base font-bold'>
                  {data?.data.data.timeToJoin}
                </p>
              </li>

              <li className='flex items-center gap-4 lg:gap-8'>
                <h4 className='text-xs lg:text-base font-Regular min-w-[130px]'>
                  ساعات العمل
                </h4>
                <p className='text-xs lg:text-base font-bold'>
                  {data?.data.data.workingHours} ساعات
                </p>
              </li>
              <li className='flex items-center gap-4 lg:gap-8'>
                <h4 className='text-xs lg:text-base font-Regular min-w-[130px] max-w-[130px]'>
                  البريد الالكترونى الوظيفى / اسم المستخدم
                </h4>
                <p className='text-xs lg:text-base font-bold'>
                  {data?.data.data.firstName}
                </p>
              </li>
            </ul>
          </Card>
        </div>
      )}
    </HandelShowDataID>
  );
}

export default StaffInformation;

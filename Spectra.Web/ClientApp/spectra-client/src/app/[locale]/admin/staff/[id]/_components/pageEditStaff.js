'use client';
import Card from '@/components/card';
import { Link, useRouter } from '@/navigation';
import ROUTES from '@/routes';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import BackIcon from '@/assets/icons/back';
import imgStaff from '@/assets/images/staff.png';
import { DatePickerInput } from '@mantine/dates';
import Button from '@/components/button';
import {
  GetStaffID,
  useEditStaff,
} from '@/hooks/queries/admin/staff/staff';
import HandelShowDataID from '@/components/handelShowDataID';
import { TextInput } from '@mantine/core';

function PageEditStaff({ id }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [StaffData, setStaffData] = useState('');
  const { data, isLoading } = GetStaffID(
    id,
    searchParams.get('type') === 'Accountant' ? 3 : 4
  );
  const {
    mutate: EditStaff,
    error,
    isSuccess,
    isError,
    reset,
  } = useEditStaff(
    id,
    searchParams.get('type') === 'Accountant' ? 3 : 4
  );
  useEffect(() => {
    data?.data.data ? setStaffData(data.data.data) : null;
  }, [isLoading]);
  useEffect(() => {
    if (isSuccess) {
      router.push(
        ROUTES.ADMIN.STAFF.STAFFID(id) +
          '?type=' +
          searchParams.get('type')
      );
    }
  }, [isSuccess]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStaffData({
      ...StaffData,
      [name]: value,
    });
    if (isError) {
      reset();
    }
  };
  console.log(StaffData);
  const handleSubmit = (e) => {
    e.preventDefault();
    EditStaff(StaffData);
  };
  return (
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
                  <TextInput
                    defaultValue={data?.data.data.firstName}
                    name='firstName'
                    onChange={handleChange}
                    className={'!gap-1 flex-1  max-w-full'}
                    classNames={{
                      input:
                        '!h-[48px] rounded-[10px] !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] text-[16px] !font-bold',
                      label: '!text-[16px] !mb-0 px-4',
                    }}
                  />
                </li>
                <li className=' flex items-center gap-5 text-xs lg:text-base font-Regular'>
                  <h4 className='text-xs lg:text-base font-Regular min-w-[84px] mdl:min-w-[130px]'>
                    رقم الهاتف
                  </h4>
                  <TextInput
                    defaultValue={
                      data?.data.data.phoneNumbers
                    }
                    name='phoneNumbers'
                    onChange={handleChange}
                    className={'!gap-1 flex-1  max-w-full'}
                    classNames={{
                      input:
                        '!h-[48px] rounded-[10px] !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] text-[16px] !font-bold',
                      label: '!text-[16px] !mb-0 px-4',
                    }}
                  />
                </li>
                <li className=' flex items-center gap-5 text-xs lg:text-base font-Regular'>
                  <h4 className='text-xs lg:text-base font-Regular min-w-[84px] mdl:min-w-[130px]'>
                    البريد الالكترونى
                  </h4>
                  <TextInput
                    defaultValue={
                      data?.data.data.emailaddress
                    }
                    name='emailaddress'
                    onChange={handleChange}
                    className={'!gap-1 flex-1  max-w-full'}
                    classNames={{
                      input:
                        '!h-[48px] rounded-[10px] !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] text-[16px] !font-bold',
                      label: '!text-[16px] !mb-0 px-4',
                    }}
                  />
                </li>
                <li className=' flex items-center gap-5 text-xs lg:text-base font-Regular'>
                  <h4 className='text-xs lg:text-base font-Regular min-w-[84px] mdl:min-w-[130px]'>
                    رقم الهوية
                  </h4>
                  <TextInput
                    defaultValue={
                      data?.data.data.nationalId
                    }
                    name='nationalId'
                    onChange={handleChange}
                    className={'!gap-1 flex-1  max-w-full'}
                    classNames={{
                      input:
                        '!h-[48px] rounded-[10px] !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] text-[16px] !font-bold',
                      label: '!text-[16px] !mb-0 px-4',
                    }}
                  />
                </li>
                <li className=' flex items-center gap-5 text-xs lg:text-base font-Regular'>
                  <h4 className='text-xs lg:text-base font-Regular min-w-[84px] mdl:min-w-[130px]'>
                    عدد العملاء
                  </h4>
                  <TextInput
                    defaultValue={data?.data.data.jobTypes}
                    name='jobTypes'
                    onChange={handleChange}
                    className={'!gap-1 flex-1  max-w-full'}
                    classNames={{
                      input:
                        '!h-[48px] rounded-[10px] !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] text-[16px] !font-bold',
                      label: '!text-[16px] !mb-0 px-4',
                    }}
                  />
                </li>
              </ul>
            </div>
          </Card>
          <Card>
            <h3 className='text-sm lg:text-xl font-bold mb-6 lg:mb-8'>
              الوصف الوظيفى
            </h3>
            <form className='clientEdit'>
              <ul className='flex   flex-col gap-5 '>
                <li className='flex items-center gap-4 lg:gap-8'>
                  <h4 className='text-xs lg:text-base font-Regular min-w-[130px]'>
                    المسمى الوظيفي{' '}
                  </h4>
                  <TextInput
                    defaultValue={data?.data.data.jobName}
                    name='jobName'
                    onChange={handleChange}
                    className={'!gap-1 flex-1  max-w-full'}
                    classNames={{
                      input:
                        '!h-[48px] rounded-[10px] !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] text-[16px] !font-bold',
                      label: '!text-[16px] !mb-0 px-4',
                    }}
                  />
                </li>
                <li className='flex items-center gap-4 lg:gap-8'>
                  <h4 className='text-xs lg:text-base font-Regular min-w-[130px]'>
                    القسم
                  </h4>
                  <TextInput
                    defaultValue={
                      data?.data.data.diagnoses || '--'
                    }
                    name='diagnoses'
                    onChange={handleChange}
                    className={'!gap-1 flex-1  max-w-full'}
                    classNames={{
                      input:
                        '!h-[48px] rounded-[10px] !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] text-[16px] !font-bold',
                      label: '!text-[16px] !mb-0 px-4',
                    }}
                  />
                </li>
                <li className='flex items-center gap-4 lg:gap-8'>
                  <h4 className='text-xs lg:text-base font-Regular min-w-[130px]'>
                    المؤهلات
                  </h4>
                  <TextInput
                    defaultValue={
                      data?.data.data.qualifications
                    }
                    name='qualifications'
                    onChange={handleChange}
                    className={'!gap-1 flex-1  max-w-full'}
                    classNames={{
                      input:
                        '!h-[48px] rounded-[10px] !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] text-[16px] !font-bold',
                      label: '!text-[16px] !mb-0 px-4',
                    }}
                  />
                </li>
                <li className='flex items-center gap-4 lg:gap-8'>
                  <h4 className='text-xs lg:text-base font-Regular min-w-[130px]'>
                    تاريخ الانضمام
                  </h4>

                  <DatePickerInput
                    className='w-full !border-[#CFD0D7] !outline-none'
                    placeholder='Pick date'
                    valueFormat='DD/MM/YYYY'
                    defaultValue={
                      new Date(data?.data.data.timeToJoin)
                    }
                    classNames={{
                      input:
                        'h-auto w-full min-h-11 py-2 text-[12px] md:text-xl !font-Regular  !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] rounded-xl',
                    }}
                  />
                </li>

                <li className='flex items-center gap-4 lg:gap-8'>
                  <h4 className='text-xs lg:text-base font-Regular min-w-[130px]'>
                    ساعات العمل
                  </h4>
                  <TextInput
                    defaultValue={
                      data?.data.data.workingHours
                    }
                    name='workingHours'
                    onChange={handleChange}
                    className={'!gap-1 flex-1  max-w-full'}
                    classNames={{
                      input:
                        '!h-[48px] rounded-[10px] !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] text-[16px] !font-bold',
                      label: '!text-[16px] !mb-0 px-4',
                    }}
                  />
                </li>
                <li className='flex items-center gap-4 lg:gap-8'>
                  <h4 className='text-xs lg:text-base font-Regular min-w-[130px] max-w-[130px]'>
                    البريد الالكترونى الوظيفى / اسم المستخدم
                  </h4>
                  <TextInput
                    defaultValue={data?.data.data.firstName}
                    onChange={handleChange}
                    name='lastName'
                    className={'!gap-1 flex-1  max-w-full'}
                    classNames={{
                      input:
                        '!h-[48px] rounded-[10px] !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] text-[16px] !font-bold',
                      label: '!text-[16px] !mb-0 px-4',
                    }}
                  />
                </li>
              </ul>
              <Button
                variant='secondary'
                onClick={handleSubmit}
                className='h-14 mt-14 max-w-full w-[360px] text-xl font-Bold'
              >
                حفظ التعديلات
              </Button>
            </form>
          </Card>
        </div>
      )}
    </HandelShowDataID>
  );
}

export default PageEditStaff;

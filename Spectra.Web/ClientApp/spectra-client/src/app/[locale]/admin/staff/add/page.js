'use client';
import BackIcon from '@/assets/icons/back';
import Card from '@/components/card';
import { Link } from '@/navigation';
import ROUTES from '@/routes';
import React, { useState } from 'react';
import FormOne from './_components/formOne';
import FormDocSpe from './_components/formDocSpe';
import FormStaff from './_components/formStaff';
import { ST } from 'next/dist/shared/lib/utils';

function Page() {
  const [firstData, setFirstData] = useState('');
  const [DocSpeData, setDocSpeData] = useState('');
  const [StaffData, setStaffData] = useState('');
  const [NextForm, setNextForm] = useState(false);
  // console.log(firstData);

  return (
    <Card>
      <div className='flex mb-10   items-center gap-4 '>
        <Link
          href={ROUTES.ADMIN.STAFF.DASHBOARD}
          className=' w-[30px] lg:w-[44px] h-[30px] lg:h-[44px] rounded-[50%]  flex items-center justify-center'
        >
          <BackIcon className={'w-full h-full'} />
        </Link>
        <h2 className='headTitleDash'>اضافة موظف</h2>
      </div>
      {NextForm ? (
        firstData.profession === 'دكتور' ||
        firstData.profession === 'متخصص' ? (
          <FormDocSpe
            setNextForm={setNextForm}
            setDocSpeData={setDocSpeData}
            DocSpeData={DocSpeData}
          />
        ) : (
          <FormStaff
            setNextForm={setNextForm}
            setStaffData={setStaffData}
            StaffData={StaffData}
          />
        )
      ) : (
        <FormOne
          firstData={firstData}
          setFirstData={setFirstData}
          setNextForm={setNextForm}
        />
      )}
    </Card>
  );
}

export default Page;

'use client';
import { useState } from 'react';

import Card from '@/components/card';
import Button from '@/components/button';
import ChildPopover from '../../_components/child-popover';
import { useRouter } from '@/navigation';
import ROUTES from '@/routes';
import { DoctorBadge } from '../../_components/doctor-badge';

const data = [
  {
    id: 0,
    avatar: '',
    fullname: 'محمد عبدالله الشيخ',
    diagnosis: 'طيف التوحد',
    gender: 'ذكر',
    age: 10,
    reports: 3,
    sessions: 3,
    followUps: 5,
    treatmentTeam: [
      {
        name: 'احمد محمد كمال',
        profession: 'اخصائى نفسي',
        rate: '9.5',
        avatar: '',
      },
      {
        name: 'احمد محمد كمال',
        profession: 'اخصائى نفسي',
        rate: '9.5',
        avatar: '',
      },
    ],
  },
  {
    id: 1,
    avatar: '',
    fullname: 'احمد عبدالله الشيخ',
    diagnosis: 'طيف التوحد',
    gender: 'ذكر',
    age: 8,
    reports: 5,
    sessions: 13,
    followUps: 6,
    treatmentTeam: [
      {
        name: 'احمد محمد كمال',
        profession: 'اخصائى نفسي',
        rate: '9.4',
        avatar: '',
      },
      {
        name: 'احمد محمد كمال',
        profession: 'اخصائى نفسي',
        rate: '9.2',
        avatar: '',
      },
    ],
  },
  {
    id: 2,
    avatar: '',
    fullname: 'علي محمد علي',
    diagnosis: 'فرط حركة',
    gender: 'ذكر',
    age: 10,
    reports: 2,
    sessions: 8,
    followUps: 8,
    treatmentTeam: [
      {
        name: 'احمد محمد كمال',
        profession: 'اخصائى نفسي',
        rate: '9.4',
        avatar: '',
      },
      {
        name: 'احمد محمد كمال',
        profession: 'اخصائى نفسي',
        rate: '9.2',
        avatar: '',
      },
    ],
  },
];

export const ChildCards = () => {
  const [selectedChild, setSelectedChild] = useState(0);

  return (
    <section className='gap-5 relative space-y-5'>
      <div className='w-full'>
        <ChildPopover
          data={data}
          selectedChild={selectedChild}
          setSelectedChild={setSelectedChild}
        />
      </div>
      <ChildDetails {...data[selectedChild]} />
    </section>
  );
};

const ChildDetails = ({
  avatar = '',
  fullname = '',
  gender,
  age,
  diagnosis,
  followUps,
  treatmentTeam,
  reports,
  sessions,
}) => {
  const router = useRouter();
  return (
    <Card className='space-y-10'>
      {/* INFO */}
      <ul className='text-black w-full space-y-5'>
        <div className='flex w-full py-5 items-center gap-5 *:flex-1'>
          <li>
            <span>النوع</span>
            <span className='font-bold block mt-1'>
              {gender}
            </span>
          </li>
          <li>
            <span>السن</span>
            <span className='font-bold block mt-1'>
              {age}
            </span>
          </li>
          <li>
            <span>التشخيص</span>
            <span className='font-bold block mt-1'>
              {diagnosis}
            </span>
          </li>
        </div>
        <div className='flex items-center gap-5 *:flex-1'>
          <li>
            <span>عدد الجلسات</span>
            <span className='font-bold block mt-1'>
              {sessions}
            </span>
          </li>
          <li>
            <span>عدد الكشوفات</span>
            <span className='font-bold block mt-1'>
              {reports}
            </span>
          </li>
          <li>
            <span>عدد المتابعات</span>
            <span className='font-bold block mt-1'>
              {followUps}
            </span>
          </li>
        </div>
      </ul>

      <div>
        {/* TREATMENT TEAM */}
        <div className='space-y-5'>
          {/* Heading */}
          <h4 className='font-bold text-base lg:text-medium'>
            الفريق المعالج
          </h4>

          {/* TEAM */}
          <div className='flex gap-7 max-w-full overflow-x-auto pb-5'>
            {treatmentTeam?.map((doc, index) => (
              <DoctorBadge key={index} {...doc} />
            ))}
          </div>

          {/* ACTION BUTTONS */}
          <div className='flex *:flex-1 gap-5 font-bold text-sm lg:text-medium text-black flex-col px-2 lg:flex-row'>
            <Button
              onClick={() =>
                router.push(
                  `${ROUTES.CLIENT.PROFILE}/attachments`
                )
              }
            >
              مرفقات
            </Button>
            <Button
              onClick={() =>
                router.push(
                  `${ROUTES.CLIENT.PROFILE}/prescriptions`
                )
              }
            >
              وصفات طبية
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

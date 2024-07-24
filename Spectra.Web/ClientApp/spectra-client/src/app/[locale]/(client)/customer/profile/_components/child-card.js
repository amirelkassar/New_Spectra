'use client';
import { Avatar } from '@mantine/core';
import { useState } from 'react';

import Card from '@/components/card';
import ThreeDotsIcon from '@/assets/icons/three-dots';
import ArrowLeftMainGreen from '@/assets/icons/arrow-left-mainGreen';
import ArrowDownMainGreen from '@/assets/icons/arrow-down-main-green';
import StarGoldIcon from '@/assets/icons/starGold';
import Button from '@/components/button';
import clsx from 'clsx';

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
];
export const ChildCards = () => {
  const [selectedChild, setSelectedChild] = useState(0);

  return (
    <section className='mdl:flex gap-8 my-8'>
      <div className='flex shrink-0 gap-x-4 overflow-x-auto mdl:block mdl:overflow-hidden mdl:space-y-3 bg-white max-h-[781px] overflow-y-scroll'>
        {data.map((data) => (
          <Child
            key={'child_info' + data.id}
            {...data}
            child={selectedChild}
            setChild={setSelectedChild}
          />
        ))}
      </div>

      <ChildDetails {...data[selectedChild]} />
    </section>
  );
};

const Child = ({
  avatar = '',
  fullname = '',
  diagnosis = '',
  id,
  child,
  setChild,
}) => {
  console.log(child === id);
  return (
    <Card
      size='sm'
      className={clsx(
        'transition group hover:bg-blueLight min-w-[220px] mdl:w-full mdl:py-10 !px-3 mdl:!px-8 min-h-20',
        child === id && 'bg-blueLight'
      )}
    >
      {/* MAIN INFO */}
      <div
        onClick={() => setChild(id)}
        role='button'
        className='mdl:space-y-4 flex items-start mdl:block gap-x-2'
      >
        <Avatar
          variant='filled'
          src={avatar || ''}
          className='size-[25px] mdl:size-[58px] min-w-max rounded-full inline-flex'
          color='cyan'
          radius='xl'
        >
          {fullname?.slice(0, 2)?.toUpperCase()}
        </Avatar>

        <div className='text-black text-xs mdl:text-base w-fit'>
          <h4 className='font-bold w-fit'>الطفل / {fullname}</h4>
          <p className='w-fit'>{diagnosis}</p>
        </div>
      </div>

      {/* ACTION ICONS */}
      <span className='absolute size-5 mdl:size-9 bg-transparent rounded-full flex items-center justify-center cursor-pointer top-3 end-1 mdl:top-3 mdl:end-3'>
        <ThreeDotsIcon />
      </span>
      <span className='absolute bottom-3 end-3 bg-blueLight group-hover:bg-white rounded-full size-9 items-center justify-center hidden mdl:flex'>
        <ArrowLeftMainGreen />
      </span>
      <span className='absolute bottom-3 end-1 bg-blueLight group-hover:bg-white rounded-full size-5 items-center justify-center flex mdl:hidden'>
        <ArrowDownMainGreen />
      </span>
    </Card>
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
  return (
    <Card className='space-y-10 mdl:py-9 my-8 mdl:my-0'>
      {/* CHILD INFO */}
      <div className='flex mdl:gap-x-10 gap-x-2'>
        {/* CHILD AVATAR */}
        <Avatar
          variant='filled'
          src={avatar || ''}
          className='size-[34px] mdl:size-[58px] min-w-max rounded-full inline-flex shrink-0'
          color='cyan'
          radius='xl'
        >
          {fullname?.slice(0, 2)?.toUpperCase()}
        </Avatar>

        <div className='space-y-10'>
          {/* NAME */}
          <h4 className='font-bold w-fit mt-1 mdl:mt-0'>الطفل / {fullname}</h4>

          {/* INFO */}
          <ul className='text-black flex-wrap gap-10 flex-1 *:flex-[1] *:flex-shrink-0 *:basis-[30%] flex'>
            <li>
              <span>النوع</span>
              <span className='font-bold block mt-5'>{gender}</span>
            </li>
            <li>
              <span>السن</span>
              <span className='font-bold block mt-5'>{age}</span>
            </li>
            <li>
              <span>التشخيص</span>
              <span className='font-bold block mt-5'>{diagnosis}</span>
            </li>
            <li>
              <span>عدد الجلسات</span>
              <span className='font-bold block mt-5'>{sessions}</span>
            </li>
            <li>
              <span>عدد الكشوفات</span>
              <span className='font-bold block mt-5'>{reports}</span>
            </li>
            <li>
              <span>عدد المتابعات</span>
              <span className='font-bold block mt-5'>{followUps}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* TREATMENT TEAM */}
      <div className='space-y-10'>
        {/* Heading */}
        <h4 className='font-bold text-base mdl:text-medium'>الفريق المعالج</h4>

        {/* TEAM */}
        <div className='flex gap-7 max-w-full overflow-x-auto pb-5'>
          {treatmentTeam?.map((doc, index) => (
            <div
              key={'child-treatment-team' + index}
              className={
                'flex items-center flex-col mdl:flex-row gap-4 p-4 border-2 border-blueLight rounded-xl shrink-0'
              }
            >
              <Avatar
                variant='filled'
                src={doc?.avatar || ''}
                className='size-[71px] rounded-full mdl:rounded-md mdl:size-[82px] min-w-max inline-flex shrink-0'
                color='cyan'
                radius='md'
              >
                {doc.name?.slice(0, 2)?.toUpperCase()}
              </Avatar>
              <div className='text-black text-xs mdl:text-base space-y-1'>
                <h5 className='font-bold'>{doc?.name}</h5>
                <p>{doc?.profession}</p>
                <p className='text-grayDark rounded-full border border-grayDark w-fit font-bold flex items-center justify-center gap-x-1 px-2'>
                  {doc?.rate}
                  <StarGoldIcon className='size-3' />
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ACTION BUTTONS */}
        <div className='flex *:flex-1 gap-5 font-bold text-sm mdl:text-medium text-black flex-col mdl:flex-row'>
          <Button>مرفقات</Button>
          <Button>وصفات طبية</Button>
        </div>
      </div>
    </Card>
  );
};

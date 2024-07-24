import { Avatar } from '@mantine/core';

import Card from '@/components/card';
import { Heading } from '../../../_components/heading';
import { AddChild } from './add-child';
import Button from '@/components/button';
import EditIcon from '@/assets/icons/edit';

export const ProfileInfo = () => {
  const data = {
    // Cspell: disable
    fullname: 'محمد محمد علي',
    email: 'mohamed@gmail.com',
    avatar: '',
    id: 12345678902,
    country: 'المملكة العربية السعودية',
    city: 'الرياض',
    profession: 'مدير هيئة حكومية',
    childNo: 2,
    sessionsNo: 7,
    reportsNo: 5,
    // Cspell: enable
  };

  return (
    <Card>
      <Heading className='mdl:gap-x-9' label='ملفي' icon={<AddChild />} />
      <section className='my-8 mdl:flex mdl:items-center mdl:gap'>
        {/* CUSTOMER AVATAR, NAME AND EMAIL */}
        <div className='w-full mdl:w-auto mx-auto mdl:mx-0 text-center mdl:text-start text-black text-sm mdl:text-base space-y-3 mdl:space-y-5 pe-5'>
          {/* AVATAR */}
          <Avatar
            variant='filled'
            src={data.avatar || ''}
            className='size-[70px] mdl:size-[108px] rounded-full inline-flex'
            color='cyan'
            radius='xl'
          >
            {data.fullname}
          </Avatar>

          <div>
            {/* NAME */}
            <h3 className='font-bold'>{data.fullname}</h3>
            {/* EMAIL */}
            <p>{data.email}</p>
          </div>
          {/* EDIT BUTTON */}
          <Button variant='blueLight' className='!inline-flex'>
            <EditIcon />
            تعديل
          </Button>
        </div>

        {/* CUSTOMER INFO */}
        <ul className='text-black flex-wrap gap-10 flex-1 ps-5 border-s-2 border-grayLight *:flex-[1] *:flex-shrink-0 *:basis-[30%] hidden mdl:flex'>
          <li>
            <span>رقم الهوية</span>
            <span className='font-bold block mt-5'>{data.id}</span>
          </li>
          <li>
            <span>البلد</span>
            <span className='font-bold block mt-5'>{data.country}</span>
          </li>
          <li>
            <span>المدينة</span>
            <span className='font-bold block mt-5'>{data.city}</span>
          </li>
          <li>
            <span>الوظيفة</span>
            <span className='font-bold block mt-5'>{data.profession}</span>
          </li>
          <li>
            <span>عدد الاطفال</span>
            <span className='font-bold block mt-5'>{data.childNo}</span>
          </li>
          <li>
            <span>عدد الجلسات</span>
            <span className='font-bold block mt-5'>{data.sessionsNo}</span>
          </li>
          <li>
            <span>عدد الكشوفات</span>
            <span className='font-bold block mt-5'>{data.reportsNo}</span>
          </li>
        </ul>
      </section>
    </Card>
  );
};

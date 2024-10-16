import { Section } from '../../_components/section';

import ClockWhite from '@/assets/icons/clock-white';
import TherapyIcon from '@/assets/icons/therapy';
import TeamIcon from '@/assets/icons/team';
import HoldingHands from '@/assets/icons/holding-hands';
import CalenderIcon from '@/assets/icons/calender';
import Gear from '@/assets/icons/gear';

const data = [
  {
    id: 1,
    title: 'تشخيص وعلاج سريع',
    content:
      'نلتزم بتقديم حلول طبية سريعة وفعالة لتوفير الوقت وتحسين النتائج.',
    icon: (
      <ClockWhite
        fill='black'
        className='mdl:size-12 size-8'
      />
    ),
  },
  {
    id: 2,
    title: 'خدمات متكاملة',
    content:
      'نقدم رعاية شاملة تتضمن التشخيص، العلاج، والمتابعة المستمرة لضمان أفضل النتائج.',
    icon: (
      <TherapyIcon
        fill='black'
        className='mdl:size-12 size-8'
      />
    ),
  },
  {
    id: 3,
    title: 'فريق طبي متخصص',
    content:
      'فريقنا الطبي يتكون من خبراء مختارين بعناية في مجال علاج التوحد وتأخر النمو وغيرها',
    icon: (
      <TeamIcon
        fill='black'
        className='mdl:size-12 size-8'
      />
    ),
  },
  {
    id: 4,
    title: 'تجربة مريحة للمرضى',
    content:
      'نوفر خدمات طبية مريحة وداعمة تناسب احتياجات المرضى وأسرهم.',
    icon: <HoldingHands className='mdl:size-12 size-8' />,
  },
  {
    id: 5,
    title: 'متابعة دورية دقيقة',
    content:
      'نضمن متابعة دقيقة ومستدامة لتطورات الحالات وتحسين العلاج.',
    icon: (
      <CalenderIcon
        fill='black'
        className='mdl:size-12 size-8'
      />
    ),
  },
  {
    id: 6,
    title: 'تقنيات حديثة',
    content:
      'نعتمد على أحدث التقنيات الطبية لتقديم خدمات متطورة وفعالة.',
    icon: <Gear className='mdl:size-12 size-8' />,
  },
];

export const WhatMakesUsSpecial = () => {
  return (
    <Section
      type='basic'
      heading='مايميزنا'
      id='what-makes-us-special'
      aria-labelledby='what-makes-us-special'
      aria-label='What makes us special'
    >
      <div className='grid grid-cols-2 mdl:grid-cols-3 gap-5'>
        {data.map((item, i) => (
          <div
            key={i}
            className='text-center text-sm mdl:text-medium p-3 text-black'
          >
            <span className='block mb-2 mx-auto w-fit'>
              {item.icon}
            </span>
            <h3 className='font-bold'>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

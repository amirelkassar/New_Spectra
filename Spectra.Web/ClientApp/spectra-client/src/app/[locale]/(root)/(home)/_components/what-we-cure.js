import Image from 'next/image';

import ThreeDotsRowIcon from '@/assets/icons/three-dots-row';
import { Section } from '../../_components/section';
import IMG_1 from '@/assets/images/what-we-cure/1.png';
import IMG_2 from '@/assets/images/what-we-cure/2.png';
import IMG_3 from '@/assets/images/what-we-cure/3.png';
import IMG_4 from '@/assets/images/what-we-cure/4.png';
import IMG_5 from '@/assets/images/what-we-cure/5.png';
import IMG_6 from '@/assets/images/what-we-cure/6.png';
import IMG_7 from '@/assets/images/what-we-cure/7.png';
import ArrowLeft from '@/assets/icons/arrow-left';
import ArrowRightIcon from '@/assets/icons/arrow-right';

export const WhatWeCure = () => {
  const data = [
    {
      image: IMG_1,
      label: 'اضراب طيف التوحد',
    },
    {
      image: IMG_2,
      label: 'مشاكل اللغة والتواصل',
    },
    {
      image: IMG_3,
      label: 'فرط الحركة و نقص الانتباه',
    },
    {
      image: IMG_4,
      label: 'الاعاقة الذهنية والجسدية',
    },
    {
      image: IMG_5,
      label: 'العناد والعنف والخوف والقلق',
    },
    {
      image: IMG_6,
      label: 'صعوبات التعلم',
    },
    {
      image: IMG_7,
      label: 'التأخر النمائى',
    },
  ];
  return (
    <Section
      aria-label='What We Cure'
      id='what-we-cure'
      aria-labelledby='what-we-cure'
      heading='ماذا نعالج'
    >
      <div className='grid grid-cols-4 gap-y-5'>
        {data.map((item, index) => (
          <div
            key={index + 1354942}
            className='flex flex-col items-center gap-y-4 text-center relative'
          >
            <Image
              src={item.image}
              alt={item.label}
              width={150}
              height={150}
              className='w-[150px] h-[150px] object-cover rounded-full'
            />
            <p className='text-black text-[20px] font-Regular leading-[30px]'>
              {item.label}
            </p>
            <div className='absolute w-[42px] h-[42px] rounded-full flex items-center justify-center bg-greenLight bottom-[55px] left-[40px]'>
              <ArrowRightIcon />
            </div>
          </div>
        ))}
        <div className='flex flex-col items-center gap-y-4'>
          <div className='w-[150px] h-[150px] bg-greenLight flex items-center justify-center rounded-full'>
            <ThreeDotsRowIcon />
          </div>
          <div className='flex items-center gap-x-5'>
            <span className='text-black text-[20px] font-Regular leading-[30px]'>
              اخري
            </span>
            <ArrowLeft />
          </div>
        </div>
      </div>
    </Section>
  );
};

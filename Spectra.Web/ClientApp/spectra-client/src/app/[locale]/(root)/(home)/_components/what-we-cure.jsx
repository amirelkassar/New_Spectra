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
import { ArrowRightIcon } from '@/assets/icons/arrow-right';

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

export const WhatWeCure = ({ className = '' }) => {
  return (
    <Section
      aria-label='What We Cure'
      id='what-we-cure'
      aria-labelledby='what-we-cure'
      heading='ماذا نعالج'
      className={className}
    >
      <div className='grid grid-cols-3 lg:grid-cols-4 gap-y-5'>
        {data.map((item, index) => (
          <div
            key={index + 1354942}
            className='flex flex-col items-center gap-y-4 text-center'
          >
            <div className='w-fit relative'>
              <Image
                src={item.image}
                alt={item.label}
                width={150}
                height={150}
                className='size-20 mdl:size-36 object-center object-cover rounded-full'
              />

              <span className='absolute size-6 mdl:size-10 rounded-full flex items-center justify-center bg-greenLight bottom-0 end-0'>
                <ArrowRightIcon className='size-4 mdl:size-6' />
              </span>
            </div>
            <p className='text-black text-base mdl:text-medium'>
              {item.label}
            </p>
          </div>
        ))}
        <div className='flex flex-col items-center gap-y-4'>
          <div className='size-20 mdl:size-36 bg-greenLight flex items-center justify-center rounded-full'>
            <ThreeDotsRowIcon className='w-6 mdl:w-11' />
          </div>
          <div className='flex items-center gap-x-3 text-black mdl:text-medium text-base'>
            <span>اخري</span>
            <span className='ltr:rotate-180 block text-2xl mdl:text-4xl'>
              &larr;
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
};

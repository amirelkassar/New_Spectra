import Image from 'next/image';

import { cn } from '@/lib/utils';
import { Section } from '../../_components/section';
import ClockWhite from '@/assets/icons/clock-white';
import MonitorWhite from '@/assets/icons/monitor-white';
import ToolsWhite from '@/assets/icons/tools-white';

const data = [
  {
    label:
      'فرقنا المتخصصة تصلك أينما كنت و في أسرع وقت ممكن',
    icon: (
      <ClockWhite
        fill='#10B0C1'
        className='size-9 shrink-0'
      />
    ),
  },
  {
    label: 'نستخدم أحدث الحلول التقنية بالطب الاتصالي',
    icon: (
      <MonitorWhite
        className='size-8 me-1 shrink-0'
        fill='#10B0C1'
      />
    ),
  },
  {
    label:
      'نعمل وفق أحدث الادوات العلمية و الممارسات المتبعة',
    icon: (
      <ToolsWhite
        className='size-8 me-1 shrink-0'
        fill='#10B0C1'
      />
    ),
  },
];

export const WeMakeSmile = () => {
  return (
    <Section
      aria-label='We Make Smile'
      aria-labelledby='we-make-smile'
      id='we-make-smile'
    >
      <div
        className={cn(
          'flex flex-col items-center justify-center gap-5 mdl:flex-row mdl:px-20'
        )}
      >
        <div className='flex-[0.65]'>
          <h2
            id='we-make-smile'
            className='text-base mdl:text-2xl mb-10 text-center'
          >
            سبيكترا .تصنع الابتسامة لطفلك
          </h2>

          <ul className='space-y-5 w-fit mx-auto'>
            {data.map((item) => (
              <li
                key={item.label}
                className='text-sm mdl:text-medium'
              >
                <span className='flex items-center gap-3'>
                  {item.icon}
                  <span>{item.label}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className='flex-[0.35] relative overflow-hidden'>
          <Image
            src={'/demo-baby-4.svg'}
            alt='about-us-img'
            priority={true}
            className='w-full h-full object-cover object-center'
            width={500}
            height={900}
          />
        </div>
      </div>
    </Section>
  );
};

import { Section } from '../../_components/section';
import ClockWhite from '@/assets/icons/clock-white';
import MonitorWhite from '@/assets/icons/monitor-white';
import ToolsWhite from '@/assets/icons/tools-white';

const data = [
  {
    icon: <ClockWhite className='size-7 mdl:size-12' />,
    text: 'فرقنا المتخصصة تصلك أينما كنت و في أسرع وقت ممكن',
  },
  {
    icon: <MonitorWhite className='size-5 mdl:size-11' />,
    text: 'نستخدم أحدث الحلول التقنية بالطب الاتصالي',
  },
  {
    icon: <ToolsWhite className='size-5 mdl:size-11' />,
    text: 'نعمل وفق أحدث الادوات العلمية و الممارسات المتبعة',
  },
];

export const Testimonials = () => {
  return (
    <div className='bg-blueLight pb-32'>
      <Section
        aria-label='Testimonials'
        aria-labelledby='testimonials'
        id='testimonials'
      >
        <div className='flex justify-between text-center items-center flex-col mdl:flex-row gap-5'>
          {data.map((item) => (
            <div className='space-y-3'>
              <span className='bg-greenMain rounded-full size-10 mdl:size-20 flex items-center justify-center mx-auto'>
                {item.icon}
              </span>
              <p className='font-bold max-w-56 text-sm mdl:text-base'>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

import ClockWhite from '@/assets/icons/clock-white';
import MonitorWhite from '@/assets/icons/monitor-white';
import ToolsWhite from '@/assets/icons/tools-white';

export const TESTIMONIALS = [
  {
    icon: (
      <ClockWhite className='size-7 mdl:size-12 text-white' />
    ),
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

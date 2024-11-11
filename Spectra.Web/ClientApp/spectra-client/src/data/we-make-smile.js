import ClockWhite from '@/assets/icons/clock-white';
import MonitorWhite from '@/assets/icons/monitor-white';
import ToolsWhite from '@/assets/icons/tools-white';

export const WE_MAKE_SMILE = {
  image: '/demo-baby-4.svg',
  list: [
    {
      label:
        'فرقنا المتخصصة تصلك أينما كنت و في أسرع وقت ممكن',
      icon: (
        <ClockWhite className='size-8 shrink-0 text-greenMain' />
      ),
    },
    {
      label: 'نستخدم أحدث الحلول التقنية بالطب الاتصالي',
      icon: (
        <MonitorWhite
          className='size-8 shrink-0'
          fill='#10B0C1'
        />
      ),
    },
    {
      label:
        'نعمل وفق أحدث الادوات العلمية و الممارسات المتبعة',
      icon: (
        <ToolsWhite
          className='size-8 shrink-0'
          fill='#10B0C1'
        />
      ),
    },
  ],
};

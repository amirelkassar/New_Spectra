import ClockWhite from '@/assets/icons/clock-white';
import MonitorWhite from '@/assets/icons/monitor-white';
import ToolsWhite from '@/assets/icons/tools-white';

export const WE_MAKE_SMILE = {
  title: {
    ar: 'سبيكترا تصنع الابتسامة لطفلك',
    en: 'Spectra Creates Smiles for Your Child',
  },
  image: '/demo-baby-4.svg',
  list: [
    {
      label: {
        ar: 'فرقنا المتخصصة تصلك أينما كنت و في أسرع وقت ممكن',
        en: 'Our specialized teams reach you wherever you are as quickly as possible',
      },
      icon: <ClockWhite className='size-8 shrink-0 text-greenMain' />,
    },
    {
      label: {
        ar: 'نستخدم أحدث الحلول التقنية بالطب الاتصالي',
        en: 'We use the latest technological solutions in telemedicine',
      },
      icon: (
        <MonitorWhite className='size-8 shrink-0' fill='#10B0C1' />
      ),
    },
    {
      label: {
        ar: 'نعمل وفق أحدث الادوات العلمية و الممارسات المتبعة',
        en: 'We work according to the latest scientific tools and practices',
      },
      icon: <ToolsWhite className='size-8 shrink-0' fill='#10B0C1' />,
    },
  ],
};

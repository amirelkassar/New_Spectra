import ScreeningIcon from '@/assets/icons/screening';
import { Section } from '../../_components/section';
import TeamIcon from '@/assets/icons/team';
import FollowUpIcon from '@/assets/icons/followup';
import HandshakeIcon from '@/assets/icons/handshake';

const data = [
  {
    color: 'bg-[#EB4335]/[0.18]',
    icon: <ScreeningIcon className='size-6 mdl:size-11' />,
    label: 'خدمة الكشف المبكر الالكتروني',
  },
  {
    color: 'bg-[#10B0C1]/[0.18]',
    icon: <TeamIcon className='size-6 mdl:size-11' />,
    label: `خدمات التشخيص الطبي 
    عبر فرق متعددة التخصصات`,
  },
  {
    color: 'bg-[#8A22A0]/[0.18]',
    icon: <FollowUpIcon className='size-6 mdl:size-11' />,
    label: 'خدمات المتابعة الدوائية',
  },
  {
    color: 'bg-[#6FC1BF]/[0.18]',
    icon: <HandshakeIcon className='size-6 mdl:size-11' />,
    label: 'خدمات الاستشارات التخصصية',
  },
];

export const Services = () => {
  return (
    <Section
      aria-label='Services'
      aria-labelledby='services'
      id='services'
      heading='الخدمات المقدمة'
      type='more'
      btnLabel='تصفح جميع الخدمات'
    >
      <div className='grid grid-cols-2 mdl:grid-cols-4 gap-5'>
        {data.map((item) => (
          <div
            key={item.label}
            className='flex flex-col items-center gap-y-4 text-center relative'
          >
            <div
              className={`size-16 mdl:size-20 flex items-center justify-center rounded-full ${item.color}`}
            >
              {item.icon}
            </div>
            <h3 className='text-sm mdl:text-medium text-black font-bold'>
              {item.label}
            </h3>
          </div>
        ))}
      </div>
    </Section>
  );
};

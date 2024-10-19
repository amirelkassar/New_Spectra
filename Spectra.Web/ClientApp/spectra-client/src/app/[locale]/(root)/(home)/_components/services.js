import ScreeningIcon from '@/assets/icons/screening';
import { Section } from '../../_components/section';
import TeamIcon from '@/assets/icons/team';
import FollowUpIcon from '@/assets/icons/followup';
import HandshakeIcon from '@/assets/icons/handshake';

export const Services = () => {
  const data = [
    {
      color: 'bg-[#EB4335]/[0.18]',
      icon: <ScreeningIcon />,
      label: 'خدمة الكشف المبكر الالكتروني',
    },
    {
      color: 'bg-[#10B0C1]/[0.18]',
      icon: <TeamIcon />,
      label: `خدمات التشخيص الطبي 
      عبر فرق متعددة التخصصات`,
    },
    {
      color: 'bg-[#8A22A0]/[0.18]',
      icon: <FollowUpIcon />,
      label: 'خدمات المتابعة الدوائية',
    },
    {
      color: 'bg-[#6FC1BF]/[0.18]',
      icon: <HandshakeIcon />,
      label: 'خدمات الاستشارات التخصصية',
    },
  ];
  return (
    <Section
      aria-label='Services'
      aria-labelledby='services'
      id='services'
      heading='الخدمات المقدمة'
      type='more'
      btnLabel='تصفح جميع الخدمات'
    >
      <div className='grid grid-cols-4 gap-5'>
        {data.map((item, index) => (
          <div
            key={index + 51353489}
            className='flex flex-col items-center gap-y-4 text-center relative'
          >
            <div
              className={`w-[90px] h-[90px] flex items-center justify-center rounded-full ${item.color}`}
            >
              {item.icon}
            </div>
            <h3 className='text-[20px] font-bold text-black leading-[30px]'>
              {item.label}
            </h3>
          </div>
        ))}
      </div>
    </Section>
  );
};

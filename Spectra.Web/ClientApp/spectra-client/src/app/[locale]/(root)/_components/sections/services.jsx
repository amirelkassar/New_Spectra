import ScreeningIcon from '@/assets/icons/screening';
import { Section } from '../ui/section';
import TeamIcon from '@/assets/icons/team';
import FollowUpIcon from '@/assets/icons/followup';
import HandshakeIcon from '@/assets/icons/handshake';
import ROUTES from '@/routes';
import { ServiceCard } from '@/components/services';

const data = [
  {
    color: 'bg-[#EB4335]/[0.18]',
    icon: <ScreeningIcon className='size-6 mdl:size-11' />,
    label: 'خدمة الكشف المبكر الالكتروني',
  },
  {
    color: 'bg-[#10B0C1]/[0.18]',
    icon: (
      <TeamIcon className='size-6 mdl:size-11 text-greenMain' />
    ),
    label: `خدمات التشخيص الطبي 
    عبر فرق متعددة التخصصات`,
  },
  {
    color: 'bg-[#8A22A0]/[0.18]',
    icon: (
      <FollowUpIcon className='size-6 mdl:size-11 text-purple' />
    ),
    label: 'خدمات المتابعة الدوائية',
  },
  {
    color: 'bg-[#6FC1BF]/[0.18]',
    icon: (
      <HandshakeIcon className='size-6 mdl:size-11 text-greenMain' />
    ),
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
      btnHref={`${ROUTES.ROOT.SERVICES.HOME}/#services`}
    >
      <div className='grid grid-cols-2 mdl:grid-cols-4 gap-5'>
        {data.map((item) => (
          <Service key={item.label} {...item} />
        ))}
      </div>
    </Section>
  );
};

const Service = ({ icon, label, color }) => {
  return (
    <ServiceCard className='border-none'>
      <ServiceCard.Icon className={color}>
        {icon}
      </ServiceCard.Icon>
      <ServiceCard.Label>{label}</ServiceCard.Label>
    </ServiceCard>
  );
};

import BarsIcon from '@/assets/icons/bars';
import CalenderIcon from '@/assets/icons/calender';
import VideoOutline from '@/assets/icons/video-outline';

export const STATISTICS = [
  {
    label: 'دقيقة من الاستشارات والإرشاد',
    value: `+${(60_000).toLocaleString('en-US')}`,
  },
  {
    label: 'مستفيد ومستفيدة',
    value: `+${(500_000).toLocaleString('en-US')}`,
  },
  {
    label: 'رضا المستفيدين عن جودة الاستشارة',
    value: 4.8,
  },
];

export const USAGE_STATISTICS = [
  {
    id: 'prescriptions',
    label: 'الوصفات الطبية',
    number: 1002,
    percentage: 40,
  },
  {
    id: 'sessions',
    label: 'الجلسات',
    number: 1002,
    percentage: 40,
  },
  {
    id: 'appointments',
    label: 'المواعيد',
    number: 1250,
    percentage: -10,
  },
];

export const USAGE_STATISTICS_ICONS = {
  prescriptions: {
    icon: <BarsIcon className='size-4 mdl:size-7' />,
    color: 'bg-red/10',
  },
  sessions: {
    icon: <VideoOutline className='size-5 mdl:size-9 text-purple' />,
    color: 'bg-purple/10',
  },
  appointments: {
    icon: <CalenderIcon className='size-4 mdl:size-7' />,
    color: 'bg-greenMain/10',
  },
};

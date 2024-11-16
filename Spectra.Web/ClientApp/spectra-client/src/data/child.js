// ICONS
import Child from '@/assets/icons/child';
import NominationsIcon from '@/assets/icons/Nominations';
import HandHeartIcon from '@/assets/icons/hand-heart';
import RumorsIcon from '@/assets/icons/rumors';
import ReportsIcon from '@/assets/icons/reportsIcon';
import FileOutline from '@/assets/icons/file-outline';
import Stethoscope from '@/assets/icons/stethoscope';

export const CHILDS = [
  {
    id: '1',
    avatar: '',
    name: 'محمد عبدالله الشيخ',
    diagnosis: 'طيف التوحد',
  },
  {
    id: '2',
    avatar: '',
    name: 'احمد عبدالله الشيخ',
    diagnosis: 'فرط الحركة',
  },
  {
    id: '3',
    avatar: '',
    name: 'علي محمد علي',
    diagnosis: 'فرط الحركة',
  },
];

export const CHILD_TABS = [
  {
    key: 'child-info',
    label: 'بيانات الطفل',
    icon: (
      <IconWrapper>
        <Child className='size-4 mdl:size-5' />
      </IconWrapper>
    ),
  },
  {
    key: 'sessions',
    label: 'الجلسات',
    icon: (
      <IconWrapper>
        <Stethoscope className='size-4 mdl:size-5' />
      </IconWrapper>
    ),
  },
  {
    key: 'tests',
    label: 'التحاليل الخارجية',
    icon: (
      <IconWrapper>
        <NominationsIcon className='size-4 mdl:size-5' />
      </IconWrapper>
    ),
  },
  {
    key: 'x-ray',
    label: 'الاشعات الخارجية',
    icon: (
      <IconWrapper>
        <RumorsIcon className='size-4 mdl:size-5' />
      </IconWrapper>
    ),
  },
  {
    key: 'prescriptions',
    label: 'الوصفات الطبية',
    icon: (
      <IconWrapper>
        <HandHeartIcon className='size-4 mdl:size-5' />
      </IconWrapper>
    ),
  },
  {
    key: 'reports',
    label: 'التقارير',
    icon: (
      <IconWrapper>
        <ReportsIcon className='size-4 mdl:size-5 lg:fill-greenMain' />
      </IconWrapper>
    ),
  },
  {
    key: 'attachments',
    label: 'الملفات المرفقة',
    icon: (
      <IconWrapper>
        <FileOutline className='size-4 mdl:size-5' />
      </IconWrapper>
    ),
  },
];

function IconWrapper({ children }) {
  return (
    <span className='lg:size-8 lg:bg-blueLight lg:rounded-md lg:flex lg:items-center lg:justify-center lg:text-greenMain shrink-0'>
      {children}
    </span>
  );
}

import FileOutline from '@/assets/icons/file-outline';
import HandHeartIcon from '@/assets/icons/hand-heart';
import NominationsIcon from '@/assets/icons/Nominations';
import ReportsIcon from '@/assets/icons/reportsIcon';
import RumorsIcon from '@/assets/icons/rumors';

export const CLIENT_VIDEO_NAV = [
  {
    key: 'recommendations',
    label: 'الترشيحات',
    icon: <NominationsIcon className='size-4 mdl:size-6' />,
  },
  {
    key: 'tests-scans',
    label: 'التحاليل و الاشعات الخارجية',
    icon: <RumorsIcon className='size-4 mdl:size-6' />,
  },
  {
    key: 'prescriptions',
    label: 'الوصفات الطبية',
    icon: <HandHeartIcon className='size-4 mdl:size-6' />,
  },
  {
    key: 'reports',
    label: 'التقارير',
    icon: (
      <ReportsIcon className='size-4 mdl:size-6 fill-greenMain' />
    ),
  },
  {
    key: 'files',
    label: 'الملفات',
    icon: <FileOutline className='size-4 mdl:size-6' />,
  },
];

'use client';

import { useState } from 'react';

import { TabsCard } from '../../../_components/tabs-card';
import { RenderChild } from './child';

// ICONS
import Child from '@/assets/icons/child';
import NominationsIcon from '@/assets/icons/Nominations';
import HandHeartIcon from '@/assets/icons/hand-heart';
import RumorsIcon from '@/assets/icons/rumors';
import ReportsIcon from '@/assets/icons/reportsIcon';
import FileOutline from '@/assets/icons/file-outline';
import Stethoscope from '@/assets/icons/stethoscope';

const TABS = [
  {
    key: 'child-info',
    label: 'بيانات الطفل',
    icon: (
      <IconWrapper>
        <Child className='size-3 mdl:size-4' />
      </IconWrapper>
    ),
  },
  {
    key: 'sessions',
    label: 'الجلسات',
    icon: (
      <IconWrapper>
        <Stethoscope className='size-3 mdl:size-4' />
      </IconWrapper>
    ),
  },
  {
    key: 'tests',
    label: 'التحاليل الخارجية',
    icon: (
      <IconWrapper>
        <NominationsIcon className='size-3 mdl:size-4' />
      </IconWrapper>
    ),
  },
  {
    key: 'x-ray',
    label: 'الاشعات الخارجية',
    icon: (
      <IconWrapper>
        <RumorsIcon className='size-3 mdl:size-4' />
      </IconWrapper>
    ),
  },
  {
    key: 'prescriptions',
    label: 'الوصفات الطبية',
    icon: (
      <IconWrapper>
        <HandHeartIcon className='size-3 mdl:size-4' />
      </IconWrapper>
    ),
  },
  {
    key: 'reports',
    label: 'التقارير',
    icon: (
      <IconWrapper>
        <ReportsIcon className='size-3 mdl:size-4 lg:fill-greenMain' />
      </IconWrapper>
    ),
  },
  {
    key: 'attachments',
    label: 'الملفات المرفقة',
    icon: (
      <IconWrapper>
        <FileOutline className='size-3 mdl:size-4' />
      </IconWrapper>
    ),
  },
];

export const ChildPortfolio = () => {
  const [tab, setTab] = useState(TABS[0].key);

  return (
    <section className='lg:grid lg:grid-cols-7 lg:gap-5 space-y-10 lg:space-y-0'>
      <TabsCard tabs={TABS} tab={tab} setTab={setTab} />

      <div className='col-span-5'>
        <RenderChild tabKey={tab} />
      </div>
    </section>
  );
};

function IconWrapper({ children }) {
  return (
    <div className='lg:size-7 lg:bg-blueLight lg:rounded-md lg:flex lg:items-center lg:justify-center lg:text-greenMain'>
      {children}
    </div>
  );
}

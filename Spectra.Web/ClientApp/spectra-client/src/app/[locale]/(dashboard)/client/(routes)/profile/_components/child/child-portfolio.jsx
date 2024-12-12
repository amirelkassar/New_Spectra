'use client';

import { useSearchParams } from 'next/navigation';

import { CHILD_TABS } from '@/data';
import {
  TabsCard,
  Section,
} from '@/app/[locale]/(dashboard)/client/_components/ui';
import { RenderContent } from './render-content';

export const ChildPortfolio = () => {
  const tab = useSearchParams()?.get('tab') || CHILD_TABS[0].key;

  return (
    <Section
      id='child-portfolio'
      className='lg:grid lg:grid-cols-12 lg:gap-5 space-y-5 lg:space-y-0'
    >
      <TabsCard tabs={CHILD_TABS} defaultTab={tab} />

      <div className='col-span-9'>
        <RenderContent tabKey={tab} />
      </div>
    </Section>
  );
};

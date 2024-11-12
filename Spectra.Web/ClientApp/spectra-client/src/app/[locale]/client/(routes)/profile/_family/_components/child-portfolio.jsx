'use client';

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

import { TabsCard, Section } from '@/client/_components/ui';
import { RenderChild } from './child';
import { CHILD_TABS } from '@/data';

export const ChildPortfolio = () => {
  const searchParamsTab = useSearchParams()?.get('tab');
  const [tab, setTab] = useState(
    searchParamsTab || CHILD_TABS[0].key
  );

  return (
    <Section
      id='child-portfolio'
      className='lg:grid lg:grid-cols-12 lg:gap-5 space-y-5 lg:space-y-0'
    >
      <TabsCard
        tabs={CHILD_TABS}
        tab={tab}
        setTab={setTab}
      />

      <div className='col-span-9'>
        <RenderChild tabKey={tab} />
      </div>
    </Section>
  );
};

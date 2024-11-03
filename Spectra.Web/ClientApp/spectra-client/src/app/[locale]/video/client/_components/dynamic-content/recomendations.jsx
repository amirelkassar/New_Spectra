'use client';

import { useState } from 'react';
import { Tabs } from '@mantine/core';
import { PackageCardItem } from '@/client/_components/packages';
import { servicesData } from '@/lib/demoData';
import { ServiceCard } from '@/client/_components/services';

export const Recomendations = () => {
  const [activeTab, setActiveTab] = useState('packages');

  return (
    <Tabs
      color='#10B0C1'
      value={activeTab}
      onChange={setActiveTab}
      classNames={{
        tab: 'border-b-[3px] text-sm lgl:text-xl aria-selected:font-bold',
        panel:
          'flex flex-wrap justify-start gap-5 *:shrink-0 mt-10 lgl:justify-center',
      }}
    >
      <Tabs.List grow>
        <Tabs.Tab value='packages'>الباقات</Tabs.Tab>
        <Tabs.Tab value='services'>الخدمات</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value='packages'>
        <Package />
        <Package />
        <Package />
      </Tabs.Panel>
      <Tabs.Panel value='services'>
        {servicesData.slice(1, 3).map((service, index) => (
          <Service key={index} data={service} />
        ))}
      </Tabs.Panel>
    </Tabs>
  );
};

const Package = () => {
  return (
    <PackageCardItem className='lgl:max-w-56 mdl:w-fit mdl:max-w-full lgl:w-full'>
      <PackageCardItem.Title className='mdl:text-sm lgl:text-base'>
        الباقة المتميزة
      </PackageCardItem.Title>

      <PackageCardItem.Price className='mdl:text-2xl lgl:text-4xl'>
        $100.00
      </PackageCardItem.Price>

      <PackageCardItem.Button className='mdl:text-sm lgl:text-base'>
        احجز الان
      </PackageCardItem.Button>
    </PackageCardItem>
  );
};

const Service = ({ data }) => {
  return (
    <ServiceCard className='max-w-56' data={data}>
      <ServiceCard.Icon />
      <ServiceCard.Body>
        <ServiceCard.Label className='mdl:text-sm lgl:text-xl' />
      </ServiceCard.Body>
      <ServiceCard.Button className='mdl:text-sm lgl:text-xl'>
        احجز الان
      </ServiceCard.Button>
    </ServiceCard>
  );
};

'use client';

// Import necessary hooks and components from React and Mantine
import { useState } from 'react';
import { Tabs } from '@mantine/core';
import { PackageCardItem } from '@/components/packages';
import {
  servicesData,
  SERVICESICONS,
} from '@/lib/demoData';
import { ServiceCard } from '@/components/services';

// Main component for displaying recommendations
export const Recomendations = () => {
  // State to manage the active tab (either 'packages' or 'services')
  const [activeTab, setActiveTab] = useState('packages');

  return (
    <Tabs
      color='#10B0C1' // Set the color for the tabs
      value={activeTab} // Current active tab
      onChange={setActiveTab} // Function to change the active tab
      classNames={{
        tab: 'border-b-[3px] text-sm lgl:text-xl aria-selected:font-bold', // Styles for the tabs
        panel:
          'flex flex-wrap justify-center sml:justify-start gap-5 *:shrink-0 mt-10 lgl:justify-center', // Styles for the tab panels
      }}
    >
      <Tabs.List grow>
        {/* Tab for packages */}
        <Tabs.Tab value='packages'>الباقات</Tabs.Tab>
        {/* Tab for services */}
        <Tabs.Tab value='services'>الخدمات</Tabs.Tab>
      </Tabs.List>

      {/* Panel for packages tab */}
      <Tabs.Panel value='packages'>
        <Package /> {/* Render a package component */}
        <Package /> {/* Render another package component */}
        <Package /> {/* Render another package component */}
      </Tabs.Panel>

      {/* Panel for services tab */}
      <Tabs.Panel value='services'>
        {/* Map through servicesData to display selected services */}
        {servicesData.slice(1, 3).map((service) => (
          <Service key={service?.label} {...service} /> // Render service component for each service
        ))}
      </Tabs.Panel>
    </Tabs>
  );
};

// Component to display a package
const Package = () => {
  return (
    <PackageCardItem className='2xl:max-w-48 mdl:w-fit mdl:max-w-full lgl:w-full'>
      <PackageCardItem.Title className='mdl:text-sm lgl:text-base'>
        الباقة المتميزة {/* Title of the package */}
      </PackageCardItem.Title>

      <PackageCardItem.Price className='mdl:text-2xl lgl:text-4xl'>
        $100.00 {/* Price of the package */}
      </PackageCardItem.Price>

      <PackageCardItem.Button className='mdl:text-sm lgl:text-base'>
        احجز الان {/* Button to book the package */}
      </PackageCardItem.Button>
    </PackageCardItem>
  );
};

// Component to display a service
const Service = ({ label, id }) => {
  return (
    <ServiceCard className='max-w-44 lgl:max-w-56 2xl:max-w-48'>
      <ServiceCard.Icon
        style={{
          backgroundColor:
            SERVICESICONS[id]?.bg || SERVICESICONS[1]?.bg,
          color:
            SERVICESICONS[id]?.color ||
            SERVICESICONS[1]?.color,
        }}
      >
        {SERVICESICONS[id]?.icon || SERVICESICONS[1]?.icon}
      </ServiceCard.Icon>

      <ServiceCard.Body className='block'>
        <ServiceCard.Label className='mdl:text-sm lgl:text-xl'>
          {label}
        </ServiceCard.Label>
      </ServiceCard.Body>
      <ServiceCard.Button className='mdl:text-sm lgl:text-xl'>
        احجز الان
      </ServiceCard.Button>
    </ServiceCard>
  );
};

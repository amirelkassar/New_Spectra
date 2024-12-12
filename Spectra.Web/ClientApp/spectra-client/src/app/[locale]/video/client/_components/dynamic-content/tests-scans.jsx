'use client';

// Import necessary hooks and components from React and Mantine
import { useState } from 'react';
import { Tabs } from '@mantine/core';
import { ListCheckMark } from '@/app/[locale]/(dashboard)/client/_components/ui';

const DATA = [
  'الأشعة السينية x-ray',
  'الموجات فوق الصوتية (Ultrasonic)',
  'الأشعة المقطعية بالكمبيوتر (CT SCAN).',
];

// Main component for displaying recommendations
export const TestsScans = () => {
  // State to manage the active tab (either 'tests' or 'scans')
  const [activeTab, setActiveTab] = useState('tests');

  return (
    <Tabs
      color='#10B0C1' // Set the color for the tabs
      value={activeTab} // Current active tab
      onChange={setActiveTab} // Function to change the active tab
      classNames={{
        tab: 'border-b-[3px] text-sm lgl:text-xl aria-selected:font-bold', // Styles for the tabs
        panel:
          'flex flex-wrap justify-start gap-5 *:shrink-0 mt-10 lgl:justify-center', // Styles for the tab panels
      }}
    >
      <Tabs.List grow>
        {/* Tab for tests */}
        <Tabs.Tab value='tests'>التحاليل</Tabs.Tab>
        {/* Tab for scans */}
        <Tabs.Tab value='scans'>الاشعات</Tabs.Tab>
      </Tabs.List>

      {/* Panel for tests tab */}
      <Tabs.Panel value='tests'>
        <Tests data={DATA} />
      </Tabs.Panel>

      {/* Panel for scans tab */}
      <Tabs.Panel value='scans'>
        <Scans data={DATA} />
      </Tabs.Panel>
    </Tabs>
  );
};

const Tests = ({ data = [] }) => {
  return <List data={data} />;
};

const Scans = ({ data = [] }) => {
  return <List data={data} />;
};

const List = ({ data = [] }) => {
  return (
    <ul className='lgl:ps-12'>
      {data?.map((item, i) => (
        <ListCheckMark
          key={i}
          className='mdl:ps-6 lgl:ps-8 mdl:text-xs lgl:text-base lgl:max-w-[90%] mdl:py-2'
        >
          {item}
        </ListCheckMark>
      ))}
    </ul>
  );
};

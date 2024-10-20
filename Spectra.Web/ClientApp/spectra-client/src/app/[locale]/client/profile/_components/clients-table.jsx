'use client';
import FilterIcon from '@/assets/icons/filter';
import Card from '@/components/card';
import { TabsFilter } from '../../_components/tabs-filter';
import { useState } from 'react';
import { DataTable } from '@/components/data-table';
import { columns as doctorsColumns } from './doctors-table-columns';
import { columns as clientsColumns } from './clients-table-columns';
import {
  ClientsData,
  MedicalTeamData,
} from '@/lib/demoData';
import UploadButton from '@/components/buttons/upload-button';

export const ClientsTable = () => {
  const [filter, setFilter] = useState('الاطباء');
  return (
    <Card className='space-y-5'>
      {/* FILTER AND UPLOAD */}
      <div className='flex flex-col lg:flex-row lg:items-center gap-5'>
        <div className='flex items-center gap-3'>
          <FilterIcon />
          <span className='font-bold text-xs lg:text-base text-black'>
            فلتر بالنوع
          </span>
        </div>

        <div className='flex flex-1 items-center justify-between'>
          <TabsFilter
            className='lg:w-full'
            setTab={setFilter}
            tab={filter}
            data={[
              {
                label: 'الاطباء',
                icon: null,
              },
              {
                label: 'العملاء',
                icon: null,
              },
            ]}
          />
          <div className='shrink-0'>
            <UploadButton className='lg:min-w-36 py-1 lg:py-2' />
          </div>
        </div>
      </div>

      {/* TABLE DATA */}
      <div>
        {filter === 'الاطباء' && (
          <DataTable
            columns={doctorsColumns}
            data={MedicalTeamData}
          />
        )}

        {filter === 'العملاء' && (
          <DataTable
            columns={clientsColumns}
            data={ClientsData}
          />
        )}
      </div>
    </Card>
  );
};

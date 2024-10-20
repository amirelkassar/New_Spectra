'use client';
import Card from '@/components/card';
import { useState } from 'react';
import BarsOutline from '@/assets/icons/bars-outline';
import FileOutline from '@/assets/icons/file-outline';
import PlayOutline from '@/assets/icons/play-outline';
import { File } from './file';
import { TabsCard } from '@/app/[locale]/client/_components/tabs-card';
import { TabsFilter } from '@/app/[locale]/client/_components/tabs-filter';
import UploadButton from '@/components/buttons/upload-button';

const tabsFilterData = [
  {
    label: 'الكل',
    icon: <BarsOutline className='size-3 lg:size-4' />,
  },
  {
    label: 'ملفات',
    icon: <FileOutline className='size-3 lg:size-4' />,
  },
  {
    label: 'فيديوهات',
    icon: <PlayOutline className='size-3 lg:size-4' />,
  },
];

export const Atthachments = () => {
  const [tab, setTab] = useState('مرفقاتى');
  const [filterTab, setFilterTab] = useState('الكل');
  const [files, setFiles] = useState([]);

  const onUpload = (e) => {
    setFiles([...files, e.target.files[0]]);
  };

  const filterFiles = () => {
    if (filterTab === 'ملفات') {
      return files.filter(
        (f) => !f?.type?.includes('video')
      );
    } else if (filterTab === 'فيديوهات') {
      return files.filter((f) =>
        f?.type?.includes('video')
      );
    } else {
      return files;
    }
  };

  return (
    <div className='flex flex-col lg:flex-row gap-5'>
      <TabsCard
        tabs={['مرفقاتى', 'مشاركات']}
        setTab={setTab}
        tab={tab}
      />

      <Card className='space-y-5'>
        {/* FILTER */}
        <TabsFilter
          setTab={setFilterTab}
          data={tabsFilterData}
          tab={filterTab}
        />

        {/* FILES */}
        <div className='min-h-80 space-y-5'>
          {files?.length === 0 && (
            <div className='text-center text-black text-xs lg:text-base h-80 flex items-center justify-center'>
              لا يوجد ملفات
            </div>
          )}

          {files?.length > 0 &&
            filterFiles()?.map((f) => (
              <File key={f?.name} file={f} />
            ))}
        </div>

        {/* UPLOAD BUTTON */}
        <UploadButton onUpload={onUpload} />
      </Card>
    </div>
  );
};

'use client';

import { useState } from 'react';

import { File } from './file';
import Card from '@/components/card';
import UploadButton from '@/components/buttons/upload-button';

export const Attachments = () => {
  const [files, setFiles] = useState([]);

  const onUpload = (e) => {
    setFiles([...files, e.target.files[0]]);
  };

  return (
    <Card title='مرفقاتي'>
      {/* FILES */}
      <div className='min-h-80 space-y-5'>
        {files?.length === 0 && (
          <div className='text-center text-xs lg:text-base h-80 flex items-center justify-center font-bold text-grayDark'>
            لا يوجد مرفقات حاليا
          </div>
        )}

        {files?.length > 0 &&
          files?.map((f) => (
            <File key={f?.name} file={f} />
          ))}
      </div>

      {/* UPLOAD BUTTON */}
      <UploadButton onUpload={onUpload} />
    </Card>
  );
};

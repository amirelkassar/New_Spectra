'use client';

import { Attachment } from '@/app/[locale]/(dashboard)/client/_components/child';
import UploadInput from '@/components/inputs/upload-input';
import dayjs from 'dayjs';

const DATA = [
  {
    fileName: 'Prescription.pdf',
    size: '1.2 MB',
    date: '2024-10-26T10:23:37.249Z',
  },
  {
    fileName: 'Prescription.pdf',
    size: '1.2 MB',
    date: '2024-10-26T10:23:37.249Z',
  },
];

export const Files = () => {
  return (
    <div className='space-y-5'>
      <h3 className='font-bold text-sm lgl:text-xl border-b border-grayLight pb-3'>
        الملفات
      </h3>

      <UploadInput />

      <div className='flex flex-wrap gap-5'>
        {DATA?.map((item, i) => (
          <File key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

const File = ({ fileName = '', date = '', size = '' }) => {
  return (
    <Attachment>
      <Attachment.Icon />
      <div>
        <Attachment.Name>{fileName}</Attachment.Name>
        <Attachment.SizeAndDate>
          {size} . {dayjs(date).locale('en').format('DD MMM, YYYY')}
        </Attachment.SizeAndDate>
      </div>
    </Attachment>
  );
};

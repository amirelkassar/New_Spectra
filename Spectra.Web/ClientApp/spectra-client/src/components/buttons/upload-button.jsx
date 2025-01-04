'use client';

import Button from '@/components/button';
import UploadIcon from '@/assets/icons/upload-icon';
import { cn } from '@/lib/utils';

const UploadButton = ({
  label = 'رفع ملف',
  onUpload = () => {},
  className = '',
  ...props
}) => {
  return (
    <Button
      variant='secondary'
      className={cn(
        'gap-3 rounded-lg ms-auto px-2 w-full max-w-40  py-2',
        className
      )}
    >
      <label className='flex items-center justify-center gap-3 cursor-pointer w-full h-full'>
        <input
          {...props}
          onChange={onUpload}
          type='file'
          className='hidden'
          accept='image/*,video/*,.pdf'
        />
        <UploadIcon fill='white' className='size-6' />
        <span className='!text-xs lg:!text-base font-semibold'>{label}</span>
      </label>
    </Button>
  );
};

export default UploadButton;

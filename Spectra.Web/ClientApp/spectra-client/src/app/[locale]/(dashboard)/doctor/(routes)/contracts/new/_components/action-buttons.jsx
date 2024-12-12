'use client';

import DraftIcon from '@/assets/icons/draft';
import Button from '@/components/button';

export const ActionButtons = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row gap-4 ms-auto pt-20 lg:max-w-sm *:flex-1'>
      <Button className='min-h-14'>
        حفظ كمسودة
        <DraftIcon className='size-6' />
      </Button>

      <Button className='min-h-14' variant='secondary'>
        ارسال
      </Button>
    </div>
  );
};

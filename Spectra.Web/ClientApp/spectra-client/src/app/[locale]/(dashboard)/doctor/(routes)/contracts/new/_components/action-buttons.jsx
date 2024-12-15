'use client';

// import DraftIcon from '@/assets/icons/draft';
import Button from '@/components/button';
import { useNewContract } from '../../_hooks/use-new-contract';

export const ActionButtons = () => {
  const { disabled, onSubmit, isPending } = useNewContract();

  return (
    <div className='flex flex-col-reverse md:flex-row gap-4 ms-auto pt-20 lg:max-w-sm *:flex-1'>
      {/* <Button className='min-h-14'>
        حفظ كمسودة
        <DraftIcon className='size-6' />
      </Button> */}

      <Button
        disabled={disabled || isPending}
        onClick={onSubmit}
        className='min-h-14'
        variant='secondary'
      >
        ارسال
      </Button>
    </div>
  );
};

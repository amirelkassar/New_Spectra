'use client';

import PlusInsideCircleIcon from '@/assets/icons/plus-inside-circle';
import Button from '@/components/button';

export const AddChild = () => {
  return (
    <div className='inline'>
      <Button variant='blueLight'>
        <PlusInsideCircleIcon />
        <span>اضافة طفل</span>
      </Button>
    </div>
  );
};

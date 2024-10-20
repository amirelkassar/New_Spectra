'use client';

import PlusInsideCircleIcon from '@/assets/icons/plus-inside-circle';
import Button from '@/components/button';

export const AddButton = ({ label = '' }) => {
  return (
    <div className='inline'>
      <Button variant='blueLight'>
        <PlusInsideCircleIcon />
        <span>{label}</span>
      </Button>
    </div>
  );
};

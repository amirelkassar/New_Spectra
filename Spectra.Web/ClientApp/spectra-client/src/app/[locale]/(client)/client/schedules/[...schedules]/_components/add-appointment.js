'use client';

import PlusInsideCircleIcon from '@/assets/icons/plus-inside-circle';
import Button from '@/components/button';

export const AddAppointment = () => {
  return (
    <div className='inline'>
      <Button variant='blueLight'>
        <PlusInsideCircleIcon />
        <span>حجز ميعاد</span>
      </Button>
    </div>
  );
};

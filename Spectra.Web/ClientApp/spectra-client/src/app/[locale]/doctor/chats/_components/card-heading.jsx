'use client';
import PlusInsideCircleIcon from '@/assets/icons/plus-inside-circle';

export const CardHeading = ({ label = '' }) => {
  return (
    <div className='text-black text-sm lg:text-medium flex items-center justify-between pb-3 lg:border-b lg:border-grayMedium'>
      <h2>{label}</h2>

      <button>
        <PlusInsideCircleIcon className='size-7 lg:size-8' />
      </button>
    </div>
  );
};

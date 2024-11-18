'use client';

import toast from 'react-hot-toast';

import FilledCheck from '@/assets/icons/filled-check';
import Spinner from '@/assets/icons/spinner';

export const Toast = () => {
  return toast;
};

const Success = (message = '') => {
  if (!message) return null;

  return toast(
    () => (
      <div className='flex items-center gap-5 *:shrink-0 relative'>
        <FilledCheck className='text-greenMain' />

        <p className='text-xs mdl:text-base font-medium'>
          {message}
        </p>
      </div>
    ),
    {
      className:
        'h-14 border-b-[3px] border-greenMain rounded-xl shadow-md',
      style: {
        background:
          'linear-gradient(90.87deg, #FFFFFF 60.75%, #DBF3F6 96.31%)',
        boxShadow:
          '0px 8px 10px 0px rgba(0, 0, 0, 0.2), 0px 6px 30px 0px rgba(0, 0, 0, 0.12), 0px 16px 24px 0px rgba(0, 0, 0, 0.14)',
      },
    }
  );
};

Toast.Success = Success;

const Loading = (message = 'جاري الارسال') => {
  return toast(
    () => (
      <div className='flex flex-col items-center gap-2 *:shrink-0 relative'>
        <Spinner className='text-grayDark animate-spin' />

        <p className='text-xs mdl:text-base font-medium'>
          {message}
        </p>
      </div>
    ),
    {
      duration: 10000,
      className:
        '!h-fit border-b-[3px] border-grayDark rounded-xl shadow-md',
      style: {
        background:
          'linear-gradient(90.87deg, #FFFFFF 60.75%, #EBEBEB 96.31%)',
        boxShadow:
          '0px 8px 10px 0px rgba(0, 0, 0, 0.2), 0px 6px 30px 0px rgba(0, 0, 0, 0.12), 0px 16px 24px 0px rgba(0, 0, 0, 0.14)',
      },
    }
  );
};

Toast.Loading = Loading;

Toast.Dismiss = toast.dismiss;

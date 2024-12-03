'use client';

import toast from 'react-hot-toast';

import FilledCheck from '@/assets/icons/filled-check';
import Spinner from '@/assets/icons/spinner';
import CloseIcon from '@/assets/icons/close';
import GetErrorMsg from './getErrorMsg';

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

const Error = (message = '') => {
  if (!message) return null;

  return toast(
    () => (
      <div className='flex items-center gap-5 *:shrink-0 relative'>
        <CloseIcon className='size-5' />

        <p className='text-xs mdl:text-base font-medium'>
          {message}
        </p>
      </div>
    ),
    {
      className:
        'h-14 border-b-[3px] border-red rounded-xl shadow-md',
      style: {
        background:
          'linear-gradient(90.87deg, #FFFFFF 60.75%, #FFB1B1 96.31%)',
        boxShadow:
          '0px 8px 10px 0px rgba(0, 0, 0, 0.2), 0px 6px 30px 0px rgba(0, 0, 0, 0.12), 0px 16px 24px 0px rgba(0, 0, 0, 0.14)',
      },
      duration: 4000,
    }
  );
};

Toast.Error = Error;

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

const Submit = (
  promise,
  options = {
    success: '',
    loading: '',
    error: '',
    onSuccess: () => {},
    onError: () => {},
  }
) => {
  if (!promise) return;
  return toast.promise(
    promise,
    {
      loading: () => (
        <div className='flex flex-col items-center gap-2 *:shrink-0 relative'>
          <Spinner className='text-grayDark animate-spin' />

          <p className='text-xs mdl:text-base font-medium'>
            {options.loading || 'جاري الارسال'}
          </p>
        </div>
      ),
      success: (res) => {
        if (options?.onSuccess) options?.onSuccess(res);
        return (
          <div className='flex items-center gap-5 *:shrink-0 relative'>
            <FilledCheck className='text-greenMain' />

            <p className='text-xs mdl:text-base font-medium'>
              {options.success || 'تم الارسال بنجاح'}
            </p>
          </div>
        );
      },
      error: (err) => {
        if (options?.onError) options?.onError(err);
        const generalError = GetErrorMsg(err, 'general');
        // if (!generalError) return;
        return (
          <div className='flex items-center gap-5 *:shrink-0 relative max-w-full'>
            <CloseIcon className='size-5' />

            <p className='text-xs mdl:text-base font-medium overflow-hidden max-w-[90%]'>
              {generalError ||
                options.error ||
                'حدث خطأ ما'}
            </p>
          </div>
        );
      },
    },
    {
      className: 'rounded-xl shadow-md *:group',
      style: {
        boxShadow:
          '0px 8px 10px 0px rgba(0, 0, 0, 0.2), 0px 6px 30px 0px rgba(0, 0, 0, 0.12), 0px 16px 24px 0px rgba(0, 0, 0, 0.14)',
      },
      success: {
        duration: 2000,
        className: 'border-b-[3px] border-greenMain',
        icon: null,
      },
      error: {
        duration: 4000,
        className: 'border-b-[3px] border-red',
        icon: null,
      },
      loading: {
        className: 'border-b-[3px] border-grayDark',
        icon: null,
      },
    }
  );
};

Toast.Promise = Submit;

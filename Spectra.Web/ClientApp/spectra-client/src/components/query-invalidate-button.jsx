/* eslint-disable no-unused-vars */
'use client';

import { useQueryClient } from '@tanstack/react-query';
import Button from './button';
import { Toast } from './toast';

export const QueryInvalidateButton = () => {
  if (process.env.NODE_ENV === 'development') {
    return <InvalidateButton />;
  }
};

const InvalidateButton = () => {
  const queryClient = useQueryClient();

  const onClick = () => {
    const initialQueryKey = 'employee.contract';
    const initialQueries = {
      skipCount: 0,
      maxCount: 5,
    };
    queryClient.refetchQueries({
      predicate: (query) => query.queryKey[0] === initialQueryKey,
    });
  };

  return (
    <Button
      className='fixed top-7 end-40 z-[999] rounded-full !p-3 size-16 uppercase'
      onClick={onClick}
      variant='secondary'
    >
      fetch
    </Button>
  );
};

const ToastButton = () => {
  const onClick = () => {
    Toast.Notification('تم تسجيل مقدم خدمة جديد');
  };

  return (
    <Button
      className='fixed top-24 end-10 z-[999]'
      onClick={onClick}
      variant='secondary'
    >
      toast
    </Button>
  );
};

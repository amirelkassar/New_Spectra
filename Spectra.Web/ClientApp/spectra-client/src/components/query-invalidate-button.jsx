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
    const initialQueryKey = 'admin.staff';
    const initialQueries = {
      skipCount: 0,
      maxCount: 5,
    };
    queryClient.refetchQueries({
      predicate: (query) => query.queryKey[0] === initialQueryKey,
      exact: false,
    });
  };

  return (
    <Button
      className='fixed top-24 end-10 z-[999]'
      onClick={onClick}
      variant='secondary'
    >
      Invalidate
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

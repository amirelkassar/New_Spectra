import { forwardRef } from 'react';

import { TimeInput as TimeInputBase } from '@nextui-org/date-input';
import { cn } from '@/lib/utils';

export const TimeInput = forwardRef((props, ref) => {
  return (
    <TimeInputBase
      {...props}
      ref={ref}
      dir='ltr'
      size={props?.size || 'lg'}
      autoFocus={props?.autoFocus || false}
      classNames={{
        ...props?.classNames,
        base: cn('w-fit', props?.classNames?.base),
        inputWrapper: cn(
          'flex flex-row items-center w-fit gap-7 shadow-none',
          props?.classNames?.inputWrapper
        ),
        label: cn(
          'text-base font-normal text-grayDark',
          props?.classNames?.label
        ),
        innerWrapper: cn('h-16', props?.classNames?.innerWrapper),
        input: cn(
          'rtl:flex-row-reverse gap-2',
          props?.classNames?.input
        ),
        segment: cn(
          'text-2xl font-bold odd:size-14 odd:flex odd:items-center odd:justify-center odd:rounded-xl odd:border-2 odd:border-grayLight odd:focus:border-transparent odd:focus:bg-blueLight odd:focus:shadow-md [&:nth-child(5)]:-ml-2',
          props?.classNames?.segment
        ),
      }}
    />
  );
});

TimeInput.displayName = 'TimeInput';

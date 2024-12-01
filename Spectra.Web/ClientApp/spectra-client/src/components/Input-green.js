import { forwardRef } from 'react';
import { TextInput } from '@mantine/core';
import { cn } from '@/lib/utils';

const InputGreen = forwardRef((props, ref) => {
  return (
    <TextInput
      {...props}
      ref={ref}
      size={props.size || 'lg'}
      classNames={{
        ...props.classNames,
        input: cn(
          'text-xs md:text-base border-greenMain w-full rounded-lg mdl:rounded-xl peer',
          props?.classNames?.input
        ),
        label: cn(
          'text-xs md:text-base mb-2',
          props?.classNames?.label
        ),
        section: cn(
          'text-black font-bold',
          props?.classNames?.section
        ),
      }}
    />
  );
});

InputGreen.displayName = 'InputGreen';

export default InputGreen;

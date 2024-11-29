import { forwardRef } from 'react';
import { TextInput, TextInputProps } from '@mantine/core';
import { cn } from '@/lib/utils';

/**
 * @typedef {Object} TextInputProps
 */

/**
 * @param {TextInputProps} props
 * @param {React.Ref<HTMLInputElement>} ref
 */

const InputGreen = forwardRef(({ ...props }, ref) => {
  return (
    <TextInput
      {...props}
      ref={ref}
      size={props?.size || 'lg'}
      classNames={{
        ...props?.classNames,
        input: cn(
          'text-xs md:text-base border-greenMain w-full rounded-lg mdl:rounded-xl peer',
          props?.classNames?.input
        ),
        label: cn(
          'text-xs md:text-base mb-2',
          props?.classNames?.label
        ),
      }}
    />
  );
});

InputGreen.displayName = 'InputGreen';

export default InputGreen;

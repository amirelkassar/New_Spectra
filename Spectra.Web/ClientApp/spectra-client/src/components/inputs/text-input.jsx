import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { TextInput as MantineTextInput } from '@mantine/core';

const TextInput = forwardRef((props, ref) => {
  return (
    <MantineTextInput
      {...props}
      ref={ref}
      size={props?.size || 'md'}
      classNames={{
        ...props.classNames,
        input: cn(
          'rounded-lg font-Regular placeholder:font-normal focus:border-greenMain read-only:border-transparent read-only:p-0 read-only:focus:border-transparent read-only:focus-within:border-transparent read-only:font-bold',
          props?.classNames?.input
        ),
        label: cn(
          `text-base mdl:text-xl mb-2 ps-1`,
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

TextInput.displayName = 'TextInput';

export default TextInput;

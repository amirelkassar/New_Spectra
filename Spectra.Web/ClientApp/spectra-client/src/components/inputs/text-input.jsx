import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import {
  TextInput as MantineTextInput,
  TextInputProps,
} from '@mantine/core';

/**
 * @typedef {Object} TextInputProps
 */

/**
 * @param {TextInputProps} props
 * @param {React.Ref<HTMLInputElement>} ref
 */

const TextInput = forwardRef(
  (
    {
      size = 'md',
      labelClassName = '',
      inputClassName = '',
      ...props
    },
    ref
  ) => {
    return (
      <MantineTextInput
        {...props}
        ref={ref}
        size={props?.size || size}
        classNames={{
          input: cn(
            'rounded-lg font-Regular placeholder:font-normal focus:border-greenMain read-only:border-transparent read-only:p-0 read-only:focus:border-transparent read-only:focus-within:border-transparent read-only:font-bold',
            inputClassName
          ),
          label: cn(
            `text-base mdl:text-xl mb-2 ps-1`,
            labelClassName
          ),
        }}
      />
    );
  }
);

TextInput.displayName = 'TextInput';

export default TextInput;

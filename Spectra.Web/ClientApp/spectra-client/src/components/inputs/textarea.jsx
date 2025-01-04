import { cn } from '@/lib/utils';
import {
  Textarea as MantineTextarea,
  // eslint-disable-next-line no-unused-vars
  TextareaProps,
} from '@mantine/core';
import { forwardRef } from 'react';

/**
 * @typedef {Object} TextareaProps

 */

/**
 * @param {TextareaProps} props
 */

export const Textarea = forwardRef(({ ...props }, ref) => {
  return (
    <MantineTextarea
      ref={ref}
      {...props}
      size={props.size || 'lg'}
      radius={props.radius || 'md'}
      classNames={{
        ...props.classNames,
        input: cn(
          'focus-within:border-greenMain active:border-greenMain',
          props.classNames?.input
        ),
        label: cn(
          'text-base mdl:text-xl mb-2 ps-1',
          props.classNames?.label
        ),
      }}
      label={props.label}
    />
  );
});

Textarea.displayName = 'Textarea';

import { cn } from '@/lib/utils';
import { Textarea as MantineTextarea, TextareaProps } from '@mantine/core';

/**
 * @typedef {Object} TextareaProps

 */

/**
 * @param {TextareaProps} props
 */

export const Textarea = ({ ...props }) => {
  return (
    <MantineTextarea
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
};

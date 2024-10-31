import { cn } from '@/lib/utils';
import { Textarea as MantineTextarea } from '@mantine/core';

export const Textarea = ({ ...props }) => {
  return (
    <MantineTextarea
      {...props}
      size={props.size || 'lg'}
      radius={props.radius || 'md'}
      classNames={{
        input: cn(
          'focus-within:border-greenMain active:border-greenMain',
          props.classNames?.input
        ),
        label: cn(
          'text-xs lg:text-base mb-2 ps-1',
          props.classNames?.label
        ),
      }}
      label={props.label}
    />
  );
};

import { cn } from '@/lib/utils';
import { PasswordInput as MantinePasswordInput } from '@mantine/core';

const PasswordInput = ({ ...props }) => {
  return (
    <MantinePasswordInput
      {...props}
      size={props.size || 'lg'}
      classNames={{
        ...props.classNames,
        input: cn(
          'rounded-lg focus:border-greenMain focus-within:border-greenMain  placeholder:font-normal',
          props.classNames?.input
        ),
        label: cn(
          'text-base mdl:text-xl mb-2 ps-1',
          props.classNames?.label
        ),
        innerInput: cn(
          'rounded-lg focus:border-greenMain focus-within:border-greenMain text-left placeholder:font-normal',
          props.classNames?.innerInput
        ),
      }}
      styles={{
        ...props.styles,
        wrapper: {
          direction: 'ltr',
          ...props.styles?.input,
        },
      }}
    />
  );
};

export default PasswordInput;

import { cn } from '@/lib/utils';
import { TextInput as MantineTextInput } from '@mantine/core';

const TextInput = ({
  size = 'md',
  labelClassName = '',
  inputClassName = '',
  ...props
}) => {
  return (
    <MantineTextInput
      {...props}
      size={size}
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
};

export default TextInput;

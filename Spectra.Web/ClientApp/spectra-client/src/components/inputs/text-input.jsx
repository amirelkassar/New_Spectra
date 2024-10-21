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
          'rounded-lg placeholder:font-normal focus:border-greenMain',
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

import { TextInput as MantineTextInput } from '@mantine/core';
import { TextInputProps } from '@mantine/core';

const TextInput = ({ size = 'md', ...props }: TextInputProps) => {
  return (
    <MantineTextInput
      {...props}
      size={size}
      classNames={{
        input: 'rounded-lg focus:border-greenMain',
        label: 'text-xs lg:text-base mb-2 ps-1',
      }}
    />
  );
};

export default TextInput;

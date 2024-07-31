import { MantineComponent, TextInput as MantineTextInput } from '@mantine/core';

const TextInput = ({ size = 'md', ...props }) => {
  return (
    <MantineTextInput
      {...props}
      size={size}
      classNames={{
        input: 'rounded-xl focus:border-greenMain',
        label: 'font-bold text-xs lg:text-base mb-2 ps-1',
      }}
    />
  );
};

export default TextInput;

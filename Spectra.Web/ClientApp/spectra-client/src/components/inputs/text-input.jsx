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
        input: `rounded-lg focus:border-greenMain ${inputClassName}`,
        label: `text-xs lg:text-base mb-2 ps-1 ${labelClassName}`,
      }}
    />
  );
};

export default TextInput;

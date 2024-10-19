import { PasswordInput as MantinePasswordInput } from '@mantine/core';

const PasswordInput = ({ size = 'md', ...props }) => {
  return (
    <MantinePasswordInput
      {...props}
      size={size}
      classNames={{
        input: 'rounded-lg focus:!border-greenMain',
        label: 'text-xs lg:text-base mb-2 ps-1',
        wrapper: 'focus:border-greenMain',
      }}
    />
  );
};

export default PasswordInput;

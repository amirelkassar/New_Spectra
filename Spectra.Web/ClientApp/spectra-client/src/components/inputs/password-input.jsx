import { PasswordInput as MantinePasswordInput } from '@mantine/core';

const PasswordInput = ({
  size = 'md',
  labelClassName = '',
  inputClassName = '',
  ...props
}) => {
  return (
    <MantinePasswordInput
      {...props}
      size={size}
      classNames={{
        input:
          'rounded-lg focus:border-greenMain focus-within:border-greenMain  placeholder:font-normal',
        label: `text-base mdl:text-xl mb-2 ps-1 ${labelClassName}`,
        innerInput:
          'rounded-lg focus:border-greenMain focus-within:border-greenMain  placeholder:font-normal',
      }}
    />
  );
};

export default PasswordInput;

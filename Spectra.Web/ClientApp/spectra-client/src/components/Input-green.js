import React from 'react';
import { TextInput } from '@mantine/core';

const InputGreen = ({
  type = 'text',
  className = '',
  ...props
}) => {
  return (
    <TextInput
      {...props}
      type={type}
      size='lg'
      classNames={{
        input:
          'text-xs md:text-base border-greenMain w-full rounded-lg mdl:rounded-xl',
        label: 'text-xs md:text-base mb-2',
      }}
      className={className}
    />
  );
};

export default InputGreen;

'use client';
import ArrowDownIcon from '@/assets/icons/arrow-down';
import { Select } from '@mantine/core';
import { useState } from 'react';
import { SelectProps } from '@mantine/core';
import { cn } from '@/lib/utils';

/**
 * @typedef {Object} SelectProps

 */

/**
 * @param {SelectProps} props
 */

const SelectInput = ({
  label = '',
  size = 'md',
  data = [],
  labelClassName = '',
  inputClassName = '',
  ...props
}) => {
  const [opened, setOpened] = useState(false);

  return (
    <Select
      {...props}
      checkIconPosition='right'
      allowDeselect={props.allowDeselect || false}
      size={size}
      label={label}
      data={data}
      onDropdownOpen={() => setOpened(true)}
      onDropdownClose={() => setOpened(false)}
      rightSection={
        <span className={opened ? 'rotate-180' : ''}>
          <ArrowDownIcon />
        </span>
      }
      classNames={{
        input: cn(
          'rounded-lg group focus:border-greenMain placeholder:font-normal',
          inputClassName
        ),
        label: cn(
          'text-base mdl:text-xl mb-2 ps-1',
          labelClassName
        ),
      }}
    />
  );
};

export default SelectInput;

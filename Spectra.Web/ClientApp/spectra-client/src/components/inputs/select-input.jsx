'use client';
import ArrowDownIcon from '@/assets/icons/arrow-down';
import { Select } from '@mantine/core';
import { useState } from 'react';
import { SelectProps } from '@mantine/core';

/**
 * @typedef {Object} SelectProps

 */

/**
 * @param {SelectProps} props
 */

const SelectInput = ({ label = '', data = [], ...props }) => {
  const [opened, setOpened] = useState(false);

  return (
    <Select
      {...props}
      checkIconPosition='right'
      allowDeselect={false}
      size='md'
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
        input: 'rounded-lg group focus:border-greenMain',
        label: 'text-xs lg:text-base mb-2 ps-1',
      }}
    />
  );
};

export default SelectInput;

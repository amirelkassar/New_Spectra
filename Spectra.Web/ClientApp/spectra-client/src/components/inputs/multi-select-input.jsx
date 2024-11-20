'use client';

import { MultiSelect } from '@mantine/core';
import { useState } from 'react';
import { MultiSelectProps } from '@mantine/core';
import { cn } from '@/lib/utils';
import { ArrowDownBlack } from '@/assets/icons/arrow-down-main-green';

/**
 * @typedef {Object} MultiSelectProps

 */

/**
 * @param {MultiSelectProps} props
 */

const MultiSelectInput = ({
  label = '',
  size = 'md',
  data = [],
  labelClassName = '',
  inputClassName = '',
  ...props
}) => {
  const [opened, setOpened] = useState(false);

  return (
    <MultiSelect
      {...props}
      size={size}
      label={label}
      data={data}
      checkIconPosition={props.checkIconPosition || 'right'}
      onDropdownOpen={() => setOpened(true)}
      onDropdownClose={() => setOpened(false)}
      rightSection={
        <span className={opened ? 'rotate-180' : ''}>
          <ArrowDownBlack />
        </span>
      }
      nothingFoundMessage={
        props.nothingFoundMessage ?? '!Nothing found'
      }
      classNames={{
        input: cn(
          'rounded-lg group focus:border-greenMain placeholder:font-normal focus-within:border-greenMain',
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

export default MultiSelectInput;

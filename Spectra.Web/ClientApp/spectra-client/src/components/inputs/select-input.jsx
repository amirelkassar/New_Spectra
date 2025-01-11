import { Select } from '@mantine/core';
// eslint-disable-next-line no-unused-vars
import { SelectProps } from '@mantine/core';

import { cn } from '@/lib/utils';
import { ArrowDownBlack } from '@/assets/icons/arrow-down-main-green';
import { forwardRef } from 'react';

/**
 * @typedef {Object} SelectProps

 */

/**
 * @param {SelectProps} props
 */

const SelectInput = forwardRef(({ ...props }, ref) => {
  return (
    <Select
      {...props}
      ref={ref}
      checkIconPosition={props.checkIconPosition || 'right'}
      allowDeselect={props.allowDeselect || false}
      rightSection={
        <ArrowDownBlack className='group-data-[size=sm]:size-3' />
      }
      nothingFoundMessage={
        props.nothingFoundMessage ?? '!No Data Found'
      }
      classNames={{
        ...props.classNames,
        input: cn(
          'rounded-lg group focus:border-greenMain placeholder:font-normal peer read-only:border-transparent read-only:p-0 read-only:focus:border-transparent read-only:focus-within:border-transparent read-only:font-bold',
          props.classNames?.input
        ),
        label: cn(
          'text-base mdl:text-xl mb-2 ps-1',
          props.classNames?.label
        ),
        section: cn(
          'peer-data-[expanded=true]:rotate-180 transition-transform peer-read-only:hidden',
          props.classNames?.section
        ),
        wrapper: cn('group', props.classNames?.wrapper),
      }}
    />
  );
});

SelectInput.displayName = 'SelectInput';

export default SelectInput;

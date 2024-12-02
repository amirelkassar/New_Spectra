import { Select } from '@mantine/core';
import { SelectProps } from '@mantine/core';

import { cn } from '@/lib/utils';
import { ArrowDownBlack } from '@/assets/icons/arrow-down-main-green';

/**
 * @typedef {Object} SelectProps

 */

/**
 * @param {SelectProps} props
 */

const SelectInput = ({ ...props }) => {
  return (
    <Select
      {...props}
      checkIconPosition={props.checkIconPosition || 'right'}
      allowDeselect={props.allowDeselect || false}
      rightSection={<ArrowDownBlack />}
      nothingFoundMessage={
        props.nothingFoundMessage ?? '!No Data Found'
      }
      classNames={{
        ...props.classNames,
        input: cn(
          'rounded-lg group focus:border-greenMain placeholder:font-normal peer',
          props.classNames?.input
        ),
        label: cn(
          'text-base mdl:text-xl mb-2 ps-1',
          props.classNames?.label
        ),
        section: cn(
          'peer-data-[expanded=true]:rotate-180 transition-transform',
          props.classNames?.section
        ),
      }}
    />
  );
};

export default SelectInput;

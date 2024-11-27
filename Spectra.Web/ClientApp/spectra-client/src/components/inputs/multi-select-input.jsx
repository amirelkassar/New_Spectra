'use client';

import { MultiSelect } from '@mantine/core';
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
  ...props
}) => {
  return (
    <MultiSelect
      {...props}
      size={size}
      label={label}
      data={data}
      checkIconPosition={props.checkIconPosition || 'right'}
      rightSection={<ArrowDownBlack className='' />}
      nothingFoundMessage={
        props.nothingFoundMessage ?? '!No Data Found'
      }
      classNames={{
        ...props.classNames,
        input: cn(
          'rounded-lg group focus:border-greenMain focus-within:border-greenMain peer',
          props.classNames?.input
        ),
        inputField: cn(
          'placeholder:text-transparent only:placeholder:text-grayDark',
          props.classNames?.inputField
        ),
        label: cn(
          'text-base mdl:text-xl mb-2 ps-1',
          props.classNames?.label
        ),
        pill: cn(
          'bg-blueLighter rounded-md font-bold text-xs mdl:text-base',
          props.classNames?.pill
        ),
        pillsList: cn('group', props.classNames?.pillsList),
        section: cn(
          'peer-data-[expanded=true]:rotate-180 transition-transform',
          props.classNames?.section
        ),
      }}
    />
  );
};

export default MultiSelectInput;

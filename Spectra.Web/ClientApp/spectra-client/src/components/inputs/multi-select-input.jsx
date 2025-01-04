'use client';

import { MultiSelect } from '@mantine/core';
// eslint-disable-next-line no-unused-vars
import { MultiSelectProps } from '@mantine/core';
import { cn } from '@/lib/utils';
import { ArrowDownBlack } from '@/assets/icons/arrow-down-main-green';

/**
 * @typedef {Object} MultiSelectProps

 */

/**
 * @param {MultiSelectProps} props
 */

const MultiSelectInput = ({ ...props }) => {
  return (
    <MultiSelect
      {...props}
      size={props?.size || 'lg'}
      checkIconPosition={props?.checkIconPosition || 'right'}
      rightSection={
        props?.rightSection || (
          <ArrowDownBlack className='group-data-[size=sm]:size-3' />
        )
      }
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
        wrapper: cn('group', props.classNames?.wrapper),
      }}
    />
  );
};

export default MultiSelectInput;

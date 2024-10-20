'use client';

import { FileInput as MantineFileInput, FileInputProps } from '@mantine/core';
import { useRef } from 'react';
import Button from '../button';
import ArrowRight from '@/assets/icons/arrow-right';

/**
 * @typedef {Object} FileInputProps

 */

/**
 * @param {FileInputProps} props
 */

const FileInput = ({ ...props }) => {
  const ref = useRef(null);

  return (
    <div className='flex items-end gap-3 max-w-full'>
      <MantineFileInput
        ref={ref}
        {...props}
        size='md'
        classNames={{
          root: 'flex-1 max-w-[70%]',
          input:
            'rounded-lg focus:border-greenMain text-overflow-ellipsis overflow-hidden text-ellipsis white-space-nowrap',
          label: 'text-xs lg:text-base mb-2 ps-1',
        }}
        clearable
      />
      <Button
        onClick={() => ref.current?.click()}
        variant='secondary'
        className='p-0 gap-3 font-bold px-2 lg:px-4 h-[42px] text-xs lg:text-sm rounded-lg'
      >
        <ArrowRight />
        رفع ملف
      </Button>
    </div>
  );
};

export default FileInput;

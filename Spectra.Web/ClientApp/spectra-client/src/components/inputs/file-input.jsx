'use client';

import { FileInput as MantineFileInput } from '@mantine/core';
import { useRef } from 'react';
import Button from '../button';
import ArrowRight from '@/assets/icons/arrow-right';
import { cn } from '@/lib/utils';

/**
 * @typedef {Object} FileInputProps

 */

/**
 * @param {FileInputProps} props
 */

const FileInput = ({ size = 'md', ...props }) => {
  const ref = useRef(null);

  return (
    <div className='flex items-end gap-3 max-w-full'>
      <MantineFileInput
        ref={ref}
        {...props}
        size={size}
        classNames={{
          root: 'flex-1',
          input:
            'rounded-lg focus:border-greenMain text-overflow-ellipsis overflow-hidden text-ellipsis white-space-nowrap *:text-base *:font-normal',
          label: 'text-base mdl:text-xl mb-2 ps-1',
        }}
        clearable
      />
      <Button
        onClick={() => ref.current?.click()}
        variant='secondary'
        className={cn(
          'p-0 gap-3 font-bold px-2 lg:px-4 h-[42px] text-xs lg:text-sm rounded-lg shrink-0',
          size === 'lg' && 'h-[50px]'
        )}
      >
        <ArrowRight />
        رفع ملف
      </Button>
    </div>
  );
};

export default FileInput;

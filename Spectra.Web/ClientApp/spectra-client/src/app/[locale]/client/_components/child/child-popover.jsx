'use client';
import { Popover } from '@mantine/core';
import { useState } from 'react';

import ArrowDownMainGreen from '@/assets/icons/arrow-down-main-green';
import { cn } from '@/lib/utils';
import Avatar from '@/components/avatar';
import { useLocale } from 'next-intl';

export const ChildPopover = ({
  data = [],
  disabled = false,
  defaultSelected = '',
  onChange = () => {},
}) => {
  const initialValue =
    data?.find((item) => item?.id === defaultSelected) ||
    data[0];
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(initialValue);

  if (data.length === 0) return null;
  return (
    <Popover
      position='bottom'
      width={'target'}
      opened={open}
      onChange={setOpen}
      disabled={disabled}
    >
      <Popover.Target>
        <div
          role='button'
          onClick={() => setOpen(!open)}
          className={cn(
            'bg-white w-full flex items-center justify-between rounded-xl cursor-pointer px-4 py-1 lg:px-5 lg:py-3 max-w-full border-2 border-greenLight lg:border-none',
            disabled && '!cursor-default opacity-70'
          )}
        >
          <Child className='hover:bg-white' {...selected} />

          {!disabled && (
            <span
              className={cn(
                'bg-blueLight rounded-full size-7 lg:size-12 items-center justify-center flex transition',
                {
                  'rotate-180': open,
                }
              )}
            >
              <ArrowDownMainGreen className='size-4 lg:size-7' />
            </span>
          )}
        </div>
      </Popover.Target>

      <div className='max-w-[1400px]'>
        <Popover.Dropdown className='shadow-md border-none space-y-5 px-0'>
          {data.map(
            (child) =>
              child?.id !== selected?.id && (
                <div
                  key={child.id}
                  role='button'
                  onClick={() => {
                    setSelected(child);
                    onChange(child?.id);
                    setOpen(false);
                  }}
                >
                  <Child {...child} />
                </div>
              )
          )}
        </Popover.Dropdown>
      </div>
    </Popover>
  );
};

const Child = ({
  id = '',
  avatar = '',
  name = '',
  diagnosis = '',
  className = '',
}) => {
  const locale = useLocale();
  return (
    <div
      data-id={id}
      className={cn(
        'flex items-center p-2 gap-3 rounded-lg transition hover:bg-blueLight',
        className
      )}
    >
      <Avatar
        className='size-[25px] mdl:size-[58px] min-w-max rounded-full inline-flex'
        src={avatar || ''}
        name={name}
      />

      <div className='text-black flex items-center text-xs mdl:text-base w-fit gap-3'>
        <h4 className='font-bold w-fit'>
          {locale === 'ar' ? 'الطفل' : 'Child'} / {name}
        </h4>
        <p className='w-fit'>{diagnosis}</p>
      </div>
    </div>
  );
};
